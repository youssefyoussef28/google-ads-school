window.SCHOOL_INDEX = [
 {
  "slug": "2026-11-21-smart-bidding-learning-status-seven-days",
  "title": "The \"Learning\" label now ends in 7 days: what Google's rewrite means for when you can judge Smart Bidding",
  "date": "2026-11-21",
  "track": "Bidding & Budgets",
  "level": "Intermediate",
  "summary": "Google rewrote its Smart Bidding learning guidance in October. The Learning status now never lasts more than 7 days, fewer edits trigger it, and Google separates that label from the longer time results need to settle. Learn what to wait for, what to leave alone, and how to judge a bid change fairly.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "Smart Bidding",
   "learning period",
   "target CPA",
   "target ROAS",
   "bidding"
  ],
  "minutes": 6,
  "tldr": [
   "Google's help page, now titled \"About Smart Bidding learning\", says the Learning status never lasts more than 7 days, and lists just three triggers: a new or reactivated bid strategy, changes to the campaigns, ad groups or keywords in it, and significant changes to the conversion goals being optimized.",
   "Edits to budgets, targets, creatives and targeting do not trigger Learning. But the label ending is not the same as results being stable: Google says performance typically settles within 1 to 2 conversion cycles.",
   "Judge a change over 2 conversion cycles or 2 weeks, whichever is longer, and stop stacking changes inside that window."
  ]
 },
 {
  "slug": "2026-11-20-seasonality-adjustments-black-friday",
  "title": "Seasonality adjustments before Black Friday: when to tell Smart Bidding a sale is coming (and when to leave it alone)",
  "date": "2026-11-20",
  "track": "Bidding & Budgets",
  "level": "Intermediate",
  "summary": "Google now lists Demand Gen among the campaign types that can use seasonality adjustments, just as Black Friday approaches. Learn what the tool does, how to size an adjustment from your own data, and why Google itself says to use it only for short, big conversion-rate swings.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "seasonality adjustments",
   "Smart Bidding",
   "Black Friday",
   "Demand Gen",
   "target CPA",
   "target ROAS"
  ],
  "minutes": 6,
  "tldr": [
   "A seasonality adjustment tells Smart Bidding to expect a temporary change in conversion rate (for example a flash sale), so it bids accordingly from the first hour and returns to normal afterwards.",
   "Google's help page says to use it for events of about 1 to 7 days, with an expected big conversion-rate change, and warns it may work less well past 14 days. Smart Bidding already handles ordinary seasonality.",
   "Demand Gen is now listed as supported with Target CPA or Target ROAS, but Google's own pages disagree, so check the scope menu in your account before planning around it."
  ]
 },
 {
  "slug": "2026-11-19-invalid-traffic-overview-card",
  "title": "Google now shows what invalid traffic it filtered and credited: how to read the new card (and what it can't prove)",
  "date": "2026-11-19",
  "track": "Fundamentals",
  "level": "Beginner",
  "summary": "Google Ads is rolling out an Invalid Traffic Overview Card that shows estimated savings from traffic filtered before billing and credits issued afterward. Learn where to find it, how the two numbers differ, why your main reports don't change, and a 20-minute audit to run before Black Friday.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "invalid traffic",
   "click fraud",
   "credits",
   "reporting",
   "transparency"
  ],
  "minutes": 6,
  "tldr": [
   "Google added an Invalid Traffic Overview Card to the Overview page. It shows estimated savings (junk filtered before you were billed) and credited cost (refunds for junk found after billing).",
   "Credits don't change Cost or CPA in your main Campaigns table. To see net numbers, use the Invalid Activity Credit report in the report editor.",
   "The card only shows what Google itself caught. It can't tell you about fraud nobody detected, so keep checking lead quality in your own CRM."
  ]
 },
 {
  "slug": "2026-11-18-new-customer-value-multipliers",
  "title": "Pay more for new customers, on purpose: Google's new-customer multipliers and \"new customer only\" bidding explained",
  "date": "2026-11-18",
  "track": "Bidding & Budgets",
  "level": "Intermediate",
  "summary": "Google has moved percentage multipliers (1.1x to 5x) for new-customer value out of beta and documents a \"New Customer Only\" mode. Learn how customer lifecycle goals change your bids, why a flat bonus and a multiplier behave differently, and how to set it up safely before Black Friday.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "customer lifecycle goals",
   "new customers",
   "value-based bidding",
   "Customer Match",
   "Black Friday"
  ],
  "minutes": 6,
  "tldr": [
   "Google's customer lifecycle goals tell Smart Bidding that a new customer is worth more than a returning one. A percentage multiplier (1.1x to 5x) is now an alternative to a flat bonus such as $20.",
   "New Customer Only bids for new customers alone, and Google's help page says it works with value-based and cost-based bidding, so lead-gen accounts can use it too.",
   "It only works as well as your customer lists. Bad lists mean Google misjudges who is \"new\", so check list health and keep an eye on inflated reported conversion value."
  ]
 },
 {
  "slug": "2026-11-17-ai-max-valuetrack-search-term-matchtype",
  "title": "Was that \"exact match\" click really AI Max? How the new {search_term_matchtype} parameter exposes it",
  "date": "2026-11-17",
  "track": "Measurement & Tracking",
  "level": "Advanced",
  "summary": "Google's ValueTrack help now lists a {search_term_matchtype} parameter that marks clicks coming from AI Max expansions, even when they arrive under an exact or phrase keyword. Learn how it differs from {matchtype}, how to split your traffic into clean buckets, and what's still unconfirmed.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "AI Max",
   "ValueTrack",
   "tracking templates",
   "match types",
   "analytics"
  ],
  "minutes": 6,
  "tldr": [
   "A new ValueTrack parameter, {searchtermmatchtype}, reports how the search term matched. It returns e, p or b for keyword matches and a for AI Max broad expansions and keywordless matches.",
   "The older {matchtype} only reports the keyword's match type, so an AI Max expansion on an exact keyword used to look like a plain \"e\" click in your analytics.",
   "Add it to your tracking template, then compare standard keyword traffic with AI Max traffic in your own analytics or CRM. But the help page is undated and partly unconfirmed, so test before you rely on it."
  ]
 },
 {
  "slug": "2026-11-16-pmax-pay-per-lead-goals",
  "title": "Pay-per-lead is coming to Performance Max: what changes when you pay for leads instead of clicks",
  "date": "2026-11-16",
  "track": "Performance Max",
  "level": "Intermediate",
  "summary": "Google is folding Local Services Ads into Performance Max with \"pay-per-lead goals\", and a new terms opt-in started appearing on November 10. Learn how billing, targeting and bidding differ from click-based campaigns, who is eligible, and how to prepare.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "Performance Max",
   "pay-per-lead",
   "Local Services Ads",
   "lead generation",
   "bidding"
  ],
  "minutes": 6,
  "tldr": [
   "Google now documents a Performance Max campaign type with pay-per-lead goals: you are charged for valid leads (calls, and optionally messages and bookings), not clicks.",
   "It is US-only, keywordless, limited to eligible local-service categories, and defaults to Maximize Conversions, so it is a Local Services Ads replacement, not a lead-gen switch for every advertiser.",
   "If you run Local Services Ads, export your history, check the auto-generated budget and answer your phone. If you don't, you can skip it, but the \"pay for outcomes\" model is worth understanding."
  ]
 },
 {
  "slug": "2026-11-15-data-strength-uplift-metric",
  "title": "Data Strength Uplift: what Google's new \"recovered conversions\" number tells you (and what it can't)",
  "date": "2026-11-15",
  "track": "Measurement & Tracking",
  "level": "Intermediate",
  "summary": "Google Ads is rolling out a metric that estimates how many extra conversions your first-party data setup recovers. Learn what it counts, the rules for when it appears, why \"recovered\" is not \"incremental\", and how to check it against your own numbers.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "data strength",
   "enhanced conversions",
   "Data Manager",
   "tag gateway",
   "measurement"
  ],
  "minutes": 6,
  "tldr": [
   "Google Ads now has a Data Strength Uplift metric: an estimate of the % of extra conversions your account reported over the last 14 days thanks to enhanced conversions for leads, Google tag gateway and multi-source Data Manager connections.",
   "It is Google's own estimate, labeled directional, with no published formula. It shows only at +1% or more, is capped at \">50%\", and does not affect billing or Smart Bidding.",
   "\"Recovered\" means previously unmeasured, not new sales. Use it to confirm your tracking is healthy, then verify against your CRM or order data."
  ]
 },
 {
  "slug": "2026-11-07-ai-review-summaries-in-search-ads",
  "title": "Google is writing review summaries into your Search ads: what you control, what you don't, and how to judge the effect",
  "date": "2026-11-07",
  "track": "Creative & Ad Copy",
  "level": "Intermediate",
  "summary": "Google's help center now confirms AI-written, positive-only review summaries can appear inside Search ads in the US, UK, Australia and India. Learn what's confirmed, what's still unanswered, why your real reviews just became ad copy, and how to check whether it helps your account.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "review summaries",
   "automated assets",
   "seller ratings",
   "ad copy",
   "Search"
  ],
  "minutes": 7,
  "tldr": [
   "Google can now add an AI-written, positive-only review summary to your Search ads in English in the US, UK, Australia and India. You can't edit the text.",
   "Google says it shows only when predicted to improve performance, but it has published no results, and the help page describes no opt-out.",
   "The practical lesson: your reviews across the web are now part of your ad. Fix your review footprint, and don't repeat in headlines what the summary will say for you."
  ]
 },
 {
  "slug": "2026-11-06-ai-max-copy-preview",
  "title": "Preview what AI Max would write before you let it: how to use the new copy preview safely",
  "date": "2026-11-06",
  "track": "Audiences & AI",
  "level": "Beginner",
  "summary": "Google Ads now lets you see up to 10 sample AI-written headlines and descriptions for your landing page before turning on AI Max text customization. Learn how the preview works, what it can and can't tell you, and a simple checklist for deciding whether to let Google write your ads.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "AI Max",
   "text customization",
   "ad copy",
   "text guidelines",
   "final URL"
  ],
  "minutes": 6,
  "tldr": [
   "You can now preview up to 10 sample AI-written headlines and descriptions for a landing page before turning on AI Max text customization. Viewing them doesn't require opting in.",
   "The preview is a sample, not a promise: the live ads may use different text.",
   "Check each sample for accuracy, brand voice and offer conditions (like a \"free delivery\" claim that only applies over a minimum order). Use text guidelines to steer the writing."
  ]
 },
 {
  "slug": "2026-11-05-offline-conversions-seven-day-rule",
  "title": "The 7-day rule that can make your offline conversions invisible to attribution modeling",
  "date": "2026-11-05",
  "track": "Measurement & Tracking",
  "level": "Advanced",
  "summary": "Google's documentation says offline conversions uploaded more than seven days late are skipped by the attribution modeling calculations, even though your regular reports still count them. Learn what that means for data-driven attribution and bidding, how to tell if you're affected, and how to fix the upload lag.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "offline conversions",
   "attribution",
   "data-driven attribution",
   "GCLID",
   "lead gen"
  ],
  "minutes": 6,
  "tldr": [
   "Google's attribution documentation says offline conversions uploaded more than 7 days after the event are bypassed by the attribution modeling calculations, while standard report columns still record them.",
   "That means your Model Comparison view and attribution reports can disagree with your campaign columns, and slow uploads may weaken the data that feeds data-driven attribution and automated bidding.",
   "Fix it by uploading offline conversions daily (or at least well under 7 days), and don't use attribution reports alone to move budget."
  ]
 },
 {
  "slug": "2026-11-04-ai-max-search-terms-and-ad-combinations",
  "title": "Finally see what AI Max is doing: how to read the \"Search terms and ad combinations\" report",
  "date": "2026-11-04",
  "track": "Search & Keywords",
  "level": "Intermediate",
  "summary": "AI Max has long been criticized for hiding which searches it matches. A newer report pairs each search term with the headline and landing page that served it. Learn how to find it, what each column tells you, and a 20-minute weekly routine to catch mismatches before they waste budget.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "AI Max",
   "search terms",
   "negative keywords",
   "reporting",
   "Search"
  ],
  "minutes": 7,
  "tldr": [
   "The \"Search terms and ad combinations\" view shows, per row, the search term, the headline, description and landing page that served, plus the campaign and ad group.",
   "Newer versions reportedly add four source columns telling you whether the match, landing page, headline and description came from AI Max or from you.",
   "Use it weekly to spot mismatches between what people searched and what your ad said, then add negative keywords or negative URLs. Wait 2 weeks after enabling AI Max before changing anything."
  ]
 },
 {
  "slug": "2026-11-03-ads-in-ai-mode-go-global",
  "title": "Ads in AI Mode go global: how your campaigns get in (and what you can't control)",
  "date": "2026-11-03",
  "track": "News & Updates",
  "level": "Intermediate",
  "summary": "Google just switched on ads in AI Mode for 10 more countries, with the UK, Brazil and Mexico next. Learn the two ways an ad gets matched inside an AI answer, why exact and phrase match only get half the ticket, and how to prepare your account this week.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "AI Mode",
   "AI Max",
   "broad match",
   "match types",
   "Search"
  ],
  "minutes": 7,
  "tldr": [
   "Ads in Google's AI Mode are now live in 10 more countries (including Canada, Australia, India and Singapore), with the UK, Brazil and Mexico next. Your Search, Shopping and PMax campaigns are automatically eligible, with no opt-out and no separate reporting.",
   "Ads get in two ways: direct (the question is commercial) and contextual (buying intent appears in the AI's answer). Exact and phrase match only qualify for direct.",
   "Before you widen matching, harden negatives, check Final URL Expansion, and test with a proper experiment."
  ]
 },
 {
  "slug": "2026-11-03-how-the-google-ads-auction-works",
  "title": "How the Google Ads auction really works: Ad Rank, Quality Score and why you rarely pay your bid",
  "date": "2026-11-03",
  "track": "Fundamentals",
  "level": "Beginner",
  "summary": "Every search runs a split-second auction. Learn the six things Google says decide who shows and in what order, why a better ad can beat a bigger bid, and how to work out what you actually pay per click.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "Ad Rank",
   "Quality Score",
   "CPC",
   "auction",
   "fundamentals"
  ],
  "minutes": 6,
  "tldr": [
   "Google runs an auction for every single search. Your position comes from Ad Rank, not just your bid.",
   "Ad Rank blends your bid, your ad and landing page quality, minimum thresholds, competition, the search context and the expected impact of your assets.",
   "You usually pay less than your max bid: roughly the minimum needed to beat the advertiser below you. Better quality means a lower price for the same spot."
  ]
 },
 {
  "slug": "2026-11-03-channel-prioritization-budget-caps",
  "title": "New channel controls: rank Search above Display and cap partner spend (and why the cap isn't a ceiling)",
  "date": "2026-11-03",
  "track": "Bidding & Budgets",
  "level": "Intermediate",
  "summary": "Google Ads now lets you mark channels as High or Low priority and cap how much of your daily budget Low-priority channels can use. Learn when these controls actually change your spend, why the cap is \"best effort\", and the February 2027 change Search advertisers need to plan for.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "budgets",
   "Search partners",
   "Display Network",
   "channel controls",
   "Performance Max"
  ],
  "minutes": 6,
  "tldr": [
   "You can now rank channels (Google Search, Search partners, Display Network and others) as High or Low priority, and give Low-priority channels a daily % cap.",
   "Priority only changes anything when your campaign is limited by budget. A tCPA/tROAS campaign with headroom will barely notice.",
   "The cap is best-effort, not a hard ceiling. And in February 2027, Search campaigns with Display expansion move to this new system automatically."
  ]
 },
 {
  "slug": "2026-11-03-customer-match-encrypted-uploads",
  "title": "Customer Match is dropping the hashing requirement on Nov 16: what changes, and why your match rates might jump",
  "date": "2026-11-03",
  "track": "Measurement & Tracking",
  "level": "Advanced",
  "summary": "From November 16, Google's Data Manager accepts encrypted customer data by default instead of requiring SHA-256 hashes. Learn why hashing silently broke matches, what moves to Google's side, the open privacy questions, and the five checks to run before the deadline.",
  "updated": null,
  "updateNote": null,
  "tags": [
   "Customer Match",
   "enhanced conversions",
   "Data Manager",
   "first-party data",
   "privacy"
  ],
  "minutes": 6,
  "tldr": [
   "From November 16, 2026, Google's Data Manager accepts encrypted customer data by default instead of requiring you to SHA-256 hash it first.",
   "Hashing is unforgiving: one extra space or capital letter creates a different hash and a silent non-match. Google now does the formatting cleanup inside a secure environment, which should raise match rates.",
   "It also means Google can read the underlying data during matching. Check your data agreements, record your current match rates, and ask your rep what happens to hashed uploads."
  ]
 }
];
window.SCHOOL_TRACKS = ["News & Updates","Fundamentals","Bidding & Budgets","Performance Max","Search & Keywords","Creative & Ad Copy","Measurement & Tracking","Audiences & AI","Case Studies"];
window.SCHOOL_UPDATES = [
 {
  "date": "2026-11-21",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-21-smart-bidding-learning-status-seven-days",
    "title": "The \"Learning\" label now ends in 7 days: what Google's rewrite means for when you can judge Smart Bidding",
    "track": "Bidding & Budgets"
   }
  ]
 },
 {
  "date": "2026-11-20",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-20-seasonality-adjustments-black-friday",
    "title": "Seasonality adjustments before Black Friday: when to tell Smart Bidding a sale is coming (and when to leave it alone)",
    "track": "Bidding & Budgets"
   }
  ]
 },
 {
  "date": "2026-11-19",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-19-invalid-traffic-overview-card",
    "title": "Google now shows what invalid traffic it filtered and credited: how to read the new card (and what it can't prove)",
    "track": "Fundamentals"
   }
  ]
 },
 {
  "date": "2026-11-18",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-18-new-customer-value-multipliers",
    "title": "Pay more for new customers, on purpose: Google's new-customer multipliers and \"new customer only\" bidding explained",
    "track": "Bidding & Budgets"
   }
  ]
 },
 {
  "date": "2026-11-17",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-17-ai-max-valuetrack-search-term-matchtype",
    "title": "Was that \"exact match\" click really AI Max? How the new {search_term_matchtype} parameter exposes it",
    "track": "Measurement & Tracking"
   }
  ]
 },
 {
  "date": "2026-11-16",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-16-pmax-pay-per-lead-goals",
    "title": "Pay-per-lead is coming to Performance Max: what changes when you pay for leads instead of clicks",
    "track": "Performance Max"
   }
  ]
 },
 {
  "date": "2026-11-15",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-15-data-strength-uplift-metric",
    "title": "Data Strength Uplift: what Google's new \"recovered conversions\" number tells you (and what it can't)",
    "track": "Measurement & Tracking"
   }
  ]
 },
 {
  "date": "2026-11-07",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-07-ai-review-summaries-in-search-ads",
    "title": "Google is writing review summaries into your Search ads: what you control, what you don't, and how to judge the effect",
    "track": "Creative & Ad Copy"
   }
  ]
 },
 {
  "date": "2026-11-06",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-06-ai-max-copy-preview",
    "title": "Preview what AI Max would write before you let it: how to use the new copy preview safely",
    "track": "Audiences & AI"
   }
  ]
 },
 {
  "date": "2026-11-05",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-05-offline-conversions-seven-day-rule",
    "title": "The 7-day rule that can make your offline conversions invisible to attribution modeling",
    "track": "Measurement & Tracking"
   }
  ]
 },
 {
  "date": "2026-11-04",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-04-ai-max-search-terms-and-ad-combinations",
    "title": "Finally see what AI Max is doing: how to read the \"Search terms and ad combinations\" report",
    "track": "Search & Keywords"
   }
  ]
 },
 {
  "date": "2026-11-03",
  "items": [
   {
    "type": "added",
    "slug": "2026-11-03-ads-in-ai-mode-go-global",
    "title": "Ads in AI Mode go global: how your campaigns get in (and what you can't control)",
    "track": "News & Updates"
   },
   {
    "type": "added",
    "slug": "2026-11-03-how-the-google-ads-auction-works",
    "title": "How the Google Ads auction really works: Ad Rank, Quality Score and why you rarely pay your bid",
    "track": "Fundamentals"
   },
   {
    "type": "added",
    "slug": "2026-11-03-channel-prioritization-budget-caps",
    "title": "New channel controls: rank Search above Display and cap partner spend (and why the cap isn't a ceiling)",
    "track": "Bidding & Budgets"
   },
   {
    "type": "added",
    "slug": "2026-11-03-customer-match-encrypted-uploads",
    "title": "Customer Match is dropping the hashing requirement on Nov 16: what changes, and why your match rates might jump",
    "track": "Measurement & Tracking"
   }
  ]
 }
];
