(function (root) {
  // 按展示顺序填写；未提供作品时显示占位，不把示例当成真实发行信息。
  // 专辑示例：{ type: 'album', format: '专辑', artist: '歌手名', title: '作品名', image: './assets/releases/cover.jpg', albumId: '网易云专辑ID' }
  // Mixtape 使用 type: 'album', format: 'Mixtape'；专辑详情通过 rapmap:open-album 事件留待后续接入。
  // 单曲示例：{ type: 'single', artist: '歌手名', title: '作品名', image: './assets/releases/cover.jpg', songId: '网易云歌曲ID' }
  // artist 必须对应已收录的歌手名或别名；artistLabel 可选，仅改变卡片上的显示名字。
  const releases = [];
  if (typeof module !== 'undefined' && module.exports) module.exports = releases;
  else root.RapFeaturedReleases = releases;
})(typeof window !== 'undefined' ? window : globalThis);
