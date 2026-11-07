---
title: The 7-day rule that can make your offline conversions invisible to attribution modeling
date: 2026-11-05
track: Measurement & Tracking
level: Advanced
summary: Google's documentation says offline conversions uploaded more than seven days late are skipped by the attribution modeling calculations, even though your regular reports still count them. Learn what that means for data-driven attribution and bidding, how to tell if you're affected, and how to fix the upload lag.
tags: offline conversions, attribution, data-driven attribution, GCLID, lead gen
---

## In 30 seconds

- Google's attribution documentation says offline conversions uploaded **more than 7 days** after the event are **bypassed by the attribution modeling calculations**, while standard report columns **still record them**.
- That means your **Model Comparison view and attribution reports can disagree with your campaign columns**, and slow uploads may weaken the data that feeds **data-driven attribution** and automated bidding.
- Fix it by **uploading offline conversions daily** (or at least well under 7 days), and don't use attribution reports alone to move budget.

## What changed

This isn't a new feature. It's a rule in Google's documentation that surfaced in practitioner discussions. Consultant Adriaan Dekker flagged it on LinkedIn on **August 22, 2026**, crediting Hana Kobzova, and PPC Land wrote it up ([PPC Land](https://ppc.land/google-ads-attribution-ignores-offline-conversions-uploaded-after-7-days/)). According to that report:

- Google's attribution documentation says the daily modeling engine ("Search funnels") processes conversions from the **last seven days**.
- Offline conversions uploaded more than seven days after the event are "bypassed by the attribution modeling calculations".
- **Standard reporting columns still record them in full.**
- Google's guidance is to keep upload latency under seven days so those journeys are included.

> [!WARNING]
> **The documentation is ambiguous.** PPC Land notes the rule is described two ways, one keyed to the conversion's age and one keyed to upload delay. They give different results: a conversion from 14 days ago uploaded two days later passes the delay test but may fail the age test. Google doesn't say which applies, which matters most for long sales cycles. Treat this as a documented risk, not a precisely defined rule.

## Why it matters

If you sell something with a long sales cycle (B2B, real estate, cars, education, high-ticket services), you probably upload offline conversions in batches: leads become opportunities, opportunities become sales, and someone exports a spreadsheet to upload. Often weekly or monthly.

The sale you upload might be 30 days after the click. That's fine for standard reporting. But if the attribution model skips it because it arrived late, then the model, and anything built on it, learns from a **filtered version of your results**. Google links upload latency directly to "automated bidding efficiency", which is why this matters beyond reporting.

> [!NOTE]
> Separately, a Search Engine Land report says that uploading offline conversions to multiple ad accounts in a single batch may cause Google to count conversions in accounts that didn't generate the clicks. I couldn't open that article, and I found no confirmation from Google, so treat it as an unconfirmed report. If you upload across accounts, spot-check where conversions land.

## The lesson: reporting and modeling are two different calculations

| | Standard columns (Campaigns, Conversions) | Attribution modeling (Model Comparison) |
|---|---|---|
| **Counts conversions by** | The standard reporting columns | The modeling engine's daily processing window |
| **Late offline uploads** | Included | Skipped if more than 7 days late (per documentation) |
| **Networks and campaign types** | Includes Search Partners, Gmail and App campaigns by default | Reportedly excludes Search Partners, Gmail and App campaigns |
| **Use it for** | What actually happened | Understanding how channels and touchpoints contribute |

PPC Land lists four structural reasons the two views diverge: timing convention, network coverage, campaign-type coverage and upload latency. Google calls differences between them normal.

The practical takeaway: **a gap between Model Comparison and your campaign columns isn't necessarily an error, but a growing gap is a sign to check your upload lag.**

## Worked example: a B2B software company

*Illustrative numbers, not real account data.*

A SaaS company has a **35-day sales cycle**. Marketing exports closed deals from the CRM and uploads them to Google Ads **on the 1st of every month**.

A deal closes on **March 3**. It's uploaded on **April 1**, 29 days later. Under the seven-day rule, it's bypassed by attribution modeling, but still counted in campaign columns.

What the team sees in March:

| | Campaign columns | Model Comparison (data-driven) |
|---|---|---|
| Closed deals attributed | 40 | 12 |
| Revenue | $200,000 | $60,000 |

The team's first reaction: "Model Comparison says our campaigns brought only $60,000. Cut the budget." That's the wrong conclusion. 28 of the 40 deals were uploaded late and ignored by the model. Nothing is wrong with the campaigns, but cutting budget based on the filtered view would hurt.

**The fix:** automate a **daily upload** from the CRM. Now a deal closed on March 3 is uploaded on March 4. The model sees it. The two views move closer together. Smart Bidding gets feedback within a day, not within a month.

> [!TIP]
> If your sales cycle is 30+ days, you can't speed up the sale, but you **can** speed up the upload. Import the conversion the day it changes state in your CRM, and import intermediate stages (qualified lead, opportunity) as separate conversion actions so bidding gets earlier signals.

## What others are doing

- **PPC Land's own advice is limited to Google's guidance:** keep upload latency under seven days, and don't treat Model Comparison output as a complete picture or use it alone to shift budget between networks ([PPC Land](https://ppc.land/google-ads-attribution-ignores-offline-conversions-uploaded-after-7-days/)).
- **Practitioners often choose between two methods** for getting offline data in: importing a captured **GCLID** (the click ID) with the sale, or using **enhanced conversions for leads**, which matches hashed lead details. One of the videos below compares them.
- **Earlier bugs show why this deserves attention.** Google acknowledged a September 2024 GCLID conversion tracking bug and a December 2025 problem where attributed conversions were reportedly at 50–60% of normal levels, fixed in December. Offline pipelines are an area where small problems go unnoticed for a long time.

## Where the experts disagree

**Google's view:** the rule keeps the daily modeling engine fast and consistent. Late data is still recorded, and uploading within seven days is easy guidance.

**The skeptics' view:** the rule is poorly defined. Whether it keys to event age or upload delay isn't clear, and the answer decides whether long-cycle advertisers lose data. A rule this consequential belongs in an obvious place, not in a documentation section that practitioners found by accident.

**Where the evidence is thin:** nobody has published a test showing how much faster uploads improve bidding results. The mechanism is plausible, but the size of the benefit is unknown.

**Our take:** Treat **daily upload** as the default for any offline conversion, and treat Model Comparison as a filtered view, not the truth. If you have a long sales cycle, ask Google support which interpretation (event age or upload delay) applies to your account, and write the answer down.

## Watch

```youtube
LajrjqA90C4 | What is GCLID in Google Ads and How to Track Offline Conversions using GCLID | I Know PPC
rNDMU-IdXkw | Enhanced Conversions for Leads vs Offline Conversion Import | Freak.Marketing
sxuIPVUVq8Y | How To Import Offline Conversions In Google Ads | Titan
```

None of these videos covers the seven-day rule, and I haven't confirmed how recent they are. They're included for the setup background.

- **I Know PPC:** what a GCLID is and how it connects a sale back to a click.
- **Freak.Marketing:** helps you choose between GCLID import and enhanced conversions for leads.
- **Titan:** the upload steps, if you currently do it by hand.

Related: [Customer Match is dropping the hashing requirement on Nov 16](lesson.html?l=2026-11-03-customer-match-encrypted-uploads) also affects how first-party data reaches Google.

## Do this today

1. **List your offline conversion actions** (Goals → Conversions) and note how each one is uploaded: API, CRM integration, scheduled file, or manual.
2. **Measure your lag.** For the last 10 uploaded conversions, subtract the conversion date from the upload date. Anything above 7 days is a flag.
3. **Move to daily.** If you upload by hand, set a scheduled import (Google Ads supports scheduled file imports) or ask your developer for a daily API upload.
4. **Compare views.** Pick last month and compare conversions in Campaigns columns to Model Comparison. Note the gap as a baseline.
5. **Don't cut budget** from an attribution report alone. Cross-check against the standard columns and your CRM.
6. **If you upload to several accounts in one batch,** spot-check that conversions appear in the right account.
7. **Ask Google support** whether the seven-day rule keys to event age or upload delay for your account.

## Quiz

```quiz
[
  {
    "q": "A deal closes on day 20 after the click and is uploaded on day 22. According to the documentation's two descriptions, what's the risk?",
    "options": ["None: the upload delay is only 2 days", "It passes the delay test, but may fail the event-age test, and Google doesn't say which applies", "It is always rejected", "It is always counted in attribution"],
    "answer": 1,
    "why": "PPC Land notes the documentation describes the rule both by conversion age and by upload delay, with different results for this case."
  },
  {
    "q": "Model Comparison shows far fewer conversions than your campaign columns. Which is the most sensible first check?",
    "options": ["Assume the campaigns stopped working", "Check how late your offline conversions are uploaded, and which networks and campaign types the model excludes", "Delete the conversion action", "Switch to last-click attribution"],
    "answer": 1,
    "why": "The two views differ by design: timing, network coverage, campaign-type coverage and upload latency."
  },
  {
    "q": "Which change most directly reduces the risk described in this lesson?",
    "options": ["Uploading offline conversions once a month in bulk", "Uploading each offline conversion daily, close to when it changes state in the CRM", "Turning off data-driven attribution", "Uploading to more ad accounts"],
    "answer": 1,
    "why": "Google's guidance is to keep upload latency under seven days. Daily uploads comfortably do that."
  }
]
```

---

**Sources:** [PPC Land: Google Ads attribution ignores offline conversions uploaded after 7 days](https://ppc.land/google-ads-attribution-ignores-offline-conversions-uploaded-after-7-days/) · [Search Engine Land: Google Ads may count offline conversions in the wrong accounts](https://searchengineland.com/google-ads-may-count-offline-conversions-in-the-wrong-accounts-500544) (headline only; article not opened)
