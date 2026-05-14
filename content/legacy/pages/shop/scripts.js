document.querySelectorAll('.check-row').forEach(c => c.addEventListener('click', e => { e.preventDefault(); c.classList.toggle('on'); }));
    document.querySelectorAll('.cat-tree > li > .cat-link').forEach(l => l.addEventListener('click', e => {
      if (e.target.closest('.cat-sub')) return;
      e.preventDefault();
      l.parentElement.classList.toggle('open');
    }));
    const productFitNotes = [
      ['70-150 hp', 'Hydraulic kit', 'Workshop bleed'],
      ['Luxe helm', '150 hp rated', '48h stock'],
      ['75 Ah', 'Deep-cycle', 'Vibration proof'],
      ['IP67', 'Outdoorbox', 'Fast charge'],
      ['12.6V / 20A', 'Smart cycle', 'Battery safe'],
      ['14-43 inch', 'Trailer bow', 'Stainless'],
      ['Cruiser part', 'Big ticket', 'Fit checked'],
      ['Comfort trim', 'Cruiser', 'Order desk'],
      ['Essential trim', 'Configurator', 'On request'],
      ['60 hp EFI', 'Long shaft', 'Power trim'],
      ['7 inch', 'CHIRP', 'ClearVu'],
      ['36V', '112 lb thrust', 'iPilot GPS']
    ];
    document.querySelectorAll('.pcard').forEach((card, index) => {
      const notes = productFitNotes[index];
      const anchor = card.querySelector('.pcard-stars');
      if (!notes || !anchor || card.querySelector('.pcard-specs')) return;
      const specs = document.createElement('div');
      specs.className = 'pcard-specs';
      specs.innerHTML = notes.map(note => `<span>${note}</span>`).join('');
      anchor.after(specs);
    });
    (function initQuickSearch(){
      const root = document.getElementById('quickSearch');
      if (!root) return;
      const input = document.getElementById('quickSearchInput');
      const results = document.getElementById('quickSearchResults');
      const toggles = document.querySelectorAll('.search-toggle');
      const closeControls = root.querySelectorAll('[data-search-close]');
      const rows = Array.from(document.querySelectorAll('.pcard')).map((card) => ({
        title: (card.querySelector('.pcard-name')?.textContent || '').trim(),
        brand: (card.querySelector('.pcard-brand')?.textContent || '').trim(),
        meta: (card.querySelector('.pcard-tag')?.textContent || '').trim(),
        price: (card.querySelector('.pcard-price .now')?.textContent || '').trim(),
        photo: card.querySelector('.pcard-photo img')?.getAttribute('src') || '',
        href: card.getAttribute('href') || '#'
      })).filter(row => row.title);

      const renderSearch = () => {
        const query = (input?.value || '').trim().toLowerCase();
        const filtered = rows.filter((row) => {
          const haystack = (row.title + ' ' + row.brand + ' ' + row.meta + ' ' + row.price).toLowerCase();
          return !query || haystack.includes(query);
        }).slice(0, 7);
        results.innerHTML = filtered.length
          ? filtered.map((row) => [
            '<a class="quick-result" href="' + row.href + '">',
              row.photo ? '<img src="' + row.photo + '" alt="' + row.title + '" loading="lazy"/>' : '<span></span>',
              '<span>',
                '<span class="qr-k">' + row.brand + '</span>',
                '<span class="qr-name">' + row.title + '</span>',
                '<span class="qr-meta">' + row.meta + '</span>',
              '</span>',
              '<span class="qr-price">' + row.price + '</span>',
            '</a>'
          ].join('')).join('')
          : '<div class="quick-result"><span></span><span><span class="qr-k">No exact match</span><span class="qr-name">Send us the fit brief</span><span class="qr-meta">We will match the product, install and delivery route.</span></span><span class="qr-price">Brief</span></div>';
      };
      const openSearch = () => {
        root.classList.add('is-open');
        root.setAttribute('aria-hidden', 'false');
        toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'true'));
        renderSearch();
        window.setTimeout(() => input && input.focus(), 40);
      };
      const closeSearch = () => {
        root.classList.remove('is-open');
        root.setAttribute('aria-hidden', 'true');
        toggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
      };
      toggles.forEach((toggle) => toggle.addEventListener('click', openSearch));
      closeControls.forEach((control) => control.addEventListener('click', closeSearch));
      input && input.addEventListener('input', renderSearch);
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && root.classList.contains('is-open')) closeSearch();
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
          event.preventDefault();
          openSearch();
        }
      });
    })();
