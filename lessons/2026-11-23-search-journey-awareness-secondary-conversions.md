---
title: Smart Bidding now learns from your "shallow" conversions: how Search Journey Awareness works and how to feed it
date: 2026-11-23
track: Bidding & Budgets
level: Intermediate
summary: Google published help documentation on Search Journey Awareness, which lets Smart Bidding use secondary conversion actions like sign-ups as learning signals for Search campaigns. Learn what it uses, why there is no switch, and how to set up conversion goals so it helps instead of guessing.
tags: Smart Bidding, secondary conversions, journey-aware bidding, conversion goals, lead generation
---

## In 30 seconds

- Google's help center now documents **Search Journey Awareness**: Smart Bidding uses **secondary conversion actions** (sign-ups, add to cart) as learning signals to predict your **primary** conversion.
- There is **no opt-in and no on/off switch**. It applies automatically to eligible Search campaigns (including AI Max and Search inventory in Performance Max) using Target CPA, Target ROAS, Maximize Conversions or Maximize Conversion Value.
- Your lever is **conversion setup**: track the whole journey, put each action in the right goal, bid on your deepest goal, and keep shallow actions **secondary**.

## What changed

- On **November 17, 2026**, Google published a help page on [Search Journey Awareness](https://support.google.com/google-ads/answer/18867814?hl=en). A [weekly recap](https://www.jxtgroup.com/this-week-google-meta-ads-nov-17-2026/) notes the behavior itself isn't brand new; the documentation is.
- It applies to **Search** campaigns (AI Max included) and to Search inventory inside Performance Max, under Target CPA, Target ROAS, Maximize Conversions or Maximize Conversion Value. Google's page says it is currently Search only.
- Secondary actions sit in goals not used for bidding. Smart Bidding treats them as signals, and per Google ignores signals it predicts won't help. Minimum volume thresholds don't apply to them.
- Reporting stays the same: **All conversions** includes secondary actions; **Conversions** counts only primary actions in your bidding goals.
- Related background: in 2025 [Search Engine Roundtable relayed](https://www.seroundtable.com/google-ads-journey-aware-bidding-40446.html) a LinkedIn report from Jyll Saskin Gales about "journey aware bidding" in the works, and Google now has a [journey-aware bidding page](https://business.google.com/us/accelerate/announcements/journey-aware-bidding/) describing a beta for lead generation on Target CPA or Maximize Conversions. Whether that beta and the new documentation are exactly the same thing isn't spelled out; treat them as closely related.

## Why it matters

Until now, the standard advice was "secondary actions are for observation only." Google's page now says otherwise for eligible Search campaigns: they feed prediction. That matters most for **lead generation** and any business with low volume of the final outcome (closed deals, high-value purchases), where Smart Bidding has few primary conversions to learn from. It also matters for everyone because it means **messy conversion setups now have a bigger downside**: a wrongly categorized action is wrong data in a model you can't switch off.

## The lesson: primary signals, secondary signals

Smart Bidding predicts, for each auction, how likely a click is to produce your primary conversion (and its value). Every prediction model improves with more examples. A sign-up happens far more often than a closed sale, so it carries information about which searches, devices and audiences lead somewhere.

| | Primary action | Secondary action |
|---|---|---|
| Role | What you bid to | A learning signal |
| In "Conversions" column | Yes | No |
| In "All conversions" | Yes | Yes |
| Changing it | Can cause short-term performance swings | Doesn't affect active bidding, per Google |

Google's listed best practices: track shallow and deep actions, assign each to the correct goal (the default category isn't supported), bid on your **deepest** goal ideally with conversion delays under 7 days, send data regularly, and don't remove existing conversions when restructuring. The delay point connects to the [7-day offline conversion rule](lesson.html?l=2026-11-05-offline-conversions-seven-day-rule): if your deep conversion arrives late, the model learns slowly.

> [!WARNING]
> "It ignores signals that won't help" is Google's claim. Nothing public shows how reliably it filters a junk action. Don't add a low-quality action to a goal and trust the filter.

## Worked example: a B2B software lead-gen account

*Illustrative numbers.* A SaaS firm gets 400 form fills a month, 60 become qualified leads (the sales team's "SQL"), and 12 close. Today the primary action is the form fill.

1. **Problem:** bids chase cheap form fills; many are students and job-seekers. Cost per form fill is $40, but cost per SQL is $267 ($16,000 spend / 60) and per closed deal $1,333.
2. **Setup:** import SQL and closed-won as conversion actions and categorize them correctly (for example Qualified lead, Converted lead).
3. **Bidding goal:** bid on SQL as primary if import delay is under 7 days. Keep form fill and demo-page visit as **secondary**.
4. **Read results:** judge on Conversions (SQLs) and cost per SQL, using All conversions only to see funnel shape. Give the change a fair window; see [how the Learning label now works](lesson.html?l=2026-11-21-smart-bidding-learning-status-seven-days).

If SQL cost drifts from $267 toward, say, $220 over a month with stable lead quality, that's a signal worth keeping. If not, you haven't lost much, because the change was mostly relabeling.

## What others are doing

- **Jyll Saskin Gales** (Google Ads coach) was an early public voice on journey-aware bidding, framing it as "using micro-conversions without actually having to implement micro-conversions" ([via Search Engine Roundtable](https://www.seroundtable.com/google-ads-journey-aware-bidding-40446.html)). Her view is it could replace lead scoring with value-based bidding for some lead-gen advertisers. That's an expectation from 2025, not a test result.
- **Google's own page** is the only primary source on mechanics. I found no independent test with numbers for this documented behavior, so treat any performance claim as unproven.

## Where the experts disagree

- **Google:** all eligible Search campaigns are "journey-aware," there is no opt-out, and bad signals are ignored.
- **Practitioners:** many prefer control. Opinions like "micro-conversions pollute bidding" were common precisely because primary/secondary was the way to avoid that; now the boundary is less visible.
- **Evidence:** thin. No public controlled tests were found, and what counts as "journey data sufficient" isn't quantified.

**Our take:** Fix your goal structure now (right categories, deepest goal primary, shallow actions secondary), since you can't opt out anyway. Be skeptical of any claim of a specific uplift until you've compared periods in your own account, and be wrong-footed if your final conversion is too slow or too sparse to bid on.

## Watch

```youtube
8Vjo2swEEOE | Google Ads Journey Aware Bidding: Everything You Need to Know | Jyll Saskin Gales | Google Ads Coach
RC-ar3RfN7o | A Primer on Google Ads Journey Aware Bidding | Ten Thousand Foot View
```

- Jyll Saskin Gales: the clearest walkthrough of the conversion-import setup (note it predates the November documentation).
- Ten Thousand Foot View: a second, independent explanation to compare against.

## Do this today

1. Open Goals and list every conversion action and the goal it sits in.
2. Find actions in the default or wrong category and use "Change to another goal."
3. Decide your deepest trackable outcome; make it primary if its delay is under 7 days.
4. Move shallow actions (page views, clicks to call you don't value) to secondary only if they truly precede the sale.
5. Note today's date and cost per primary conversion so you can compare in a month.

## Quiz

```quiz
[
  {"q": "A Search campaign on Target CPA has form fills as primary and qualified leads imported as secondary. Which column shows qualified leads?", "options": ["Conversions", "All conversions", "Neither", "Conversion value only"], "answer": 1, "why": "Secondary actions appear in All conversions; Conversions counts only primary actions in bidding goals."},
  {"q": "You want to stop Search Journey Awareness on one campaign. What does Google's documentation say?", "options": ["Toggle it off in campaign settings", "Ask your rep to disable it", "There is no switch; you control it through conversion goals", "Switch to manual CPC only"], "answer": 2, "why": "The page describes no opt-out; eligible Smart Bidding Search campaigns are journey-aware and you shape inputs via goals."},
  {"q": "Your deepest conversion (closed deal) is usually reported 30 days after the click. What's the best reading of Google's advice?", "options": ["Make it primary anyway and ignore delay", "Keep a faster qualified-lead action as primary where possible and the slow action for reporting/signals", "Delete all shallow actions", "Remove existing conversions to start clean"], "answer": 1, "why": "Google recommends the deepest goal ideally with delays under 7 days and says not to remove existing conversions when restructuring."}
]
```

---

**Sources:** [Google Ads Help: Search Journey Awareness](https://support.google.com/google-ads/answer/18867814?hl=en) · [Google journey-aware bidding page](https://business.google.com/us/accelerate/announcements/journey-aware-bidding/) · [Search Engine Roundtable, Nov 17 2025](https://www.seroundtable.com/google-ads-journey-aware-bidding-40446.html) · [JXT Group weekly recap](https://www.jxtgroup.com/this-week-google-meta-ads-nov-17-2026/)
