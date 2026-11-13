(function (root) {
  // 按展示顺序填写；未提供作品时显示占位，不把示例当成真实发行信息。
  // 专辑示例：{ type: 'album', format: '专辑', artist: '歌手名', title: '作品名', image: './assets/releases/cover.jpg', albumId: '网易云专辑ID' }
  // Mixtape 使用 type: 'album', format: 'Mixtape'；专辑详情通过 rapmap:open-album 事件留待后续接入。
  // EP 使用 format: 'EP'；headline 为首页自定义标题，不会冒充正式专辑名。
  // 单曲示例：{ type: 'single', artist: '歌手名', title: '作品名', image: './assets/releases/cover.jpg', songId: '网易云歌曲ID' }
  // artist 必须对应已收录的歌手名或别名；artistLabel 可选，仅改变卡片上的显示名字。
  // 合作作品可使用 artists 列出多位歌手，分别打开其资料卡。
  // image 留空表示真实封面待补；单曲尚无 songId 时，仅使用已提供的 albumId 打开发行页。
  const releases = [
    {
      type: 'album', format: 'Mixtape', artist: 'THOME',
      title: 'SAYLESS MIXTAPE VOL.1', headline: 'THOME新Mixtape发布', albumId: '408811475',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/41/7a/a4/417aa464-31b2-12fb-7f60-8a29304ab1e9/cover.jpg/632x632bb.webp'
    },
    {
      type: 'album', format: 'EP', artist: '三火flame',
      headline: '三火flame新EP发布', albumId: '408322398',
      image: 'https://p1.music.126.net/RvJKkFCm7LAve3fL_l-YIQ==/109951174237715977.jpg?param=750y750'
    },
    {
      type: 'single', artist: 'Young Cash Jason', artists: ['Young Cash Jason', 'Lil Asian'],
      title: 'Sing My Song', headline: 'Young Cash Jason/Lil Asian新歌《Sing My Song》',
      albumId: '408819124',
      image: 'https://p1.music.126.net/ev_AmZAc4OR-fIaCL9vo2g==/109951174255317732.jpg?param=750y750'
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = releases;
  else root.RapFeaturedReleases = releases;
})(typeof window !== 'undefined' ? window : globalThis);
