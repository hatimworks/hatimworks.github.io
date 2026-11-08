(function () {
  const D = window.S5;
  const $ = (s, el = document) => el.querySelector(s);
  const app = $("#app");
  const order = ["morphology", "phonology", "syntax", "semantics", "tta", "digital", "arabic"];
  D.modules.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const modById = Object.fromEntries(D.modules.map(m => [m.id, m]));

  /* ---------- storage (safe) ---------- */
  const KEY = "s5guide.v2";
  let state = { lessons: {}, quiz: {}, plan: {}, theme: null, group: null };
  try { state = Object.assign(state, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  /* ---------- theme ---------- */
  const applyTheme = () => { if (state.theme) document.documentElement.dataset.theme = state.theme; else delete document.documentElement.dataset.theme; };
  applyTheme();
  $("#themeBtn").onclick = () => {
    const dark = state.theme ? state.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    state.theme = dark ? "light" : "dark"; save(); applyTheme();
  };

  /* ---------- helpers ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const lessonKey = (m, i) => m + ":" + i;
  const modProgress = m => {
    const done = m.lessons.filter((_, i) => state.lessons[lessonKey(m.id, i)]).length;
    return { done, total: m.lessons.length, pct: Math.round((done / m.lessons.length) * 100) };
  };
  const overall = () => { let d = 0, t = 0; D.modules.forEach(m => { const p = modProgress(m); d += p.done; t += p.total; }); return Math.round((d / t) * 100); };
  const today = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
  const daysUntil = iso => { const [y, mo, d] = iso.split("-").map(Number); return Math.round((new Date(y, mo - 1, d) - today()) / 864e5); };
  const fmtDay = iso => { const [y, mo, d] = iso.split("-").map(Number); const dt = new Date(y, mo - 1, d); return { d, m: dt.toLocaleString("en", { month: "short" }), w: dt.toLocaleString("en", { weekday: "short" }) }; };
  const plainText = html => { const t = document.createElement("div"); t.innerHTML = html; return t.textContent; };
  const ytSearch = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
  const forGroup = x => x.g === "all" || !state.group || x.g === state.group;
  const prof = m => state.group ? m.profs[state.group] : (m.profs.g1 === m.profs.g2 ? m.profs.g1 : `G1: ${m.profs.g1} · G2: ${m.profs.g2}`);
  const slot = m => {
    const gs = state.group ? [state.group] : ["g1", "g2"];
    return gs.map(g => { const t = D.timetable[g].find(x => x.module === m.id); return t ? `${state.group ? "" : D.groups[g].label + ": "}${t.day} ${t.time} · ${t.room}` : ""; }).filter(Boolean).join(" — ");
  };

  const videoCard = ([id, title, channel, ma]) => `
    <a class="vcard" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">
      <img loading="lazy" src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" alt="">
      <span class="vmeta"><b>${esc(title)}</b><small>${ma ? '<span class="ma" title="Moroccan educator">Moroccan</span> ' : ""}${esc(channel)}</small></span></a>`;

  /* ---------- glossary index + auto-linking ---------- */
  const G = D.glossary.map((g, i) => ({ ...g, i }));
  const forms = [];
  G.forEach(g => [g.t, ...(g.aka || [])].forEach(f => forms.push({ f, g })));
  forms.sort((a, b) => b.f.length - a.f.length);
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const termRe = new RegExp("(?<![\\p{L}\\p{N}-])(" + forms.map(x => reEsc(x.f)).join("|") + ")(?![\\p{L}\\p{N}-])", "giu");
  const formMap = new Map(forms.map(x => [x.f.toLowerCase(), x.g]));
  // related lesson for each term
  G.forEach(g => {
    const m = modById[g.m]; if (!m) return;
    const keys = [g.t, ...(g.aka || [])].map(s => s.toLowerCase());
    const idx = m.lessons.findIndex(l => { const t = plainText(l.body).toLowerCase(); return keys.some(k => t.includes(k)); });
    g.lesson = idx >= 0 ? idx : null;
  });

  function linkTerms(root) {
    const used = new Set();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement.closest("a,code,pre,button,.term-link,summary,h1,h2,h3") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const text = node.nodeValue; termRe.lastIndex = 0;
      let m, last = 0, frag = null;
      while ((m = termRe.exec(text))) {
        const g = formMap.get(m[1].toLowerCase()); if (!g || used.has(g.i)) continue;
        used.add(g.i); frag = frag || document.createDocumentFragment();
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const b = document.createElement("button"); b.className = "term-link"; b.dataset.g = g.i; b.textContent = m[1];
        frag.appendChild(b); last = m.index + m[1].length;
      }
      if (frag) { frag.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(frag, node); }
    });
  }

  const pop = document.createElement("div"); pop.className = "term-pop"; pop.hidden = true; document.body.appendChild(pop);
  function showTerm(btn) {
    const g = G[+btn.dataset.g]; const m = modById[g.m];
    pop.innerHTML = `<button class="pop-x" aria-label="Close">×</button>
      <b>${esc(g.t)}</b> <span class="pill">${esc(m ? m.short : g.m)}</span>
      <p>${esc(g.d)}</p>
      <div class="pop-actions">
        ${g.url ? `<a class="btn sm" href="${g.url}" target="_blank" rel="noopener">Learn more ↗</a>` : ""}
        ${g.lesson != null ? `<a class="btn sm ghost" href="#/m/${g.m}/lessons/${g.lesson}">Lesson →</a>` : ""}
        <a class="btn sm ghost" href="${ytSearch(g.t + " linguistics explained")}" target="_blank" rel="noopener">▶ YouTube</a>
      </div>`;
    pop.hidden = false;
    const r = btn.getBoundingClientRect(); const w = Math.min(340, innerWidth - 24);
    pop.style.width = w + "px";
    pop.style.left = Math.max(12, Math.min(r.left + scrollX, scrollX + innerWidth - w - 12)) + "px";
    pop.style.top = (r.bottom + scrollY + 8) + "px";
    pop.querySelector(".pop-x").onclick = () => pop.hidden = true;
  }
  document.addEventListener("click", e => {
    const t = e.target.closest(".term-link");
    if (t) { e.preventDefault(); e.stopPropagation(); showTerm(t); return; }
    if (!e.target.closest(".term-pop")) pop.hidden = true;
  });
  addEventListener("hashchange", () => pop.hidden = true);
  addEventListener("keydown", e => { if (e.key === "Escape") pop.hidden = true; });

  /* ---------- sidebar ---------- */
  function renderNav() {
    $("#moduleNav").innerHTML = D.modules.map(m => `<a href="#/m/${m.id}" data-route="m/${m.id}">${m.icon} ${esc(m.name)}<span class="mini">${modProgress(m).pct}%</span></a>`).join("");
    const r = location.hash.replace(/^#\/?/, "") || "home";
    document.querySelectorAll(".sidebar a").forEach(a => {
      const route = a.dataset.route;
      a.classList.toggle("active", route === r || (route !== "home" && r.startsWith(route)));
    });
    $("#groupSel").value = state.group || "";
  }
  $("#menuBtn").onclick = () => $("#sidebar").classList.toggle("open");
  $("#sidebar").addEventListener("click", e => { if (e.target.closest("a")) $("#sidebar").classList.remove("open"); });
  $("#groupSel").onchange = e => { state.group = e.target.value || null; save(); route(); };
  $("#resetBtn").onclick = () => { if (confirm("Reset all your progress (lessons, quizzes, plan)?")) { state.lessons = {}; state.quiz = {}; state.plan = {}; save(); route(); } };

  /* ---------- pages ---------- */
  function groupPicker() {
    return `<div class="card pick"><b>Which group are you in?</b> <span class="muted">It sets your timetable, professors and deadlines (you can change it in the menu).</span>
      <div><button class="btn" data-setgroup="g1">Group 1</button> <button class="btn" data-setgroup="g2">Group 2</button></div></div>`;
  }

  function home() {
    const pct = overall();
    const upcoming = D.keyDates.filter(forGroup).map(k => ({ ...k, n: daysUntil(k.date) })).filter(k => k.n >= -1).sort((a, b) => a.n - b.n);
    const rec = D.recurring.filter(forGroup);
    const firstOpen = D.plan.flatMap((ph, pi) => ph.items.map((it, ii) => ({ it, k: pi + ":" + ii }))).filter(x => !state.plan[x.k]).slice(0, 5);
    return `
      ${state.group ? "" : groupPicker()}
      <section class="hero">
        <div>
          <span class="pill">${esc(D.programme)}${state.group ? " · " + D.groups[state.group].label : ""}</span>
          <h1>Missed the semester? Start here. 🚀</h1>
          <p class="lead">A complete, free guide for S5 Linguistics students: every module explained from zero, with videos (Moroccan educators first), clickable key terms, quizzes, exercises with model answers, and a study plan. Tick lessons as you learn them and watch the ring fill.</p>
          <a class="btn" href="#/plan">Start the study plan →</a>
          <a class="btn ghost" href="#/exam">How to get top marks</a>
          <button class="btn ghost" id="shareBtn">🔗 Share with your class</button>
        </div>
        <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
      </section>

      <h2>⏰ Deadlines</h2>
      <div class="card">${upcoming.map(k => {
        const f = fmtDay(k.date); const m = modById[k.module];
        const lbl = k.n < 0 ? "passed" : k.n === 0 ? "TODAY" : k.n === 1 ? "tomorrow" : `in ${k.n} days`;
        return `<div class="date-row"><div class="date-box"><small>${f.m}</small><b>${f.d}</b><small>${f.w}</small></div>
          <div><b>${esc(k.label)}</b><br><a href="#/m/${m.id}">${m.icon} ${esc(m.name)}</a></div>
          <span class="pill days ${k.n <= 7 ? "urgent" : ""}">${lbl}</span></div>`;
      }).join("")}
      ${rec.map(r => `<div class="date-row"><div class="date-box"><b>↻</b><small>weekly</small></div><div>${esc(r.label)}</div></div>`).join("")}</div>

      <h2>✅ Your next steps</h2>
      <div class="card">${firstOpen.length ? firstOpen.map(x => `<label class="check"><input type="checkbox" data-plan="${x.k}"><span>${esc(x.it)}</span></label>`).join("") : "<p>Plan complete. Keep revising with the quizzes.</p>"}
        <p><a href="#/plan">See the full plan →</a></p></div>

      <h2>📚 Modules</h2>
      <div class="grid">${D.modules.map(m => {
        const p = modProgress(m); const best = state.quiz[m.id];
        return `<a class="card mcard" href="#/m/${m.id}"><span class="ic">${m.icon}</span><h3>${esc(m.name)}</h3>
          <p>${esc(prof(m))}</p>
          <div class="bar"><i style="width:${p.pct}%"></i></div>
          <p>${p.done}/${p.total} lessons · quiz best: ${best != null ? best + "%" : "—"}</p></a>`;
      }).join("")}</div>
      <p class="muted small" style="margin-top:28px">⚠️ Unofficial guide made by students, for students. Always double-check dates and requirements with your professors. Found a mistake? <a href="https://github.com/hatimOtaku/S5-guide/issues" target="_blank" rel="noopener">Report it on GitHub</a>.</p>`;
  }

  function moduleView(id, tab) {
    const m = modById[id]; if (!m) return notFound();
    tab = tab || "lessons";
    const p = modProgress(m);
    const tabs = [["lessons", "📘 Lessons"], ["videos", "▶ Videos"], ["quiz", "🎯 Quiz"], ["exercises", "✍️ Exercises"], ["tips", "💡 Exam tips"]];
    let body = "";
    if (tab === "lessons") {
      body = `<p class="muted small">💡 <span class="term-link demo">Dotted words</span> are clickable: tap them for a definition, a “learn more” link and a video search.</p>` +
        m.lessons.map((l, i) => {
          const k = lessonKey(m.id, i); const done = !!state.lessons[k];
          const vids = (l.v || []);
          return `<details class="lesson ${done ? "done" : ""} ${m.rtl ? "rtl" : ""}" id="l${i}">
            <summary><span>${done ? "✔ " : ""}${esc(l.title)}</span>
              <label class="learned" onclick="event.stopPropagation()"><input type="checkbox" data-lesson="${k}" ${done ? "checked" : ""}> learned</label></summary>
            <div class="lesson-body">${l.body}
              <div class="watch" dir="ltr"><h4>▶ Watch</h4>
                ${vids.length ? `<div class="vgrid">${vids.map(videoCard).join("")}</div>` : ""}
                <a class="ytsearch" href="${ytSearch(l.yt)}" target="_blank" rel="noopener">🔎 More videos on YouTube: “${esc(l.yt)}”</a>
              </div></div></details>`;
        }).join("");
    } else if (tab === "videos") {
      const all = [...m.videos, ...m.lessons.flatMap(l => l.v || [])];
      const seen = new Set(); const uniq = all.filter(v => !seen.has(v[0]) && seen.add(v[0]));
      uniq.sort((a, b) => (b[3] ? 1 : 0) - (a[3] ? 1 : 0));
      body = `<p class="lead">All videos for this module, with Moroccan educators first (green badge). They open on YouTube.</p><div class="vgrid big">${uniq.map(videoCard).join("")}</div>`;
    } else if (tab === "quiz") {
      body = `<div class="score" id="score"><b>Score: <span id="sc">0</span> / ${m.quiz.length}</b>
        <span class="pill">best: ${state.quiz[m.id] != null ? state.quiz[m.id] + "%" : "—"}</span>
        <button class="btn ghost" style="margin-left:auto" id="retry">Retry</button></div>
        <div class="${m.rtl ? "rtl" : ""}">${m.quiz.map((q, i) => `
        <div class="q" data-q="${i}"><h3>${i + 1}. ${esc(q.q)}</h3>
          <div class="opts">${q.o.map((o, j) => `<button class="opt" data-o="${j}">${esc(o)}</button>`).join("")}</div>
          <div class="explain" hidden></div></div>`).join("")}</div>`;
    } else if (tab === "exercises") {
      body = `<p class="lead">Exam-style practice. Answer on paper first, <b>then</b> reveal the model answer and compare.</p>
        <div class="${m.rtl ? "rtl" : ""}">${m.exercises.map((x, i) => `<div class="q"><h3>${i + 1}. ${esc(x.q)}</h3>
        <details class="answer"><summary>Show model answer</summary><div class="lesson-body">${x.a}</div></details></div>`).join("")}</div>`;
    } else {
      body = `<div class="card"><ul>${m.tips.map(x => `<li style="margin:8px 0">${esc(x)}</li>`).join("")}</ul></div>`;
    }
    return `
      <a href="#/" class="pill">← Dashboard</a>
      <h1 style="margin-top:10px">${m.icon} ${esc(m.name)}</h1>
      <p class="lead ${m.rtl ? "rtl" : ""}">${esc(m.summary)}</p>
      <div class="meta">
        <div><b>Professor</b>${esc(prof(m))}</div>
        <div><b>When</b>${esc(slot(m)) || "—"}</div>
        <div><b>Progress</b>${p.done}/${p.total} lessons<div class="bar"><i style="width:${p.pct}%"></i></div></div>
      </div>
      <div class="callout"><b>Where to find the official material:</b> ${m.materials}</div>
      <div class="tabs">${tabs.map(([k, l]) => `<button data-tab="${k}" class="${k === tab ? "active" : ""}">${l}</button>`).join("")}</div>
      ${body}`;
  }

  function plan() {
    const all = D.plan.reduce((n, ph) => n + ph.items.length, 0);
    const done = Object.keys(state.plan).filter(k => state.plan[k]).length;
    return `<h1>🗺️ Study plan</h1>
      <p class="lead">A realistic path from “I never attended” to exam-ready. Tick each step; it’s saved in your browser.</p>
      <div class="card"><b>${done} / ${all} steps done</b><div class="bar"><i style="width:${Math.round(done / all * 100)}%"></i></div></div>
      ${D.plan.map((ph, pi) => `<h2>${esc(ph.phase)}</h2><div class="card">${ph.items.map((it, ii) => {
        const k = pi + ":" + ii; const c = !!state.plan[k];
        return `<label class="check ${c ? "done" : ""}"><input type="checkbox" data-plan="${k}" ${c ? "checked" : ""}><span>${esc(it)}</span></label>`;
      }).join("")}</div>`).join("")}`;
  }

  function timetable() {
    const days = ["Wednesday", "Thursday", "Friday"];
    const gs = state.group ? [state.group] : ["g1", "g2"];
    return `<h1>🗓️ Timetable & deadlines</h1>
      <p class="lead">S5 Linguistics, 2026/2027 (winter session). Times are read from the official faculty PDFs; check the faculty website for changes.</p>
      ${gs.map(g => `<h2>${D.groups[g].label}</h2><div class="grid2">${days.map(d => `<div class="card"><h3>${d}</h3>${D.timetable[g].filter(t => t.day === d).map(t => {
        const m = modById[t.module];
        return `<div class="date-row"><div class="date-box" style="min-width:96px"><b style="font-size:15px">${t.time}</b></div>
          <div><a href="#/m/${m.id}"><b>${m.icon} ${esc(m.name)}</b></a><br><small>${esc(m.profs[g])} · ${esc(t.room)}</small></div></div>`;
      }).join("") || '<p class="muted">—</p>'}</div>`).join("")}</div>`).join("")}
      <h2>Key dates</h2>
      <div class="card">${D.keyDates.filter(forGroup).map(k => { const f = fmtDay(k.date); const n = daysUntil(k.date);
        return `<div class="date-row"><div class="date-box"><small>${f.m}</small><b>${f.d}</b><small>${f.w}</small></div><div>${esc(k.label)}</div>
        <span class="pill days ${n <= 7 && n >= 0 ? "urgent" : ""}">${n < 0 ? "passed" : n === 0 ? "today" : "in " + n + " d"}</span></div>`; }).join("")}
        ${D.recurring.filter(forGroup).map(r => `<div class="date-row"><div class="date-box"><b>↻</b><small>weekly</small></div><div>${esc(r.label)}</div></div>`).join("")}</div>`;
  }

  function glossary() {
    return `<h1>📖 Glossary</h1><p class="lead">${G.length} key terms. Each one has a definition, a “learn more” link and a link to the lesson where it’s taught.</p>
      <div class="gl-tools"><input id="glq" type="search" placeholder="Search a term…">
      <select id="glf"><option value="">All modules</option>${D.modules.filter(m => !m.rtl).map(m => `<option value="${m.id}">${esc(m.name)}</option>`).join("")}</select></div>
      <div class="card" id="glList"></div>`;
  }
  function fillGlossary() {
    const q = ($("#glq").value || "").toLowerCase(); const f = $("#glf").value;
    const rows = G.filter(g => (!f || g.m === f) && (g.t + " " + g.d + " " + (g.aka || []).join(" ")).toLowerCase().includes(q)).sort((a, b) => a.t.localeCompare(b.t));
    $("#glList").innerHTML = rows.map(g => `<div class="term" id="g${g.i}"><b>${esc(g.t)}</b> <span class="pill">${esc(modById[g.m].short)}</span><br>${esc(g.d)}
      <div class="term-actions">${g.url ? `<a href="${g.url}" target="_blank" rel="noopener">Learn more ↗</a>` : ""}
      ${g.lesson != null ? `<a href="#/m/${g.m}/lessons/${g.lesson}">Go to lesson →</a>` : ""}
      <a href="${ytSearch(g.t + " linguistics explained")}" target="_blank" rel="noopener">▶ YouTube</a></div></div>`).join("") || "<p>No match.</p>";
  }

  function exam() {
    return `<h1>📝 How to get top marks</h1>
      <p class="lead">Knowing the content is half the job. The other half is answering the way examiners expect.</p>
      <div class="grid2">
        <div class="card"><h3>1. Definition questions</h3><p><b>Define → example → contrast.</b><br>“A morpheme is the smallest unit of meaning or grammatical function. For example, <i>unhappy</i> = un + happy. Unlike a word, it cannot always stand alone (bound morphemes).”</p></div>
        <div class="card"><h3>2. Compare / distinguish</h3><p>Use a short <b>table</b> or two parallel paragraphs with the same criteria (definition, example, key difference). Typical pairs: inflection vs derivation, phonetics vs phonology, sense vs reference, behaviourism vs mentalism, GTM vs ALM.</p></div>
        <div class="card"><h3>3. Data analysis</h3><p>Show your steps: list the forms → segment them → identify the pattern → state the rule. Use the notation (<code>#nation+al#</code>, <code>/p/ → [pʰ] / #__V́</code>).</p></div>
        <div class="card"><h3>4. Trees (syntax)</h3><p>Label every node, one head per phrase, no crossing lines. Draw lightly in pencil first.</p></div>
        <div class="card"><h3>5. Essay-type questions</h3><p>Intro (define the key term + announce your plan) → 2–3 paragraphs (point, example, explanation) → short conclusion. Cite scholars with dates (Skinner 1957, Chomsky 1959, Krashen 1982, Saussure, Peirce 1955, Rosch).</p></div>
        <div class="card"><h3>6. On the day</h3><ul><li>Read all questions first; start with what you know best.</li><li>Divide your time by the points.</li><li>Leave 5 minutes to re-read.</li><li>Clear handwriting, numbered answers.</li></ul></div>
      </div>
      <h2>Revision routine (per module, ~90 min)</h2>
      <div class="card"><ol><li>Watch a Moroccan educator’s overview video for the module (Videos tab).</li><li>Read the lessons on this site; click every term you don’t know.</li><li>Do the quiz until you get 100%.</li><li>Do the exercises on paper, then compare with the model answers.</li><li>Check against your professor’s slides and note anything extra.</li><li>Write the 5 terms you forgot on flashcards.</li></ol></div>`;
  }

  function about() {
    return `<h1>ℹ️ About this guide</h1>
      <div class="card"><p>A free, unofficial study guide for <b>S5 English Studies — Linguistics</b> (FLLA Kénitra, Université Ibn Tofail, 2026/2027), made for students who missed classes and want to catch up fast.</p>
      <ul><li><b>Content:</b> written from the course outlines, slides and class notes shared during the semester, plus the standard references (Carnie for syntax, Saeed for semantics, Richards & Rodgers for teaching methods). No official slides or books are reproduced here; get those from your professors.</li>
      <li><b>Videos:</b> real YouTube videos picked for each lesson. Moroccan educators (green “Moroccan” badge) come first when a good one exists; otherwise, well-known international channels. Every lesson also has a “more videos” search link.</li>
      <li><b>Clickable terms:</b> dotted words open a definition with a “learn more” link (mostly Wikipedia) and a YouTube search.</li>
      <li><b>Your progress</b> (lessons ticked, quiz scores, plan) is saved only in your own browser. Nothing is sent anywhere.</li>
      <li><b>Mistakes or missing topics?</b> <a href="https://github.com/hatimOtaku/S5-guide/issues" target="_blank" rel="noopener">Open an issue on GitHub</a> or tell the class group.</li></ul>
      <p class="muted">⚠️ Always double-check dates, exam formats and requirements with your professors; they have the final word.</p></div>`;
  }

  function search(q) {
    const t = q.toLowerCase().trim(); if (!t) return home();
    const hits = [];
    const re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    D.modules.forEach(m => m.lessons.forEach((l, i) => {
      const txt = plainText(l.body); const at = txt.toLowerCase().indexOf(t);
      if (l.title.toLowerCase().includes(t) || at >= 0) {
        const s = at >= 0 ? txt.slice(Math.max(0, at - 60), at + 100) : txt.slice(0, 140);
        hits.push(`<a class="card mcard" href="#/m/${m.id}/lessons/${i}"><h3>${m.icon} ${esc(l.title)}</h3><p>${esc(m.name)}</p><p>…${esc(s).replace(re, x => `<mark>${x}</mark>`)}…</p></a>`);
      }
    }));
    const gl = G.filter(g => (g.t + " " + g.d).toLowerCase().includes(t));
    return `<h1>Search: “${esc(q)}”</h1>
      <h2>Lessons (${hits.length})</h2><div class="grid">${hits.join("") || "<p>No lesson matches.</p>"}</div>
      <h2>Glossary (${gl.length})</h2><div class="card">${gl.map(g => `<div class="term"><b>${esc(g.t)}</b> <span class="pill">${esc(modById[g.m].short)}</span><br>${esc(g.d)}
        <div class="term-actions">${g.url ? `<a href="${g.url}" target="_blank" rel="noopener">Learn more ↗</a>` : ""}${g.lesson != null ? `<a href="#/m/${g.m}/lessons/${g.lesson}">Go to lesson →</a>` : ""}</div></div>`).join("") || "<p>No term matches.</p>"}</div>`;
  }

  const notFound = () => `<h1>Page not found</h1><p><a href="#/">Back to the dashboard</a></p>`;

  /* ---------- router ---------- */
  function route() {
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    let html, after = null;
    if (!parts[0]) html = home();
    else if (parts[0] === "m") {
      html = moduleView(parts[1], parts[2]);
      if (parts[2] === "lessons" && parts[3]) after = () => { const d = $("#l" + parts[3]); if (d) { d.open = true; d.scrollIntoView({ behavior: "smooth" }); } };
    }
    else if (parts[0] === "plan") html = plan();
    else if (parts[0] === "timetable") html = timetable();
    else if (parts[0] === "glossary") { html = glossary(); after = fillGlossary; }
    else if (parts[0] === "exam") html = exam();
    else if (parts[0] === "about") html = about();
    else if (parts[0] === "search") html = search(decodeURIComponent(parts.slice(1).join("/")));
    else html = notFound();
    app.innerHTML = html;
    app.querySelectorAll(".lesson-body, .lead").forEach(linkTerms);
    renderNav();
    bind(parts);
    if (after) after(); else window.scrollTo(0, 0);
  }

  function bind(parts) {
    app.querySelectorAll("[data-setgroup]").forEach(b => b.onclick = () => { state.group = b.dataset.setgroup; save(); route(); });
    const share = $("#shareBtn");
    if (share) share.onclick = async () => {
      const url = location.origin + location.pathname;
      const data = { title: "S5 Guide — zero to hero", text: "Free S5 Linguistics study guide: lessons, videos, quizzes and model answers", url };
      try { if (navigator.share) { await navigator.share(data); return; } } catch (e) { return; }
      try { await navigator.clipboard.writeText(url); share.textContent = "✔ Link copied"; } catch (e) { prompt("Copy this link:", url); }
    };
    app.querySelectorAll("[data-lesson]").forEach(cb => cb.onchange = () => {
      state.lessons[cb.dataset.lesson] = cb.checked; save();
      cb.closest("details").classList.toggle("done", cb.checked);
      renderNav();
      const p = modProgress(modById[parts[1]]);
      app.querySelector(".meta .bar i").style.width = p.pct + "%";
    });
    app.querySelectorAll("[data-plan]").forEach(cb => cb.onchange = () => {
      state.plan[cb.dataset.plan] = cb.checked; save();
      cb.closest(".check").classList.toggle("done", cb.checked);
      if (parts[0] === "plan" || !parts[0]) setTimeout(route, 250);
    });
    app.querySelectorAll(".tabs button").forEach(b => b.onclick = () => { location.hash = `#/m/${parts[1]}/${b.dataset.tab}`; });
    const m = modById[parts[1]];
    if (m && parts[2] === "quiz") {
      let score = 0, answered = 0;
      app.querySelectorAll(".q").forEach(qel => {
        const q = m.quiz[+qel.dataset.q];
        qel.querySelectorAll(".opt").forEach(btn => btn.onclick = () => {
          const pick = +btn.dataset.o;
          qel.querySelectorAll(".opt").forEach(b => { b.disabled = true; if (+b.dataset.o === q.a) b.classList.add("right"); });
          if (pick === q.a) score++; else btn.classList.add("wrong");
          answered++; $("#sc").textContent = score;
          const ex = qel.querySelector(".explain");
          ex.hidden = false; ex.textContent = (pick === q.a ? "✔ Correct. " : "✘ Not quite. ") + (q.e || "");
          if (answered === m.quiz.length) {
            const pct = Math.round(score / m.quiz.length * 100);
            if (state.quiz[m.id] == null || pct > state.quiz[m.id]) { state.quiz[m.id] = pct; save(); }
            $("#score .pill").textContent = "best: " + state.quiz[m.id] + "%";
            $("#sc").textContent = score + " — " + (pct === 100 ? "perfect! 🎉" : pct >= 70 ? "good, retry for 100%" : "review the lessons and retry");
          }
        });
      });
      $("#retry").onclick = route;
    }
    if (parts[0] === "glossary") { $("#glq").oninput = fillGlossary; $("#glf").onchange = fillGlossary; }
  }

  /* ---------- global search ---------- */
  let st;
  $("#globalSearch").addEventListener("input", e => {
    clearTimeout(st); const v = e.target.value;
    st = setTimeout(() => { location.hash = v.trim() ? "#/search/" + encodeURIComponent(v) : "#/"; }, 250);
  });

  addEventListener("hashchange", route);
  route();
})();
