/**
 * BoatsExpert — minimal i18n binder.
 *
 * Usage:
 *   <h1 data-i18n="hero.h1">Default text</h1>          - replaces innerHTML
 *   <input data-i18n-attr="placeholder:nav.search_placeholder"/>
 *   <html data-i18n-attr="lang:_lang,title:site.title"/>
 *
 * Switch language:
 *   - URL: ?lang=ro   |  ?lang=en
 *   - or click any [data-i18n-set="ro"] / [data-i18n-set="en"]
 *   - or call BX_i18n.set("ro")
 *   - persisted in localStorage("bx_lang")
 */
(function(){
  const STORAGE_KEY = "bx_lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED   = ["en", "ro"];

  function getInitialLang(){
    const url = new URLSearchParams(location.search).get("lang");
    if (url && SUPPORTED.includes(url)) return url;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || "").slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(browser)) return browser;
    return DEFAULT_LANG;
  }

  function resolve(dict, key, lang){
    const entry = dict && dict[key];
    if (!entry) return null;
    if (typeof entry === "string") return entry;
    return entry[lang] || entry[DEFAULT_LANG] || null;
  }

  function applyTo(root, dict, lang){
    // Text content / innerHTML by data-i18n="key"
    root.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = resolve(dict, key, lang);
      if (val == null) return;
      el.innerHTML = val;
    });

    // Attribute bindings: data-i18n-attr="placeholder:key,title:other.key"
    root.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(",").forEach(pair => {
        const [attr, key] = pair.split(":").map(s => s.trim());
        if (!attr || !key) return;
        if (key === "_lang"){
          el.setAttribute(attr, lang);
          return;
        }
        const val = resolve(dict, key, lang);
        if (val == null) return;
        // strip simple HTML for attribute use
        el.setAttribute(attr, val.replace(/<[^>]+>/g, ""));
      });
    });

    // Active state for [data-i18n-set="..."] toggles
    root.querySelectorAll("[data-i18n-set]").forEach(el => {
      el.classList.toggle("active", el.getAttribute("data-i18n-set") === lang);
      el.setAttribute("aria-current", el.getAttribute("data-i18n-set") === lang ? "true" : "false");
    });

    // <html lang="..."> always reflects current language
    document.documentElement.setAttribute("lang", lang);
  }

  let dict = null;
  let currentLang = getInitialLang();

  let loaded = false;
  async function load(){
    if (loaded && dict){
      // Re-apply on subsequent calls (e.g. partials inserted late)
      applyTo(document, dict, currentLang);
      return;
    }
    // 1) Prefer inline <script type="application/json" id="i18n-data"> (works on file://, http, Vercel)
    const inline = document.getElementById("i18n-data");
    if (inline){
      try {
        dict = JSON.parse(inline.textContent);
      } catch (err){
        console.warn("i18n: inline dict parse failed, will try fetch", err);
      }
    }
    // 2) Else (or as a fresh source) try fetch from i18n.json
    if (!dict){
      try {
        const res = await fetch("./i18n.json", { cache: "no-cache" });
        if (!res.ok) throw new Error("HTTP " + res.status);
        dict = await res.json();
      } catch (e) {
        console.error("i18n: failed to load dict —", e);
        return;
      }
    }
    applyTo(document, dict, currentLang);
    loaded = true;
    document.documentElement.dispatchEvent(new CustomEvent("i18n:ready", { detail: { lang: currentLang } }));
  }

  function setLang(lang){
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    if (dict) applyTo(document, dict, lang);
    // update URL without reload
    const u = new URL(location.href);
    u.searchParams.set("lang", lang);
    history.replaceState(null, "", u.toString());
    document.documentElement.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang } }));
  }

  // Delegated click handler for any switcher button
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-i18n-set]");
    if (!btn) return;
    e.preventDefault();
    setLang(btn.getAttribute("data-i18n-set"));
  });

  // Public API
  window.BX_i18n = {
    set: setLang,
    get: () => currentLang,
    dict: () => dict,
    reload: load
  };

  // Wait for partials (if any) to mount before binding, so elements
  // inserted by partials.js also get translated.
  function ready(){
    const hasPartials = document.querySelector("[data-partial]");
    if (hasPartials){
      document.documentElement.addEventListener("partials:ready", load, { once: true });
      // Safety net: if partials never resolve, still try to translate the rest
      setTimeout(load, 1500);
    } else {
      load();
    }
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
