(() => {
  if (document.body.dataset.mapTheme !== 'night') return;

  function bindArtwork(root, slots) {
    const paint = () => {
      for (const [target, selector] of slots()) {
        const image = target.querySelector(selector);
        // A failed or still-loading image must not leave the last artist's tint behind.
        const artwork = image?.complete && image.naturalWidth && !image.hidden
          ? 'url(' + JSON.stringify(image.currentSrc || image.src) + ')'
          : '';
        if (target.style.getPropertyValue('--night-artwork') !== artwork) {
          target.style.setProperty('--night-artwork', artwork);
        }
      }
    };
    new MutationObserver(paint).observe(root, {
      subtree: true, childList: true, attributes: true,
      attributeFilter: ['class', 'src', 'hidden', 'data-panel', 'data-profile-type']
    });
    root.addEventListener('load', paint, true);
    root.addEventListener('error', paint, true);
    paint();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('#map-home-panel');
    const mobile = document.querySelector('#mobile-control-dialog');
    const slide = '.home-release-slide.is-active .home-release-image img';
    if (home) bindArtwork(home, () => [[home, slide]]);
    if (mobile) {
      const sheet = mobile.querySelector('.mobile-panel-sheet');
      if (sheet) bindArtwork(mobile, () => [[sheet, slide]]);
    }

    const watchProfile = () => {
      const panel = document.querySelector('#artist-profile-panel');
      if (!panel) return;
      profileObserver.disconnect();
      bindArtwork(panel, () => [[panel, '.profile-hero-cover .profile-cover-avatar img']]);
    };
    const profileObserver = new MutationObserver(watchProfile);
    profileObserver.observe(document.body, { childList: true });
    watchProfile();
  });
})();
