---
title: How the Google Ads auction really works: Ad Rank, Quality Score and why you rarely pay your bid
date: 2026-11-03
track: Fundamentals
level: Beginner
summary: Every search runs a split-second auction. Learn the six things Google says decide who shows and in what order, why a better ad can beat a bigger bid, and how to work out what you actually pay per click.
tags: Ad Rank, Quality Score, CPC, auction, fundamentals
---

## In 30 seconds

- Google runs an auction for **every single search**. Your position comes from **Ad Rank**, not just your bid.
- Ad Rank blends your **bid**, your **ad and landing page quality**, minimum **thresholds**, **competition**, the **search context** and the expected impact of your **assets**.
- You usually pay **less than your max bid**: roughly the minimum needed to beat the advertiser below you. Better quality means a lower price for the same spot.

## Why this matters now

Google is matching ads to longer, messier searches than ever: broad match, AI Max and now ads inside AI answers (see [today's lesson on AI Mode](lesson.html?l=2026-11-03-ads-in-ai-mode-go-global)). As your keywords control less of *where* you show, the auction's judgment of your **ad quality** decides more of whether you win and what you pay. You can't play the new game well without understanding the old engine underneath it.

## Why it matters

Most beginners think Google Ads is "highest bidder wins". If that were true, the biggest budget would always get the top spot and everyone else would be priced out. In reality, a small advertiser with a clearly relevant ad and a fast, useful landing page can **outrank a bigger competitor and pay less per click**. That's the single most encouraging fact in paid search, and it's built into how the auction works.

## The lesson: what goes into Ad Rank

Google's own help page lists **six factors** that make up Ad Rank, recalculated for every search ([Google Ads Help: About Ad Rank](https://support.google.com/google-ads/answer/1722122)):

| Factor | What it means | What you control |
|---|---|---|
| **Your bid** | The most you're willing to pay for a click | Bid or bid strategy target |
| **Ad and landing page quality** | How relevant and useful your ad and page are, summarized as Quality Score | Ad copy, keyword grouping, landing page |
| **Ad Rank thresholds** | Minimum scores an ad must reach to show at all, or to show above the results | Quality + bid together |
| **Auction competitiveness** | How close your Ad Rank is to competitors' | Indirectly, by improving the other factors |
| **Search context** | The words searched, location, device, time of day, other results on the page | Targeting and bid adjustments |
| **Expected impact of assets** | How much sitelinks, callouts, images and other assets are expected to help | Adding strong, relevant assets |

Three ideas to take away:

1. **Ad Rank is calculated twice per auction**: once to decide whether your ad is eligible to show, and again to rank it. If you fall below a threshold, you don't show, no matter how much budget you have.
2. **Quality is a multiplier on your money.** A higher quality ad needs a lower bid to reach the same Ad Rank.
3. **Thresholds explain "why am I below the results?"** Google's simplified example: if the threshold for the top position is 40 and your Ad Rank is 30, you can still show below the organic results, but not above them.

> [!NOTE]
> The 1–10 **Quality Score** you see in your account is a *diagnostic summary*, not the exact number used in the auction. Google calculates ad quality fresh at auction time, for each search. Use Quality Score as a health check, not a target.

## Worked example: three plumbers, one search

*Illustrative numbers using the classic teaching model. Google doesn't publish an exact formula, and the real auction also weighs context, thresholds and assets.*

Someone in Dubai searches **"emergency plumber near me"**. Three advertisers compete:

| Advertiser | Max bid | Quality Score | Simplified Ad Rank (bid × QS) |
|---|---|---|---|
| A: big franchise | $4.00 | 5 | **20.0** |
| B: local specialist | $2.50 | 9 | **22.5** |
| C: general handyman | $3.00 | 6 | **18.0** |

**Ranking:** B (22.5) takes position 1, A (20.0) position 2, C (18.0) position 3. The advertiser with the *lowest* bid wins, because its ad and landing page are far more relevant.

**What does each pay?** In the classic model, you pay just enough to beat the Ad Rank below you:

> Actual CPC ≈ (Ad Rank of the advertiser below you ÷ your Quality Score) + $0.01

- **B pays** 20.0 ÷ 9 + 0.01 = **$2.23** (bid was $2.50)
- **A pays** 18.0 ÷ 5 + 0.01 = **$3.61** (bid was $4.00)
- **C** pays whatever beats the threshold or the next ad below it.

So the local specialist gets the **top spot for $1.38 less per click** than the franchise pays for second place. Over 1,000 clicks a month, that's **$1,380** the specialist can reinvest.

> [!TIP]
> Google's help page adds a twist the simple model misses: the **gap** between Ad Ranks matters. If you're far ahead of the next ad you win more often, but your price can also be higher. Close auctions are cheaper to win, and easier to lose.

## What others are doing

- **Former Googler Jyll Saskin Gales** stresses that Quality Score is a *diagnostic*, not the auction itself, so chasing a 10/10 isn't the goal. Improving the three components (expected CTR, ad relevance, landing page experience) is. Her video below is the clearest explanation of this distinction.
- **ROI Revolution** breaks down how Ad Rank and CPC interact, including why your actual CPC is usually below your max bid. ([ROI Revolution](https://roirevolution.com/blog/introduction-to-googles-ad-auction-part-2-adrank-and-cpc/))
- **Common practitioner playbook:** tighten keyword-to-ad relevance (group close-meaning keywords together), put the searcher's words in at least one headline, and fix slow or generic landing pages. Those three moves target the three Quality Score components directly.

## Where the experts disagree

**Does Quality Score still matter in the age of Smart Bidding?** Some practitioners argue that with automated bidding, broad match and AI Max, the visible Quality Score is close to irrelevant: the system evaluates quality per query in real time, and plenty of profitable keywords show a QS of 3 or 4. Others point out that the *inputs* of quality (relevance, CTR, landing page experience) still feed every auction, and that ignoring them means paying more for every click, whatever the bid strategy.

Google's own documentation sides with the second view: ad quality is one of the core Ad Rank factors and higher quality "can lead to lower costs" ([Google Ads Help](https://support.google.com/google-ads/answer/1722122)). The disagreement is really about the **metric**, not the **concept**.

**Our take:** Don't optimize the Quality Score number. Optimize what it measures. If a keyword has a low QS *and* poor results, fix relevance and the landing page first. If it has a low QS but hits your CPA or ROAS target, leave it alone.

## Watch

```youtube
DPOqrGqX0Rs | Quality Score EXPLAINED: The TRUTH About Ad Rank and Ad Quality | Jyll Saskin Gales
H4ODaYQOGN0 | What Is Ad Rank? Google Ads Ad Rank Explained For Beginners | Surfside PPC
DiFbz24AeCo | What is Quality Score? Google Ads Quality Score Explained For Beginners | Surfside PPC
```

- **Jyll Saskin Gales:** an ex-Googler's view on what Quality Score is and isn't. Watch this first.
- **Surfside PPC (Ad Rank):** a gentle visual walkthrough if the worked example above felt fast.
- **Surfside PPC (Quality Score):** where to find the QS columns in your account and how to read them.

## Do this today

1. In **Keywords**, add the columns **Quality Score, Exp. CTR, Ad relevance** and **Landing page exp.** (under Modify columns → Quality Score).
2. Sort by **cost**. Look at your 10 most expensive keywords only. Those are where quality improvements save the most money.
3. For each one rated **"Below average"** on a component:
   - Ad relevance → write a headline that echoes the keyword's meaning.
   - Exp. CTR → test a sharper offer or a more specific benefit.
   - Landing page → check speed on mobile and that the page answers the exact search.
4. Add or refresh **sitelinks, callouts and images**. Assets are one of the six Ad Rank factors.
5. Note today's average CPC for those 10 keywords. Recheck in 3–4 weeks.

## Quiz

```quiz
[
  {
    "q": "Advertiser X bids $5 with mediocre quality. Advertiser Y bids $3 with excellent quality. Who can win the top position?",
    "options": ["Always X, because it bids more", "Y can, because quality multiplies the value of its bid", "Neither: position is random", "Whoever has the bigger daily budget"],
    "answer": 1,
    "why": "Ad Rank combines bid with quality and other factors, so a lower bid with much higher quality can outrank a bigger bid."
  },
  {
    "q": "Your ad shows, but only below the organic results, never above. What's the most likely reason?",
    "options": ["Your daily budget is too small", "Your Ad Rank clears the threshold to show, but not the higher threshold for top positions", "Google penalizes new accounts", "Your ads are disapproved"],
    "answer": 1,
    "why": "Google sets different minimum thresholds for different positions. Raising quality or bid can lift you over the top-of-page threshold."
  },
  {
    "q": "In the classic model, the ad below you has an Ad Rank of 24 and your Quality Score is 8. Roughly what do you pay per click?",
    "options": ["$8.00", "$3.01", "$24.01", "$0.33"],
    "answer": 1,
    "why": "24 ÷ 8 = 3, plus $0.01 = $3.01. You pay just enough to beat the advertiser below you."
  }
]
```

---

**Sources:** [Google Ads Help: About Ad Rank](https://support.google.com/google-ads/answer/1722122) · [ROI Revolution: Ad Rank and CPC](https://roirevolution.com/blog/introduction-to-googles-ad-auction-part-2-adrank-and-cpc/)
