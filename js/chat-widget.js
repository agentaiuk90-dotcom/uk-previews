/* Entiu Store — Floating Live Chat & Instant Concierge Widget (Zero Exposed Secrets) */
(function () {
  "use strict";

  const QUICK_ANSWERS = {
    "pricing": "We keep pricing transparent with zero monthly retainers:\n• £15 one-time — Layout Source ZIP (instant delivery, host free anywhere)\n• £60/year all-in — Turnkey launch with your .co.uk domain, 1-year HTTPS hosting, Google Map & logo setup in 24h.",
    "domain": "You can check any .co.uk domain live at the top of entiu.store using the official Nominet UK registry. If it's free, we register and connect it with HTTPS SSL inside our £60/yr package.",
    "speed": "£15 ZIP packages are delivered immediately after payment. Full £60/yr Turnkey .co.uk websites go live within 24 hours with your logo, phone number, services & Google Maps.",
    "custom": "Every single design can be customised with your business name, city, services, opening hours, Google Map, WhatsApp button and logo — just add your favourite layout(s) to the Cart and fill out the brief!"
  };

  function injectChat() {
    if (document.getElementById("entiuChatRoot")) return;
    const root = document.createElement("div");
    root.id = "entiuChatRoot";
    root.innerHTML = `
      <style>
        #entiuChatBtn { position:fixed; bottom:22px; right:22px; z-index:80; display:flex; align-items:center; gap:9px; background:#111113; color:#fff; border:1px solid rgba(255,255,255,0.14); border-radius:999px; padding:12px 18px; font-family:'Inter',sans-serif; font-size:12px; font-weight:700; box-shadow:0 16px 40px rgba(0,0,0,0.24); cursor:pointer; transition:transform .18s ease, background .18s ease; }
        #entiuChatBtn:hover { transform:translateY(-2px); background:#27272a; }
        #entiuChatBox { position:fixed; bottom:80px; right:22px; z-index:80; width:350px; max-width:calc(100vw - 32px); background:#fff; border:1px solid rgba(17,17,19,0.12); border-radius:20px; box-shadow:0 28px 70px rgba(0,0,0,0.22); overflow:hidden; display:none; flex-direction:column; font-family:'Inter',sans-serif; }
        #entiuChatBox.open { display:flex; }
        .ec-msg { max-width:85%; padding:9px 12px; border-radius:14px; font-size:12px; line-height:1.5; white-space:pre-line; }
        .ec-bot { background:#f4f4f5; color:#18181b; align-self:flex-start; border-bottom-left-radius:4px; }
        .ec-usr { background:#111113; color:#fff; align-self:flex-end; border-bottom-right-radius:4px; }
        .ec-chip { border:1px solid #e4e4e7; background:#fff; color:#27272a; border-radius:999px; padding:5px 10px; font-size:11px; font-weight:600; cursor:pointer; }
        .ec-chip:hover { border-color:#111113; color:#111113; }
      </style>

      <button id="entiuChatBtn" aria-label="Open live chat">
        <span style="width:8px;height:8px;border-radius:99px;background:#10b981;display:inline-block;"></span>
        <span>Live Chat · UK Support</span>
      </button>

      <div id="entiuChatBox" role="dialog" aria-label="Entiu Store Live Chat">
        <div style="background:#111113;color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:13px;font-weight:800;">Entiu Store Concierge</div>
            <div style="font-size:11px;color:#a1a1aa;display:flex;align-items:center;gap:6px;"><span style="width:6px;height:6px;border-radius:99px;background:#10b981;"></span> Replies instantly · UK team online</div>
          </div>
          <button id="entiuChatClose" style="background:none;border:none;color:#a1a1aa;font-size:15px;cursor:pointer;">✕</button>
        </div>

        <div id="entiuChatMessages" style="height:255px;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:8px;background:#fafafa;">
          <div class="ec-msg ec-bot">Hi! 👋 Welcome to <strong>Entiu Store</strong>. Ask anything about our 11,520 UK layouts, £15 ZIP downloads, or £60/yr turnkey .co.uk websites — or leave your business name &amp; email for a free custom mockup!</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:2px;">
            <button class="ec-chip" data-q="pricing">£15 vs £60?</button>
            <button class="ec-chip" data-q="domain">Free .co.uk?</button>
            <button class="ec-chip" data-q="speed">Launch time?</button>
            <button class="ec-chip" data-q="custom">Custom logo &amp; map?</button>
          </div>
        </div>

        <form id="entiuChatForm" style="border-top:1px solid #e4e4e7;padding:10px;background:#fff;display:flex;flex-direction:column;gap:6px;">
          <input id="entiuChatEmail" type="email" placeholder="Your email (so we can reply directly)..." style="width:100%;border:1px solid #e4e4e7;border-radius:10px;padding:7px 10px;font-size:11px;outline:none;" />
          <div style="display:flex;gap:6px;">
            <input id="entiuChatInput" type="text" placeholder="Type your message or business name..." required style="flex:1;border:1px solid #e4e4e7;border-radius:10px;padding:8px 10px;font-size:12px;outline:none;" />
            <button type="submit" style="background:#111113;color:#fff;border:none;border-radius:10px;padding:0 14px;font-size:12px;font-weight:700;cursor:pointer;">Send</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(root);

    const btn = document.getElementById("entiuChatBtn");
    const box = document.getElementById("entiuChatBox");
    const closeBtn = document.getElementById("entiuChatClose");
    const msgs = document.getElementById("entiuChatMessages");
    const form = document.getElementById("entiuChatForm");

    function addMsg(text, who) {
      const d = document.createElement("div");
      d.className = "ec-msg " + (who === "usr" ? "ec-usr" : "ec-bot");
      d.textContent = text;
      msgs.appendChild(d);
      msgs.scrollTop = msgs.scrollHeight;
    }

    btn.addEventListener("click", () => box.classList.toggle("open"));
    closeBtn.addEventListener("click", () => box.classList.remove("open"));

    root.querySelectorAll(".ec-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const key = chip.dataset.q;
        addMsg(chip.textContent, "usr");
        setTimeout(() => addMsg(QUICK_ANSWERS[key], "bot"), 220);
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const input = document.getElementById("entiuChatInput");
      const emailEl = document.getElementById("entiuChatEmail");
      const text = input.value.trim();
      const email = emailEl.value.trim();
      if (!text) return;
      addMsg(text, "usr");
      input.value = "";

      const lower = text.toLowerCase();
      if (lower.includes("price") || lower.includes("cost") || lower.includes("15") || lower.includes("60")) {
        addMsg(QUICK_ANSWERS.pricing, "bot");
      } else if (lower.includes("domain") || lower.includes("co.uk")) {
        addMsg(QUICK_ANSWERS.domain, "bot");
      }

      try {
        await fetch("https://formsubmit.co/ajax/agentaiuk90@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            _subject: `LIVE CHAT MESSAGE (entiu.store) — ${email || "Visitor"}`,
            Visitor_Email: email || "(not provided)",
            Message: text,
            Page: window.location.href
          })
        });
        addMsg(email
          ? `✓ Message sent to our UK team! We will reply to ${email} shortly.`
          : `✓ Message received by our UK team! Add your email above so we can send you a direct reply.`, "bot");
      } catch {
        addMsg("Thanks! You can also email us directly at agentaiuk90@gmail.com for an instant reply.", "bot");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", injectChat);
})();
