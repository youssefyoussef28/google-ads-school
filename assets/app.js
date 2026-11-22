// Google Ads School: the inner pages (lesson.html, updates.html, resources.html, about.html).
// Writes the shared nav and footer, then renders the page from data/index.js (SCHOOL_INDEX,
// SCHOOL_TRACKS, SCHOOL_UPDATES), data/lessons/<slug>.js, assets/resources.js and assets/config.js.
// The kit's system.js (loaded after this file) then runs the nav, the forms and the motion layer.

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

  // Each track: a Google colour and a glyph from assets/icons.
  const TRACK_STYLE = {
    "News & Updates": ["#4285f4", "newspaper"],
    Fundamentals: ["#34a853", "blocks"],
    "Bidding & Budgets": ["#f9ab00", "coins"],
    "Performance Max": ["#ea4335", "rocket"],
    "Search & Keywords": ["#4285f4", "search"],
    "Creative & Ad Copy": ["#ea4335", "pen-line"],
    "Measurement & Tracking": ["#34a853", "ruler"],
    "Audiences & AI": ["#f9ab00", "target"],
    "Case Studies": ["#4285f4", "flask-conical"],
  };
  const tstyle = (t) => TRACK_STYLE[t] || ["#4285f4", "book-open"];

  // ---------- dates
  const localISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const TODAY = localISO(new Date());
  const YESTERDAY = localISO(new Date(Date.now() - 864e5));
  const parse = (iso) => new Date(iso + "T12:00:00");
  const fmtDate = (iso, opts = { month: "short", day: "numeric", year: "numeric" }) => parse(iso).toLocaleDateString("en", opts);
  const relDay = (iso) => (iso === TODAY ? "Today" : iso === YESTERDAY ? "Yesterday" : parse(iso).toLocaleDateString("en", { weekday: "long" }));
  const lessonUrl = (slug) => `lesson.html?l=${encodeURIComponent(slug)}`;
  const todayUrl = LESSONS[0] ? lessonUrl(LESSONS[0].slug) : "index.html";

  // ---------- the shared nav and footer (the kit's markup, as on the home page)
  function renderChrome() {
    const page = document.body.dataset.page;
    const cur = (p) => (page === p ? ' aria-current="page"' : "");
    const header = $("site-header");
    if (header) {
      header.outerHTML = `
        <header class="nav nav--centre">
          <div class="wrap nav__bar">
            <a class="skip-link" href="#top">Skip to content</a>
            <a class="nav__logo" href="index.html"><span class="gs-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>Google Ads School</a>
            <nav class="nav__links" aria-label="Main">
              <div class="nav__item"><a class="nav__link" href="index.html#lessons">Latest</a></div>
              <div class="nav__item"><a class="nav__link" href="updates.html"${cur("updates")}>Every lesson</a></div>
              <div class="nav__item"><a class="nav__link" href="resources.html"${cur("resources")}>Where to learn</a></div>
              <div class="nav__item"><a class="nav__link" href="about.html"${cur("about")}>How it works</a></div>
            </nav>
            <div class="nav__actions"><a class="btn btn--primary" href="${todayUrl}">Read today's lesson</a></div>
            <button class="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
            </button>
          </div>
        </header>`;
    }
    const footer = $("site-footer");
    if (footer) {
      footer.outerHTML = `
        <footer class="footer site-foot ground-inverse" id="contact">
          <div class="wrap">
            <div class="grid">
              <div class="span-6 stack-4">
                <a class="nav__logo" href="index.html"><span class="gs-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>Google Ads School</a>
                <form class="form gs-sub" action="mailto:hello@googleadsschool.example" method="post" enctype="text/plain" data-endpoint="${esc(CONFIG.subscribeEndpoint || "")}" data-sent="You're subscribed. The next lesson arrives tomorrow morning." novalidate>
                  <div class="field"><label for="f-email">Email for the daily lesson</label>
                    <input id="f-email" name="email" type="email" autocomplete="email" inputmode="email" required aria-describedby="f-email-err">
                    <p class="field__error" id="f-email-err" hidden>Write an email address with an @, like name@example.com.</p></div>
                  <div class="btn-row"><button class="btn btn--secondary" type="submit">Subscribe</button></div>
                  <p class="form__status" role="status" data-form-status></p>
                </form>
              </div>
              <div class="span-2 footer__col"><h3>Lessons</h3><ul><li><a href="index.html#lessons">Latest</a></li><li><a href="updates.html">Every lesson</a></li></ul></div>
              <div class="span-2 footer__col"><h3>School</h3><ul><li><a href="about.html">How it works</a></li><li><a href="resources.html">Where to learn</a></li></ul></div>
              <div class="span-2 footer__col"><h3>View</h3><ul><li><button class="gs-theme" type="button" data-theme-toggle>Dark</button></li></ul></div>
            </div>
            <div class="footer__legal">
              <span>&copy; 2026 Google Ads School. Independent, not affiliated with Google.</span>
              <span>Product names and logos are trademarks of their owners.</span>
            </div>
          </div>
        </footer>
        <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
    }
  }

  function toast(msg) {
    const t = $("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // The tone switch (theme.js sets the tone before the first paint).
  function initTone() {
    const btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;
    const paint = () => (btn.textContent = document.documentElement.dataset.tone === "dark" ? "Light" : "Dark");
    paint();
    btn.addEventListener("click", () => {
      const dark = document.documentElement.dataset.tone !== "dark";
      if (dark) document.documentElement.dataset.tone = "dark";
      else delete document.documentElement.dataset.tone;
      try {
        localStorage.setItem("gas.tone", dark ? "dark" : "light");
      } catch {}
      paint();
    });
  }

  // ---------- community backend (remote API, or this-browser preview)
  const api = CONFIG.apiBase ? CONFIG.apiBase.replace(/\/$/, "") : "";
  const post = (path, body) => fetch(`${api}/${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).then((r) => r.json());
  const community = {
    live: !!api,
    async reactions(slug) {
      if (api) return (await fetch(`${api}/reactions?slug=${encodeURIComponent(slug)}`)).json();
      const mine = store.get("gas.vote." + slug, null);
      return { agree: mine === "agree" ? 1 : 0, disagree: mine === "disagree" ? 1 : 0 };
    },
    async react(slug, vote) {
      store.set("gas.vote." + slug, vote);
      return api ? post("reactions", { slug, vote }) : this.reactions(slug);
    },
    async comments(slug) {
      if (api) return (await fetch(`${api}/comments?slug=${encodeURIComponent(slug)}`)).json();
      return store.get("gas.comments." + slug, []);
    },
    async comment(slug, c) {
      if (api) return post("comments", { slug, ...c });
      const saved = { ...c, at: new Date().toISOString() };
      store.set("gas.comments." + slug, [saved, ...store.get("gas.comments." + slug, [])]);
      return saved;
    },
  };

  // ---------- lesson cards (the same card as the home page)
  function card(l) {
    const [color, icon] = tstyle(l.track);
    return `
      <a class="card card--open card--row span-4 gs-lesson" href="${lessonUrl(l.slug)}" style="--tc:${color}">
        <div class="panel gs-cover"><span class="gs-cover__icon" style="-webkit-mask-image:url(assets/icons/ui-${icon}.svg);mask-image:url(assets/icons/ui-${icon}.svg)"></span><span class="gs-cover__track">${esc(l.track)}</span></div>
        <h3>${esc(l.title.split(":")[0])}</h3>
        <p>${l.date === TODAY ? '<span class="gs-new">New</span>' : ""}${fmtDate(l.date, { month: "short", day: "numeric" })} · ${esc(l.level)} · ${l.minutes} min</p>
      </a>`;
  }

  function updatesList(days) {
    return days
      .map(
        (d) => `
      <div class="day">
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

  // ---------- every lesson + the changelog
  function renderUpdates() {
    const state = { track: "All", level: "All", q: "" };
    const counts = Object.fromEntries(TRACKS.map((t) => [t, LESSONS.filter((l) => l.track === t).length]));
    const chips = $("track-chips");
    const drawChips = () =>
      (chips.innerHTML = ["All", ...TRACKS.filter((t) => counts[t])]
        .map((t) => `<button class="chip" type="button" aria-pressed="${t === state.track}" data-track="${esc(t)}">${esc(t)}${t === "All" ? "" : ` · ${counts[t]}`}</button>`)
        .join(""));
    const draw = () => {
      const list = LESSONS.filter(
        (l) =>
          (state.track === "All" || l.track === state.track) &&
          (state.level === "All" || l.level === state.level) &&
          (!state.q || [l.title, l.summary, l.track, ...l.tags].join(" ").toLowerCase().includes(state.q))
      );
      $("grid").innerHTML = list.length ? list.map(card).join("") : `<div class="empty">No lessons match those filters yet. A new one is published every morning.</div>`;
      $("count").textContent = `${list.length} of ${LESSONS.length} lessons`;
    };
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
    const fromHash = decodeURIComponent(location.hash.slice(1));
    if (counts[fromHash]) state.track = fromHash;
    drawChips();
    draw();
    $("updates").innerHTML = UPDATES.length ? updatesList(UPDATES) : `<div class="empty">Nothing here yet.</div>`;
  }

  // ---------- where to learn
  function renderResources() {
    $("resource-groups").innerHTML = (window.SCHOOL_RESOURCES || [])
      .map(
        (g) => `
      <section class="res-group" style="--tc:${g.color}" aria-label="${esc(g.group)}">
        <h2>${esc(g.group)}</h2>
        <p>${esc(g.blurb)}</p>
        <div class="grid">${g.items
          .map(
            (r) => `
          <a class="card res span-4" href="${esc(r.url)}" target="_blank" rel="noopener">
            <span class="kind">${esc(r.kind)}</span><b>${esc(r.name)} ↗</b><p>${esc(r.desc)}</p><span class="why">Why: ${esc(r.why)}</span>
          </a>`
          )
          .join("")}</div>
      </section>`
      )
      .join("");
  }

  // ---------- a lesson
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
          <button class="video-frame" type="button" data-yt="${esc(id)}" aria-label="Play: ${esc(title)}">
            <img src="https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg" alt="" loading="lazy">
            <span class="play"><span>▶</span></span>
          </button>
          <div class="video-info">
            <b>${esc(title)}</b>
            <span>${esc(channel)} · <a href="https://www.youtube.com/watch?v=${esc(id)}" target="_blank" rel="noopener">Open on YouTube</a></span>
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
        ${order(q).map((j) => `<button class="quiz-opt" type="button" data-i="${j}">${esc(q.options[j])}</button>`).join("")}
        ${q.why ? `<p class="quiz-why">${esc(q.why)}</p>` : ""}
      </div>`
      )
      .join("")}<div class="quiz-score" role="status"></div></div>`;
  }

  // Group content under special h2s into panels, and turn [!TAG] blockquotes into callouts.
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

  const AVATAR_COLORS = ["#4285f4", "#ea4335", "#f9ab00", "#34a853"];
  function commentHtml(c) {
    const name = c.name || "Anonymous";
    const color = AVATAR_COLORS[[...name].reduce((a, ch) => a + ch.charCodeAt(0), 0) % 4];
    const when = c.at ? new Date(c.at).toLocaleDateString("en", { month: "short", day: "numeric" }) : "";
    return `<li class="comment"><span class="avatar" style="--ac:${color}" aria-hidden="true">${esc(name[0].toUpperCase())}</span>
      <div><div class="who"><b>${esc(name)}</b>${c.stance ? `<span class="pill-s ${esc(c.stance)}">${esc(c.stance)}</span>` : ""}<time>${esc(when)}</time></div>
      <p>${esc(c.text)}</p></div></li>`;
  }

  function renderCommunity(lesson) {
    const box = $("community");
    box.innerHTML = `
      <div class="take-box">
        <h2>Do you agree with this lesson?</h2>
        <p>Vote, then say why below. A good disagreement can change the next lesson.</p>
        <div class="vote-row">
          <button class="vote agree" type="button" data-vote="agree" aria-pressed="false">👍 Agree <span class="count" id="n-agree">0</span></button>
          <button class="vote disagree" type="button" data-vote="disagree" aria-pressed="false">👎 Disagree <span class="count" id="n-disagree">0</span></button>
        </div>
        <div class="meter" aria-hidden="true"><i id="meter" style="width:50%"></i></div>
        <div class="meter-label"><span id="pct-agree">No votes yet</span><span id="pct-disagree"></span></div>
      </div>
      <div class="comments">
        <h3>Discussion <span id="n-comments" class="muted"></span></h3>
        <form class="comment-form" id="comment-form" novalidate>
          <div class="row">
            <div><label for="c-name">Your name</label><input id="c-name" name="name" maxlength="60" autocomplete="name"></div>
            <div><span class="comment-form__label" id="c-stance-l" style="font-size:14px;font-weight:500">Your stance</span>
              <div class="stance" role="group" aria-labelledby="c-stance-l">
                <button type="button" data-v="agree" aria-pressed="false">Agree</button>
                <button type="button" data-v="mixed" aria-pressed="false">Mixed</button>
                <button type="button" data-v="disagree" aria-pressed="false">Disagree</button>
              </div></div>
          </div>
          <div><label for="c-text">Your comment</label><textarea id="c-text" name="text" maxlength="2000"></textarea></div>
          <div class="actions"><small>Share a test, a result or a reason. Numbers help.</small><button class="btn btn--secondary" type="submit">Post comment</button></div>
        </form>
        <ul class="comment-list" id="comment-list"></ul>
        ${community.live ? "" : `<p class="preview-note">Preview: votes and comments are saved in this browser only until the school has a comment service.</p>`}
      </div>`;

    const paint = (r, mine) => {
      const total = r.agree + r.disagree;
      $("n-agree").textContent = r.agree;
      $("n-disagree").textContent = r.disagree;
      const pct = total ? Math.round((r.agree / total) * 100) : 50;
      $("meter").style.width = pct + "%";
      $("pct-agree").textContent = total ? `${pct}% agree` : "No votes yet";
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
          if (mine) toast("Vote saved. Say why in the discussion.");
        } catch {
          toast("The vote didn't save. Try again.");
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
    community
      .comments(lesson.slug)
      .then((cs) => {
        all = cs || [];
        list.innerHTML = all.map(commentHtml).join("");
        setCount(all.length);
      })
      .catch(() => {});
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = form.text.value.trim();
      if (text.length < 3) {
        form.text.focus();
        toast("Write a few words first");
        return;
      }
      try {
        const saved = await community.comment(lesson.slug, { name: form.elements.name.value.trim() || "Anonymous", stance, text });
        all = [saved, ...all];
        list.insertAdjacentHTML("afterbegin", commentHtml(saved));
        setCount(all.length);
        form.text.value = "";
        toast("Comment posted");
      } catch {
        toast("The comment didn't post. Try again.");
      }
    });
  }

  function renderLesson() {
    const slug = new URLSearchParams(location.search).get("l") || (LESSONS[0] && LESSONS[0].slug);
    const pos = LESSONS.findIndex((l) => l.slug === slug);
    const main = $("top");
    if (pos < 0) {
      main.innerHTML = `<div class="page"><div class="wrap"><div class="empty">Lesson not found. <a class="link" href="index.html">See today's lesson</a></div></div></div>`;
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

      const color = tstyle(lesson.track)[0];
      const updated = lesson.updated && lesson.updated !== lesson.date ? ` · <b>Updated ${fmtDate(lesson.updated)}</b>` : "";
      $("head").innerHTML = `
        <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="updates.html#${encodeURIComponent(lesson.track)}">${esc(lesson.track)}</a></nav>
        <div class="badges">
          ${lesson.date === TODAY ? '<span class="badge new">New today</span>' : ""}
          <span class="badge track" style="--tc:${color}">${esc(lesson.track)}</span>
          <span class="badge">${esc(lesson.level)}</span>
          ${lesson.tags.map((t) => `<span class="badge">${esc(t)}</span>`).join("")}
        </div>
        <h1>${esc(lesson.title)}</h1>
        <p class="summary">${esc(lesson.summary)}</p>
        <div class="meta"><span>Published <b>${fmtDate(lesson.date, { weekday: "short", month: "long", day: "numeric", year: "numeric" })}</b>${updated}</span><span>${lesson.minutes} min read</span><button class="share" type="button" id="share">Copy link</button></div>`;
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
      toc.innerHTML = heads.map((h) => `<a href="#${h.id}">${esc(h.textContent)}</a>`).join("") + `<a href="#community">Your take and discussion</a>`;
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
        ? `<div class="block-head"><h2>Where to go next</h2><a class="link" href="updates.html">See every lesson</a></div><div class="grid">${rel.map(card).join("")}</div>`
        : "";
      const newer = LESSONS[pos - 1];
      const older = LESSONS[pos + 1];
      $("pager").innerHTML =
        (older ? `<a href="${lessonUrl(older.slug)}"><span>Previous lesson</span>${esc(older.title)}</a>` : "<div></div>") +
        (newer ? `<a class="next" href="${lessonUrl(newer.slug)}"><span>Next lesson</span>${esc(newer.title)}</a>` : "");
      if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
    };

    // Reading progress bar.
    const bar = $("progress");
    addEventListener(
      "scroll",
      () => {
        const art = $("article");
        const total = art.offsetTop + art.offsetHeight - innerHeight;
        bar.style.width = Math.min(100, Math.max(0, (scrollY / Math.max(total, 1)) * 100)) + "%";
      },
      { passive: true }
    );

    const s = document.createElement("script");
    s.src = `data/lessons/${encodeURIComponent(slug)}.js`;
    s.onerror = () => (main.innerHTML = `<div class="page"><div class="wrap"><div class="empty">This lesson couldn't load.</div></div></div>`);
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
        el.textContent = `You scored ${score} of ${quiz.dataset.total}. ${score === +quiz.dataset.total ? "All correct." : "Scroll up to review, then add your take below."}`;
        el.style.display = "block";
      }
    }
  });

  renderChrome();
  initTone();
  const page = document.body.dataset.page;
  ({ lesson: renderLesson, updates: renderUpdates, resources: renderResources }[page] || (() => {}))();
})();
