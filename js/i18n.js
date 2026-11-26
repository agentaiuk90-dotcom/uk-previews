/* Entiu.store Global Multi-Language Engine (EN / PL / DE / ES) */
(function (global) {
  "use strict";

  const STORAGE_KEY = "entiu_lang_v1";

  const DICT = {
    en: {
      nav_home: "Home",
      nav_offer: "Offer",
      nav_how: "How it works",
      nav_pricing: "Pricing (£15 / £60)",
      nav_enquiry: "Email Enquiry",
      nav_email_us: "Email Us",
      nav_cart: "Cart",
      nav_search: "Search 11,520 designs in Offer — e.g. Plumber, Garage, Dark...",
      hero_badge: "Done-For-You Websites · Live in 24 Hours · £0/month",
      hero_h1_top: "Your business website,",
      hero_h1_em: "live tomorrow for £60/yr.",
      hero_sub: "Built for garages, plumbers, builders, removals & local businesses across the UK & Europe. Includes your .co.uk / .pl / .de / .es domain, fast global hosting, HTTPS SSL, Google Maps and email enquiry form — zero agency retainers.",
      cta_order: "Order Turnkey Website — £60/yr",
      cta_preview: "Preview Your Business Free",
      trust_1: "Secure Stripe Checkout",
      trust_2: "Live in 24 Hours",
      trust_3: "Domain + SSL Included",
      trust_4: "Email Form & Google Map",
      checker_title: "LIVE DOMAIN CHECKER (.CO.UK / .PL / .DE / .ES)",
      checker_badge: "Included in £60/yr",
      checker_btn: "Check Free",
      checker_hint: "Instant availability check for UK & European business domains.",
      demos_kicker: "LIVE INDUSTRY EXAMPLES",
      demos_h2: "Click any industry to test a finished live website",
      demos_btn: "Open Full Offer (11,520) →",
      sub_kicker: "BROWSE OFFER BY SUBCATEGORY",
      sub_h2: "20 business subcategories — 11,520 exclusive designs",
      sub_all_btn: "View All 11,520 in Offer →",
      how_kicker: "WHAT HAPPENS AFTER YOU ORDER",
      how_h2: "Zero stress. Live in 24 hours — guaranteed.",
      how_sub: "No agency calls, no DIY builders, no monthly retainers. Here is the exact 3-step process from payment to your finished business website:",
      step1_t: "Pay Securely via Stripe",
      step1_d: "Order the £60/yr Turnkey package (or £15 ZIP) with Visa, Mastercard, Apple Pay or Google Pay. Instant Stripe receipt, zero monthly fees.",
      step2_t: "Send Business Info & Logo",
      step2_d: "Fill our 2-minute brief at checkout (name, city, phone, services & photos) or reply directly to your welcome email.",
      step3_t: "Live Under Your Domain in 24h",
      step3_d: "We register your domain (.co.uk / .pl / .de / .es), enable HTTPS SSL, wire Google Maps & email enquiry form, and send your live link + ZIP.",
      offer_h1: "All 11,520 Ready-to-Launch Websites",
      offer_back: "← Back to Home",
      enq_badge: "Direct Email Support",
      enq_h3: "Send Us an Email Enquiry",
      enq_sub: "Ask about a custom website, domain or free preview — we reply straight to your email.",
      enq_btn: "Send Email Enquiry →",
      fp_badge: "100% Free · Zero Obligation",
      fp_h3: "See Your Business Website Live",
      fp_sub: "Enter your details below and we'll generate a real interactive preview for your business in 3 seconds.",
      fp_btn: "Build My Free Live Preview →"
    },
    pl: {
      nav_home: "Start",
      nav_offer: "Oferta",
      nav_how: "Jak to działa",
      nav_pricing: "Cennik (£15 / £60)",
      nav_enquiry: "Zapytanie e-mail",
      nav_email_us: "Napisz do nas",
      nav_cart: "Koszyk",
      nav_search: "Szukaj w 11 520 projektach — np. Warsztat, Hydraulik, Dark...",
      hero_badge: "Gotowa Strona WWW pod Klucz · Na żywo w 24h · 0 zł abonamentu",
      hero_h1_top: "Gotowa strona dla Twojej firmy,",
      hero_h1_em: "na żywo jutro za £60/rok.",
      hero_sub: "Dla warsztatów, firm budowlanych, transportu, hydraulików i lokalnych usług w Polsce, UK i Europie. W cenie domena (.pl / .co.uk / .de / .es), szybki hosting, certyfikat SSL, Mapa Google i formularz e-mail — zero opłat miesięcznych.",
      cta_order: "Zamów Gotową Stronę — £60/rok",
      cta_preview: "Zobacz Darmowy Podgląd Firmy",
      trust_1: "Bezpieczna płatność Stripe",
      trust_2: "Gotowe w 24 godziny",
      trust_3: "Domena + SSL w cenie",
      trust_4: "Formularz e-mail i Mapa Google",
      checker_title: "SPRAWDŹ WOLNĄ DOMENĘ (.PL / .CO.UK / .DE / .ES)",
      checker_badge: "W cenie £60/rok",
      checker_btn: "Sprawdź",
      checker_hint: "Natychmiastowe sprawdzenie dostępności domeny dla Twojej firmy.",
      demos_kicker: "GOTOWE DEMA BRANŻOWE NA ŻYWO",
      demos_h2: "Kliknij branżę i przetestuj gotową działającą stronę",
      demos_btn: "Otwórz Pełną Ofertę (11 520) →",
      sub_kicker: "PRZEGLĄDAJ OFERTĘ WEDŁUG PODKATEGORII",
      sub_h2: "20 podkategorii branżowych — 11 520 unikalnych projektów",
      sub_all_btn: "Zobacz wszystkie 11 520 w Ofercie →",
      how_kicker: "CO DZIEJE SIĘ PO ZAMÓWIENIU",
      how_h2: "Zero stresu. Strona gotowa w 24 godziny.",
      how_sub: "Bez spotkań z agencjami, bez kreatorów i bez miesięcznych abonamentów. Oto dokładnie 3 kroki do Twojej gotowej strony:",
      step1_t: "Bezpieczna płatność Stripe",
      step1_d: "Opłacasz pakiet pod klucz £60/rok (~299 zł) lub gotowy ZIP £15 kartą, Apple Pay lub Google Pay. Zero opłat miesięcznych.",
      step2_t: "Wysyłasz dane firmy i logo (2 min)",
      step2_d: "Wpisujesz nazwę firmy, miasto, usługi i kontakt w krótkim formularzu lub odpisujesz na naszego maila powitalnego.",
      step3_t: "Strona na żywo w 24 godziny",
      step3_d: "Rejestrujemy domenę (.pl / .co.uk / .de / .es), podpinamy SSL, Mapę Google i formularz kontaktowy oraz wysyłamy link + ZIP.",
      offer_h1: "Pełna Oferta — 11 520 Gotowych Stron WWW",
      offer_back: "← Powrót na stronę główną",
      enq_badge: "Bezpośredni kontakt e-mail",
      enq_h3: "Wyślij zapytanie mailowe",
      enq_sub: "Zapytaj o gotową stronę, domenę lub darmowy projekt — odpowiemy prosto na Twój e-mail.",
      enq_btn: "Wyślij zapytanie e-mail →",
      fp_badge: "100% Za Darmo · Bez Zobowiązań",
      fp_h3: "Zobacz Podgląd Swojej Strony na Żywo",
      fp_sub: "Wpisz dane swojej firmy poniżej, a w 3 sekundy wygenerujemy działający podgląd strony dla Twojej branży.",
      fp_btn: "Wygeneruj Darmowy Podgląd →"
    },
    de: {
      nav_home: "Start",
      nav_offer: "Angebot",
      nav_how: "So funktioniert's",
      nav_pricing: "Preise (£15 / £60)",
      nav_enquiry: "E-Mail Anfrage",
      nav_email_us: "E-Mail senden",
      nav_cart: "Warenkorb",
      nav_search: "11.520 Designs durchsuchen — z.B. Werkstatt, Klempner, Dark...",
      hero_badge: "Schlüsselfertige Websites · Live in 24 Std. · 0 €/Monat",
      hero_h1_top: "Ihre Firmen-Website,",
      hero_h1_em: "morgen live für £60/Jahr.",
      hero_sub: "Für Werkstätten, Handwerker, Bauunternehmen, Umzüge & lokale Betriebe in Deutschland, UK & Europa. Inkl. Domain (.de / .co.uk / .pl / .es), schnellem Hosting, HTTPS SSL, Google Maps & Kontaktformular — ohne monatliche Gebühren.",
      cta_order: "Schlüsselfertig bestellen — £60/Jahr",
      cta_preview: "Kostenlose Live-Vorschau",
      trust_1: "Sicherer Stripe Checkout",
      trust_2: "Live in 24 Stunden",
      trust_3: "Domain + SSL inklusive",
      trust_4: "E-Mail Formular & Google Maps",
      checker_title: "LIVE DOMAIN-CHECK (.DE / .CO.UK / .PL / .ES)",
      checker_badge: "In £60/Jahr enthalten",
      checker_btn: "Prüfen",
      checker_hint: "Sofortige Verfügbarkeitsprüfung für europäische Domains.",
      demos_kicker: "LIVE BRANCHEN-DEMOS",
      demos_h2: "Wählen Sie Ihre Branche für eine fertige Live-Demo",
      demos_btn: "Gesamtes Angebot (11.520) →",
      sub_kicker: "ANGEBOT NACH UNTERKATEGORIE",
      sub_h2: "20 Branchen-Unterkategorien — 11.520 exklusive Designs",
      sub_all_btn: "Alle 11.520 im Angebot ansehen →",
      how_kicker: "ABLAUF NACH DER BESTELLUNG",
      how_h2: "Null Stress. In 24 Stunden online — garantiert.",
      how_sub: "Keine Agentur-Termine, kein Baukasten, keine monatlichen Kosten. Ihr Weg zur fertigen Website in 3 Schritten:",
      step1_t: "Sicher via Stripe bezahlen",
      step1_d: "Bestellen Sie das Komplettpaket (£60/Jahr) oder das HTML-ZIP (£15) per Karte, Apple Pay oder Google Pay.",
      step2_t: "Firmendaten & Logo senden",
      step2_d: "Tragen Sie Firmenname, Stadt, Leistungen & Kontakt im kurzen Formular ein oder antworten Sie per E-Mail.",
      step3_t: "In 24 Std. unter Ihrer Domain live",
      step3_d: "Wir registrieren Ihre Domain, richten HTTPS SSL, Google Maps & E-Mail-Formular ein und senden Link + ZIP.",
      offer_h1: "Alle 11.520 schlüsselfertigen Websites",
      offer_back: "← Zurück zur Startseite",
      enq_badge: "Direkter E-Mail Support",
      enq_h3: "E-Mail-Anfrage senden",
      enq_sub: "Fragen zu einer Website, Domain oder kostenlosen Vorschau? Wir antworten direkt per E-Mail.",
      enq_btn: "Anfrage per E-Mail senden →",
      fp_badge: "100% Kostenlos · Unverbindlich",
      fp_h3: "Ihre Firmen-Website live testen",
      fp_sub: "Geben Sie Ihre Firmendaten ein und sehen Sie in 3 Sekunden eine echte interaktive Vorschau.",
      fp_btn: "Kostenlose Vorschau starten →"
    },
    es: {
      nav_home: "Inicio",
      nav_offer: "Oferta",
      nav_how: "Cómo funciona",
      nav_pricing: "Precios (£15 / £60)",
      nav_enquiry: "Consulta Email",
      nav_email_us: "Escríbenos",
      nav_cart: "Carrito",
      nav_search: "Buscar en 11.520 diseños — ej. Taller, Fontanero, Dark...",
      hero_badge: "Webs Llave en Mano · Online en 24h · 0 €/mes",
      hero_h1_top: "La web de tu negocio,",
      hero_h1_em: "online mañana por £60/año.",
      hero_sub: "Para talleres, fontaneros, reformas, mudanzas y negocios locales en España, UK y Europa. Incluye dominio (.es / .co.uk / .pl / .de), hosting rápido, HTTPS SSL, Google Maps y formulario de email — sin cuotas mensuales.",
      cta_order: "Pedir Web Completa — £60/año",
      cta_preview: "Ver Vista Previa Gratis",
      trust_1: "Pago Seguro Stripe",
      trust_2: "Online en 24 Horas",
      trust_3: "Dominio + SSL Incluidos",
      trust_4: "Formulario Email y Mapa",
      checker_title: "COMPROBAR DOMINIO (.ES / .CO.UK / .PL / .DE)",
      checker_badge: "Incluido en £60/año",
      checker_btn: "Comprobar",
      checker_hint: "Verificación instantánea de disponibilidad de dominio.",
      demos_kicker: "DEMOS EN VIVO POR SECTOR",
      demos_h2: "Haz clic en un sector para probar una web terminada",
      demos_btn: "Ver Toda la Oferta (11.520) →",
      sub_kicker: "EXPLORA LA OFERTA POR SUBCATEGORÍA",
      sub_h2: "20 subcategorías — 11.520 diseños exclusivos",
      sub_all_btn: "Ver los 11.520 en Oferta →",
      how_kicker: "QUÉ PASA DESPUÉS DEL PEDIDO",
      how_h2: "Cero estrés. Online en 24 horas — garantizado.",
      how_sub: "Sin agencias caras ni cuotas mensuales. Así lanzamos tu página web en 3 simples pasos:",
      step1_t: "Pago seguro con Stripe",
      step1_d: "Elige el paquete completo (£60/año) o el ZIP (£15) con tarjeta, Apple Pay o Google Pay.",
      step2_t: "Envía tus datos y logo",
      step2_d: "Rellena el breve formulario (nombre, ciudad, servicios y contacto) o responde a nuestro correo.",
      step3_t: "Online bajo tu dominio en 24h",
      step3_d: "Registramos tu dominio, activamos HTTPS SSL, Google Maps y formulario de contacto y te enviamos enlace + ZIP.",
      offer_h1: "Oferta Completa — 11.520 Webs Listas",
      offer_back: "← Volver al inicio",
      enq_badge: "Soporte Directo por Email",
      enq_h3: "Envíanos una Consulta por Email",
      enq_sub: "Pregúntanos sobre tu web, dominio o demo gratuita — respondemos directamente a tu correo.",
      enq_btn: "Enviar Consulta →",
      fp_badge: "100% Gratis · Sin Compromiso",
      fp_h3: "Ve la Web de Tu Negocio en Vivo",
      fp_sub: "Introduce los datos de tu empresa y generaremos una vista previa interactiva en 3 segundos.",
      fp_btn: "Crear Mi Vista Previa Gratis →"
    }
  };

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && DICT[saved]) return saved;
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang && DICT[urlLang]) return urlLang;
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return DICT[nav] ? nav : "en";
  }

  function applyLang(lang) {
    const code = DICT[lang] ? lang : "en";
    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.lang = code;
    const t = DICT[code];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) el.setAttribute("placeholder", t[key]);
    });
    document.querySelectorAll(".entiu-lang-btn").forEach(btn => {
      const active = btn.dataset.lang === code;
      btn.className = active
        ? "entiu-lang-btn rounded-md bg-zinc-950 px-2 py-1 text-[11px] font-extrabold text-white cursor-pointer"
        : "entiu-lang-btn rounded-md px-2 py-1 text-[11px] font-semibold text-zinc-500 hover:text-zinc-950 cursor-pointer";
    });
  }

  function mountSwitcher() {
    const slot = document.getElementById("langSwitcherSlot");
    if (!slot) return;
    slot.innerHTML = `<div class="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-50 p-0.5" aria-label="Language">` +
      ["en", "pl", "de", "es"].map(l =>
        `<button type="button" onclick="EntiuI18n.set('${l}')" data-lang="${l}" class="entiu-lang-btn rounded-md px-2 py-1 text-[11px] font-semibold text-zinc-500 cursor-pointer">${l.toUpperCase()}</button>`
      ).join("") +
      `</div>`;
  }

  global.EntiuI18n = {
    set: applyLang,
    get: detectLang,
    init: function () {
      mountSwitcher();
      applyLang(detectLang());
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", global.EntiuI18n.init);
  } else {
    global.EntiuI18n.init();
  }
})(window);
