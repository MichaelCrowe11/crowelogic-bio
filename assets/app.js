/* Crowe Psychedelics landing page — live widgets.
   No framework. No innerHTML on dynamic content — all DOM nodes
   constructed via `h()` with text children, so there is no XSS surface
   even though all data sources are local static JSON. */
"use strict";

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* h(tag, attrs, ...children) — safe DOM builder. Children are always
   appended as nodes (text or element); strings become text nodes. */
const h = (tag, attrs = {}, ...children) => {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") el.className = v;
    else if (k === "style") el.style.cssText = v;
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
    else if (v === false || v == null) continue;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
};
const clear = el => { while (el.firstChild) el.removeChild(el.firstChild); };

/* ─── Mobile menu toggle ─────────────────────────────────────── */
(() => {
  const btn = $(".nav-toggle");
  const nav = $("#nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", e => {
    if (e.target.tagName === "A") nav.classList.remove("is-open");
  });
})();

/* ─── Animated count-up on scroll ────────────────────────────── */
(() => {
  const stats = $$(".stat-n[data-count]");
  if (!stats.length || typeof IntersectionObserver === "undefined") {
    stats.forEach(el => { el.textContent = el.dataset.count; });
    return;
  }
  const animate = el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 900;
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = String(target);
    };
    requestAnimationFrame(tick);
  };
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  stats.forEach(s => obs.observe(s));
})();

/* ─── Widget 1: Compound browser ─────────────────────────────── */
(async () => {
  const sel = $("#compound-select");
  const out = $("#compound-output");
  if (!sel || !out) return;

  let data;
  try {
    data = await (await fetch("data/compounds.json")).json();
  } catch {
    clear(out); out.append(h("div", { class: "skel" }, "Could not load compound data."));
    return;
  }

  // Populate select
  clear(sel);
  for (const c of data) {
    sel.append(h("option", { value: c.id }, `${c.name}  —  ${c.class || ""}`));
  }

  const kiToWidth = v => {
    if (!v || v <= 0) return 0;
    const logMin = Math.log10(0.5);
    const logMax = Math.log10(10000);
    const L = Math.log10(Math.max(0.5, Math.min(10000, v)));
    return Math.max(0.02, Math.min(1, 1 - (L - logMin) / (logMax - logMin)));
  };

  const render = id => {
    const c = data.find(x => x.id === id) || data[0];
    clear(out);

    // Header
    const pills = h("div", { class: "cp-pills" });
    if (c.dea_schedule)
      pills.append(h("span", { class: "cp-pill cp-pill-sched" }, `Schedule ${c.dea_schedule}`));
    if (c.fda_breakthrough)
      pills.append(h("span", { class: "cp-pill cp-pill-bt" }, "FDA Breakthrough"));
    if (c.class)
      pills.append(h("span", { class: "cp-pill" }, c.class));

    out.append(
      h("div", { class: "cp-header" },
        h("div", {},
          h("h4", { class: "cp-name" }, c.name),
          h("div", { class: "cp-meta" },
            `${c.id}  ·  ${c.formula || ""}  ·  MW ${c.mw ? c.mw.toFixed(2) : "—"}`)
        ),
        pills
      )
    );

    // Grid
    const recBlock = h("div", { class: "cp-block" }, h("h4", {}, "Receptor affinities"));
    if (c.receptor_affinities && c.receptor_affinities.length) {
      for (const a of c.receptor_affinities) {
        const w = kiToWidth(a.value_nm);
        const fill = h("div", { class: "rec-fill", style: "transform:scaleX(0);" });
        fill.dataset.w = w;
        recBlock.append(
          h("div", { class: "rec-row" },
            h("span", { class: "rec-name" }, a.receptor || ""),
            h("div", { class: "rec-bar" }, fill),
            h("span", { class: "rec-val" },
              `${a.assay || "Ki"} ${a.value_nm ? a.value_nm.toLocaleString() : "—"} nM`)
          )
        );
      }
    } else {
      recBlock.append(h("p", { style: "color:var(--ink-soft);font-size:13px;margin:0;" },
        "No receptor data recorded for this compound in the base set."));
    }

    const metBlock = h("div", { class: "cp-block" },
      h("h4", {}, "Metabolism & half-life"),
      h("ul", {},
        h("li", {}, h("strong", {}, "Primary enzyme: "), c.primary_enzyme || "—"),
        h("li", {}, h("strong", {}, "Primary metabolite: "), c.primary_metabolite || "—"),
        c.prodrug_of ? h("li", {}, h("strong", {}, "Prodrug of: "), c.prodrug_of) : null,
        h("li", {}, h("strong", {}, "Half-life: "),
          c.half_life_hours ? `${c.half_life_hours} h (${c.half_life_route || "—"})` : "—"),
      ),
      h("h4", { style: "margin-top:14px;" }, "Natural source"),
      h("p", {}, c.natural_source || "synthetic"),
      c.fda_breakthrough
        ? h("p", {},
            h("strong", {}, "Breakthrough Therapy: "), c.fda_indication || "",
            h("br"),
            h("span", { style: "color:var(--ink-soft);font-size:13px;" },
              `Sponsor: ${c.fda_sponsor || "—"}`))
        : null
    );

    out.append(h("div", { class: "cp-grid" }, recBlock, metBlock));

    // Animate bars after attach
    requestAnimationFrame(() => {
      $$(".rec-fill", out).forEach(f => {
        f.style.transform = `scaleX(${f.dataset.w})`;
      });
    });
  };

  sel.addEventListener("change", () => render(sel.value));
  render(data[0].id);
})();

/* ─── Widget 2: Cultivar matcher ─────────────────────────────── */
(async () => {
  const group = $("#chip-group");
  const out   = $("#cultivar-output");
  if (!group || !out) return;

  let data;
  try {
    data = await (await fetch("data/cultivars.json")).json();
  } catch {
    clear(out); out.append(h("div", { class: "skel" }, "Could not load cultivar data."));
    return;
  }

  const DIRECTIVES = [
    ["high-psilocybin",    "High psilocybin"],
    ["high-psilocin",      "High psilocin"],
    ["low-baeocystin",     "Low baeocystin"],
    ["high-baeocystin",    "High baeocystin"],
    ["low-norbaeocystin",  "Low norbaeocystin"],
  ];

  const active = new Set();
  clear(group);

  const rank = () => {
    const targets = [...active].map(id => {
      const [dir, ...alk] = id.split("-");
      return { dir, alk: alk.join("_") };
    });

    clear(out);
    if (!targets.length) {
      out.append(h("div", { class: "skel" },
        "Pick at least one directive above to see ranked cultivars."));
      return;
    }

    const HIGH = 1.20, LOWCEIL = 0.10, ABSENT = 0.02;
    const score = (expected, ts) => {
      let p = 0, m = 0;
      for (const t of ts) {
        m += 100;
        const v = expected[t.alk] || 0;
        let s = 0;
        if (t.dir === "high") s = Math.min(v / HIGH, 1) * 100;
        else if (t.dir === "low") s = v <= LOWCEIL ? 100 : v >= HIGH ? 0
          : 100 * (1 - (v - LOWCEIL) / (HIGH - LOWCEIL));
        else if (t.dir === "absent") s = v <= ABSENT ? 100 : v >= LOWCEIL * 2 ? 0
          : 100 * (1 - (v - ABSENT) / (LOWCEIL * 2 - ABSENT));
        p += s;
      }
      return m ? (p / m) * 100 : 0;
    };

    const cands = [];
    for (const sp of data.species) {
      const base = {
        psilocybin: sp.psilocybin, psilocin: sp.psilocin,
        baeocystin: sp.baeocystin, norbaeocystin: sp.norbaeocystin || 0,
      };
      cands.push({ name: sp.scientific_name, sub: "", expected: base,
        score: score(base, targets), difficulty: sp.difficulty });
      for (const st of data.strains.filter(s => s.parent_species_id === sp.id)) {
        const e = {
          psilocybin:    base.psilocybin * (st.psilocybin_mult  || 1),
          psilocin:      base.psilocin   * (st.psilocin_mult    || 1),
          baeocystin:    base.baeocystin * (st.baeocystin_mult  || 1),
          norbaeocystin: base.norbaeocystin,
        };
        cands.push({ name: sp.scientific_name, sub: st.name, expected: e,
          score: score(e, targets), difficulty: st.difficulty || sp.difficulty });
      }
    }
    cands.sort((a, b) => b.score - a.score);

    cands.slice(0, 5).forEach((c, i) => {
      out.append(h("div", { class: "cul-row" },
        h("div", { class: "cul-head" },
          h("div", {},
            h("div", { class: "cul-rank" }, `#${i + 1}`),
            h("div", { class: "cul-name" },
              h("em", {}, c.name), c.sub ? `  —  ${c.sub}` : "")
          ),
          h("div", { class: "cul-score" }, String(Math.round(c.score)))
        ),
        h("div", { class: "cul-details" },
          h("span", {}, `psilocybin ${c.expected.psilocybin.toFixed(2)}%`),
          h("span", {}, `psilocin ${c.expected.psilocin.toFixed(2)}%`),
          h("span", {}, `baeocystin ${c.expected.baeocystin.toFixed(2)}%`),
          h("span", {}, `· ${c.difficulty || "—"}`)
        )
      ));
    });
  };

  for (const [id, label] of DIRECTIVES) {
    const btn = h("button", {
      class: "chip", type: "button", "aria-pressed": "false",
      onclick() {
        if (active.has(id)) { active.delete(id); btn.classList.remove("is-active"); btn.setAttribute("aria-pressed", "false"); }
        else                { active.add(id);    btn.classList.add("is-active");    btn.setAttribute("aria-pressed", "true"); }
        rank();
      }
    }, label);
    group.append(btn);
  }
})();

/* ─── Widget 3: Agent demo reveal ────────────────────────────── */
(async () => {
  const btns  = $$(".agent-btn");
  const run   = $("#agent-run");
  const out   = $("#agent-output");
  const qText = $("#agent-query-text");
  if (!btns.length || !run || !out || !qText) return;

  const AGENTS = {
    nakamura: {
      query: "Propose three novel 5-HT2A agonist tryptamines for treatment-resistant depression with:  5-HT2A Ki < 20 nM,  5-HT2C Ki > 500 nM,  5-HT2B Ki > 2000 nM,  t½ 2-4h,  SA score ≤ 4.  For each: SMILES, rationale grounded in receptor crystal structure, predicted Ki, ADMET concerns, FTO commentary.",
      file:  "data/nakamura_demo.txt",
    },
    mullen: {
      query: "A Phoenix-based biotech wants in vitro characterization of psilocybin analogs at a new 1,500 sq ft facility. Walk them through the DEA Schedule I registration path: registration type, applicable 21 CFR 1301 sections, timeline, top three rejection risks, IND requirement, and AZ state-level considerations.",
      file:  "data/mullen_demo.txt",
    },
  };

  let current = "nakamura";
  let streamAbort = 0;
  let streaming = false;

  const resetOutput = () => {
    clear(out);
    out.append(h("code", {},
      "Click \"Stream the response\" to watch a pre-recorded CroweLM Supreme output."));
  };

  const setCurrent = key => {
    current = key;
    btns.forEach(b => {
      const active = b.dataset.agent === key;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", String(active));
    });
    qText.textContent = AGENTS[key].query;
    resetOutput();
  };

  btns.forEach(b => b.addEventListener("click", () => {
    if (streaming) { streamAbort++; streaming = false; }
    setCurrent(b.dataset.agent);
  }));

  setCurrent("nakamura");

  run.addEventListener("click", async () => {
    if (streaming) return;
    streaming = true;
    const id = ++streamAbort;
    const agent = AGENTS[current];

    let text = "";
    try {
      text = await (await fetch(agent.file)).text();
    } catch (e) {
      clear(out);
      out.append(h("code", {}, `Unable to load the demo response. ${String(e)}`));
      streaming = false;
      return;
    }

    clear(out);
    const codeEl = h("code", {});
    const cursor = h("span", { class: "cursor" });
    out.append(codeEl, cursor);

    const chunk = 40;
    const delay = 12;
    let i = 0;

    await new Promise(resolve => {
      const tick = () => {
        if (id !== streamAbort) { resolve(); return; }
        if (i >= text.length) {
          codeEl.textContent = text;
          if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
          resolve();
          return;
        }
        codeEl.textContent = text.slice(0, i + chunk);
        i += chunk;
        out.scrollTop = out.scrollHeight;
        setTimeout(tick, delay);
      };
      tick();
    });

    streaming = false;
  });
})();
