// Sets the tone before the first paint. Light is the default; dark only when the visitor chose it
// with the switch in the header.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("gas.tone"); } catch (e) {}
  if (saved === "dark") document.documentElement.setAttribute("data-tone", "dark");
})();
