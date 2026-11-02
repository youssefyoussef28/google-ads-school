// Google Ads School — client-side rendering for every page.
// Data: data/index.js (SCHOOL_INDEX, SCHOOL_TRACKS, SCHOOL_UPDATES), data/lessons/<slug>.js,
// assets/resources.js (SCHOOL_RESOURCES), assets/config.js (SCHOOL_CONFIG).

(function () {
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(key);
        return v == null ? fallback : JSON.parse(v);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    },
  };

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (id) => document.getElementById(id);

  const LESSONS = window.SCHOOL_INDEX || [];
  const TRACKS = window.SCHOOL_TRACKS || [];
  const UPDATES = window.SCHOOL_UPDATES || [];
  const CONFIG = window.SCHOOL_CONFIG || {};

  // Each track gets a Google color and an icon.
  const TRACK_STYLE = {
    "News & Updates": ["#4285f4", "📰"],
    Fundamentals: ["#34a853", "🧱"],
    "Bidding & Budgets": ["#fbbc05", "💰"],
    "Performance Max": ["#ea4335", "🚀"],
    "Search & Keywords": ["#4285f4", "🔎"],
    "Creative & Ad Copy": ["#ea4335", "✍️"],
    "Measurement & Tracking": ["#34a853", "📏"],
    "Audiences & AI": ["#fbbc05", "🎯"],
    "Case Studies": ["#4285f4", "🧪"],
  };
  const tc = (track) => (TRACK_STYLE[track] || ["#4285f4"])[0];

  // ---------- Dates ----------
  const localISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const TODAY = localISO(new Date());
  const YESTERDAY = localISO(new Date(Date.now() - 864e5));
  const parse = (iso) => new Date(iso + "T12:00:00");
  const fmtDate = (iso, opts = { month: "short", day: "numeric", year: "numeric" }) => parse(iso).toLocaleDateString(undefined, opts);
  const relDay = (iso) => (iso === TODAY ? "Today" : iso === YESTERDAY ? "Yesterday" : parse(iso).toLocaleDateString(undefined, { weekday: "long" }));
  const lessonUrl = (slug) => `lesson.html?l=${encodeURIComponent(slug)}`;

  // ---------- Shared chrome ----------
  function renderChrome() {
    const page = document.body.dataset.page;
    const header = $("site-header");
    if (header) {
      header.outerHTML = `
        <div class="stripe"></div>
        <header class="site-header">
          <div class="wrap">
            <a class="brand" href="index.html" aria-label="Google Ads School home"><span class="brand-mark"><i></i><i></i><i></i><i></i></span>Google Ads School</a>
            <nav class="nav" aria-label="Main">
              <a class="hide-sm" href="index.html#latest">Lessons</a>
              <a class="hide-sm" href="updates.html">What's new</a>
              <a class="hide-sm" href="resources.html">Where to learn</a>
              <button class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode">◐</button>
              <a class="cta" href="#join">Join free</a>
            </nav>
          </div>
        </header>`;
    }
    const footer = $("site-footer");
    if (footer) {
      footer.outerHTML = `
        <footer class="site-footer">
          <div class="wrap">
            <div>
              <a class="brand" href="index.html" style="font-size:16px"><span class="brand-mark"><i></i><i></i><i></i><i></i></span>Google Ads School</a>
              <p style="max-width:52ch;margin:10px 0 0">A free Google Ads class every morning, researched and written by Claude from the best sources in paid search. Independent and not affiliated with Google. Always verify changes in your own account.</p>
            </div>
            <nav aria-label="Footer">
              <a href="index.html#latest">Lessons</a>
              <a href="updates.html">What's new</a>
              <a href="resources.html">Where to learn</a>
              <a href="about.html">How it works</a>
              <a href="#join">Join free</a>
            </nav>
          </div>
        </footer>
        <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
    }
    // "Join free" goes to the page's own subscribe form when it has one.
    document.querySelectorAll('a[href="#join"]').forEach((a) => {
      if (!$("join")) a.href = "index.html#join";
    });
    if (page) document.querySelectorAll(".nav a").forEach((a) => a.getAttribute("href") === `${page}.html` && a.setAttribute("aria-current", "page"));
  }

  function toast(msg) {
    const t = $("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2600);
  }

  function initTheme() {
    const saved = store.get("gas.theme", null);
    if (saved) document.documentElement.dataset.theme = saved;
    const btn = $("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isDark =
        document.documentElement.dataset.theme === "dark" ||
        (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
      const next = isDark ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      store.set("gas.theme", next);
    });
  }

  // ---------- Community backend (remote API, or this-browser preview) ----------
  const api = CONFIG.apiBase ? CONFIG.apiBase.replace(/\/$/, "") : "";
  const community = {
    live: !!api,
    async reactions(slug) {
      if (api) return (await fetch(`${api}/reactions?slug=${encodeURIComponent(slug)}`)).json();
      const mine = store.get("gas.vote." + slug, null);
      return { agree: mine === "agree" ? 1 : 0, disagree: mine === "disagree" ? 1 : 0 };
    },
    async react(slug, vote) {
      store.set("gas.vote." + slug, vote);
      if (api) return (await fetch(`${api}/reactions`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug, vote }) })).json();
      return this.reactions(slug);
    },
    async comments(slug) {
      if (api) return (await fetch(`${api}/comments?slug=${encodeURIComponent(slug)}`)).json();
      return store.get("gas.comments." + slug, []);
    },
    async comment(slug, c) {
      if (api) return (await fetch(`${api}/comments`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug, ...c }) })).json();
      const saved = { ...c, at: new Date().toISOString() };
      store.set("gas.comments." + slug, [saved, ...store.get("gas.comments." + slug, [])]);
      return saved;
    },
    async subscribe(email, name) {
      if (api) {
        const r = await fetch(`${api}/subscribe`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, name }) });
        if (!r.ok) throw new Error("Subscribe failed");
        return;
      }
      store.set("gas.member", { email, name, at: new Date().toISOString() });
    },
  };

  // ---------- Subscribe forms ----------
  function subscribeBand() {
    return `
      <section class="subscribe" id="join" aria-labelledby="join-title">
        <div style="position:relative;z-index:1">
          <div class="eyebrow">Free membership</div>
          <h2 id="join-title">Become a Google Ads School member</h2>
          <p>One sharp lesson in your inbox every morning. What changed in Google Ads, what it means, and exactly what to do about it.</p>
          <ul>
            <li>Daily lesson at 9:30 AM, about 7 minutes to read</li>
            <li>Verified news from Google and top practitioners</li>
            <li>Worked examples, videos and a quick quiz</li>
          </ul>
        </div>
        <form class="sub-form" data-subscribe novalidate>
          <label for="sub-name">First name</label>
          <input id="sub-name" name="name" autocomplete="given-name" placeholder="Alex">
          <label for="sub-email">Email</label>
          <input id="sub-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required>
          <button class="btn" type="submit">Join for free →</button>
          <small>Free forever. One email a day. Unsubscribe anytime.</small>
        </form>
      </section>`;
  }

  function wireSubscribe(root = document) {
    root.querySelectorAll("form[data-subscribe]").forEach((form) => {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = form.email.value.trim();
        const name = form.name ? form.name.value.trim() : "";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          form.email.focus();
          toast("Please enter a valid email address");
          return;
        }
        try {
          await community.subscribe(email, name);
          form.innerHTML = `<div class="ok"><b>Welcome to the school${name ? ", " + esc(name) : ""}! 🎉</b><br>${
            community.live ? "Your first lesson arrives tomorrow morning." : "You're on the list. (Preview mode: emails start once the school goes online.)"
          }</div>`;
        } catch {
          toast("Something went wrong. Please try again.");
        }
      });
    });
  }

  // ---------- Cards ----------
  function card(l) {
    return `
      <a class="card" href="${lessonUrl(l.slug)}" style="--tc:${tc(l.track)}">
        <div class="badges">
          ${l.date === TODAY ? '<span class="badge new">NEW</span>' : ""}
          <span class="badge track" style="--tc:${tc(l.track)}">${esc(l.track)}</span>
          <span class="badge">${esc(l.level)}</span>
        </div>
        <h3>${esc(l.title)}</h3>
        <p>${esc(l.summary)}</p>
        <div class="meta"><span>${fmtDate(l.date)} · ${l.minutes} min</span><span class="read">Read →</span></div>
      </a>`;
  }

  function updatesList(days) {
    return days
      .map(
        (d) => `
      <div class="day ${d.date === TODAY ? "today" : ""}">
        <div class="day-label"><b>${relDay(d.date)}</b><span>${fmtDate(d.date, { month: "long", day: "numeric", year: "numeric" })}</span></div>
        <ul>${d.items
          .map(
            (i) => `
          <li>
            <span class="tag-${i.type}">${i.type === "added" ? "Added" : "Updated"}</span>
            <a href="${lessonUrl(i.slug)}">${esc(i.title)}</a>
            <small>${esc(i.track)}${i.note ? " · " + esc(i.note) : ""}</small>
          </li>`
          )
          .join("")}</ul>
      </div>`
      )
      .join("");
  }

  // ---------- Index ----------
  function renderIndex() {
    const latest = LESSONS[0];
    const lastUpdate = UPDATES[0];
    if (lastUpdate) {
      const day = lastUpdate.date === TODAY ? "today" : lastUpdate.date === YESTERDAY ? "yesterday" : "on " + fmtDate(lastUpdate.date);
      const added = lastUpdate.items.filter((i) => i.type === "added").length;
      const updated = lastUpdate.items.length - added;
      const parts = [added && `${added} new lesson${added > 1 ? "s" : ""}`, updated && `${updated} updated`].filter(Boolean);
      $("live").textContent = `Updated ${day} · ${parts.join(", ")}`;
    } else {
      $("live").textContent = "First class publishes at 9:30 AM";
    }
    $("proof-lessons").textContent = LESSONS.length;
    $("proof-tracks").textContent = new Set(LESSONS.map((l) => l.track)).size;

    const featured = $("featured");
    if (latest) {
      featured.href = lessonUrl(latest.slug);
      featured.innerHTML = `
        <div class="kicker">
          <span class="eyebrow">${latest.date === TODAY ? "Today's lesson" : "Latest lesson"} · ${fmtDate(latest.date, { month: "short", day: "numeric" })}</span>
          <span class="badge">${latest.minutes} min read</span>
        </div>
        <div class="badges"><span class="badge track" style="--tc:${tc(latest.track)}">${esc(latest.track)}</span><span class="badge">${esc(latest.level)}</span></div>
        <h2>${esc(latest.title)}</h2>
        <p>${esc(latest.summary)}</p>
        <div class="inside"><span>What changed</span><span>Worked example</span><span>Expert debate</span><span>Videos &amp; quiz</span></div>
        <div class="go"><span>Start the lesson</span><span>→</span></div>`;
      $("hero-read").href = lessonUrl(latest.slug);
    } else {
      featured.outerHTML = `<div class="empty">No lessons yet. The first class publishes at 9:30 AM.</div>`;
    }

    $("updates").innerHTML = UPDATES.length ? updatesList(UPDATES.slice(0, 3)) : `<div class="empty">Nothing here yet.</div>`;

    // Lessons grid with track/level/search filters.
    const state = { track: "All", level: "All", q: "" };
    const counts = Object.fromEntries(TRACKS.map((t) => [t, LESSONS.filter((l) => l.track === t).length]));
    const chips = $("track-chips");
    function drawChips() {
      chips.innerHTML = ["All", ...TRACKS.filter((t) => counts[t])]
        .map((t) => `<button class="chip" aria-pressed="${t === state.track}" data-track="${esc(t)}">${esc(t)}${t === "All" ? "" : ` · ${counts[t]}`}</button>`)
        .join("");
    }
    chips.addEventListener("click", (e) => {
      const b = e.target.closest("[data-track]");
      if (!b) return;
      state.track = b.dataset.track;
      drawChips();
      draw();
    });
    $("level").addEventListener("change", (e) => {
      state.level = e.target.value;
      draw();
    });
    $("search").addEventListener("input", (e) => {
      state.q = e.target.value.toLowerCase().trim();
      draw();
    });
    function draw() {
      const list = LESSONS.filter(
        (l) =>
          (state.track === "All" || l.track === state.track) &&
          (state.level === "All" || l.level === state.level) &&
          (!state.q || [l.title, l.summary, l.track, ...l.tags].join(" ").toLowerCase().includes(state.q))
      );
      $("grid").innerHTML = list.length ? list.map(card).join("") : `<div class="empty">No lessons match those filters yet. New ones arrive every morning.</div>`;
    }
    drawChips();
    draw();

    // Track tiles jump to the filtered grid.
    $("tracks").innerHTML = TRACKS.map((t) => {
      const [color, icon] = TRACK_STYLE[t] || ["#4285f4", "•"];
      const n = counts[t] || 0;
      return `<button class="track-tile" style="--tc:${color}" data-track="${esc(t)}" ${n ? "" : "disabled"}>
        <span class="dot">${icon}</span><b>${esc(t)}</b><small>${n ? `${n} lesson${n > 1 ? "s" : ""}` : "Coming soon"}</small></button>`;
    }).join("");
    $("tracks").addEventListener("click", (e) => {
      const b = e.target.closest("[data-track]");
      if (!b || b.disabled) return;
      state.track = b.dataset.track;
      drawChips();
      draw();
      $("latest").scrollIntoView({ behavior: "smooth" });
    });

    // Top resources.
    const top = (window.SCHOOL_RESOURCES || []).flatMap((g) => g.items.filter((i) => i.top).map((i) => ({ ...i, color: g.color })));
    $("top-resources").innerHTML = top.map(resourceCard).join("");

    $("join-slot").outerHTML = subscribeBand();
    wireSubscribe();
  }

  function resourceCard(r) {
    return `<a class="res" href="${esc(r.url)}" target="_blank" rel="noopener" style="--tc:${r.color}">
      <span class="kind">${esc(r.kind)}</span><b>${esc(r.name)} ↗</b><p>${esc(r.desc)}</p><span class="why">Why: ${esc(r.why)}</span></a>`;
  }

  // ---------- Resources page ----------
  function renderResources() {
    $("resource-groups").innerHTML = (window.SCHOOL_RESOURCES || [])
      .map(
        (g) => `
      <section class="res-group" style="--tc:${g.color}">
        <h2>${esc(g.group)}</h2>
        <p>${esc(g.blurb)}</p>
        <div class="resources">${g.items.map((i) => resourceCard({ ...i, color: g.color })).join("")}</div>
      </section>`
      )
      .join("");
    $("join-slot").outerHTML = subscribeBand();
    wireSubscribe();
  }

  // ---------- Updates page ----------
  function renderUpdates() {
    $("updates").innerHTML = UPDATES.length ? updatesList(UPDATES) : `<div class="empty">Nothing here yet.</div>`;
    $("join-slot").outerHTML = subscribeBand();
    wireSubscribe();
  }

  function renderAbout() {
    $("join-slot").outerHTML = subscribeBand();
    wireSubscribe();
  }

  // ---------- Lesson page ----------
  // Custom fenced blocks: ```youtube (ID | Title | Channel per line) and ```quiz (JSON array).
  function extractBlocks(md) {
    const blocks = [];
    const out = md.replace(/```(youtube|quiz)\n([\s\S]*?)```/g, (_, kind, content) => {
      blocks.push({ kind, content });
      return `\n<div data-block="${blocks.length - 1}"></div>\n`;
    });
    return { md: out, blocks };
  }

  function renderVideos(content) {
    const items = content
      .split("\n")
      .filter((l) => l.trim())
      .map((line) => {
        const [id, title = "Watch on YouTube", channel = ""] = line.split("|").map((s) => s.trim());
        return `
        <div class="video">
          <button class="video-frame" data-yt="${esc(id)}" aria-label="Play: ${esc(title)}">
            <img src="https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg" alt="" loading="lazy">
            <span class="play"><span>▶</span></span>
          </button>
          <div class="video-info">
            <b>${esc(title)}</b>
            <span>${esc(channel)} · <a href="https://www.youtube.com/watch?v=${esc(id)}" target="_blank" rel="noopener">YouTube ↗</a></span>
          </div>
        </div>`;
      })
      .join("");
    return `<div class="videos">${items}</div>`;
  }

  function renderQuiz(content) {
    let qs;
    try {
      qs = JSON.parse(content);
    } catch {
      return "";
    }
    // Shuffle option order (stable per question) so the right answer isn't always in the same spot.
    const order = (q) => {
      let seed = [...q.q].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
      const idx = q.options.map((_, j) => j);
      for (let k = idx.length - 1; k > 0; k--) {
        seed = (seed * 1103515245 + 12345) >>> 0;
        const r = seed % (k + 1);
        [idx[k], idx[r]] = [idx[r], idx[k]];
      }
      return idx;
    };
    return `<div class="quiz" data-total="${qs.length}">${qs
      .map(
        (q, i) => `
      <div class="quiz-q" data-answer="${q.answer}">
        <p>${i + 1}. ${esc(q.q)}</p>
        ${order(q).map((j) => `<button class="quiz-opt" data-i="${j}">${esc(q.options[j])}</button>`).join("")}
        ${q.why ? `<p class="quiz-why">${esc(q.why)}</p>` : ""}
      </div>`
      )
      .join("")}<div class="quiz-score"></div></div>`;
  }

  // Group content under special h2s into styled panels, and turn [!TAG] blockquotes into callouts.
  function enhance(root) {
    const sections = { "in 30 seconds": "tldr", "where the experts disagree": "debate" };
    [...root.querySelectorAll("h2")].forEach((h) => {
      const cls = sections[h.textContent.trim().toLowerCase()];
      if (!cls) return;
      const box = document.createElement("div");
      box.className = cls;
      h.before(box);
      let n = h;
      while (n && !(n !== h && n.tagName === "H2") && n.tagName !== "HR") {
        const next = n.nextElementSibling;
        box.appendChild(n);
        n = next;
      }
    });
    root.querySelectorAll("blockquote").forEach((bq) => {
      const first = bq.querySelector("p");
      const m = first && first.innerHTML.match(/^\s*\[!(TIP|EXAMPLE|WARNING|NOTE|TRY IT)\]\s*(<br>)?/i);
      if (!m) return;
      const kind = m[1].toUpperCase();
      const cls = { TIP: "tip", EXAMPLE: "example", WARNING: "warning", NOTE: "note", "TRY IT": "tip" }[kind];
      const label = { TIP: "Pro tip", EXAMPLE: "Example", WARNING: "Watch out", NOTE: "Good to know", "TRY IT": "Try it" }[kind];
      first.innerHTML = first.innerHTML.slice(m[0].length);
      if (!first.innerHTML.trim()) first.remove();
      const div = document.createElement("div");
      div.className = `callout ${cls}`;
      div.innerHTML = `<div class="callout-title">${label}</div>${bq.innerHTML}`;
      bq.replaceWith(div);
    });
    // "Our take:" paragraphs become a highlighted verdict.
    root.querySelectorAll("p").forEach((p) => {
      if (/^\s*<strong>Our take:?<\/strong>/i.test(p.innerHTML)) {
        const div = document.createElement("div");
        div.className = "callout take";
        div.innerHTML = `<div class="callout-title">Our take</div><p>${p.innerHTML.replace(/^\s*<strong>Our take:?<\/strong>:?\s*/i, "")}</p>`;
        p.replaceWith(div);
      }
    });
    root.querySelectorAll("a[href^='http']").forEach((a) => {
      a.target = "_blank";
      a.rel = "noopener";
    });
    root.querySelectorAll("table").forEach((t) => t.setAttribute("tabindex", "0"));
  }

  function related(lesson) {
    return LESSONS.filter((l) => l.slug !== lesson.slug)
      .map((l) => ({ l, s: (l.track === lesson.track ? 2 : 0) + l.tags.filter((t) => lesson.tags.includes(t)).length }))
      .sort((a, b) => b.s - a.s || b.l.date.localeCompare(a.l.date))
      .slice(0, 3)
      .map((x) => x.l);
  }

  const AVATAR_COLORS = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];
  function commentHtml(c) {
    const name = c.name || "Anonymous";
    const color = AVATAR_COLORS[[...name].reduce((a, ch) => a + ch.charCodeAt(0), 0) % 4];
    const when = c.at ? new Date(c.at).toLocaleDateString(undefined, { month: "short", day: "numeric" }) : "";
    return `<li class="comment"><span class="avatar" style="--ac:${color}">${esc(name[0].toUpperCase())}</span>
      <div><div class="who"><b>${esc(name)}</b>${c.stance ? `<span class="pill ${esc(c.stance)}">${esc(c.stance)}</span>` : ""}<time>${esc(when)}</time></div>
      <p>${esc(c.text)}</p></div></li>`;
  }

  async function renderCommunity(lesson) {
    const box = $("community");
    box.innerHTML = `
      <div class="take-box">
        <div class="eyebrow">Your take</div>
        <h2>Do you agree with this lesson?</h2>
        <p>Vote, then tell everyone why. The best disagreements make the next lesson better.</p>
        <div class="vote-row">
          <button class="vote agree" data-vote="agree" aria-pressed="false"><span class="emoji">👍</span> Agree <span class="count" id="n-agree">0</span></button>
          <button class="vote disagree" data-vote="disagree" aria-pressed="false"><span class="emoji">👎</span> Disagree <span class="count" id="n-disagree">0</span></button>
        </div>
        <div class="meter" aria-hidden="true"><i id="meter" style="width:50%"></i></div>
        <div class="meter-label"><span id="pct-agree">No votes yet</span><span id="pct-disagree"></span></div>
      </div>
      <div class="comments">
        <h3>Discussion <span id="n-comments" style="color:var(--muted);font-weight:500"></span></h3>
        <form class="comment-form" id="comment-form" novalidate>
          <div class="row">
            <input name="name" placeholder="Your name" maxlength="60" autocomplete="name" aria-label="Your name">
            <div class="stance" role="group" aria-label="Your stance">
              <button type="button" data-v="agree" aria-pressed="false">👍 Agree</button>
              <button type="button" data-v="mixed" aria-pressed="false">🤔 Mixed</button>
              <button type="button" data-v="disagree" aria-pressed="false">👎 Disagree</button>
            </div>
          </div>
          <textarea name="text" placeholder="What's your experience? Share a test, a result, or why you see it differently…" maxlength="2000" aria-label="Your comment"></textarea>
          <div class="actions"><small>Be specific and kind. Numbers beat opinions.</small><button class="btn" type="submit">Post comment</button></div>
        </form>
        <ul class="comment-list" id="comment-list"></ul>
        ${community.live ? "" : `<div class="preview-note">Preview mode: votes and comments are saved in this browser only. They'll be shared with everyone once the school goes online.</div>`}
      </div>`;

    const paint = (r, mine) => {
      const total = r.agree + r.disagree;
      $("n-agree").textContent = r.agree;
      $("n-disagree").textContent = r.disagree;
      const pct = total ? Math.round((r.agree / total) * 100) : 50;
      $("meter").style.width = pct + "%";
      $("pct-agree").textContent = total ? `${pct}% agree` : "No votes yet. Be the first.";
      $("pct-disagree").textContent = total ? `${100 - pct}% disagree · ${total} vote${total > 1 ? "s" : ""}` : "";
      box.querySelectorAll(".vote").forEach((b) => b.setAttribute("aria-pressed", b.dataset.vote === mine));
    };
    let mine = store.get("gas.vote." + lesson.slug, null);
    community.reactions(lesson.slug).then((r) => paint(r, mine)).catch(() => {});
    box.querySelectorAll(".vote").forEach((b) =>
      b.addEventListener("click", async () => {
        mine = mine === b.dataset.vote ? null : b.dataset.vote;
        try {
          paint(await community.react(lesson.slug, mine), mine);
          if (mine) toast("Thanks! Now tell us why below 👇");
        } catch {
          toast("Couldn't save your vote. Try again.");
        }
      })
    );

    const form = $("comment-form");
    let stance = null;
    form.querySelector(".stance").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      stance = stance === b.dataset.v ? null : b.dataset.v;
      form.querySelectorAll(".stance button").forEach((x) => x.setAttribute("aria-pressed", x.dataset.v === stance));
    });
    const list = $("comment-list");
    const setCount = (n) => ($("n-comments").textContent = n ? `· ${n}` : "");
    let all = [];
    community.comments(lesson.slug).then((cs) => {
      all = cs || [];
      list.innerHTML = all.map(commentHtml).join("");
      setCount(all.length);
    }).catch(() => {});
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = form.text.value.trim();
      if (text.length < 3) {
        form.text.focus();
        toast("Write a few words first");
        return;
      }
      try {
        const saved = await community.comment(lesson.slug, { name: form.name.value.trim() || "Anonymous", stance, text });
        all = [saved, ...all];
        list.insertAdjacentHTML("afterbegin", commentHtml(saved));
        setCount(all.length);
        form.text.value = "";
        toast("Comment posted");
      } catch {
        toast("Couldn't post your comment. Try again.");
      }
    });
  }

  function renderLesson() {
    const slug = new URLSearchParams(location.search).get("l");
    const pos = LESSONS.findIndex((l) => l.slug === slug);
    const main = $("lesson");
    if (pos < 0) {
      main.innerHTML = `<div class="empty" style="margin:48px 0">Lesson not found. <a href="index.html">See today's lesson</a></div>`;
      return;
    }

    window.__lesson = (lesson) => {
      document.title = `${lesson.title} · Google Ads School`;
      const { md, blocks } = extractBlocks(lesson.body);
      const article = $("article");
      article.innerHTML = window.marked.parse(md, { gfm: true });
      article.querySelectorAll("[data-block]").forEach((el) => {
        const b = blocks[+el.dataset.block];
        el.outerHTML = b.kind === "youtube" ? renderVideos(b.content) : renderQuiz(b.content);
      });
      enhance(article);

      const updated = lesson.updated && lesson.updated !== lesson.date ? ` · <b>Updated ${fmtDate(lesson.updated)}</b>` : "";
      $("head").innerHTML = `
        <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="index.html#latest">${esc(lesson.track)}</a></nav>
        <div class="badges" style="margin-top:18px">
          ${lesson.date === TODAY ? '<span class="badge new">NEW TODAY</span>' : ""}
          <span class="badge track" style="--tc:${tc(lesson.track)}">${esc(lesson.track)}</span>
          <span class="badge">${esc(lesson.level)}</span>
          ${lesson.tags.map((t) => `<span class="badge">#${esc(t)}</span>`).join("")}
        </div>
        <h1>${esc(lesson.title)}</h1>
        <p class="summary">${esc(lesson.summary)}</p>
        <div class="meta"><span>Published <b>${fmtDate(lesson.date, { weekday: "short", month: "long", day: "numeric", year: "numeric" })}</b>${updated}</span><span>${lesson.minutes} min read</span><button class="share" id="share">🔗 Copy link</button></div>`;
      $("share").onclick = async () => {
        try {
          await navigator.clipboard.writeText(location.href);
          toast("Link copied");
        } catch {
          toast("Copy the address bar to share");
        }
      };

      // Table of contents with scroll-spy.
      const heads = [...article.querySelectorAll("h2")];
      heads.forEach((h, i) => (h.id = "s" + i + "-" + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)));
      const toc = $("toc-links");
      toc.innerHTML = heads.map((h) => `<a href="#${h.id}">${esc(h.textContent)}</a>`).join("") + `<a href="#community">Your take &amp; discussion</a>`;
      const tocLinks = [...toc.querySelectorAll("a")];
      if ("IntersectionObserver" in window && heads.length) {
        const io = new IntersectionObserver(
          (entries) => entries.forEach((en) => en.isIntersecting && tocLinks.forEach((a) => a.classList.toggle("active", a.hash === "#" + en.target.id))),
          { rootMargin: "0px 0px -70% 0px" }
        );
        heads.forEach((h) => io.observe(h));
      }

      renderCommunity(lesson);

      const rel = related(lesson);
      $("related").innerHTML = rel.length
        ? `<div class="section-head"><div><div class="eyebrow">Keep learning</div><h2>Where to go next</h2></div><a class="link-arrow" href="index.html#latest">Browse every lesson →</a></div>
           <div class="grid">${rel.map(card).join("")}</div>`
        : "";
      const newer = LESSONS[pos - 1];
      const older = LESSONS[pos + 1];
      $("pager").innerHTML =
        (older ? `<a href="${lessonUrl(older.slug)}"><span>← Previous lesson</span>${esc(older.title)}</a>` : "<div></div>") +
        (newer ? `<a class="next" href="${lessonUrl(newer.slug)}"><span>Next lesson →</span>${esc(newer.title)}</a>` : "");
      $("join-slot").outerHTML = subscribeBand();
      wireSubscribe();
      if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
    };

    // Reading progress bar.
    const bar = $("progress");
    const onScroll = () => {
      const art = $("article");
      const total = art.offsetTop + art.offsetHeight - innerHeight;
      bar.style.width = Math.min(100, Math.max(0, (scrollY / Math.max(total, 1)) * 100)) + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });

    const s = document.createElement("script");
    s.src = `data/lessons/${encodeURIComponent(slug)}.js`;
    s.onerror = () => (main.innerHTML = `<div class="empty" style="margin:48px 0">Couldn't load this lesson.</div>`);
    document.body.appendChild(s);
  }

  // Video and quiz interactions.
  document.addEventListener("click", (e) => {
    const yt = e.target.closest(".video-frame[data-yt]");
    if (yt && !yt.querySelector("iframe")) {
      yt.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(yt.dataset.yt)}?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="YouTube video"></iframe>`;
      return;
    }
    const opt = e.target.closest(".quiz-opt");
    if (opt && !opt.disabled) {
      const q = opt.closest(".quiz-q");
      const answer = +q.dataset.answer;
      q.querySelectorAll(".quiz-opt").forEach((o) => {
        o.disabled = true;
        if (+o.dataset.i === answer) o.classList.add("correct");
      });
      const right = +opt.dataset.i === answer;
      if (!right) opt.classList.add("wrong");
      q.classList.add("answered");
      q.dataset.right = right;
      const quiz = q.closest(".quiz");
      const done = quiz.querySelectorAll(".quiz-q.answered");
      if (done.length === +quiz.dataset.total) {
        const score = [...done].filter((x) => x.dataset.right === "true").length;
        const el = quiz.querySelector(".quiz-score");
        el.textContent = `You scored ${score}/${quiz.dataset.total}. ${score === +quiz.dataset.total ? "Perfect! 🎯" : "Scroll up to review, then tell us your take below."}`;
        el.style.display = "block";
      }
    }
  });

  renderChrome();
  initTheme();
  const page = document.body.dataset.page;
  ({ index: renderIndex, lesson: renderLesson, resources: renderResources, updates: renderUpdates, about: renderAbout }[page] || (() => {}))();
})();
