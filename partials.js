/**
 * BoatsExpert — partials loader.
 *
 * Loads HTML fragments into mount points marked with [data-partial="name"].
 * Each fragment is fetched from /partials/<name>.html.
 *
 * Falls back to an inline <template id="partial-<name>"> embedded in the host
 * page so the prototype works without an HTTP server (file://).
 *
 * Runs synchronously before i18n.js so that data-i18n elements inside
 * partials are bound on first paint.
 *
 * Usage:
 *   <div data-partial="header"></div>
 *   <div data-partial="footer"></div>
 *
 *   <template id="partial-header">…</template>
 *   <template id="partial-footer">…</template>
 *
 *   <script src="partials.js"></script>
 *   <script src="i18n.js" defer></script>
 */
(function(){
  function inject(node, html){
    // Replace the mount node entirely with the partial markup so the
    // partial keeps its own outer wrappers (<header>, <footer>, etc.).
    const frag = document.createRange().createContextualFragment(html);
    node.replaceWith(frag);
  }

  function fromTemplate(name){
    const tpl = document.getElementById('partial-' + name);
    if (!tpl) return null;
    return tpl.innerHTML;
  }

  async function load(node){
    const name = node.getAttribute('data-partial');
    if (!name) return;

    // 1) Inline <template> — works on file:// and any server
    const inline = fromTemplate(name);
    if (inline){
      inject(node, inline);
      return;
    }

    // 2) Fetch from /partials/<name>.html
    try {
      const res = await fetch('partials/' + name + '.html', { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      inject(node, html);
    } catch (e) {
      console.warn('[partials] failed to load "' + name + '":', e);
    }
  }

  function markActiveNav(){
    // Highlight the primary nav link that matches the current page path.
    // Catalog.html → /Catalog (also matches /catalog/ paths if used later).
    const path = (location.pathname || '').toLowerCase();
    const file = path.split('/').pop() || '';
    const stem = file.replace(/\.html?$/i, '');
    document.querySelectorAll('header.site nav.primary a').forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (!href) return;
      const targetStem = href.split('/').pop().replace(/\.html?$/i, '');
      // Match if the link file matches current file, OR if the link points to
      // a subroute whose first segment equals the current file stem.
      const linkSeg = href.split('/').filter(Boolean)[0] || '';
      const isMatch =
        (stem && targetStem && stem === targetStem) ||
        (stem && linkSeg && stem === linkSeg);
      if (isMatch){
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  async function loadAll(){
    const nodes = Array.from(document.querySelectorAll('[data-partial]'));
    // Load sequentially to preserve DOM order
    for (const n of nodes) {
      await load(n);
    }
    markActiveNav();
    document.documentElement.dispatchEvent(new CustomEvent('partials:ready'));
    // If i18n has already mounted, re-apply translations to freshly inserted nodes
    if (window.BX_i18n && typeof window.BX_i18n.reload === 'function'){
      // No-op; i18n.js will re-apply via setLang at startup.
    }
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', loadAll);
  } else {
    loadAll();
  }
})();
