// Sets the light or dark tone before the first paint: the visitor's saved choice, else the OS setting.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("gas.tone"); } catch (e) {}
  var dark = saved ? saved === "dark" : window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  if (dark) document.documentElement.setAttribute("data-tone", "dark");
})();
