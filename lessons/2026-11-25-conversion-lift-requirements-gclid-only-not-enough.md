---
title: Conversion Lift just got stricter: why GA4 imports and GCLID-only uploads can't prove incrementality
date: 2026-11-25
track: Measurement & Tracking
level: Advanced
summary: Google updated its Conversion Lift setup guide on November 13. GA4-imported web conversions are listed as unsupported, and offline imports need more than a click ID. Learn what lift testing actually measures, how to audit your conversion setup before you book a study, and how to size a test.
tags: Conversion Lift, incrementality, enhanced conversions for leads, GA4 imports, offline conversions, measurement
---

## In 30 seconds

- **Conversion Lift** compares users who could see your ads with a held-out group, so it estimates **incremental** conversions, not just attributed ones.
- Google's updated help page says **GA4-imported web conversions** and **click-ID-only (GCLID) offline imports** are not supported setups. Studies need **hashed first-party data** instead.
- Before you plan a study, **audit which conversion actions you'd measure**. A study can't prove lift on data it can't use.

## What changed

On November 13, 2026, Barry Schwartz at Search Engine Roundtable [reported](https://www.seroundtable.com/google-ads-conversion-lift-set-up-doc-update-42530.html) that Google had rewritten its ["Set up Conversion Lift based on users"](https://support.google.com/google-ads/answer/12005564) help page. According to that report and the current page:

- **Offline conversions:** the doc now states that GCLID-only imports are insufficient. Google points advertisers to enhanced conversions for leads with hashed first-party data.
- **Unsupported setups** now include web conversions imported from Google Analytics, offline imports that use only click IDs (GCLID, GBRAID or WBRAID), and sending web and app conversions to the same conversion action (the page says this causes all data to be dropped).
- **Data quality guidance:** 7 to 14 days of continuous conversion data before launch, valid currencies on dynamic values, and, per the report, routing most web conversion traffic through Google tag gateway.
- **Largely unchanged:** per the same report, thresholds, budgets and holdout rules did not change. The page lists at least 1,000 observed conversions per month, a $5,000 USD minimum campaign budget, a 7-day minimum study length (14+ recommended) and a holdback of 1% to 50%.

Google's page covers user-based studies. Geo-based studies are configured separately and their requirements aren't listed there, so check that page if you plan a geo test.

## Why it matters

Many accounts measure leads through a CRM upload keyed only on the click ID, or through conversions imported from GA4. Both work fine for reporting and bidding. They may not work for a lift study, which means the one tool built to answer "would these sales have happened anyway?" could be unavailable on exactly the accounts that need it most: lead gen with offline sales, and shops that rely on GA4 imports.

It also nudges you toward the same foundation as other recent changes: hashed first-party data, correctly set up. If you read our lessons on [Data Strength Uplift](lesson.html?l=2026-11-15-data-strength-uplift-metric) and the [seven-day offline conversion rule](lesson.html?l=2026-11-05-offline-conversions-seven-day-rule), this is the same theme again.

## The lesson: attributed vs. incremental

Attribution answers "which ad gets credit for this conversion?" Incrementality answers "how many conversions exist *because* of the ads?" Those can be far apart. People who already planned to buy often click a brand ad on the way.

| Question | Tool | What it can't tell you |
|---|---|---|
| Which click or ad gets credit? | Attribution (data-driven) | Whether the sale would have happened anyway |
| Did ads add conversions overall? | Conversion Lift (user-based or geo) | Which keyword or asset did it |
| Does a new campaign add on top of existing ones? | Campaign experiments / uplift tests | Effects outside the test window |

A user-based lift study randomly splits eligible users into a group that can see your ads and a holdout that can't. The difference in conversion rate between them, scaled up, is the estimated lift. It only works if conversions can be matched back to those users. That's why the data requirements are strict: click IDs identify a click, while hashed customer data (such as email) lets Google match a conversion to a user even without that click.

> [!NOTE]
> Lift results are estimates with a margin of error. A study with too few conversions in the test arm can return a wide range that includes zero.

## Worked example: should this account book a study?

*Illustrative numbers.* A lead-gen business spends $12,000 a month, reports 1,500 conversions in Google Ads, and gets them from two sources: 900 GA4-imported form fills and 600 CRM-qualified leads uploaded by GCLID.

1. **Spend check:** $12,000 per month clears the $5,000 minimum budget.
2. **Volume check:** 1,500 reported conversions looks above the 1,000 threshold. But if only conversions that qualify count, you must remove unsupported sources.
3. **Source check:** GA4 imports (900) are listed as unsupported. GCLID-only uploads (600) are insufficient. Qualifying conversions today: **0**, which is below 1,000.
4. **Fix:** Add enhanced conversions for web on the form (hashed email) and upload CRM outcomes with enhanced conversions for leads. If the website tag then captures, say, 1,100 conversions per month with hashed data, you now clear the bar.
5. **Wait 7 to 14 days** of clean data (Google's guidance), then launch for 14+ days.

If the account's honest qualifying volume is 400, the right move is not forcing a study. Use a geo split or a campaign experiment with a cruder read instead.

## What others are doing

I could not find a public, detailed practitioner write-up of lift tests under the new rules, and the change is two weeks old, so treat this section as thin.

- **Google's own tutorials** explain the mechanics. See the videos below, including one on [Performance Max uplift experiments](https://www.youtube.com/watch?v=Jkkp2l00TEs). Google-run material shows the method, not independent results.
- **Search Engine Roundtable's** [report](https://www.seroundtable.com/google-ads-conversion-lift-set-up-doc-update-42530.html) is the best summary of what moved in the doc. It describes documentation changes only. It doesn't say whether Google changed how studies run.

## Where the experts disagree

- **Google's position:** lift measurement is the most direct way to estimate causal impact, and clean first-party data is the entry ticket.
- **The skeptic's view:** the platform that sells ads also designs, runs and reports the test. Holdout design, matching and modeling are largely opaque, so many practitioners cross-check with their own geo tests or business-level data. This is a general view in the industry rather than something I can attach to a single source today.
- **Where evidence is thin:** the doc doesn't say whether GA4-imported conversions *never* worked or simply produced weaker matching. Also unclear: whether the requirements will relax later.

**Our take:** if you're serious about proving incrementality, fix your conversion data first, then run one lift study on your biggest budget. If you're under the thresholds, don't buy the story that attributed conversions equal incremental ones, and use a simple on/off geo test instead. Skip lift entirely if your conversion volume is small or your sales cycle is longer than the study.

## Watch

```youtube
-ZoAazB-_cE | Google Ads Tutorials: Conversion Lift | Google Ads
AxtbV8vmi1o | Conversion lift based on geography: Google Ads Tutorials | Google Ads
Jkkp2l00TEs | Experiments to test uplift of Performance Max campaigns: Google Ads Tutorials | Google Ads
```

- **Conversion Lift:** Google's official overview of how user-based studies are set up. Watch it for the basic idea, then use the written requirements for the current rules.
- **Conversion lift based on geography:** the alternative when user-level matching isn't possible.
- **PMax uplift experiments:** shows how to test whether Performance Max adds on top of your other campaigns. The video may predate the November doc update, so verify details in the help page.

## Do this today

1. List every conversion action you'd want to measure and note its source: website tag, GA4 import, offline upload, app.
2. Mark any that are GA4 imports or GCLID-only uploads. Those are the ones the doc flags.
3. Check whether enhanced conversions (web and leads) are on for your main conversions.
4. Count conversions per month from the supported sources only. Compare to 1,000.
5. If you're short, decide: fix tracking, or plan a geo test instead.
6. Avoid sending web and app conversions to the same conversion action.
7. Write down the decision you'd make if lift came back at zero. If you wouldn't change anything, skip the study.

## Quiz

```quiz
[
  {"q": "An account reports 1,200 monthly conversions, all uploaded by GCLID only from a CRM. Under Google's updated Conversion Lift setup page, what is the best next step?", "options": ["Launch the study; 1,200 is above the minimum", "Add enhanced conversions for leads with hashed first-party data, then re-count qualifying conversions", "Switch to GA4 imports instead", "Lower the holdback to 1%"], "answer": 1, "why": "Click-ID-only offline imports are listed as insufficient, so the 1,200 conversions may not qualify. Hashed first-party data is what the doc asks for. GA4 imports are also unsupported."},
  {"q": "What does a Conversion Lift study estimate that data-driven attribution does not?", "options": ["Which keyword got credit", "How many conversions would not have happened without the ads", "Your Quality Score", "Which device converts best"], "answer": 1, "why": "Attribution assigns credit among touchpoints. Lift compares exposed vs. held-out users to estimate incremental conversions."},
  {"q": "Your study returns a lift range from -2% to +18%. What is the most defensible conclusion?", "options": ["Ads clearly work; scale spend 18%", "Ads clearly don't work; pause", "The result is inconclusive; you may need more conversions or a longer study before changing budgets", "The holdout was too small, so the test is invalid by definition"], "answer": 2, "why": "A range that includes zero means you can't rule out no effect. Collect more data rather than acting on the upper bound."}
]
```

---

**Sources:** [Search Engine Roundtable: Google Ads Updates Conversion Lift Set Up Documentation (Nov 13, 2026)](https://www.seroundtable.com/google-ads-conversion-lift-set-up-doc-update-42530.html) · [Google Ads Help: Set up Conversion Lift based on users](https://support.google.com/google-ads/answer/12005564) · [JXT Group weekly roundup, Nov 11-17, 2026](https://www.jxtgroup.com/this-week-google-meta-ads-nov-17-2026/) · [Google Ads Tutorials: Conversion Lift](https://www.youtube.com/watch?v=-ZoAazB-_cE) · [Conversion lift based on geography](https://www.youtube.com/watch?v=AxtbV8vmi1o) · [PMax uplift experiments](https://www.youtube.com/watch?v=Jkkp2l00TEs)
