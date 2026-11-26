/* Entiu.store Global 20-Region Currency, Language & Live Demo Localization Engine (v3) */
(function (global) {
  "use strict";

  const STORAGE_KEY = "entiu_lang_v3";
  const listeners = [];

  const REGIONS = [
    { code: "en",    label: "UK / Global · English (£)",      dir: "ltr", zip: "£15",      turnkey: "£60",      per: "/yr",    city: "London",     tld: ".co.uk", rate: 1,    sym: "£",   pos: "pre" },
    { code: "en-us", label: "United States · English ($)",    dir: "ltr", zip: "$19",      turnkey: "$75",      per: "/yr",    city: "New York",   tld: ".com",   rate: 1.25, sym: "$",   pos: "pre" },
    { code: "pl",    label: "Polska · Polski (zł)",           dir: "ltr", zip: "75 zł",    turnkey: "299 zł",   per: "/rok",   city: "Warszawa",   tld: ".pl",    rate: 5,    sym: " zł", pos: "post" },
    { code: "de",    label: "Deutschland · Deutsch (€)",      dir: "ltr", zip: "18 €",     turnkey: "69 €",     per: "/Jahr",  city: "Berlin",     tld: ".de",    rate: 1.15, sym: " €",  pos: "post" },
    { code: "es",    label: "España / LATAM · Español (€)",   dir: "ltr", zip: "18 €",     turnkey: "69 €",     per: "/año",   city: "Madrid",     tld: ".es",    rate: 1.15, sym: " €",  pos: "post" },
    { code: "pt",    label: "Brasil / Portugal · PT (R$)",    dir: "ltr", zip: "R$ 109",   turnkey: "R$ 429",   per: "/ano",   city: "São Paulo",  tld: ".com.br",rate: 7.15, sym: "R$ ", pos: "pre" },
    { code: "fr",    label: "France · Français (€)",          dir: "ltr", zip: "18 €",     turnkey: "69 €",     per: "/an",    city: "Paris",      tld: ".fr",    rate: 1.15, sym: " €",  pos: "post" },
    { code: "it",    label: "Italia · Italiano (€)",          dir: "ltr", zip: "18 €",     turnkey: "69 €",     per: "/anno",  city: "Milano",     tld: ".it",    rate: 1.15, sym: " €",  pos: "post" },
    { code: "nl",    label: "Nederland · Nederlands (€)",     dir: "ltr", zip: "€18",      turnkey: "€69",      per: "/jaar",  city: "Amsterdam",  tld: ".nl",    rate: 1.15, sym: "€",   pos: "pre" },
    { code: "en-au", label: "Australia / Canada · EN (A$)",   dir: "ltr", zip: "A$29",     turnkey: "A$115",    per: "/yr",    city: "Sydney",     tld: ".com.au",rate: 1.92, sym: "A$",  pos: "pre" },
    { code: "ar",    label: "UAE / MENA · العربية (AED)",      dir: "rtl", zip: "70 AED",   turnkey: "279 AED",  per: "/سنة",   city: "دبي",        tld: ".ae",    rate: 4.65, sym: " AED",pos: "post" },
    { code: "ru",    label: "Россия / CIS · Русский (₽)",      dir: "ltr", zip: "1 890 ₽",  turnkey: "7 490 ₽",  per: "/год",   city: "Москва",     tld: ".ru",    rate: 125,  sym: " ₽",  pos: "post" },
    { code: "zh",    label: "中国 / Singapore · 中文 (¥)",      dir: "ltr", zip: "¥139",     turnkey: "¥549",     per: "/年",    city: "上海",        tld: ".cn",    rate: 9.15, sym: "¥",   pos: "pre" },
    { code: "ja",    label: "日本 (Japan) · 日本語 (¥)",        dir: "ltr", zip: "¥2,900",   turnkey: "¥11,500",  per: "/年",    city: "東京",        tld: ".jp",    rate: 192,  sym: "¥",   pos: "pre" },
    { code: "ko",    label: "대한민국 (Korea) · 한국어 (₩)",     dir: "ltr", zip: "₩26,000",  turnkey: "₩105,000", per: "/년",    city: "서울",        tld: ".kr",    rate: 1750, sym: "₩",   pos: "pre" },
    { code: "hi",    label: "India · हिन्दी (₹)",              dir: "ltr", zip: "₹1,599",   turnkey: "₹6,499",   per: "/वर्ष",   city: "मुंबई",       tld: ".in",    rate: 108,  sym: "₹",   pos: "pre" },
    { code: "sv",    label: "Sverige · Svenska (kr)",         dir: "ltr", zip: "199 kr",   turnkey: "799 kr",   per: "/år",    city: "Stockholm",  tld: ".se",    rate: 13.3, sym: " kr", pos: "post" },
    { code: "cs",    label: "Česko · Čeština (Kč)",           dir: "ltr", zip: "449 Kč",   turnkey: "1 790 Kč", per: "/rok",   city: "Praha",      tld: ".cz",    rate: 29.8, sym: " Kč", pos: "post" },
    { code: "tr",    label: "Türkiye · Türkçe (₺)",           dir: "ltr", zip: "650 ₺",    turnkey: "2 590 ₺",  per: "/yıl",   city: "İstanbul",   tld: ".com.tr",rate: 43,   sym: " ₺",  pos: "post" },
    { code: "ro",    label: "România · Română (lei)",         dir: "ltr", zip: "89 lei",   turnkey: "349 lei",  per: "/an",    city: "București",  tld: ".ro",    rate: 5.8,  sym: " lei",pos: "post" }
  ];

  // Demo UI translations for inside every generated website & preview
  const DEMO_UI = {
    en:      { home: "Home", services: "Services", reviews: "Reviews", contact: "Contact", emailBtn: "Email Enquiry", servicesH: "Services & Guide Pricing", trustedH: "Trusted across", quoteK: "Direct Email Quote", quoteH: "Request a quote from", quoteSub: "Send your enquiry directly by email — we reply promptly with clear written pricing.", formTitle: "Email Contact Form", namePh: "Your Name", emailPh: "Your Email Address", msgPh: "Tell us what you need...", sendBtn: "Send Email Enquiry →", sentMsg: "✓ Enquiry Sent — We Will Reply By Email Shortly!", areaLabel: "Service Area" },
    "en-us": { home: "Home", services: "Services", reviews: "Reviews", contact: "Contact", emailBtn: "Email Inquiry", servicesH: "Services & Guide Pricing", trustedH: "Trusted across", quoteK: "Direct Email Quote", quoteH: "Request a quote from", quoteSub: "Send your inquiry directly by email — we reply promptly with clear written pricing.", formTitle: "Email Contact Form", namePh: "Your Name", emailPh: "Your Email Address", msgPh: "Tell us what you need...", sendBtn: "Send Email Inquiry →", sentMsg: "✓ Inquiry Sent — We Will Reply By Email Shortly!", areaLabel: "Service Area" },
    "en-au": { home: "Home", services: "Services", reviews: "Reviews", contact: "Contact", emailBtn: "Email Enquiry", servicesH: "Services & Guide Pricing", trustedH: "Trusted across", quoteK: "Direct Email Quote", quoteH: "Request a quote from", quoteSub: "Send your enquiry directly by email — we reply promptly with clear written pricing.", formTitle: "Email Contact Form", namePh: "Your Name", emailPh: "Your Email Address", msgPh: "Tell us what you need...", sendBtn: "Send Email Enquiry →", sentMsg: "✓ Enquiry Sent — We Will Reply By Email Shortly!", areaLabel: "Service Area" },
    pl:      { home: "Start", services: "Usługi", reviews: "Opinie", contact: "Kontakt", emailBtn: "Zapytanie e-mail", servicesH: "Usługi i Cennik Orientacyjny", trustedH: "Zaufali nam w:", quoteK: "Szybka Wycena E-mail", quoteH: "Poproś o wycenę:", quoteSub: "Wyślij zapytanie mailowe — odpowiadamy szybko z jasną wyceną i wolnym terminem.", formTitle: "Formularz Kontaktowy E-mail", namePh: "Twoje imię / firma", emailPh: "Twój adres e-mail", msgPh: "Opisz krótko, czego potrzebujesz...", sendBtn: "Wyślij zapytanie e-mail →", sentMsg: "✓ Wysłano! Odpowiemy na Twój adres e-mail.", areaLabel: "Obszar działania" },
    de:      { home: "Start", services: "Leistungen", reviews: "Bewertungen", contact: "Kontakt", emailBtn: "E-Mail Anfrage", servicesH: "Leistungen & Richtpreise", trustedH: "Vertraut in", quoteK: "Direktes E-Mail Angebot", quoteH: "Angebot anfordern bei", quoteSub: "Senden Sie uns Ihre Anfrage per E-Mail — wir antworten schnell mit einem Festpreis.", formTitle: "E-Mail Kontaktformular", namePh: "Ihr Name", emailPh: "Ihre E-Mail-Adresse", msgPh: "Wie können wir helfen?", sendBtn: "E-Mail Anfrage senden →", sentMsg: "✓ Gesendet! Wir antworten in Kürze per E-Mail.", areaLabel: "Einsatzgebiet" },
    es:      { home: "Inicio", services: "Servicios", reviews: "Opiniones", contact: "Contacto", emailBtn: "Consulta Email", servicesH: "Servicios y Precios", trustedH: "Clientes en", quoteK: "Presupuesto por Email", quoteH: "Solicita presupuesto a", quoteSub: "Envíanos tu consulta por correo y responderemos rápido con presupuesto claro.", formTitle: "Formulario de Contacto", namePh: "Tu nombre", emailPh: "Tu correo electrónico", msgPh: "Cuéntanos qué necesitas...", sendBtn: "Enviar consulta →", sentMsg: "✓ ¡Enviado! Responderemos pronto por email.", areaLabel: "Zona de servicio" },
    pt:      { home: "Início", services: "Serviços", reviews: "Avaliações", contact: "Contato", emailBtn: "Orçamento Email", servicesH: "Serviços e Preços", trustedH: "Confiança em", quoteK: "Orçamento por Email", quoteH: "Peça um orçamento para", quoteSub: "Envie sua mensagem por e-mail — respondemos rapidamente com valores claros.", formTitle: "Formulário de Email", namePh: "Seu nome", emailPh: "Seu e-mail", msgPh: "Conte o que você precisa...", sendBtn: "Enviar orçamento →", sentMsg: "✓ Enviado! Responderemos em breve por e-mail.", areaLabel: "Área de atendimento" },
    fr:      { home: "Accueil", services: "Services", reviews: "Avis", contact: "Contact", emailBtn: "Devis Email", servicesH: "Services & Tarifs", trustedH: "Recommandé à", quoteK: "Devis Direct par Email", quoteH: "Demander un devis à", quoteSub: "Envoyez votre demande par email — réponse rapide avec tarif clair.", formTitle: "Formulaire Email", namePh: "Votre nom", emailPh: "Votre adresse email", msgPh: "Décrivez votre besoin...", sendBtn: "Envoyer la demande →", sentMsg: "✓ Envoyé ! Nous répondrons rapidement par email.", areaLabel: "Zone d'intervention" },
    it:      { home: "Home", services: "Servizi", reviews: "Recensioni", contact: "Contatti", emailBtn: "Preventivo Email", servicesH: "Servizi e Prezzi", trustedH: "Scelti a", quoteK: "Preventivo via Email", quoteH: "Richiedi preventivo a", quoteSub: "Inviaci una email — rispondiamo rapidamente con un preventivo chiaro.", formTitle: "Modulo Contatti Email", namePh: "Il tuo nome", emailPh: "La tua email", msgPh: "Descrivi di cosa hai bisogno...", sendBtn: "Invia richiesta →", sentMsg: "✓ Inviato! Ti risponderemo presto via email.", areaLabel: "Area servita" },
    nl:      { home: "Home", services: "Diensten", reviews: "Reviews", contact: "Contact", emailBtn: "E-mail Offerte", servicesH: "Diensten & Richtprijzen", trustedH: "Vertrouwd in", quoteK: "Directe E-mail Offerte", quoteH: "Vraag offerte aan bij", quoteSub: "Stuur uw aanvraag per e-mail — wij reageren snel met een heldere prijs.", formTitle: "E-mail Contactformulier", namePh: "Uw naam", emailPh: "Uw e-mailadres", msgPh: "Waar kunnen wij mee helpen?", sendBtn: "Verstuur aanvraag →", sentMsg: "✓ Verzonden! Wij reageren snel per e-mail.", areaLabel: "Werkgebied" },
    ar:      { home: "الرئيسية", services: "الخدمات", reviews: "التقييمات", contact: "تواصل", emailBtn: "طلب عرض سعر", servicesH: "الخدمات والأسعار التقديرية", trustedH: "موثوق في", quoteK: "عرض سعر عبر البريد", quoteH: "اطلب عرض سعر من", quoteSub: "أرسل استفسارك عبر البريد وسنرد عليك سريعاً بتفاصيل واضحة.", formTitle: "نموذج التواصل بالبريد", namePh: "الاسم", emailPh: "البريد الإلكتروني", msgPh: "اكتب تفاصيل طلبك...", sendBtn: "إرسال الطلب ←", sentMsg: "✓ تم الإرسال! سنرد عليك عبر البريد قريباً.", areaLabel: "نطاق الخدمة", emailLabel: "البريد الإلكتروني" },
    ru:      { home: "Главная", services: "Услуги", reviews: "Отзывы", contact: "Контакты", emailBtn: "Запрос по Email", servicesH: "Услуги и Цены", trustedH: "Нам доверяют:", quoteK: "Расчёт по Email", quoteH: "Запросить расчёт у", quoteSub: "Отправьте заявку на почту — мы быстро ответим с точным расчётом.", formTitle: "Форма обратной связи", namePh: "Ваше имя", emailPh: "Ваш Email", msgPh: "Опишите задачу...", sendBtn: "Отправить заявку →", sentMsg: "✓ Отправлено! Мы ответим вам по почте.", areaLabel: "Регион работы", emailLabel: "Эл. почта" },
    zh:      { home: "首页", services: "服务项目", reviews: "客户评价", contact: "联系我们", emailBtn: "邮件报价", servicesH: "核心服务与参考价格", trustedH: "值得信赖的服务：", quoteK: "邮件快速报价", quoteH: "向我们获取报价：", quoteSub: "发送邮件咨询，我们将尽快回复清晰的书面报价。", formTitle: "邮件联系表单", namePh: "您的姓名", emailPh: "您的邮箱", msgPh: "请描述您的需求...", sendBtn: "发送邮件咨询 →", sentMsg: "✓ 已发送！我们将尽快回复您的邮件。", areaLabel: "服务区域", emailLabel: "电子邮箱" },
    ja:      { home: "ホーム", services: "サービス", reviews: "お客様の声", contact: "お問い合わせ", emailBtn: "メール見積", servicesH: "サービス＆料金目安", trustedH: "選ばれる実績：", quoteK: "メール無料見積", quoteH: "お見積り依頼：", quoteSub: "メールでお問い合わせください。明確なお見積りを迅速にご返信します。", formTitle: "メールお問い合わせ", namePh: "お名前", emailPh: "メールアドレス", msgPh: "ご依頼内容をご記入ください...", sendBtn: "メールを送信 →", sentMsg: "✓ 送信完了！メールにて折り返しご連絡します。", areaLabel: "対応エリア", emailLabel: "メール" },
    ko:      { home: "홈", services: "서비스", reviews: "고객 후기", contact: "문의", emailBtn: "이메일 견적", servicesH: "서비스 및 안내 가격", trustedH: "신뢰받는 서비스:", quoteK: "이메일 빠른 견적", quoteH: "견적 요청:", quoteSub: "이메일로 문의해 주시면 투명한 견적으로 빠르게 답변드립니다.", formTitle: "이메일 문의 폼", namePh: "성함", emailPh: "이메일 주소", msgPh: "필요한 내용을 적어주세요...", sendBtn: "이메일 문의 보내기 →", sentMsg: "✓ 전송 완료! 이메일로 곧 답변드리겠습니다.", areaLabel: "서비스 지역", emailLabel: "이메일" },
    hi:      { home: "होम", services: "सेवाएँ", reviews: "समीक्षाएँ", contact: "संपर्क", emailBtn: "ईमेल कोट", servicesH: "सेवाएँ और अनुमानित मूल्य", trustedH: "विश्वसनीय सेवा:", quoteK: "ईमेल कोटेशन", quoteH: "कोटेशन प्राप्त करें:", quoteSub: "हमें ईमेल भेजें — हम स्पष्ट कीमत के साथ तुरंत उत्तर देंगे।", formTitle: "ईमेल संपर्क फ़ॉर्म", namePh: "आपका नाम", emailPh: "आपका ईमेल", msgPh: "अपनी आवश्यकता लिखें...", sendBtn: "ईमेल भेजें →", sentMsg: "✓ भेज दिया गया! हम जल्द ईमेल पर उत्तर देंगे।", areaLabel: "सेवा क्षेत्र", emailLabel: "ईमेल" },
    sv:      { home: "Hem", services: "Tjänster", reviews: "Omdömen", contact: "Kontakt", emailBtn: "E-postoffert", servicesH: "Tjänster & Riktpriser", trustedH: "Betrodda i", quoteK: "Direkt E-postoffert", quoteH: "Begär offert från", quoteSub: "Skicka din förfrågan via e-post — vi svarar snabbt med tydligt pris.", formTitle: "Kontaktformulär", namePh: "Ditt namn", emailPh: "Din e-postadress", msgPh: "Beskriv vad du behöver...", sendBtn: "Skicka förfrågan →", sentMsg: "✓ Skickat! Vi svarar via e-post inom kort.", areaLabel: "Område" },
    cs:      { home: "Domů", services: "Služby", reviews: "Recenze", contact: "Kontakt", emailBtn: "E-mail poptávka", servicesH: "Služby a Orientační Ceny", trustedH: "Ověřeno v", quoteK: "Poptávka e-mailem", quoteH: "Získat nabídku od", quoteSub: "Pošlete poptávku e-mailem — odpovíme rychle s jasnou cenou.", formTitle: "E-mailový formulář", namePh: "Vaše jméno", emailPh: "Váš e-mail", msgPh: "Popište, co potřebujete...", sendBtn: "Odeslat poptávku →", sentMsg: "✓ Odesláno! Brzy odpovíme e-mailem.", areaLabel: "Oblast působení" },
    tr:      { home: "Ana Sayfa", services: "Hizmetler", reviews: "Yorumlar", contact: "İletişim", emailBtn: "E-posta Teklifi", servicesH: "Hizmetler ve Fiyatlar", trustedH: "Güvenilen hizmet:", quoteK: "Hızlı E-posta Teklifi", quoteH: "Teklif isteyin:", quoteSub: "E-posta ile yazın, net fiyatla hemen dönüş yapalım.", formTitle: "E-posta İletişim Formu", namePh: "Adınız", emailPh: "E-posta Adresiniz", msgPh: "İhtiyacınızı yazın...", sendBtn: "Teklif Gönder →", sentMsg: "✓ Gönderildi! En kısa sürede e-posta ile döneceğiz.", areaLabel: "Hizmet Bölgesi" },
    ro:      { home: "Acasă", services: "Servicii", reviews: "Recenzii", contact: "Contact", emailBtn: "Cerere Email", servicesH: "Servicii și Prețuri", trustedH: "Recomandat în", quoteK: "Ofertă prin Email", quoteH: "Solicită ofertă de la", quoteSub: "Trimite cererea pe email — răspundem rapid cu preț transparent.", formTitle: "Formular de Contact", namePh: "Numele tău", emailPh: "Adresa de email", msgPh: "Spune-ne de ce ai nevoie...", sendBtn: "Trimite cererea →", sentMsg: "✓ Trimis! Vom răspunde rapid pe email.", areaLabel: "Zonă servicii" }
  };

  function getRegion(code) {
    return REGIONS.find(r => r.code === code) || REGIONS[0];
  }

  function formatGbpAmount(gbp, code) {
    const r = getRegion(code || currentCode);
    if (gbp === 15) return r.zip;
    if (gbp === 60) return r.turnkey;
    const val = Math.round(gbp * r.rate);
    const num = val.toLocaleString("en-US").replace(/,/g, r.code === "pl" || r.code === "ru" || r.code === "cs" || r.code === "sv" ? " " : ",");
    return r.pos === "pre" ? `${r.sym}${num}` : `${num}${r.sym}`;
  }

  function buildStrings(code) {
    const r = getRegion(code);
    const pFull = `${r.turnkey}${r.per}`;
    const pZip = r.zip;
    const base = {
      en: {
        nav_home: "Home", nav_offer: "Offer", nav_how: "How it works", nav_pricing: `Pricing (${pZip} / ${r.turnkey})`,
        nav_enquiry: "Email Enquiry", nav_email_us: "Email Us", nav_cart: "Cart",
        nav_search: "Search 11,520 designs in Offer — e.g. Plumber, Garage, Dark...",
        hero_badge: `Done-For-You Websites · Live in 24 Hours · 0/month`,
        hero_h1_top: "Your business website,", hero_h1_em: `live tomorrow for ${pFull}.`,
        hero_sub: `Built for garages, plumbers, builders, removals & local businesses. Includes your ${r.tld} domain, fast global hosting, HTTPS SSL, Google Maps and email enquiry form — zero monthly agency fees.`,
        cta_order: `Order Turnkey Website — ${pFull}`, cta_preview: "Preview Your Business Free",
        trust_1: "Secure Stripe Checkout", trust_2: "Live in 24 Hours", trust_3: `${r.tld} + SSL Included`, trust_4: "Email Form & Google Map",
        demos_kicker: "LIVE INDUSTRY EXAMPLES", demos_h2: "Click any industry to test a finished live website", demos_btn: "Open Full Offer (11,520) →",
        sub_kicker: "BROWSE OFFER BY SUBCATEGORY", sub_h2: "20 business subcategories — 11,520 exclusive designs", sub_all_btn: "View All 11,520 in Offer →",
        how_kicker: "WHAT HAPPENS AFTER YOU ORDER", how_h2: "Zero stress. Live in 24 hours — guaranteed.",
        how_sub: "No agency calls, no DIY builders, no monthly retainers. Your 3-step launch process:",
        step1_t: "Pay Securely via Stripe", step1_d: `Order Turnkey (${pFull}) or Layout ZIP (${pZip}) with Card, Apple Pay or Google Pay. Zero monthly fees.`,
        step2_t: "Send Business Info & Logo", step2_d: "Fill our 2-minute brief at checkout (name, city, services & photos) or reply directly to your welcome email.",
        step3_t: `Live Under Your ${r.tld} in 24h`, step3_d: `We register your ${r.tld} domain, enable HTTPS SSL, wire Google Maps & email enquiry form, and send your live link + ZIP.`,
        price_zip_main: pZip, price_zip_sub: "one-time", price_zip_btn: `Buy Layout ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} all-in`, price_tk_btn: `Order Turnkey ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Full ${r.turnkey}`, card_preview: "Preview ↗"
      },
      pl: {
        nav_home: "Start", nav_offer: "Oferta", nav_how: "Jak to działa", nav_pricing: `Cennik (${pZip} / ${r.turnkey})`,
        nav_enquiry: "Zapytanie e-mail", nav_email_us: "Napisz do nas", nav_cart: "Koszyk",
        nav_search: "Szukaj w 11 520 projektach — np. Warsztat, Hydraulik, Dark...",
        hero_badge: "Gotowa Strona WWW pod Klucz · Na żywo w 24h · 0 zł/mies.",
        hero_h1_top: "Gotowa strona dla Twojej firmy,", hero_h1_em: `na żywo jutro za ${pFull}.`,
        hero_sub: `Dla warsztatów, firm budowlanych, transportu, hydraulików i usług lokalnych. W cenie domena ${r.tld}, szybki hosting, certyfikat SSL, Mapa Google i formularz e-mail — zero opłat miesięcznych.`,
        cta_order: `Zamów Gotową Stronę — ${pFull}`, cta_preview: "Zobacz Darmowy Podgląd Firmy",
        trust_1: "Bezpieczna płatność Stripe", trust_2: "Gotowe w 24 godziny", trust_3: `Domena ${r.tld} + SSL w cenie`, trust_4: "Formularz e-mail i Mapa Google",
        demos_kicker: "GOTOWE DEMA BRANŻOWE NA ŻYWO", demos_h2: "Kliknij branżę i przetestuj gotową działającą stronę", demos_btn: "Otwórz Pełną Ofertę (11 520) →",
        sub_kicker: "PRZEGLĄDAJ OFERTĘ WEDŁUG PODKATEGORII", sub_h2: "20 podkategorii branżowych — 11 520 unikalnych projektów", sub_all_btn: "Zobacz wszystkie 11 520 w Ofercie →",
        how_kicker: "CO DZIEJE SIĘ PO ZAMÓWIENIU", how_h2: "Zero stresu. Strona gotowa w 24 godziny.",
        how_sub: "Bez spotkań z agencjami i bez abonamentów. Oto 3 kroki do Twojej gotowej strony:",
        step1_t: "Bezpieczna płatność Stripe", step1_d: `Opłacasz pakiet pod klucz (${pFull}) lub gotowy ZIP (${pZip}) kartą, BLIK, Apple Pay lub Google Pay.`,
        step2_t: "Wysyłasz dane firmy i logo (2 min)", step2_d: "Wpisujesz nazwę firmy, miasto, usługi i kontakt w krótkim formularzu lub odpisujesz na maila.",
        step3_t: `Strona na żywo pod ${r.tld} w 24h`, step3_d: `Rejestrujemy domenę ${r.tld}, podpinamy SSL, Mapę Google i formularz e-mail oraz wysyłamy link + ZIP.`,
        price_zip_main: pZip, price_zip_sub: "jednorazowo", price_zip_btn: `Kup gotowy ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} wszystko w cenie`, price_tk_btn: `Zamów Stronę ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Pełna ${r.turnkey}`, card_preview: "Podgląd ↗"
      },
      de: {
        nav_home: "Start", nav_offer: "Angebot", nav_how: "Ablauf", nav_pricing: `Preise (${pZip} / ${r.turnkey})`,
        nav_enquiry: "E-Mail Anfrage", nav_email_us: "Kontakt", nav_cart: "Warenkorb",
        nav_search: "11.520 Designs durchsuchen — Werkstatt, Handwerker...",
        hero_badge: "Schlüsselfertige Websites · Live in 24 Std. · 0 €/Monat",
        hero_h1_top: "Ihre Firmen-Website,", hero_h1_em: `morgen live für ${pFull}.`,
        hero_sub: `Für Werkstätten, Handwerker, Bauunternehmen & lokale Betriebe. Inkl. ${r.tld}-Domain, schnellem Hosting, HTTPS SSL, Google Maps & E-Mail-Formular — ohne monatliche Gebühren.`,
        cta_order: `Schlüsselfertig bestellen — ${pFull}`, cta_preview: "Kostenlose Live-Vorschau",
        trust_1: "Sicherer Stripe Checkout", trust_2: "Live in 24 Stunden", trust_3: `${r.tld} + SSL inklusive`, trust_4: "E-Mail Formular & Google Maps",
        demos_kicker: "LIVE BRANCHEN-DEMOS", demos_h2: "Wählen Sie Ihre Branche für eine fertige Live-Demo", demos_btn: "Gesamtes Angebot (11.520) →",
        sub_kicker: "ANGEBOT NACH UNTERKATEGORIE", sub_h2: "20 Branchen — 11.520 exklusive Designs", sub_all_btn: "Alle 11.520 im Angebot →",
        how_kicker: "ABLAUF NACH DER BESTELLUNG", how_h2: "Null Stress. In 24 Stunden online — garantiert.",
        how_sub: "Keine Agentur-Termine, keine monatlichen Kosten. Ihr Weg in 3 Schritten:",
        step1_t: "Sicher via Stripe bezahlen", step1_d: `Bestellen Sie das Komplettpaket (${pFull}) oder ZIP (${pZip}) per Karte, Apple Pay oder Google Pay.`,
        step2_t: "Firmendaten & Logo senden", step2_d: "Tragen Sie Firmenname, Stadt, Leistungen & Kontakt ein oder antworten Sie per E-Mail.",
        step3_t: `In 24 Std. unter ${r.tld} live`, step3_d: `Wir registrieren Ihre ${r.tld}-Domain, richten SSL, Google Maps & Formular ein und senden Link + ZIP.`,
        price_zip_main: pZip, price_zip_sub: "einmalig", price_zip_btn: `Layout-ZIP kaufen — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} komplett`, price_tk_btn: `Komplettpaket ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Komplett ${r.turnkey}`, card_preview: "Vorschau ↗"
      },
      es: {
        nav_home: "Inicio", nav_offer: "Oferta", nav_how: "Cómo funciona", nav_pricing: `Precios (${pZip} / ${r.turnkey})`,
        nav_enquiry: "Consulta Email", nav_email_us: "Escríbenos", nav_cart: "Carrito",
        nav_search: "Buscar en 11.520 diseños — Taller, Fontanero...",
        hero_badge: "Webs Llave en Mano · Online en 24h · 0 €/mes",
        hero_h1_top: "La web de tu negocio,", hero_h1_em: `online mañana por ${pFull}.`,
        hero_sub: `Para talleres, fontaneros, reformas, mudanzas y negocios locales. Incluye dominio ${r.tld}, hosting rápido, HTTPS SSL, Google Maps y formulario de email — sin cuotas mensuales.`,
        cta_order: `Pedir Web Completa — ${pFull}`, cta_preview: "Ver Vista Previa Gratis",
        trust_1: "Pago Seguro Stripe", trust_2: "Online en 24 Horas", trust_3: `${r.tld} + SSL Incluidos`, trust_4: "Formulario Email y Mapa",
        demos_kicker: "DEMOS EN VIVO POR SECTOR", demos_h2: "Haz clic en un sector para probar una web terminada", demos_btn: "Ver Toda la Oferta (11.520) →",
        sub_kicker: "EXPLORA LA OFERTA POR SUBCATEGORÍA", sub_h2: "20 subcategorías — 11.520 diseños exclusivos", sub_all_btn: "Ver los 11.520 en Oferta →",
        how_kicker: "QUÉ PASA DESPUÉS DEL PEDIDO", how_h2: "Cero estrés. Online en 24 horas — garantizado.",
        how_sub: "Sin agencias caras ni cuotas mensuales. 3 pasos:",
        step1_t: "Pago seguro con Stripe", step1_d: `Elige el paquete completo (${pFull}) o el ZIP (${pZip}) con tarjeta, Apple Pay o Google Pay.`,
        step2_t: "Envía tus datos y logo", step2_d: "Rellena el breve formulario con tus servicios y contacto o responde a nuestro correo.",
        step3_t: `Online bajo tu ${r.tld} en 24h`, step3_d: `Registramos tu dominio ${r.tld}, activamos SSL, Google Maps y formulario y te enviamos enlace + ZIP.`,
        price_zip_main: pZip, price_zip_sub: "pago único", price_zip_btn: `Comprar ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} todo incluido`, price_tk_btn: `Pedir Web ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Web ${r.turnkey}`, card_preview: "Ver Demo ↗"
      },
      pt: {
        nav_home: "Início", nav_offer: "Oferta", nav_how: "Como funciona", nav_pricing: `Preços (${pZip} / ${r.turnkey})`,
        nav_enquiry: "Contato Email", nav_email_us: "Enviar Email", nav_cart: "Carrinho",
        nav_search: "Pesquisar 11.520 designs — Oficina, Obras...",
        hero_badge: "Sites Prontos Chave na Mão · Online em 24h · R$ 0/mês",
        hero_h1_top: "O site da sua empresa,", hero_h1_em: `no ar amanhã por ${pFull}.`,
        hero_sub: `Para oficinas, encanadores, construtores e negócios locais. Inclui domínio ${r.tld}, hospedagem rápida, HTTPS SSL, Google Maps e formulário de email — sem mensalidades.`,
        cta_order: `Pedir Site Completo — ${pFull}`, cta_preview: "Ver Prévia Grátis Agora",
        trust_1: "Pagamento Seguro Stripe", trust_2: "Online em 24 Horas", trust_3: `${r.tld} + SSL Incluídos`, trust_4: "Formulário Email e Mapa",
        demos_kicker: "DEMOS AO VIVO POR SETOR", demos_h2: "Clique em um setor para testar um site pronto", demos_btn: "Ver Toda a Oferta (11.520) →",
        sub_kicker: "EXPLORAR POR SUBCATEGORIA", sub_h2: "20 subcategorias — 11.520 designs exclusivos", sub_all_btn: "Ver todos os 11.520 →",
        how_kicker: "APÓS O PEDIDO", how_h2: "Zero estresse. No ar em 24 horas.",
        how_sub: "Sem agências caras e sem mensalidades. 3 passos:",
        step1_t: "Pague com segurança via Stripe", step1_d: `Escolha o pacote completo (${pFull}) ou ZIP (${pZip}) com cartão, Apple Pay ou Google Pay.`,
        step2_t: "Envie dados e logotipo", step2_d: "Preencha nosso formulário rápido ou responda ao nosso email.",
        step3_t: `No ar com ${r.tld} em 24h`, step3_d: `Registramos seu domínio ${r.tld}, ativamos SSL, Google Maps e formulário e enviamos link + ZIP.`,
        price_zip_main: pZip, price_zip_sub: "pagamento único", price_zip_btn: `Comprar ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} tudo incluído`, price_tk_btn: `Pedir Site ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Site ${r.turnkey}`, card_preview: "Ver Demo ↗"
      },
      fr: {
        nav_home: "Accueil", nav_offer: "Offre", nav_how: "Fonctionnement", nav_pricing: `Tarifs (${pZip} / ${r.turnkey})`,
        nav_enquiry: "Contact Email", nav_email_us: "Nous écrire", nav_cart: "Panier",
        nav_search: "Rechercher parmi 11 520 designs...",
        hero_badge: "Sites Web Clé en Main · En ligne en 24h · 0 €/mois",
        hero_h1_top: "Votre site professionnel,", hero_h1_em: `en ligne demain pour ${pFull}.`,
        hero_sub: `Domaine ${r.tld}, hébergement rapide, HTTPS SSL, Google Maps et formulaire email inclus — sans abonnement mensuel.`,
        cta_order: `Commander Clé en Main — ${pFull}`, cta_preview: "Aperçu Gratuit",
        trust_1: "Paiement Sécurisé Stripe", trust_2: "En ligne en 24h", trust_3: `${r.tld} + SSL Inclus`, trust_4: "Formulaire Email & Carte",
        demos_kicker: "DÉMOS EN DIRECT", demos_h2: "Cliquez sur un métier pour tester un site complet", demos_btn: "Voir Toute l'Offre (11 520) →",
        sub_kicker: "PAR SOUS-CATÉGORIE", sub_h2: "20 secteurs — 11 520 designs exclusifs", sub_all_btn: "Voir les 11 520 →",
        how_kicker: "APRÈS VOTRE COMMANDE", how_h2: "Zéro stress. En ligne en 24 heures.",
        how_sub: "Sans forfait mensuel. 3 étapes :",
        step1_t: "Paiement sécurisé Stripe", step1_d: `Pack complet (${pFull}) ou ZIP (${pZip}) par carte ou Apple Pay.`,
        step2_t: "Envoyez vos infos & logo", step2_d: "Remplissez le brief de 2 minutes ou répondez à notre email.",
        step3_t: `En ligne sous ${r.tld} en 24h`, step3_d: `Domaine ${r.tld}, SSL, Google Maps et formulaire configurés en 24h.`,
        price_zip_main: pZip, price_zip_sub: "paiement unique", price_zip_btn: `Acheter ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} tout inclus`, price_tk_btn: `Commander ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Pack ${r.turnkey}`, card_preview: "Aperçu ↗"
      },
      it: {
        nav_home: "Home", nav_offer: "Offerta", nav_how: "Come funziona", nav_pricing: `Prezzi (${pZip} / ${r.turnkey})`,
        nav_enquiry: "Richiesta Email", nav_email_us: "Scrivici", nav_cart: "Carrello",
        nav_search: "Cerca tra 11.520 design...",
        hero_badge: "Siti Web Chiavi in Mano · Online in 24h · 0 €/mese",
        hero_h1_top: "Il sito per la tua azienda,", hero_h1_em: `online domani a ${pFull}.`,
        hero_sub: `Include dominio ${r.tld}, hosting veloce, HTTPS SSL, Google Maps e modulo email — zero canoni mensili.`,
        cta_order: `Ordina Sito Completo — ${pFull}`, cta_preview: "Anteprima Gratuita",
        trust_1: "Pagamento Sicuro Stripe", trust_2: "Online in 24 Ore", trust_3: `${r.tld} + SSL Inclusi`, trust_4: "Modulo Email e Mappa",
        demos_kicker: "DEMO LIVE PER SETTORE", demos_h2: "Clicca un settore per provare un sito pronto", demos_btn: "Apri Offerta (11.520) →",
        sub_kicker: "PER SOTTOCATEGORIA", sub_h2: "20 categorie — 11.520 design esclusivi", sub_all_btn: "Vedi tutti gli 11.520 →",
        how_kicker: "DOPO L'ORDINE", how_h2: "Zero stress. Online in 24 ore.",
        how_sub: "Nessun abbonamento mensile. 3 passaggi:",
        step1_t: "Paga con Stripe", step1_d: `Pacchetto completo (${pFull}) o ZIP (${pZip}) con carta o Apple Pay.`,
        step2_t: "Invia dati e logo", step2_d: "Compila il breve modulo o rispondi via email.",
        step3_t: `Online su ${r.tld} in 24h`, step3_d: `Dominio ${r.tld}, SSL, Google Maps e modulo email attivi in 24h.`,
        price_zip_main: pZip, price_zip_sub: "una tantum", price_zip_btn: `Acquista ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} tutto incluso`, price_tk_btn: `Ordina ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Completo ${r.turnkey}`, card_preview: "Demo ↗"
      },
      nl: {
        nav_home: "Home", nav_offer: "Aanbod", nav_how: "Hoe het werkt", nav_pricing: `Prijzen (${pZip} / ${r.turnkey})`,
        nav_enquiry: "E-mail aanvraag", nav_email_us: "Mail ons", nav_cart: "Winkelwagen",
        nav_search: "Zoek in 11.520 ontwerpen...",
        hero_badge: "Kant-en-Klare Websites · Live in 24 uur · €0/maand",
        hero_h1_top: "Uw zakelijke website,", hero_h1_em: `morgen live voor ${pFull}.`,
        hero_sub: `Inclusief ${r.tld}-domein, snelle hosting, HTTPS SSL, Google Maps en e-mailformulier — zonder maandkosten.`,
        cta_order: `Bestel Complete Website — ${pFull}`, cta_preview: "Gratis Live Voorbeeld",
        trust_1: "Veilig via Stripe", trust_2: "Live in 24 uur", trust_3: `${r.tld} + SSL inbegrepen`, trust_4: "E-mailformulier & Kaart",
        demos_kicker: "LIVE VOORBEELDEN", demos_h2: "Klik op een branche en test een complete website", demos_btn: "Volledig Aanbod (11.520) →",
        sub_kicker: "OP SUBCATEGORIE", sub_h2: "20 branches — 11.520 unieke ontwerpen", sub_all_btn: "Alle 11.520 bekijken →",
        how_kicker: "NA UW BESTELLING", how_h2: "Geen gedoe. Binnen 24 uur online.",
        how_sub: "Geen maandabonnementen. In 3 stappen live:",
        step1_t: "Veilig betalen via Stripe", step1_d: `Totaalpakket (${pFull}) of ZIP (${pZip}) met kaart of Apple Pay.`,
        step2_t: "Stuur gegevens & logo", step2_d: "Vul het korte formulier in of antwoord per e-mail.",
        step3_t: `Live op ${r.tld} in 24u`, step3_d: `Domein ${r.tld}, SSL, kaart en formulier klaar binnen 24 uur.`,
        price_zip_main: pZip, price_zip_sub: "eenmalig", price_zip_btn: `Koop ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} all-in`, price_tk_btn: `Bestel ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Compleet ${r.turnkey}`, card_preview: "Voorbeeld ↗"
      },
      ar: {
        nav_home: "الرئيسية", nav_offer: "العروض", nav_how: "كيف نعمل", nav_pricing: `الأسعار (${pZip} / ${r.turnkey})`,
        nav_enquiry: "استفسار بالبريد", nav_email_us: "راسلنا", nav_cart: "السلة",
        nav_search: "ابحث في 11,520 تصميماً جاهزاً...",
        hero_badge: "مواقع جاهزة خلال 24 ساعة · بدون رسوم شهرية",
        hero_h1_top: "موقع شركتك الاحترافي،", hero_h1_em: `جاهز غداً مقابل ${pFull}.`,
        hero_sub: `يشمل النطاق ${r.tld}، استضافة سريعة، شهادة SSL، خرائط جوجل ونموذج مراسلة بالبريد — بدون اشتراكات شهرية.`,
        cta_order: `اطلب موقعك الجاهز — ${pFull}`, cta_preview: "معاينة مجانية لشركتك",
        trust_1: "دفع آمن عبر Stripe", trust_2: "جاهز خلال 24 ساعة", trust_3: `${r.tld} + SSL مشمول`, trust_4: "نموذج بريد وخريطة",
        demos_kicker: "نماذج حية حسب المجال", demos_h2: "اختر مجالك لتجربة موقع جاهز مباشرة", demos_btn: "تصفح العروض (11,520) ←",
        sub_kicker: "تصفح حسب الفئة", sub_h2: "20 مجالاً — 11,520 تصميماً حصرياً", sub_all_btn: "عرض كل التصاميم ←",
        how_kicker: "خطوات العمل بعد الطلب", how_h2: "بدون تعقيد. موقعك جاهز خلال 24 ساعة.",
        how_sub: "بدون اشتراكات شهرية. 3 خطوات بسيطة:",
        step1_t: "دفع آمن عبر Stripe", step1_d: `الباقة الكاملة (${pFull}) أو ملف ZIP (${pZip}) بالبطاقة أو Apple Pay.`,
        step2_t: "أرسل بياناتك والشعار", step2_d: "املأ النموذج السريع أو رد على البريد.",
        step3_t: `مباشر على ${r.tld} خلال 24 ساعة`, step3_d: "نفعّل النطاق وSSL والخريطة ونموذج التواصل ونرسل الرابط.",
        price_zip_main: pZip, price_zip_sub: "مرة واحدة", price_zip_btn: `شراء ZIP — ${pZip} ←`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} شامل الكل`, price_tk_btn: `اطلب ${r.tld} — ${pFull} ←`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ كامل ${r.turnkey}`, card_preview: "معاينة ↗"
      },
      ru: {
        nav_home: "Главная", nav_offer: "Каталог", nav_how: "Как работает", nav_pricing: `Цены (${pZip} / ${r.turnkey})`,
        nav_enquiry: "Запрос Email", nav_email_us: "Написать", nav_cart: "Корзина",
        nav_search: "Поиск среди 11 520 дизайнов...",
        hero_badge: "Готовые сайты под ключ · Запуск за 24ч · 0 ₽/мес",
        hero_h1_top: "Готовый сайт для бизнеса,", hero_h1_em: `онлайн завтра за ${pFull}.`,
        hero_sub: `Включает домен ${r.tld}, быстрый хостинг, HTTPS SSL, карту и форму обратной связи — без ежемесячной платы.`,
        cta_order: `Заказать под ключ — ${pFull}`, cta_preview: "Бесплатное превью сайта",
        trust_1: "Безопасная оплата Stripe", trust_2: "Запуск за 24 часа", trust_3: `${r.tld} + SSL включены`, trust_4: "Форма Email и карта",
        demos_kicker: "ЖИВЫЕ ПРИМЕРЫ", demos_h2: "Выберите отрасль и протестируйте готовый сайт", demos_btn: "Весь каталог (11 520) →",
        sub_kicker: "ПОДКАТЕГОРИИ", sub_h2: "20 ниш — 11 520 уникальных дизайнов", sub_all_btn: "Смотреть все 11 520 →",
        how_kicker: "ЧТО ПОСЛЕ ЗАКАЗА", how_h2: "Без хлопот. Сайт готов за 24 часа.",
        how_sub: "Без дорогих агентств и подписок. 3 шага:",
        step1_t: "Оплата через Stripe", step1_d: `Пакет под ключ (${pFull}) или ZIP (${pZip}) картой или Apple Pay.`,
        step2_t: "Отправьте данные и лого", step2_d: "Заполните короткую анкету или ответьте на письмо.",
        step3_t: `Запуск на ${r.tld} за 24ч`, step3_d: `Подключим домен ${r.tld}, SSL, карту и форму и пришлём ссылку + ZIP.`,
        price_zip_main: pZip, price_zip_sub: "разово", price_zip_btn: `Купить ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} всё включено`, price_tk_btn: `Заказать ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Под ключ ${r.turnkey}`, card_preview: "Превью ↗"
      },
      zh: {
        nav_home: "首页", nav_offer: "全部方案", nav_how: "流程", nav_pricing: `价格 (${pZip} / ${r.turnkey})`,
        nav_enquiry: "邮件咨询", nav_email_us: "联系我们", nav_cart: "购物车",
        nav_search: "搜索 11,520 套专属网站设计...",
        hero_badge: "一站式企业官网 · 24小时上线 · 零月费",
        hero_h1_top: "您的专属企业官网，", hero_h1_em: `明天上线仅需 ${pFull}。`,
        hero_sub: `包含 ${r.tld} 域名、高速全球托管、HTTPS SSL、地图与邮件咨询表单——无月度代理费。`,
        cta_order: `订购全包官网 — ${pFull}`, cta_preview: "免费生成实时预览",
        trust_1: "Stripe 安全支付", trust_2: "24小时极速上线", trust_3: `含 ${r.tld} 与 SSL`, trust_4: "邮件表单与地图",
        demos_kicker: "行业在线演示", demos_h2: "点击任意行业体验成品网站", demos_btn: "浏览全部 11,520 套 →",
        sub_kicker: "按行业分类", sub_h2: "20 大行业 — 11,520 套独家设计", sub_all_btn: "查看全部 →",
        how_kicker: "下单后流程", how_h2: "省心省力，24小时上线。",
        how_sub: "只需简单 3 步：",
        step1_t: "Stripe 安全付款", step1_d: `全包年付 (${pFull}) 或源码 ZIP (${pZip})，支持银行卡与 Apple Pay。`,
        step2_t: "提交资料与 Logo", step2_d: "填写 2 分钟简介表或回复欢迎邮件。",
        step3_t: `24小时上线 ${r.tld}`, step3_d: "配置域名、SSL、地图与表单并交付网站链接与 ZIP。",
        price_zip_main: pZip, price_zip_sub: "一次性", price_zip_btn: `购买 ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} 全包`, price_tk_btn: `订购 ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ 全包 ${r.turnkey}`, card_preview: "预览 ↗"
      },
      ja: {
        nav_home: "ホーム", nav_offer: "デザイン一覧", nav_how: "流れ", nav_pricing: `料金 (${pZip} / ${r.turnkey})`,
        nav_enquiry: "メール相談", nav_email_us: "お問い合わせ", nav_cart: "カート",
        nav_search: "11,520種類のデザインから検索...",
        hero_badge: "プロ品質のサイト · 24時間公開 · 月額¥0",
        hero_h1_top: "あなたのビジネスサイトを、", hero_h1_em: `明日公開・${pFull}。`,
        hero_sub: `${r.tld}ドメイン、高速ホスティング、HTTPS SSL、Googleマップ、メールフォーム込みで月額費用ゼロ。`,
        cta_order: `おまかせ制作 — ${pFull}`, cta_preview: "無料でライブプレビュー",
        trust_1: "安全なStripe決済", trust_2: "24時間以内に公開", trust_3: `${r.tld}+SSL込み`, trust_4: "メールフォーム＆地図",
        demos_kicker: "業種別ライブデモ", demos_h2: "業種をクリックして完成サイトを体験", demos_btn: "全11,520デザイン →",
        sub_kicker: "カテゴリー別", sub_h2: "20業種 — 11,520種類の限定デザイン", sub_all_btn: "すべて見る →",
        how_kicker: "ご注文後の流れ", how_h2: "手間いらず。24時間で公開。",
        how_sub: "たった3ステップ：",
        step1_t: "Stripeで安全決済", step1_d: `おまかせプラン(${pFull})またはHTML ZIP(${pZip})を選択。`,
        step2_t: "会社情報とロゴを送信", step2_d: "2分のフォーム入力またはメール返信でお知らせください。",
        step3_t: `24時間以内に${r.tld}公開`, step3_d: "ドメイン・SSL・地図・メールフォームを設定しURLとZIPをお届け。",
        price_zip_main: pZip, price_zip_sub: "買い切り", price_zip_btn: `ZIP購入 — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} 全部込み`, price_tk_btn: `おまかせ ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ 全部込み ${r.turnkey}`, card_preview: "プレビュー ↗"
      },
      ko: {
        nav_home: "홈", nav_offer: "전체 상품", nav_how: "진행 방식", nav_pricing: `가격 (${pZip} / ${r.turnkey})`,
        nav_enquiry: "이메일 문의", nav_email_us: "문의하기", nav_cart: "장바구니",
        nav_search: "11,520개 디자인 검색...",
        hero_badge: "완성형 웹사이트 · 24시간 내 오픈 · 월 ₩0",
        hero_h1_top: "당신의 비즈니스 웹사이트,", hero_h1_em: `내일 오픈 — ${pFull}.`,
        hero_sub: `${r.tld} 도메인, 초고속 호스팅, HTTPS SSL, 지도 및 이메일 폼 포함 — 월 유지비 없음.`,
        cta_order: `완성형 주문 — ${pFull}`, cta_preview: "무료 실시간 미리보기",
        trust_1: "안전한 Stripe 결제", trust_2: "24시간 내 오픈", trust_3: `${r.tld} + SSL 포함`, trust_4: "이메일 폼 & 지도",
        demos_kicker: "업종별 라이브 데모", demos_h2: "업종을 선택해 완성된 웹사이트를 체험해 보세요", demos_btn: "전체 11,520개 →",
        sub_kicker: "카테고리별 보기", sub_h2: "20개 업종 — 11,520개 독점 디자인", sub_all_btn: "전체 보기 →",
        how_kicker: "주문 후 절차", how_h2: "간단하게 24시간 내 오픈.",
        how_sub: "3단계로 끝납니다:",
        step1_t: "Stripe 안전 결제", step1_d: `올인원 (${pFull}) 또는 ZIP (${pZip})을 카드/Apple Pay로 결제.`,
        step2_t: "업체 정보 & 로고 전송", step2_d: "2분 브리프를 작성하거나 이메일에 회신해 주세요.",
        step3_t: `24시간 내 ${r.tld} 오픈`, step3_d: "도메인, SSL, 지도 및 폼을 설정해 링크와 ZIP을 드립니다.",
        price_zip_main: pZip, price_zip_sub: "1회 결제", price_zip_btn: `ZIP 구매 — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} 올인원`, price_tk_btn: `올인원 ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ 올인원 ${r.turnkey}`, card_preview: "미리보기 ↗"
      },
      hi: {
        nav_home: "होम", nav_offer: "ऑफ़र", nav_how: "प्रक्रिया", nav_pricing: `कीमत (${pZip} / ${r.turnkey})`,
        nav_enquiry: "ईमेल पूछताछ", nav_email_us: "ईमेल करें", nav_cart: "कार्ट",
        nav_search: "11,520 डिज़ाइन खोजें...",
        hero_badge: "रेडी-टू-लॉन्च वेबसाइट · 24 घंटे में लाइव · ₹0/माह",
        hero_h1_top: "आपके व्यवसाय की वेबसाइट,", hero_h1_em: `कल लाइव सिर्फ ${pFull} में।`,
        hero_sub: `${r.tld} डोमेन, तेज़ होस्टिंग, HTTPS SSL, गूगल मैप और ईमेल फ़ॉर्म शामिल — कोई मासिक शुल्क नहीं।`,
        cta_order: `वेबसाइट ऑर्डर — ${pFull}`, cta_preview: "मुफ़्त लाइव प्रीव्यू",
        trust_1: "सुरक्षित Stripe भुगतान", trust_2: "24 घंटे में लाइव", trust_3: `${r.tld} + SSL शामिल`, trust_4: "ईमेल फ़ॉर्म और मैप",
        demos_kicker: "लाइव इंडस्ट्री डेमो", demos_h2: "तैयार वेबसाइट देखने के लिए श्रेणी चुनें", demos_btn: "सभी 11,520 डिज़ाइन →",
        sub_kicker: "श्रेणी के अनुसार", sub_h2: "20 श्रेणियाँ — 11,520 अनोखे डिज़ाइन", sub_all_btn: "सभी देखें →",
        how_kicker: "ऑर्डर के बाद", how_h2: "24 घंटे में लाइव।",
        how_sub: "3 आसान चरण:",
        step1_t: "Stripe से भुगतान", step1_d: `ऑल-इन पैकेज (${pFull}) या ZIP (${pZip}) चुनें।`,
        step2_t: "जानकारी और लोगो भेजें", step2_d: "2 मिनट का फ़ॉर्म भरें या ईमेल का जवाब दें।",
        step3_t: `24 घंटे में ${r.tld} लाइव`, step3_d: "डोमेन, SSL, मैप और ईमेल फ़ॉर्म सेट करके लिंक और ZIP भेजते हैं।",
        price_zip_main: pZip, price_zip_sub: "एकमुश्त", price_zip_btn: `ZIP खरीदें — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} सब शामिल`, price_tk_btn: `ऑर्डर ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ फुल ${r.turnkey}`, card_preview: "प्रीव्यू ↗"
      },
      sv: {
        nav_home: "Hem", nav_offer: "Utbud", nav_how: "Så funkar det", nav_pricing: `Priser (${pZip} / ${r.turnkey})`,
        nav_enquiry: "E-postförfrågan", nav_email_us: "Mejla oss", nav_cart: "Varukorg",
        nav_search: "Sök bland 11 520 designer...",
        hero_badge: "Nyckelfärdiga Hemsidor · Live inom 24h · 0 kr/mån",
        hero_h1_top: "Din företagshemsida,", hero_h1_em: `live imorgon för ${pFull}.`,
        hero_sub: `Inkluderar ${r.tld}-domän, snabb hosting, HTTPS SSL, Google Maps och kontaktformulär — inga månadsavgifter.`,
        cta_order: `Beställ Nyckelfärdig — ${pFull}`, cta_preview: "Gratis Live-Förhandsvisning",
        trust_1: "Säker Stripe-betalning", trust_2: "Live inom 24h", trust_3: `${r.tld} + SSL ingår`, trust_4: "E-postformulär & Karta",
        demos_kicker: "LIVE BRANSCHEXEMPEL", demos_h2: "Klicka på en bransch för att testa en färdig hemsida", demos_btn: "Hela Utbudet (11 520) →",
        sub_kicker: "BLÄDDRA EFTER KATEGORI", sub_h2: "20 branscher — 11 520 unika designer", sub_all_btn: "Visa alla →",
        how_kicker: "EFTER BESTÄLLNING", how_h2: "Noll stress. Live inom 24 timmar.",
        how_sub: "3 enkla steg:",
        step1_t: "Betala med Stripe", step1_d: `Komplett paket (${pFull}) eller ZIP (${pZip}) med kort eller Apple Pay.`,
        step2_t: "Skicka info & logga", step2_d: "Fyll i formuläret eller svara på välkomstmejlet.",
        step3_t: `Live på ${r.tld} inom 24h`, step3_d: "Vi fixar domän, SSL, karta och kontaktformulär och skickar länk + ZIP.",
        price_zip_main: pZip, price_zip_sub: "engångsbelopp", price_zip_btn: `Köp ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} allt ingår`, price_tk_btn: `Beställ ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Komplett ${r.turnkey}`, card_preview: "Demo ↗"
      },
      cs: {
        nav_home: "Domů", nav_offer: "Nabídka", nav_how: "Jak to funguje", nav_pricing: `Ceník (${pZip} / ${r.turnkey})`,
        nav_enquiry: "E-mail poptávka", nav_email_us: "Napište nám", nav_cart: "Košík",
        nav_search: "Hledat v 11 520 designech...",
        hero_badge: "Hotové Weby na Klíč · Online za 24h · 0 Kč/měsíc",
        hero_h1_top: "Firemní web na klíč,", hero_h1_em: `online zítra za ${pFull}.`,
        hero_sub: `V ceně doména ${r.tld}, rychlý hosting, HTTPS SSL, Google Mapy a e-mailový formulář — bez měsíčních poplatků.`,
        cta_order: `Objednat Web na Klíč — ${pFull}`, cta_preview: "Ukázka Firmy Zdarma",
        trust_1: "Bezpečná platba Stripe", trust_2: "Online do 24h", trust_3: `${r.tld} + SSL v ceně`, trust_4: "E-mail formulář a Mapa",
        demos_kicker: "ŽIVÉ UKÁZKY", demos_h2: "Klikněte na obor a vyzkoušejte hotový web", demos_btn: "Celá Nabídka (11 520) →",
        sub_kicker: "PODLE KATEGORIE", sub_h2: "20 oborů — 11 520 unikátních designů", sub_all_btn: "Zobrazit vše →",
        how_kicker: "PO OBJEDNÁNÍ", how_h2: "Bez stresu. Online do 24 hodin.",
        how_sub: "3 jednoduché kroky:",
        step1_t: "Platba přes Stripe", step1_d: `Balíček na klíč (${pFull}) nebo ZIP (${pZip}) kartou či Apple Pay.`,
        step2_t: "Pošlete údaje a logo", step2_d: "Vyplňte krátký formulář nebo odpovězte na e-mail.",
        step3_t: `Online na ${r.tld} do 24h`, step3_d: "Zaregistrujeme doménu, SSL, mapu a formulář a pošleme odkaz + ZIP.",
        price_zip_main: pZip, price_zip_sub: "jednorázově", price_zip_btn: `Koupit ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} vše v ceně`, price_tk_btn: `Objednat ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Komplet ${r.turnkey}`, card_preview: "Ukázka ↗"
      },
      tr: {
        nav_home: "Ana Sayfa", nav_offer: "Teklif", nav_how: "Nasıl Çalışır", nav_pricing: `Fiyatlar (${pZip} / ${r.turnkey})`,
        nav_enquiry: "E-posta Talebi", nav_email_us: "Bize Yazın", nav_cart: "Sepet",
        nav_search: "11.520 tasarımda ara...",
        hero_badge: "Anahtar Teslim Web Siteleri · 24 Saatte Yayında · 0 ₺/ay",
        hero_h1_top: "İşletmenizin web sitesi,", hero_h1_em: `yarın yayında — ${pFull}.`,
        hero_sub: `${r.tld} alan adı, hızlı hosting, HTTPS SSL, Google Haritalar ve e-posta formu dahil — aylık ücret yok.`,
        cta_order: `Anahtar Teslim — ${pFull}`, cta_preview: "Ücretsiz Canlı Önizleme",
        trust_1: "Güvenli Stripe Ödeme", trust_2: "24 Saatte Yayında", trust_3: `${r.tld} + SSL Dahil`, trust_4: "E-posta Formu & Harita",
        demos_kicker: "CANLI SEKTÖR ÖRNEKLERİ", demos_h2: "Hazır web sitesini test etmek için sektör seçin", demos_btn: "Tüm Teklifler (11.520) →",
        sub_kicker: "ALT KATEGORİLER", sub_h2: "20 sektör — 11.520 benzersiz tasarım", sub_all_btn: "Tümünü Gör →",
        how_kicker: "SİPARİŞTEN SONRA", how_h2: "Sıfır stres. 24 saatte yayında.",
        how_sub: "3 basit adım:",
        step1_t: "Stripe ile Ödeme", step1_d: `Tam paket (${pFull}) veya ZIP (${pZip}) kart / Apple Pay ile.`,
        step2_t: "Bilgiler & Logo", step2_d: "Kısa formu doldurun veya e-postamıza yanıt verin.",
        step3_t: `24 Saatte ${r.tld} Yayında`, step3_d: "Alan adı, SSL, harita ve formu kurup canlı bağlantıyı gönderiyoruz.",
        price_zip_main: pZip, price_zip_sub: "tek seferlik", price_zip_btn: `ZIP Al — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} her şey dahil`, price_tk_btn: `Sipariş ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Tam ${r.turnkey}`, card_preview: "Önizleme ↗"
      },
      ro: {
        nav_home: "Acasă", nav_offer: "Ofertă", nav_how: "Cum funcționează", nav_pricing: `Prețuri (${pZip} / ${r.turnkey})`,
        nav_enquiry: "Cerere Email", nav_email_us: "Scrie-ne", nav_cart: "Coș",
        nav_search: "Caută în 11.520 designuri...",
        hero_badge: "Site-uri la Cheie · Online în 24h · 0 lei/lună",
        hero_h1_top: "Site-ul firmei tale,", hero_h1_em: `online mâine cu ${pFull}.`,
        hero_sub: `Include domeniu ${r.tld}, găzduire rapidă, HTTPS SSL, Google Maps și formular email — fără abonamente lunare.`,
        cta_order: `Comandă Complet — ${pFull}`, cta_preview: "Previzualizare Gratuită",
        trust_1: "Plată Sigură Stripe", trust_2: "Online în 24h", trust_3: `${r.tld} + SSL Incluse`, trust_4: "Formular Email & Hartă",
        demos_kicker: "DEMO-URI LIVE", demos_h2: "Alege un domeniu pentru a testa un site gata făcut", demos_btn: "Toată Oferta (11.520) →",
        sub_kicker: "PE SUBCATEGORII", sub_h2: "20 subcategorii — 11.520 designuri unice", sub_all_btn: "Vezi toate →",
        how_kicker: "DUPĂ COMANDĂ", how_h2: "Fără stres. Online în 24 de ore.",
        how_sub: "3 pași simpli:",
        step1_t: "Plată prin Stripe", step1_d: `Pachet complet (${pFull}) sau ZIP (${pZip}) cu card sau Apple Pay.`,
        step2_t: "Trimiți datele & logo", step2_d: "Completezi formularul rapid sau răspunzi pe email.",
        step3_t: `Online pe ${r.tld} în 24h`, step3_d: "Configurăm domeniul, SSL, harta și formularul și trimitem link + ZIP.",
        price_zip_main: pZip, price_zip_sub: "plată unică", price_zip_btn: `Cumpără ZIP — ${pZip} →`,
        price_tk_main: r.turnkey, price_tk_sub: `${r.per} tot inclus`, price_tk_btn: `Comandă ${r.tld} — ${pFull} →`,
        card_zip_btn: `+ ZIP ${pZip}`, card_tk_btn: `+ Complet ${r.turnkey}`, card_preview: "Demo ↗"
      }
    };
    return base[code] || base.en;
  }

  let currentCode = "en";

  function detectLang() {
    const urlLang = (new URLSearchParams(window.location.search).get("lang") || "").toLowerCase();
    if (urlLang && REGIONS.some(r => r.code === urlLang)) return urlLang;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && REGIONS.some(r => r.code === saved)) return saved;
    const full = (navigator.language || "en").toLowerCase();
    if (REGIONS.some(r => r.code === full)) return full;
    if (full.startsWith("en-us")) return "en-us";
    if (full.startsWith("en-au") || full.startsWith("en-ca")) return "en-au";
    const base = full.slice(0, 2);
    return REGIONS.some(r => r.code === base) ? base : "en";
  }

  function applyLang(lang) {
    const meta = getRegion(lang);
    currentCode = meta.code;
    localStorage.setItem(STORAGE_KEY, currentCode);
    document.documentElement.lang = currentCode;
    document.documentElement.dir = meta.dir || "ltr";
    const t = buildStrings(currentCode);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) el.setAttribute("placeholder", t[key]);
    });
    const sel = document.getElementById("entiuRegionSelect");
    if (sel) sel.value = currentCode;

    listeners.forEach(fn => { try { fn(currentCode, meta, t); } catch (_) {} });
  }

  function mountSwitcher() {
    const slot = document.getElementById("langSwitcherSlot");
    if (!slot) return;
    slot.innerHTML =
      `<div class="relative inline-flex items-center">` +
      `<svg class="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-zinc-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/></svg>` +
      `<select id="entiuRegionSelect" aria-label="Select Region, Language and Currency" onchange="EntiuI18n.set(this.value)" class="appearance-none rounded-full border border-zinc-200 bg-zinc-50 pl-7 pr-6 py-1.5 text-[11px] font-bold text-zinc-800 hover:border-zinc-400 focus:border-zinc-900 focus:outline-none cursor-pointer">` +
      REGIONS.map(r => `<option value="${r.code}">${r.label}</option>`).join("") +
      `</select>` +
      `<svg class="pointer-events-none absolute right-2 h-3 w-3 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>` +
      `</div>`;
  }

  global.EntiuI18n = {
    REGIONS,
    set: applyLang,
    get: () => currentCode,
    region: () => getRegion(currentCode),
    strings: () => buildStrings(currentCode),
    demo: () => DEMO_UI[currentCode] || DEMO_UI.en,
    formatGbp: formatGbpAmount,
    onChange: fn => { listeners.push(fn); },
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
