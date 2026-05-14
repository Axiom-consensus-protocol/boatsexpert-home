(function () {
  var routeMap = {
    "index.html": "/",
    "boat.html": "/boat",
    "catalog.html": "/catalog",
    "product.html": "/product",
    "shop.html": "/shop",
    "in-stock.html": "/in-stock",
    "cart.html": "/cart",
    "contact.html": "/contact",
    "services.html": "/services"
  };

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  function rewriteUrl(value) {
    if (!value || /^(https?:|mailto:|tel:|data:|javascript:|#|\?)/i.test(value)) return value;
    if (value.charAt(0) === "/") return value;

    var normalized = value.replace(/^\.\//, "");
    if (normalized.indexOf("assets/") === 0) return "/" + normalized;

    var match = normalized.match(/^([^?#]*)([?#].*)?$/);
    var path = match && match[1] ? match[1].toLowerCase() : "";
    var suffix = match && match[2] ? match[2] : "";
    if (routeMap[path]) return routeMap[path] + suffix;

    return value;
  }

  function rewriteLegacyLinks(root) {
    (root || document).querySelectorAll("[href], [src], [action]").forEach(function (node) {
      ["href", "src", "action"].forEach(function (attr) {
        if (!node.hasAttribute(attr)) return;
        var next = rewriteUrl(node.getAttribute(attr));
        if (next) node.setAttribute(attr, next);
      });
    });
  }

  function observeLegacyLinks() {
    if (!("MutationObserver" in window)) return;
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return;
          rewriteLegacyLinks(node);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function setupTheme() {
    function getTheme() {
      try {
        var fromUrl = new URLSearchParams(location.search).get("theme");
        if (fromUrl === "day" || fromUrl === "night") {
          localStorage.setItem("bx_theme", fromUrl);
          return fromUrl;
        }
        var stored = localStorage.getItem("bx_theme");
        if (stored === "day" || stored === "night") return stored;
      } catch (err) {}
      return "day";
    }

    function apply(theme) {
      var next = theme === "night" ? "night" : "day";
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.style.colorScheme = next === "night" ? "dark" : "light";
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", next === "night" ? "#010812" : "#0A2540");
      document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
        var label = next === "night" ? "Switch to day mode" : "Switch to night mode";
        button.setAttribute("aria-label", label);
        button.setAttribute("title", label);
        button.setAttribute("aria-pressed", next === "night" ? "true" : "false");
      });
    }

    function toggle() {
      var current = document.documentElement.getAttribute("data-theme") || getTheme();
      var next = current === "night" ? "day" : "night";
      try { localStorage.setItem("bx_theme", next); } catch (err) {}
      apply(next);
    }

    document.addEventListener("click", function (event) {
      var button = event.target.closest("[data-theme-toggle]");
      if (!button) return;
      event.preventDefault();
      toggle();
    });

    apply(getTheme());
    window.BX_theme = { get: getTheme, set: apply, toggle: toggle };
  }

  function setupSearch() {
    var panel = document.getElementById("quickSearch");
    if (!panel) return;

    var toggles = document.querySelectorAll(".search-toggle");
    var input = document.getElementById("quickSearchInput");
    var closers = panel.querySelectorAll("[data-search-close]");

    function openSearch() {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      document.body.classList.add("search-open");
      toggles.forEach(function (toggle) { toggle.setAttribute("aria-expanded", "true"); });
      if (input) window.setTimeout(function () { input.focus(); }, 30);
    }

    function closeSearch() {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      document.body.classList.remove("search-open");
      toggles.forEach(function (toggle) { toggle.setAttribute("aria-expanded", "false"); });
    }

    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        openSearch();
      });
    });

    closers.forEach(function (closer) {
      closer.addEventListener("click", function (event) {
        event.preventDefault();
        closeSearch();
      });
    });

    document.addEventListener("keydown", function (event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (panel.classList.contains("is-open")) closeSearch();
        else openSearch();
      }
      if (event.key === "Escape" && panel.classList.contains("is-open")) closeSearch();
    });
  }

  function currentRouteStem() {
    var path = (location.pathname || "/").replace(/\/+$/, "").toLowerCase();
    if (!path) return "home";
    return path.split("/").filter(Boolean).pop() || "home";
  }

  function setupActiveNav() {
    var stem = currentRouteStem();
    var currentHash = (location.hash || "").toLowerCase();
    document.querySelectorAll("header.site nav.primary a").forEach(function (link) {
      var rewritten = rewriteUrl(link.getAttribute("href") || "");
      var hashIndex = rewritten.indexOf("#");
      var linkHash = hashIndex >= 0 ? rewritten.slice(hashIndex).toLowerCase() : "";
      var href = rewritten.split("#")[0].split("?")[0];
      var target = href === "/" ? "home" : href.split("/").filter(Boolean).pop();
      var sameRoute = target && target.toLowerCase() === stem;
      var active = Boolean(sameRoute && (linkHash ? linkHash === currentHash : !currentHash));
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function buildMobileDrawer() {
    var groups = [
      {
        title: "Catalog",
        meta: "230 boats",
        links: [
          ["/catalog", "Full catalog", "Filters, hulls, brands"],
          ["/in-stock", "Boats in stock", "Ready in Otopeni"],
          ["/listings/body-type/fishing-boats", "Fishing boats", "Original body type"],
          ["/listings/make-brand/finval", "Finval", "Exclusive dealer"]
        ]
      },
      {
        title: "Shop",
        meta: "937 products",
        links: [
          ["/shop", "Marine equipment", "All departments"],
          ["/product-category/outboard-motors", "Outboard motors", "Yamaha, Honda"],
          ["/product-category/sonars", "Sonars", "Garmin, Humminbird"],
          ["/product-category/batteries", "Batteries", "Power systems"]
        ]
      },
      {
        title: "Services",
        meta: "Workshop",
        links: [
          ["/services", "Service overview", "All service paths"],
          ["/services/outboard-engine-installation", "Outboard install", "Rigging and prop"],
          ["/services/expert-tuning-of-angler-boats", "Angler tuning", "Deck, sonar, livewell"],
          ["/services/registration-driving", "Registration", "ANR paperwork"]
        ]
      }
    ];

    var drawer = document.createElement("nav");
    drawer.className = "mobile-drawer mobile-drawer--generated";
    drawer.id = "mobileDrawer";
    drawer.setAttribute("aria-label", "Mobile navigation");
    drawer.setAttribute("aria-hidden", "true");
    drawer.innerHTML =
      '<div class="mobile-drawer-head">' +
        '<a href="/" class="logo" aria-label="BoatsExpert home">' +
          '<img class="logo-img" src="/assets/logo/logo-white.svg" alt="BoatsExpert"/>' +
        "</a>" +
        '<button class="mobile-close" type="button" aria-label="Close menu">' +
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>' +
        "</button>" +
      "</div>" +
      '<div class="mobile-drawer-kpis">' +
        "<span><b>230</b> boats</span>" +
        "<span><b>16</b> brands</span>" +
        "<span><b>937</b> shop SKU</span>" +
      "</div>" +
      groups.map(function (group) {
        return '<section class="mobile-nav-group">' +
          '<div class="mobile-nav-group__head"><b>' + group.title + '</b><span>' + group.meta + '</span></div>' +
          '<div class="mobile-nav">' +
            group.links.map(function (item) {
              return '<a href="' + item[0] + '"><span>' + item[1] + '</span><small>' + item[2] + '</small></a>';
            }).join("") +
          "</div>" +
        "</section>";
      }).join("") +
      '<div class="mobile-nav mobile-nav--single">' +
        '<a href="/blog"><span>Blog</span><small>News and archive</small></a>' +
        '<a href="/contact"><span>Contact</span><small>Otopeni showroom</small></a>' +
      "</div>" +
      '<div class="mobile-tools">' +
        '<a href="/contact" class="btn-brass" data-i18n="nav.cta_testdrive">Book a Test Drive</a>' +
        '<a href="https://wa.me/40743377377" class="btn-outline">WhatsApp</a>' +
      "</div>" +
      '<div class="mobile-tools-info">' +
        '<a href="tel:+40743377377" class="brass">+40 (743) 377 377</a>' +
        '<a href="mailto:info@boatsexpert.com">info@boatsexpert.com</a>' +
        "<span>Strada Horia Closca si Crisan 5, Otopeni</span>" +
        "<span>Mon-Thu | 10:00-17:30</span>" +
      "</div>";
    document.body.appendChild(drawer);
    return drawer;
  }

  function setupMobileDrawer() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".mobile-menu"));
    if (!buttons.length) return;

    var drawer = document.querySelector(".mobile-drawer") || buildMobileDrawer();

    function setOpen(open) {
      drawer.classList.toggle("is-open", open);
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.classList.toggle("mobile-drawer-open", open);
      buttons.forEach(function (button) {
        button.setAttribute("aria-expanded", open ? "true" : "false");
        button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
    }

    buttons.forEach(function (button) {
      button.setAttribute("aria-controls", drawer.id || "mobileDrawer");
      button.setAttribute("aria-expanded", "false");
      button.addEventListener("click", function (event) {
        event.preventDefault();
        setOpen(!drawer.classList.contains("is-open"));
      });
    });

    drawer.querySelectorAll(".mobile-close, .mobile-nav a, .mobile-tools a").forEach(function (control) {
      control.addEventListener("click", function () { setOpen(false); });
    });

    document.addEventListener("click", function (event) {
      if (!document.body.classList.contains("mobile-drawer-open")) return;
      if (event.target.closest(".mobile-drawer") || event.target.closest(".mobile-menu")) return;
      setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  onReady(function () {
    rewriteLegacyLinks(document);
    observeLegacyLinks();
    setupTheme();
    setupSearch();
    setupActiveNav();
    setupMobileDrawer();
    document.documentElement.dispatchEvent(new CustomEvent("legacy:ready"));
    if (window.BX_i18n && typeof window.BX_i18n.reload === "function") {
      window.BX_i18n.reload();
    }
  });
})();
