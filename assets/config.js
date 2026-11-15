// Site settings.
//
// subscribeEndpoint: the address of a form service (Formspree, Buttondown, a serverless function) that
// takes the footer's email field. Empty: the form falls back to a mailto: on .example and shows no
// "subscribed" line, because nothing was really sent.
//
// apiBase: empty runs votes and comments in preview mode (saved in this browser only). When the school
// has a backend, set it to one that implements:
//   GET  {apiBase}/reactions?slug=…          -> { agree: n, disagree: n }
//   POST {apiBase}/reactions  {slug, vote}   -> { agree: n, disagree: n }   (vote: "agree" | "disagree" | null)
//   GET  {apiBase}/comments?slug=…           -> [{ name, stance, text, at }]
//   POST {apiBase}/comments   {slug, name, stance, text} -> the saved comment
window.SCHOOL_CONFIG = {
  subscribeEndpoint: "",
  apiBase: "",
};
