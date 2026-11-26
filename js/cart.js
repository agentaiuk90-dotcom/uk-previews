/* Entiu Store — Persistent Multi-Item Shopping Cart & AJAX Order Brief Checkout */
(function (global) {
  "use strict";

  const STORAGE_KEY = "entiu_cart_v2";
  const CHECKOUT_WORKER_URL = "https://entiu-checkout.agentaiuk90.workers.dev";
  const PAY_LINKS = {
    zip: "https://buy.stripe.com/dRm8wO7fV9KGeicfuQ6oo00",
    turnkey: "https://buy.stripe.com/6oU14m43J1ea2zubeA6oo01",
    provider: "Stripe · Card / Apple Pay"
  };

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCart(items) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch {}
  }

  let cart = loadCart();

  function showToast(msg) {
    let el = document.getElementById("entiuToast");
    if (!el) {
      el = document.createElement("div");
      el.id = "entiuToast";
      el.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);z-index:90;background:#111113;color:#fff;padding:12px 20px;border-radius:999px;font-size:12px;font-weight:700;box-shadow:0 18px 45px rgba(0,0,0,0.28);opacity:0;transition:all .22s ease;display:flex;align-items:center;gap:12px;";
      document.body.appendChild(el);
    }
    el.innerHTML = `<span>${msg}</span><button onclick="EntiuCart.open()" style="background:#fff;color:#111113;border:none;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:800;cursor:pointer;">View Cart →</button>`;
    requestAnimationFrame(() => {
      el.style.opacity = "1";
      el.style.transform = "translateX(-50%) translateY(0)";
    });
    clearTimeout(el._t);
    el._t = setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translateX(-50%) translateY(20px)";
    }, 3200);
  }

  function addItem(idx, plan, openNow) {
    const p = plan === "zip" ? "zip" : "turnkey";
    const existing = cart.find(i => i.idx === idx && i.plan === p);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({ idx: Number(idx), plan: p, qty: 1 });
    }
    saveCart(cart);
    render();
    const code = global.UKLayoutEngine ? global.UKLayoutEngine.formatId(idx) : ("UK-" + String(idx + 1).padStart(5, "0"));
    if (openNow) {
      open();
    } else {
      showToast(`✓ Added ${code} (${p === "zip" ? "£15 ZIP" : "£60 Turnkey"}) to cart`);
    }
  }

  function setPlan(pos, plan) {
    if (!cart[pos]) return;
    cart[pos].plan = plan === "zip" ? "zip" : "turnkey";
    saveCart(cart);
    render();
  }

  function changeQty(pos, delta) {
    if (!cart[pos]) return;
    cart[pos].qty = (cart[pos].qty || 1) + delta;
    if (cart[pos].qty <= 0) cart.splice(pos, 1);
    saveCart(cart);
    render();
  }

  function removeItem(pos) {
    cart.splice(pos, 1);
    saveCart(cart);
    render();
  }

  function clear() {
    cart = [];
    saveCart(cart);
    render();
  }

  function totalCount() {
    return cart.reduce((s, i) => s + (i.qty || 1), 0);
  }

  function totalAmount() {
    return cart.reduce((s, i) => s + (i.plan === "zip" ? 15 : 60) * (i.qty || 1), 0);
  }

  function open() {
    render();
    const bd = document.getElementById("drawerBackdrop");
    const dr = document.getElementById("orderDrawer");
    if (bd) bd.classList.remove("hidden");
    if (dr) dr.classList.remove("hidden");
  }

  function close() {
    const bd = document.getElementById("drawerBackdrop");
    const dr = document.getElementById("orderDrawer");
    if (bd) bd.classList.add("hidden");
    if (dr) dr.classList.add("hidden");
  }

  function render() {
    const badge = document.getElementById("bagCount");
    if (badge) badge.textContent = String(totalCount());

    const listEl = document.getElementById("cartItemsList");
    if (!listEl) return;

    const E = global.UKLayoutEngine;
    if (!cart.length) {
      listEl.innerHTML = `
        <div class="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-center text-xs text-zinc-500">
          Your cart is empty.<br/>Click <strong>+ ZIP £15</strong> or <strong>+ Full £60</strong> on any layouts in the gallery to add multiple designs.
        </div>`;
    } else {
      listEl.innerHTML = cart.map((item, pos) => {
        const l = E ? E.getLayoutByIndex(item.idx) : { code: "UK-00001", bizName: "Layout", industry: { name: "UK Business" }, arch: { name: "Modern" }, palette: { accent: "#111", bg: "#fff" } };
        const isZip = item.plan === "zip";
        const lineTotal = (isZip ? 15 : 60) * (item.qty || 1);
        const fmt = g => (global.EntiuI18n ? global.EntiuI18n.formatGbp(g) : `£${g}`);
        return `
          <div class="flex items-center justify-between gap-2.5 rounded-xl border border-zinc-200 bg-white p-3 shadow-2xs">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="h-9 w-9 shrink-0 rounded-lg border border-zinc-200 flex items-center justify-center text-[10px] font-extrabold" style="background:${l.palette.bg};color:${l.palette.accent};">${l.code.slice(-3)}</span>
              <div class="min-w-0">
                <div class="truncate font-display text-xs font-extrabold text-zinc-950">${l.code} — ${l.bizName}</div>
                <div class="truncate text-[11px] text-zinc-500">${l.industry.name} · ${l.arch.name}</div>
                <div class="mt-1 flex items-center gap-1.5">
                  <button onclick="EntiuCart.setPlan(${pos}, 'zip')" class="rounded px-1.5 py-0.5 text-[10px] font-bold cursor-pointer ${isZip ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600'}">ZIP ${fmt(15)}</button>
                  <button onclick="EntiuCart.setPlan(${pos}, 'turnkey')" class="rounded px-1.5 py-0.5 text-[10px] font-bold cursor-pointer ${!isZip ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600'}">Full ${fmt(60)}</button>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-end gap-1 shrink-0">
              <div class="text-xs font-extrabold text-zinc-950">${fmt(lineTotal)}</div>
              <div class="flex items-center gap-1">
                <button onclick="EntiuCart.changeQty(${pos}, -1)" class="h-5 w-5 rounded border border-zinc-200 text-xs leading-none text-zinc-600 hover:bg-zinc-100 cursor-pointer">−</button>
                <span class="w-4 text-center text-[11px] font-bold">${item.qty || 1}</span>
                <button onclick="EntiuCart.changeQty(${pos}, 1)" class="h-5 w-5 rounded border border-zinc-200 text-xs leading-none text-zinc-600 hover:bg-zinc-100 cursor-pointer">+</button>
                <button onclick="EntiuCart.removeItem(${pos})" class="ml-1 text-xs text-zinc-400 hover:text-rose-600 cursor-pointer" title="Remove">✕</button>
              </div>
            </div>
          </div>`;
      }).join("");
    }

    const hasTurnkey = cart.some(i => i.plan === "turnkey");
    const domBlock = document.getElementById("drawerDomainBlock");
    if (domBlock) domBlock.style.display = hasTurnkey ? "block" : "none";

    const total = totalAmount();
    const fmtTotal = global.EntiuI18n ? global.EntiuI18n.formatGbp(total) : `£${total}.00`;
    const isNonGbp = global.EntiuI18n && global.EntiuI18n.get() !== "en";
    const codes = cart.map(i => {
      const c = E ? E.formatId(i.idx) : "UK-00001";
      return `${c}(${i.plan === "zip" ? "ZIP" : "60"}x${i.qty || 1})`;
    }).join(", ");
    const domInput = document.getElementById("drawerDomain");
    const dom = domInput ? domInput.value.trim() : "";

    const sumLabel = document.getElementById("drawerSummaryLabel");
    const priceLabel = document.getElementById("drawerPriceLabel");
    const drawerTotalEl = document.getElementById("drawerTotal");
    const refEl = document.getElementById("orderRef");
    const payBtn = document.getElementById("revolutPayBtn");

    if (sumLabel) sumLabel.textContent = `${totalCount()} item(s) in cart`;
    if (priceLabel) priceLabel.textContent = isNonGbp ? `${fmtTotal} (£${total})` : `£${total}.00`;
    if (drawerTotalEl) drawerTotalEl.textContent = isNonGbp ? `${fmtTotal} (£${total})` : `£${total}`;
    if (refEl) refEl.textContent = dom ? `${codes || "ORDER"} | ${dom}` : (codes || "Add an item");

    if (payBtn) {
      const secondary = document.getElementById("stripeSecondaryPayBtn");
      if (secondary) secondary.classList.add("hidden");
      payBtn.href = "#";
      payBtn.onclick = startSingleStripeCheckout;
      payBtn.textContent = total > 0
        ? `Pay ${fmtTotal} in One Payment (Stripe · Card / Apple Pay) →`
        : `Add a layout to pay via Stripe →`;
    }
  }

  async function startSingleStripeCheckout(e) {
    if (e) e.preventDefault();
    if (!cart.length) return;
    const payBtn = document.getElementById("revolutPayBtn");
    const statusEl = document.getElementById("briefSubmitStatus");
    const E = global.UKLayoutEngine;
    const total = totalAmount();
    const custEmail = (document.getElementById("drawerEmail")?.value || "").trim();
    const domain = (document.getElementById("drawerDomain")?.value || "").trim();
    const business = (document.getElementById("drawerBiz")?.value || "").trim();

    const itemsPayload = cart.map(i => ({
      code: E ? E.formatId(i.idx) : "UK-00001",
      plan: i.plan,
      qty: i.qty || 1
    }));
    const refStr = itemsPayload.map(i => `${i.code}(${i.plan === "zip" ? "ZIP" : "60"}x${i.qty})`).join(",");

    if (payBtn) payBtn.textContent = `Opening Stripe Checkout (£${total}.00)...`;
    try {
      const res = await fetch(CHECKOUT_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: itemsPayload,
          email: custEmail,
          domain,
          business,
          reference: refStr
        })
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      throw new Error(data.error || "Worker not configured yet");
    } catch (err) {
      // Fallback to static Stripe Payment Link if Worker secret isn't deployed yet
      const onlyZip = cart.every(i => i.plan === "zip");
      const fallbackUrl = (onlyZip ? PAY_LINKS.zip : PAY_LINKS.turnkey) + (custEmail ? `?prefilled_email=${encodeURIComponent(custEmail)}` : "");
      if (statusEl) statusEl.innerHTML = `<span class="text-amber-700 text-[11px]">Redirecting to Stripe Checkout...</span>`;
      window.open(fallbackUrl, "_blank", "noopener");
      render();
    }
  }

  async function submitBriefAjax(e) {
    if (e) e.preventDefault();
    const statusEl = document.getElementById("briefSubmitStatus");
    const submitBtn = document.getElementById("submitBriefBtn");
    const biz = (document.getElementById("drawerBiz")?.value || "").trim();
    const email = (document.getElementById("drawerEmail")?.value || "").trim();
    const phone = (document.getElementById("drawerPhone")?.value || "").trim();

    if (!cart.length) {
      if (statusEl) statusEl.innerHTML = `<span class="text-rose-600 font-semibold">Please add at least 1 layout to your cart first.</span>`;
      return;
    }
    if (!biz || !email) {
      if (statusEl) statusEl.innerHTML = `<span class="text-rose-600 font-semibold">Please enter your Business Name and Email.</span>`;
      return;
    }

    const E = global.UKLayoutEngine;
    const total = totalAmount();
    const itemsList = cart.map(i => {
      const l = E ? E.getLayoutByIndex(i.idx) : { code: "UK-00001", bizName: "Layout", arch: { name: "" }, palette: { name: "" } };
      return `${l.code} (${l.bizName} / ${l.arch.name} / ${l.palette.name}) — ${i.plan === "zip" ? "£15 ZIP" : "£60/yr Turnkey"} x${i.qty || 1}`;
    }).join(" | ");

    const features = Array.from(document.querySelectorAll(".feat-cb:checked")).map(cb => cb.value).join(", ");
    const payload = {
      _subject: `NEW ENTIU.STORE ORDER (£${total}) — ${biz}`,
      _template: "table",
      Order_Total_GBP: `£${total}.00`,
      Items: itemsList,
      Business_Name: biz,
      City_Postcode: document.getElementById("drawerCity")?.value || "",
      Street_Address_Map: document.getElementById("drawerAddress")?.value || "",
      Opening_Hours: document.getElementById("drawerHours")?.value || "",
      Phone_WhatsApp: phone,
      Customer_Email: email,
      Desired_Domain: document.getElementById("drawerDomain")?.value || "",
      Specialisations_Services: document.getElementById("drawerServices")?.value || "",
      About_Company: document.getElementById("drawerAbout")?.value || "",
      Requested_Features: features
    };

    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending order brief..."; }
    if (statusEl) statusEl.innerHTML = `<span class="text-zinc-600">Submitting your website brief...</span>`;

    try {
      const res = await fetch("https://formsubmit.co/ajax/agentaiuk90@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        if (statusEl) statusEl.innerHTML = `<span class="text-emerald-600 font-bold">✓ Order brief received! Now click the Payment button above (£${total}.00) to activate launch.</span>`;
      } else {
        throw new Error("FormSubmit returned " + res.status);
      }
    } catch {
      const subj = encodeURIComponent(payload._subject);
      const body = encodeURIComponent(Object.entries(payload).filter(([k]) => !k.startsWith("_")).map(([k, v]) => `${k}: ${v}`).join("\n"));
      window.location.href = `mailto:agentaiuk90@gmail.com?subject=${subj}&body=${body}`;
      if (statusEl) statusEl.innerHTML = `<span class="text-emerald-700 font-semibold">Opened your email app with the pre-filled brief.</span>`;
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "✓ Submit Website Brief"; }
    }
  }

  global.EntiuCart = {
    PAY_LINKS,
    addItem,
    setPlan,
    changeQty,
    removeItem,
    clear,
    open,
    close,
    render,
    submitBriefAjax
  };

  document.addEventListener("DOMContentLoaded", render);
})(window);
