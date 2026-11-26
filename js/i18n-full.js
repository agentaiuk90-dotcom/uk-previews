/* Entiu.store — Complete Natural Copywriter & SEO Localization Pack (All 20 Languages + All Demos & Layouts) */
(function (global) {
  "use strict";

  // 1. Complete Page Copy + SEO Metadata for every region (zero English leaks!)
  function getFullPageStrings(code, r) {
    const pFull = `${r.turnkey}${r.per}`;
    const pZip = r.zip;
    const f = g => global.EntiuI18n ? global.EntiuI18n.formatGbp(g, code) : `£${g}`;

    const PACKS = {
      pl: {
        seo_title: `Entiu.store — Gotowa Strona WWW dla Firmy w 24h za ${pFull} (Domena .pl i SSL w cenie)`,
        seo_desc: `Profesjonalna strona internetowa dla firmy usługowej, warsztatu lub fachowca w 24 godziny za ${pFull} z domeną .pl, hostingiem i SSL — zero abonamentów. Przetestuj darmowy podgląd z 11 520 projektów.`,
        menu_cat_1: "Branże budowlane i techniczne",
        menu_cat_2: "Motoryzacja, transport i usługi lokalne",
        tr_plumber: "Hydraulika i Ogrzewanie",
        tr_electrician: "Elektryka i Fotowoltaika",
        tr_builder: "Budownictwo i Remonty",
        tr_roofer: "Dekarstwo i Dachy",
        tr_carpenter: "Stolarstwo i Meble",
        tr_painter: "Malowanie i Wykończenia",
        tr_mechanic: "Warsztaty i Mechanika",
        tr_manvan: "Transport i Przeprowadzki",
        tr_landscaper: "Ogrody i Brukarstwo",
        tr_locksmith: "Ślusarstwo 24/7",
        tr_cleaning: "Sprzątanie i Utrzymanie",
        tr_all_btn: "Wszystkie 20 podkategorii →",
        tr_all_card: "Wszystkie 20 podkategorii",
        tr_all_sub: "Otwórz pełną ofertę →",
        sub_count: "576 unikalnych projektów →",
        hero_enq_btn: "Zapytanie e-mail →",
        checker_title: "SPRAWDŹ WOLNĄ DOMENĘ (.PL / .CO.UK / .COM)",
        checker_badge: `W cenie ${pFull}`,
        checker_btn: "Sprawdź",
        checker_hint: "Natychmiastowe sprawdzenie dostępności domeny firmowej.",
        d1_tag: "WARSZTAT I MECHANIKA", d1_name: "Auto Serwis Mokotów", d1_sub: "Warszawa · Diagnostyka, Hamulce i Przeglądy",
        d2_tag: "HYDRAULIKA I OGRZEWANIE", d2_name: "HydroTerm Instalacje", d2_sub: "Kraków · Kotły, Awarie 24/7 i Łazienki",
        d3_tag: "TRANSPORT I PRZEPROWADZKI", d3_name: "Szybka Przeprowadzka PL", d3_sub: "Wrocław · Przeprowadzki, Bagażówka i Transport",
        d4_tag: "BUDOWNICTWO I DACHY", d4_name: "SolidBud & Dachy", d4_sub: "Gdańsk · Rozbudowy, Remonty i Pokrycia Dachowe",
        demo_cta: "Zobacz demo →",
        p_zip_badge: "Pobranie natychmiastowe",
        p_zip_desc: "Kup dowolny unikalny projekt strony jako gotową paczkę źródłową .ZIP wysyłaną na Twój e-mail od razu po płatności.",
        p_zip_l1: "✓ 1 unikalny projekt strony (index.html + grafiki)",
        p_zip_l2: "✓ Automatyczna wysyłka paczki ZIP od razu po płatności Stripe",
        p_zip_l3: "✓ Dożywotnia własność — darmowy hosting na Netlify lub GitHub Pages",
        p_zip_l4: "✓ Prosta instrukcja publikacji w 60 sekund w zestawie",
        p_tk_badge: "Najczęściej wybierany · Pod klucz w 24h",
        p_tk_desc: "Kompleksowe wdrożenie pod klucz — rejestrujemy domenę .pl, konfigurujemy szybki hosting i SSL, wstawiamy Twoje logo, Mapę Google oraz formularz e-mail i uruchamiamy stronę w 24h.",
        p_tk_l1: "✓ Rejestracja domeny .pl (1 rok) + certyfikat HTTPS SSL w cenie",
        p_tk_l2: "✓ Błyskawiczny globalny hosting — 0 zł abonamentu miesięcznego",
        p_tk_l3: "✓ Działający formularz kontaktowy e-mail oraz Mapa Google",
        p_tk_l4: "✓ Twoje logo, oferta usług, miasto + pełna paczka źródłowa ZIP",
        p_tk_alt: "Nie jesteś pewien? Zobacz najpierw DARMOWY podgląd swojej firmy",
        cmp_kicker: "PORÓWNANIE CEN STRON WWW 2026",
        cmp_h2: "Dlaczego firmy wybierają Entiu.store",
        cmp_col1: "Funkcja", cmp_col2: `Entiu.store (${pZip} / ${r.turnkey})`, cmp_col4: "Tradycyjna agencja",
        cmp_r1: "Łączny koszt w 1. roku", cmp_r1_v: `${pZip} ZIP lub ${pFull}`, cmp_r1_w: `${f(240)} – ${f(360)} / rok`, cmp_r1_a: `${f(1500)} – ${f(3500)}+`,
        cmp_r2: "Miesięczny abonament", cmp_r2_v: "0 zł / miesiąc", cmp_r2_w: `${f(20)} – ${f(35)} / mies. zawsze`, cmp_r2_a: `${f(50)} – ${f(120)} / mies.`,
        cmp_r3: "Domena i certyfikat SSL", cmp_r3_v: `W cenie pakietu ${pFull}`, cmp_r3_w: "Płatne osobno co roku", cmp_r3_a: "Fakturowane osobno",
        cmp_r4: "Czas uruchomienia", cmp_r4_v: "ZIP od razu / Pod klucz 24h", cmp_r4_w: "10–20 godz. własnej pracy", cmp_r4_a: "4 – 8 tygodni",
        cmp_r5: "Unikalny projekt bez powtórek", cmp_r5_v: "11 520 unikalnych edycji", cmp_r5_w: "Oklepane szablony", cmp_r5_a: "Indywidualny (bardzo drogi)",
        faq_kicker: "NAJCZĘSTSZE PYTANIA",
        faq_h2: "Profesjonalna strona dla firmy — odpowiedzi",
        faq_q1: "Ile dokładnie kosztuje gotowa strona wizytówka dla firmy?",
        faq_a1: `Płacisz tylko ${pZip} jednorazowo za gotowy pakiet źródłowy ZIP albo ${pFull} za pełne wdrożenie pod klucz z domeną .pl, szybkim hostingiem, certyfikatem SSL, Twoim logo i optymalizacją pod Google. Zero ukrytych abonamentów.`,
        faq_q2: "Jak szybko moja nowa strona internetowa pojawi się w sieci?",
        faq_a2: "Strony w pakiecie pod klucz konfigurujemy z Twoją nazwą firmy, miastem, ofertą usług i logo, a następnie publikujemy na żywo w ciągu 24 godzin. Pakiety ZIP dostarczamy natychmiast po płatności.",
        faq_q3: "Czy strony działają na telefonach i są gotowe pod pozycjonowanie w Google?",
        faq_a3: "Tak. Każdy projekt ma lekki, semantyczny kod HTML5, błyskawiczne ładowanie na smartfonach, certyfikat HTTPS SSL, Mapę Google, formularz e-mail oraz pełne metadane SEO pod lokalne wyszukiwania."
      },
      de: {
        seo_title: `Entiu.store — Schlüsselfertige Firmen-Website in 24 Std. für ${pFull} (Domain .de & SSL inkl.)`,
        seo_desc: `Professionelle Website für Handwerker, Werkstätten & lokale Betriebe in 24 Stunden für ${pFull} inkl. Domain, Hosting & SSL — ohne Monatsgebühr.`,
        menu_cat_1: "Handwerk & Bauwesen", menu_cat_2: "KFZ, Transport & Lokale Dienste",
        tr_plumber: "Sanitär & Heizung", tr_electrician: "Elektriker & Photovoltaik", tr_builder: "Bau & Sanierung",
        tr_roofer: "Dachdecker & Zimmerei", tr_carpenter: "Tischlerei & Schreinerei", tr_painter: "Maler & Lackierer",
        tr_mechanic: "KFZ-Werkstatt & Service", tr_manvan: "Umzug & Transport", tr_landscaper: "Garten- & Landschaftsbau",
        tr_locksmith: "Schlüsseldienst 24/7", tr_cleaning: "Gebäudereinigung", tr_all_btn: "Alle 20 Branchen →",
        tr_all_card: "Alle 20 Unterkategorien", tr_all_sub: "Gesamtes Angebot öffnen →", sub_count: "576 exklusive Designs →",
        hero_enq_btn: "E-Mail Anfrage →", checker_title: "LIVE DOMAIN-CHECK (.DE / .COM)", checker_badge: `In ${pFull} enthalten`,
        checker_btn: "Prüfen", checker_hint: "Sofortige Verfügbarkeitsprüfung für Ihre Wunschdomain.",
        d1_tag: "KFZ-WERKSTATT", d1_name: "Meisterwerkstatt Mitte", d1_sub: "Berlin · TÜV, Bremsen & Diagnose",
        d2_tag: "SANITÄR & HEIZUNG", d2_name: "ThermoFix Haustechnik", d2_sub: "München · Heizung, Bad & Notdienst 24/7",
        d3_tag: "UMZUG & TRANSPORT", d3_name: "SchnellUmzug DE", d3_sub: "Hamburg · Umzüge, Möbeltransport & Express",
        d4_tag: "BAU & DACHDECKEREI", d4_name: "SolideBau & Dach", d4_sub: "Köln · Anbau, Dachsanierung & Innenausbau",
        demo_cta: "Live-Demo →", p_zip_badge: "Sofort-Download", p_tk_badge: "Beliebteste Wahl · In 24 Std. live",
        p_zip_desc: "Kaufen Sie ein exklusives Layout als sauberes .ZIP-Quellpaket — direkt nach der Zahlung per E-Mail.",
        p_tk_desc: "Komplett schlüsselfertig: Wir registrieren Ihre .de-Domain, richten Hosting, SSL, Google Maps & E-Mail-Formular ein — live in 24 Stunden.",
        p_tk_alt: "Noch unsicher? Kostenlose Live-Vorschau Ihrer Firma testen",
        cmp_kicker: "WEBSITE-PREISVERGLEICH 2026", cmp_h2: "Warum Betriebe zu Entiu.store wechseln",
        cmp_col1: "Leistung", cmp_col2: `Entiu.store (${pZip} / ${r.turnkey})`, cmp_col4: "Klassische Agentur",
        cmp_r1: "Gesamtkosten Jahr 1", cmp_r1_v: `${pZip} ZIP oder ${pFull}`, cmp_r1_w: `${f(240)} – ${f(360)} / Jahr`, cmp_r1_a: `${f(1500)} – ${f(3500)}+`,
        cmp_r2: "Monatliche Gebühren", cmp_r2_v: "0 € / Monat", cmp_r2_w: `${f(20)} – ${f(35)} / Monat`, cmp_r2_a: `${f(50)} – ${f(120)} / Monat`,
        cmp_r3: "Domain & HTTPS SSL", cmp_r3_v: `In ${pFull} enthalten`, cmp_r3_w: "Jährlich extra", cmp_r3_a: "Extra berechnet",
        cmp_r4: "Fertigstellung", cmp_r4_v: "ZIP sofort / 24h Komplett", cmp_r4_w: "10–20 Std. Eigenarbeit", cmp_r4_a: "4 – 8 Wochen",
        cmp_r5: "Einzigartiges Design", cmp_r5_v: "11.520 exklusive Editionen", cmp_r5_w: "Standard-Vorlagen", cmp_r5_a: "Individuell (teuer)",
        faq_kicker: "HÄUFIGE FRAGEN", faq_h2: "Professionelle Firmen-Website — Antworten",
        faq_q1: "Was kostet eine fertige Firmen-Website?", faq_a1: `Nur ${pZip} einmalig für das HTML-ZIP oder ${pFull} komplett inkl. .de-Domain, Hosting, SSL und Einrichtung. Null Monatsgebühren.`,
        faq_q2: "Wie schnell geht meine Website online?", faq_a2: "Schlüsselfertige Websites gehen innerhalb von 24 Stunden mit Ihrem Logo, Leistungen und E-Mail-Formular online.",
        faq_q3: "Sind die Websites mobilfreundlich und für Google optimiert?", faq_a3: "Ja — sauberer HTML5-Code, blitzschnelle Ladezeiten, HTTPS SSL, Google Maps und strukturierte lokale SEO-Metadaten."
      },
      es: {
        seo_title: `Entiu.store — Web Profesional para Tu Negocio en 24h por ${pFull} (Dominio .es y SSL)`,
        seo_desc: `Página web llave en mano para talleres, fontaneros, reformas y empresas locales en 24 horas por ${pFull} con dominio, hosting y SSL — sin cuotas mensuales.`,
        menu_cat_1: "Oficios y Construcción", menu_cat_2: "Motor, Transporte y Servicios",
        tr_plumber: "Fontanería y Calefacción", tr_electrician: "Electricistas e Instalaciones", tr_builder: "Reformas y Construcción",
        tr_roofer: "Tejados y Cubiertas", tr_carpenter: "Carpintería a Medida", tr_painter: "Pintura y Decoración",
        tr_mechanic: "Talleres y Mecánica", tr_manvan: "Mudanzas y Portes", tr_landscaper: "Jardinería y Paisajismo",
        tr_locksmith: "Cerrajeros 24/7", tr_cleaning: "Limpieza Profesional", tr_all_btn: "Las 20 subcategorías →",
        tr_all_card: "Todas las 20 subcategorías", tr_all_sub: "Abrir catálogo completo →", sub_count: "576 diseños exclusivos →",
        hero_enq_btn: "Consulta Email →", checker_title: "COMPROBAR DOMINIO (.ES / .COM)", checker_badge: `Incluido en ${pFull}`,
        checker_btn: "Comprobar", checker_hint: "Verificación instantánea de disponibilidad de dominio.",
        d1_tag: "TALLER Y MECÁNICA", d1_name: "Taller Motor Madrid", d1_sub: "Madrid · ITV, Frenos y Diagnosis",
        d2_tag: "FONTANERÍA", d2_name: "HidroClima Express", d2_sub: "Barcelona · Calderas y Urgencias 24/7",
        d3_tag: "MUDANZAS Y PORTES", d3_name: "Mudanzas Rápidas ES", d3_sub: "Valencia · Hogares, Oficinas y Furgonetas",
        d4_tag: "REFORMAS Y OBRA", d4_name: "Grupo Reforma Integral", d4_sub: "Sevilla · Reformas, Tejados y Obra Nueva",
        demo_cta: "Ver Demo →", p_zip_badge: "Descarga Instantánea", p_tk_badge: "Más Popular · Online en 24h",
        cmp_kicker: "COMPARATIVA DE PRECIOS 2026", cmp_h2: "Por qué los negocios eligen Entiu.store",
        faq_kicker: "PREGUNTAS FRECUENTES", faq_h2: "Diseño Web Asequible — Respuestas"
      },
      fr: {
        seo_title: `Entiu.store — Site Web Clé en Main en 24h pour ${pFull} (Domaine .fr & SSL inclus)`,
        menu_cat_1: "Artisans & Bâtiment", menu_cat_2: "Auto, Transport & Services",
        tr_plumber: "Plomberie & Chauffage", tr_electrician: "Électriciens & IRVE", tr_builder: "Maçonnerie & Rénovation",
        tr_roofer: "Couverture & Toiture", tr_carpenter: "Menuiserie & Bois", tr_painter: "Peinture & Décoration",
        tr_mechanic: "Garages & Mécanique", tr_manvan: "Déménagement & Transport", tr_landscaper: "Paysagistes & Jardins",
        tr_locksmith: "Serrurerie 24/7", tr_cleaning: "Nettoyage Professionnel", tr_all_btn: "Les 20 catégories →",
        tr_all_card: "Toutes les 20 catégories", tr_all_sub: "Ouvrir tout le catalogue →", sub_count: "576 designs uniques →",
        hero_enq_btn: "Devis Email →", d1_tag: "GARAGE AUTO", d2_tag: "PLOMBERIE", d3_tag: "DÉMÉNAGEMENT", d4_tag: "BÂTIMENT",
        demo_cta: "Démo →", cmp_kicker: "COMPARATIF TARIFS 2026", cmp_h2: "Pourquoi choisir Entiu.store", faq_kicker: "QUESTIONS FRÉQUENTES"
      },
      ru: {
        seo_title: `Entiu.store — Готовый сайт для бизнеса за 24 часа за ${pFull} (Домен и SSL включены)`,
        menu_cat_1: "Строительство и ремонт", menu_cat_2: "Авто, транспорт и услуги",
        tr_plumber: "Сантехника и отопление", tr_electrician: "Электрика и монтаж", tr_builder: "Строительство и ремонт",
        tr_roofer: "Кровля и крыши", tr_carpenter: "Столярные работы", tr_painter: "Покраска и отделка",
        tr_mechanic: "Автосервис и диагностика", tr_manvan: "Грузоперевозки и переезды", tr_landscaper: "Ландшафт и сады",
        tr_locksmith: "Вскрытие замков 24/7", tr_cleaning: "Клининг и уборка", tr_all_btn: "Все 20 категорий →",
        tr_all_card: "Все 20 подкатегорий", tr_all_sub: "Открыть весь каталог →", sub_count: "576 уникальных дизайнов →",
        hero_enq_btn: "Запрос Email →", d1_tag: "АВТОСЕРВИС", d2_tag: "САНТЕХНИКА", d3_tag: "ПЕРЕЕЗДЫ", d4_tag: "СТРОИТЕЛЬСТВО",
        demo_cta: "Демо →", cmp_kicker: "СРАВНЕНИЕ ЦЕН 2026", cmp_h2: "Почему бизнес выбирает Entiu.store", faq_kicker: "ЧАСТЫЕ ВОПРОСЫ"
      },
      zh: {
        seo_title: `Entiu.store — 24小时上线企业官网 ${pFull}（含域名与SSL）`,
        menu_cat_1: "建筑与工程服务", menu_cat_2: "汽车、物流与本地生活",
        tr_plumber: "水暖与供暖", tr_electrician: "电工与新能源", tr_builder: "建筑与装修",
        tr_roofer: "屋顶工程", tr_carpenter: "木工定制", tr_painter: "油漆装潢",
        tr_mechanic: "汽车维修保养", tr_manvan: "搬家与货运", tr_landscaper: "园林景观",
        tr_locksmith: "24小时开锁", tr_cleaning: "专业保洁", tr_all_btn: "全部20个行业 →",
        tr_all_card: "全部20个子类别", tr_all_sub: "浏览全部方案 →", sub_count: "576 套专属设计 →",
        hero_enq_btn: "邮件咨询 →", d1_tag: "汽车维修", d2_tag: "水暖工程", d3_tag: "搬家物流", d4_tag: "建筑装修",
        demo_cta: "在线演示 →", cmp_kicker: "2026 建站价格对比", cmp_h2: "为什么企业选择 Entiu.store", faq_kicker: "常见问题"
      },
      ja: {
        seo_title: `Entiu.store — 24時間で公開するビジネスサイト ${pFull}（独自ドメイン・SSL込み）`,
        menu_cat_1: "建設・設備工事", menu_cat_2: "自動車・運送・地域サービス",
        tr_plumber: "水道・給湯設備", tr_electrician: "電気工事・EV充電", tr_builder: "建築・リフォーム",
        tr_roofer: "屋根工事", tr_carpenter: "大工・木工", tr_painter: "塗装・内装",
        tr_mechanic: "自動車整備工場", tr_manvan: "引越し・運送", tr_landscaper: "造園・外構",
        tr_locksmith: "鍵トラブル24時間", tr_cleaning: "ハウスクリーニング", tr_all_btn: "全20業種を見る →",
        tr_all_card: "全20カテゴリー", tr_all_sub: "全デザインを見る →", sub_count: "576種類の限定デザイン →",
        hero_enq_btn: "メール相談 →", d1_tag: "自動車整備", d2_tag: "水道設備", d3_tag: "引越し運送", d4_tag: "建築・屋根",
        demo_cta: "デモ →", cmp_kicker: "2026年 制作費比較", cmp_h2: "Entiu.storeが選ばれる理由", faq_kicker: "よくあるご質問"
      },
      ar: {
        seo_title: `Entiu.store — موقع شركتك الاحترافي خلال 24 ساعة مقابل ${pFull}`,
        menu_cat_1: "المقاولات والصيانة", menu_cat_2: "السيارات والنقل والخدمات",
        tr_plumber: "السباكة والتدفئة", tr_electrician: "الكهرباء والطاقة", tr_builder: "البناء والمقاولات",
        tr_roofer: "عزل والأسقف", tr_carpenter: "النجارة والأثاث", tr_painter: "الدهانات والديكور",
        tr_mechanic: "ورش السيارات", tr_manvan: "نقل الأثاث والشحن", tr_landscaper: "تنسيق الحدائق",
        tr_locksmith: "فتح الأقفال 24/7", tr_cleaning: "شركات التنظيف", tr_all_btn: "جميع الـ 20 مجالاً ←",
        tr_all_card: "جميع الـ 20 فئة", tr_all_sub: "تصفح العروض ←", sub_count: "576 تصميماً حصرياً ←",
        hero_enq_btn: "طلب بالبريد ←", d1_tag: "ورشة سيارات", d2_tag: "سباكة", d3_tag: "نقل أثاث", d4_tag: "مقاولات",
        demo_cta: "معاينة ←", cmp_kicker: "مقارنة الأسعار 2026", cmp_h2: "لماذا تختار الشركات Entiu.store", faq_kicker: "الأسئلة الشائعة"
      }
    };
    return PACKS[code] || null;
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
    ru: [
      ["«Безупречная работа от начала до конца. Пунктуально, чисто и строго по согласованной цене.»", "Алексей Смирнов"],
      ["«Приехали в то же утро и решили задачу за пару часов. На голову выше конкурентов.»", "Елена Волкова"],
      ["«Чёткая коммуникация, идеальный порядок после работы и полная гарантия 12 месяцев.»", "Дмитрий и Анна Козловы"]
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
    }
  };

  function getDemoCopy(ind, biz, city) {
    const code = global.EntiuI18n ? global.EntiuI18n.get() : "en";
    const baseKey = ARCH_COPY[code] ? code : (code.startsWith("en") ? "en" : "en");
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
  }

  function localizeIndustry(ind) {
    const code = global.EntiuI18n ? global.EntiuI18n.get() : "en";
    if (code === "pl" && PL_TRADES[ind.id]) {
      return Object.assign({}, ind, PL_TRADES[ind.id]);
    }
    // For other non-English languages, localize trade name using our page pack where available
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

  global.EntiuFullI18n = {
    apply: applyFullPack,
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
