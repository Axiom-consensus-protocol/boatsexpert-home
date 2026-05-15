(function initShopCards(){
  const productFitNotes = [
    ['Up to 150 hp', 'Hydraulic kit', '€932 sale'],
    ['BayStar Luxe', 'Hydraulic system', '€1,140 sale'],
    ['75 Ah', 'Optima BlueTop', '€433'],
    ['12.70 AV', 'Waterproof charger', '€294'],
    ['12.35 / 12.50 / 12.70 AV', '12.6V / 20A', '€183'],
    ['14-43 inch', 'Stainless tie-down', '€129.99 sale'],
    ['Beneteau', 'Antares 6 OB', '€44,600'],
    ['Beneteau', 'Antares 7 Comfort', '€54,002'],
    ['Beneteau', 'Antares 7 Essential', '€50,554'],
    ['Yamaha', 'F60FETL LAN A', 'Outboard'],
    ['Garmin', 'ECHOMAP Ultra 122sv', 'GT56UHD'],
    ['Minn Kota', 'Ultrex Quest 90/115', 'Electric motor']
  ];

  document.querySelectorAll('.pcard').forEach((card, index) => {
    const notes = productFitNotes[index];
    const anchor = card.querySelector('.pcard-stars');
    const reviewLine = anchor?.querySelector(':scope > span:last-child');
    if (reviewLine) reviewLine.textContent = 'Live BoatsExpert shop card';
    if (!notes || !anchor || card.querySelector('.pcard-specs')) return;
    const specs = document.createElement('div');
    specs.className = 'pcard-specs';
    specs.innerHTML = notes.map(note => `<span>${note}</span>`).join('');
    anchor.after(specs);
  });
})();

(function initShopFilters(){
  const sidebar = document.querySelector('aside.cats');
  const grid = document.querySelector('.pgrid');
  if (!sidebar || !grid) return;

  const cards = Array.from(grid.querySelectorAll('.pcard'));
  const countEl = document.querySelector('.toolbar .results-count');
  const headCount = sidebar.querySelector('.cats-head h3 em');
  const searchInput = document.querySelector('.toolbar .search-input input');
  const sortSelect = document.querySelector('.toolbar .sort-wrap select');
  const priceInputs = Array.from(sidebar.querySelectorAll('.price-inputs input'));
  const resetControls = sidebar.querySelectorAll('.reset');
  const categoryLinks = sidebar.querySelectorAll('[data-shop-filter]');
  const text = (node) => (node?.textContent || '').replace(/\s+/g, ' ').trim();
  const lower = (value) => String(value || '').toLowerCase();
  const normalizePrice = (value) => {
    const normalized = String(value || '').replace(/[^\d.,]/g, '');
    if (/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(normalized)) {
      return Number.parseFloat(normalized.replace(/,/g, '')) || 0;
    }
    if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(normalized)) {
      return Number.parseFloat(normalized.replace(/\./g, '').replace(',', '.')) || 0;
    }
    return Number.parseFloat(normalized.replace(',', '.')) || 0;
  };
  const classify = (raw) => {
    const categories = new Set();
    const haystack = lower(raw);
    if (/(baystar|seastar|hydraulic|steering)/.test(haystack)) categories.add('hydraulic steering');
    if (/(optima|rebelcell|battery|batteries|charger|outdoorbox|agm|12\.6v)/.test(haystack)) categories.add('batteries');
    if (/(beneteau|antares|finval|boats in stock|cruising)/.test(haystack)) categories.add('boats in stock');
    if (/(boatbuckle|tie-down|mount|bracket)/.test(haystack)) categories.add('mounts');
    if (/(yamaha|outboard|f60)/.test(haystack)) categories.add('outboard motors');
    if (/(garmin|echomap|sonar|chartplotter|transducer|sidevu)/.test(haystack)) categories.add('sonars');
    if (/(minn kota|ultrex|electric|trolling)/.test(haystack)) categories.add('electric motors');
    if (/(audio)/.test(haystack)) categories.add('marine audio');
    if (/(light|rigid)/.test(haystack)) categories.add('marine lights');
    if (/(navigation|quatix)/.test(haystack)) categories.add('navigation');
    return categories;
  };
  const records = cards.map((card, index) => {
    const raw = text(card);
    return {
      card,
      index,
      raw: lower(raw),
      price: normalizePrice(text(card.querySelector('.pcard-price .now'))),
      categories: classify(raw)
    };
  });
  const state = { category: 'all' };

  let empty = grid.querySelector('.shop-empty');
  if (!empty) {
    empty = document.createElement('div');
    empty.className = 'shop-empty';
    empty.innerHTML = '<b>No visible card matches this filter.</b><span>Clear filters or choose another BoatsExpert source department.</span>';
    grid.append(empty);
  }

  const selectedValues = (selector, attr) => Array.from(sidebar.querySelectorAll(selector + '.on'))
    .map((node) => lower(node.getAttribute(attr) || text(node.querySelector('.lbl'))));
  const priceBounds = () => {
    const min = normalizePrice(priceInputs[0]?.value || 0);
    const max = normalizePrice(priceInputs[1]?.value || 90000) || 90000;
    return [Math.min(min, max), Math.max(min, max)];
  };
  const categoryMatches = (record) => {
    if (state.category === 'all') return true;
    if (record.categories.has(state.category)) return true;
    return record.raw.includes(state.category);
  };
  const groupMatches = (record, selected, type) => {
    if (!selected.length) return true;
    return selected.some((value) => {
      if (type === 'state') {
        if (value === 'add to cart') return record.raw.includes('add');
        if (value === 'featured') return /(featured|big ticket|comfort trim|essential trim)/.test(record.raw);
        if (value === 'new') return /(new|electronics)/.test(record.raw);
        return record.raw.includes(value);
      }
      return record.raw.includes(value);
    });
  };
  const updateActiveCategory = () => {
    categoryLinks.forEach((link) => {
      const active = lower(link.getAttribute('data-shop-filter')) === state.category;
      link.classList.toggle('active', active);
      link.closest('li')?.classList.toggle('open', active && Boolean(link.parentElement?.querySelector('.cat-sub')));
    });
  };
  const sortVisible = (visible) => {
    const mode = lower(sortSelect?.value || 'default sorting');
    const sorted = [...visible];
    if (mode.includes('low')) sorted.sort((a, b) => a.price - b.price);
    if (mode.includes('high')) sorted.sort((a, b) => b.price - a.price);
    if (mode.includes('latest')) sorted.sort((a, b) => b.index - a.index);
    if (mode.includes('sale') || mode.includes('popularity') || mode.includes('rating')) {
      sorted.sort((a, b) => Number(b.raw.includes('sale')) - Number(a.raw.includes('sale')) || a.index - b.index);
    }
    sorted.forEach((record) => grid.append(record.card));
    grid.append(empty);
  };
  const applyFilters = () => {
    const query = lower(searchInput?.value || '');
    const states = selectedValues('[data-shop-state]', 'data-shop-state');
    const brands = selectedValues('[data-shop-brand]', 'data-shop-brand');
    const [minPrice, maxPrice] = priceBounds();
    const visible = records.filter((record) => {
      if (query && !record.raw.includes(query)) return false;
      if (!categoryMatches(record)) return false;
      if (!groupMatches(record, states, 'state')) return false;
      if (!groupMatches(record, brands, 'brand')) return false;
      return record.price >= minPrice && record.price <= maxPrice;
    });

    records.forEach((record) => {
      const show = visible.includes(record);
      record.card.hidden = !show;
      record.card.classList.toggle('is-filtered-out', !show);
    });
    sortVisible(visible);
    empty.hidden = visible.length !== 0;
    if (countEl) {
      const range = visible.length ? '1 - ' + visible.length : '0';
      countEl.innerHTML = 'Showing <b>' + range + '</b> of <b>942</b> products · visible cards filtered';
    }
    if (headCount) headCount.textContent = visible.length + ' shown';
    updateActiveCategory();
  };
  const resetFilters = (event) => {
    event?.preventDefault?.();
    state.category = 'all';
    sidebar.querySelectorAll('.check-row.on').forEach((row) => row.classList.remove('on'));
    if (searchInput) searchInput.value = '';
    if (priceInputs[0]) priceInputs[0].value = '€0';
    if (priceInputs[1]) priceInputs[1].value = '€90,000';
    if (sortSelect) sortSelect.value = sortSelect.options[0]?.value || sortSelect.options[0]?.text || '';
    applyFilters();
  };

  sidebar.querySelectorAll('.check-row').forEach((row) => {
    row.addEventListener('click', (event) => {
      event.preventDefault();
      row.classList.toggle('on');
      applyFilters();
    });
  });
  categoryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      state.category = lower(link.getAttribute('data-shop-filter') || 'all');
      applyFilters();
    });
  });
  priceInputs.forEach((input) => input.addEventListener('input', applyFilters));
  searchInput?.addEventListener('input', applyFilters);
  sortSelect?.addEventListener('change', applyFilters);
  resetControls.forEach((control) => control.addEventListener('click', resetFilters));
  applyFilters();
})();

(function initMobileShopFilterDock(){
  const sidebar = document.querySelector('aside.cats');
  const body = document.querySelector('.body');
  const main = body?.querySelector('main');
  if (!sidebar || !body || !main) return;

  const media = window.matchMedia('(max-width: 640px)');
  let frame = 0;

  const clearDock = () => {
    sidebar.classList.remove('is-mobile-fixed');
    body.classList.remove('shop-filter-docked');
    document.body.classList.remove('shop-filter-docked-page');
    document.documentElement.style.removeProperty('--shop-sticky-filter-height');
  };

  const sync = () => {
    frame = 0;
    if (!media.matches) {
      clearDock();
      return;
    }

    const topOffset = 80;
    const bodyRect = body.getBoundingClientRect();
    const bodyTop = bodyRect.top + window.scrollY;
    const bodyBottom = bodyRect.bottom + window.scrollY;
    const filterHeight = sidebar.offsetHeight;
    const start = bodyTop - topOffset;
    const end = bodyBottom - filterHeight - 24;
    const docked = window.scrollY >= start && window.scrollY <= end;

    sidebar.classList.toggle('is-mobile-fixed', docked);
    body.classList.toggle('shop-filter-docked', docked);
    document.body.classList.toggle('shop-filter-docked-page', docked);
    if (docked) {
      document.documentElement.style.setProperty('--shop-sticky-filter-height', filterHeight + 'px');
    } else {
      document.documentElement.style.removeProperty('--shop-sticky-filter-height');
    }
  };

  const requestSync = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(sync);
  };

  window.addEventListener('scroll', requestSync, { passive: true });
  window.addEventListener('resize', requestSync);
  media.addEventListener?.('change', requestSync);
  requestSync();
})();

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
      : '<div class="quick-result"><span></span><span><span class="qr-k">No exact match</span><span class="qr-name">No shop card in this prototype</span><span class="qr-meta">Clear the search or open the live BoatsExpert shop archive.</span></span><span class="qr-price">Clear</span></div>';
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
