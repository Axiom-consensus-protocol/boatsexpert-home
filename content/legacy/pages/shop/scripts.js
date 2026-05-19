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
    if (reviewLine) reviewLine.textContent = 'Live Axiom Marine shop card';
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
  const compactSortLabels = () => {
    if (!sortSelect) return;
    const compact = window.matchMedia('(max-width: 640px)').matches;
    const labels = {
      'Default sorting': 'Default',
      'Average rating': 'Rating',
      'Price: low to high': 'Low price',
      'Price: high to low': 'High price'
    };
    sortSelect.querySelectorAll('option').forEach((option) => {
      const fullLabel = option.dataset.fullLabel || option.textContent.trim();
      option.dataset.fullLabel = fullLabel;
      if (!option.hasAttribute('value')) option.value = fullLabel;
      option.textContent = compact ? (labels[fullLabel] || fullLabel) : fullLabel;
    });
  };
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
  const groupMeta = {
    boats: {
      title: 'Boats in stock',
      lead: 'Beneteau stock boats are separated from small marine gear for clean desktop browsing.'
    },
    'motors-electronics': {
      title: 'Motors and electronics',
      lead: 'Yamaha, Garmin and Minn Kota source products grouped as rig-ready upgrades.'
    },
    'steering-rigging': {
      title: 'Steering and rigging',
      lead: 'BayStar hydraulic steering and BoatBuckle hardware kept in one service lane.'
    },
    power: {
      title: 'Power and charging',
      lead: 'Optima battery and Rebelcell chargers live in their own power section.'
    }
  };
  const groupOrder = ['boats', 'motors-electronics', 'steering-rigging', 'power'];
  const groupFor = (record) => {
    if (record.categories.has('boats in stock')) return 'boats';
    if (record.categories.has('hydraulic steering') || record.categories.has('mounts')) return 'steering-rigging';
    if (record.categories.has('batteries')) return 'power';
    if (record.categories.has('outboard motors') || record.categories.has('sonars') || record.categories.has('electric motors')) {
      return 'motors-electronics';
    }
    return 'steering-rigging';
  };
  records.forEach((record) => {
    const group = groupFor(record);
    record.group = group;
    record.card.dataset.shopGroup = group;
    record.card.classList.toggle('is-boat-card', group === 'boats');
  });
  const state = { category: 'all' };

  let empty = grid.querySelector('.shop-empty');
  if (!empty) {
    empty = document.createElement('div');
    empty.className = 'shop-empty';
    empty.innerHTML = '<b>No visible card matches this filter.</b><span>Clear filters or choose another Axiom Marine source department.</span>';
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
    const groupRank = (record) => groupOrder.indexOf(record.group);
    const inGroup = (a, b) => {
      if (mode.includes('low')) return a.price - b.price || a.index - b.index;
      if (mode.includes('high')) return b.price - a.price || a.index - b.index;
      if (mode.includes('latest')) return b.index - a.index;
      return a.index - b.index;
    };
    sorted.sort((a, b) => groupRank(a) - groupRank(b) || inGroup(a, b));
    if (mode.includes('sale') || mode.includes('popularity') || mode.includes('rating')) {
      sorted.sort((a, b) => (
        groupRank(a) - groupRank(b) ||
        Number(b.raw.includes('sale')) - Number(a.raw.includes('sale')) ||
        a.index - b.index
      ));
    }
    grid.querySelectorAll('.shop-group-title').forEach((node) => node.remove());
    records.forEach((record) => record.card.classList.remove('is-featured-card'));
    let featuredSet = false;
    groupOrder.forEach((group) => {
      const grouped = sorted.filter((record) => record.group === group);
      if (!grouped.length) return;
      const heading = document.createElement('div');
      const countLabel = grouped.length === 1 ? '1 item' : grouped.length + ' items';
      heading.className = 'shop-group-title';
      heading.innerHTML = '<span>' + groupMeta[group].title + '</span><small>' + groupMeta[group].lead + '</small><b>' + countLabel + '</b>';
      grid.append(heading);
      grouped.forEach((record) => {
        if (!featuredSet) {
          record.card.classList.add('is-featured-card');
          featuredSet = true;
        }
        grid.append(record.card);
      });
    });
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
      const compact = window.matchMedia('(max-width: 640px)').matches;
      countEl.innerHTML = compact
        ? '<b>' + range + '</b> shown · <b>942</b>'
        : 'Showing <b>' + range + '</b> of <b>942</b> products · visible cards filtered';
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
  window.addEventListener('resize', compactSortLabels);
  compactSortLabels();
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
      : '<div class="quick-result"><span></span><span><span class="qr-k">No exact match</span><span class="qr-name">No shop card in this prototype</span><span class="qr-meta">Clear the search or open the live Axiom Marine shop archive.</span></span><span class="qr-price">Clear</span></div>';
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
