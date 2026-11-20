---
title: Seasonality adjustments before Black Friday: when to tell Smart Bidding a sale is coming (and when to leave it alone)
date: 2026-11-20
track: Bidding & Budgets
level: Intermediate
summary: Google now lists Demand Gen among the campaign types that can use seasonality adjustments, just as Black Friday approaches. Learn what the tool does, how to size an adjustment from your own data, and why Google itself says to use it only for short, big conversion-rate swings.
tags: seasonality adjustments, Smart Bidding, Black Friday, Demand Gen, target CPA, target ROAS
---

## In 30 seconds

- A **seasonality adjustment** tells Smart Bidding to expect a **temporary change in conversion rate** (for example a flash sale), so it bids accordingly from the first hour and **returns to normal afterwards**.
- Google's help page says to use it for events of about **1 to 7 days**, with an expected **big** conversion-rate change, and warns it may work less well past **14 days**. Smart Bidding already handles ordinary seasonality.
- **Demand Gen** is now listed as supported with Target CPA or Target ROAS, but Google's own pages disagree, so **check the scope menu in your account** before planning around it.

## What changed

- Google's [Demand Gen Drop post of 18 November 2026](https://www.relevantaudience.com/google-ads-en/google-november-2026-demand-gen-drop-feeds-checkout-seasonality/) (as summarized by Relevant Audience, a Tier 2 source) calls seasonality adjustments "newly available" in Demand Gen, with no rollout date or market list.
- Google's ["About seasonality adjustments"](https://support.google.com/google-ads/answer/10369906) help page now lists **Search, Shopping, Demand Gen and Display** with Target ROAS or Target CPA, and **Performance Max and App (beta)** with any bid strategy. Travel campaigns are not supported.
- Reported but not settled: Relevant Audience [noted in October](https://www.relevantaudience.com/google-ads-en/google-ads-seasonality-adjustments-demand-gen/) that the companion "Create a seasonality adjustment" page still named only Search, standard Shopping and Display, and that Google has not said whether Demand Gen works without a target.
- Setup path: Tools, then Budgets and bidding, then Adjustments, then the Seasonal tab. One adjustment can cover up to 2,000 specific campaigns.

## Why it matters

Black Friday and Cyber Monday are the classic case: conversion rate jumps for a short, known window because of your discount. Smart Bidding learns from history, so on day one of a surprise 30% off it can underbid, because yesterday's data says your conversion rate is lower than it is about to be. The adjustment lets *you* hand it information it can't know yet.

It cuts both ways. If you expect a conversion rate *drop* (say a site migration), you can enter a negative adjustment. And if your promotion isn't actually going to change conversion rate, an adjustment just makes you overbid.

## The lesson: an adjustment is a forecast you are making

Smart Bidding sets each bid roughly as predicted conversion rate times target value (this is the idea behind [how the auction works](lesson.html?l=2026-11-03-how-the-google-ads-auction-works) and bid-to-quality trade-offs). A seasonality adjustment changes the **conversion rate** side of that prediction for the dates you choose. It does not change your target CPA or ROAS, and it is not a manual bid modifier.

| Situation | Use an adjustment? | Why |
|---|---|---|
| 3-day sale, past sales lifted conversion rate a lot | Yes | Short, big, predictable shift |
| Normal Q4 ramp-up over six weeks | No | Smart Bidding adapts gradually; Google warns about long windows |
| Evergreen "always 10% off" | No | Not a temporary event |
| Site down for planned maintenance | Maybe, negative | Conversion rate will fall temporarily |
| First-ever sale, no history | Carefully | You are guessing; start modest |

Key rule: **size it from your own data.** Look at the same event last year for the same campaign type, and treat that lift as an upper bound, not a forecast. Use the exact sale window, and check your account time zone matches the sale hours, since adjustments follow dates.

> [!WARNING]
> A too-large adjustment makes Smart Bidding bid aggressively for conversions that never arrive. Because the effect is on bids, you pay for the mistake in clicks you have already bought.

## Worked example: a 3-day Black Friday sale

> [!EXAMPLE]
> *Illustrative numbers.* A shop runs a Target ROAS campaign. Normal conversion rate is 2.0%. Last year's 3-day sale lifted it to 3.0%, a 50% increase, but that year also had a bigger discount.

1. Last year's lift: (3.0 − 2.0) / 2.0 = **+50%**.
2. This year the discount is smaller, so you judge the lift will be about 60% as strong: 50% × 0.6 = **+30%**.
3. You enter a **+30%** conversion-rate adjustment for the exact three days.
4. If the true lift ends up at +30%, bids are right from hour one. If it ends up at +10%, you overbid by roughly 20 points of conversion-rate expectation for three days. Watch ROAS daily and shorten or edit the adjustment if it runs hot.
5. After the end date nothing needs undoing: per Google, campaigns return to baseline.

Compare with the alternative of no adjustment: Smart Bidding would learn the lift only after conversions come in, so the first day or so may underspend while the best traffic is cheapest to win.

## What others are doing

- **Andrew Lolk** and **Grow My Ads** both have video guidance on setting seasonal adjustments for Black Friday (see Watch below). I only verified the titles and channels; check each video's own claims against the help page.
- **Relevant Audience's** practitioner notes (analysis, not Google guidance) say to size from past data for the same event, use the exact sale window and confirm the time zone. This is one source, not a tested study.
- Related timing tip from [our new-customer bidding lesson](lesson.html?l=2026-11-18-new-customer-value-multipliers): if you also raise new-customer value, change one lever at a time, or you won't know which one moved your numbers.

## Where the experts disagree

- **Google:** use it only for short events with major conversion-rate changes; Smart Bidding already handles seasonality.
- **Some practitioners:** one popular video is titled as the "RIGHT way to set them (not what Google recommends)", so there is open debate about sizing and window length. I haven't verified the video's argument, so treat it as a viewpoint.
- **Thin evidence:** I found no published, independent test with numbers showing adjustments beat no adjustment. Google publishes no sizing formula either.
- **Demand Gen scope:** Google's two help pages conflict, so eligibility is unconfirmed.

**Our take:** For a short sale with a clear, repeatable lift on Target CPA or ROAS campaigns, use a modest adjustment sized *below* last year's lift and monitor daily. If you have no history, skip it or go small. It's wrong when the window is long or the lift is speculative.

## Watch

```youtube
Yc-8Vo8J5pA | Google Ads Seasonality Adjustments: The RIGHT Way to Set Them Correctly (Not What Google Recommends) | Grow My Ads
Ph5f8I25rD0 | How to Set Seasonal Bid Adjustments for Black Friday | Andrew Lolk Talks PPC
5GqrDfFszQM | When and How to Set Up Seasonality Bid Adjustments in Google Ads | Solutions 8
```

- Grow My Ads: a contrarian take on sizing; compare it with Google's guidance.
- Andrew Lolk: a Black Friday-specific walkthrough from a known paid search practitioner.
- Solutions 8: a general when-and-how for setup.

Check each video's upload date; some may predate the Demand Gen change.

## Do this today

1. List your sale dates and which campaigns they cover.
2. Check Tools, Budgets and bidding, Adjustments, Seasonal: confirm your campaign type appears in the scope menu.
3. Pull last year's conversion rate for the same window versus the two weeks before.
4. Discount that lift for this year's offer, then enter it for the exact dates only.
5. Confirm your account time zone matches the sale start and end.
6. Check ROAS or CPA daily during the sale and be ready to edit.
7. Write down the lift you actually saw, for next year.

## Quiz

```quiz
[
  {"q": "A shop's conversion rate normally is 2% and a 2-day sale is expected to reach 2.6%. What adjustment fits?", "options": ["+6%", "+30%", "+60%", "-30%"], "answer": 1, "why": "(2.6 - 2.0) / 2.0 = 30% relative increase. Adjustments are relative, not percentage points."},
  {"q": "Which situation is the poorest fit for a seasonality adjustment?", "options": ["A 3-day flash sale", "A planned 2-day site outage", "A six-week gradual holiday ramp", "A one-day promo with history"], "answer": 2, "why": "Google says it suits 1 to 7 day events and may work less well beyond 14 days; Smart Bidding already handles gradual seasonality."},
  {"q": "Your adjustment of +50% is set, but day-one conversion rate is only up 10%. What is the best move?", "options": ["Leave it, bids will correct themselves", "Edit or shorten the adjustment and watch ROAS", "Double the budget", "Switch to manual CPC"], "answer": 1, "why": "The adjustment is your forecast; if reality differs you overbid, so correct the forecast quickly."}
]
```

---

**Sources:** [Google Ads Help: About seasonality adjustments](https://support.google.com/google-ads/answer/10369906) · [Relevant Audience: November Demand Gen drop](https://www.relevantaudience.com/google-ads-en/google-november-2026-demand-gen-drop-feeds-checkout-seasonality/) · [Relevant Audience: seasonality adjustments in Demand Gen](https://www.relevantaudience.com/google-ads-en/google-ads-seasonality-adjustments-demand-gen/) · YouTube videos linked above
