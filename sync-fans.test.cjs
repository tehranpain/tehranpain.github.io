const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { AccessError, createClient, exactFans, syncFans } = require('./sync-fans.js');

function fixture(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'rap-fans-'));
  const dataFile = path.join(dir, 'artists.js');
  const cacheFile = path.join(dir, 'cache.js');
  const previous = 'window.FANS_CACHE = {"1":"10","2":"20","3":"30"};\n'
    + 'window.FANS_CACHE_COUNTS = {"1":10,"2":20,"3":30};\n'
    + 'window.FANS_CACHE_FETCHED_AT = {"2":"2026-11-01T00:00:00Z"};\n';
  fs.writeFileSync(dataFile, 'window.RapMapData = { singers: [{name:"Artist A",neteaseId:"1"},'
    + '{name:"Artist B",neteaseId:"2"}], profiles: [{name:"Removed",neteaseId:"3",profileDisabled:true}] };');
  fs.writeFileSync(cacheFile, previous);
  t.after(() => {
    fs.unlinkSync(dataFile);
    fs.unlinkSync(cacheFile);
    fs.rmdirSync(dir);
  });
  return { dataFile, cacheFile, previous, reportFile: null, log: () => {} };
}
const result = (id, n) => ({ result: { artists: [{ id, fansSize: n }] } });
const partialClient = { request: async url => {
  if (url.includes('Artist%20A')) return result(1, 21);
  throw new Error('Temporary upstream failure');
} };

test('counts are accepted only for the exact artist ID', () => {
  assert.equal(exactFans(result(42, 30000), '43'), null);
  assert.equal(exactFans(result(42, 0), '42'), 0);
  assert.equal(exactFans(result(42, '15'), '42'), null);
});

test('an access refusal or redirect stops requests instead of following it', async () => {
  for (const code of [301, 429, -462]) {
    let calls = 0;
    const client = createClient({ delayMs:0, fetchFn:async (url, options) => {
      assert.equal(options.redirect, 'manual');
      calls++;
      return { status:code > 0 ? code : 200, ok:code < 0, json:async () => ({ code }) };
    } });
    await assert.rejects(client.request('/api/search/get'), AccessError);
    assert.equal(calls, 1);
  }
});

test('the probe leaves the previous cache byte for byte unchanged', async t => {
  const f = fixture(t);
  const stats = await syncFans({ ...f, artistIds:['1'], client:partialClient, write:false, minimumCoverage:1 });
  assert.equal(stats.updated, 1);
  assert.equal(stats.written, false);
  assert.equal(fs.readFileSync(f.cacheFile, 'utf8'), f.previous);
});

test('poor coverage or a blocked run never overwrite the last good cache', async t => {
  const f = fixture(t);
  const partial = await syncFans({ ...f, client:partialClient, minimumCoverage:.95 });
  assert.equal(partial.publishable, false);
  assert.equal(fs.readFileSync(f.cacheFile, 'utf8'), f.previous);
  const blocked = await syncFans({ ...f, client:{ request:async url => {
    if (url.includes('Artist%20A')) return result(1, 21);
    throw new AccessError('Rate limited');
  }} });
  assert.equal(blocked.blocked, true);
  assert.equal(blocked.written, false);
  assert.equal(fs.readFileSync(f.cacheFile, 'utf8'), f.previous);
});

test('eligible refreshes retain failed accounts and prune removed IDs', async t => {
  const f = fixture(t);
  const stats = await syncFans({ ...f, client:partialClient, minimumCoverage:.5 });
  assert.equal(stats.written, true);
  const window = {};
  require('node:vm').runInNewContext(fs.readFileSync(f.cacheFile, 'utf8'), { window });
  assert.deepEqual({ ...window.FANS_CACHE_COUNTS }, { '1':21, '2':20 });
  assert.equal(window.FANS_CACHE_FETCHED_AT['2'], '2026-11-01T00:00:00Z');
});
