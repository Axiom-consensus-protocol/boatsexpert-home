const themePolishCss = `
body .legacy-fragment[data-legacy-fragment^="home:"],
body .legacy-fragment[data-legacy-fragment^="services:"],
body .legacy-fragment[data-legacy-fragment^="contact:"],
body .legacy-fragment[data-legacy-fragment^="catalog:"],
body .legacy-fragment[data-legacy-fragment^="shop:"]{
  --bx-page-bg:#F4EFE6;
  --bx-page-bg-2:#ECE4D2;
  --bx-page-panel:#FFFFFF;
  --bx-page-panel-2:#F9F5EC;
  --bx-page-field:#FFFCF6;
  --bx-page-ink:#0A2540;
  --bx-page-text:#1A1F2A;
  --bx-page-muted:#657284;
  --bx-page-faint:#93A2B1;
  --bx-page-line:#DDD3BD;
  --bx-page-line-strong:#C8B993;
  --bx-page-accent:#C68B3D;
  --bx-page-accent-strong:#8E5A1F;
  --bx-page-shadow:0 26px 74px -58px rgba(10,37,64,.48);
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"],
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"],
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"],
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"],
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"]{
  --bx-page-bg:#061827;
  --bx-page-bg-2:#081D30;
  --bx-page-panel:#0B2238;
  --bx-page-panel-2:#0F2A44;
  --bx-page-field:#071A2C;
  --bx-page-ink:#F4EFE6;
  --bx-page-text:#E8DDC9;
  --bx-page-muted:rgba(232,221,201,.72);
  --bx-page-faint:rgba(232,221,201,.5);
  --bx-page-line:rgba(244,239,230,.16);
  --bx-page-line-strong:rgba(244,239,230,.26);
  --bx-page-accent:#D6A056;
  --bx-page-accent-strong:#E3B46C;
  --bx-page-shadow:0 28px 80px -58px rgba(0,0,0,.88);
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .sec:not(.dark),
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .sec,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .type-strip,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .toolbar,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .body,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] section.fbrands,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-strip,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-studio,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .toolbar,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .body{
  background:
    radial-gradient(ellipse at 80% 0%, rgba(214,160,86,.08), transparent 42%),
    linear-gradient(180deg, var(--bx-page-bg) 0%, var(--bx-page-bg-2) 100%) !important;
  border-color:var(--bx-page-line) !important;
  color:var(--bx-page-text) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .toolbar,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .toolbar{
  background:rgba(6,24,39,.94) !important;
  box-shadow:0 18px 44px -34px rgba(0,0,0,.9) !important;
  backdrop-filter:blur(14px);
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .sec-head h2,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger h2,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .form-card h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .type-strip-head h2,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .filter-head h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-model,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-specs .v,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-price .v,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrands-head h2,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand .name,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand .meta .mn,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-strip-head h2,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-head h2,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-card h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-price,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cats-head h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-name,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-price .now,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .results-intro b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-head .l h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-head .r b{
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .field label,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .form-foot .note,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .results-count,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-tagline,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-brand .origin,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-specs .k,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-price .l,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-price .mo,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-meta .m,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand .desc,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand .meta .ml,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .results-count,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-head p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-card p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-price small,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-link,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-sub a,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-tag,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-stars,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-price .was,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-price .vat,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .results-intro p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-head .r{
  color:var(--bx-page-muted) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc-grid,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .htype-tiles,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrands-grid,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-tiles,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .results-intro,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-grid{
  background:var(--bx-page-line) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger-grid,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger-action,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .form-card,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .htype-tile,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] aside.filters,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .results-intel > div,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-tile,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] aside.cats,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-card:not(.dark),
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .results-intro > div,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-grid .b{
  background:
    linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.015)),
    var(--bx-page-panel) !important;
  border-color:var(--bx-page-line) !important;
  color:var(--bx-page-text) !important;
  box-shadow:var(--bx-page-shadow) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger-action:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .htype-tile:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-tile:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-card:not(.dark):hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-grid .b:hover{
  background:
    linear-gradient(180deg, rgba(214,160,86,.08), rgba(255,255,255,.03)),
    var(--bx-page-panel-2) !important;
  border-color:var(--bx-page-line-strong) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc .num,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc .more,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .sec-head .more,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .htype-tile .nm,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .htype-tile .ct b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-tile .nm,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-tile .ct b{
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc .num,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .svc .more,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger-grid b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger-action .k,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .form-card .ey,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .filter-section h4,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .chip-clear,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-brand,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cats-section h4,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cats-head .reset,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-brand,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-fit,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .results-intro span{
  color:var(--bx-page-accent-strong) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .results-intel{
  background:var(--bx-page-line) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .results-intel .over{
  color:var(--bx-page-accent-strong) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .results-intel strong{
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .results-intel p{
  color:var(--bx-page-muted) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger-grid > div,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .form-foot,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .filter-head,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .filter-section,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-brand,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-specs,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-specs > div + div,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand .meta,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cats-head,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cats-section,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-sub,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-photo,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-brand,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-foot,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-head,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-grid .b{
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger-grid span,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .ledger-action .v{
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .field input,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .field select,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .field textarea,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .interest label,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .lang-toggle,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .lang-toggle button,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .chip,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .sort-wrap select,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .view-toggle,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .view-toggle button,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .range-inputs input,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .seg,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .seg button,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .pages .nav,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .per-page select,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .search-input,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .search-input input,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .sort-wrap select,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .view-toggle,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .view-toggle button,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .price-inputs input,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pages .nav,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .per-page select{
  background:var(--bx-page-field) !important;
  border-color:var(--bx-page-line) !important;
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .ft{
  background:rgba(244,239,230,.065) !important;
  border-color:var(--bx-page-line) !important;
  color:var(--bx-page-muted) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .ft::before{
  background:var(--bx-page-accent) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .field input::placeholder,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .field textarea::placeholder,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .search-input input::placeholder{
  color:var(--bx-page-faint) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .interest label:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .lang-toggle button:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .view-toggle button:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .seg button:hover:not(.active),
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .view-toggle button:hover{
  background:rgba(214,160,86,.12) !important;
  border-color:rgba(214,160,86,.34) !important;
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .interest input:checked + span,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .interest label.on,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .lang-toggle button.on,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .view-toggle button.active,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .seg button.active,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .view-toggle button.active{
  background:var(--bx-page-accent) !important;
  border-color:var(--bx-page-accent) !important;
  color:#FFFCF6 !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .sort-wrap select,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .per-page select,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .sort-wrap select,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .per-page select{
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'><path d='M1 1 L5 5 L9 1' stroke='%23F4EFE6' stroke-width='1.5' stroke-linecap='round'/></svg>") !important;
  background-repeat:no-repeat !important;
  background-position:right 10px center !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .filter-head,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cats-head{
  background:var(--bx-page-panel-2) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row{
  color:var(--bx-page-muted) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-link:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-sub a:hover{
  background:rgba(214,160,86,.1) !important;
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check .box,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row .box{
  background:var(--bx-page-field) !important;
  border-color:var(--bx-page-line-strong) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check.on .box,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row.on .box{
  background:var(--bx-page-accent) !important;
  border-color:var(--bx-page-accent) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check.on .lbl,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row.on .lbl{
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .range-track,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .price-track{
  background:rgba(244,239,230,.12) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .range-handle,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .price-handle{
  background:#FFFCF6 !important;
  border-color:var(--bx-page-accent) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .chip,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .chip b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .results-count b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .results-count b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .price-vals b{
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-actions > *,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .add-cart{
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-actions > *:not(.primary){
  background:var(--bx-page-field) !important;
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .boat-actions > *:not(.primary):hover{
  background:rgba(214,160,86,.12) !important;
  border-color:rgba(214,160,86,.38) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-photo{
  background:
    radial-gradient(ellipse at 50% 60%, rgba(244,239,230,.1), transparent 64%),
    linear-gradient(180deg, #102A44, #081A2C) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-specs span{
  background:rgba(244,239,230,.06) !important;
  color:var(--bx-page-muted) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pcard-fit{
  background:rgba(214,160,86,.13) !important;
  border-color:rgba(214,160,86,.32) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-tile::after,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .system-card::after{
  color:rgba(244,239,230,.075) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-link.active{
  background:var(--bx-page-accent) !important;
  color:#FFFCF6 !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-link.active .count{
  color:#FFFCF6 !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand .tier.par{
  background:var(--bx-page-field) !important;
  color:var(--bx-page-ink) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .fbrand .arrow,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .pages .active{
  background:var(--bx-page-accent) !important;
  color:#FFFCF6 !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .brands-bar-grid .b .tag{
  color:rgba(232,221,201,.48) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .entrybar,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] section.sec:not(.dark),
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] section.sec.bg,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] section.shop-system{
  background:
    radial-gradient(ellipse at 84% 0%, rgba(214,160,86,.08), transparent 42%),
    radial-gradient(ellipse at 12% 34%, rgba(8,168,215,.055), transparent 44%),
    linear-gradient(180deg, var(--bx-page-bg) 0%, var(--bx-page-bg-2) 100%) !important;
  border-color:var(--bx-page-line) !important;
  color:var(--bx-page-text) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] section.sec.dark{
  background:
    radial-gradient(ellipse at 14% 16%, rgba(214,160,86,.08), transparent 38%),
    linear-gradient(180deg, #061827 0%, #041321 100%) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .entrybar .container,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .entry-card:not(.primary),
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-body,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-stats > div,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-suite,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-suite-bar,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-grid-label,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command .mini,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .cat,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .collection-card.shop-card,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-board,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-panel,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .story{
  background:
    linear-gradient(180deg, rgba(255,255,255,.038), rgba(255,255,255,.015)),
    var(--bx-page-panel) !important;
  border-color:var(--bx-page-line) !important;
  color:var(--bx-page-text) !important;
  box-shadow:var(--bx-page-shadow) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .entry-card:not(.primary):hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .cat:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .story:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-action:hover{
  background:
    linear-gradient(180deg, rgba(214,160,86,.09), rgba(255,255,255,.03)),
    var(--bx-page-panel-2) !important;
  border-color:var(--bx-page-line-strong) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command{
  background:var(--bx-page-line) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] h2.sec-title,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .entry-card:not(.primary) strong,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-model,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-specs .v,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-finance b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-price .v,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-body h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-stats .v,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-price-row .v,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-suite-bar,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-grid-label,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder strong,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command .mini strong,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .cat-name,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card .ix .n,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card h4,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .collection-card.shop-card h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-panel h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-action b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info h3,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info dd a,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info dd b,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .story-title{
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .entry-copy,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-why,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-specs .k,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-finance,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-price .l,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-body p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-stats .k,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-price-row .l,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-price-row .vat,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-head-copy,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-suite-bar span:last-child,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-grid-label span:last-child,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command .mini p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command .mini span:last-child,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder-tabs span,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder-tabs button,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-meta span,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat::after,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-note,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .collection-card.shop-card p,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-action span,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .application-form label,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .application-form .note,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info .addr,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info dt,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info dd,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .story-excerpt,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .story-foot{
  color:var(--bx-page-muted) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .sec-head .ey,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] h2.sec-title .sub,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] h2.sec-title em,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-brand,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-finance .pct,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder > div:first-child > span,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-system,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-meta span:last-child,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-action,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .cat-count,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card h4 em,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card .ix,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card .tag,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-panel .ey,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info .ey,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info h3 em,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .story-meta{
  color:var(--bx-page-accent-strong) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .entrybar .container,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-brand::after,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-specs,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-specs > div + div,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-finance,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .spotlight-stats,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-suite-bar,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-grid-label,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder-tabs,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-meta,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command .lead,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command .mini,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-photo,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-photo::before,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat::after,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-action,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .why-card .tag,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .application-form,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info dl,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-info dd a,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .story-foot{
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-finance,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .application-form input,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .application-form select,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .application-form textarea,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .newsletter input{
  background:var(--bx-page-field) !important;
  border-color:var(--bx-page-line) !important;
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .application-form input::placeholder,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .application-form textarea::placeholder,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .newsletter input::placeholder{
  color:var(--bx-page-faint) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-actions a,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-actions span,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .btn-outline.dark,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-action{
  background:var(--bx-page-field) !important;
  border-color:var(--bx-page-line) !important;
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-actions a:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-actions span:hover,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .btn-outline.dark:hover{
  background:rgba(214,160,86,.12) !important;
  border-color:rgba(214,160,86,.38) !important;
  color:var(--bx-page-ink) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-actions a.primary,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .boat-actions span.primary,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .btn-brass{
  background:var(--bx-page-accent) !important;
  border-color:var(--bx-page-accent) !important;
  color:#FFFCF6 !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .entry-card.primary{
  border-color:var(--bx-page-line-strong) !important;
  box-shadow:0 22px 64px -52px rgba(0,0,0,.95) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .type{
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system::before{
  opacity:.32 !important;
  background:
    linear-gradient(90deg, rgba(244,239,230,.045) 1px, transparent 1px),
    linear-gradient(180deg, rgba(244,239,230,.04) 1px, transparent 1px) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder{
  background:
    linear-gradient(180deg, rgba(244,239,230,.035), rgba(244,239,230,.012)),
    var(--bx-page-panel-2) !important;
  box-shadow:none !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder-tabs{
  background:var(--bx-page-line) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder-tabs span,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder-tabs button,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-meta span{
  background:rgba(244,239,230,.045) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder-tabs span:first-child,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-finder-tabs button.is-active{
  background:var(--bx-page-accent) !important;
  color:#FFFCF6 !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-meta span:last-child{
  background:rgba(214,160,86,.11) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-photo{
  background:
    radial-gradient(circle at 72% 22%, rgba(214,160,86,.18), transparent 34%),
    linear-gradient(135deg, #061827 0%, #0F2A44 100%) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-photo::before{
  color:rgba(232,221,201,.62) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-photo .icon,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-photo .icon svg,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-photo .icon svg *{
  color:var(--bx-page-accent-strong) !important;
  stroke:currentColor !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-photo .icon svg [fill="#0A2540"]{
  fill:currentColor !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-action{
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-action::after{
  color:var(--bx-page-accent-strong) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .shop-command .mini::before,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .collection-card.shop-card::after{
  color:rgba(244,239,230,.1) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .collection-card.shop-card::before{
  background:
    radial-gradient(circle at 84% 20%, rgba(8,168,215,.14), transparent 34%),
    linear-gradient(135deg, rgba(11,34,56,.98), rgba(7,26,44,.96)) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-visual{
  background:
    radial-gradient(circle at 78% 18%, rgba(214,160,86,.16), transparent 34%),
    linear-gradient(135deg, #071827 0%, #0F2A44 100%) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-visual img{
  opacity:.46 !important;
  filter:saturate(.82) contrast(1.08) brightness(.72) !important;
  object-position:50% 50% !important;
  transform:scale(1.03);
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-visual::after{
  background:
    linear-gradient(180deg, rgba(3,16,31,.22), rgba(3,16,31,.92)),
    linear-gradient(105deg, rgba(3,16,31,.96), rgba(3,16,31,.4) 58%, rgba(3,16,31,.82)),
    radial-gradient(circle at 18% 82%, rgba(214,160,86,.16), transparent 34%) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-visual h3{
  color:var(--bx-page-ink) !important;
  text-shadow:0 18px 42px rgba(0,0,0,.52) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-ledger{
  background:var(--bx-page-line) !important;
  border-color:var(--bx-page-line) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-ledger div{
  background:rgba(7,26,44,.78) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-ledger span{
  color:var(--bx-page-text) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .showroom-map{
  background:
    radial-gradient(circle at 34% 45%, rgba(214,160,86,.14) 0%, transparent 35%),
    radial-gradient(circle at 78% 70%, rgba(8,168,215,.11) 0%, transparent 40%),
    linear-gradient(180deg, #102A44 0%, #071A2C 100%) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .map-grid{
  background-image:
    linear-gradient(rgba(244,239,230,.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(244,239,230,.06) 1px, transparent 1px) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .map-road{
  background:rgba(244,239,230,.1) !important;
  border-color:rgba(244,239,230,.08) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .map-block{
  background:rgba(244,239,230,.065) !important;
  border-color:rgba(244,239,230,.1) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .map-air{
  color:var(--bx-page-muted) !important;
}

html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="services:"] .workshop-r .photo,
html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="contact:"] .map-photo{
  border-color:var(--bx-page-line) !important;
}

@media (max-width:720px){
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-visual{
    min-height:420px !important;
  }

  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .contact-visual img{
    object-position:50% 58% !important;
  }

  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="home:"] .shop-system .cat-note{
    display:block !important;
    margin-top:10px !important;
  }

  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .toolbar,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .toolbar{
    position:relative !important;
    top:auto !important;
  }

  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] aside.filters,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] aside.cats{
    position:sticky !important;
    top:74px !important;
    z-index:46 !important;
    background:rgba(7,26,44,.96) !important;
    border-color:rgba(244,239,230,.16) !important;
    box-shadow:0 20px 58px -38px rgba(0,0,0,.92) !important;
    backdrop-filter:blur(16px) saturate(135%) !important;
    -webkit-backdrop-filter:blur(16px) saturate(135%) !important;
  }

  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .filter-head,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cats-head{
    background:rgba(11,34,56,.98) !important;
    border-color:rgba(244,239,230,.16) !important;
  }

  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .filter-head .reset,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .seg button,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .chip,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .chip-clear,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cats-head .reset,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-link,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .price-inputs input,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row{
    background:#071A2C !important;
    border-color:rgba(244,239,230,.16) !important;
    color:#E8DDC9 !important;
  }

  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .seg button.active,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check.on,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-link.active,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row.on{
    background:#D6A056 !important;
    border-color:#D6A056 !important;
    color:#FFFCF6 !important;
  }

  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check.on .lbl,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="catalog:"] .check.on .count,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row.on .lbl,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .check-row.on .count,
  html[data-theme="night"] body .legacy-fragment[data-legacy-fragment^="shop:"] .cat-link.active .count{
    color:#FFFCF6 !important;
  }
}
`;

export function ThemePolish() {
  return <style data-theme-polish dangerouslySetInnerHTML={{ __html: themePolishCss }} />;
}
