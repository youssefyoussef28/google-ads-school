---
title: Data Strength Uplift: what Google's new "recovered conversions" number tells you (and what it can't)
date: 2026-11-15
track: Measurement & Tracking
level: Intermediate
summary: Google Ads is rolling out a metric that estimates how many extra conversions your first-party data setup recovers. Learn what it counts, the rules for when it appears, why "recovered" is not "incremental", and how to check it against your own numbers.
tags: data strength, enhanced conversions, Data Manager, tag gateway, measurement
---

## In 30 seconds

- Google Ads now has a **Data Strength Uplift** metric: an estimate of the **% of extra conversions** your account reported over the **last 14 days** thanks to enhanced conversions for leads, **Google tag gateway** and multi-source **Data Manager** connections.
- It is **Google's own estimate**, labeled directional, with **no published formula**. It shows only at **+1% or more**, is capped at **">50%"**, and does **not** affect billing or Smart Bidding.
- "Recovered" means **previously unmeasured**, not **new sales**. Use it to confirm your tracking is healthy, then verify against your CRM or order data.

## What changed

Google announced the metric on **September 10, 2026** in a post on the [Google Ads & Commerce Blog](https://blog.google/products/ads-commerce/data-strength-updates/). The same package expanded Data Manager into Google Analytics and DV360, made the Data Manager API "universal" on the IAB Tech Lab's ECAPI standard, and added built-in diagnostics ([Search Engine Journal](https://www.searchenginejournal.com/google-expands-data-manager-and-adds-uplift-measurement/589025/)).

The detailed rules are in Google's [help page](https://support.google.com/google-ads/answer/18931164?hl=en), which Search Engine Roundtable surfaced on **November 12**, as summarized by [PPC Land](https://ppc.land/google-ads-shows-its-first-party-data-uplift-only-when-it-tops-1/). The key facts:

- **What it estimates:** the percentage of additional conversions over a rolling 14 days from enhanced conversions for leads, Google tag gateway and multi-source Data Manager connections.
- **Baseline:** compared with a standard website tag (online) or GCLID-only imports (offline). How that baseline is built isn't explained.
- **Display rules:** shown only at **+1% or higher**, with the value capped at "above 50%". Below 1% the card is simply hidden.
- **Where to find it:** under Summary in the Goals menu, and in a hover card on the "Active" conversion status.
- **Requirements:** conversion action must be **Active**; at least **100 website or 20 offline conversions in 14 days**; new features need **30 days** before an estimate appears.
- **Excluded:** Search Ads 360, imported Google Analytics and Floodlight conversions, and (for now) enhanced conversions for web alone, which Google says is a future launch with no date.
- **Rollout:** phased, with no country list or completion date.

Google's headline numbers, all Google-run: advertisers building data strength with tag gateway see an **average 14% conversion uplift** and **over 20%** for Demand Gen; those connecting offline and app data to Data Manager see an **average 26% higher incremental ROAS**. The post's footnotes give the periods (for example, 14% compares July to December 2024 with January to June 2025; 20%+ is June 3 to 17, 2026).

> [!NOTE]
> Rollout is phased, so your account may not show the card yet. And a missing card doesn't tell you why: it could be an unmet volume floor, an excluded conversion type, or the 30-day wait.

## Why it matters

For years the question "is our tracking actually working?" was answered by guesswork. This metric is Google's first in-UI attempt at putting a number on it. It matters most if you run **lead gen** (enhanced conversions for leads, offline imports) or **Demand Gen**, where lost signals are common after browser privacy changes and ad blockers.

It also matters because of what you *shouldn't* do with it: treat it as proof of ROI. It measures **measurement**, not marketing.

## The lesson: recovered is not incremental

Three different things get confused:

| Term | Meaning | Example |
|---|---|---|
| **Recovered conversion** | A real conversion that happened but your old setup couldn't see | A buyer on Safari whose click ID was dropped |
| **Modeled conversion** | Google's statistical estimate for conversions it can't observe directly | Consent-denied users |
| **Incremental conversion** | A conversion that happened *because* of the ad | Only provable with a holdout or lift test |

The uplift metric covers the first two (the help page says it counts observed and modeled conversions). Neither tells you whether the ad *caused* the sale. Better tracking changes what you **see** and, through bidding, what Google **learns from**. It doesn't create demand.

The honest benefit is indirect: more complete signals can improve Smart Bidding's decisions. Google's 26% incremental ROAS figure is a claim about that effect, but it is an average across Google's own data, not a promise for your account.

## Worked example: a lead-gen advertiser

*Illustrative numbers, not real account data.*

A home-services company records **400 conversions** in 14 days with a standard tag. After adding enhanced conversions for leads and tag gateway, the account reports **460**.

1. Extra conversions: 460 − 400 = **60**
2. Uplift: 60 ÷ 400 = **15%**. That is roughly what the card would display.
3. Check the backend: the CRM shows **310 real, qualified leads** for those same 14 days, versus **285** the month before the setup change, a rise of about 9%.

Why the gap between 15% and 9%? Some recovered conversions are duplicates, junk leads, or leads that would have arrived anyway through another channel. The lesson: **the card says your tracking sees more; the CRM says how much of it is business.**

> [!WARNING]
> The 14-day window is short. A promotion, a tagging fault or a tracking outage can swing the figure. Don't make a decision off one reading.

## What others are doing

- **Google itself** pairs the metric with a "connect, match, grow" message: connect first-party sources in Data Manager, enable enhanced conversions and tag gateway, make sure conversion status is Active ([Google blog](https://blog.google/products/ads-commerce/data-strength-updates/)).
- **Search Engine Journal's** author notes the metric shows recovered *volume*, not quality or business value, and argues advertisers still need to tie platform data to CRM, revenue and lead quality ([SEJ](https://www.searchenginejournal.com/google-expands-data-manager-and-adds-uplift-measurement/589025/)).
- **PPC Land** lists the main limits: no formula, a short window, and the ">50%" cap hiding changes among the biggest gains ([PPC Land](https://ppc.land/google-ads-shows-its-first-party-data-uplift-only-when-it-tops-1/)).

For related context, see [how offline uploads can miss attribution modeling](lesson.html?l=2026-11-05-offline-conversions-seven-day-rule) and [Customer Match's move away from hashing](lesson.html?l=2026-11-03-customer-match-encrypted-uploads).

## Where the experts disagree

**Google's view:** better data strength means more measured conversions and better bidding; the metric lets you see lift "without running manual experiments" (as PPC Land paraphrases the positioning).

**The skeptics' view:** the number is calculated by the same platform that benefits when you share more data, includes modeled conversions, and can't be audited. An unaudited estimate is weaker evidence than a holdout test. The exclusions (SA360, Floodlight, enhanced conversions for web) also mean the absence of a card says nothing about whether your setup is good.

**Where the evidence is thin:** Google's averages come from its own data, with varied periods and scopes. No independent test of the 14% or 26% figures was found in this research.

**Our take:** Use the card as a **health check**, not a result. If it appears and is healthy, good: cross-check against CRM or order data monthly. If it doesn't appear, don't panic. Where it would mislead you is if you cite it to a client or boss as proof that ads are working.

## Watch

```youtube
-xK3VMW3iqU | Google Ads Data Manager: Data prep guide | Google Ads
L_hlecR4-zY | Enhanced Conversions in Google Ads (User-Provided Data Tag in GTM) | Loves Data
```

Neither covers the new uplift card itself; both teach the setup that feeds it.

- **Google Ads:** how to prepare first-party data before connecting it in Data Manager.
- **Loves Data:** a walk-through of implementing enhanced conversions with the user-provided data tag in Tag Manager.

## Do this today

1. Open Goals > Summary and look for the Data Strength Uplift card. Note the value, or note that it's absent.
2. If absent, check the three common causes: conversion status not Active, fewer than 100 website / 20 offline conversions in 14 days, or a feature adopted less than 30 days ago.
3. List which first-party features you actually use: enhanced conversions for leads, tag gateway, Data Manager connections.
4. Pull the last 14 days of real leads or orders from your CRM or store backend and compare the percentage change with what Google reports.
5. Record the reading in a spreadsheet weekly, so one odd 14-day window doesn't mislead you.
6. If you run offline imports, confirm they upload daily, per the earlier lesson.

## Quiz

```quiz
[
  {"q": "The uplift card shows +18% on your account. What does that most accurately mean?", "options": ["Your ads caused 18% more sales", "Google estimates 18% more conversions were reported over 14 days than a standard tag would have captured", "Your ROAS rose 18%", "Smart Bidding is now 18% more efficient"], "answer": 1, "why": "It's an estimate of additional reported (observed plus modeled) conversions versus a baseline. It doesn't prove causation or ROAS gains, and doesn't affect bidding directly."},
  {"q": "Your account has no uplift card. Which conclusion is justified?", "options": ["Your tracking is broken", "Your setup adds nothing", "You can't tell yet: the card is hidden below +1%, under the volume floors, within 30 days of adopting a feature, for excluded types, or during phased rollout", "Google has disabled enhanced conversions"], "answer": 2, "why": "Google doesn't reveal which reason applies, so absence is not evidence either way."},
  {"q": "A client wants to quote the card as proof your ads work. Best reply?", "options": ["Agree, it is Google's official metric", "Explain it measures recovered, partly modeled conversions, and propose a CRM comparison or holdout test for incrementality", "Ignore it entirely", "Ask Google to raise the cap above 50%"], "answer": 1, "why": "Recovered is not incremental, and the figure is an unaudited platform estimate. A backend check or holdout test gives stronger evidence."}
]
```

---

**Sources:** [Google Ads & Commerce Blog, Sep 10 2026](https://blog.google/products/ads-commerce/data-strength-updates/) · [Google Ads Help: Data Strength uplift metric](https://support.google.com/google-ads/answer/18931164?hl=en) · [Search Engine Journal](https://www.searchenginejournal.com/google-expands-data-manager-and-adds-uplift-measurement/589025/) · [PPC Land](https://ppc.land/google-ads-shows-its-first-party-data-uplift-only-when-it-tops-1/) · [Relevant Audience](https://www.relevantaudience.com/google-ads-en/google-ads-data-strength-uplift-metric-help-doc/)
