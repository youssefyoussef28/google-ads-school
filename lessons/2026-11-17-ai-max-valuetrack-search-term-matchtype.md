---
title: Was that "exact match" click really AI Max? How the new {search_term_matchtype} parameter exposes it
date: 2026-11-17
track: Measurement & Tracking
level: Advanced
summary: Google's ValueTrack help now lists a {search_term_matchtype} parameter that marks clicks coming from AI Max expansions, even when they arrive under an exact or phrase keyword. Learn how it differs from {matchtype}, how to split your traffic into clean buckets, and what's still unconfirmed.
tags: AI Max, ValueTrack, tracking templates, match types, analytics
---

## In 30 seconds

- A new ValueTrack parameter, **{search_term_matchtype}**, reports how the **search term** matched. It returns **e, p or b** for keyword matches and **a** for **AI Max** broad expansions and keywordless matches.
- The older **{matchtype}** only reports the **keyword's** match type, so an AI Max expansion on an exact keyword used to look like a plain **"e" click** in your analytics.
- Add it to your **tracking template**, then compare **standard keyword traffic** with **AI Max traffic** in your own analytics or CRM. But the help page is undated and partly unconfirmed, so **test before you rely on it**.

## What changed

- PPC News Feed reported the parameter on **November 11, 2026**, crediting practitioner Hana Kobzová ([PPC News Feed](https://ppcnewsfeed.com/ppc-news/2026-11/new-value-track-parameter-isolates-ai-max-traffic/)). Search Engine Land covered it as "Google Ads introduces new ValueTrack parameter to identify AI Max traffic" ([Search Engine Land](https://searchengineland.com/google-ads-introduces-new-valuetrack-parameter-to-identify-ai-max-traffic-501420)). I couldn't open that article (the site blocked my fetch), so I'm relying on search excerpts for its content.
- Google's [ValueTrack help page](https://support.google.com/google-ads/answer/2375447) lists the parameter with four values: **e** (exact), **p** (phrase), **b** (broad) and **a** (AI Max broad expansions and keywordless matches).
- PPC Land reports that Google's guidance for isolating AI Max expansion traffic is to filter for clicks where **{matchtype}** is e, p or b but **{search_term_matchtype}** is **a** ([PPC Land](https://ppc.land/googles-new-parameter-shows-when-an-exact-click-was-really-ai-max/)).

> [!WARNING]
> **Partly unconfirmed.** The help page carries no change date. When PPC Land checked the English page on November 15, it listed the parameter but did not show the "Tracking AI Max matches" section that other write-ups describe. Google hasn't explained why. Treat the exact filtering rules as "reported, check the live page", and test your own clicks.

## Why it matters

AI Max can show your ad for searches that don't match any keyword you wrote. The worry practitioners raised was *attribution of the click*. In December 2025, Brad Geddes of Adalysis documented AI Max traffic being credited to exact and phrase keywords, and Google's Ginny Marvin replied that documentation would be updated, per PPC Land's recap. Separately, Mike Ryan of Smarter Ecommerce found the share of exact-match impressions served through AI Max expansions reached nearly 29% by July 2026, across 383 million EMEA ecommerce impressions (reported by PPC Land; that's one analyst's dataset, not a universal number).

If you judge keywords by landing-page analytics, a CRM or a call-tracking tool, those tools only saw the *keyword's* match type. So an "exact match" keyword may have looked better or worse than it really was, because some of its clicks were expansions. This parameter lets your own systems tell the two apart. For the in-platform view of the same problem, see [the search terms and ad combinations report](lesson.html?l=2026-11-04-ai-max-search-terms-and-ad-combinations).

## The lesson: keyword match type is not search-term match type

There are two separate questions about every click:

| Question | Parameter | Example answer |
|---|---|---|
| What kind of **keyword** did Google match? | {matchtype} | e (the keyword is exact match) |
| What kind of **match** connected the **search term** to your ad? | {search_term_matchtype} | a (AI Max expansion) |

Before this, only the first question could be passed to your site. For background on how match types and broad matching feed AI Max, see [Ads in AI Mode go global](lesson.html?l=2026-11-03-ads-in-ai-mode-go-global).

PPC Land also describes combining {matchtype}, {targetid}, {keyword} and the new parameter into four classes: standard keyword, AI Max broad expansion, AI Max keywordless expansion, and AI Max keywordless URL rules. Google's table, as PPC Land read it, appears to overlap between two of those rows (both use a "kwl-" prefix), so start with the simple two-bucket split and refine later.

> [!TIP]
> Put **{lpurl}** at the start of your tracking template. Google's help page warns that final URL expansion can create 404 errors with incompatible templates (per PPC Land's reading of the page). Test with the "Test" button in the tracking template field.

## Worked example: an exact-match heavy account

*Illustrative numbers, not real account data.*

A furniture store's CRM logs **400 leads** last month from Search. The tracking template passes `{matchtype}` only.

| Match type reported | Leads | Spend | Cost per lead |
|---|---|---|---|
| e (exact) | 220 | $11,000 | $50.00 |
| p (phrase) | 120 | $6,000 | $50.00 |
| b (broad) | 60 | $3,600 | $60.00 |

The owner adds `search_term_matchtype={search_term_matchtype}` to the template. A month later the CRM can split the "e" row:

| Bucket | Leads | Spend | Cost per lead |
|---|---|---|---|
| e, search term also exact (not "a") | 150 | $5,250 | $35.00 |
| e, AI Max expansion ("a") | 70 | $5,750 | $82.14 |

The math: $5,250 / 150 = $35.00 and $5,750 / 70 ≈ $82.14. Blended, the "exact" line looked like a respectable $50 ($11,000 / 220). Split, the real keyword traffic is cheap and the expansion traffic is expensive. That doesn't prove AI Max is bad: you'd also want to know whether those 70 leads would have come anyway, and their lead quality and close rate. It means the owner can now **ask the right question**, for example by tightening negatives, trimming URL expansion, or setting a CPA target for the campaign.

## What others are doing

- **Brad Geddes (Adalysis)** flagged the misattribution of AI Max clicks to exact and phrase keywords in December 2025, which is part of why this parameter matters (as reported by [PPC Land](https://ppc.land/googles-new-parameter-shows-when-an-exact-click-was-really-ai-max/)). Caveat: second-hand summary, not the original post.
- **Mike Ryan (Smarter Ecommerce)** measured the share of exact-match impressions served through AI Max expansions at nearly 29% by July 2026, over 383 million EMEA ecommerce impressions (same PPC Land source). Caveat: ecommerce in one region, and impressions, not conversions.
- **Hana Kobzová** is credited with spotting the parameter on Google's help page ([PPC News Feed](https://ppcnewsfeed.com/ppc-news/2026-11/new-value-track-parameter-isolates-ai-max-traffic/)). That's a discovery, not a test.

## Where the experts disagree

**Google's position:** AI Max expansions are additional reach beyond your keywords and the new parameter is there for visibility. Google's own help text describes the parameter; it has not published performance claims for it.

**Practitioner concern:** the critics' point is that labeling "exact" for expansion clicks made keyword reports misleading. Some will read this parameter as a fix, others as an admission. Evidence is thin on both sides: the 29% figure is a single regional ecommerce dataset.

**Open questions (per PPC Land):** whether close variants of exact and phrase match report as e and p, whether Google Ads Editor or the API exposes an equivalent field, and why the AI Max section of the help page was not visible on the English page on November 15. It also isn't listed in Performance Max's compatibility table. Also note it labels *how a term matched*, not whether the click was **incremental**.

**Our take:** add the parameter to your tracking template now, run it for two to four weeks, and compare cost per lead between the two buckets before you change any AI Max setting. If the numbers don't differ, don't redesign anything; if your volume is small (under about 30 conversions per bucket), treat the result as a hint, not a verdict.

## Watch

```youtube
Rvx_-dnwIUU | AI Max for Search Campaigns | Google Ads
OibuIvRWr6E | Google Ads ValueTrack Parameters | Paid Media Pros
```

- **AI Max for Search Campaigns:** Google's own walkthrough of the settings, so you know what you're turning on before you measure it.
- **Google Ads ValueTrack Parameters:** a general ValueTrack primer, useful if you've never edited a tracking template. It predates this parameter, so it won't mention it.

## Do this today

1. Open your account-level tracking template (Admin, Account settings) and note what it already contains.
2. Check Google's [ValueTrack help page](https://support.google.com/google-ads/answer/2375447) for **{search_term_matchtype}** and read the current wording.
3. Add `search_term_matchtype={search_term_matchtype}` to your final URL suffix or tracking template, with **{lpurl}** first, then use the Test button.
4. Confirm your analytics, CRM or call-tracking tool stores the new field (a custom dimension or hidden form field).
5. After 2 to 4 weeks, compare conversions and cost per conversion where the value is "a" with where it isn't.
6. Write down the result before changing any AI Max settings.

## Quiz

```quiz
[
  {"q": "A click arrives with {matchtype}=e and {search_term_matchtype}=a. What does that most likely mean?", "options": ["An exact-match search term matched your exact keyword", "An AI Max expansion served under an exact-match keyword", "The click came from Performance Max", "The tracking template is broken"], "answer": 1, "why": "{matchtype} describes the keyword, while 'a' in {search_term_matchtype} marks an AI Max broad expansion or keywordless match, per Google's help page as reported by PPC Land."},
  {"q": "Your 'exact' line costs $50 per lead blended. Split out, 150 leads cost $5,250 and 70 leads cost $5,750. What is the cost per lead of the 70?", "options": ["About $35", "About $50", "About $82", "About $110"], "answer": 2, "why": "$5,750 divided by 70 is about $82.14. The cheap bucket was hiding the expensive one in the blended average."},
  {"q": "The split shows AI Max leads cost more. What is the best next step?", "options": ["Turn off AI Max immediately", "Check lead quality and close rate, then adjust negatives, URL settings or targets", "Delete the exact keywords", "Ignore it, since match types don't matter"], "answer": 1, "why": "Cost per lead is only part of the picture. Quality, incrementality and sample size matter before changing settings."}
]
```

---

**Sources:** [Google Ads Help: ValueTrack parameters](https://support.google.com/google-ads/answer/2375447) · [PPC Land](https://ppc.land/googles-new-parameter-shows-when-an-exact-click-was-really-ai-max/) · [PPC News Feed](https://ppcnewsfeed.com/ppc-news/2026-11/new-value-track-parameter-isolates-ai-max-traffic/) · [Search Engine Land](https://searchengineland.com/google-ads-introduces-new-valuetrack-parameter-to-identify-ai-max-traffic-501420)
