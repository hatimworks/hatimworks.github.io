(function () {
  const D = window.S5;
  const $ = (s, el = document) => el.querySelector(s);
  const app = $("#app");
  const modById = Object.fromEntries(D.modules.map(m => [m.id, m]));

  /* ---------- storage (safe) ---------- */
  const KEY = "s5guide.v1";
  let state = { lessons: {}, quiz: {}, plan: {}, theme: null };
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
  const overall = () => {
    let d = 0, t = 0; D.modules.forEach(m => { const p = modProgress(m); d += p.done; t += p.total; });
    return Math.round((d / t) * 100);
  };
  const today = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
  const daysUntil = iso => { const [y, mo, d] = iso.split("-").map(Number); return Math.round((new Date(y, mo - 1, d) - today()) / 864e5); };
  const fmtDay = iso => { const [y, mo, d] = iso.split("-").map(Number); const dt = new Date(y, mo - 1, d); return { d, m: dt.toLocaleString("en", { month: "short" }), w: dt.toLocaleString("en", { weekday: "short" }) }; };
  const plainText = html => { const t = document.createElement("div"); t.innerHTML = html; return t.textContent; };

  /* ---------- sidebar ---------- */
  function renderNav() {
    $("#moduleNav").innerHTML = D.modules.map(m => {
      const p = modProgress(m);
      return `<a href="#/m/${m.id}" data-route="m/${m.id}">${m.icon} ${esc(m.name)}<span class="mini">${p.pct}%</span></a>`;
    }).join("");
    const r = location.hash.replace(/^#\/?/, "") || "home";
    document.querySelectorAll(".sidebar a").forEach(a => {
      const route = a.dataset.route;
      a.classList.toggle("active", route === r || (route !== "home" && r.startsWith(route)));
    });
  }
  $("#menuBtn").onclick = () => $("#sidebar").classList.toggle("open");
  $("#sidebar").addEventListener("click", e => { if (e.target.closest("a")) $("#sidebar").classList.remove("open"); });
  $("#resetBtn").onclick = () => {
    if (confirm("Reset all your progress (lessons, quizzes, plan)?")) { state.lessons = {}; state.quiz = {}; state.plan = {}; save(); route(); }
  };

  /* ---------- pages ---------- */
  function home() {
    const pct = overall();
    const upcoming = D.keyDates.map(k => ({ ...k, n: daysUntil(k.date) })).filter(k => k.n >= -1).sort((a, b) => a.n - b.n);
    const firstOpen = D.plan.flatMap((ph, pi) => ph.items.map((it, ii) => ({ it, k: pi + ":" + ii }))).filter(x => !state.plan[x.k]).slice(0, 4);
    return `
      <section class="hero">
        <div>
          <span class="pill">${esc(D.programme)}</span>
          <h1>Hey ${esc(D.student)} — from zero to hero 🚀</h1>
          <p class="lead">Everything you missed this semester, explained from the start: lessons, quizzes, exercises and a week-by-week plan. Tick lessons as you learn them and watch the ring fill.</p>
          <a class="btn" href="#/plan">Start the study plan →</a>
          <a class="btn ghost" href="#/exam">How to answer exam questions</a>
        </div>
        <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
      </section>

      <h2>⏰ Coming up</h2>
      <div class="card">${upcoming.map(k => {
        const f = fmtDay(k.date); const m = modById[k.module];
        const lbl = k.n < 0 ? "passed" : k.n === 0 ? "TODAY" : k.n === 1 ? "tomorrow" : `in ${k.n} days`;
        return `<div class="date-row"><div class="date-box"><small>${f.m}</small><b>${f.d}</b><small>${f.w}</small></div>
          <div><b>${esc(k.label)}</b><br><a href="#/m/${m.id}">${m.icon} ${esc(m.name)}</a></div>
          <span class="pill days ${k.n <= 7 ? "urgent" : ""}">${lbl}</span></div>`;
      }).join("") || "<p>No upcoming dates.</p>"}</div>

      <h2>✅ Your next steps</h2>
      <div class="card">${firstOpen.length ? firstOpen.map(x => `
        <label class="check"><input type="checkbox" data-plan="${x.k}"><span>${esc(x.it)}</span></label>`).join("") : "<p>Plan complete — amazing. Keep revising with the quizzes.</p>"}
        <p><a href="#/plan">See the full plan →</a></p></div>

      <h2>📚 Modules</h2>
      <div class="grid">${D.modules.map(m => {
        const p = modProgress(m); const best = state.quiz[m.id];
        return `<a class="card mcard" href="#/m/${m.id}"><span class="ic">${m.icon}</span><h3>${esc(m.name)}</h3>
          <p>${esc(m.prof)}</p><p>${esc(m.slot)}</p>
          <div class="bar"><i style="width:${p.pct}%"></i></div>
          <p>${p.done}/${p.total} lessons · quiz best: ${best != null ? best + "%" : "—"}</p></a>`;
      }).join("")}</div>`;
  }

  function moduleView(id, tab) {
    const m = modById[id]; if (!m) return notFound();
    tab = tab || "lessons";
    const p = modProgress(m);
    const tabs = [["lessons", "📘 Lessons"], ["quiz", "🎯 Quiz"], ["exercises", "✍️ Exercises"], ["tips", "💡 Exam tips"]];
    let body = "";
    if (tab === "lessons") {
      body = m.lessons.map((l, i) => {
        const k = lessonKey(m.id, i); const done = !!state.lessons[k];
        return `<details class="lesson ${done ? "done" : ""} ${m.rtl ? "rtl" : ""}" id="l${i}">
          <summary>${done ? "✔ " : ""}${esc(l.title)}
            <label class="learned" onclick="event.stopPropagation()"><input type="checkbox" data-lesson="${k}" ${done ? "checked" : ""}> learned</label></summary>
          <div class="lesson-body">${l.body}</div></details>`;
      }).join("");
    } else if (tab === "quiz") {
      body = `<div class="score" id="score"><b>Score: <span id="sc">0</span> / ${m.quiz.length}</b>
        <span class="pill">best: ${state.quiz[m.id] != null ? state.quiz[m.id] + "%" : "—"}</span>
        <button class="btn ghost" style="margin-left:auto" id="retry">Retry</button></div>
        <div class="${m.rtl ? "rtl" : ""}">${m.quiz.map((q, i) => `
        <div class="q" data-q="${i}"><h3>${i + 1}. ${esc(q.q)}</h3>
          <div class="opts">${q.o.map((o, j) => `<button class="opt" data-o="${j}">${esc(o)}</button>`).join("")}</div>
          <div class="explain" hidden></div></div>`).join("")}</div>`;
    } else if (tab === "exercises") {
      body = `<p class="lead">Exam-style practice. Write your answers on paper, then check them against the lessons.</p>
        <div class="card ${m.rtl ? "rtl" : ""}"><ol>${m.exercises.map(x => `<li style="margin:8px 0">${esc(x)}</li>`).join("")}</ol></div>`;
    } else {
      body = `<div class="card"><ul>${m.tips.map(x => `<li style="margin:8px 0">${esc(x)}</li>`).join("")}</ul></div>`;
    }
    return `
      <a href="#/" class="pill">← Dashboard</a>
      <h1 style="margin-top:10px">${m.icon} ${esc(m.name)}</h1>
      <p class="lead ${m.rtl ? "rtl" : ""}">${esc(m.summary)}</p>
      <div class="meta">
        <div><b>Professor</b>${esc(m.prof)}</div>
        <div><b>When</b>${esc(m.slot)}</div>
        <div><b>Your files</b>${esc(m.files)}</div>
        <div><b>Progress</b>${p.done}/${p.total} lessons<div class="bar"><i style="width:${p.pct}%"></i></div></div>
      </div>
      <div class="callout">${esc(m.where)}</div>
      <div class="tabs">${tabs.map(([k, l]) => `<button data-tab="${k}" class="${k === tab ? "active" : ""}">${l}</button>`).join("")}</div>
      ${body}`;
  }

  function plan() {
    const all = D.plan.reduce((n, ph) => n + ph.items.length, 0);
    const done = Object.keys(state.plan).filter(k => state.plan[k]).length;
    return `<h1>🗺️ Study plan</h1>
      <p class="lead">A realistic path from “I missed everything” to exam-ready. Tick each step — it’s saved automatically.</p>
      <div class="card"><b>${done} / ${all} steps done</b><div class="bar"><i style="width:${Math.round(done / all * 100)}%"></i></div></div>
      ${D.plan.map((ph, pi) => `<h2>${esc(ph.phase)}</h2><div class="card">${ph.items.map((it, ii) => {
        const k = pi + ":" + ii; const c = !!state.plan[k];
        return `<label class="check ${c ? "done" : ""}"><input type="checkbox" data-plan="${k}" ${c ? "checked" : ""}><span>${esc(it)}</span></label>`;
      }).join("")}</div>`).join("")}`;
  }

  function timetable() {
    const days = ["Wednesday", "Thursday", "Friday"];
    return `<h1>🗓️ Timetable & key dates</h1>
      <p class="lead">Group 1 · Linguistics. Times were read from the official PDF — double-check them with the faculty timetable.</p>
      <div class="grid2">${days.map(d => `<div class="card"><h3>${d}</h3>${D.timetable.filter(t => t.day === d).map(t => {
        const m = modById[t.module];
        return `<div class="date-row"><div class="date-box" style="min-width:96px"><b style="font-size:15px">${t.time}</b></div>
          <div><a href="#/m/${m.id}"><b>${m.icon} ${esc(m.name)}</b></a><br><small>${esc(m.prof.split("·")[0])} · ${esc(t.room)}</small></div></div>`;
      }).join("")}</div>`).join("")}</div>
      <h2>Key dates</h2>
      <div class="card">${D.keyDates.map(k => { const f = fmtDay(k.date); const n = daysUntil(k.date);
        return `<div class="date-row"><div class="date-box"><small>${f.m}</small><b>${f.d}</b><small>${f.w}</small></div><div>${esc(k.label)}</div>
        <span class="pill days ${n <= 7 && n >= 0 ? "urgent" : ""}">${n < 0 ? "passed" : n === 0 ? "today" : "in " + n + " d"}</span></div>`; }).join("")}</div>`;
  }

  function glossary(q = "", f = "") {
    return `<h1>📖 Glossary</h1><p class="lead">Every key term in one place. Type to filter.</p>
      <div class="gl-tools"><input id="glq" type="search" placeholder="Search a term…" value="${esc(q)}">
      <select id="glf"><option value="">All modules</option>${D.modules.map(m => `<option value="${m.id}" ${f === m.id ? "selected" : ""}>${esc(m.name)}</option>`).join("")}</select></div>
      <div class="card" id="glList"></div>`;
  }
  function fillGlossary() {
    const q = ($("#glq").value || "").toLowerCase(); const f = $("#glf").value;
    const rows = D.glossary.filter(([t, m, d]) => (!f || m === f) && (t + " " + d).toLowerCase().includes(q)).sort((a, b) => a[0].localeCompare(b[0]));
    $("#glList").innerHTML = rows.map(([t, m, d]) => `<div class="term"><b>${esc(t)}</b> <span class="pill">${esc(modById[m].short)}</span><br>${esc(d)}</div>`).join("") || "<p>No match.</p>";
  }

  function exam() {
    return `<h1>📝 Exam method</h1>
      <p class="lead">Knowing the content is half the job. The other half is answering the way examiners expect.</p>
      <div class="grid2">
        <div class="card"><h3>1. Definition questions</h3><p><b>Define → example → contrast.</b><br>“A morpheme is the smallest unit of meaning or grammatical function. For example, <i>unhappy</i> = un + happy. Unlike a word, it cannot always stand alone (bound morphemes).”</p></div>
        <div class="card"><h3>2. Compare / distinguish</h3><p>Use a short <b>table</b> or two parallel paragraphs with the same criteria (definition, example, key difference). Typical: inflection vs derivation, phonetics vs phonology, sense vs reference, behaviourism vs mentalism.</p></div>
        <div class="card"><h3>3. Data analysis</h3><p>Show your steps: list the forms → segment them → identify the pattern → state the rule. Use the notation (<code>#nation+al#</code>, <code>/p/ → [pʰ] / #__</code>).</p></div>
        <div class="card"><h3>4. Trees (syntax)</h3><p>Label every node, one head per phrase, no crossing lines. Draw lightly in pencil first.</p></div>
        <div class="card"><h3>5. Essay-type questions</h3><p>Intro (define the key term + announce your plan) → 2–3 paragraphs (point, example, explanation) → short conclusion. Cite scholars (Skinner, Chomsky, Krashen, Saussure, Peirce…).</p></div>
        <div class="card"><h3>6. On the day</h3><ul><li>Read all questions first; start with what you know best.</li><li>Divide your time by the points.</li><li>Leave 5 minutes to re-read.</li><li>Clear handwriting, numbered answers.</li></ul></div>
      </div>
      <h2>Revision routine (per module)</h2>
      <div class="card"><ol><li>Read the lesson summaries on this site (20 min).</li><li>Do the quiz until 100% (10 min).</li><li>Do 2 exercises on paper without notes (30 min).</li><li>Check against the slides in your S5 CLAUDE folder (10 min).</li><li>Write the 5 key terms you forgot on a flashcard.</li></ol></div>`;
  }

  function search(q) {
    const t = q.toLowerCase().trim(); if (!t) return home();
    const hits = [];
    D.modules.forEach(m => m.lessons.forEach((l, i) => {
      const txt = plainText(l.body); const at = txt.toLowerCase().indexOf(t);
      if (l.title.toLowerCase().includes(t) || at >= 0) {
        const s = at >= 0 ? txt.slice(Math.max(0, at - 60), at + 100) : txt.slice(0, 140);
        hits.push(`<a class="card mcard" href="#/m/${m.id}/lessons/${i}"><h3>${m.icon} ${esc(l.title)}</h3><p>${esc(m.name)}</p><p>…${esc(s).replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), x => `<mark>${x}</mark>`)}…</p></a>`);
      }
    }));
    const gl = D.glossary.filter(([a, , d]) => (a + " " + d).toLowerCase().includes(t));
    return `<h1>Search: “${esc(q)}”</h1>
      <h2>Lessons (${hits.length})</h2><div class="grid">${hits.join("") || "<p>No lesson matches.</p>"}</div>
      <h2>Glossary (${gl.length})</h2><div class="card">${gl.map(([a, m, d]) => `<div class="term"><b>${esc(a)}</b> <span class="pill">${esc(modById[m].short)}</span><br>${esc(d)}</div>`).join("") || "<p>No term matches.</p>"}</div>`;
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
    else if (parts[0] === "search") html = search(decodeURIComponent(parts.slice(1).join("/")));
    else html = notFound();
    app.innerHTML = html;
    renderNav();
    bind(parts);
    if (after) after(); else window.scrollTo(0, 0);
  }

  function bind(parts) {
    app.querySelectorAll("[data-lesson]").forEach(cb => cb.onchange = () => {
      state.lessons[cb.dataset.lesson] = cb.checked; save();
      const d = cb.closest("details"); d.classList.toggle("done", cb.checked);
      renderNav();
      const m = modById[parts[1]]; const p = modProgress(m);
      app.querySelector(".meta .bar i").style.width = p.pct + "%";
    });
    app.querySelectorAll("[data-plan]").forEach(cb => cb.onchange = () => {
      state.plan[cb.dataset.plan] = cb.checked; save();
      cb.closest(".check").classList.toggle("done", cb.checked);
      if (parts[0] === "plan" || !parts[0]) setTimeout(route, 250);
    });
    app.querySelectorAll(".tabs button").forEach(b => b.onclick = () => { location.hash = `#/m/${parts[1]}/${b.dataset.tab}`; });
    // quiz
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

  window.addEventListener("hashchange", route);
  route();
})();
