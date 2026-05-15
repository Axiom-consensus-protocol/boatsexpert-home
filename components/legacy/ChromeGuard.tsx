const chromeGuardCss = `
:root{
  --bx-top-bg:#F7FAFC;
  --bx-top-text:rgba(10,37,64,.72);
  --bx-top-line:#E2EAF0;
  --bx-head-bg:#FFFFFF;
  --bx-head-text:#0A2540;
  --bx-head-muted:rgba(10,37,64,.56);
  --bx-head-line:#DCE6ED;
  --bx-head-soft:#F7FAFC;
  --bx-head-soft-2:#EFF6FA;
  --bx-head-active-bg:#0A2540;
  --bx-head-active-text:#F4EFE6;
  --bx-head-accent:#C68B3D;
}

html[data-theme="night"]{
  --bx-top-bg:#020912;
  --bx-top-text:rgba(244,239,230,.72);
  --bx-top-line:rgba(244,239,230,.12);
  --bx-head-bg:#061A30;
  --bx-head-text:#F4EFE6;
  --bx-head-muted:rgba(244,239,230,.62);
  --bx-head-line:rgba(244,239,230,.16);
  --bx-head-soft:rgba(244,239,230,.055);
  --bx-head-soft-2:rgba(244,239,230,.1);
  --bx-head-active-bg:#C68B3D;
  --bx-head-active-text:#FFFCF6;
  --bx-head-accent:#C68B3D;
}

body .topbar{
  display:block !important;
  background:var(--bx-top-bg) !important;
  color:var(--bx-top-text) !important;
  border-bottom:1px solid var(--bx-top-line) !important;
  font-family:var(--mono) !important;
  font-size:10px !important;
  letter-spacing:.08em !important;
  line-height:1 !important;
}

body .topbar .container{
  max-width:var(--maxw-wide) !important;
  min-height:34px !important;
  padding:0 var(--pad-wide) !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:24px !important;
}

body .topbar .tl,
body .topbar .tr{
  display:flex !important;
  align-items:center !important;
  gap:24px !important;
  color:inherit !important;
}

body .topbar .tl > span,
body .topbar .tr > a{
  display:inline-flex !important;
  align-items:center !important;
  min-height:34px !important;
  color:inherit !important;
}

body .topbar a:hover,
body .topbar .dot{
  color:var(--bx-head-accent) !important;
}

body .topbar .lang{
  display:inline-flex !important;
  align-items:stretch !important;
  height:28px !important;
  padding:2px !important;
  gap:2px !important;
  border:1px solid var(--bx-head-line) !important;
  border-radius:2px !important;
  background:var(--bx-head-soft) !important;
  font-family:var(--mono) !important;
  line-height:1 !important;
}

body .topbar .lang [data-i18n-set]{
  display:inline-flex !important;
  align-items:center !important;
  gap:6px !important;
  padding:0 9px !important;
  color:var(--bx-top-text) !important;
  font-size:11px !important;
  font-weight:600 !important;
  letter-spacing:.12em !important;
  border-radius:1px !important;
}

body .topbar .lang [data-i18n-set].active{
  background:var(--bx-head-active-bg) !important;
  color:var(--bx-head-active-text) !important;
}

body header.site{
  position:sticky !important;
  top:0 !important;
  z-index:60 !important;
  background:var(--bx-head-bg) !important;
  color:var(--bx-head-text) !important;
  border-bottom:1px solid var(--bx-head-line) !important;
  box-shadow:0 16px 42px -38px rgba(2,9,18,.75) !important;
}

body header.site .container{
  max-width:var(--maxw-wide) !important;
  min-height:92px !important;
  padding:12px var(--pad-wide) !important;
  display:grid !important;
  grid-template-columns:minmax(250px,300px) minmax(0,1fr) auto !important;
  align-items:center !important;
  gap:24px !important;
}

body header.site .logo{
  display:inline-flex !important;
  align-items:center !important;
  gap:16px !important;
  height:68px !important;
  color:var(--bx-head-text) !important;
  align-self:stretch !important;
}

body header.site .logo-img{
  content:url("/assets/logo/logo-brass.svg") !important;
  width:auto !important;
  height:58px !important;
  max-width:92px !important;
  filter:none !important;
  object-fit:contain !important;
  flex:0 0 auto !important;
}

html[data-theme="night"] body header.site .logo-img{
  content:url("/assets/logo/logo-white.svg") !important;
}

body header.site .logo-tagline{
  min-height:52px !important;
  display:flex !important;
  flex-direction:column !important;
  justify-content:center !important;
  padding-left:16px !important;
  border-left:1px solid var(--bx-head-line) !important;
  color:var(--bx-head-muted) !important;
  font-family:var(--mono) !important;
  font-size:8.5px !important;
  line-height:1.45 !important;
  letter-spacing:.13em !important;
  text-transform:uppercase !important;
  white-space:nowrap !important;
}

body header.site .logo-tagline b{
  margin-bottom:5px !important;
  color:var(--bx-head-accent) !important;
  font-family:var(--display) !important;
  font-size:15px !important;
  line-height:1 !important;
  font-weight:500 !important;
  letter-spacing:.01em !important;
  text-transform:none !important;
}

body header.site nav.primary{
  display:flex !important;
  justify-self:center !important;
  width:min(100%,650px) !important;
  gap:0 !important;
  padding:4px !important;
  border:1px solid var(--bx-head-line) !important;
  background:var(--bx-head-soft) !important;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.08) !important;
}

body header.site nav.primary a{
  flex:1 1 0 !important;
  min-width:0 !important;
  height:44px !important;
  min-height:44px !important;
  padding:0 12px !important;
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  background:transparent !important;
  color:var(--bx-head-text) !important;
  border-right:1px solid var(--bx-head-line) !important;
  font-size:10.5px !important;
  font-weight:500 !important;
  letter-spacing:.13em !important;
  line-height:1 !important;
  text-transform:uppercase !important;
  white-space:nowrap !important;
}

body header.site nav.primary a:last-child{
  border-right:0 !important;
}

body header.site nav.primary a.active{
  background:var(--bx-head-active-bg) !important;
  color:var(--bx-head-active-text) !important;
}

body header.site nav.primary a:hover{
  background:var(--bx-head-soft-2) !important;
  color:var(--bx-head-accent) !important;
}

body header.site nav.primary a.active:hover{
  background:var(--bx-head-active-bg) !important;
  color:var(--bx-head-active-text) !important;
}

body header.site nav.primary a::after{
  display:none !important;
}

body header.site .nav-cta{
  display:flex !important;
  align-items:center !important;
  gap:8px !important;
  justify-self:end !important;
  padding-left:14px !important;
  border-left:1px solid var(--bx-head-line) !important;
}

body header.site .nav-cta .icon-btn[aria-label="Account"]{
  display:none !important;
}

body header.site .icon-btn,
body header.site .mobile-menu{
  width:44px !important;
  height:44px !important;
  min-width:44px !important;
  min-height:44px !important;
  border-radius:0 !important;
  border:1px solid var(--bx-head-line) !important;
  background:var(--bx-head-soft) !important;
  color:var(--bx-head-text) !important;
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
}

body header.site .icon-btn:hover,
body header.site .mobile-menu:hover{
  color:var(--bx-head-accent) !important;
  border-color:var(--bx-head-accent) !important;
  background:var(--bx-head-soft-2) !important;
}

body header.site .icon-btn svg{
  width:17px !important;
  height:17px !important;
}

body header.site .search-toggle{
  width:168px !important;
  justify-content:flex-start !important;
  gap:10px !important;
  padding:0 12px !important;
  font-family:var(--mono) !important;
  font-size:9.5px !important;
  letter-spacing:.14em !important;
  text-transform:uppercase !important;
}

body header.site .search-toggle .search-label{
  display:inline !important;
  min-width:0 !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  white-space:nowrap !important;
}

body header.site .search-toggle .search-key{
  display:inline-flex !important;
  margin-left:auto !important;
  padding:3px 5px 4px !important;
  border:1px solid var(--bx-head-line) !important;
  background:var(--bx-head-bg) !important;
  color:var(--bx-head-muted) !important;
  font-size:8px !important;
  letter-spacing:.08em !important;
  line-height:1 !important;
}

body header.site .btn-brass{
  min-height:44px !important;
  padding:0 18px !important;
  border-radius:0 !important;
  background:var(--bx-head-accent) !important;
  border:1px solid #B5772C !important;
  color:#FFFCF6 !important;
  font-size:10.5px !important;
  letter-spacing:.16em !important;
  box-shadow:0 14px 30px -22px rgba(198,139,61,.9) !important;
}

body header.site .mobile-actions{
  display:none !important;
  gap:8px !important;
  align-items:center !important;
}

body header.site .mobile-actions .icon-btn,
body header.site .mobile-actions .mobile-menu{
  color:#0A2540 !important;
  border-color:#C9D8E2 !important;
  background:#FFFFFF !important;
  box-shadow:0 10px 24px -22px rgba(2,9,18,.55) !important;
}

html[data-theme="night"] body header.site .mobile-actions .icon-btn,
html[data-theme="night"] body header.site .mobile-actions .mobile-menu{
  color:#F4EFE6 !important;
  border-color:rgba(244,239,230,.22) !important;
  background:rgba(244,239,230,.055) !important;
}

body header.site .mobile-menu{
  flex-direction:column !important;
  gap:5px !important;
  padding:0 !important;
}

body header.site .mobile-menu span{
  display:block !important;
  width:21px !important;
  height:2px !important;
  background:currentColor !important;
}

body header.site .mobile-actions .mobile-menu span{
  background:currentColor !important;
  opacity:1 !important;
}

body header.site .mobile-actions .icon-btn svg,
body header.site .mobile-actions .theme-toggle svg{
  color:inherit !important;
  stroke:currentColor !important;
  opacity:1 !important;
}

body .trust-logos img.brand-logo-img,
body .blogo img.brand-logo-img{
  filter:brightness(0) invert(1) grayscale(1) contrast(1.04) !important;
  opacity:.94 !important;
}

body .trust-logos a:hover img.brand-logo-img,
body .blogo:hover img.brand-logo-img{
  filter:brightness(0) invert(1) grayscale(1) contrast(1.04) !important;
  opacity:1 !important;
}

body .trust-logos{
  gap:10px !important;
}

body .trust-logos a{
  min-height:96px !important;
  opacity:1 !important;
}

body .trust-logos img.brand-logo-img{
  max-height:52px !important;
  max-width:170px !important;
  transform:scale(1.18) !important;
}

@media (max-width:900px){
  body .trust-logos a{
    min-height:88px !important;
  }
}

@media (max-width:560px){
  body .trust-logos img.brand-logo-img{
    max-height:44px !important;
    max-width:140px !important;
    transform:scale(1.12) !important;
  }
}

body .blogo img.brand-logo-img{
  transform:scale(1.56) !important;
}

body .blogo:hover img.brand-logo-img{
  transform:scale(1.66) !important;
}

body .fbrand .logo-row img,
body .brands-bar-grid .b img{
  filter:brightness(0) saturate(100%) invert(14%) sepia(37%) saturate(1469%) hue-rotate(174deg) brightness(89%) contrast(96%) !important;
  opacity:.84 !important;
  transform:none !important;
}

body .fbrand:hover .logo-row img,
body .brands-bar-grid .b:hover img{
  filter:brightness(0) saturate(100%) invert(14%) sepia(37%) saturate(1469%) hue-rotate(174deg) brightness(89%) contrast(96%) !important;
  opacity:1 !important;
  transform:none !important;
}

html[data-theme="night"] body .fbrand .logo-row img,
html[data-theme="night"] body .brands-bar-grid .b img{
  filter:brightness(0) invert(1) grayscale(1) contrast(1.02) !important;
  opacity:.76 !important;
}

html[data-theme="night"] body .fbrand:hover .logo-row img,
html[data-theme="night"] body .brands-bar-grid .b:hover img{
  filter:brightness(0) invert(1) grayscale(1) contrast(1.02) !important;
  opacity:.96 !important;
}

@media (max-width:1320px){
  body header.site .container{
    grid-template-columns:minmax(220px,270px) minmax(0,1fr) auto !important;
    gap:18px !important;
  }
  body header.site .logo-img{ height:54px !important; }
  body header.site .logo-tagline{ display:none !important; }
  body header.site nav.primary{ width:min(100%,560px) !important; }
  body header.site nav.primary a{
    padding:0 10px !important;
    font-size:10px !important;
  }
  body header.site .nav-cta .icon-btn:not(.search-toggle){ display:none !important; }
  body header.site .search-toggle{
    width:52px !important;
    justify-content:center !important;
    padding:0 !important;
  }
  body header.site .search-toggle .search-label,
  body header.site .search-toggle .search-key{ display:none !important; }
}

@media (max-width:900px){
  body .topbar .container{
    min-height:38px !important;
    font-size:9.5px !important;
  }
  body .topbar .tl span:nth-child(n+2),
  body .topbar .tr a:nth-child(n+2){
    display:none !important;
  }
  body header.site .container{
    min-height:82px !important;
    grid-template-columns:minmax(0,1fr) auto !important;
    padding:10px var(--pad-wide) !important;
  }
  body header.site .logo{ height:62px !important; }
  body header.site .logo-img{ height:52px !important; }
  body header.site nav.primary,
  body header.site .nav-cta{ display:none !important; }
  body header.site .mobile-actions{ display:flex !important; }
  body header.site .mobile-actions .search-toggle{
    width:46px !important;
    padding:0 !important;
    justify-content:center !important;
  }
  body header.site .mobile-actions .search-label,
  body header.site .mobile-actions .search-key{ display:none !important; }
}

@media (max-width:680px){
  body .topbar{ display:none !important; }
  body header.site .container{
    min-height:74px !important;
    padding:10px 20px !important;
  }
  body header.site .logo-img{ height:46px !important; }
}

body.mobile-nav-open header.site nav.primary{
  display:none !important;
}

body.mobile-drawer-open{
  overflow:hidden !important;
  touch-action:none !important;
}

body.mobile-drawer-open::before{
  content:"" !important;
  position:fixed !important;
  inset:0 !important;
  z-index:118 !important;
  background:
    radial-gradient(circle at 16% 18%, rgba(198,139,61,.18), transparent 34%),
    rgba(1,8,18,.72) !important;
  backdrop-filter:blur(10px) saturate(120%) !important;
  -webkit-backdrop-filter:blur(10px) saturate(120%) !important;
}

body .mobile-drawer{
  position:fixed !important;
  inset:0 0 0 auto !important;
  width:min(470px, 100vw) !important;
  height:100dvh !important;
  z-index:140 !important;
  display:flex !important;
  flex-direction:column !important;
  gap:0 !important;
  padding:18px !important;
  overflow:hidden auto !important;
  overscroll-behavior:contain !important;
  color:#F4EFE6 !important;
  background:
    linear-gradient(90deg, rgba(198,139,61,.78) 0, rgba(198,139,61,.78) 2px, transparent 2px),
    radial-gradient(circle at 92% 0%, rgba(198,139,61,.22), transparent 30%),
    radial-gradient(circle at 8% 100%, rgba(43,102,139,.2), transparent 36%),
    linear-gradient(180deg, #081D32 0%, #020912 100%) !important;
  border-left:1px solid rgba(244,239,230,.18) !important;
  box-shadow:-44px 0 96px -48px rgba(0,0,0,.9) !important;
  transform:translateX(104%) !important;
  visibility:hidden !important;
  pointer-events:none !important;
  transition:transform .32s cubic-bezier(.2,.8,.2,1), visibility .32s !important;
}

body .mobile-drawer.is-open{
  transform:translateX(0) !important;
  visibility:visible !important;
  pointer-events:auto !important;
}

body .mobile-drawer::-webkit-scrollbar{ width:6px !important; }
body .mobile-drawer::-webkit-scrollbar-track{ background:rgba(244,239,230,.06) !important; }
body .mobile-drawer::-webkit-scrollbar-thumb{ background:rgba(198,139,61,.55) !important; }

body .mobile-drawer-head{
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:16px !important;
  padding:0 0 16px !important;
  margin:0 0 12px !important;
  border-bottom:1px solid rgba(244,239,230,.14) !important;
}

body .mobile-drawer-brand{
  min-width:0 !important;
  display:flex !important;
  align-items:center !important;
  gap:13px !important;
  color:#F4EFE6 !important;
  text-decoration:none !important;
}

body .mobile-drawer-brand .logo-img{
  width:auto !important;
  height:48px !important;
  max-width:88px !important;
  content:url("/assets/logo/logo-white.svg") !important;
  filter:none !important;
}

body .mobile-drawer-brand span{
  min-width:0 !important;
  display:grid !important;
  gap:4px !important;
}

body .mobile-drawer-brand b{
  font-family:var(--display) !important;
  font-size:23px !important;
  line-height:.95 !important;
  letter-spacing:.01em !important;
  font-weight:400 !important;
  color:#F4EFE6 !important;
}

body .mobile-drawer-brand small{
  font-family:var(--mono) !important;
  font-size:8px !important;
  line-height:1 !important;
  letter-spacing:.18em !important;
  text-transform:uppercase !important;
  color:rgba(244,239,230,.54) !important;
}

body .mobile-close{
  width:44px !important;
  height:44px !important;
  min-width:44px !important;
  border-radius:0 !important;
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  border:1px solid rgba(244,239,230,.2) !important;
  background:rgba(244,239,230,.055) !important;
  color:#F4EFE6 !important;
  cursor:pointer !important;
}

body .mobile-close:hover,
body .mobile-close:focus-visible{
  border-color:#C68B3D !important;
  color:#C68B3D !important;
  outline:0 !important;
}

body .mobile-drawer-source{
  min-height:42px !important;
  margin-bottom:12px !important;
  padding:0 13px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:14px !important;
  border:1px solid rgba(198,139,61,.34) !important;
  background:rgba(198,139,61,.09) !important;
  font-family:var(--mono) !important;
  font-size:8.5px !important;
  letter-spacing:.16em !important;
  text-transform:uppercase !important;
  color:rgba(244,239,230,.62) !important;
}

body .mobile-drawer-source b{
  min-width:0 !important;
  max-width:52% !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  white-space:nowrap !important;
  color:#C68B3D !important;
  font-weight:600 !important;
}

body .mobile-drawer-source span{
  min-width:0 !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  white-space:nowrap !important;
}

body .mobile-drawer-kpis{
  display:grid !important;
  grid-template-columns:repeat(3, minmax(0, 1fr)) !important;
  gap:1px !important;
  margin:0 0 12px !important;
  border:1px solid rgba(244,239,230,.12) !important;
  background:rgba(244,239,230,.12) !important;
}

body .mobile-drawer-kpis span{
  min-height:64px !important;
  padding:10px !important;
  display:grid !important;
  align-content:center !important;
  gap:5px !important;
  background:rgba(3,16,31,.8) !important;
  color:rgba(244,239,230,.58) !important;
  font-family:var(--mono) !important;
  font-size:7.5px !important;
  letter-spacing:.14em !important;
  line-height:1.15 !important;
  text-transform:uppercase !important;
}

body .mobile-drawer-kpis b{
  color:#C68B3D !important;
  font-family:var(--display) !important;
  font-size:29px !important;
  line-height:.9 !important;
  font-weight:400 !important;
}

body .mobile-drawer-actions{
  display:grid !important;
  grid-template-columns:1fr !important;
  gap:8px !important;
  margin-bottom:14px !important;
}

body .mobile-command{
  width:100% !important;
  min-height:42px !important;
  padding:0 13px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  border:1px solid rgba(244,239,230,.14) !important;
  background:rgba(244,239,230,.045) !important;
  color:#F4EFE6 !important;
  font-family:var(--mono) !important;
  font-size:9px !important;
  font-weight:600 !important;
  letter-spacing:.13em !important;
  line-height:1 !important;
  text-transform:uppercase !important;
  text-decoration:none !important;
  cursor:pointer !important;
}

body .mobile-command::after{
  content:"->" !important;
  color:#C68B3D !important;
  letter-spacing:0 !important;
}

body .mobile-command:hover,
body .mobile-command:focus-visible{
  border-color:#C68B3D !important;
  background:rgba(198,139,61,.14) !important;
  outline:0 !important;
}

body .mobile-nav-group{
  margin-top:13px !important;
}

body .mobile-nav-group__head{
  min-height:34px !important;
  padding:0 2px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:12px !important;
  color:rgba(244,239,230,.62) !important;
  font-family:var(--mono) !important;
  font-size:8.5px !important;
  letter-spacing:.17em !important;
  text-transform:uppercase !important;
}

body .mobile-nav-group__head b{
  color:#C68B3D !important;
  font-weight:600 !important;
}

body .mobile-nav-group__head span{
  max-width:48% !important;
  min-width:0 !important;
  overflow:hidden !important;
  text-align:right !important;
  text-overflow:ellipsis !important;
  white-space:nowrap !important;
  color:rgba(244,239,230,.4) !important;
}

body .mobile-nav{
  display:grid !important;
  gap:1px !important;
  margin:0 !important;
  border:1px solid rgba(244,239,230,.12) !important;
  background:rgba(244,239,230,.12) !important;
}

body .mobile-nav--single{
  margin-top:14px !important;
}

body .mobile-nav a{
  min-height:60px !important;
  padding:10px 14px !important;
  display:grid !important;
  grid-template-columns:minmax(0,1fr) auto !important;
  align-items:center !important;
  gap:8px 12px !important;
  background:rgba(8,29,50,.78) !important;
  color:#F4EFE6 !important;
  border:0 !important;
  font-family:var(--mono) !important;
  font-size:10px !important;
  font-weight:600 !important;
  letter-spacing:.13em !important;
  line-height:1.12 !important;
  text-transform:uppercase !important;
  text-decoration:none !important;
}

body .mobile-nav a span{
  min-width:0 !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  white-space:nowrap !important;
}

body .mobile-nav a small{
  grid-column:1 / -1 !important;
  min-width:0 !important;
  color:rgba(244,239,230,.56) !important;
  font-family:var(--sans) !important;
  font-size:12px !important;
  font-weight:500 !important;
  letter-spacing:0 !important;
  line-height:1.25 !important;
  text-transform:none !important;
}

body .mobile-nav a::after{
  content:"->" !important;
  grid-column:2 !important;
  grid-row:1 !important;
  color:#C68B3D !important;
  letter-spacing:0 !important;
}

body .mobile-nav a:hover,
body .mobile-nav a:focus-visible,
body .mobile-nav a.is-active{
  background:rgba(198,139,61,.14) !important;
  color:#FFFCF6 !important;
  outline:0 !important;
}

body .mobile-nav a.is-active{
  box-shadow:inset 2px 0 0 #C68B3D !important;
}

body .mobile-tools{
  display:grid !important;
  grid-template-columns:1fr !important;
  gap:10px !important;
  margin-top:16px !important;
}

body .mobile-tools .btn-brass,
body .mobile-tools .btn-outline{
  width:100% !important;
  min-height:46px !important;
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  border-radius:0 !important;
  font-family:var(--mono) !important;
  font-size:9.5px !important;
  letter-spacing:.15em !important;
  text-transform:uppercase !important;
}

body .mobile-tools .btn-outline{
  border:1px solid rgba(244,239,230,.18) !important;
  background:transparent !important;
  color:#F4EFE6 !important;
}

body .mobile-tools-info{
  margin-top:auto !important;
  padding-top:18px !important;
  display:grid !important;
  gap:8px !important;
  color:rgba(244,239,230,.5) !important;
  font-family:var(--mono) !important;
  font-size:8.5px !important;
  letter-spacing:.14em !important;
  line-height:1.3 !important;
  text-transform:uppercase !important;
}

body .mobile-tools-info a{
  color:rgba(244,239,230,.68) !important;
  text-decoration:none !important;
}

body .mobile-tools-info .brass{
  color:#C68B3D !important;
}

@media (max-width:430px){
  body .mobile-drawer{
    width:100vw !important;
    padding:16px !important;
  }
  body .mobile-drawer-source{
    padding:0 11px !important;
    font-size:7.5px !important;
  }
  body .mobile-nav-group__head{
    font-size:8px !important;
  }
  body .mobile-drawer-kpis span{
    min-height:58px !important;
    padding:9px 8px !important;
    font-size:7px !important;
  }
  body .mobile-drawer-kpis b{
    font-size:25px !important;
  }
  body .mobile-nav a{
    min-height:57px !important;
    padding:10px 12px !important;
  }
}

@media (prefers-reduced-motion: reduce){
  body .mobile-drawer{
    transition:none !important;
  }
}
`;

export function ChromeGuard() {
  return <style data-chrome-guard dangerouslySetInnerHTML={{ __html: chromeGuardCss }} />;
}
