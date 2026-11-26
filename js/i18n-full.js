/* Entiu.store — Complete Natural Copywriter & SEO Localization Pack (All 20 Languages + All Demos & Layouts) */
(function (global) {
  "use strict";

  // Helper to construct a 100% complete language pack with ZERO missing keys
  function buildPack(r, f, t) {
    const pFull = `${r.turnkey}${r.per}`;
    const pZip = r.zip;
    return {
      seo_title: t.seo_title(pFull),
      seo_desc: t.seo_desc(pFull),
      menu_cat_1: t.menu_cat_1,
      menu_cat_2: t.menu_cat_2,
      tr_plumber: t.tr[0], tr_electrician: t.tr[1], tr_builder: t.tr[2], tr_roofer: t.tr[3],
      tr_carpenter: t.tr[4], tr_painter: t.tr[5], tr_mechanic: t.tr[6], tr_manvan: t.tr[7],
      tr_landscaper: t.tr[8], tr_locksmith: t.tr[9], tr_cleaning: t.tr[10],
      tr_all_btn: t.tr_all_btn, tr_all_card: t.tr_all_card, tr_all_sub: t.tr_all_sub,
      sub_count: t.sub_count,
      hero_enq_btn: t.hero_enq_btn,
      hero_card_badge: `${r.city.toUpperCase()} · ${t.live24}`,
      hero_card_name: t.demos[0][1],
      hero_card_sub: t.demos[0][2],
      hero_card_demo: t.demo_cta,
      checker_title: `${t.chk_title} (${r.tld.toUpperCase()} / .COM)`,
      checker_badge: t.chk_badge(pFull),
      checker_btn: t.chk_btn,
      checker_hint: t.chk_hint,
      d1_tag: t.demos[0][0], d1_name: t.demos[0][1], d1_sub: t.demos[0][2],
      d2_tag: t.demos[1][0], d2_name: t.demos[1][1], d2_sub: t.demos[1][2],
      d3_tag: t.demos[2][0], d3_name: t.demos[2][1], d3_sub: t.demos[2][2],
      d4_tag: t.demos[3][0], d4_name: t.demos[3][1], d4_sub: t.demos[3][2],
      demo_cta: t.demo_cta,
      step_01: `${t.step_lbl} 01`, step_02: `${t.step_lbl} 02`, step_03: `${t.step_lbl} 03`,
      p_zip_badge: t.zip[0], p_zip_desc: t.zip[1],
      p_zip_l1: t.zip[2], p_zip_l2: t.zip[3], p_zip_l3: t.zip[4], p_zip_l4: t.zip[5],
      p_tk_badge: t.tk[0], p_tk_desc: t.tk[1](r.tld),
      p_tk_l1: t.tk[2](r.tld), p_tk_l2: t.tk[3], p_tk_l3: t.tk[4], p_tk_l4: t.tk[5],
      p_tk_alt: t.tk[6],
      cmp_kicker: t.cmp[0], cmp_h2: t.cmp[1],
      cmp_col1: t.cmp[2], cmp_col2: `Entiu.store (${pZip} / ${r.turnkey})`, cmp_col4: t.cmp[3],
      cmp_r1: t.cmp[4], cmp_r1_v: `${pZip} ZIP / ${pFull}`, cmp_r1_w: `${f(240)} – ${f(360)}${r.per}`, cmp_r1_a: `${f(1500)} – ${f(3500)}+`,
      cmp_r2: t.cmp[5], cmp_r2_v: t.zero_mo, cmp_r2_w: `${f(20)} – ${f(35)}`, cmp_r2_a: `${f(50)} – ${f(120)}`,
      cmp_r3: t.cmp[6], cmp_r3_v: t.chk_badge(pFull), cmp_r3_w: t.cmp[7], cmp_r3_a: t.cmp[8],
      cmp_r4: t.cmp[9], cmp_r4_v: t.cmp[10], cmp_r4_w: t.cmp[11], cmp_r4_a: t.cmp[12],
      cmp_r5: t.cmp[13], cmp_r5_v: t.cmp[14], cmp_r5_w: t.cmp[15], cmp_r5_a: t.cmp[16],
      faq_kicker: t.faq[0], faq_h2: t.faq[1],
      faq_q1: t.faq[2], faq_a1: t.faq[3](pZip, pFull, r.tld),
      faq_q2: t.faq[4], faq_a2: t.faq[5],
      faq_q3: t.faq[6], faq_a3: t.faq[7],
      hub_kicker: t.hub[0], hub_h2: t.hub[1], hub_sub: t.hub[2],
      footer_copy: t.footer_copy, footer_contact: t.footer_contact,
      prev_back_offer: t.ui[0], prev_shuffle: t.ui[1], prev_personalise: t.ui[2],
      vp_desktop: t.ui[3], vp_tablet: t.ui[4], vp_mobile: t.ui[5], prev_upload_logo: t.ui[6],
      cat_kicker: t.ui[7], cat_h1: t.ui[8], cat_sub: t.ui[9](pZip, pFull, r.tld),
      cat_back: t.ui[10], cat_all: t.ui[11], cat_light: t.ui[12], cat_dark: t.ui[13],
      cat_reset: t.ui[14], cat_load_more: t.ui[15], chat_btn: t.ui[16]
    };
  }

  function getFullPageStrings(code, r) {
    const f = g => global.EntiuI18n ? global.EntiuI18n.formatGbp(g, code) : `£${g}`;
    const DATA = {
      pl: {
        seo_title: p => `Entiu.store — Gotowa Strona WWW dla Firmy w 24h za ${p} (Domena .pl i SSL w cenie)`,
        seo_desc: p => `Profesjonalna strona internetowa dla firmy usługowej w 24h za ${p} z domeną .pl, hostingiem i SSL — zero abonamentów.`,
        menu_cat_1: "Branże budowlane i techniczne", menu_cat_2: "Motoryzacja, transport i usługi lokalne",
        tr: ["Hydraulika i Ogrzewanie","Elektryka i Fotowoltaika","Budownictwo i Remonty","Dekarstwo i Dachy","Stolarstwo i Meble","Malowanie i Wykończenia","Warsztaty i Mechanika","Transport i Przeprowadzki","Ogrody i Brukarstwo","Ślusarstwo 24/7","Sprzątanie i Utrzymanie"],
        tr_all_btn: "Wszystkie 20 podkategorii →", tr_all_card: "Wszystkie 20 podkategorii", tr_all_sub: "Otwórz pełną ofertę →", sub_count: "576 unikalnych projektów →",
        hero_enq_btn: "Zapytanie e-mail →", live24: "GOTOWE W 24H",
        chk_title: "SPRAWDŹ WOLNĄ DOMENĘ", chk_badge: p => `W cenie ${p}`, chk_btn: "Sprawdź", chk_hint: "Natychmiastowe sprawdzenie dostępności domeny firmowej.",
        demos: [
          ["WARSZTAT I MECHANIKA","Auto Serwis Mokotów","Warszawa · Diagnostyka, Hamulce i Przeglądy"],
          ["HYDRAULIKA I OGRZEWANIE","HydroTerm Instalacje","Kraków · Kotły, Awarie 24/7 i Łazienki"],
          ["TRANSPORT I PRZEPROWADZKI","Szybka Przeprowadzka PL","Wrocław · Przeprowadzki, Bagażówka i Transport"],
          ["BUDOWNICTWO I DACHY","SolidBud & Dachy","Gdańsk · Rozbudowy, Remonty i Pokrycia Dachowe"]
        ],
        demo_cta: "Zobacz demo →", step_lbl: "KROK", zero_mo: "0 zł / mies.",
        zip: ["Pobranie natychmiastowe","Kup dowolny unikalny projekt jako gotową paczkę źródłową .ZIP wysyłaną na Twój e-mail od razu po płatności.","✓ 1 unikalny projekt strony (index.html + grafiki)","✓ Automatyczna wysyłka ZIP od razu po płatności Stripe","✓ Dożywotnia własność — darmowy hosting na Netlify lub GitHub Pages","✓ Prosta instrukcja publikacji w 60 sekund w zestawie"],
        tk: ["Najczęściej wybierany · Pod klucz w 24h", tld => `Kompleksowe wdrożenie pod klucz — rejestrujemy domenę ${tld}, konfigurujemy hosting i SSL, wstawiamy logo, Mapę Google oraz formularz e-mail i uruchamiamy stronę w 24h.`, tld => `✓ Rejestracja domeny ${tld} (1 rok) + certyfikat HTTPS SSL`,"✓ Błyskawiczny globalny hosting — 0 zł abonamentu","✓ Działający formularz kontaktowy e-mail oraz Mapa Google","✓ Twoje logo, oferta usług, miasto + pełna paczka ZIP","Nie jesteś pewien? Zobacz najpierw DARMOWY podgląd firmy"],
        cmp: ["PORÓWNANIE CEN STRON WWW 2026","Dlaczego firmy wybierają Entiu.store","Funkcja","Tradycyjna agencja","Łączny koszt w 1. roku","Miesięczny abonament","Domena i certyfikat SSL","Płatne co roku osobno","Fakturowane osobno","Czas uruchomienia","ZIP od razu / 24h pod klucz","10–20 godz. własnej pracy","4 – 8 tygodni","Unikalny projekt bez powtórek","11 520 unikalnych edycji","Oklepane szablony","Indywidualny (drogi)"],
        faq: ["NAJCZĘSTSZE PYTANIA","Profesjonalna strona dla firmy — odpowiedzi","Ile dokładnie kosztuje gotowa strona dla firmy?", (z,p,t) => `Płacisz tylko ${z} jednorazowo za gotowy plik ZIP albo ${p} za pełne wdrożenie pod klucz z domeną ${t}, hostingiem, SSL i Twoim logo. Zero abonamentów.`,"Jak szybko moja nowa strona pojawi się w sieci?","Strony pod klucz konfigurujemy z Twoimi danymi i uruchamiamy na żywo w ciągu 24 godzin. Pakiety ZIP dostarczamy natychmiast.","Czy strony działają na telefonach i są gotowe pod Google?","Tak. Każdy projekt ma szybki kod HTML5, certyfikat HTTPS SSL, Mapę Google, formularz e-mail oraz pełne metadane SEO."],
        hub: ["ZASIĘG LOKALNY I GLOBALNY","Strony dla firm w całej Polsce i Europie","Gotowe projekty zoptymalizowane pod wyszukiwania lokalne w Google oraz szybkie zapytania e-mail od klientów."],
        footer_copy: "© 2026 Entiu.store · 11 520 Unikalnych Projektów Stron WWW", footer_contact: "Kontakt:",
        ui: ["← Oferta (11 520)","↻ Losuj","✎ Personalizuj na żywo","Komputer","Tablet","Telefon","⬆ Wgraj Logo (na żywo)","Entiu.store · Pełna Oferta","Wszystkie 11 520 gotowych stron WWW", (z,p,t) => `Wybierz branżę, przetestuj podgląd ze swoim logo i wybierz ${z} ZIP lub ${p} pod klucz (${t} + SSL w 24h).`,"← Wróć na stronę główną","Wszystkie","Jasne","Ciemne","Resetuj","Pokaż kolejne 24 projekty","Czat na żywo · Pomoc"]
      },
      de: {
        seo_title: p => `Entiu.store — Schlüsselfertige Firmen-Website in 24 Std. für ${p} (Domain .de & SSL)`,
        seo_desc: p => `Professionelle Website für Handwerker & lokale Betriebe in 24h für ${p} inkl. Domain, Hosting & SSL — ohne Monatsgebühr.`,
        menu_cat_1: "Handwerk & Bauwesen", menu_cat_2: "KFZ, Transport & Lokale Dienste",
        tr: ["Sanitär & Heizung","Elektriker & Photovoltaik","Bau & Sanierung","Dachdecker & Zimmerei","Tischlerei & Schreinerei","Maler & Lackierer","KFZ-Werkstatt & Service","Umzug & Transport","Garten- & Landschaftsbau","Schlüsseldienst 24/7","Gebäudereinigung"],
        tr_all_btn: "Alle 20 Branchen →", tr_all_card: "Alle 20 Unterkategorien", tr_all_sub: "Gesamtes Angebot öffnen →", sub_count: "576 exklusive Designs →",
        hero_enq_btn: "E-Mail Anfrage →", live24: "LIVE IN 24 STD.",
        chk_title: "LIVE DOMAIN-CHECK", chk_badge: p => `In ${p} enthalten`, chk_btn: "Prüfen", chk_hint: "Sofortige Verfügbarkeitsprüfung für Ihre Wunschdomain.",
        demos: [
          ["KFZ-WERKSTATT","Meisterwerkstatt Mitte","Berlin · TÜV, Bremsen & Diagnose"],
          ["SANITÄR & HEIZUNG","ThermoFix Haustechnik","München · Heizung, Bad & Notdienst 24/7"],
          ["UMZUG & TRANSPORT","SchnellUmzug DE","Hamburg · Umzüge, Möbeltransport & Express"],
          ["BAU & DACHDECKEREI","SolideBau & Dach","Köln · Anbau, Dachsanierung & Innenausbau"]
        ],
        demo_cta: "Live-Demo →", step_lbl: "SCHRITT", zero_mo: "0 € / Monat",
        zip: ["Sofort-Download","Kaufen Sie ein exklusives Layout als sauberes .ZIP-Quellpaket — direkt nach Zahlung per E-Mail.","✓ 1 exklusives Website-Design (index.html + Assets)","✓ Sofortige automatische ZIP-Lieferung nach Stripe-Zahlung","✓ Lebenslanges Eigentum — kostenloses Hosting auf Netlify / GitHub","✓ Einfache 60-Sekunden-Anleitung inklusive"],
        tk: ["Beliebteste Wahl · In 24 Std. live", tld => `Komplett schlüsselfertig: Wir registrieren Ihre ${tld}-Domain, richten Hosting, SSL, Logo, Google Maps & E-Mail-Formular ein — live in 24h.`, tld => `✓ ${tld}-Domainregistrierung (1 Jahr) + HTTPS SSL`,"✓ Schnelles globales Hosting — 0 €/Monat dauerhaft","✓ E-Mail-Kontaktformular & Google Maps eingerichtet","✓ Ihr Logo, Leistungen, Stadt + vollständiges ZIP-Paket","Noch unsicher? Kostenlose Live-Vorschau Ihrer Firma testen"],
        cmp: ["WEBSITE-PREISVERGLEICH 2026","Warum Betriebe zu Entiu.store wechseln","Leistung","Klassische Agentur","Gesamtkosten Jahr 1","Monatliche Gebühren","Domain & HTTPS SSL","Jährlich extra","Extra berechnet","Fertigstellung","ZIP sofort / 24h Komplett","10–20 Std. Eigenarbeit","4 – 8 Wochen","Einzigartiges Design","11.520 exklusive Editionen","Standard-Vorlagen","Individuell (teuer)"],
        faq: ["HÄUFIGE FRAGEN","Professionelle Firmen-Website — Antworten","Was kostet eine fertige Firmen-Website?", (z,p,t) => `Nur ${z} einmalig für das HTML-ZIP oder ${p} komplett inkl. ${t}-Domain, Hosting, SSL und Einrichtung. Null Monatsgebühren.`,"Wie schnell geht meine Website online?","Schlüsselfertige Websites gehen innerhalb von 24 Stunden mit Ihrem Logo und Leistungen online. ZIP-Pakete sofort.","Sind die Websites mobilfreundlich und für Google optimiert?","Ja — sauberer HTML5-Code, blitzschnelle Ladezeiten, HTTPS SSL, Google Maps und strukturierte lokale SEO-Metadaten."],
        hub: ["REGIONALE & GLOBALE ABDECKUNG","Websites für Betriebe in ganz Deutschland","Maßgeschneiderte Branchen-Websites mit schneller Ladezeit, klarem SEO-Aufbau und direkter E-Mail-Anfrage."],
        footer_copy: "© 2026 Entiu.store · 11.520 Exklusive Website-Designs", footer_contact: "Kontakt:",
        ui: ["← Angebot (11.520)","↻ Zufall","✎ Live anpassen","Desktop","Tablet","Mobil","⬆ Logo hochladen","Entiu.store · Gesamtes Angebot","Alle 11.520 fertigen Firmen-Websites", (z,p,t) => `Wählen Sie Ihre Branche, testen Sie Ihr Logo live und bestellen Sie ${z} ZIP oder ${p} Komplett (${t} + SSL in 24h).`,"← Zurück zur Startseite","Alle","Hell","Dunkel","Zurücksetzen","24 weitere Designs laden","Live-Chat · Hilfe"]
      },
      es: {
        seo_title: p => `Entiu.store — Web Profesional para Tu Negocio en 24h por ${p} (Dominio .es y SSL)`,
        seo_desc: p => `Página web llave en mano para talleres, fontaneros y empresas locales en 24h por ${p} con dominio, hosting y SSL — sin cuotas mensuales.`,
        menu_cat_1: "Oficios y Construcción", menu_cat_2: "Motor, Transporte y Servicios",
        tr: ["Fontanería y Calefacción","Electricistas e Instalaciones","Reformas y Construcción","Tejados y Cubiertas","Carpintería a Medida","Pintura y Decoración","Talleres y Mecánica","Mudanzas y Portes","Jardinería y Paisajismo","Cerrajeros 24/7","Limpieza Profesional"],
        tr_all_btn: "Las 20 subcategorías →", tr_all_card: "Todas las 20 subcategorías", tr_all_sub: "Abrir catálogo completo →", sub_count: "576 diseños exclusivos →",
        hero_enq_btn: "Consulta Email →", live24: "ONLINE EN 24H",
        chk_title: "COMPROBAR DOMINIO", chk_badge: p => `Incluido en ${p}`, chk_btn: "Comprobar", chk_hint: "Verificación instantánea de disponibilidad de dominio.",
        demos: [
          ["TALLER Y MECÁNICA","Taller Motor Madrid","Madrid · ITV, Frenos y Diagnosis"],
          ["FONTANERÍA","HidroClima Express","Barcelona · Calderas y Urgencias 24/7"],
          ["MUDANZAS Y PORTES","Mudanzas Rápidas ES","Valencia · Hogares, Oficinas y Furgonetas"],
          ["REFORMAS Y OBRA","Grupo Reforma Integral","Sevilla · Reformas, Tejados y Obra Nueva"]
        ],
        demo_cta: "Ver Demo →", step_lbl: "PASO", zero_mo: "0 € / mes",
        zip: ["Descarga Instantánea","Compra cualquier diseño exclusivo en paquete fuente .ZIP listo para subir a tu servidor tras el pago.","✓ 1 diseño exclusivo (index.html + recursos)","✓ Entrega automática inmediata por Stripe","✓ Propiedad de por vida — hosting gratis en Netlify o GitHub","✓ Guía sencilla de publicación en 60 segundos"],
        tk: ["Más Popular · Online en 24h", tld => `Lanzamiento llave en mano: registramos tu dominio ${tld}, configuramos hosting, SSL, tu logo, Google Maps y formulario de email en 24h.`, tld => `✓ Registro de dominio ${tld} (1 año) + HTTPS SSL`,"✓ Hosting global ultrarrápido — 0 €/mes siempre","✓ Formulario de contacto por email y Google Maps","✓ Tu logo, servicios, ciudad + paquete ZIP completo","¿Aún dudas? Mira primero una vista previa GRATIS de tu negocio"],
        cmp: ["COMPARATIVA DE PRECIOS 2026","Por qué los negocios eligen Entiu.store","Característica","Agencia Tradicional","Coste total año 1","Cuotas mensuales","Dominio y HTTPS SSL","Renovación aparte","Facturado aparte","Tiempo de lanzamiento","ZIP al instante / 24h completa","10–20 h de trabajo propio","4 – 8 semanas","Diseño único sin repetir","11.520 ediciones exclusivas","Plantillas repetidas","A medida (muy caro)"],
        faq: ["PREGUNTAS FRECUENTES","Diseño Web Profesional — Respuestas","¿Cuánto cuesta exactamente una web para mi negocio?", (z,p,t) => `Solo ${z} pago único por el ZIP o ${p} todo incluido con dominio ${t}, hosting, SSL y tu logo. Sin cuotas mensuales.`,"¿Qué tan rápido estará online mi web?","Las webs llave en mano se publican en 24 horas con tu marca y servicios. Los ZIP llegan al instante.","¿Funcionan bien en móviles y están preparadas para Google?","Sí. Código HTML5 limpio, carga ultrarrápida, HTTPS SSL, Google Maps y SEO local estructurado."],
        hub: ["COBERTURA LOCAL Y GLOBAL","Webs diseñadas para negocios en España y LATAM","Diseños rápidos optimizados para posicionamiento local en Google y captación de presupuestos por email."],
        footer_copy: "© 2026 Entiu.store · 11.520 Diseños Web Exclusivos", footer_contact: "Contacto:",
        ui: ["← Oferta (11.520)","↻ Aleatorio","✎ Personalizar en vivo","Escritorio","Tablet","Móvil","⬆ Subir Logo","Entiu.store · Oferta Completa","Las 11.520 Webs Listas para Lanzar", (z,p,t) => `Elige una categoría, prueba tu logo en vivo y selecciona ${z} ZIP o ${p} llave en mano (${t} + SSL en 24h).`,"← Volver al inicio","Todos","Claro","Oscuro","Reiniciar","Cargar 24 diseños más","Chat en vivo · Ayuda"]
      },
      fr: {
        seo_title: p => `Entiu.store — Site Web Clé en Main en 24h pour ${p} (Domaine .fr & SSL)`,
        seo_desc: p => `Site web professionnel pour artisans et entreprises locales en 24h pour ${p} avec domaine, hébergement et SSL — sans abonnement.`,
        menu_cat_1: "Artisans & Bâtiment", menu_cat_2: "Auto, Transport & Services",
        tr: ["Plomberie & Chauffage","Électriciens & IRVE","Maçonnerie & Rénovation","Couverture & Toiture","Menuiserie & Bois","Peinture & Décoration","Garages & Mécanique","Déménagement & Transport","Paysagistes & Jardins","Serrurerie 24/7","Nettoyage Professionnel"],
        tr_all_btn: "Les 20 catégories →", tr_all_card: "Toutes les 20 catégories", tr_all_sub: "Ouvrir tout le catalogue →", sub_count: "576 designs uniques →",
        hero_enq_btn: "Devis Email →", live24: "EN LIGNE EN 24H",
        chk_title: "VÉRIFIER UN DOMAINE", chk_badge: p => `Inclus dans ${p}`, chk_btn: "Vérifier", chk_hint: "Vérification instantanée de disponibilité de votre domaine.",
        demos: [
          ["GARAGE AUTO","Atelier Auto Paris","Paris · Révision, Freins & Diagnostic"],
          ["PLOMBERIE","AquaTherm Services","Lyon · Chaudières & Dépannage 24/7"],
          ["DÉMÉNAGEMENT","ExpressDéménage FR","Marseille · Maisons, Bureaux & Transport"],
          ["BÂTIMENT","BâtiPro & Toiture","Bordeaux · Extensions, Rénovation & Toits"]
        ],
        demo_cta: "Démo →", step_lbl: "ÉTAPE", zero_mo: "0 € / mois",
        zip: ["Téléchargement Immédiat","Achetez un design exclusif sous forme de pack source .ZIP envoyé immédiatement après paiement.","✓ 1 design exclusif (index.html + médias)","✓ Livraison ZIP automatique via Stripe","✓ Propriété à vie — hébergement gratuit Netlify / GitHub","✓ Guide de mise en ligne en 60 secondes inclus"],
        tk: ["Le Plus Choisi · En ligne en 24h", tld => `Lancement clé en main : domaine ${tld}, hébergement rapide, SSL, votre logo, Google Maps et formulaire email en 24h.`, tld => `✓ Domaine ${tld} inclus (1 an) + HTTPS SSL`,"✓ Hébergement rapide — 0 €/mois sans engagement","✓ Formulaire email et Google Maps configurés","✓ Votre logo, services, ville + archive ZIP complète","Pas encore sûr ? Testez un aperçu GRATUIT de votre entreprise"],
        cmp: ["COMPARATIF TARIFS 2026","Pourquoi choisir Entiu.store","Fonctionnalité","Agence Classique","Coût total année 1","Abonnement mensuel","Domaine & HTTPS SSL","Payant en supplément","Facturé en plus","Délai de mise en ligne","ZIP immédiat / 24h clé en main","10–20h de bricolage","4 à 8 semaines","Design unique exclusif","11 520 éditions uniques","Modèles génériques","Sur-mesure (coûteux)"],
        faq: ["QUESTIONS FRÉQUENTES","Site Web Professionnel — Réponses","Combien coûte un site clé en main ?", (z,p,t) => `Seulement ${z} une fois pour le ZIP ou ${p} tout inclus avec domaine ${t}, hébergement et SSL. Zéro abonnement mensuel.`,"En combien de temps mon site est-il en ligne ?","Les sites clé en main sont mis en ligne sous 24 heures avec votre logo et vos services. Les ZIP sont immédiats.","Les sites sont-ils adaptés aux mobiles et à Google ?","Oui. Code HTML5 léger, chargement instantané, HTTPS SSL, Google Maps et SEO local optimisé."],
        hub: ["COUVERTURE LOCALE & GLOBALE","Sites conçus pour les entreprises francophones","Des sites rapides, élégants et optimisés pour attirer des demandes de devis locales sur Google."],
        footer_copy: "© 2026 Entiu.store · 11 520 Designs Web Exclusifs", footer_contact: "Contact :",
        ui: ["← Offre (11 520)","↻ Aléatoire","✎ Personnaliser","Bureau","Tablette","Mobile","⬆ Importer Logo","Entiu.store · Toute l'Offre","Tous les 11 520 Sites Prêts à Lancer", (z,p,t) => `Choisissez un métier, testez votre logo en direct et optez pour ${z} ZIP ou ${p} clé en main (${t} + SSL en 24h).`,"← Retour à l'accueil","Tous","Clair","Sombre","Réinitialiser","Charger 24 designs de plus","Chat en direct · Aide"]
      },
      pt: {
        seo_title: p => `Entiu.store — Site Profissional em 24h por ${p} (Domínio e SSL inclusos)`,
        seo_desc: p => `Site pronto chave na mão para empresas locais em 24h por ${p} com domínio, hospedagem e SSL — sem mensalidades.`,
        menu_cat_1: "Obras e Instalações", menu_cat_2: "Auto, Transporte e Serviços",
        tr: ["Encanamento e Aquecimento","Eletricistas e Solar","Construção e Reformas","Telhados e Coberturas","Marcenaria","Pintura e Acabamento","Oficinas e Mecânica","Mudanças e Fretes","Jardinagem e Paisagismo","Chaveiro 24/7","Limpeza Profissional"],
        tr_all_btn: "Todas as 20 categorias →", tr_all_card: "Todas as 20 subcategorias", tr_all_sub: "Abrir catálogo completo →", sub_count: "576 designs exclusivos →",
        hero_enq_btn: "Orçamento Email →", live24: "NO AR EM 24H",
        chk_title: "VERIFICAR DOMÍNIO", chk_badge: p => `Incluso em ${p}`, chk_btn: "Verificar", chk_hint: "Verificação instantânea de disponibilidade do domínio.",
        demos: [
          ["OFICINA AUTO","Auto Center Paulista","São Paulo · Revisão, Freios e Diagnóstico"],
          ["ENCANAMENTO","HidroSul Instalações","Curitiba · Reparos e Plantão 24/7"],
          ["MUDANÇAS","RápidoFrete BR","Rio de Janeiro · Mudanças e Transportes"],
          ["CONSTRUÇÃO","ObraForte Engenharia","Belo Horizonte · Reformas e Telhados"]
        ],
        demo_cta: "Ver Demo →", step_lbl: "PASSO", zero_mo: "R$ 0 / mês",
        zip: ["Download Imediato","Compre qualquer design exclusivo em pacote .ZIP pronto para hospedar, enviado logo após o pagamento.","✓ 1 design exclusivo (index.html + arquivos)","✓ Entrega automática imediata via Stripe","✓ Propriedade vitalícia — hospedagem grátis no Netlify/GitHub","✓ Guia simples de publicação em 60 segundos"],
        tk: ["Mais Escolhido · No ar em 24h", tld => `Entrega chave na mão: registramos seu domínio ${tld}, configuramos hospedagem, SSL, logo, Google Maps e formulário em 24h.`, tld => `✓ Registro de domínio ${tld} (1 ano) + HTTPS SSL`,"✓ Hospedagem global rápida — R$ 0/mês sempre","✓ Formulário de contato e Google Maps integrados","✓ Seu logo, serviços, cidade + pacote ZIP completo","Ainda em dúvida? Veja uma prévia GRÁTIS da sua empresa"],
        cmp: ["COMPARATIVO DE PREÇOS 2026","Por que empresas escolhem a Entiu.store","Recurso","Agência Tradicional","Custo total no 1º ano","Mensalidades","Domínio e HTTPS SSL","Cobrado à parte","Faturado à parte","Prazo de entrega","ZIP imediato / 24h completo","10–20h de trabalho próprio","4 – 8 semanas","Design único exclusivo","11.520 edições exclusivas","Modelos repetidos","Sob medida (caro)"],
        faq: ["PERGUNTAS FREQUENTES","Site Profissional — Respostas","Quanto custa um site pronto para minha empresa?", (z,p,t) => `Apenas ${z} pagamento único pelo ZIP ou ${p} tudo incluído com domínio ${t}, hospedagem e SSL. Sem mensalidades.`,"Em quanto tempo meu site fica no ar?","Sites completos entram no ar em até 24 horas com sua marca e serviços. Pacotes ZIP são entregues na hora.","Os sites funcionam bem no celular e no Google?","Sim. Código HTML5 leve, carregamento rápido, HTTPS SSL, Google Maps e SEO local completo."],
        hub: ["COBERTURA LOCAL E GLOBAL","Sites sob medida para empresas no Brasil e Portugal","Designs modernos prontos para atrair clientes locais pelo Google e receber orçamentos por e-mail."],
        footer_copy: "© 2026 Entiu.store · 11.520 Designs Exclusivos", footer_contact: "Contato:",
        ui: ["← Oferta (11.520)","↻ Sortear","✎ Personalizar ao vivo","Desktop","Tablet","Celular","⬆ Enviar Logo","Entiu.store · Catálogo Completo","Todos os 11.520 Sites Prontos", (z,p,t) => `Escolha sua categoria, teste seu logo ao vivo e escolha ${z} ZIP ou ${p} completo (${t} + SSL em 24h).`,"← Voltar ao início","Todos","Claro","Escuro","Limpar","Carregar mais 24 designs","Chat ao vivo · Ajuda"]
      },
      it: {
        seo_title: p => `Entiu.store — Sito Aziendale Pronto in 24h a ${p} (Dominio .it e SSL)`,
        seo_desc: p => `Sito web chiavi in mano per artigiani e aziende locali in 24h a ${p} con dominio, hosting e SSL — zero canoni mensili.`,
        menu_cat_1: "Edilizia e Impianti", menu_cat_2: "Auto, Traslochi e Servizi",
        tr: ["Idraulica e Riscaldamento","Elettricisti e Impianti","Edilizia e Ristrutturazioni","Tetti e Coperture","Falegnameria","Imbianchini e Decorazioni","Officine e Meccanica","Traslochi e Trasporti","Giardinaggio","Fabbro 24/7","Imprese di Pulizie"],
        tr_all_btn: "Tutte le 20 categorie →", tr_all_card: "Tutte le 20 sottocategorie", tr_all_sub: "Apri catalogo completo →", sub_count: "576 design esclusivi →",
        hero_enq_btn: "Preventivo Email →", live24: "ONLINE IN 24H",
        chk_title: "VERIFICA DOMINIO", chk_badge: p => `Incluso in ${p}`, chk_btn: "Verifica", chk_hint: "Controllo immediato della disponibilità del dominio.",
        demos: [
          ["OFFICINA AUTO","Officina Motori Milano","Milano · Tagliandi, Freni e Diagnosi"],
          ["IDRAULICA","TermoIdraulica Express","Roma · Caldaie e Pronto Intervento 24/7"],
          ["TRASLOCHI","Traslochi Veloci IT","Torino · Case, Uffici e Furgoni"],
          ["EDILIZIA","EdilPro & Tetti","Firenze · Ristrutturazioni e Coperture"]
        ],
        demo_cta: "Demo →", step_lbl: "FASE", zero_mo: "0 € / mese",
        zip: ["Download Immediato","Acquista qualsiasi design esclusivo in pacchetto .ZIP inviato subito via email dopo il pagamento.","✓ 1 design esclusivo (index.html + risorse)","✓ Consegna automatica immediata via Stripe","✓ Proprietà a vita — hosting gratis su Netlify/GitHub","✓ Guida rapida di pubblicazione in 60 secondi"],
        tk: ["Più Scelto · Online in 24h", tld => `Lancio chiavi in mano: dominio ${tld}, hosting veloce, SSL, logo, Google Maps e modulo email attivi in 24 ore.`, tld => `✓ Dominio ${tld} incluso (1 anno) + HTTPS SSL`,"✓ Hosting globale veloce — 0 €/mese per sempre","✓ Modulo contatti email e Google Maps integrati","✓ Tuo logo, servizi, città + pacchetto ZIP completo","Non sei sicuro? Prova prima un'anteprima GRATIS"],
        cmp: ["CONFRONTO PREZZI 2026","Perché le aziende scelgono Entiu.store","Caratteristica","Agenzia Tradizionale","Costo totale anno 1","Canoni mensili","Dominio e HTTPS SSL","Pagato a parte","Fatturato a parte","Tempi di consegna","ZIP subito / 24h completo","10–20 ore fai-da-te","4 – 8 settimane","Design unico esclusivo","11.520 edizioni esclusive","Template condivisi","Su misura (costoso)"],
        faq: ["DOMANDE FREQUENTI","Sito Web Aziendale — Risposte","Quanto costa un sito pronto per la mia attività?", (z,p,t) => `Solo ${z} una tantum per lo ZIP o ${p} tutto incluso con dominio ${t}, hosting e SSL. Zero canoni mensili.`,"In quanto tempo il mio sito va online?","I siti chiavi in mano vanno online entro 24 ore con il tuo logo e servizi. I pacchetti ZIP subito.","I siti sono veloci su smartphone e pronti per Google?","Sì. Codice HTML5 pulito, caricamento istantaneo, HTTPS SSL, Google Maps e SEO locale."],
        hub: ["COPERTURA LOCALE E GLOBALE","Siti web per imprese e professionisti in Italia","Progetti curati, veloci e ottimizzati per ricevere richieste di preventivo locali via email."],
        footer_copy: "© 2026 Entiu.store · 11.520 Design Esclusivi", footer_contact: "Contatti:",
        ui: ["← Offerta (11.520)","↻ Casuale","✎ Personalizza live","Desktop","Tablet","Mobile","⬆ Carica Logo","Entiu.store · Offerta Completa","Tutti gli 11.520 Siti Pronti", (z,p,t) => `Scegli il settore, prova il tuo logo dal vivo e scegli ${z} ZIP o ${p} chiavi in mano (${t} + SSL in 24h).`,"← Torna alla Home","Tutti","Chiaro","Scuro","Reimposta","Carica altri 24 design","Live Chat · Aiuto"]
      },
      nl: {
        seo_title: p => `Entiu.store — Zakelijke Website Klaar in 24u voor ${p} (.nl Domein & SSL)`,
        seo_desc: p => `Kant-en-klare website voor vakmensen en lokale bedrijven in 24 uur voor ${p} incl. domein, hosting & SSL — zonder maandkosten.`,
        menu_cat_1: "Bouw & Installatie", menu_cat_2: "Auto, Verhuizen & Diensten",
        tr: ["Loodgieter & Verwarming","Elektricien & Laadpalen","Bouw & Renovatie","Dakdekker","Timmerman","Schilderwerk","Autogarage & Onderhoud","Verhuizen & Transport","Hovenier & Tuin","Slotenmaker 24/7","Schoonmaakbedrijf"],
        tr_all_btn: "Alle 20 categorieën →", tr_all_card: "Alle 20 subcategorieën", tr_all_sub: "Open volledig aanbod →", sub_count: "576 unieke ontwerpen →",
        hero_enq_btn: "E-mail Offerte →", live24: "LIVE IN 24 UUR",
        chk_title: "DOMEIN CHECKER", chk_badge: p => `Inbegrepen in ${p}`, chk_btn: "Checken", chk_hint: "Directe controle op beschikbaarheid van uw domeinnaam.",
        demos: [
          ["AUTOGARAGE","Autoservice Centrum","Amsterdam · APK, Remmen & Diagnose"],
          ["LOODGIETER","WarmtePro Installatie","Rotterdam · CV-Ketels & 24/7 Spoed"],
          ["VERHUIZEN","SnelVerhuis NL","Utrecht · Woningen, Kantoren & Transport"],
          ["BOUW & DAK","SterkBouw & Dak","Eindhoven · Aanbouw, Renovatie & Daken"]
        ],
        demo_cta: "Demo →", step_lbl: "STAP", zero_mo: "€0 / maand",
        zip: ["Directe Download","Koop een uniek ontwerp als schoon .ZIP-bronpakket — direct na betaling in uw mailbox.","✓ 1 exclusief website-ontwerp (index.html + bestanden)","✓ Directe automatische ZIP-levering via Stripe","✓ Levenslang eigendom — gratis hosting op Netlify / GitHub","✓ Eenvoudige handleiding (60 sec) inbegrepen"],
        tk: ["Meest Gekozen · Live in 24 uur", tld => `Volledig ontzorgd: wij registreren uw ${tld}-domein, regelen hosting, SSL, logo, Google Maps & e-mailformulier in 24 uur.`, tld => `✓ ${tld}-domeinregistratie (1 jaar) + HTTPS SSL`,"✓ Razendsnelle hosting — €0/maand blijvend","✓ E-mailformulier & Google Maps gekoppeld","✓ Uw logo, diensten, stad + compleet ZIP-pakket","Nog twijfels? Bekijk eerst een GRATIS voorbeeld"],
        cmp: ["PRIJSVERGELIJKING 2026","Waarom bedrijven kiezen voor Entiu.store","Kenmerk","Traditioneel Bureau","Totale kosten jaar 1","Maandelijkse kosten","Domein & HTTPS SSL","Jaarlijks extra","Apart gefactureerd","Oplevertijd","ZIP direct / 24u compleet","10–20 uur zelf bouwen","4 – 8 weken","Uniek ontwerp","11.520 unieke edities","Standaard templates","Maatwerk (duur)"],
        faq: ["VEELGESTELDE VRAGEN","Zakelijke Website — Antwoorden","Wat kost een kant-en-klare bedrijfswebsite?", (z,p,t) => `Slechts ${z} eenmalig voor het ZIP-pakket of ${p} all-in met ${t}-domein, hosting en SSL. Geen maandkosten.`,"Hoe snel staat mijn website online?","Turnkey websites staan binnen 24 uur live met uw logo en diensten. ZIP-pakketten direct na betaling.","Zijn de websites geschikt voor mobiel en Google?","Ja. Schone HTML5-code, snelle laadtijd, HTTPS SSL, Google Maps en lokale SEO."],
        hub: ["LOKALE & GLOBALE DEKKING","Websites voor ondernemers in Nederland en België","Professionele ontwerpen gericht op lokale vindbaarheid in Google en directe offerte-aanvragen."],
        footer_copy: "© 2026 Entiu.store · 11.520 Unieke Website-Ontwerpen", footer_contact: "Contact:",
        ui: ["← Aanbod (11.520)","↻ Willekeurig","✎ Live aanpassen","Desktop","Tablet","Mobiel","⬆ Logo uploaden","Entiu.store · Volledig Aanbod","Alle 11.520 Kant-en-Klare Websites", (z,p,t) => `Kies uw branche, test uw logo live en bestel ${z} ZIP of ${p} compleet (${t} + SSL in 24u).`,"← Terug naar Home","Alle","Licht","Donker","Reset","Laad 24 extra ontwerpen","Live Chat · Hulp"]
      },
      ar: {
        seo_title: p => `Entiu.store — موقع شركتك الاحترافي خلال 24 ساعة مقابل ${p}`,
        seo_desc: p => `موقع إلكتروني متكامل لشركتك خلال 24 ساعة مقابل ${p} مع النطاق والاستضافة وشهادة SSL — بدون أي رسوم شهرية.`,
        menu_cat_1: "المقاولات والصيانة", menu_cat_2: "السيارات والنقل والخدمات",
        tr: ["السباكة والتدفئة","الكهرباء والطاقة","البناء والمقاولات","العزل والأسقف","النجارة والأثاث","الدهانات والديكور","ورش السيارات","نقل الأثاث والشحن","تنسيق الحدائق","فتح الأقفال 24/7","شركات التنظيف"],
        tr_all_btn: "جميع الـ 20 مجالاً ←", tr_all_card: "جميع الـ 20 فئة", tr_all_sub: "تصفح العروض ←", sub_count: "576 تصميماً حصرياً ←",
        hero_enq_btn: "طلب بالبريد ←", live24: "جاهز خلال 24 ساعة",
        chk_title: "فحص توفر النطاق", chk_badge: p => `مشمول في ${p}`, chk_btn: "فحص مجاني", chk_hint: "فحص فوري لتوفر اسم النطاق لشركتك.",
        demos: [
          ["ورشة سيارات","مركز دبي للسيارات","دبي · فحص، فرامل وصيانة شاملة"],
          ["سباكة وتدفئة","الخليج للسباكة","أبوظبي · صيانة طارئة 24/7"],
          ["نقل أثاث","النقل السريع","دبي · نقل منازل ومكاتب"],
          ["مقاولات وبناء","بنيان للمقاولات","الشارقة · ترميم وتوسعات حديثة"]
        ],
        demo_cta: "معاينة ←", step_lbl: "الخطوة", zero_mo: "0 AED / شهر",
        zip: ["تحميل فوري","اشترِ أي تصميم حصري كحزمة ZIP جاهزة للاستضافة تُرسل لبريدك فوراً بعد الدفع.","✓ تصميم حصري واحد (index.html + الملفات)","✓ تسليم تلقائي فوري عبر Stripe","✓ ملكية مدى الحياة — استضافة مجانية","✓ دليل نشر سهل خلال 60 ثانية"],
        tk: ["الأكثر طلباً · جاهز خلال 24 ساعة", tld => `إطلاق كامل خلال 24 ساعة: تسجيل نطاق ${tld}، استضافة سريعة، شهادة SSL، شعارك، خريطة جوجل ونموذج مراسلة.`, tld => `✓ تسجيل النطاق ${tld} (سنة كاملة) + شهادة SSL`,"✓ استضافة عالمية سريعة — بدون رسوم شهرية","✓ نموذج بريد إلكتروني وخريطة جوجل","✓ شعارك، خدماتك، مدينتك + ملف ZIP كامل","غير متأكد بعد؟ شاهد معاينة مجانية لشركتك أولاً"],
        cmp: ["مقارنة الأسعار 2026","لماذا تختار الشركات Entiu.store","الميزة","وكالة تقليدية","التكلفة الإجمالية للسنة الأولى","الرسوم الشهرية","النطاق وشهادة SSL","رسوم إضافية","فاتورة منفصلة","وقت الإطلاق","فوري ZIP / خلال 24 ساعة","10–20 ساعة عمل","4 – 8 أسابيع","تصميم حصري غير مكرر","11,520 تصميماً حصرياً","قوالب مكررة","مكلف جداً"],
        faq: ["الأسئلة الشائعة","إجابات حول تصميم المواقع الاحترافية","كم تكلفة الموقع الجاهز لشركتي؟", (z,p,t) => `فقط ${z} لمرة واحدة لملف ZIP أو ${p} للباقة الشاملة مع النطاق ${t} والاستضافة وSSL بدون أي رسوم شهرية.`,"متى يصبح موقعي متاحاً على الإنترنت؟","نطلق المواقع الشاملة خلال 24 ساعة مع شعارك وبياناتك، وتصل ملفات ZIP فوراً.","هل المواقع متوافقة مع الجوال ومحركات البحث جوجل؟","نعم، جميع التصاميم سريعة جداً ومتوافقة مع الهواتف ومهيأة لمحركات البحث مع شهادة SSL."],
        hub: ["تغطية محلية وعالمية","مواقع مصممة للشركات في الإمارات والخليج","تصاميم عصرية سريعة ومهيأة لمحركات البحث جوجل لاستقبال طلبات العملاء مباشرة عبر البريد الإلكتروني."],
        footer_copy: "© 2026 Entiu.store · 11,520 تصميماً حصرياً", footer_contact: "التواصل:",
        ui: ["← العروض (11,520)","↻ عشوائي","✎ تخصيص مباشر","حاسوب","جهاز لوحي","جوال","⬆ رفع الشعار","Entiu.store · كافة العروض","جميع الـ 11,520 موقعاً جاهزاً للإطلاق", (z,p,t) => `اختر مجالك، عاين شعارك مباشرة، واختر ${z} ZIP أو ${p} شامل (${t} + SSL خلال 24 ساعة).`,"← العودة للرئيسية","الكل","فاتح","داكن","إعادة تعيين","عرض 24 تصميماً إضافياً","محادثة مباشرة · مساعدة"]
      },
      ru: {
        seo_title: p => `Entiu.store — Готовый сайт для бизнеса за 24 часа за ${p} (Домен и SSL)`,
        seo_desc: p => `Профессиональный сайт под ключ за 24 часа за ${p} с доменом, хостингом и SSL — без абонентской платы.`,
        menu_cat_1: "Строительство и ремонт", menu_cat_2: "Авто, транспорт и услуги",
        tr: ["Сантехника и отопление","Электрика и монтаж","Строительство и ремонт","Кровля и крыши","Столярные работы","Покраска и отделка","Автосервис и диагностика","Грузоперевозки и переезды","Ландшафт и сады","Вскрытие замков 24/7","Клининг и уборка"],
        tr_all_btn: "Все 20 категорий →", tr_all_card: "Все 20 подкатегорий", tr_all_sub: "Открыть весь каталог →", sub_count: "576 уникальных дизайнов →",
        hero_enq_btn: "Запрос Email →", live24: "ЗАПУСК ЗА 24Ч",
        chk_title: "ПРОВЕРКА ДОМЕНА", chk_badge: p => `Включено в ${p}`, chk_btn: "Проверить", chk_hint: "Мгновенная проверка доступности домена для вашего бизнеса.",
        demos: [
          ["АВТОСЕРВИС","АвтоПро Центр","Москва · Диагностика, Тормоза и ТО"],
          ["САНТЕХНИКА","ГидроТерм Сервис","Санкт-Петербург · Котлы и выезд 24/7"],
          ["ПЕРЕЕЗДЫ","БыстрыйПереезд","Казань · Квартиры, офисы и транспорт"],
          ["СТРОИТЕЛЬСТВО","МонолитСтрой","Екатеринбург · Ремонт и кровля под ключ"]
        ],
        demo_cta: "Демо →", step_lbl: "ШАГ", zero_mo: "0 ₽ / мес",
        zip: ["Мгновенная загрузка","Купите любой уникальный дизайн в виде чистого .ZIP-архива — сразу после оплаты на почту.","✓ 1 эксклюзивный дизайн (index.html + файлы)","✓ Автоматическая доставка ZIP после оплаты Stripe","✓ Пожизненное владение — бесплатный хостинг Netlify/GitHub","✓ Понятная инструкция запуска за 60 секунд"],
        tk: ["Хит выбора · Под ключ за 24ч", tld => `Полный запуск под ключ: домен ${tld}, быстрый хостинг, SSL, ваш логотип, карта и форма заявок за 24 часа.`, tld => `✓ Регистрация домена ${tld} (1 год) + HTTPS SSL`,"✓ Быстрый глобальный хостинг — 0 ₽/мес навсегда","✓ Форма обратной связи Email и карта","✓ Ваш логотип, услуги, город + архив ZIP","Сомневаетесь? Сначала посмотрите БЕСПЛАТНОЕ превью"],
        cmp: ["СРАВНЕНИЕ ЦЕН 2026","Почему бизнес выбирает Entiu.store","Параметр","Обычное агентство","Итого за 1-й год","Ежемесячная плата","Домен и HTTPS SSL","Оплачивается отдельно","Отдельный счёт","Срок запуска","ZIP сразу / 24ч под ключ","10–20 ч своей работы","4 – 8 недель","Уникальный дизайн","11 520 уникальных версий","Шаблоны как у всех","Индивидуально (дорого)"],
        faq: ["ЧАСТЫЕ ВОПРОСЫ","Готовый сайт для бизнеса — ответы","Сколько стоит готовый сайт для компании?", (z,p,t) => `Всего ${z} разово за ZIP или ${p} под ключ с доменом ${t}, хостингом и SSL. Никаких ежемесячных платежей.`,"Как быстро мой сайт заработает?","Сайты под ключ запускаются за 24 часа с вашим логотипом и услугами. ZIP-архив приходит сразу.","Сайты адаптированы под смартфоны и поиск?","Да. Чистый код HTML5, мгновенная загрузка, HTTPS SSL, карта и полная SEO-разметка."],
        hub: ["ЛОКАЛЬНЫЙ И ГЛОБАЛЬНЫЙ ОХВАТ","Сайты для компаний и мастеров","Готовые решения с быстрой загрузкой, SEO-оптимизацией и приёмом заявок напрямую на Email."],
        footer_copy: "© 2026 Entiu.store · 11 520 Уникальных Дизайнов", footer_contact: "Контакт:",
        ui: ["← Каталог (11 520)","↻ Случайный","✎ Настроить онлайн","ПК","Планшет","Смартфон","⬆ Загрузить лого","Entiu.store · Весь каталог","Все 11 520 готовых сайтов для бизнеса", (z,p,t) => `Выберите нишу, примерьте свой логотип и закажите ${z} ZIP или ${p} под ключ (${t} + SSL за 24ч).`,"← На главную","Все","Светлые","Тёмные","Сбросить","Показать ещё 24 дизайна","Онлайн-чат · Помощь"]
      },
      zh: {
        seo_title: p => `Entiu.store — 24小时上线企业官网 ${p}（含域名与SSL）`,
        seo_desc: p => `专为本地企业打造的高品质成品官网，24小时极速上线仅需 ${p}，含域名、托管与SSL，零月费。`,
        menu_cat_1: "建筑与工程服务", menu_cat_2: "汽车、物流与本地生活",
        tr: ["水暖与供暖","电工与新能源","建筑与装修","屋顶工程","木工定制","油漆装潢","汽车维修保养","搬家与货运","园林景观","24小时开锁","专业保洁"],
        tr_all_btn: "全部20个行业 →", tr_all_card: "全部20个子类别", tr_all_sub: "浏览全部方案 →", sub_count: "576 套专属设计 →",
        hero_enq_btn: "邮件咨询 →", live24: "24小时上线",
        chk_title: "域名实时查询", chk_badge: p => `已包含在 ${p} 内`, chk_btn: "立即查询", chk_hint: "即时检测您的企业专属域名是否可注册。",
        demos: [
          ["汽车维修","沪上精工汽修","上海 · 保养、刹车与电脑检测"],
          ["水暖工程","安心暖通管道","北京 · 供暖安装与24小时抢修"],
          ["搬家物流","极速搬家物流","深圳 · 家庭搬迁与企业货运"],
          ["建筑装修","匠心建筑装饰","广州 · 房屋翻新与屋顶工程"]
        ],
        demo_cta: "在线演示 →", step_lbl: "步骤", zero_mo: "¥0 / 月",
        zip: ["即时下载","购买任意独家设计源码 .ZIP 包，付款后立即发送至您的邮箱。","✓ 1 套独家网站源码（index.html + 素材）","✓ Stripe 付款后自动即时交付 ZIP","✓ 终身拥有版权 — 可免费托管于 Netlify / GitHub","✓ 附赠 60 秒极速上线指南"],
        tk: ["最受欢迎 · 24小时全包上线", tld => `全包一站式交付：注册 ${tld} 域名、全球高速托管、HTTPS SSL、Logo、地图与邮件表单，24小时上线。`, tld => `✓ 含 ${tld} 域名注册（1年）+ HTTPS SSL`,"✓ 全球高速托管 — 永久零月费","✓ 集成邮件咨询表单与地图定位","✓ 定制 Logo、服务介绍、城市 + 完整 ZIP 源码","还不确定？先免费生成您的企业实时预览"],
        cmp: ["2026 建站价格对比","为什么企业选择 Entiu.store","对比项目","传统建站公司","首年总费用","每月固定费用","域名与 HTTPS SSL","每年额外收费","单独开票收费","上线速度","ZIP即时 / 全包24小时","自行折腾10-20小时","4 – 8 周","独家不重复设计","11,520 套独家版本","千篇一律模板","定制（高昂费用）"],
        faq: ["常见问题","企业建站常见问题解答","定制一个成品企业官网需要多少钱？", (z,p,t) => `源码 ZIP 仅需一次性 ${z}，或选择 ${p} 全包方案（含 ${t} 域名、托管、SSL 与 Logo 配置），零月费。`,"网站多久可以正式上线？","全包方案在收到您的资料后 24 小时内上线；ZIP 源码包付款后立即发送。","网站支持手机浏览和搜索引擎优化吗？","支持。采用轻量 HTML5 语义代码，移动端极速加载，内置 HTTPS SSL、地图与完整 SEO 元数据。"],
        hub: ["本地与全球覆盖","面向各行业的高转化企业网站","专业设计、极速访问，助力您的企业获取更多本地搜索客户与邮件询盘。"],
        footer_copy: "© 2026 Entiu.store · 11,520 套独家网站设计", footer_contact: "联系邮箱：",
        ui: ["← 全部方案 (11,520)","↻ 随机换一套","✎ 实时定制预览","桌面端","平板","手机","⬆ 上传 Logo","Entiu.store · 全部方案","全部 11,520 套成品企业网站", (z,p,t) => `选择行业并实时预览您的品牌，任选 ${z} 源码 ZIP 或 ${p} 全包上线（含 ${t} 与 SSL）。`,"← 返回首页","全部","浅色","深色","重置","加载更多 24 套设计","在线客服 · 咨询"]
      },
      ja: {
        seo_title: p => `Entiu.store — 24時間で公開するビジネスサイト ${p}（ドメイン・SSL込み）`,
        seo_desc: p => `地域ビジネス向けの高品質ウェブサイトを24時間で公開。${p}（独自ドメイン・SSL込み・月額費用ゼロ）。`,
        menu_cat_1: "建設・設備工事", menu_cat_2: "自動車・運送・地域サービス",
        tr: ["水道・給湯設備","電気工事・EV充電","建築・リフォーム","屋根工事","大工・木工","塗装・内装","自動車整備工場","引越し・運送","造園・外構","鍵トラブル24時間","ハウスクリーニング"],
        tr_all_btn: "全20業種を見る →", tr_all_card: "全20カテゴリー", tr_all_sub: "全デザインを見る →", sub_count: "576種類の限定デザイン →",
        hero_enq_btn: "メール相談 →", live24: "24時間で公開",
        chk_title: "ドメイン空き状況チェック", chk_badge: p => `${p} に含まれます`, chk_btn: "確認する", chk_hint: "ご希望のドメインが取得可能か即座に確認できます。",
        demos: [
          ["自動車整備","東京オートサービス","東京 · 車検・ブレーキ・診断"],
          ["水道設備","アクア設備サポート","大阪 · 給湯器・24時間緊急対応"],
          ["引越し運送","スピード引越し便","横浜 · 単身・オフィス移転"],
          ["建築・屋根","クラフト建築・屋根","名古屋 · リフォーム・屋根施工"]
        ],
        demo_cta: "デモ →", step_lbl: "ステップ", zero_mo: "月額 ¥0",
        zip: ["即時ダウンロード","限定デザインを .ZIP ソースファイルで購入。決済直後にメールでお届けします。","✓ 限定デザイン1種（index.html + 素材一式）","✓ Stripe決済後に自動で即時納品","✓ 買い切り所有権 — Netlify等で無料運用可能","✓ 60秒で公開できる簡単マニュアル付き"],
        tk: ["一番人気 · 24時間おまかせ公開", tld => `${tld}ドメイン取得、高速ホスティング、SSL、ロゴ設定、Googleマップ、メールフォームまで24時間で公開。`, tld => `✓ ${tld}独自ドメイン（1年）+ HTTPS SSL`,"✓ 高速グローバルサーバー — 月額¥0","✓ メール問い合わせフォーム＆Googleマップ連携","✓ ロゴ・サービス内容反映 + ZIPソース付き","迷っていますか？まずは無料でライブプレビューを体験"],
        cmp: ["2026年 制作費比較","Entiu.storeが選ばれる理由","比較項目","従来の制作会社","1年目の総額","月額管理費","ドメイン・HTTPS SSL","毎年別途請求","別途請求","公開までの期間","ZIP即時 / おまかせ24時間","自作で10〜20時間","4〜8週間","重複しない限定デザイン","11,520種類の限定版","ありきたりなテンプレート","完全オーダー（高額）"],
        faq: ["よくあるご質問","プロ品質サイト制作 — 回答","ビジネスサイトの料金はいくらですか？", (z,p,t) => `HTML ZIP買い切りは ${z}、${t}ドメイン・サーバー・SSL・ロゴ設定込みのおまかせプランは ${p} です。月額費用は一切かかりません。`,"どれくらいで公開されますか？","おまかせプランは24時間以内に公開いたします。ZIPパッケージは決済直後にお届けします。","スマホ対応やGoogle検索（SEO）対策はされていますか？","はい。軽量なHTML5、高速表示、HTTPS SSL、Googleマップ、構造化SEOメタデータを標準搭載しています。"],
        hub: ["地域密着＆グローバル対応","全国の店舗・企業向けプロ品質サイト","モバイル最適化と高速表示で、Google検索からメール問い合わせを獲得できる設計です。"],
        footer_copy: "© 2026 Entiu.store · 11,520種類の限定デザイン", footer_contact: "お問い合わせ：",
        ui: ["← 一覧 (11,520)","↻ ランダム","✎ ライブ編集","PC","タブレット","スマホ","⬆ ロゴをアップロード","Entiu.store · デザイン一覧","全11,520種類の即公開ビジネスサイト", (z,p,t) => `業種を選んでロゴをリアルタイム試着。${z} ZIP または ${p} おまかせ制作（${t} + SSL込み）。`,"← トップへ戻る","すべて","ライト","ダーク","リセット","さらに24デザインを表示","チャット相談"]
      },
      ko: {
        seo_title: p => `Entiu.store — 24시간 완성 비즈니스 웹사이트 ${p} (도메인·SSL 포함)`,
        seo_desc: p => `지역 사업자를 위한 고품질 웹사이트를 24시간 내 ${p}에 오픈. 도메인, 호스팅, SSL 포함 — 월 구독료 없음.`,
        menu_cat_1: "건축 및 설비", menu_cat_2: "자동차 · 이사 · 지역 서비스",
        tr: ["배관 및 난방","전기 및 태양광","건축 및 리모델링","지붕 공사","목공 인테리어","페인트 및 도장","자동차 정비소","이사 및 용달","조경 및 정원","24시간 열쇠 수리","전문 청소"],
        tr_all_btn: "20개 업종 전체 →", tr_all_card: "20개 카테고리 전체", tr_all_sub: "전체 카탈로그 열기 →", sub_count: "576개 독점 디자인 →",
        hero_enq_btn: "이메일 문의 →", live24: "24시간 내 오픈",
        chk_title: "도메인 실시간 조회", chk_badge: p => `${p}에 포함`, chk_btn: "조회하기", chk_hint: "원하시는 비즈니스 도메인 등록 가능 여부를 즉시 확인하세요.",
        demos: [
          ["자동차 정비","강남 오토 모터스","서울 · 정기점검, 브레이크, 정밀진단"],
          ["배관 설비","한결 배관 난방","부산 · 보일러 및 24시간 긴급출동"],
          ["이사 운송","스피드 이사 센터","인천 · 가정·사무실 이사 전문"],
          ["건축 시공","프라임 건축 리모델링","대구 · 인테리어, 증축 및 지붕공사"]
        ],
        demo_cta: "데모 →", step_lbl: "단계", zero_mo: "₩0 / 월",
        zip: ["즉시 다운로드","결제 직후 이메일로 발송되는 깔끔한 .ZIP 소스 패키지로 독점 디자인을 소장하세요.","✓ 독점 웹사이트 디자인 1종 (index.html + 파일)","✓ Stripe 결제 후 즉시 자동 ZIP 발송","✓ 평생 소유 — Netlify / GitHub 무료 호스팅 가능","✓ 60초 초간단 업로드 가이드 포함"],
        tk: ["가장 인기 · 24시간 턴키 오픈", tld => `${tld} 도메인 등록, 고속 호스팅, SSL, 로고, 지도 및 이메일 문의폼까지 24시간 내 완성.`, tld => `✓ ${tld} 도메인 등록 (1년) + HTTPS SSL`,"✓ 초고속 글로벌 호스팅 — 월 관리비 ₩0","✓ 이메일 문의 폼 및 지도 연동","✓ 로고, 서비스, 지역 반영 + 전체 ZIP 포함","아직 고민 중이신가요? 무료 실시간 미리보기 먼저 체험"],
        cmp: ["2026 가격 비교","Entiu.store를 선택하는 이유","비교 항목","일반 웹 에이전시","1년 총 비용","월 유지보수비","도메인 & HTTPS SSL","매년 별도 결제","별도 청구","제작 기간","ZIP 즉시 / 턴키 24시간","직접 제작 10~20시간","4 ~ 8주","중복 없는 독점 디자인","11,520개 독점 에디션","흔한 공용 템플릿","맞춤 제작 (고비용)"],
        faq: ["자주 묻는 질문","비즈니스 웹사이트 제작 — 답변","완성형 웹사이트 제작 비용은 얼마인가요?", (z,p,t) => `단품 ZIP 소스는 1회 ${z}, ${t} 도메인·호스팅·SSL·로고 세팅이 포함된 턴키 패키지는 ${p}이며 월 구독료가 없습니다.`,"웹사이트는 얼마나 빨리 오픈되나요?","턴키 패키지는 24시간 이내에 고객님 브랜드로 오픈되며, ZIP 파일은 결제 즉시 전달됩니다.","모바일 최적화와 검색엔진(SEO)에 대응하나요?","네. 가벼운 HTML5 코드, 빠른 모바일 로딩, HTTPS SSL, 지도 및 SEO 메타데이터가 기본 적용됩니다."],
        hub: ["지역 및 글로벌 비즈니스 지원","소상공인·전문 업체를 위한 맞춤 웹사이트","빠른 속도와 깔끔한 디자인으로 검색 고객을 실제 이메일 문의로 연결합니다."],
        footer_copy: "© 2026 Entiu.store · 11,520개 독점 웹사이트 디자인", footer_contact: "문의:",
        ui: ["← 전체 상품 (11,520)","↻ 랜덤 보기","✎ 실시간 커스텀","데스크톱","태블릿","모바일","⬆ 로고 업로드","Entiu.store · 전체 카탈로그","11,520개 즉시 오픈 웹사이트", (z,p,t) => `업종을 선택하고 로고를 미리보기한 뒤 ${z} ZIP 또는 ${p} 턴키(${t}+SSL)를 선택하세요.`,"← 홈으로 돌아가기","전체","라이트","다크","초기화","24개 디자인 더 보기","실시간 채팅 · 문의"]
      },
      hi: {
        seo_title: p => `Entiu.store — 24 घंटे में तैयार बिज़नेस वेबसाइट ${p} (डोमेन व SSL सहित)`,
        seo_desc: p => `स्थानीय व्यवसायों के लिए 24 घंटे में तैयार प्रोफेशनल वेबसाइट मात्र ${p} में — डोमेन, होस्टिंग व SSL शामिल, कोई मासिक शुल्क नहीं।`,
        menu_cat_1: "निर्माण और तकनीकी सेवाएँ", menu_cat_2: "ऑटो, ट्रांसपोर्ट और स्थानीय सेवाएँ",
        tr: ["प्लंबिंग और हीटिंग","इलेक्ट्रीशियन","बिल्डर और निर्माण","रूफिंग सेवाएँ","कारपेंटर","पेंटिंग और डेकोरेशन","ऑटो गैराज और मैकेनिक","मूवर्स और ट्रांसपोर्ट","गार्डन और लैंडस्केपिंग","लॉकस्मिथ 24/7","क्लीनिंग सेवाएँ"],
        tr_all_btn: "सभी 20 श्रेणियाँ →", tr_all_card: "सभी 20 उप-श्रेणियाँ", tr_all_sub: "पूरा कैटलॉग देखें →", sub_count: "576 अनोखे डिज़ाइन →",
        hero_enq_btn: "ईमेल पूछताछ →", live24: "24 घंटे में लाइव",
        chk_title: "डोमेन उपलब्धता जाँचें", chk_badge: p => `${p} में शामिल`, chk_btn: "जाँचें", chk_hint: "अपने व्यवसाय के लिए डोमेन की तुरंत जाँच करें।",
        demos: [
          ["ऑटो गैराज","मुंबई ऑटो केयर","मुंबई · सर्विस, ब्रेक और डायग्नोस्टिक्स"],
          ["प्लंबिंग","हाइड्रोफिक्स सेवाएँ","दिल्ली · बॉयलर और 24/7 आपातकालीन सेवा"],
          ["ट्रांसपोर्ट","स्विफ्ट मूवर्स इंडिया","बेंगलुरु · घर और ऑफिस शिफ्टिंग"],
          ["निर्माण","सॉलिडबिल्ड कंस्ट्रक्शन","पुणे · निर्माण, नवीनीकरण और छत कार्य"]
        ],
        demo_cta: "डेमो →", step_lbl: "चरण", zero_mo: "₹0 / माह",
        zip: ["तुरंत डाउनलोड","भुगतान के तुरंत बाद अपने ईमेल पर साफ़ .ZIP सोर्स पैकेज के रूप में कोई भी डिज़ाइन खरीदें।","✓ 1 अनोखा वेबसाइट डिज़ाइन (index.html + फ़ाइलें)","✓ Stripe भुगतान के तुरंत बाद स्वचालित ZIP डिलीवरी","✓ आजीवन स्वामित्व — Netlify/GitHub पर मुफ़्त होस्टिंग","✓ 60 सेकंड की आसान अपलोड गाइड शामिल"],
        tk: ["सबसे लोकप्रिय · 24 घंटे में लाइव", tld => `पूर्ण टर्नकी लॉन्च: ${tld} डोमेन, तेज़ होस्टिंग, SSL, आपका लोगो, Google मैप और ईमेल फ़ॉर्म 24 घंटे में लाइव।`, tld => `✓ ${tld} डोमेन पंजीकरण (1 वर्ष) + HTTPS SSL`,"✓ तेज़ ग्लोबल होस्टिंग — ₹0 मासिक शुल्क","✓ ईमेल संपर्क फ़ॉर्म और Google मैप","✓ आपका लोगो, सेवाएँ, शहर + पूरा ZIP पैकेज","अभी तय नहीं किया? पहले मुफ़्त लाइव प्रीव्यू देखें"],
        cmp: ["2026 कीमत तुलना","व्यवसाय Entiu.store क्यों चुनते हैं","सुविधा","पारंपरिक एजेंसी","पहले वर्ष की कुल लागत","मासिक शुल्क","डोमेन और HTTPS SSL","अलग से वार्षिक शुल्क","अलग से बिल","लॉन्च समय","ZIP तुरंत / 24 घंटे टर्नकी","10-20 घंटे खुद काम","4 – 8 सप्ताह","अनोखा डिज़ाइन","11,520 एक्सक्लूसिव एडिशन","सामान्य टेम्पलेट","कस्टम (बहुत महंगा)"],
        faq: ["अक्सर पूछे जाने वाले प्रश्न","बिज़नेस वेबसाइट — उत्तर","तैयार बिज़नेस वेबसाइट की कीमत कितनी है?", (z,p,t) => `सिर्फ़ ${z} एक बार ZIP के लिए या ${p} पूर्ण पैकेज जिसमें ${t} डोमेन, होस्टिंग, SSL और लोगो शामिल है। कोई मासिक शुल्क नहीं।`,"मेरी वेबसाइट कितनी जल्दी लाइव होगी?","टर्नकी वेबसाइटें 24 घंटे के भीतर आपके नाम व लोगो के साथ लाइव हो जाती हैं। ZIP तुरंत मिलता है।","क्या ये वेबसाइटें मोबाइल और Google के लिए तैयार हैं?","हाँ। स्वच्छ HTML5 कोड, तेज़ लोडिंग, HTTPS SSL, Google मैप्स और लोकल SEO शामिल है।"],
        hub: ["स्थानीय और वैश्विक कवरेज","भारत के व्यवसायों के लिए आधुनिक वेबसाइटें","तेज़ लोडिंग और SEO-तैयार डिज़ाइन जो Google से सीधे ईमेल पूछताछ लाते हैं।"],
        footer_copy: "© 2026 Entiu.store · 11,520 एक्सक्लूसिव वेबसाइट डिज़ाइन", footer_contact: "संपर्क:",
        ui: ["← ऑफ़र (11,520)","↻ रैंडम","✎ लाइव कस्टमाइज़","डेस्कटॉप","टैबलेट","मोबाइल","⬆ लोगो अपलोड करें","Entiu.store · पूरा कैटलॉग","सभी 11,520 रेडी-टू-लॉन्च वेबसाइटें", (z,p,t) => `अपना व्यवसाय चुनें, लोगो प्रीव्यू करें और ${z} ZIP या ${p} टर्नकी (${t} + SSL) चुनें।`,"← होम पर वापस","सभी","लाइट","डार्क","रीसेट","24 और डिज़ाइन लोड करें","लाइव चैट · सहायता"]
      },
      sv: {
        seo_title: p => `Entiu.store — Nyckelfärdig Företagshemsida på 24h för ${p} (.se & SSL)`,
        seo_desc: p => `Professionell hemsida för lokala företag på 24 timmar för ${p} inkl. domän, hosting & SSL — utan månadskostnad.`,
        menu_cat_1: "Bygg & Hantverk", menu_cat_2: "Bil, Flytt & Lokala Tjänster",
        tr: ["VVS & Rör","Elektriker","Bygg & Renovering","Takläggare","Snickare","Målare","Bilverkstad","Flyttfirma & Transport","Trädgård & Mark","Låssmed 24/7","Städfirma"],
        tr_all_btn: "Alla 20 kategorier →", tr_all_card: "Alla 20 underkategorier", tr_all_sub: "Öppna hela utbudet →", sub_count: "576 unika designer →",
        hero_enq_btn: "E-postoffert →", live24: "LIVE PÅ 24H",
        chk_title: "KOLLA LEDIG DOMÄN", chk_badge: p => `Ingår i ${p}`, chk_btn: "Sök", chk_hint: "Direkt kontroll av lediga företagsdomäner.",
        demos: [
          ["BILVERKSTAD","Nordic Auto Service","Stockholm · Service, Bromsar & Diagnostik"],
          ["VVS","VärmePro VVS","Göteborg · Värmepumpar & Jour 24/7"],
          ["FLYTT","SnabbFlytt SE","Malmö · Bohagsflytt & Kontorsflytt"],
          ["BYGG","SolidBygg & Tak","Uppsala · Tillbyggnad & Takläggning"]
        ],
        demo_cta: "Demo →", step_lbl: "STEG", zero_mo: "0 kr / mån",
        zip: ["Direkt nedladdning","Köp valfri unik design som rent .ZIP-paket skickat direkt till din e-post efter betalning.","✓ 1 unik webbdesign (index.html + filer)","✓ Automatisk ZIP-leverans via Stripe","✓ Livstids äganderätt — gratis hosting på Netlify/GitHub","✓ Enkel 60-sekunders guide ingår"],
        tk: ["Mest vald · Live på 24 timmar", tld => `Helt nyckelfärdigt: ${tld}-domän, snabb hosting, SSL, logotyp, Google Maps och kontaktformulär live inom 24h.`, tld => `✓ ${tld}-domänregistrering (1 år) + HTTPS SSL`,"✓ Snabb global hosting — 0 kr/mån alltid","✓ E-postformulär och Google Maps kopplat","✓ Din logotyp, tjänster, stad + komplett ZIP","Osäker? Se en GRATIS förhandsvisning först"],
        cmp: ["PRISJÄMFÖRELSE 2026","Därför väljer företag Entiu.store","Funktion","Traditionell Byrå","Totalkostnad år 1","Månadsavgift","Domän & HTTPS SSL","Betalas separat","Faktureras extra","Leveranstid","ZIP direkt / 24h nyckelfärdig","10–20 tim eget jobb","4 – 8 veckor","Unik design","11 520 unika utgåvor","Standardmallar","Skräddarsydd (dyr)"],
        faq: ["VANLIGA FRÅGOR","Företagshemsida — Svar","Vad kostar en färdig företagshemsida?", (z,p,t) => `Bara ${z} engångsbelopp för ZIP eller ${p} allt-i-ett med ${t}-domän, hosting och SSL. Inga månadsavgifter.`,"Hur snabbt kommer hemsidan online?","Nyckelfärdiga sidor lanseras inom 24 timmar med din logotyp och tjänster. ZIP levereras direkt.","Fungerar sidorna i mobilen och för Google SEO?","Ja. Ren HTML5-kod, blixtsnabb laddning, HTTPS SSL, Google Maps och lokal SEO."],
        hub: ["LOKAL & GLOBAL TÄCKNING","Hemsidor för företag i hela Sverige","Snabba, moderna hemsidor byggda för lokal synlighet på Google och direkta e-postförfrågningar."],
        footer_copy: "© 2026 Entiu.store · 11 520 Unika Webbdesigner", footer_contact: "Kontakt:",
        ui: ["← Utbud (11 520)","↻ Slumpa","✎ Anpassa live","Dator","Surfplatta","Mobil","⬆ Ladda upp logotyp","Entiu.store · Hela Utbudet","Alla 11 520 färdiga företagshemsidor", (z,p,t) => `Välj bransch, testa din logotyp live och välj ${z} ZIP eller ${p} nyckelfärdig (${t} + SSL på 24h).`,"← Tillbaka till start","Alla","Ljus","Mörk","Återställ","Ladda 24 designer till","Livechatt · Hjälp"]
      },
      cs: {
        seo_title: p => `Entiu.store — Firemní Web na Klíč za 24h za ${p} (Doména .cz a SSL)`,
        seo_desc: p => `Profesionální web pro živnostníky a firmy na klíč za 24 hodin za ${p} včetně domény, hostingu a SSL — bez měsíčních poplatků.`,
        menu_cat_1: "Stavebnictví a Řemesla", menu_cat_2: "Auto, Stěhování a Služby",
        tr: ["Instalatérství a Topení","Elektrikáři","Stavby a Rekonstrukce","Pokrývačství a Střechy","Truhlářství","Malířství","Autoservis a Pneuservis","Stěhování a Doprava","Zahrady a Dlažby","Zámečnictví 24/7","Úklidové Služby"],
        tr_all_btn: "Všech 20 kategorií →", tr_all_card: "Všech 20 podkategorií", tr_all_sub: "Otevřít celou nabídku →", sub_count: "576 unikátních designů →",
        hero_enq_btn: "E-mail poptávka →", live24: "ONLINE DO 24H",
        chk_title: "OVĚŘIT VOLNOU DOMÉNU", chk_badge: p => `V ceně ${p}`, chk_btn: "Ověřit", chk_hint: "Okamžité ověření dostupnosti firemní domény.",
        demos: [
          ["AUTOSERVIS","AutoServis Praha","Praha · STK, Brzdy a Diagnostika"],
          ["INSTALATÉŘI","HydroTerm CZ","Brno · Kotle a Havarijní služba 24/7"],
          ["STĚHOVÁNÍ","RychléStěhování CZ","Ostrava · Byty, Kanceláře a Přeprava"],
          ["STAVBY","SolidStav & Střechy","Plzeň · Rekonstrukce a Nové střechy"]
        ],
        demo_cta: "Ukázka →", step_lbl: "KROK", zero_mo: "0 Kč / měsíc",
        zip: ["Okamžité stažení","Kupte libovolný unikátní design jako čistý .ZIP balíček doručený e-mailem ihned po platbě.","✓ 1 unikátní design webu (index.html + soubory)","✓ Okamžité doručení ZIP po platbě Stripe","✓ Doživotní vlastnictví — hosting zdarma na Netlify/GitHub","✓ Jednoduchý návod na spuštění za 60 sekund"],
        tk: ["Nejoblíbenější · Na klíč za 24h", tld => `Kompletní spuštění na klíč: doména ${tld}, rychlý hosting, SSL, vaše logo, mapa a e-mailový formulář do 24 hodin.`, tld => `✓ Registrace domény ${tld} (1 rok) + HTTPS SSL`,"✓ Rychlý globální hosting — 0 Kč měsíčně","✓ Funkční e-mailový formulář a Google Mapa","✓ Vaše logo, služby, město + kompletní ZIP","Nejste si jisti? Prohlédněte si nejdříve ukázku ZDARMA"],
        cmp: ["SROVNÁNÍ CEN 2026","Proč firmy volí Entiu.store","Parametr","Klasická agentura","Celková cena za 1. rok","Měsíční poplatky","Doména a HTTPS SSL","Placeno zvlášť","Fakturováno extra","Doba spuštění","ZIP ihned / 24h na klíč","10–20 hod. vlastní práce","4 – 8 týdnů","Unikátní design","11 520 unikátních edic","Běžné šablony","Na míru (drahé)"],
        faq: ["ČASTÉ DOTAZY","Firemní web na klíč — odpovědi","Kolik přesně stojí hotový firemní web?", (z,p,t) => `Pouze ${z} jednorázově za ZIP nebo ${p} kompletně na klíč s doménou ${t}, hostingem a SSL. Nulové měsíční poplatky.`,"Jak rychle bude můj web online?","Weby na klíč spouštíme do 24 hodin s vaším logem a službami. ZIP balíčky ihned po platbě.","Fungují weby na mobilech a pro vyhledávání Google?","Ano. Rychlý HTML5 kód, HTTPS SSL, Google Mapa a kompletní lokální SEO metadata."],
        hub: ["LOKÁLNÍ I GLOBÁLNÍ POKRYTÍ","Weby pro firmy a řemeslníky v celé ČR","Rychlé, moderní weby připravené přivádět lokální poptávky z Google přímo na váš e-mail."],
        footer_copy: "© 2026 Entiu.store · 11 520 Unikátních Webových Designů", footer_contact: "Kontakt:",
        ui: ["← Nabídka (11 520)","↻ Náhodný","✎ Upravit živě","Počítač","Tablet","Mobil","⬆ Nahrát logo","Entiu.store · Celá Nabídka","Všech 11 520 hotových firemních webů", (z,p,t) => `Vyberte obor, vyzkoušejte své logo živě a zvolte ${z} ZIP nebo ${p} na klíč (${t} + SSL za 24h).`,"← Zpět na úvod","Vše","Světlé","Tmavé","Resetovat","Načíst dalších 24 designů","Živý chat · Pomoc"]
      },
      tr: {
        seo_title: p => `Entiu.store — 24 Saatte Hazır Kurumsal Web Sitesi ${p} (Domain ve SSL Dahil)`,
        seo_desc: p => `Yerel işletmeler için 24 saatte anahtar teslim profesyonel web sitesi ${p} — domain, hosting ve SSL dahil, aylık ücret yok.`,
        menu_cat_1: "İnşaat ve Teknik Hizmetler", menu_cat_2: "Oto, Nakliyat ve Yerel Hizmetler",
        tr: ["Tesisat ve Isıtma","Elektrikçi","İnşaat ve Tadilat","Çatı Sistemleri","Marangozluk","Boya ve Dekorasyon","Oto Servis ve Tamir","Evden Eve Nakliyat","Peyzaj ve Bahçe","Çilingir 24/7","Temizlik Hizmetleri"],
        tr_all_btn: "Tüm 20 kategori →", tr_all_card: "Tüm 20 alt kategori", tr_all_sub: "Tüm kataloğu aç →", sub_count: "576 benzersiz tasarım →",
        hero_enq_btn: "E-posta Teklifi →", live24: "24 SAATTE YAYINDA",
        chk_title: "ALAN ADI SORGULA", chk_badge: p => `${p} paketine dahil`, chk_btn: "Sorgula", chk_hint: "İşletmeniz için alan adı müsaitliğini anında kontrol edin.",
        demos: [
          ["OTO SERVİS","İstanbul Oto Bakım","İstanbul · Bakım, Fren ve Arıza Tespiti"],
          ["TESİSAT","Hızlı Tesisat Pro","Ankara · Kombi ve 7/24 Acil Servis"],
          ["NAKLİYAT","Ekspres Nakliyat TR","İzmir · Evden Eve ve Ofis Taşıma"],
          ["İNŞAAT","Sağlam Yapı & Çatı","Bursa · Tadilat, İnşaat ve Çatı"]
        ],
        demo_cta: "Demo →", step_lbl: "ADIM", zero_mo: "0 ₺ / ay",
        zip: ["Anında İndirme","Ödeme sonrası e-postanıza gönderilen temiz .ZIP kaynak paketiyle dilediğiniz tasarımı alın.","✓ 1 benzersiz web tasarımı (index.html + dosyalar)","✓ Stripe ödemesi sonrası anında otomatik ZIP teslimatı","✓ Ömür boyu sahiplik — Netlify/GitHub'da ücretsiz barındırma","✓ 60 saniyede yayınlama rehberi dahil"],
        tk: ["En Çok Tercih Edilen · 24 Saatte Yayında", tld => `Anahtar teslim kurulum: ${tld} alan adı, hızlı hosting, SSL, logonuz, Google Harita ve e-posta formu 24 saatte yayında.`, tld => `✓ ${tld} alan adı kaydı (1 yıl) + HTTPS SSL`,"✓ Hızlı global hosting — aylık 0 ₺ ücret","✓ E-posta iletişim formu ve Google Harita","✓ Logonuz, hizmetleriniz, şehriniz + tam ZIP","Emin değil misiniz? Önce ÜCRETSİZ canlı önizleme görün"],
        cmp: ["2026 FİYAT KARŞILAŞTIRMASI","İşletmeler neden Entiu.store seçiyor","Özellik","Geleneksel Ajans","1. Yıl Toplam Maliyet","Aylık Sabit Ücret","Domain ve HTTPS SSL","Yıllık ekstra ücret","Ayrı faturalandırılır","Teslim Süresi","ZIP anında / 24 saatte tam","10-20 saat kendi emeğiniz","4 – 8 hafta","Benzersiz Tasarım","11.520 özel sürüm","Klasik şablonlar","Özel (çok maliyetli)"],
        faq: ["SIKÇA SORULAN SORULAR","Kurumsal Web Sitesi — Yanıtlar","Hazır kurumsal web sitesi ne kadar?", (z,p,t) => `Sadece ZIP kaynak paketi tek seferlik ${z} veya ${t} domain, hosting, SSL ve logo dahil anahtar teslim ${p}. Aylık ücret yok.`,"Web sitem ne kadar sürede yayına girer?","Anahtar teslim siteler 24 saat içinde marka bilgilerinizle yayına alınır. ZIP paketleri anında teslim edilir.","Siteler mobil uyumlu ve Google SEO'ya hazır mı?","Evet. Temiz HTML5 kodu, hızlı açılış, HTTPS SSL, Google Haritalar ve yerel SEO verileriyle gelir."],
        hub: ["YEREL VE GLOBAL KAPSAM","Türkiye'deki işletmeler için modern web siteleri","Google'da yerel aramalarda öne çıkmak ve doğrudan e-posta teklifleri almak için optimize edildi."],
        footer_copy: "© 2026 Entiu.store · 11.520 Benzersiz Web Tasarımı", footer_contact: "İletişim:",
        ui: ["← Katalog (11.520)","↻ Rastgele","✎ Canlı Düzenle","Masaüstü","Tablet","Mobil","⬆ Logo Yükle","Entiu.store · Tüm Katalog","Yayına Hazır 11.520 Web Sitesi", (z,p,t) => `Sektörünüzü seçin, logonuzu canlı test edin ve ${z} ZIP veya ${p} anahtar teslim (${t} + SSL) seçin.`,"← Ana Sayfaya Dön","Tümü","Açık","Koyu","Sıfırla","24 tasarım daha yükle","Canlı Destek"]
      },
      ro: {
        seo_title: p => `Entiu.store — Site de Firmă la Cheie în 24h la ${p} (Domeniu .ro și SSL)`,
        seo_desc: p => `Site web profesional la cheie pentru firme locale în 24 de ore la ${p}, cu domeniu, găzduire și SSL — fără abonamente lunare.`,
        menu_cat_1: "Construcții și Instalații", menu_cat_2: "Auto, Mutări și Servicii",
        tr: ["Instalații Sanitare","Electricieni","Construcții și Renovări","Acoperișuri","Tâmplărie","Zugrăveli","Service Auto","Mutări și Transport","Amenajări Grădini","Lăcătuș 24/7","Servicii Curățenie"],
        tr_all_btn: "Toate cele 20 categorii →", tr_all_card: "Toate cele 20 subcategorii", tr_all_sub: "Deschide oferta →", sub_count: "576 designuri unice →",
        hero_enq_btn: "Cerere Email →", live24: "LIVE ÎN 24H",
        chk_title: "VERIFICĂ DOMENIU", chk_badge: p => `Inclus în ${p}`, chk_btn: "Verifică", chk_hint: "Verificare instantanee a disponibilității domeniului firmei tale.",
        demos: [
          ["SERVICE AUTO","AutoPro București","București · Revizii, Frâne și Diagnoză"],
          ["INSTALAȚII","HidroTerm Rapid","Cluj-Napoca · Centrale și Urgențe 24/7"],
          ["MUTĂRI","Mutări Rapide RO","Timișoara · Locuințe, Birouri și Transport"],
          ["CONSTRUCȚII","SolidBuild & Acoperișuri","Iași · Renovări și Acoperișuri"]
        ],
        demo_cta: "Demo →", step_lbl: "PASUL", zero_mo: "0 lei / lună",
        zip: ["Descărcare Instantă","Cumpără orice design exclusiv ca pachet sursă .ZIP trimis imediat pe email după plată.","✓ 1 design unic (index.html + fișiere)","✓ Livrare automată ZIP imediat după plata Stripe","✓ Proprietate pe viață — găzduire gratuită pe Netlify/GitHub","✓ Ghid simplu de publicare în 60 de secunde"],
        tk: ["Cel Mai Ales · Live în 24h", tld => `Lansare la cheie: domeniu ${tld}, găzduire rapidă, SSL, logo-ul tău, Google Maps și formular email live în 24h.`, tld => `✓ Înregistrare domeniu ${tld} (1 an) + HTTPS SSL`,"✓ Găzduire globală rapidă — 0 lei/lună mereu","✓ Formular contact email și Google Maps","✓ Logo-ul tău, servicii, oraș + pachet ZIP complet","Nu ești sigur încă? Vezi întâi o previzualizare GRATUITĂ"],
        cmp: ["COMPARAȚIE PREȚURI 2026","De ce aleg firmele Entiu.store","Caracteristică","Agenție Clasică","Cost total anul 1","Abonamente lunare","Domeniu și HTTPS SSL","Plătit separat anual","Facturat separat","Timp de lansare","ZIP instant / 24h la cheie","10–20 ore muncă proprie","4 – 8 săptămâni","Design unic exclusiv","11.520 ediții unice","Șabloane comune","Personalizat (scump)"],
        faq: ["ÎNTREBĂRI FRECVENTE","Site de Firmă — Răspunsuri","Cât costă un site gata de lansare pentru firma mea?", (z,p,t) => `Doar ${z} o singură dată pentru ZIP sau ${p} complet la cheie cu domeniu ${t}, găzduire și SSL. Zero abonamente lunare.`,"Cât de repede va fi online site-ul meu?","Site-urile la cheie sunt lansate în 24 de ore cu logo-ul și serviciile tale. Pachetele ZIP vin instant.","Sunt site-urile compatibile cu mobilul și Google?","Da. Cod HTML5 curat, încărcare rapidă, HTTPS SSL, Google Maps și metadate SEO locale."],
        hub: ["ACOPERIRE LOCALĂ ȘI GLOBALĂ","Site-uri moderne pentru firme din România","Designuri rapide optimizate pentru căutări locale pe Google și cereri directe pe email."],
        footer_copy: "© 2026 Entiu.store · 11.520 Designuri Web Unice", footer_contact: "Contact:",
        ui: ["← Ofertă (11.520)","↻ Aleatoriu","✎ Personalizează live","Desktop","Tabletă","Mobil","⬆ Încarcă Logo","Entiu.store · Oferta Completă","Toate cele 11.520 Site-uri Gata de Lansare", (z,p,t) => `Alege categoria, testează logo-ul live și alege ${z} ZIP sau ${p} la cheie (${t} + SSL în 24h).`,"← Înapoi acasă","Toate","Deschis","Închis","Resetează","Încarcă încă 24 designuri","Chat Live · Ajutor"]
      }
    };
    const t = DATA[code];
    return t ? buildPack(r, f, t) : null;
  }

  // 2. Native Demo Content Translations (Trades, Services, Hero Slogan, Reviews)
  const PL_TRADES = {
    plumber:     { name: "Hydraulika i Ogrzewanie", short: "Hydraulika", badge: "Certyfikat UDT · 24/7", tagline: "Nowoczesne instalacje łazienkowe, kotły kondensacyjne oraz ekspresowe pogotowie hydrauliczne.", services: [["Montaż i Serwis Kotłów", "Energooszczędne kotły gazowe i pompy ciepła z 10-letnią gwarancją.", "od 9 250 zł"], ["Pogotowie Hydrauliczne 24/7", "Dojazd w 60 minut, usuwanie wycieków i udrażnianie bez ukrytych opłat.", "od 375 zł"], ["Kompleksowe Łazienki", "Biały montaż, prysznice walk-in oraz ogrzewanie podłogowe.", "Wycena ind."], ["Płukanie i Regulacja CO", "Płukanie instalacji, termostaty smart i równoważenie grzejników.", "od 700 zł"]] },
    electrician: { name: "Instalacje Elektryczne", short: "Elektryka", badge: "Uprawnienia SEP", tagline: "Precyzyjne oświetlenie architektoniczne, modernizacje rozdzielnic oraz ładowarki EV.", services: [["Oświetlenie LED i Smart", "Profile architektoniczne LED, ściemnianie i oświetlenie ogrodu.", "od 1 600 zł"], ["Ładowarki Samochodów EV", "Montaż wallboxów 7–22 kW z zabezpieczeniami i odbiorem.", "od 3 900 zł"], ["Wymiana Rozdzielnic", "Nowoczesne rozdzielnice z ochroną przepięciową w jeden dzień.", "od 2 400 zł"], ["Pomiary i Przeglądy SEP", "Pełne protokoły odbiorcze dla domów, mieszkań i firm.", "od 725 zł"]] },
    mechanic:    { name: "Warsztat i Mechanika", short: "Mechanika", badge: "Mistrz Mechaniki", tagline: "Komputerowa diagnostyka OBD, serwis hamulców OEM oraz kompleksowa obsługa samochodów.", services: [["Pełny Przegląd Okresowy", "Części jakości OEM i 65-punktowa kontrola bezpieczeństwa.", "od 675 zł"], ["Hamulce, Tarcze i Klocki", "Wymiana zestawów Brembo i Bosch jeszcze tego samego dnia.", "od 700 zł"], ["Diagnostyka Komputerowa", "Odczyt błędów ECU, wypalanie DPF i telemetria na żywo.", "od 300 zł"], ["Przegląd Przed Zakupem", "110-punktowa inspekcja auta używanego przed podpisaniem umowy.", "od 475 zł"]] },
    roofer:      { name: "Dekarstwo i Dachy", short: "Dachy", badge: "Mistrz Dekarski", tagline: "Dachy z dachówki i łupka, nowoczesne dachy płaskie EPDM oraz precyzyjne obróbki blacharskie.", services: [["Nowe Pokrycia Dachowe", "20-letnia gwarancja konstrukcyjna na kompletne dachy skośne.", "Darmowa wycena"], ["Dachy Płaskie EPDM / PVC", "Szczelne membrany architektoniczne o trwałości 35+ lat.", "od 4 900 zł"], ["Obróbki Kominów i Rynny", "Uszczelnianie kominów, czyszczenie i montaż systemów rynnowych.", "od 1 300 zł"], ["Inspekcja Dachu Dronem", "Raport wideo 4K ze stanu pokrycia przed rozpoczęciem prac.", "Gratis"]] },
    builder:     { name: "Budownictwo i Remonty", short: "Budownictwo", badge: "Pełne Ubezpieczenie OC", tagline: "Rozbudowy domów, adaptacje poddaszy i generalne wykończenia wnętrz pod klucz.", services: [["Rozbudowy i Dobudowy", "Kompleksowa realizacja od fundamentów aż po odbiór techniczny.", "Wycena ind."], ["Adaptacje Poddaszy", "Dodatkowe sypialnie z łazienką i oknami dachowymi.", "od 45 000 zł"], ["Remonty Pod Klucz", "Gładzie, zabudowy G-K, łazienki i stolarka drzwiowa.", "Wycena ind."], ["Prace Konstrukcyjne", "Wyburzenia ścian nośnych, podciągi stalowe i stropy.", "od 8 500 zł"]] },
    manvan:      { name: "Transport i Przeprowadzki", short: "Przeprowadzki", badge: "Ubezpieczenie OCP", tagline: "Bezpieczne przeprowadzki mieszkań, biur oraz ekspresowy transport mebli i sprzętu.", services: [["Przeprowadzki Mieszkań", "Ekipa z noszeniem, zabezpieczeniem folią i kocami transportowymi.", "od 650 zł"], ["Przeprowadzki Biur", "Sprawny transport sprzętu IT i dokumentów także w weekendy.", "od 1 400 zł"], ["Bagażówka i Pojedyncze Kursy", "Odbiór mebli ze sklepów (IKEA/Castorama) tego samego dnia.", "od 250 zł"], ["Transport Krajowy i UE", "Bezpośrednie kursy dedykowanym busem bez przeładunków.", "Wycena ind."]] },
    landscaper:  { name: "Ogrody i Brukarstwo", short: "Ogrody", badge: "Projekt + Realizacja", tagline: "Nowoczesne tarasy z płyt gresowych, kostka brukowa, ogrodzenia i automatyczne nawadnianie.", services: [["Tarasy i Kostka Brukowa", "Precyzyjna podbudowa i układanie płyt wielkoformatowych.", "od 3 500 zł"], ["Zakładanie Ogrodów", "Trawniki z rolki, rabaty roślinne i oświetlenie wieczorne.", "od 4 800 zł"], ["Ogrodzenia i Pergole", "Nowoczesne przęsła, bramy przesuwne i drewniane pergole.", "od 2 900 zł"], ["Pielęgnacja Całoroczna", "Regularne koszenie, przycinanie żywopłotów i nawożenie.", "od 350 zł"]] },
    locksmith:   { name: "Ślusarstwo i Zamki 24/7", short: "Ślusarz 24/7", badge: "Dojazd 25 min", tagline: "Awaryjne otwieranie drzwi bez uszkodzeń, wymiana wkładek antywłamaniowych i serwis zamków.", services: [["Awaryjne Otwieranie Drzwi", "Bezinwazyjne otwieranie mieszkań i domów przez całą dobę.", "od 290 zł"], ["Wymiana Zamków i Wkładek", "Atestowane wkładki klasy C odporne na rozwiercenie.", "od 350 zł"], ["Zabezpieczenia Antywłamaniowe", "Naprawa po włamaniu i montaż dodatkowych rygli.", "od 490 zł"], ["Regulacja Drzwi i Okien", "Serwis zawiasów, uszczelek i mechanizmów wielopunktowych.", "od 220 zł"]] },
    cleaning:    { name: "Sprzątanie Profesjonalne", short: "Sprzątanie", badge: "Sprawdzona Ekipa", tagline: "Dokładne sprzątanie mieszkań, biur, lokali po remoncie oraz pranie tapicerki.", services: [["Sprzątanie Domów i Mieszkań", "Regularne lub jednorazowe gruntowne porządki z własną chemią.", "od 280 zł"], ["Sprzątanie po Remoncie", "Usuwanie pyłu pobudowlanego, mycie okien i doczyszczanie podłóg.", "od 690 zł"], ["Obsługa Biur i Lokali", "Dyskretne sprzątanie poza godzinami pracy z fakturą VAT.", "od 890 zł"], ["Pranie Dywanów i Kanap", "Ekstrakcyjne pranie tapicerki usuwające plamy i alergeny.", "od 240 zł"]] }
  };

  const REVIEWS_I18N = {
    pl: [
      ["„Perfekcyjne wykonanie od początku do końca. Punktualnie, czysto i dokładnie w umówionej cenie.”", "Marek Kowalski"],
      ["„Szybka reakcja tego samego ranka i sprawne rozwiązanie problemu. Zdecydowanie najwyższy poziom w okolicy.”", "Anna Nowak"],
      ["„Świetny kontakt, zero bałaganu po pracy i pełna pisemna gwarancja. Z czystym sumieniem polecam.”", "Tomasz i Karolina Wiśniewscy"]
    ],
    de: [
      ["„Erstklassige Arbeit von Anfang bis Ende. Pünktlich, sauber und exakt zum vereinbarten Festpreis.“", "Lukas Weber"],
      ["„Noch am selben Morgen reagiert und alles in unter zwei Stunden sauber gelöst. Absolut empfehlenswert.“", "Hannah Schneider"],
      ["„Klare Kommunikation, keine Baustelle hinterlassen und volle 12 Monate Garantie.“", "Markus & Julia Hoffmann"]
    ],
    es: [
      ["«Trabajo impecable de principio a fin. Puntuales, limpios y exactamente al precio acordado.»", "Carlos Martínez"],
      ["«Vinieron la misma mañana y resolvieron todo en menos de dos horas. Muy profesionales.»", "Laura García"],
      ["«Comunicación clara, cero suciedad y garantía completa por escrito. Totalmente recomendables.»", "David y Elena Ruiz"]
    ],
    fr: [
      ["« Travail irréprochable du début à la fin. Ponctuels, propres et exactement au tarif annoncé. »", "Julien Laurent"],
      ["« Intervention le matin même et problème réglé en moins de deux heures. Un vrai professionnalisme. »", "Camille Moreau"],
      ["« Communication claire, chantier nickel et garantie complète de 12 mois. Je recommande vivement. »", "Nicolas & Sophie Bernard"]
    ],
    pt: [
      ["“Trabalho impecável do início ao fim. Pontuais, limpos e exatamente no valor combinado.”", "Rafael Silva"],
      ["“Atenderam na mesma manhã e resolveram tudo em menos de duas horas. Excelente profissionalismo.”", "Mariana Costa"],
      ["“Comunicação clara, zero sujeira e garantia completa de 12 meses. Recomendo muito.”", "Lucas e Fernanda Oliveira"]
    ],
    it: [
      ["«Lavoro impeccabile dall'inizio alla fine. Puntuali, puliti ed esattamente al prezzo concordato.»", "Marco Rossi"],
      ["«Sono arrivati la mattina stessa risolvendo tutto in meno di due ore. Davvero professionali.»", "Giulia Bianchi"],
      ["«Comunicazione chiara, nessun disordine e garanzia completa di 12 mesi. Consigliatissimi.»", "Luca e Sara Conti"]
    ],
    nl: [
      ["“Uitstekend werk van begin tot eind. Stipt, netjes en precies volgens de afgesproken prijs.”", "Bram de Vries"],
      ["“Dezelfde ochtend nog geholpen en binnen twee uur opgelost. Echt vakwerk.”", "Sanne Bakker"],
      ["“Duidelijke communicatie, alles schoon achtergelaten en 12 maanden garantie. Aanrader!”", "Daan & Eva Visser"]
    ],
    ar: [
      ["«مستوى عمل استثنائي من البداية حتى النهاية. دقة في المواعيد، نظافة تامة، وبنفس السعر المتفق عليه تماماً.»", "أحمد المنصور"],
      ["«استجابوا في نفس الصباح وأنهوا العمل في أقل من ساعتين باحترافية عالية تفوق التوقعات.»", "سارة العتيبي"],
      ["«تواصل واضح، عمل متقن بدون أي فوضى، وضمان كامل لمدة 12 شهراً. أنصح بهم بشدة.»", "خالد ونورة الراشد"]
    ],
    ru: [
      ["«Безупречная работа от начала до конца. Пунктуально, чисто и строго по согласованной цене.»", "Алексей Смирнов"],
      ["«Приехали в то же утро и решили задачу за пару часов. На голову выше конкурентов.»", "Елена Волкова"],
      ["«Чёткая коммуникация, идеальный порядок после работы и полная гарантия 12 месяцев.»", "Дмитрий и Анна Козловы"]
    ],
    zh: [
      ["“从头到尾都非常专业，准时到达、施工整洁，价格完全透明无隐形收费。”", "张伟"],
      ["“当天上午就快速响应，两小时内彻底解决问题，服务水平远超同行。”", "李娜"],
      ["“沟通顺畅、完工后一尘不染，并提供12个月完整质保，强烈推荐！”", "王强与陈敏"]
    ],
    ja: [
      ["「最初から最後まで完璧な仕事でした。時間厳守で丁寧、見積り通りの明朗会計です。」", "佐藤 健太"],
      ["「当日の朝すぐに対応していただき、2時間以内に解決しました。本当に頼りになります。」", "高橋 美咲"],
      ["「説明も分かりやすく、作業後も非常に綺麗。12ヶ月保証付きで安心しておすすめできます。」", "田中 翔太・由美"]
    ],
    ko: [
      ["“처음부터 끝까지 완벽한 작업이었습니다. 시간 엄수, 깔끔한 마무리, 견적 그대로의 투명한 가격!”", "김민수"],
      ["“당일 오전에 바로 방문해 2시간 만에 해결해 주셨습니다. 정말 믿음직스럽습니다.”", "이지은"],
      ["“소통이 명확하고 작업 후 정리도 완벽했습니다. 12개월 보증까지 강력 추천합니다.”", "박준호 · 최서연"]
    ],
    hi: [
      ["“शुरू से अंत तक बेहतरीन काम। समय के पाबंद, साफ़-सफ़ाई और बिल्कुल तय कीमत पर।”", "रोहित शर्मा"],
      ["“उसी सुबह तुरंत आए और दो घंटे में समस्या हल कर दी। बेहद प्रोफेशनल टीम।”", "प्रिया वर्मा"],
      ["“स्पष्ट बातचीत, काम के बाद कोई गंदगी नहीं और पूरे 12 महीने की गारंटी। अत्यधिक अनुशंसित।”", "अमित और नेहा पटेल"]
    ],
    sv: [
      ["”Enastående arbete från start till mål. Punktliga, noggranna och exakt enligt offert.”", "Erik Lindqvist"],
      ["”Svarade samma morgon och löste allt på under två timmar. Verkligen toppklass.”", "Sofia Berg"],
      ["”Tydlig kommunikation, skinande rent efteråt och 12 månaders garanti. Rekommenderas varmt.”", "Johan & Maja Holm"]
    ],
    cs: [
      ["„Špičková práce od začátku do konce. Přesně na čas, čisto a přesně za domluvenou cenu.“", "Jan Novák"],
      ["„Přijeli ještě tentýž den ráno a vše vyřešili do dvou hodin. Opravdoví profesionálové.“", "Petra Svobodová"],
      ["„Skvělá komunikace, žádný nepořádek a plná 12měsíční záruka. Jednoznačně doporučuji.“", "Tomáš a Eva Dvořákovi"]
    ],
    tr: [
      ["“Baştan sona kusursuz işçilik. Tam zamanında, tertemiz ve kesinlikle anlaşılan fiyatta.”", "Mehmet Yılmaz"],
      ["“Aynı sabah hızlıca geldiler ve iki saatten kısa sürede çözdüler. Gerçek profesyoneller.”", "Ayşe Kaya"],
      ["“Açık iletişim, sıfır dağınıklık ve 12 ay tam garanti. Kesinlikle tavsiye ederim.”", "Emre & Zeynep Demir"]
    ],
    ro: [
      ["„Lucrare impecabilă de la început până la final. Punctuali, curați și exact la prețul stabilit.”", "Andrei Popescu"],
      ["„Au răspuns în aceeași dimineață și au rezolvat totul în sub două ore. Profesioniști adevărați.”", "Elena Ionescu"],
      ["„Comunicare clară, curățenie deplină și garanție scrisă 12 luni. Recomand cu încredere.”", "Mihai și Ioana Radu"]
    ]
  };

  const HERO_SLOGAN = {
    en: "Built to Last.", "en-us": "Built to Last.", "en-au": "Built to Last.",
    pl: "Jakość na Lata.", de: "Qualität, die bleibt.", es: "Calidad Duradera.",
    fr: "Conçu pour Durer.", it: "Qualità che Dura.", nl: "Gebouwd voor Kwaliteit.",
    pt: "Qualidade Duradoura.", ru: "Качество на годы.", zh: "匠心品质，值得信赖。",
    ja: "確かな技術と信頼。", ko: "믿을 수 있는 품질.", ar: "جودة تدوم طويلاً.",
    hi: "भरोसेमंद गुणवत्ता।", sv: "Byggt för att hålla.", cs: "Kvalita na roky.",
    tr: "Kalıcı Kalite.", ro: "Calitate Durabilă."
  };

  // Complete native copy for ALL 12 demo architectures across ALL 20 languages (ZERO English leaks!)
  const ARCH_COPY = {
    en: {
      avail: "AVAILABLE IN", stat1: "210+ Reviews", stat2: "Rapid ETA", stat3: "Insured Cover",
      score: "Verified Score", revs: "190+ verified reviews", slots: "SAME-DAY SLOTS", guar: "12-month guarantee",
      kinfolk: (b, n) => `${b} — <em>${n}</em> crafted with precision.`,
      quoteH: n => `Modern ${n} with transparent pricing.`,
      bentoH: (n, c) => `${n} in ${c}.`,
      bullets: ["✓ Fixed Written Quotes", "✓ Fully Insured Team", "✓ 12-Month Warranty", "✓ Fast Local Response"],
      estK: "Instant Email Estimator", estH: c => `Get a Free ${c} Quote`,
      badge: "Certified Specialists · 24/7",
      tagline: (n, c) => `Trusted ${n.toLowerCase()} specialists in ${c} offering transparent written quotes, fast response and a full 12-month workmanship guarantee.`,
      svcs: n => [
        [`Full ${n} Package`, "Complete installation and turnkey execution with clear written pricing.", "From £195"],
        ["Rapid Diagnostics & Repair", "Fast local callout, fault finding and clean same-day resolution.", "From £75"],
        ["Preventive Maintenance", "Scheduled annual inspection and servicing to avoid costly breakdowns.", "From £120"],
        ["Custom Project & Survey", "Tailored consultation, written specification and fixed project quote.", "Free Quote"]
      ]
    },
    pl: {
      avail: "DOSTĘPNI W:", stat1: "210+ Opinii", stat2: "Szybki dojazd", stat3: "Pełne OC",
      score: "Zweryfikowana ocena", revs: "190+ lokalnych opinii", slots: "SZYBKIE TERMINY", guar: "12 mies. gwarancji",
      kinfolk: (b, n) => `${b} — <em>${n.toLowerCase()}</em> na najwyższym poziomie.`,
      quoteH: n => `Nowoczesna ${n.toLowerCase()} z przejrzystą wyceną.`,
      bentoH: (n, c) => `${n} — ${c}.`,
      bullets: ["✓ Stała wycena na piśmie", "✓ Pełne ubezpieczenie OC", "✓ 12 miesięcy gwarancji", "✓ Szybki dojazd i kontakt"],
      estK: "Szybka Wycena E-mail", estH: c => `Darmowa wycena — ${c}`,
      badge: "Certyfikowani Specjaliści · 24/7",
      tagline: (n, c) => `Sprawdzeni specjaliści (${n.toLowerCase()}) w mieście ${c} — przejrzyste ceny, szybka realizacja i pisemna gwarancja na każdą usługę.`,
      svcs: n => [
        [`Kompleksowa obsługa: ${n}`, "Pełne wykonanie od projektu po odbiór techniczny w ustalonej cenie.", "od 950 zł"],
        ["Szybki serwis i naprawy", "Sprawna diagnostyka oraz usuwanie usterek bez ukrytych kosztów.", "od 350 zł"],
        ["Przeglądy i konserwacja", "Regularny serwis zapobiegający kosztownym awariom.", "od 590 zł"],
        ["Wycena indywidualna", "Bezpłatna konsultacja i szczegółowy kosztorys na e-mail.", "Gratis"]
      ]
    },
    es: {
      avail: "DISPONIBLES EN", stat1: "210+ Opiniones", stat2: "Respuesta rápida", stat3: "Seguro RC",
      score: "Valoración Verificada", revs: "190+ reseñas locales", slots: "CITAS HOY", guar: "Garantía 12 meses",
      kinfolk: (b, n) => `${b} — excelencia en <em>${n.toLowerCase()}</em> para tu hogar y negocio.`,
      quoteH: n => `${n} profesional con precios claros y cerrados.`,
      bentoH: (n, c) => `${n} en ${c}.`,
      bullets: ["✓ Presupuesto cerrado por escrito", "✓ Equipo asegurado", "✓ Garantía de 12 meses", "✓ Atención rápida el mismo día"],
      estK: "Presupuesto por Email", estH: c => `Presupuesto gratis en ${c}`,
      badge: "Profesionales Certificados · 24/7",
      tagline: (n, c) => `Especialistas en ${n.toLowerCase()} en ${c} con presupuesto cerrado, atención rápida y 12 meses de garantía por escrito.`,
      svcs: n => [
        [`Servicio integral de ${n}`, "Ejecución completa llave en mano con materiales de primera calidad.", "Desde 190 €"],
        ["Reparación y diagnóstico rápido", "Detección precisa y solución limpia en el mismo día.", "Desde 79 €"],
        ["Mantenimiento preventivo", "Revisión periódica para evitar averías costosas.", "Desde 125 €"],
        ["Proyecto a medida", "Asesoramiento personalizado y presupuesto detallado por email.", "Gratis"]
      ]
    },
    de: {
      avail: "VERFÜGBAR IN", stat1: "210+ Bewertungen", stat2: "Schnelle Anfahrt", stat3: "Voll versichert",
      score: "Geprüfte Bewertung", revs: "190+ lokale Bewertungen", slots: "KURZFRISTIGE TERMINE", guar: "12 Monate Garantie",
      kinfolk: (b, n) => `${b} — erstklassige <em>${n}</em> für anspruchsvolle Kunden.`,
      quoteH: n => `Moderne ${n} zu transparenten Festpreisen.`,
      bentoH: (n, c) => `${n} in ${c}.`,
      bullets: ["✓ Verbindliche Festpreise", "✓ Voll versicherter Fachbetrieb", "✓ 12 Monate Gewährleistung", "✓ Schnelle Reaktion vor Ort"],
      estK: "Sofort-Angebot per E-Mail", estH: c => `Kostenloses Angebot für ${c}`,
      badge: "Zertifizierter Fachbetrieb · 24/7",
      tagline: (n, c) => `Ihr zuverlässiger Partner für ${n} in ${c} — transparente Festpreise, saubere Ausführung und volle Gewährleistung.`,
      svcs: n => [
        [`Komplettlösung ${n}`, "Fachgerechte Ausführung von der Planung bis zur Übergabe.", "ab 195 €"],
        ["Schneller Reparaturservice", "Zuverlässige Diagnose und saubere Behebung ohne versteckte Kosten.", "ab 85 €"],
        ["Wartung & Inspektion", "Regelmäßiger Check für maximale Sicherheit und Langlebigkeit.", "ab 129 €"],
        ["Individuelle Beratung", "Kostenlose Erstberatung und schriftliches Festpreisangebot.", "Kostenlos"]
      ]
    },
    fr: {
      avail: "DISPONIBLE À", stat1: "210+ Avis", stat2: "Intervention rapide", stat3: "Assuré RC Pro",
      score: "Note Vérifiée", revs: "190+ avis clients", slots: "CRÉNEAUX RAPIDES", guar: "Garantie 12 mois",
      kinfolk: (b, n) => `${b} — l'excellence en <em>${n.toLowerCase()}</em> pour vos projets.`,
      quoteH: n => `${n} moderne avec tarifs transparents.`,
      bentoH: (n, c) => `${n} à ${c}.`,
      bullets: ["✓ Devis écrit fixe", "✓ Équipe assurée RC Pro", "✓ Garantie 12 mois", "✓ Réponse rapide par email"],
      estK: "Devis Rapide par Email", estH: c => `Devis gratuit à ${c}`,
      badge: "Artisans Certifiés · 24/7",
      tagline: (n, c) => `Spécialistes en ${n.toLowerCase()} à ${c} : devis clair, travail soigné et garantie complète de 12 mois.`,
      svcs: n => [
        [`Prestation complète : ${n}`, "Réalisation clé en main avec matériaux professionnels.", "Dès 190 €"],
        ["Dépannage & diagnostic rapide", "Intervention efficace et propre dans les meilleurs délais.", "Dès 80 €"],
        ["Entretien annuel", "Contrôle complet pour prévenir les pannes coûteuses.", "Dès 125 €"],
        ["Étude personnalisée", "Conseil sur mesure et devis détaillé envoyé par email.", "Gratuit"]
      ]
    },
    pt: {
      avail: "ATENDIMENTO EM", stat1: "210+ Avaliações", stat2: "Atendimento rápido", stat3: "Garantia total",
      score: "Nota Verificada", revs: "190+ avaliações locais", slots: "HORÁRIOS HOJE", guar: "Garantia 12 meses",
      kinfolk: (b, n) => `${b} — excelência em <em>${n.toLowerCase()}</em> com qualidade garantida.`,
      quoteH: n => `${n} profissional com preços transparentes.`,
      bentoH: (n, c) => `${n} em ${c}.`,
      bullets: ["✓ Orçamento fechado por escrito", "✓ Equipe segurada", "✓ Garantia de 12 meses", "✓ Retorno rápido por e-mail"],
      estK: "Orçamento por E-mail", estH: c => `Orçamento grátis em ${c}`,
      badge: "Especialistas Certificados · 24/7",
      tagline: (n, c) => `Especialistas em ${n.toLowerCase()} em ${c} com orçamento claro, atendimento ágil e garantia de 12 meses.`,
      svcs: n => [
        [`Serviço completo de ${n}`, "Execução completa com acabamento profissional e preço fechado.", "A partir de R$ 490"],
        ["Diagnóstico e reparo rápido", "Atendimento ágil e solução limpa sem taxas ocultas.", "A partir de R$ 220"],
        ["Manutenção preventiva", "Revisão periódica para evitar custos inesperados.", "A partir de R$ 340"],
        ["Projeto sob medida", "Consultoria gratuita e orçamento detalhado por e-mail.", "Grátis"]
      ]
    },
    it: {
      avail: "DISPONIBILI A", stat1: "210+ Recensioni", stat2: "Intervento rapido", stat3: "Assicurati",
      score: "Valutazione Verificata", revs: "190+ recensioni locali", slots: "DISPONIBILITÀ OGGI", guar: "Garanzia 12 mesi",
      kinfolk: (b, n) => `${b} — eccellenza in <em>${n.toLowerCase()}</em> per la tua casa e azienda.`,
      quoteH: n => `${n} professionale con prezzi trasparenti.`,
      bentoH: (n, c) => `${n} a ${c}.`,
      bullets: ["✓ Preventivo scritto fisso", "✓ Squadra assicurata", "✓ Garanzia 12 mesi", "✓ Risposta rapida via email"],
      estK: "Preventivo via Email", estH: c => `Preventivo gratuito a ${c}`,
      badge: "Professionisti Certificati · 24/7",
      tagline: (n, c) => `Specialisti in ${n.toLowerCase()} a ${c}: preventivi chiari, lavoro impeccabile e garanzia 12 mesi.`,
      svcs: n => [
        [`Servizio completo: ${n}`, "Realizzazione chiavi in mano con materiali certificati.", "Da 190 €"],
        ["Riparazione rapida", "Diagnosi precisa e intervento pulito in giornata.", "Da 80 €"],
        ["Manutenzione programmata", "Controllo periodico per evitare guasti costosi.", "Da 125 €"],
        ["Consulenza su misura", "Sopralluogo e preventivo dettagliato via email.", "Gratuito"]
      ]
    },
    nl: {
      avail: "ACTIEF IN", stat1: "210+ Reviews", stat2: "Snelle service", stat3: "Volledig verzekerd",
      score: "Geverifieerde Score", revs: "190+ lokale reviews", slots: "SNELLE PLANNING", guar: "12 maanden garantie",
      kinfolk: (b, n) => `${b} — vakmanschap in <em>${n.toLowerCase()}</em> zonder zorgen.`,
      quoteH: n => `Professionele ${n.toLowerCase()} met heldere prijzen.`,
      bentoH: (n, c) => `${n} in ${c}.`,
      bullets: ["✓ Vaste offerte vooraf", "✓ Volledig verzekerd", "✓ 12 maanden garantie", "✓ Snelle reactie per e-mail"],
      estK: "Directe E-mail Offerte", estH: c => `Gratis offerte in ${c}`,
      badge: "Erkend Vakbedrijf · 24/7",
      tagline: (n, c) => `Betrouwbare specialisten voor ${n.toLowerCase()} in ${c} met heldere prijzen en 12 maanden garantie.`,
      svcs: n => [
        [`Complete ${n}`, "Vakkundige uitvoering van start tot oplevering.", "Vanaf €190"],
        ["Snelle reparatie & service", "Directe diagnose en nette oplossing zonder verrassingen.", "Vanaf €80"],
        ["Periodiek onderhoud", "Jaarlijkse controle om hoge kosten te voorkomen.", "Vanaf €125"],
        ["Maatwerk offerte", "Vrijblijvend advies en vaste prijsopgave per e-mail.", "Gratis"]
      ]
    },
    ru: {
      avail: "РАБОТАЕМ В:", stat1: "210+ отзывов", stat2: "Быстрый выезд", stat3: "Гарантия",
      score: "Проверенный рейтинг", revs: "190+ реальных отзывов", slots: "ВЫЕЗД СЕГОДНЯ", guar: "Гарантия 12 мес.",
      kinfolk: (b, n) => `${b} — безупречный сервис: <em>${n.toLowerCase()}</em>.`,
      quoteH: n => `Профессиональная ${n.toLowerCase()} с честными ценами.`,
      bentoH: (n, c) => `${n} — ${c}.`,
      bullets: ["✓ Фиксированная смета", "✓ Проверенные мастера", "✓ Гарантия 12 месяцев", "✓ Быстрый ответ по Email"],
      estK: "Быстрый расчёт по Email", estH: c => `Бесплатный расчёт — ${c}`,
      badge: "Сертифицированные мастера · 24/7",
      tagline: (n, c) => `Надёжные специалисты (${n.toLowerCase()}) в городе ${c}: прозрачные цены, аккуратная работа и гарантия 12 месяцев.`,
      svcs: n => [
        [`Комплексная услуга: ${n}`, "Выполнение под ключ с письменной гарантией и фиксированной ценой.", "от 14 900 ₽"],
        ["Оперативный ремонт", "Быстрая диагностика и устранение неисправностей в день обращения.", "от 4 900 ₽"],
        ["Плановое обслуживание", "Регулярная проверка для предотвращения серьёзных поломок.", "от 7 900 ₽"],
        ["Индивидуальный расчёт", "Бесплатная консультация и подробная смета на почту.", "Бесплатно"]
      ]
    },
    zh: {
      avail: "服务地区：", stat1: "210+ 好评", stat2: "极速响应", stat3: "质保承诺",
      score: "真实评分", revs: "190+ 本地客户评价", slots: "当日预约", guar: "12个月质保",
      kinfolk: (b, n) => `${b} — 专业可靠的<em>${n}</em>服务。`,
      quoteH: n => `透明报价的专业${n}服务。`,
      bentoH: (n, c) => `${c}专业${n}。`,
      bullets: ["✓ 书面固定报价", "✓ 专业持证团队", "✓ 12个月质量保证", "✓ 邮件快速回复"],
      estK: "在线邮件报价", estH: c => `获取${c}免费报价`,
      badge: "认证专业团队 · 24/7",
      tagline: (n, c) => `${c}值得信赖的${n}专家，提供透明书面报价、高效施工与12个月质保。`,
      svcs: n => [
        [`全包${n}方案`, "从规划到验收的一站式专业交付，价格透明。", "¥1,500 起"],
        ["快速检修服务", "精准排查问题，当天高效解决。", "¥580 起"],
        ["定期维护保养", "预防性检查，降低长期维修成本。", "¥890 起"],
        ["定制方案咨询", "免费评估并通过邮件发送详细报价单。", "免费"]
      ]
    },
    ja: {
      avail: "対応エリア：", stat1: "210件以上の評価", stat2: "迅速対応", stat3: "安心保証",
      score: "顧客満足度", revs: "190件以上の実績", slots: "即日相談可", guar: "12ヶ月保証",
      kinfolk: (b, n) => `${b} — 確かな品質の<em>${n}</em>サービス。`,
      quoteH: n => `明朗会計のプロ品質${n}。`,
      bentoH: (n, c) => `${c}の${n}。`,
      bullets: ["✓ 明確な事前見積り", "✓ 専門有資格スタッフ", "✓ 12ヶ月施工保証", "✓ メールで迅速返信"],
      estK: "無料メール見積り", estH: c => `${c}の無料お見積り`,
      badge: "認定プロフェッショナル · 24/7",
      tagline: (n, c) => `${c}で選ばれる${n}の専門店。明確なお見積りと丁寧な施工、12ヶ月保証をお届けします。`,
      svcs: n => [
        [`${n} フルパッケージ`, "設計から施工完了まで一貫対応の安心プラン。", "¥28,000〜"],
        ["迅速点検・修理", "原因を的確に特定し、スピーディーに解決します。", "¥12,000〜"],
        ["定期メンテナンス", "トラブルを未然に防ぐ安心の定期点検。", "¥18,000〜"],
        ["個別お見積り", "ご要望に合わせた最適なプランをメールでご提案。", "無料"]
      ]
    },
    ko: {
      avail: "서비스 지역:", stat1: "210+ 고객 후기", stat2: "신속 출동", stat3: "안심 보증",
      score: "검증된 평점", revs: "190+ 지역 후기", slots: "당일 상담 가능", guar: "12개월 보증",
      kinfolk: (b, n) => `${b} — 믿을 수 있는 프리미엄 <em>${n}</em>.`,
      quoteH: n => `투명한 가격의 전문 ${n}.`,
      bentoH: (n, c) => `${c} ${n}.`,
      bullets: ["✓ 투명한 확정 견적", "✓ 전문 인증 인력", "✓ 12개월 품질 보증", "✓ 빠른 이메일 답변"],
      estK: "빠른 이메일 견적", estH: c => `${c} 무료 견적 받기`,
      badge: "인증 전문 팀 · 24/7",
      tagline: (n, c) => `${c} 지역 최고의 ${n} 전문가 — 투명한 견적과 12개월 보증을 약속드립니다.`,
      svcs: n => [
        [`${n} 올인원 시공`, "상담부터 완료까지 깔끔한 원스톱 서비스.", "₩250,000~"],
        ["신속 점검 및 수리", "정확한 진단과 당일 깔끔한 해결.", "₩95,000~"],
        ["정기 유지보수", "고장을 예방하는 합리적인 정기 관리.", "₩150,000~"],
        ["맞춤 견적 상담", "이메일로 상세한 확정 견적서를 보내드립니다.", "무료"]
      ]
    },
    ar: {
      avail: "متاحون في", stat1: "210+ تقييم", stat2: "استجابة سريعة", stat3: "ضمان شامل",
      score: "تقييم موثق", revs: "190+ تقييم محلي", slots: "مواعيد اليوم", guar: "ضمان 12 شهراً",
      kinfolk: (b, n) => `${b} — التميز في <em>${n}</em> لعملائنا.`,
      quoteH: n => `خدمات ${n} احترافية بأسعار شفافة.`,
      bentoH: (n, c) => `${n} في ${c}.`,
      bullets: ["✓ عرض سعر ثابت ومكتوب", "✓ فريق معتمد ومؤمّن", "✓ ضمان 12 شهراً", "✓ رد سريع عبر البريد"],
      estK: "طلب عرض سعر فوري", estH: c => `احصل على عرض مجاني في ${c}`,
      badge: "خبراء معتمدون · 24/7",
      tagline: (n, c) => `متخصصون موثوقون في ${n} في ${c} — أسعار واضحة وجودة عالية مع ضمان 12 شهراً.`,
      svcs: n => [
        [`باقة ${n} الشاملة`, "تنفيذ متكامل بأعلى معايير الجودة وبسعر ثابت.", "ابتداءً من 650 AED"],
        ["فحص وإصلاح سريع", "تشخيص دقيق وحل فوري بدون رسوم خفية.", "ابتداءً من 250 AED"],
        ["صيانة دورية وقائية", "فحص منتظم لتجنب الأعطال المكلفة.", "ابتداءً من 390 AED"],
        ["استشارة وعرض سعر", "تقييم مجاني وعرض سعر مفصل عبر البريد الإلكتروني.", "مجاني"]
      ]
    },
    hi: {
      avail: "उपलब्ध क्षेत्र:", stat1: "210+ समीक्षाएँ", stat2: "तेज़ सेवा", stat3: "पूर्ण बीमा",
      score: "सत्यापित रेटिंग", revs: "190+ स्थानीय समीक्षाएँ", slots: "आज के स्लॉट", guar: "12 महीने की गारंटी",
      kinfolk: (b, n) => `${b} — भरोसेमंद और उच्च गुणवत्ता वाली <em>${n}</em>।`,
      quoteH: n => `पारदर्शी कीमत के साथ आधुनिक ${n}।`, bentoH: (n, c) => `${c} में ${n}।`,
      bullets: ["✓ स्पष्ट लिखित कोटेशन", "✓ प्रमाणित विशेषज्ञ टीम", "✓ 12 महीने की वारंटी", "✓ तेज़ ईमेल उत्तर"],
      estK: "तुरंत ईमेल कोटेशन", estH: c => `${c} के लिए मुफ़्त कोट`, badge: "प्रमाणित विशेषज्ञ · 24/7",
      tagline: (n, c) => `${c} में विश्वसनीय ${n} सेवाएँ — पारदर्शी कीमतें, तेज़ कार्य और 12 महीने की गारंटी।`,
      svcs: n => [[`संपूर्ण ${n} पैकेज`, "शुरू से अंत तक प्रोफेशनल कार्य।", "₹4,900 से"], ["तेज़ जाँच और मरम्मत", "सटीक निदान और त्वरित समाधान।", "₹1,800 से"], ["नियमित रखरखाव", "बड़ी खराबी से बचाव हेतु वार्षिक जाँच।", "₹2,900 से"], ["कस्टम कोटेशन", "ईमेल पर निःशुल्क विस्तृत अनुमान।", "मुफ़्त"]]
    },
    sv: {
      avail: "TILLGÄNGLIGA I", stat1: "210+ Omdömen", stat2: "Snabb insats", stat3: "Försäkrad",
      score: "Verifierat betyg", revs: "190+ lokala omdömen", slots: "LEDIGA TIDER IDAG", guar: "12 mån garanti",
      kinfolk: (b, n) => `${b} — pålitlig <em>${n.toLowerCase()}</em> med högsta kvalitet.`,
      quoteH: n => `Modern ${n.toLowerCase()} med tydliga priser.`, bentoH: (n, c) => `${n} i ${c}.`,
      bullets: ["✓ Fast skriftlig offert", "✓ Fullt försäkrat team", "✓ 12 månaders garanti", "✓ Snabbt svar via e-post"],
      estK: "Snabb E-postoffert", estH: c => `Gratis offert i ${c}`, badge: "Certifierade Proffs · 24/7",
      tagline: (n, c) => `Pålitliga specialister inom ${n.toLowerCase()} i ${c} med fasta priser och 12 månaders garanti.`,
      svcs: n => [[`Komplett ${n}`, "Nyckelfärdigt utförande med tydlig offert.", "Från 1 990 kr"], ["Snabb felsökning & reparation", "Snabb service utan dolda avgifter.", "Från 890 kr"], ["Förebyggande underhåll", "Årlig kontroll som sparar kostnader.", "Från 1 290 kr"], ["Skräddarsydd offert", "Kostnadsfri rådgivning via e-post.", "Gratis"]]
    },
    cs: {
      avail: "PŮSOBÍME V:", stat1: "210+ Recenzí", stat2: "Rychlý výjezd", stat3: "Pojištění",
      score: "Ověřené hodnocení", revs: "190+ místních recenzí", slots: "VOLNÉ TERMÍNY DNES", guar: "Záruka 12 měsíců",
      kinfolk: (b, n) => `${b} — špičková <em>${n.toLowerCase()}</em> bez starostí.`,
      quoteH: n => `Moderní ${n.toLowerCase()} s férovou cenou.`, bentoH: (n, c) => `${n} — ${c}.`,
      bullets: ["✓ Pevná písemná kalkulace", "✓ Plně pojištěný tým", "✓ 12 měsíců záruka", "✓ Rychlá odpověď e-mailem"],
      estK: "Rychlá Poptávka E-mailem", estH: c => `Nezávazná nabídka — ${c}`, badge: "Certifikovaní Odborníci · 24/7",
      tagline: (n, c) => `Ověření specialisté na ${n.toLowerCase()} v lokalitě ${c} — jasné ceny a 12měsíční záruka.`,
      svcs: n => [[`Kompletní ${n}`, "Realizace na klíč za předem dohodnutou cenu.", "od 4 500 Kč"], ["Rychlá diagnostika a oprava", "Profesionální zásah bez skrytých poplatků.", "od 1 800 Kč"], ["Pravidelný servis", "Preventivní kontrola pro dlouhou životnost.", "od 2 900 Kč"], ["Individuální kalkulace", "Zdarma rozpočet na váš e-mail.", "Zdarma"]]
    },
    tr: {
      avail: "HİZMET BÖLGESİ:", stat1: "210+ Yorum", stat2: "Hızlı Destek", stat3: "Sigortalı",
      score: "Doğrulanmış Puan", revs: "190+ yerel yorum", slots: "BUGÜN RANDEVU", guar: "12 ay garanti",
      kinfolk: (b, n) => `${b} — güvenilir ve profesyonel <em>${n.toLowerCase()}</em>.`,
      quoteH: n => `Şeffaf fiyatlarla modern ${n.toLowerCase()}.`, bentoH: (n, c) => `${c} ${n}.`,
      bullets: ["✓ Yazılı sabit fiyat", "✓ Uzman sigortalı ekip", "✓ 12 ay işçilik garantisi", "✓ Hızlı e-posta dönüşü"],
      estK: "Hızlı E-posta Teklifi", estH: c => `${c} Ücretsiz Teklif`, badge: "Sertifikalı Uzmanlar · 24/7",
      tagline: (n, c) => `${c} genelinde güvenilir ${n.toLowerCase()} hizmeti — net fiyatlar ve 12 ay garanti.`,
      svcs: n => [[`Kapsamlı ${n} Paketi`, "Baştan sona anahtar teslim profesyonel uygulama.", "6.500 ₺'den"], ["Hızlı Arıza ve Onarım", "Aynı gün temiz ve garantili çözüm.", "2.500 ₺'den"], ["Periyodik Bakım", "Yüksek masrafları önleyen yıllık kontrol.", "3.900 ₺'den"], ["Özel Proje Teklifi", "E-posta ile ücretsiz detaylı fiyatlandırma.", "Ücretsiz"]]
    },
    ro: {
      avail: "DISPONIBILI ÎN", stat1: "210+ Recenzii", stat2: "Intervenție rapidă", stat3: "Asigurați",
      score: "Scor Verificat", revs: "190+ recenzii locale", slots: "PROGRAMĂRI AZI", guar: "Garanție 12 luni",
      kinfolk: (b, n) => `${b} — excelență în <em>${n.toLowerCase()}</em> fără griji.`,
      quoteH: n => `${n} modernă cu prețuri transparente.`, bentoH: (n, c) => `${n} în ${c}.`,
      bullets: ["✓ Ofertă fixă în scris", "✓ Echipă certificată", "✓ Garanție 12 luni", "✓ Răspuns rapid pe email"],
      estK: "Ofertă Rapidă pe Email", estH: c => `Ofertă gratuită în ${c}`, badge: "Specialiști Certificați · 24/7",
      tagline: (n, c) => `Specialiști de încredere în ${n.toLowerCase()} în ${c} — prețuri clare și garanție 12 luni.`,
      svcs: n => [[`Pachet complet: ${n}`, "Execuție la cheie la preț fix agreat dinainte.", "de la 950 lei"], ["Diagnostic și reparații rapide", "Intervenție promptă fără costuri ascunse.", "de la 350 lei"], ["Întreținere periodică", "Verificare anuală pentru prevenirea defecțiunilor.", "de la 590 lei"], ["Ofertă personalizată", "Consultanță și deviz detaliat pe email.", "Gratuit"]]
    }
  };

  function getDemoCopy(ind, biz, city) {
    const code = global.EntiuI18n ? global.EntiuI18n.get() : "en";
    const baseKey = ARCH_COPY[code] ? code : "en";
    const c = ARCH_COPY[baseKey] || ARCH_COPY.en;
    const localizedInd = localizeIndustry(ind);
    const isEn = code === "en" || code === "en-us" || code === "en-au";
    const isPlWithSpecific = code === "pl" && !!PL_TRADES[ind.id];

    const finalBadge = isEn ? ind.badge : (isPlWithSpecific ? localizedInd.badge : c.badge);
    const finalTagline = isEn ? ind.tagline : (isPlWithSpecific ? localizedInd.tagline : c.tagline(localizedInd.name, city));
    const finalServices = isEn ? ind.services : (isPlWithSpecific ? localizedInd.services : c.svcs(localizedInd.name));

    return {
      ind: Object.assign({}, localizedInd, { badge: finalBadge, tagline: finalTagline, services: finalServices }),
      avail: c.avail,
      stat1: c.stat1, stat2: c.stat2, stat3: c.stat3,
      score: c.score, revs: c.revs, slots: c.slots, guar: c.guar,
      kinfolkH: c.kinfolk(biz, localizedInd.name),
      quoteH: c.quoteH(localizedInd.name),
      bentoH: c.bentoH(localizedInd.name, city),
      bullets: c.bullets,
      estK: c.estK,
      estH: c.estH(city),
      slogan: HERO_SLOGAN[code] || "Built to Last."
    };
  }

  function applyFullPack(code, meta) {
    const pack = getFullPageStrings(code, meta);
    if (!pack) return;
    if (pack.seo_title) document.title = pack.seo_title;
    if (pack.seo_desc) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute("content", pack.seo_desc);
    }
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (pack[k]) el.textContent = pack[k];
    });
    const domInp = document.getElementById("heroDomainInput");
    if (domInp && meta && meta.tld) domInp.placeholder = `firma${meta.tld}`;
  }

  function localizeIndustry(ind) {
    const code = global.EntiuI18n ? global.EntiuI18n.get() : "en";
    if (code === "pl" && PL_TRADES[ind.id]) {
      return Object.assign({}, ind, PL_TRADES[ind.id]);
    }
    if (code !== "en" && code !== "en-us" && code !== "en-au" && global.EntiuI18n) {
      const pack = getFullPageStrings(code, global.EntiuI18n.region());
      const key = "tr_" + ind.id;
      if (pack && pack[key]) {
        return Object.assign({}, ind, { name: pack[key], short: pack[key].split(" ")[0] });
      }
    }
    return ind;
  }

  function getReviews(city) {
    const code = global.EntiuI18n ? global.EntiuI18n.get() : "en";
    const list = REVIEWS_I18N[code];
    if (!list) return null;
    return list.map(r => [r[0], `${r[1]} · ${city}`]);
  }

  function getSlogan() {
    const code = global.EntiuI18n ? global.EntiuI18n.get() : "en";
    return HERO_SLOGAN[code] || "Built to Last.";
  }

  function getPack() {
    if (!global.EntiuI18n) return null;
    return getFullPageStrings(global.EntiuI18n.get(), global.EntiuI18n.region());
  }

  global.EntiuFullI18n = {
    apply: applyFullPack,
    getPack,
    localizeIndustry,
    getDemoCopy,
    getReviews,
    getSlogan
  };

  function boot() {
    if (!global.EntiuI18n) return;
    global.EntiuI18n.onChange((code, meta) => applyFullPack(code, meta));
    applyFullPack(global.EntiuI18n.get(), global.EntiuI18n.region());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window);
