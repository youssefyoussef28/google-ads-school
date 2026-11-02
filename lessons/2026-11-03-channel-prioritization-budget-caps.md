---
title: New channel controls: rank Search above Display and cap partner spend (and why the cap isn't a ceiling)
date: 2026-11-03
track: Bidding & Budgets
level: Intermediate
summary: Google Ads now lets you mark channels as High or Low priority and cap how much of your daily budget Low-priority channels can use. Learn when these controls actually change your spend, why the cap is "best effort", and the February 2027 change Search advertisers need to plan for.
tags: budgets, Search partners, Display Network, channel controls, Performance Max
---

## In 30 seconds

- You can now rank channels (Google Search, Search partners, Display Network and others) as **High** or **Low priority**, and give Low-priority channels a **daily % cap**.
- Priority only changes anything when your campaign is **limited by budget**. A tCPA/tROAS campaign with headroom will barely notice.
- The cap is **best-effort, not a hard ceiling**. And in **February 2027**, Search campaigns with Display expansion move to this new system automatically.

## What changed

On **October 14, 2026**, Google introduced two optional controls, rolling out from October 15 ([PPC Land](https://ppc.land/google-ads-lets-advertisers-limit-display-and-partner-spend-by-percentage/), [Search Engine Land](https://searchengineland.com/google-ads-introduces-channel-prioritization-and-budget-allocation-controls-495946), [Search Engine Journal](https://www.searchenginejournal.com/google-ads-introduces-channel-prioritization-and-budget-allocation/592833/)):

- **Channel prioritization:** mark each channel as **High** or **Low** priority. High-priority channels get budget first; Low-priority channels get what's left.
- **Budget allocation:** set a **daily percentage cap** on Low-priority channels, based on your campaign's *average daily budget*. Setting **0%** stops spend on that channel.
- **Where:** Search, Shopping, Performance Max and Demand Gen. In PMax and Demand Gen, Google's own surfaces (Search, YouTube, Maps and others) are grouped together as "Google channels".
- **Availability:** in the Google Ads interface and Search Ads 360 first. **Google Ads API v26.1** (released October 28) adds the matching fields ([Search Engine Roundtable](https://www.seroundtable.com/google-ads-api-version-261-42409.html)). Editor support is coming later.
- **February 2027:** Search campaigns with Display expansion will be migrated to the new system, and the Display Network will **stop serving on Search campaigns using Target Impression Share**. Google suggests setting Display to **Low priority with a 50% allocation** to keep a similar setup.

> [!WARNING]
> The official documents don't fully agree. Google's blog suggests budget allocation works for Demand Gen; the help page says it isn't supported there. Check the help page in your own account before relying on it.

## Why it matters

For years, the choice for Search partners and Display in a Search campaign was binary: **on or off**. Many advertisers switched them off because performance was weaker (PPC Land cites a 2025 study finding Search partner ROAS **37% lower** than Google Search). Those that kept them on had no way to stop a cheap, low-quality channel from eating the budget on a slow day.

These controls add a middle option: keep the extra reach, but **make it wait in line** behind the channel you trust most, and limit how much it can take.

## The lesson: priority vs. cap, and when each one bites

Think of your daily budget as a queue at a buffet.

| Control | What it does | When it actually changes spend |
|---|---|---|
| **High / Low priority** | High-priority channels eat first; Low-priority channels get leftovers | Only when the campaign is **budget-limited**. If there's enough budget for everything, there are no "leftovers" to ration |
| **% budget cap on Low** | Limits how much of the *average daily budget* Low channels can take | When Low channels would otherwise spend more than the cap. It's a daily target, **best-effort**, and can be exceeded (including on overspend days) |
| **0% cap** | Effectively switches the channel off | Always, but you could often just untick the network instead |

The key insight: **these are budget controls, not bidding controls.** They don't change how much a click is worth to Smart Bidding. If your campaign runs on tCPA with plenty of budget headroom, Smart Bidding already decides which partner or Display impressions are worth buying, and prioritization will make little difference ([PPC Land](https://ppc.land/google-ads-lets-advertisers-limit-display-and-partner-spend-by-percentage/)).

## Worked example: a budget-limited Search campaign

*Illustrative numbers, not real account data.*

An online furniture store runs a Search campaign on Maximize Conversion Value with a **$200/day budget**, and it's **limited by budget** most days. Last 30 days by network (Segment → Network):

| Network | Spend | Conv. value | ROAS |
|---|---|---|---|
| Google Search | $4,800 | $24,000 | 5.0x |
| Search partners | $800 | $2,400 | 3.0x |
| Display Network | $400 | $600 | 1.5x |
| **Total** | **$6,000** | **$27,000** | **4.5x** |

Because the campaign is budget-limited, every $1 that goes to Display is $1 that **didn't** go to Google Search, where it would have earned roughly $5 instead of $1.50.

**New setup:** Google Search = High. Search partners = Low, cap 15%. Display = Low, cap 5%.

- Daily caps: partners ≈ **$30/day** (15% of $200), Display ≈ **$10/day** (5%), both best-effort.
- Partners were averaging ~$27/day ($800 ÷ 30), already under their cap, so nothing changes there.
- Display was averaging ~$13/day ($400 ÷ 30), so the cap frees about **$3/day ≈ $90/month** for Google Search.

Now the honest maths: At 5x instead of 1.5x, that's about **+$315 conversion value per month**. Useful, but small. The bigger win is **protection**: on days when Display or partners would have spiked (and they do), the cap stops them from starving Google Search.

> [!EXAMPLE]
> If the same campaign were **not** budget-limited (say, tROAS 450% with only 60% of budget used), the priority setting would change almost nothing. In that case, judge each network on its own ROAS and turn off the ones that never hit target.

## What others are doing

- **Practitioners are split between "finally" and "too soft".** PPC Land's analysis argues the controls are softer than they look: the cap is a target, not a ceiling, and prioritization does little without budget limits ([PPC Land](https://ppc.land/google-ads-lets-advertisers-limit-display-and-partner-spend-by-percentage/)).
- **API-first agencies are already scripting it.** Coverage of API v26.1 highlights the new budget network settings for advertisers managing many campaigns ([Search Engine Roundtable](https://www.seroundtable.com/google-ads-api-version-261-42409.html), [Adriaan Dekker](https://adriaan-dekker.nl/google-ads-api-26-1-lets-you-prioritize-ad-networks-and-cap-secondary-spend/)).
- **The PMax connection.** This follows Google's earlier, limited Performance Max channel opt-out pilot. Smarter Ecommerce (smec) has covered how PMax channel sliders interact with budgets in the video below.

## Where the experts disagree

**Google's framing:** this is a more nuanced alternative to switching networks off. You keep incremental reach while protecting your core channel.

**The skeptics' view:** a "best-effort" cap that can be exceeded, applied to the *average* budget, and only meaningful under budget constraints, isn't real control. If a channel loses money, switch it off and the problem is solved with certainty.

**The evidence gap:** Google hasn't published performance data showing that prioritized setups beat simply turning partners and Display off. Nobody outside Google has a large test yet either.

**Our take:** For budget-limited Search campaigns where partners and Display are **profitable but weaker**, set Google Search to High and cap the others. That's a real improvement. Where a network is **below target month after month**, turn it off; a soft cap isn't worth the leakage. And put **February 2027** in your calendar now if you use Target Impression Share with Display expansion.

## Watch

```youtube
qU4fCZraVE4 | It's New 10/15: Google Ads channel prioritization and budget allocation | Search Engine Roundtable
CrfN2JIbGRg | Google Ads: Check Your Network Performance (Google Search, Search Partners, and Display) | AdLeg
pvVkQTbFPn0 | PMax Channel Controls: What the New Sliders Do to Your Budget | Smarter Ecommerce (smec)
```

- **Search Engine Roundtable:** the news as it broke, in a few minutes.
- **AdLeg:** how to segment performance by network, which you need *before* touching any of these settings.
- **smec:** how channel controls behave inside Performance Max budgets.

## Do this today

1. For each Search campaign, open **Segment → Network (with search partners)** for the last 30–60 days. Note ROAS or CPA per network.
2. Check **budget status**. Is the campaign "Limited by budget"? If not, prioritization won't do much: judge networks on performance alone.
3. For budget-limited campaigns: set **Google Search = High**, and partners/Display = **Low** with a cap close to their current share of spend (then tighten).
4. Any network **consistently below target**? Turn it off rather than capping it.
5. Using **Target Impression Share with Display expansion**? Add a reminder for **January 2027** to review the migration.
6. Recheck the network segment after **2 weeks**; caps are best-effort, so verify actual spend.

## Quiz

```quiz
[
  {
    "q": "A tCPA Search campaign spends only 55% of its daily budget. You set Display to Low priority. What happens?",
    "options": ["Display spend drops sharply", "Very little: prioritization mainly matters when the campaign is budget-limited", "The campaign stops serving on Display", "tCPA is switched to Max Conversions"],
    "answer": 1,
    "why": "With budget headroom there are no 'leftovers' to ration. Smart Bidding still decides which impressions are worth buying."
  },
  {
    "q": "You set Search partners to Low priority with a 10% cap on a $300/day budget. Which statement is true?",
    "options": ["Partners can never spend more than $30 on any day", "The cap is best-effort, based on average daily budget, and can be exceeded", "The cap is a percentage of last month's spend", "Caps only apply to Performance Max"],
    "answer": 1,
    "why": "Google describes budget allocation as best-effort. It aims for ~$30/day here, but actual spend can go over."
  },
  {
    "q": "In a budget-limited campaign, Display returns 1.5x ROAS and Google Search 5x. Shifting $100 from Display to Search at those rates changes conversion value by about…",
    "options": ["+$150", "+$350", "+$500", "No change"],
    "answer": 1,
    "why": "$100 on Search ≈ $500, the same $100 on Display ≈ $150, so the net gain is about +$350."
  }
]
```

---

**Sources:** [PPC Land](https://ppc.land/google-ads-lets-advertisers-limit-display-and-partner-spend-by-percentage/) · [Search Engine Land](https://searchengineland.com/google-ads-introduces-channel-prioritization-and-budget-allocation-controls-495946) · [Search Engine Journal](https://www.searchenginejournal.com/google-ads-introduces-channel-prioritization-and-budget-allocation/592833/) · [Search Engine Roundtable: API v26.1](https://www.seroundtable.com/google-ads-api-version-261-42409.html) · [Adriaan Dekker](https://adriaan-dekker.nl/google-ads-api-26-1-lets-you-prioritize-ad-networks-and-cap-secondary-spend/)
