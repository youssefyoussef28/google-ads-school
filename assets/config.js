// Site settings. Leave apiBase empty to run in local preview mode:
// reactions, comments and sign-ups are then saved in this browser only.
//
// When the school goes online, set apiBase to a backend that implements:
//   GET  {apiBase}/reactions?slug=…          -> { agree: n, disagree: n }
//   POST {apiBase}/reactions  {slug, vote}   -> { agree: n, disagree: n }   (vote: "agree" | "disagree" | null)
//   GET  {apiBase}/comments?slug=…           -> [{ name, stance, text, at }]
//   POST {apiBase}/comments   {slug, name, stance, text} -> the saved comment
//   POST {apiBase}/subscribe  {email, name}  -> { ok: true }
window.SCHOOL_CONFIG = {
  apiBase: "",
};
