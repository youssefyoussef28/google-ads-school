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

  var grid = document.querySelector("[data-latest]");
  if (grid && LESSONS.length) {
    grid.innerHTML = LESSONS.slice(0, 6).map(function (l) {
      var t = track(l.track);
      return '<a class="card card--open card--row span-4 gs-lesson" href="' + url(l) + '" style="--tc:' + t[0] + '">' +
        '<div class="panel gs-cover"><span class="gs-cover__icon" style="-webkit-mask-image:url(assets/icons/ui-' + t[1] + '.svg);mask-image:url(assets/icons/ui-' + t[1] + '.svg)"></span><span class="gs-cover__track">' + esc(l.track) + "</span></div>" +
        "<h3>" + esc(l.title.split(":")[0]) + "</h3>" +
        "<p>" + (l.date === todayISO ? '<span class="gs-new">New</span>' : "") + day(l.date) + " · " + esc(l.level) + " · " + l.minutes + " min</p></a>";
    }).join("");
  }

  var btn = document.querySelector("[data-theme-toggle]");
  if (btn) {
    var paint = function () { btn.textContent = document.documentElement.getAttribute("data-tone") === "dark" ? "Light" : "Dark"; };
    paint();
    btn.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-tone") !== "dark";
      if (dark) document.documentElement.setAttribute("data-tone", "dark"); else document.documentElement.removeAttribute("data-tone");
      try { localStorage.setItem("gas.tone", dark ? "dark" : "light"); } catch (e) {}
      paint();
    });
  }
})();
