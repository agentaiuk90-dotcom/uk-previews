/* Entiu.store Global 16-Region & Multi-Language Engine (Stripe / Apple style selector) */
(function (global) {
  "use strict";

  const STORAGE_KEY = "entiu_lang_v2";

  const REGIONS = [
    { code: "en",    label: "UK / Global · English",        short: "EN (UK)", dir: "ltr" },
    { code: "en-us", label: "United States · English",      short: "EN (US)", dir: "ltr" },
    { code: "pl",    label: "Polska · Polski",              short: "PL",      dir: "ltr" },
    { code: "de",    label: "Deutschland · Deutsch",        short: "DE",      dir: "ltr" },
    { code: "es",    label: "España / LATAM · Español",     short: "ES",      dir: "ltr" },
    { code: "pt",    label: "Brasil / Portugal · Português",short: "PT",      dir: "ltr" },
    { code: "fr",    label: "France · Français",            short: "FR",      dir: "ltr" },
    { code: "it",    label: "Italia · Italiano",            short: "IT",      dir: "ltr" },
    { code: "nl",    label: "Nederland · Nederlands",       short: "NL",      dir: "ltr" },
    { code: "en-au", label: "Australia / Canada · English", short: "EN (AU)", dir: "ltr" },
    { code: "ar",    label: "UAE / MENA · العربية",          short: "AR",      dir: "rtl" },
    { code: "ru",    label: "Россия / CIS · Русский",        short: "RU",      dir: "ltr" },
    { code: "zh",    label: "中国 / Singapore · 中文",        short: "ZH",      dir: "ltr" },
    { code: "ja",    label: "日本 (Japan) · 日本語",          short: "JA",      dir: "ltr" },
    { code: "ko",    label: "대한민국 (Korea) · 한국어",       short: "KO",      dir: "ltr" },
    { code: "hi",    label: "India · हिन्दी",                short: "HI",      dir: "ltr" },
    { code: "sv",    label: "Sverige · Svenska",            short: "SV",      dir: "ltr" },
    { code: "cs",    label: "Česko · Čeština",              short: "CS",      dir: "ltr" },
    { code: "tr",    label: "Türkiye · Türkçe",             short: "TR",      dir: "ltr" },
    { code: "ro",    label: "România · Română",             short: "RO",      dir: "ltr" }
  ];

  const DICT = {
    en: {
      nav_home: "Home", nav_offer: "Offer", nav_how: "How it works", nav_pricing: "Pricing (£15 / £60)",
      nav_enquiry: "Email Enquiry", nav_email_us: "Email Us", nav_cart: "Cart",
      nav_search: "Search 11,520 designs in Offer — e.g. Plumber, Garage, Dark...",
      hero_badge: "Done-For-You Websites · Live in 24 Hours · £0/month",
      hero_h1_top: "Your business website,", hero_h1_em: "live tomorrow for £60/yr.",
      hero_sub: "Built for garages, plumbers, builders, removals & local businesses worldwide. Includes your domain (.co.uk / .com / .pl / .de / .es / .fr), fast global hosting, HTTPS SSL, Google Maps and email enquiry form — zero agency retainers.",
      cta_order: "Order Turnkey Website — £60/yr", cta_preview: "Preview Your Business Free",
      trust_1: "Secure Stripe Checkout", trust_2: "Live in 24 Hours", trust_3: "Domain + SSL Included", trust_4: "Email Form & Google Map",
      demos_kicker: "LIVE INDUSTRY EXAMPLES", demos_h2: "Click any industry to test a finished live website", demos_btn: "Open Full Offer (11,520) →",
      sub_kicker: "BROWSE OFFER BY SUBCATEGORY", sub_h2: "20 business subcategories — 11,520 exclusive designs", sub_all_btn: "View All 11,520 in Offer →",
      how_kicker: "WHAT HAPPENS AFTER YOU ORDER", how_h2: "Zero stress. Live in 24 hours — guaranteed.",
      how_sub: "No agency calls, no DIY builders, no monthly retainers. Here is the exact 3-step process from payment to your finished business website:",
      step1_t: "Pay Securely via Stripe", step1_d: "Order the £60/yr Turnkey package (or £15 ZIP) with Visa, Mastercard, Apple Pay or Google Pay. Instant Stripe receipt, zero monthly fees.",
      step2_t: "Send Business Info & Logo", step2_d: "Fill our 2-minute brief at checkout (name, city, phone, services & photos) or reply directly to your welcome email.",
      step3_t: "Live Under Your Domain in 24h", step3_d: "We register your domain, enable HTTPS SSL, wire Google Maps & email enquiry form, and send your live link + ZIP."
    },
    "en-us": {
      nav_home: "Home", nav_offer: "Offer", nav_how: "How it works", nav_pricing: "Pricing ($19 / $75)",
      nav_enquiry: "Email Inquiry", nav_email_us: "Email Us", nav_cart: "Cart",
      nav_search: "Search 11,520 designs — e.g. Contractor, Auto Shop, Dark...",
      hero_badge: "Done-For-You US Websites · Live in 24 Hours · $0/month",
      hero_h1_top: "Your US business website,", hero_h1_em: "live tomorrow for £60/yr (~$75).",
      hero_sub: "Built for US contractors, auto shops, plumbers, movers & local businesses. Includes your .com domain, fast global hosting, HTTPS SSL, Google Maps and email inquiry form — zero monthly agency fees.",
      cta_order: "Order Turnkey Website — £60/yr", cta_preview: "Preview Your Business Free",
      trust_1: "Secure Stripe Checkout", trust_2: "Live in 24 Hours", trust_3: ".com + SSL Included", trust_4: "Email Form & Google Map",
      demos_kicker: "LIVE INDUSTRY EXAMPLES", demos_h2: "Click any industry to test a finished live website", demos_btn: "Open Full Offer (11,520) →",
      sub_kicker: "BROWSE OFFER BY SUBCATEGORY", sub_h2: "20 business subcategories — 11,520 exclusive designs", sub_all_btn: "View All 11,520 in Offer →",
      how_kicker: "WHAT HAPPENS AFTER YOU ORDER", how_h2: "Zero stress. Live in 24 hours — guaranteed.",
      how_sub: "No agency calls, no DIY builders, no monthly retainers. Your 3-step launch process:",
      step1_t: "Pay Securely via Stripe", step1_d: "Order the turnkey package (£60/yr ≈ $75) or standalone ZIP (£15 ≈ $19) with Card, Apple Pay or Google Pay.",
      step2_t: "Send Business Info & Logo", step2_d: "Fill our 2-minute brief at checkout (name, city, services & contact) or reply to your welcome email.",
      step3_t: "Live Under Your .com in 24h", step3_d: "We register your domain, enable HTTPS SSL, wire Google Maps & email form, and deliver your live site + ZIP."
    },
    "en-au": {
      nav_home: "Home", nav_offer: "Offer", nav_how: "How it works", nav_pricing: "Pricing (£15 / £60)",
      nav_enquiry: "Email Enquiry", nav_email_us: "Email Us", nav_cart: "Cart",
      nav_search: "Search 11,520 designs — e.g. Tradie, Mechanic, Builder...",
      hero_badge: "Done-For-You AU & CA Websites · Live in 24 Hours · $0/month",
      hero_h1_top: "Your tradie & business website,", hero_h1_em: "live tomorrow for £60/yr.",
      hero_sub: "Built for Australian & Canadian tradies, mechanics, builders & local businesses. Includes domain, global CDN hosting, HTTPS SSL, Google Maps and email enquiry form — zero monthly retainers.",
      cta_order: "Order Turnkey Website — £60/yr", cta_preview: "Preview Your Business Free",
      trust_1: "Secure Stripe Checkout", trust_2: "Live in 24 Hours", trust_3: "Domain + SSL Included", trust_4: "Email Form & Google Map",
      demos_kicker: "LIVE INDUSTRY EXAMPLES", demos_h2: "Click any trade to test a finished live website", demos_btn: "Open Full Offer (11,520) →",
      sub_kicker: "BROWSE OFFER BY SUBCATEGORY", sub_h2: "20 trade subcategories — 11,520 exclusive designs", sub_all_btn: "View All 11,520 in Offer →",
      how_kicker: "WHAT HAPPENS AFTER YOU ORDER", how_h2: "Zero stress. Live in 24 hours — guaranteed.",
      how_sub: "No agency calls, no monthly retainers. Your 3-step launch process:",
      step1_t: "Pay Securely via Stripe", step1_d: "Order Turnkey (£60/yr) or Layout ZIP (£15) with Visa, Mastercard, Apple Pay or Google Pay.",
      step2_t: "Send Business Info & Logo", step2_d: "Enter your business name, city, services & contact in our 2-minute brief.",
      step3_t: "Live Under Your Domain in 24h", step3_d: "We launch your site with HTTPS SSL, Google Maps & email form and send your full ZIP."
    },
    pl: {
      nav_home: "Start", nav_offer: "Oferta", nav_how: "Jak to działa", nav_pricing: "Cennik (£15 / £60)",
      nav_enquiry: "Zapytanie e-mail", nav_email_us: "Napisz do nas", nav_cart: "Koszyk",
      nav_search: "Szukaj w 11 520 projektach — np. Warsztat, Hydraulik, Dark...",
      hero_badge: "Gotowa Strona WWW pod Klucz · Na żywo w 24h · 0 zł abonamentu",
      hero_h1_top: "Gotowa strona dla Twojej firmy,", hero_h1_em: "na żywo jutro za £60/rok.",
      hero_sub: "Dla warsztatów, firm budowlanych, transportu, hydraulików i usług lokalnych. W cenie domena (.pl / .co.uk / .com), szybki hosting, certyfikat SSL, Mapa Google i formularz e-mail — zero opłat miesięcznych.",
      cta_order: "Zamów Gotową Stronę — £60/rok", cta_preview: "Zobacz Darmowy Podgląd Firmy",
      trust_1: "Bezpieczna płatność Stripe", trust_2: "Gotowe w 24 godziny", trust_3: "Domena + SSL w cenie", trust_4: "Formularz e-mail i Mapa Google",
      demos_kicker: "GOTOWE DEMA BRANŻOWE NA ŻYWO", demos_h2: "Kliknij branżę i przetestuj gotową działającą stronę", demos_btn: "Otwórz Pełną Ofertę (11 520) →",
      sub_kicker: "PRZEGLĄDAJ OFERTĘ WEDŁUG PODKATEGORII", sub_h2: "20 podkategorii branżowych — 11 520 unikalnych projektów", sub_all_btn: "Zobacz wszystkie 11 520 w Ofercie →",
      how_kicker: "CO DZIEJE SIĘ PO ZAMÓWIENIU", how_h2: "Zero stresu. Strona gotowa w 24 godziny.",
      how_sub: "Bez spotkań z agencjami i bez abonamentów. Oto 3 kroki do Twojej gotowej strony:",
      step1_t: "Bezpieczna płatność Stripe", step1_d: "Opłacasz pakiet pod klucz £60/rok (~299 zł) lub gotowy ZIP £15 kartą, Apple Pay lub Google Pay.",
      step2_t: "Wysyłasz dane firmy i logo (2 min)", step2_d: "Wpisujesz nazwę firmy, miasto, usługi i kontakt w krótkim formularzu lub odpisujesz na maila.",
      step3_t: "Strona na żywo w 24 godziny", step3_d: "Rejestrujemy domenę, podpinamy SSL, Mapę Google i formularz e-mail oraz wysyłamy link + ZIP."
    },
    de: {
      nav_home: "Start", nav_offer: "Angebot", nav_how: "Ablauf", nav_pricing: "Preise (£15 / £60)",
      nav_enquiry: "E-Mail Anfrage", nav_email_us: "Kontakt", nav_cart: "Warenkorb",
      nav_search: "11.520 Designs durchsuchen — z.B. Werkstatt, Handwerker...",
      hero_badge: "Schlüsselfertige Websites · Live in 24 Std. · 0 €/Monat",
      hero_h1_top: "Ihre Firmen-Website,", hero_h1_em: "morgen live für £60/Jahr.",
      hero_sub: "Für Werkstätten, Handwerker, Bauunternehmen & lokale Betriebe. Inkl. Domain (.de / .com), schnellem Hosting, HTTPS SSL, Google Maps & E-Mail-Formular — ohne monatliche Gebühren.",
      cta_order: "Schlüsselfertig bestellen — £60/Jahr", cta_preview: "Kostenlose Live-Vorschau",
      trust_1: "Sicherer Stripe Checkout", trust_2: "Live in 24 Stunden", trust_3: "Domain + SSL inklusive", trust_4: "E-Mail Formular & Google Maps",
      demos_kicker: "LIVE BRANCHEN-DEMOS", demos_h2: "Wählen Sie Ihre Branche für eine fertige Live-Demo", demos_btn: "Gesamtes Angebot (11.520) →",
      sub_kicker: "ANGEBOT NACH UNTERKATEGORIE", sub_h2: "20 Branchen — 11.520 exklusive Designs", sub_all_btn: "Alle 11.520 im Angebot →",
      how_kicker: "ABLAUF NACH DER BESTELLUNG", how_h2: "Null Stress. In 24 Stunden online — garantiert.",
      how_sub: "Keine Agentur-Termine, keine monatlichen Kosten. Ihr Weg zur fertigen Website in 3 Schritten:",
      step1_t: "Sicher via Stripe bezahlen", step1_d: "Bestellen Sie das Komplettpaket (£60/Jahr ≈ 69 €) oder ZIP (£15) per Karte, Apple Pay oder Google Pay.",
      step2_t: "Firmendaten & Logo senden", step2_d: "Tragen Sie Firmenname, Stadt, Leistungen & Kontakt ein oder antworten Sie per E-Mail.",
      step3_t: "In 24 Std. unter Ihrer Domain live", step3_d: "Wir registrieren Ihre Domain, richten SSL, Google Maps & Formular ein und senden Link + ZIP."
    },
    es: {
      nav_home: "Inicio", nav_offer: "Oferta", nav_how: "Cómo funciona", nav_pricing: "Precios (£15 / £60)",
      nav_enquiry: "Consulta Email", nav_email_us: "Escríbenos", nav_cart: "Carrito",
      nav_search: "Buscar en 11.520 diseños — ej. Taller, Fontanero, Dark...",
      hero_badge: "Webs Llave en Mano · Online en 24h · 0 €/mes",
      hero_h1_top: "La web de tu negocio,", hero_h1_em: "online mañana por £60/año.",
      hero_sub: "Para talleres, fontaneros, reformas, mudanzas y negocios locales. Incluye dominio (.es / .com), hosting rápido, HTTPS SSL, Google Maps y formulario de email — sin cuotas mensuales.",
      cta_order: "Pedir Web Completa — £60/año", cta_preview: "Ver Vista Previa Gratis",
      trust_1: "Pago Seguro Stripe", trust_2: "Online en 24 Horas", trust_3: "Dominio + SSL Incluidos", trust_4: "Formulario Email y Mapa",
      demos_kicker: "DEMOS EN VIVO POR SECTOR", demos_h2: "Haz clic en un sector para probar una web terminada", demos_btn: "Ver Toda la Oferta (11.520) →",
      sub_kicker: "EXPLORA LA OFERTA POR SUBCATEGORÍA", sub_h2: "20 subcategorías — 11.520 diseños exclusivos", sub_all_btn: "Ver los 11.520 en Oferta →",
      how_kicker: "QUÉ PASA DESPUÉS DEL PEDIDO", how_h2: "Cero estrés. Online en 24 horas — garantizado.",
      how_sub: "Sin agencias caras ni cuotas mensuales. Así lanzamos tu web en 3 pasos:",
      step1_t: "Pago seguro con Stripe", step1_d: "Elige el paquete completo (£60/año ≈ 69 €) o el ZIP (£15) con tarjeta, Apple Pay o Google Pay.",
      step2_t: "Envía tus datos y logo", step2_d: "Rellena el breve formulario con tus servicios y contacto o responde a nuestro correo.",
      step3_t: "Online bajo tu dominio en 24h", step3_d: "Registramos tu dominio, activamos SSL, Google Maps y formulario y te enviamos enlace + ZIP."
    },
    fr: {
      nav_home: "Accueil", nav_offer: "Offre", nav_how: "Fonctionnement", nav_pricing: "Tarifs (£15 / £60)",
      nav_enquiry: "Contact Email", nav_email_us: "Nous écrire", nav_cart: "Panier",
      nav_search: "Rechercher parmi 11 520 designs — Garage, Plombier...",
      hero_badge: "Sites Web Clé en Main · En ligne en 24h · 0 €/mois",
      hero_h1_top: "Votre site professionnel,", hero_h1_em: "en ligne demain pour £60/an.",
      hero_sub: "Conçu pour garages, plombiers, artisans, déménageurs et entreprises locales. Domaine (.fr / .com), hébergement rapide, HTTPS SSL, Google Maps et formulaire email inclus — sans abonnement mensuel.",
      cta_order: "Commander Clé en Main — £60/an", cta_preview: "Aperçu Gratuit de Votre Entreprise",
      trust_1: "Paiement Sécurisé Stripe", trust_2: "En ligne en 24h", trust_3: "Domaine + SSL Inclus", trust_4: "Formulaire Email & Carte",
      demos_kicker: "DÉMOS EN DIRECT PAR MÉTIER", demos_h2: "Cliquez sur un métier pour tester un site complet", demos_btn: "Voir Toute l'Offre (11 520) →",
      sub_kicker: "PARCOURIR PAR SOUS-CATÉGORIE", sub_h2: "20 secteurs — 11 520 designs exclusifs", sub_all_btn: "Voir les 11 520 dans l'Offre →",
      how_kicker: "APRÈS VOTRE COMMANDE", how_h2: "Zéro stress. En ligne en 24 heures — garanti.",
      how_sub: "Sans agence coûteuse ni forfait mensuel. Votre lancement en 3 étapes :",
      step1_t: "Paiement sécurisé via Stripe", step1_d: "Commandez le pack complet (£60/an ≈ 69 €) ou le ZIP (£15) par carte, Apple Pay ou Google Pay.",
      step2_t: "Envoyez vos infos & logo", step2_d: "Remplissez notre brief de 2 minutes ou répondez simplement à notre email.",
      step3_t: "En ligne sous votre domaine en 24h", step3_d: "Nous enregistrons votre domaine, activons SSL, Google Maps et formulaire, puis envoyons lien + ZIP."
    },
    it: {
      nav_home: "Home", nav_offer: "Offerta", nav_how: "Come funziona", nav_pricing: "Prezzi (£15 / £60)",
      nav_enquiry: "Richiesta Email", nav_email_us: "Scrivici", nav_cart: "Carrello",
      nav_search: "Cerca tra 11.520 design — Officina, Idraulico, Edilizia...",
      hero_badge: "Siti Web Chiavi in Mano · Online in 24h · 0 €/mese",
      hero_h1_top: "Il sito per la tua azienda,", hero_h1_em: "online domani a £60/anno.",
      hero_sub: "Per officine, idraulici, imprese edili, traslochi e attività locali. Include dominio (.it / .com), hosting veloce, HTTPS SSL, Google Maps e modulo email — zero canoni mensili.",
      cta_order: "Ordina Sito Completo — £60/anno", cta_preview: "Anteprima Gratuita Azienda",
      trust_1: "Pagamento Sicuro Stripe", trust_2: "Online in 24 Ore", trust_3: "Dominio + SSL Inclusi", trust_4: "Modulo Email e Mappa",
      demos_kicker: "DEMO LIVE PER SETTORE", demos_h2: "Clicca un settore per provare un sito già pronto", demos_btn: "Apri Offerta Completa (11.520) →",
      sub_kicker: "SFOGLIA PER SOTTOCATEGORIA", sub_h2: "20 categorie — 11.520 design esclusivi", sub_all_btn: "Vedi tutti gli 11.520 →",
      how_kicker: "COSA SUCCEDE DOPO L'ORDINE", how_h2: "Zero stress. Online in 24 ore — garantito.",
      how_sub: "Nessuna agenzia costosa e nessun abbonamento mensile. Ecco i 3 passaggi:",
      step1_t: "Paga in sicurezza con Stripe", step1_d: "Ordina il pacchetto completo (£60/anno ≈ 69 €) o lo ZIP (£15) con carta, Apple Pay o Google Pay.",
      step2_t: "Invia dati aziendali e logo", step2_d: "Compila il breve modulo o rispondi direttamente alla nostra email.",
      step3_t: "Online sul tuo dominio in 24h", step3_d: "Registriamo il dominio, attiviamo SSL, Google Maps e modulo contatti e inviamo link + ZIP."
    },
    nl: {
      nav_home: "Home", nav_offer: "Aanbod", nav_how: "Hoe het werkt", nav_pricing: "Prijzen (£15 / £60)",
      nav_enquiry: "E-mail aanvraag", nav_email_us: "Mail ons", nav_cart: "Winkelwagen",
      nav_search: "Zoek in 11.520 ontwerpen — Garage, Loodgieter, Bouw...",
      hero_badge: "Kant-en-Klare Websites · Live binnen 24 uur · €0/maand",
      hero_h1_top: "Uw zakelijke website,", hero_h1_em: "morgen live voor £60/jaar.",
      hero_sub: "Voor garages, loodgieters, aannemers, verhuizers & lokale bedrijven. Inclusief domein (.nl / .com), snelle hosting, HTTPS SSL, Google Maps en e-mailformulier — zonder maandkosten.",
      cta_order: "Bestel Complete Website — £60/jr", cta_preview: "Gratis Live Voorbeeld",
      trust_1: "Veilig betalen via Stripe", trust_2: "Live binnen 24 uur", trust_3: "Domein + SSL inbegrepen", trust_4: "E-mailformulier & Kaart",
      demos_kicker: "LIVE BRANCHE-VOORBEELDEN", demos_h2: "Klik op een branche en test een complete website", demos_btn: "Bekijk Volledig Aanbod (11.520) →",
      sub_kicker: "ZOEK OP SUBCATEGORIE", sub_h2: "20 branches — 11.520 unieke ontwerpen", sub_all_btn: "Alle 11.520 bekijken →",
      how_kicker: "NA UW BESTELLING", how_h2: "Geen gedoe. Binnen 24 uur online.",
      how_sub: "Geen dure bureaus en geen maandabonnementen. In 3 stappen live:",
      step1_t: "Veilig betalen via Stripe", step1_d: "Bestel het totaalpakket (£60/jaar ≈ €69) of ZIP (£15) met kaart, Apple Pay of Google Pay.",
      step2_t: "Stuur bedrijfsgegevens & logo", step2_d: "Vul het korte formulier in of antwoord op onze welkomstmail.",
      step3_t: "Binnen 24 uur live op uw domein", step3_d: "Wij registreren uw domein, koppelen SSL, Google Maps & e-mailformulier en sturen link + ZIP."
    },
    pt: {
      nav_home: "Início", nav_offer: "Oferta", nav_how: "Como funciona", nav_pricing: "Preços (£15 / £60)",
      nav_enquiry: "Contato Email", nav_email_us: "Enviar Email", nav_cart: "Carrinho",
      nav_search: "Pesquisar 11.520 designs — Oficina, Eletricista, Obras...",
      hero_badge: "Sites Prontos Chave na Mão · Online em 24h · 0 €/mês",
      hero_h1_top: "O site da sua empresa,", hero_h1_em: "no ar amanhã por £60/ano.",
      hero_sub: "Para oficinas, encanadores, construtores, mudanças e negócios locais. Inclui domínio (.pt / .com), hospedagem rápida, HTTPS SSL, Google Maps e formulário de email — sem mensalidades.",
      cta_order: "Pedir Site Completo — £60/ano", cta_preview: "Ver Prévia Grátis Agora",
      trust_1: "Pagamento Seguro Stripe", trust_2: "Online em 24 Horas", trust_3: "Domínio + SSL Incluídos", trust_4: "Formulário Email e Mapa",
      demos_kicker: "DEMOS AO VIVO POR SETOR", demos_h2: "Clique em um setor para testar um site pronto", demos_btn: "Ver Toda a Oferta (11.520) →",
      sub_kicker: "EXPLORAR POR SUBCATEGORIA", sub_h2: "20 subcategorias — 11.520 designs exclusivos", sub_all_btn: "Ver todos os 11.520 →",
      how_kicker: "APÓS O PEDIDO", how_h2: "Zero estresse. No ar em 24 horas — garantido.",
      how_sub: "Sem agências caras e sem mensalidades. Veja os 3 passos:",
      step1_t: "Pague com segurança via Stripe", step1_d: "Escolha o pacote completo (£60/ano) ou o ZIP (£15) com cartão, Apple Pay ou Google Pay.",
      step2_t: "Envie dados e logotipo", step2_d: "Preencha nosso formulário rápido ou responda ao nosso email.",
      step3_t: "No ar com seu domínio em 24h", step3_d: "Registramos seu domínio, ativamos SSL, Google Maps e formulário e enviamos link + ZIP."
    },
    sv: {
      nav_home: "Hem", nav_offer: "Utbud", nav_how: "Så funkar det", nav_pricing: "Priser (£15 / £60)",
      nav_enquiry: "E-postförfrågan", nav_email_us: "Mejla oss", nav_cart: "Varukorg",
      nav_search: "Sök bland 11 520 designer — Verkstad, VVS, Bygg...",
      hero_badge: "Nyckelfärdiga Hemsidor · Live inom 24h · 0 kr/mån",
      hero_h1_top: "Din företagshemsida,", hero_h1_em: "live imorgon för £60/år.",
      hero_sub: "För verkstäder, hantverkare, byggare, flyttfirmor & lokala företag. Inkluderar domän (.se / .com), snabb hosting, HTTPS SSL, Google Maps och kontaktformulär — inga månadsavgifter.",
      cta_order: "Beställ Nyckelfärdig — £60/år", cta_preview: "Gratis Live-Förhandsvisning",
      trust_1: "Säker Stripe-betalning", trust_2: "Live inom 24 timmar", trust_3: "Domän + SSL ingår", trust_4: "E-postformulär & Karta",
      demos_kicker: "LIVE BRANSCHEXEMPEL", demos_h2: "Klicka på en bransch för att testa en färdig hemsida", demos_btn: "Öppna Hela Utbudet (11 520) →",
      sub_kicker: "BLÄDDRA EFTER KATEGORI", sub_h2: "20 branscher — 11 520 unika designer", sub_all_btn: "Visa alla 11 520 →",
      how_kicker: "EFTER DIN BESTÄLLNING", how_h2: "Noll stress. Live inom 24 timmar.",
      how_sub: "Inga dyra byråer eller månadsavgifter. Så funkar det i 3 steg:",
      step1_t: "Betala säkert med Stripe", step1_d: "Beställ nyckelfärdigt (£60/år) eller HTML ZIP (£15) med kort, Apple Pay eller Google Pay.",
      step2_t: "Skicka företagsinfo & logga", step2_d: "Fyll i vårt snabba formulär eller svara på välkomstmejlet.",
      step3_t: "Live på din domän inom 24h", step3_d: "Vi registrerar domän, aktiverar SSL, Google Maps & kontaktformulär och skickar länk + ZIP."
    },
    no: {
      nav_home: "Hjem", nav_offer: "Tilbud", nav_how: "Slik fungerer det", nav_pricing: "Priser (£15 / £60)",
      nav_enquiry: "E-postforespørsel", nav_email_us: "Send e-post", nav_cart: "Handlekurv",
      nav_search: "Søk i 11 520 design — Verksted, Rørlegger, Bygg...",
      hero_badge: "Nøkkelferdige Nettsider · Live på 24t · 0 kr/mnd",
      hero_h1_top: "Din bedriftsnettside,", hero_h1_em: "live i morgen for £60/år.",
      hero_sub: "For verksteder, håndverkere, byggmestere og lokale bedrifter. Inkluderer domene (.no / .com), rask hosting, HTTPS SSL, Google Maps og e-postskjema — null månedsgebyr.",
      cta_order: "Bestill Nøkkelferdig — £60/år", cta_preview: "Gratis Forhåndsvisning",
      trust_1: "Trygg Stripe-betaling", trust_2: "Live innen 24 timer", trust_3: "Domene + SSL inkludert", trust_4: "E-postskjema & Kart",
      demos_kicker: "LIVE BRANSJE-DEMOER", demos_h2: "Klikk på en bransje for å teste en ferdig nettside", demos_btn: "Se Hele Tilbudet (11 520) →",
      sub_kicker: "BLA ETTER UNDERKATEGORI", sub_h2: "20 bransjer — 11 520 unike design", sub_all_btn: "Se alle 11 520 →",
      how_kicker: "ETTER BESTILLING", how_h2: "Null stress. Live på 24 timer.",
      how_sub: "Ingen dyre byråer eller månedlige kostnader. 3 enkle steg:",
      step1_t: "Betal trygt med Stripe", step1_d: "Bestill komplett pakke (£60/år) eller ZIP (£15) med kort, Apple Pay eller Google Pay.",
      step2_t: "Send bedriftsinfo & logo", step2_d: "Fyll ut vårt korte skjema eller svar på velkomst-e-posten.",
      step3_t: "Live på ditt domene på 24t", step3_d: "Vi setter opp domene, SSL, Google Maps og kontaktskjema og sender lenke + ZIP."
    },
    cs: {
      nav_home: "Domů", nav_offer: "Nabídka", nav_how: "Jak to funguje", nav_pricing: "Ceník (£15 / £60)",
      nav_enquiry: "E-mail poptávka", nav_email_us: "Napište nám", nav_cart: "Košík",
      nav_search: "Hledat v 11 520 designech — Autoservis, Instalatér...",
      hero_badge: "Hotové Weby na Klíč · Online za 24h · 0 Kč/měsíc",
      hero_h1_top: "Firemní web na klíč,", hero_h1_em: "online zítra za £60/rok.",
      hero_sub: "Pro autoservisy, řemeslníky, stavební firmy a lokální služby. V ceně doména (.cz / .com), rychlý hosting, HTTPS SSL, Google Mapy a e-mailový formulář — žádné měsíční poplatky.",
      cta_order: "Objednat Web na Klíč — £60/rok", cta_preview: "Ukázka Vaší Firmy Zdarma",
      trust_1: "Bezpečná platba Stripe", trust_2: "Online do 24 hodin", trust_3: "Doména + SSL v ceně", trust_4: "E-mail formulář a Mapa",
      demos_kicker: "ŽIVÉ UKÁZKY PODLE OBORU", demos_h2: "Klikněte na obor a vyzkoušejte hotový web", demos_btn: "Otevřít Celou Nabídku (11 520) →",
      sub_kicker: "PROCHÁZET PODLE KATEGORIE", sub_h2: "20 oborů — 11 520 unikátních designů", sub_all_btn: "Zobrazit všech 11 520 →",
      how_kicker: "CO SE STANE PO OBJEDNÁNÍ", how_h2: "Bez stresu. Online do 24 hodin.",
      how_sub: "Žádné drahé agentury ani měsíční paušály. 3 jednoduché kroky:",
      step1_t: "Bezpečná platba přes Stripe", step1_d: "Objednejte balíček na klíč (£60/rok) nebo ZIP (£15) kartou, Apple Pay či Google Pay.",
      step2_t: "Pošlete údaje a logo", step2_d: "Vyplňte krátký formulář nebo odpovězte na uvítací e-mail.",
      step3_t: "Online na vaší doméně do 24h", step3_d: "Zaregistrujeme doménu, zapneme SSL, mapu a formulář a pošleme odkaz + ZIP."
    },
    ro: {
      nav_home: "Acasă", nav_offer: "Ofertă", nav_how: "Cum funcționează", nav_pricing: "Prețuri (£15 / £60)",
      nav_enquiry: "Cerere Email", nav_email_us: "Scrie-ne", nav_cart: "Coș",
      nav_search: "Caută în 11.520 designuri — Service Auto, Instalator...",
      hero_badge: "Site-uri la Cheie · Online în 24h · 0 €/lună",
      hero_h1_top: "Site-ul firmei tale,", hero_h1_em: "online mâine cu £60/an.",
      hero_sub: "Pentru service-uri auto, instalatori, constructori și firme locale. Include domeniu (.ro / .com), găzduire rapidă, HTTPS SSL, Google Maps și formular email — fără abonamente lunare.",
      cta_order: "Comandă Site Complet — £60/an", cta_preview: "Previzualizare Gratuită",
      trust_1: "Plată Securizată Stripe", trust_2: "Online în 24 de ore", trust_3: "Domeniu + SSL Incluse", trust_4: "Formular Email & Hartă",
      demos_kicker: "DEMO-URI LIVE PE DOMENII", demos_h2: "Alege un domeniu pentru a testa un site gata făcut", demos_btn: "Deschide Toată Oferta (11.520) →",
      sub_kicker: "RĂSFOIEȘTE PE SUBCATEGORII", sub_h2: "20 subcategorii — 11.520 designuri unice", sub_all_btn: "Vezi toate 11.520 →",
      how_kicker: "DUPĂ COMANDĂ", how_h2: "Fără stres. Online în 24 de ore.",
      how_sub: "Fără agenții scumpe și fără taxe lunare. Iată cei 3 pași simpli:",
      step1_t: "Plată sigură prin Stripe", step1_d: "Comandă pachetul complet (£60/an) sau ZIP (£15) cu card, Apple Pay sau Google Pay.",
      step2_t: "Trimiți datele și logo-ul", step2_d: "Completezi formularul rapid sau răspunzi la emailul de bun venit.",
      step3_t: "Online pe domeniul tău în 24h", step3_d: "Înregistrăm domeniul, activăm SSL, Google Maps și formularul, apoi trimitem link + ZIP."
    },
    tr: {
      nav_home: "Ana Sayfa", nav_offer: "Teklif", nav_how: "Nasıl Çalışır", nav_pricing: "Fiyatlar (£15 / £60)",
      nav_enquiry: "E-posta Talebi", nav_email_us: "Bize Yazın", nav_cart: "Sepet",
      nav_search: "11.520 tasarımda ara — Oto Servis, Tesisat, İnşaat...",
      hero_badge: "Anahtar Teslim Web Siteleri · 24 Saatte Yayında · Aylık £0",
      hero_h1_top: "İşletmenizin web sitesi,", hero_h1_em: "yarın yayında — £60/yıl.",
      hero_sub: "Yerel işletmeler, ustalar, oto servisler ve firmalar için. Alan adı (.com / .com.tr), hızlı hosting, HTTPS SSL, Google Haritalar ve e-posta formu dahil — aylık ücret yok.",
      cta_order: "Anahtar Teslim Sipariş — £60/yıl", cta_preview: "Ücretsiz Canlı Önizleme",
      trust_1: "Güvenli Stripe Ödeme", trust_2: "24 Saatte Yayında", trust_3: "Alan Adı + SSL Dahil", trust_4: "E-posta Formu & Harita",
      demos_kicker: "CANLI SEKTÖR ÖRNEKLERİ", demos_h2: "Hazır bir web sitesini test etmek için sektör seçin", demos_btn: "Tüm Teklifleri Gör (11.520) →",
      sub_kicker: "ALT KATEGORİYE GÖRE KEŞFET", sub_h2: "20 sektör — 11.520 benzersiz tasarım", sub_all_btn: "Tüm 11.520 Tasarım →",
      how_kicker: "SİPARİŞTEN SONRA", how_h2: "Sıfır stres. 24 saatte yayında.",
      how_sub: "Yüksek ajans ücretleri yok. 3 basit adımda siteniz hazır:",
      step1_t: "Stripe ile Güvenli Ödeme", step1_d: "Kart, Apple Pay veya Google Pay ile £60/yıl paketini veya £15 ZIP'i seçin.",
      step2_t: "İşletme Bilgileri & Logo", step2_d: "Kısa formu doldurun veya hoş geldiniz e-postamıza yanıt verin.",
      step3_t: "24 Saatte Yayında", step3_d: "Alan adınızı, SSL, Google Harita ve formu kurup canlı bağlantıyı gönderiyoruz."
    },
    ar: {
      nav_home: "الرئيسية", nav_offer: "العروض", nav_how: "كيف نعمل", nav_pricing: "الأسعار (£15 / £60)",
      nav_enquiry: "استفسار بالبريد", nav_email_us: "راسلنا", nav_cart: "السلة",
      nav_search: "ابحث في 11,520 تصميماً جاهزاً...",
      hero_badge: "مواقع جاهزة خلال 24 ساعة · بدون رسوم شهرية",
      hero_h1_top: "موقع شركتك الاحترافي،", hero_h1_em: "جاهز غداً مقابل £60 سنوياً.",
      hero_sub: "مصمم للشركات المحلية والورش والمقاولين والخدمات. يشمل النطاق (.ae / .com / .co.uk)، استضافة سريعة، شهادة SSL، خرائط جوجل ونموذج مراسلة بالبريد.",
      cta_order: "اطلب موقعك الجاهز — £60/سنة", cta_preview: "معاينة مجانية لشركتك",
      trust_1: "دفع آمن عبر Stripe", trust_2: "جاهز خلال 24 ساعة", trust_3: "نطاق + SSL مشمول", trust_4: "نموذج بريد وخريطة",
      demos_kicker: "نماذج حية حسب المجال", demos_h2: "اختر مجالك لتجربة موقع جاهز مباشرة", demos_btn: "تصفح جميع العروض (11,520) ←",
      sub_kicker: "تصفح حسب الفئة الفرعية", sub_h2: "20 مجالاً — 11,520 تصميماً حصرياً", sub_all_btn: "عرض كل التصاميم ←",
      how_kicker: "خطوات العمل بعد الطلب", how_h2: "بدون تعقيد. موقعك جاهز خلال 24 ساعة.",
      how_sub: "بدون اشتراكات شهرية أو وكالات باهظة. 3 خطوات بسيطة:",
      step1_t: "دفع آمن عبر Stripe", step1_d: "اختر الباقة الكاملة (£60/سنة) أو ملف ZIP (£15) بالبطاقة أو Apple Pay.",
      step2_t: "أرسل بيانات شركتك والشعار", step2_d: "املأ النموذج السريع أو رد على بريد الترحيب.",
      step3_t: "موقعك مباشر خلال 24 ساعة", step3_d: "نقوم بتفعيل النطاق وشهادة SSL والخريطة ونموذج التواصل وإرسال الرابط."
    },
    ru: {
      nav_home: "Главная", nav_offer: "Каталог", nav_how: "Как это работает", nav_pricing: "Цены (£15 / £60)",
      nav_enquiry: "Запрос по Email", nav_email_us: "Написать нам", nav_cart: "Корзина",
      nav_search: "Поиск среди 11 520 дизайнов — Автосервис, Ремонт...",
      hero_badge: "Готовые сайты под ключ · Запуск за 24 часа · £0/мес",
      hero_h1_top: "Готовый сайт для вашего бизнеса,", hero_h1_em: "онлайн завтра за £60/год.",
      hero_sub: "Для автосервисов, строителей, мастеров, перевозок и локальных компаний. Включает домен, быстрый хостинг, HTTPS SSL, карту и форму обратной связи — без ежемесячной платы.",
      cta_order: "Заказать сайт под ключ — £60/год", cta_preview: "Бесплатное превью сайта",
      trust_1: "Безопасная оплата Stripe", trust_2: "Запуск за 24 часа", trust_3: "Домен + SSL включены", trust_4: "Форма Email и карта",
      demos_kicker: "ЖИВЫЕ ПРИМЕРЫ ПО НИШАМ", demos_h2: "Выберите отрасль и протестируйте готовый сайт", demos_btn: "Открыть весь каталог (11 520) →",
      sub_kicker: "ПОДКАТЕГОРИИ КАТАЛОГА", sub_h2: "20 ниш — 11 520 уникальных дизайнов", sub_all_btn: "Смотреть все 11 520 →",
      how_kicker: "ЧТО ПОСЛЕ ЗАКАЗА", how_h2: "Без лишних хлопот. Сайт готов за 24 часа.",
      how_sub: "Без дорогих агентств и подписок. 3 простых шага:",
      step1_t: "Безопасная оплата через Stripe", step1_d: "Оформите пакет под ключ (£60/год) или ZIP-архив (£15) картой или Apple Pay.",
      step2_t: "Отправьте данные и логотип", step2_d: "Заполните короткую анкету или ответьте на наше письмо.",
      step3_t: "Запуск на вашем домене за 24ч", step3_d: "Мы подключим домен, SSL, карту и форму заявок и пришлём ссылку + ZIP."
    },
    zh: {
      nav_home: "首页", nav_offer: "全部方案", nav_how: "流程说明", nav_pricing: "价格 (£15 / £60)",
      nav_enquiry: "邮件咨询", nav_email_us: "联系我们", nav_cart: "购物车",
      nav_search: "搜索 11,520 套专属网站设计...",
      hero_badge: "一站式企业官网 · 24小时上线 · 零月费",
      hero_h1_top: "您的专属企业官网，", hero_h1_em: "明天上线仅需 £60/年。",
      hero_sub: "专为全球本地企业、维修、建筑、物流与服务行业打造。包含域名、高速全球托管、HTTPS SSL、地图与邮件咨询表单——无任何月度代理费。",
      cta_order: "订购全包官网 — £60/年", cta_preview: "免费生成企业实时预览",
      trust_1: "Stripe 安全支付", trust_2: "24小时极速上线", trust_3: "含域名与 SSL", trust_4: "邮件表单与地图",
      demos_kicker: "行业在线演示", demos_h2: "点击任意行业体验成品网站", demos_btn: "浏览全部 11,520 套 →",
      sub_kicker: "按行业分类浏览", sub_h2: "20 大行业子类 — 11,520 套独家设计", sub_all_btn: "查看全部 11,520 套 →",
      how_kicker: "下单后流程", how_h2: "省心省力，24小时内上线。",
      how_sub: "无需昂贵建站公司，只需简单 3 步：",
      step1_t: "通过 Stripe 安全付款", step1_d: "选择全包年付 (£60/年) 或源码 ZIP (£15)，支持银行卡与 Apple Pay。",
      step2_t: "提交企业资料与 Logo", step2_d: "填写 2 分钟简介表或直接回复欢迎邮件。",
      step3_t: "24小时内绑定域名上线", step3_d: "我们完成域名、SSL、地图与表单配置并交付网站链接与 ZIP。"
    },
    ja: {
      nav_home: "ホーム", nav_offer: "デザイン一覧", nav_how: "ご利用の流れ", nav_pricing: "料金 (£15 / £60)",
      nav_enquiry: "メール相談", nav_email_us: "お問い合わせ", nav_cart: "カート",
      nav_search: "11,520種類のデザインから検索...",
      hero_badge: "プロ品質のビジネスサイト · 24時間公開 · 月額£0",
      hero_h1_top: "あなたのビジネスサイトを、", hero_h1_em: "明日公開・年額£60で。",
      hero_sub: "整備工場・施工業者・運送・地域ビジネス向け。独自ドメイン、高速ホスティング、HTTPS SSL、Googleマップ、メールフォーム込みで月額費用ゼロ。",
      cta_order: "おまかせ制作を注文 — £60/年", cta_preview: "無料でライブプレビュー",
      trust_1: "安全なStripe決済", trust_2: "24時間以内に公開", trust_3: "ドメイン+SSL込み", trust_4: "メールフォーム＆地図",
      demos_kicker: "業種別ライブデモ", demos_h2: "業種をクリックして完成サイトを体験", demos_btn: "全11,520デザインを見る →",
      sub_kicker: "カテゴリーから探す", sub_h2: "20業種 — 11,520種類の限定デザイン", sub_all_btn: "すべて見る →",
      how_kicker: "ご注文後の流れ", how_h2: "手間いらず。24時間で公開保証。",
      how_sub: "高額な制作会社や月額費は不要。たった3ステップ：",
      step1_t: "Stripeで安全にお支払い", step1_d: "年額£60の完全おまかせプランまたは£15のHTML ZIPを選択。",
      step2_t: "会社情報とロゴを送信", step2_d: "2分のフォーム入力またはメール返信でお知らせください。",
      step3_t: "24時間以内に公開完了", step3_d: "ドメイン・SSL・地図・メールフォームを設定し公開URLとZIPをお届け。"
    },
    ko: {
      nav_home: "홈", nav_offer: "전체 상품", nav_how: "진행 방식", nav_pricing: "가격 (£15 / £60)",
      nav_enquiry: "이메일 문의", nav_email_us: "문의하기", nav_cart: "장바구니",
      nav_search: "11,520개 디자인 검색...",
      hero_badge: "맞춤형 비즈니스 웹사이트 · 24시간 내 오픈 · 월 비용 £0",
      hero_h1_top: "당신의 비즈니스 웹사이트,", hero_h1_em: "내일 바로 오픈 — 연 £60.",
      hero_sub: "정비소, 시공, 이사, 지역 비즈니스를 위한 완성형 웹사이트. 도메인, 초고속 호스팅, HTTPS SSL, 지도 및 이메일 문의 폼 포함 — 월 유지비 없음.",
      cta_order: "완성형 웹사이트 주문 — £60/년", cta_preview: "무료 실시간 미리보기",
      trust_1: "안전한 Stripe 결제", trust_2: "24시간 내 오픈", trust_3: "도메인 + SSL 포함", trust_4: "이메일 폼 & 지도",
      demos_kicker: "업종별 라이브 데모", demos_h2: "업종을 선택해 완성된 웹사이트를 체험해 보세요", demos_btn: "전체 11,520개 보기 →",
      sub_kicker: "카테고리별 보기", sub_h2: "20개 업종 — 11,520개 독점 디자인", sub_all_btn: "전체 보기 →",
      how_kicker: "주문 후 진행 절차", how_h2: "간단하게 24시간 내 오픈.",
      how_sub: "비싼 에이전시 비용 없이 3단계로 끝납니다:",
      step1_t: "Stripe로 안전하게 결제", step1_d: "연 £60 올인원 패키지 또는 £15 ZIP 소스를 카드/Apple Pay로 결제하세요.",
      step2_t: "업체 정보와 로고 전송", step2_d: "2분 브리프를 작성하거나 환영 이메일에 회신해 주세요.",
      step3_t: "24시간 내 도메인 연결 오픈", step3_d: "도메인, SSL, 지도 및 문의 폼을 설정해 라이브 링크와 ZIP을 드립니다."
    },
    hi: {
      nav_home: "होम", nav_offer: "ऑफ़र", nav_how: "यह कैसे काम करता है", nav_pricing: "कीमत (£15 / £60)",
      nav_enquiry: "ईमेल पूछताछ", nav_email_us: "हमें ईमेल करें", nav_cart: "कार्ट",
      nav_search: "11,520 डिज़ाइन खोजें...",
      hero_badge: "रेडी-टू-लॉन्च वेबसाइट · 24 घंटे में लाइव · £0/माह",
      hero_h1_top: "आपके व्यवसाय की वेबसाइट,", hero_h1_em: "कल लाइव सिर्फ £60/वर्ष में।",
      hero_sub: "स्थानीय व्यवसायों, सेवाओं और कंपनियों के लिए। डोमेन, तेज़ होस्टिंग, HTTPS SSL, गूगल मैप और ईमेल फ़ॉर्म शामिल — कोई मासिक शुल्क नहीं।",
      cta_order: "वेबसाइट ऑर्डर करें — £60/वर्ष", cta_preview: "मुफ़्त लाइव प्रीव्यू देखें",
      trust_1: "सुरक्षित Stripe भुगतान", trust_2: "24 घंटे में लाइव", trust_3: "डोमेन + SSL शामिल", trust_4: "ईमेल फ़ॉर्म और मैप",
      demos_kicker: "लाइव इंडस्ट्री डेमो", demos_h2: "तैयार वेबसाइट देखने के लिए किसी भी श्रेणी पर क्लिक करें", demos_btn: "सभी 11,520 डिज़ाइन देखें →",
      sub_kicker: "श्रेणी के अनुसार देखें", sub_h2: "20 श्रेणियाँ — 11,520 अनोखे डिज़ाइन", sub_all_btn: "सभी देखें →",
      how_kicker: "ऑर्डर के बाद की प्रक्रिया", how_h2: "बिना तनाव के 24 घंटे में लाइव।",
      how_sub: "कोई भारी एजेंसी शुल्क नहीं। बस 3 आसान चरण:",
      step1_t: "Stripe से सुरक्षित भुगतान", step1_d: "कार्ड या Apple/Google Pay से £60/वर्ष या £15 ZIP चुनें।",
      step2_t: "व्यवसाय की जानकारी और लोगो भेजें", step2_d: "2 मिनट का फ़ॉर्म भरें या ईमेल का जवाब दें।",
      step3_t: "24 घंटे में आपकी वेबसाइट लाइव", step3_d: "हम डोमेन, SSL, मैप और ईमेल फ़ॉर्म सेट करके लिंक और ZIP भेजते हैं।"
    }
  };

  function detectLang() {
    const urlLang = (new URLSearchParams(window.location.search).get("lang") || "").toLowerCase();
    if (urlLang && DICT[urlLang]) return urlLang;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && DICT[saved]) return saved;
    const full = (navigator.language || "en").toLowerCase();
    if (DICT[full]) return full;
    if (full.startsWith("en-us")) return "en-us";
    if (full.startsWith("en-au") || full.startsWith("en-ca")) return "en-au";
    const base = full.slice(0, 2);
    return DICT[base] ? base : "en";
  }

  function applyLang(lang) {
    const code = DICT[lang] ? lang : "en";
    localStorage.setItem(STORAGE_KEY, code);
    const meta = REGIONS.find(r => r.code === code) || REGIONS[0];
    document.documentElement.lang = code;
    document.documentElement.dir = meta.dir || "ltr";
    const t = DICT[code];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) el.setAttribute("placeholder", t[key]);
    });
    const sel = document.getElementById("entiuRegionSelect");
    if (sel) sel.value = code;
  }

  function mountSwitcher() {
    const slot = document.getElementById("langSwitcherSlot");
    if (!slot) return;
    slot.innerHTML =
      `<div class="relative inline-flex items-center">` +
      `<svg class="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/></svg>` +
      `<select id="entiuRegionSelect" aria-label="Select Region and Language" onchange="EntiuI18n.set(this.value)" class="appearance-none rounded-full border border-zinc-200 bg-zinc-50 pl-7 pr-6 py-1.5 text-[11px] font-bold text-zinc-800 hover:border-zinc-400 focus:border-zinc-900 focus:outline-none cursor-pointer">` +
      REGIONS.map(r => `<option value="${r.code}">${r.label}</option>`).join("") +
      `</select>` +
      `<svg class="pointer-events-none absolute right-2 h-3 w-3 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>` +
      `</div>`;
  }

  global.EntiuI18n = {
    REGIONS,
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
