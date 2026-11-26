/* Entiu Store — Intelligent 24/7 UK Sales Concierge & Interactive Chat Widget */
(function () {
  "use strict";

  const STRIPE_ZIP = "https://buy.stripe.com/dRm8wO7fV9KGeicfuQ6oo00";
  const STRIPE_TURNKEY = "https://buy.stripe.com/6oU14m43J1ea2zubeA6oo01";

  const TRADE_KEYWORDS = [
    { id: "plumber", label: "Plumbing & Heating", words: ["plumb", "boiler", "heating", "gas", "leak", "hydraulik"] },
    { id: "electrician", label: "Electrical", words: ["electr", "spark", "rewire", "ev charger", "elektryk"] },
    { id: "mechanic", label: "Mobile Mechanic & Auto", words: ["mechanic", "auto", "car", "garage", "mot", "tyre", "mechanik", "warsztat"] },
    { id: "roofer", label: "Roofing", words: ["roof", "slate", "chimney", "gutter", "dekarz", "dach"] },
    { id: "landscaper", label: "Landscaping & Gardens", words: ["landscap", "garden", "patio", "lawn", "driveway", "ogrod"] },
    { id: "builder", label: "Builder & Extensions", words: ["build", "extension", "loft", "renovat", "construct", "budow"] },
    { id: "carpenter", label: "Carpentry & Joinery", words: ["carpent", "joiner", "wardrobe", "wood", "kitchen", "stolarz"] },
    { id: "painter", label: "Painter & Decorator", words: ["paint", "decorat", "wallpaper", "spray", "malarz"] },
    { id: "solar", label: "Solar & Renewables", words: ["solar", "battery", "renewable", "panel", "fotowolt"] },
    { id: "hvac", label: "Air Con & Heat Pumps", words: ["hvac", "air con", "heat pump", "cooling", "klimatyz"] },
    { id: "locksmith", label: "24/7 Locksmith", words: ["locksmith", "lock", "key", "security", "slusarz"] },
    { id: "cleaning", label: "Cleaning Services", words: ["clean", "tenancy", "housekeep", "sprzat"] },
    { id: "manvan", label: "Man & Van / Removals", words: ["man and van", "van", "removal", "moving", "courier", "przeprowadz"] },
    { id: "handyman", label: "Handyman & Maintenance", words: ["handyman", "maintenance", "odd job", "repair", "zlota raczka"] },
    { id: "treesurgeon", label: "Tree Surgeon", words: ["tree", "arborist", "hedge", "stump"] },
    { id: "pestcontrol", label: "Pest Control", words: ["pest", "rat", "wasp", "rodent"] },
    { id: "carpet", label: "Carpet & Upholstery", words: ["carpet", "sofa", "rug", "upholstery"] },
    { id: "scaffolding", label: "Scaffolding", words: ["scaffold", "access", "rusztow"] },
    { id: "garagedoors", label: "Garage Doors & Gates", words: ["garage door", "gate", "roller door"] },
    { id: "fencing", label: "Fencing & Paving", words: ["fenc", "paving", "cedar", "ogrodzen"] }
  ];

  function findTradeMatch(text) {
    const t = text.toLowerCase();
    for (const item of TRADE_KEYWORDS) {
      if (item.words.some(w => t.includes(w))) return item;
    }
    return null;
  }

  function extractDomain(text) {
    const m = text.toLowerCase().match(/\b([a-z0-9-]{2,40}\.(?:co\.uk|uk|com|store|org\.uk))\b/);
    return m ? m[1] : null;
  }

  function isPolish(text) {
    return /[ąćęłńóśźż]|cześć|hej|ile kosztuje|strona|domena|pomoc|dzień dobry|witam/i.test(text);
  }

  function getSampleLayoutsForTrade(tradeId) {
    const E = window.UKLayoutEngine;
    if (!E) return [];
    const matches = [];
    for (let k = 0; k < E.TOTAL_LAYOUTS && matches.length < 3; k++) {
      const idx = (k * 251 + 17) % E.TOTAL_LAYOUTS;
      const l = E.getLayoutByIndex(idx);
      if (l.industry.id === tradeId) matches.push(l);
    }
    return matches;
  }

  async function checkRdapLive(domain) {
    let d = domain.toLowerCase();
    if (!d.endsWith(".co.uk")) d = d.replace(/\.[^.]+$/, "") + ".co.uk";
    try {
      const r = await fetch(`https://rdap.nominet.uk/uk/domain/${encodeURIComponent(d)}`);
      if (r.status === 404) return { ok: true, domain: d, available: true };
      if (r.status === 200) return { ok: true, domain: d, available: false };
      return { ok: false, domain: d };
    } catch {
      return { ok: false, domain: d };
    }
  }

  function injectChat() {
    if (document.getElementById("entiuChatRoot")) return;
    const root = document.createElement("div");
    root.id = "entiuChatRoot";
    root.innerHTML = `
      <style>
        #entiuChatBtn { position:fixed; bottom:22px; right:22px; z-index:85; display:flex; align-items:center; gap:9px; background:#111113; color:#fff; border:1px solid rgba(255,255,255,0.14); border-radius:999px; padding:12px 18px; font-family:'Inter',sans-serif; font-size:12px; font-weight:700; box-shadow:0 16px 40px rgba(0,0,0,0.26); cursor:pointer; transition:transform .18s ease, background .18s ease; }
        #entiuChatBtn:hover { transform:translateY(-2px); background:#27272a; }
        #entiuChatBox { position:fixed; bottom:80px; right:22px; z-index:85; width:370px; max-width:calc(100vw - 28px); background:#fff; border:1px solid rgba(17,17,19,0.12); border-radius:20px; box-shadow:0 28px 70px rgba(0,0,0,0.24); overflow:hidden; display:none; flex-direction:column; font-family:'Inter',sans-serif; }
        #entiuChatBox.open { display:flex; }
        .ec-msg { max-width:90%; padding:10px 13px; border-radius:14px; font-size:12px; line-height:1.52; white-space:pre-line; }
        .ec-bot { background:#f4f4f5; color:#18181b; align-self:flex-start; border-bottom-left-radius:4px; }
        .ec-usr { background:#111113; color:#fff; align-self:flex-end; border-bottom-right-radius:4px; }
        .ec-chip { border:1px solid #e4e4e7; background:#fff; color:#27272a; border-radius:999px; padding:5px 10px; font-size:11px; font-weight:600; cursor:pointer; }
        .ec-chip:hover { border-color:#111113; color:#111113; }
        .ec-act { display:inline-flex; align-items:center; gap:5px; margin-top:7px; margin-right:6px; padding:6px 11px; border-radius:999px; font-size:11px; font-weight:700; text-decoration:none; cursor:pointer; border:none; }
        .ec-act-dark { background:#111113; color:#fff; }
        .ec-act-light { background:#fff; color:#111113; border:1px solid #d4d4d8; }
      </style>

      <button id="entiuChatBtn" aria-label="Open live chat">
        <span style="width:8px;height:8px;border-radius:99px;background:#10b981;display:inline-block;"></span>
        <span data-i18n="chat_btn">Live Chat · Concierge</span>
      </button>

      <div id="entiuChatBox" role="dialog" aria-label="Entiu Store Smart Concierge">
        <div style="background:#111113;color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:13px;font-weight:800;">Entiu Store AI Concierge</div>
            <div style="font-size:11px;color:#a1a1aa;display:flex;align-items:center;gap:6px;"><span style="width:6px;height:6px;border-radius:99px;background:#10b981;"></span> Instant answers · Live .co.uk checker</div>
          </div>
          <button id="entiuChatClose" style="background:none;border:none;color:#a1a1aa;font-size:15px;cursor:pointer;">✕</button>
        </div>

        <div id="entiuChatMessages" style="height:295px;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:9px;background:#fafafa;">
          <div class="ec-msg ec-bot">Hi! 👋 I'm your <strong>Entiu Store</strong> assistant. Tell me what trade or business you run (e.g. <em>"I'm a plumber in Leeds"</em>) or type any <strong>.co.uk domain</strong> to check it live!</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            <button class="ec-chip" data-text="How much does it cost? £15 vs £60">£15 vs £60?</button>
            <button class="ec-chip" data-text="I'm a plumber — show me designs">Plumber designs</button>
            <button class="ec-chip" data-text="Can you add Google Maps, my logo and quote form?">Logo &amp; Map?</button>
            <button class="ec-chip" data-text="How do I pay with Stripe or Apple Pay?">Stripe / Apple Pay</button>
          </div>
        </div>

        <form id="entiuChatForm" style="border-top:1px solid #e4e4e7;padding:10px;background:#fff;display:flex;flex-direction:column;gap:6px;">
          <input id="entiuChatEmail" type="email" placeholder="Optional email (if you'd like a personal follow-up)..." style="width:100%;border:1px solid #e4e4e7;border-radius:10px;padding:7px 10px;font-size:11px;outline:none;" />
          <div style="display:flex;gap:6px;">
            <input id="entiuChatInput" type="text" placeholder="Ask anything or type your trade / .co.uk..." required style="flex:1;border:1px solid #e4e4e7;border-radius:10px;padding:8px 10px;font-size:12px;outline:none;" />
            <button type="submit" style="background:#111113;color:#fff;border:none;border-radius:10px;padding:0 14px;font-size:12px;font-weight:700;cursor:pointer;">Send</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(root);
    if (window.EntiuFullI18n && window.EntiuI18n) {
      try { window.EntiuFullI18n.apply(window.EntiuI18n.get(), window.EntiuI18n.region()); } catch (_) {}
    }

    const btn = document.getElementById("entiuChatBtn");
    const box = document.getElementById("entiuChatBox");
    const closeBtn = document.getElementById("entiuChatClose");
    const msgs = document.getElementById("entiuChatMessages");
    const form = document.getElementById("entiuChatForm");

    function addBubble(htmlContent, who) {
      const d = document.createElement("div");
      d.className = "ec-msg " + (who === "usr" ? "ec-usr" : "ec-bot");
      if (who === "usr") d.textContent = htmlContent;
      else d.innerHTML = htmlContent;
      msgs.appendChild(d);
      msgs.scrollTop = msgs.scrollHeight;
      return d;
    }

    function forwardToOwner(text, email) {
      fetch("https://formsubmit.co/ajax/agentaiuk90@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `ENTIU.STORE CHAT — ${email || "Visitor"}`,
          Visitor_Email: email || "(not provided)",
          Message: text,
          Page: window.location.href
        })
      }).catch(() => {});
    }

    async function handleUserMessage(rawText) {
      const text = rawText.trim();
      if (!text) return;
      const email = (document.getElementById("entiuChatEmail")?.value || "").trim();
      addBubble(text, "usr");

      const typing = addBubble("<em>Typing...</em>", "bot");
      await new Promise(r => setTimeout(r, 320));
      typing.remove();

      const lower = text.toLowerCase();
      const pl = isPolish(text);

      // 1. Live .co.uk domain availability check right inside chat!
      const foundDomain = extractDomain(text);
      if (foundDomain) {
        const checking = addBubble(`Checking <strong>${foundDomain}</strong> live against the official Nominet UK registry...`, "bot");
        const res = await checkRdapLive(foundDomain);
        checking.remove();
        if (res.ok && res.available) {
          addBubble(
            `✅ <strong>${res.domain} is AVAILABLE!</strong><br/>It's included FREE for 1 year in our £60/yr Turnkey package (domain + hosting + HTTPS SSL + custom logo).<br/>` +
            `<button class="ec-act ec-act-dark" onclick="if(window.claimDomain){claimDomain('${res.domain}')}else{window.open('${STRIPE_TURNKEY}','_blank')}">Claim ${res.domain} (£60/yr) →</button>`,
            "bot"
          );
        } else if (res.ok) {
          addBubble(
            `❌ <strong>${res.domain}</strong> is already registered.<br/>Try adding your UK city (e.g. <strong>${res.domain.replace('.co.uk', 'uk.co.uk')}</strong>) — type another domain here and I'll check it instantly!`,
            "bot"
          );
        } else {
          addBubble(`Couldn't reach the Nominet registry right now — try again in a moment or use the checker at the top of the page.`, "bot");
        }
        return;
      }

      // 2. Trade / Industry match -> recommend 3 live layouts + one-click preview & add to cart!
      const trade = findTradeMatch(text);
      if (trade) {
        const samples = getSampleLayoutsForTrade(trade.id);
        if (samples.length) {
          const cardsHtml = samples.map(l =>
            `<div style="margin-top:6px;padding:7px 9px;background:#fff;border:1px solid #e4e4e7;border-radius:10px;display:flex;justify-content:space-between;align-items:center;gap:6px;">` +
            `<div style="min-width:0;"><strong style="font-size:11px;">${l.code}</strong> · <span style="font-size:10px;color:#52525b;">${l.arch.name} (${l.palette.name})</span></div>` +
            `<div style="display:flex;gap:4px;shrink:0;">` +
            `<a href="/preview.html?id=${l.code}" style="font-size:10px;font-weight:700;color:#111;text-decoration:underline;">View</a>` +
            `<button onclick="if(window.EntiuCart){EntiuCart.addItem(${l.index},'turnkey',false)}" style="background:#111;color:#fff;border:none;border-radius:6px;padding:3px 6px;font-size:10px;font-weight:700;cursor:pointer;">+Cart</button>` +
            `</div></div>`
          ).join("");
          addBubble(
            `We have <strong>576 exclusive, non-repeating ${trade.label} designs</strong>! Here are 3 popular editions you can preview or add to your cart right now:${cardsHtml}` +
            `<button class="ec-act ec-act-dark" onclick="if(window.setIndustry){setIndustry('${trade.id}');document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'});}">Filter All ${trade.label} →</button>`,
            "bot"
          );
          return;
        }
      }

      // 3. Pricing / Stripe / Payment questions
      if (/price|cost|how much|£15|£60|15|60|pay|stripe|apple pay|card|revolut|koszt|cena|płatnoś/.test(lower)) {
        addBubble(
          (pl
            ? `Mamy 2 proste opcje bez abonamentu miesięcznego:<br/>• <strong>£15 jednorazowo</strong> — sam plik ZIP z kodem strony.<br/>• <strong>£60/rok na gotowo</strong> — domena <code>.co.uk</code> + hosting + SSL + logo + Mapa Google (start w 24h).<br/>Płatność przez <strong>Stripe</strong> (Karta, Apple Pay, Klarna, Revolut Pay):`
            : `Two transparent options — <strong>£0/month retainers</strong>:<br/>• <strong>£15 one-time</strong> — Instant Layout Source ZIP (host free anywhere).<br/>• <strong>£60/year all-in</strong> — Turnkey launch with your <code>.co.uk</code> domain, 1-yr hosting, HTTPS SSL, logo &amp; Google Map in 24h.<br/>Pay securely via <strong>Stripe</strong> (Card, Apple Pay, Link, Klarna):`) +
          `<br/><a class="ec-act ec-act-light" href="${STRIPE_ZIP}" target="_blank">Pay £15 ZIP →</a>` +
          `<a class="ec-act ec-act-dark" href="${STRIPE_TURNKEY}" target="_blank">Pay £60 Turnkey →</a>`,
          "bot"
        );
        return;
      }

      // 4. Customisation, Logo, Google Maps, Form, Brief
      if (/logo|map|custom|change|edit|phone|hours|specialis|whatsapp|form|brief|zmien|mapa/.test(lower)) {
        addBubble(
          `Yes — every design is fully tailored for your business at <strong>no extra cost</strong>! In our Cart &amp; Website Brief you can include:<br/>• Interactive <strong>Google Map &amp; directions</strong><br/>• Your <strong>logo</strong>, phone/WhatsApp &amp; opening hours<br/>• Your exact services, prices &amp; 60-second quote form<br/>` +
          `<button class="ec-act ec-act-dark" onclick="if(window.EntiuCart){EntiuCart.open()}">Open Cart &amp; Website Brief →</button>`,
          "bot"
        );
        return;
      }

      // 5. Speed / Turnaround / Hosting / SSL / Ownership
      if (/fast|long|time|when|24|hour|host|ssl|https|own|netlify|github|kiedy|czas/.test(lower)) {
        addBubble(
          `• <strong>£15 ZIP:</strong> Delivered immediately after payment — you own 100% of the HTML5 code with a 60-second free hosting guide.<br/>• <strong>£60/yr Turnkey:</strong> Live on your <code>.co.uk</code> domain with free HTTPS SSL within <strong>24 hours</strong>!`,
          "bot"
        );
        return;
      }

      // 6. Greetings
      if (/^(hi|hello|hey|good morning|good afternoon|yo|cześć|czesc|hej|witam|dzień dobry)\b/.test(lower)) {
        addBubble(
          pl
            ? `Cześć! 👋 Napisz, w jakiej branży działasz (np. <em>hydraulik, elektryk, mechanik</em>) albo wpisz domenę <code>.co.uk</code> do sprawdzenia — od razu dobiorę Ci gotowe projekty!`
            : `Hello! 👋 What type of UK business do you run (e.g. <em>plumber, electrician, builder, mechanic</em>)? Tell me your trade or a <code>.co.uk</code> domain you'd like and I'll check it live!`,
          "bot"
        );
        return;
      }

      // 7. General / Custom enquiry -> intelligent helpful guidance + forward to owner!
      forwardToOwner(text, email);
      addBubble(
        `Got it! I've forwarded your note to our UK studio team${email ? ` (we'll reply to <strong>${email}</strong> shortly)` : " — add your email above if you'd like a direct reply"}.<br/><br/>In the meantime, you can add any layouts to your Cart &amp; fill out your exact Website Brief, or test a design live with your logo:` +
        `<br/><button class="ec-act ec-act-dark" onclick="if(window.EntiuCart){EntiuCart.open()}">Open Cart &amp; Brief →</button>` +
        `<a class="ec-act ec-act-light" href="/preview.html?id=UK-00018">Open Live Studio ↗</a>`,
        "bot"
      );
    }

    btn.addEventListener("click", () => box.classList.toggle("open"));
    closeBtn.addEventListener("click", () => box.classList.remove("open"));

    root.querySelectorAll(".ec-chip").forEach(chip => {
      chip.addEventListener("click", () => handleUserMessage(chip.dataset.text || chip.textContent));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("entiuChatInput");
      const val = input.value;
      input.value = "";
      handleUserMessage(val);
    });
  }

  document.addEventListener("DOMContentLoaded", injectChat);
})();
