// Google Ads School home page: fills the hero window, the "today" links and the six latest lesson
// cards from data/index.js (window.SCHOOL_INDEX), and runs the tone switch in the footer.
(function () {
  var LESSONS = window.SCHOOL_INDEX || [];
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  };
  var TRACKS = {
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
  var track = function (t) { return TRACKS[t] || ["#4285f4", "book-open"]; };
  var day = function (iso, opts) { return new Date(iso + "T12:00:00").toLocaleDateString("en", opts || { month: "short", day: "numeric" }); };
  var todayISO = (function () { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); })();
  var url = function (l) { return "lesson.html?l=" + encodeURIComponent(l.slug); };

  var latest = LESSONS[0];
  if (latest) {
    document.querySelectorAll("[data-today-link]").forEach(function (a) { a.href = url(latest); });
    var set = function (sel, text) { var el = document.querySelector(sel); if (el) el.textContent = text; };
    set("[data-today-title]", latest.title.split(":")[0]);
    set("[data-hero-title]", latest.title);
    set("[data-hero-track]", latest.track);
    set("[data-hero-min]", latest.minutes + " min read");
    var tl = document.querySelector("[data-hero-tldr]");
    if (tl && latest.tldr && latest.tldr.length) {
      tl.innerHTML = latest.tldr.slice(0, 2).map(function (b) { return "<li data-step>" + esc(b) + "</li>"; }).join("");
    }
    var list = document.querySelector("[data-hero-list]");
    if (list) {
      list.innerHTML = '<div class="gs-list__q">Lessons</div>' + LESSONS.slice(0, 3).map(function (l, i) {
        return '<div class="gs-list__item' + (i === 0 ? " is-on" : "") + '"><b>' + esc(l.title.split(":")[0]) + "</b><time>" + day(l.date) + "</time></div>";
      }).join("");
    }
  }

  // The lessons section: today's lesson as the featured card, the next five as a ruled list.
  var feat = document.querySelector(".gs-feature");
  if (feat && latest) {
    var ft = track(latest.track);
    feat.innerHTML =
      '<span class="gs-feature__top"><span class="gs-dot" style="--tc:' + ft[0] + '"></span><span>' + (latest.date === todayISO ? "Today" : day(latest.date)) + " · " + esc(latest.track) + "</span></span>" +
      '<h3 class="gs-feature__title">' + esc(latest.title.split(":")[0]) + "</h3>" +
      (latest.tldr && latest.tldr.length ? '<ul class="gs-feature__tldr">' + latest.tldr.slice(0, 1).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" : "<p>" + esc(latest.summary) + "</p>") +
      '<span class="gs-feature__meta">' + esc(latest.level) + " · " + latest.minutes + " min read</span>" +
      '<span class="link gs-feature__go">Read the lesson</span>';
  }
  var rows = document.querySelector(".gs-rows");
  if (rows && LESSONS.length > 1) {
    rows.innerHTML = LESSONS.slice(1, 6).map(function (l) {
      var t = track(l.track);
      return '<li><a class="gs-row" href="' + url(l) + '" style="--tc:' + t[0] + '">' +
        '<span class="gs-row__icon" aria-hidden="true"><i style="-webkit-mask-image:url(assets/icons/ui-' + t[1] + '.svg);mask-image:url(assets/icons/ui-' + t[1] + '.svg)"></i></span>' +
        '<span class="gs-row__text"><span class="gs-row__title">' + esc(l.title.split(":")[0]) + '</span><span class="gs-row__meta">' + day(l.date) + " · " + esc(l.track) + " · " + l.minutes + " min</span></span>" +
        '<svg class="gs-row__arrow" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 6h8M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>';
    }).join("");
  }

  var btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    var paint = function () { btn.setAttribute("aria-label", document.documentElement.getAttribute("data-tone") === "dark" ? "Switch to light mode" : "Switch to dark mode"); };
    paint();
    btn.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-tone") !== "dark";
      if (dark) document.documentElement.setAttribute("data-tone", "dark"); else document.documentElement.removeAttribute("data-tone");
      try { localStorage.setItem("gas.tone", dark ? "dark" : "light"); } catch (e) {}
      paint();
    });
  }
})();
