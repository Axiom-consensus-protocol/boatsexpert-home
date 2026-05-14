(function(){
  const STORAGE_KEY = 'bx_theme';
  const DAY = 'day';
  const NIGHT = 'night';

  function getTheme(){
    const url = new URLSearchParams(location.search).get('theme');
    if (url === DAY || url === NIGHT){
      localStorage.setItem(STORAGE_KEY, url);
      return url;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === DAY || stored === NIGHT) return stored;
    return DAY;
  }

  function apply(theme){
    const next = theme === NIGHT ? NIGHT : DAY;
    document.documentElement.setAttribute('data-theme', next);
    document.documentElement.style.colorScheme = next === NIGHT ? 'dark' : 'light';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === NIGHT ? '#010812' : '#0A2540');
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      const label = next === NIGHT ? 'Switch to day mode' : 'Switch to night mode';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
      btn.setAttribute('aria-pressed', next === NIGHT ? 'true' : 'false');
    });
  }

  function toggle(){
    const current = document.documentElement.getAttribute('data-theme') || getTheme();
    const next = current === NIGHT ? DAY : NIGHT;
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }

  apply(getTheme());

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    e.preventDefault();
    toggle();
  });

  document.documentElement.addEventListener('partials:ready', () => apply(getTheme()));

  window.BX_theme = {
    get: () => document.documentElement.getAttribute('data-theme') || getTheme(),
    set: theme => {
      if (theme !== DAY && theme !== NIGHT) return;
      localStorage.setItem(STORAGE_KEY, theme);
      apply(theme);
    },
    toggle
  };
})();
