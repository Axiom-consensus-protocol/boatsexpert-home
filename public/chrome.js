/**
 * BoatsExpert — shared chrome handlers for staging pages.
 *
 * Wires:
 *   1. Theme toggle  — [data-theme-toggle]  →  toggles html[data-theme] day/night,
 *                                              persists in localStorage("bx_theme")
 *   2. Search modal  — .search-toggle       →  opens #quickSearch with .is-open
 *                                              [data-search-close] / Esc / shade → close
 *                                              Ctrl+K / Cmd+K shortcut to open
 *   3. Mobile menu   — .mobile-menu         →  opens a primary-nav drawer for narrow
 *                                              viewports (built on demand)
 *
 * Runs after partials.js mounts the shared header / footer so that the buttons
 * exist in the DOM. Listens for the `partials:ready` event when available,
 * otherwise falls back to DOMContentLoaded.
 */
(function () {
  function onReady(fn) {
    if (document.querySelector('[data-partial]')) {
      document.documentElement.addEventListener('partials:ready', fn, { once: true });
      // Safety: if partials never resolve, still try after a delay.
      window.setTimeout(fn, 1500);
    } else if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  function setupTheme() {
    var doc = document.documentElement;
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-theme-toggle]');
      if (!btn) return;
      e.preventDefault();
      var next = doc.getAttribute('data-theme') === 'night' ? 'day' : 'night';
      doc.setAttribute('data-theme', next);
      doc.style.colorScheme = next === 'night' ? 'dark' : 'light';
      try { localStorage.setItem('bx_theme', next); } catch (err) {}
    });
  }

  function setupSearch() {
    var panel = document.getElementById('quickSearch');
    if (!panel) return;
    var toggles = document.querySelectorAll('.search-toggle');
    var input = document.getElementById('quickSearchInput');
    var closers = panel.querySelectorAll('[data-search-close]');

    function open() {
      panel.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
      document.body.classList.add('search-open');
      toggles.forEach(function (t) { t.setAttribute('aria-expanded', 'true'); });
      if (input) window.setTimeout(function () { input.focus(); }, 30);
    }
    function close() {
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('search-open');
      toggles.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
    }

    toggles.forEach(function (t) { t.addEventListener('click', function (e) { e.preventDefault(); open(); }); });
    closers.forEach(function (c) { c.addEventListener('click', function (e) { e.preventDefault(); close(); }); });

    document.addEventListener('keydown', function (e) {
      // Ctrl+K / Cmd+K — open
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (panel.classList.contains('is-open')) close(); else open();
      }
      if (e.key === 'Escape' && panel.classList.contains('is-open')) close();
    });
  }

  function setupMobileMenu() {
    var btn = document.querySelector('.mobile-menu');
    if (!btn) return;
    var nav = document.querySelector('header.site nav.primary');
    var actions = document.querySelector('header.site .nav-cta');
    if (!nav) return;

    // Build a simple drawer on first open. The nav itself is hidden on mobile
    // via chrome.css, so we just toggle a body class that re-shows it as a stack.
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = document.body.classList.toggle('mobile-nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close when a nav link is clicked
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('mobile-nav-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Esc closes
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('mobile-nav-open')) {
        document.body.classList.remove('mobile-nav-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  onReady(function () {
    setupTheme();
    setupSearch();
    setupMobileMenu();
  });
})();
