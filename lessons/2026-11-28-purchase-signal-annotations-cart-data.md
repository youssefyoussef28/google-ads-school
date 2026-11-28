---
title: "1K+ sold last 30d": how Google's purchase signal badges work, and the cart data you need to earn them
date: 2026-11-28
track: Measurement & Tracking
level: Intermediate
summary: Google published help documentation on purchase signal annotations, badges that show recent sales volume on Shopping ads. Learn what they require, why they depend on conversions with cart data, what's still unpublished, and how to check your setup before the holiday peak.
tags: Shopping ads, purchase signal annotations, cart data, conversions with cart data, Merchant Center, Black Friday
---

## In 30 seconds

- Google now documents **purchase signal annotations**: automatic badges such as "1K+ sold last 30d" on eligible Shopping ads. You can't buy or design them.
- To qualify, you must report **item-level sales through conversions with cart data**, and the product must clear a **privacy threshold** Google hasn't published.
- The badge only counts **Google-attributed sales**, so the fix is a clean cart data setup, not more budget.

## What changed

- On November 23, 2026, Google published the help article [About purchase signal annotations](https://support.google.com/google-ads/answer/18978095), and [Search Engine Roundtable](https://www.seroundtable.com/google-ads-purchase-signal-annotations-42587.html) reported it the same day.
- The annotations are badges on Shopping ads showing purchase volume for high-demand items, for example "1K+ sold last 30d". Google's own example: an item with 1,500 Google-attributed sales in 30 days could display "1K+" without revealing the exact figure.
- Eligibility, per Google: you report item-level sales via [conversions with cart data](https://support.google.com/google-ads/answer/16564103), and the offer meets a privacy threshold and other criteria. Google shows the badge automatically; no extra promotional budget or manual creative setup is needed.
- Only Google-attributed conversions count. Sales that happen outside Google ad channels aren't reflected.
- Per the help page, it's available globally except the EEA, the UK and Switzerland, on mobile and desktop web search formats.
- **Not published:** the numeric threshold, a formal rounding rule, an opt-out, and an explicit attribution window (the badge wording implies 30 days). Treat those as unknown until Google says more.

## Why it matters

A badge is social proof sitting right next to your price. For shoppers comparing near-identical products, "sold a lot recently" is a reason to click. Google says the feature is designed to make high-performing products more competitive in Shopping.

Two groups feel it most:

- **Stores with strong sellers and weak cart data.** If your purchase conversion tags don't send item-level data, your best sellers can't earn a badge while a competitor's can.
- **Stores that rely on imported or offline sales.** Only Google-attributed sales count, so a hero product that sells mostly through email or marketplaces may look smaller to Google than it is.

## The lesson: cart data turns "a sale" into "which products sold"

A standard purchase conversion tells Google *that* someone bought and for how much. **Cart data** adds *what* they bought: item IDs, quantities and prices. Google matches those item IDs to your Merchant Center feed.

Per [Google's cart data help page](https://support.google.com/google-ads/answer/16564103), setup has three parts:

| Piece | What it does | If it's missing |
|---|---|---|
| Cart data sent with the purchase conversion | Lets Google see which items sold | No item-level sales, so no badge |
| Item IDs that match your Merchant Center feed | Connects the sale to a product | "Unmatched item IDs": sales can't be attributed to products |
| COGS (cost of goods sold) in the feed | Powers gross profit metrics | Profit metrics are inaccurate (not needed for the badge itself) |

The same data unlocks reporting: orders, revenue, units sold, average order value, lead vs cross-sell sales (a different product bought in the same cart), and the "Cart items advertised / sold / cross-sold" reports. So fixing cart data for a badge also gives you better decisions. This connects to [steering Smart Bidding with the values you send](lesson.html?l=2026-11-26-dynamic-conversion-values-steer-smart-bidding): both reward accurate conversion data.

> [!NOTE]
> A badge shows demand, not quality. It can lift clicks on a product with a poor page or thin margin. Check margin before celebrating.

## Worked example: a footwear store before the peak weekend

*Illustrative numbers.* A store sells 400 pairs of a running shoe in 30 days. Google-attributed share:

1. Total sales of the shoe, all channels: 400 units.
2. Sales attributed to Google ads in the window: 40% = 160 units.
3. Cart data is sent correctly, so Google sees 160 units for that item. The article doesn't give the threshold, so we can't say whether 160 clears it. It might show nothing, or a lower tier badge if one exists.
4. The store's tag sends cart data but item IDs use SKUs, while the feed uses a different ID format. Google sees 0 matched items, so no annotation can ever appear.

The lesson from step 4: the most common failure is a mismatch, not low volume. Fix IDs first, and budget second. If the shoe's sales are 70% outside Google ads, no tuning of campaigns changes that; the badge reflects only Google-attributed demand.

## What others are doing

- Practitioners had already spotted similar labels before the documentation. [Search Engine Land](https://searchengineland.com/google-ads-introduces-purchase-volume-badges-for-shopping-ads-502859) covered the purchase volume badges, but it returned an access error when we tried to read it, so we rely on Google's help page and Search Engine Roundtable for details.
- Educators like Abir Molla have published fixes for the "Cart Data Needs Attention" diagnostic, which covers unmatched item IDs, missing cart data and missing COGS (see the video below). It's a practitioner walkthrough, not a Google source.
- Grow My Ads has long taught that Merchant Center badges, such as the green sale badge, can change Shopping click behavior. That's a different feature, and the claim there is anecdotal, not a controlled test.

No independent test of purchase signal badges on click-through rate or conversion rate has been published that we could find. Don't promise your client a lift.

## Where the experts disagree

- **Google's position:** the badges make high-performing products more competitive, with no extra spend.
- **Skeptical view:** it's an automatic feature you can't turn on or off (no opt-out is documented), you can't test it cleanly, and it favors products that already sell. Rich-get-richer dynamics can hurt new launches.
- **Measurement view:** requiring cart data is a nudge toward better first-party conversion data, which helps bidding anyway.
- **Evidence:** thin. Only Google's help page describes the mechanism, and no public A/B data exists yet.

**Our take:** Fix cart data and item ID matching now, because it's cheap and improves reporting regardless. Don't change bids or budgets in expectation of a badge, and don't claim a lift until you see your own before/after on products that gained the label. This would be wrong if you sell in the EEA, UK or Switzerland, where the badge isn't available.

## Watch

```youtube
sOAR1W9mL4k | SOLVED: Google Ads "Cart Data Needs Attention" (Fix Unmatched Item IDs, Missing Cart Data & COGS) | Abir Molla - Google Analytics & Tag Manager
BCxyJrXkKOc | Google Ads Conversion Tracking (with Values) | Loves Data
_ryUZCQebnY | Get the Green Sale Badge for Your Shopping Ads | Grow My Ads
```

- Abir Molla's video walks through the exact diagnostic you'll see if your item IDs don't match the feed.
- Loves Data shows the base purchase conversion with values, the layer cart data is added on top of. Check the date: the Google Ads interface changes often.
- Grow My Ads covers a different Merchant Center badge, useful for seeing how badges are earned through feed data.

## Do this today

1. In Google Ads, open your purchase conversion and check whether cart data is being reported (look for the "Cart data" status or diagnostics).
2. Open the cart data diagnostics and fix any "unmatched item IDs" by making the tag's item IDs match your Merchant Center IDs exactly.
3. Add COGS to your feed if it's missing, to get gross profit reporting.
4. Add the Cart Data reports (orders, units sold, cross-sell) to your account, and note your top 10 products by units.
5. Make a note of today's CTR and conversion rate for those 10 products, so you can compare if a badge appears later.
6. Check your target markets. If you serve the EEA, UK or Switzerland, don't expect the badge.

## Quiz

```quiz
[
  {"q": "A store sends cart data, but its tag uses internal SKUs while Merchant Center uses a different ID format. What's the most likely result?", "options": ["Badges appear but with rounded numbers", "Sales can't be matched to products, so no purchase signal annotations", "Google bills the store extra", "Badges appear only on mobile"], "answer": 1, "why": "Item IDs must match the feed for sales to be attributed to products. Without a match, there is no item-level sales count."},
  {"q": "A best seller sells 1,000 units a month, but 80% of sales come from email and a marketplace. What does the badge reflect?", "options": ["All 1,000 units", "Only Google-attributed sales", "Only the marketplace", "Only units sold in the last 7 days"], "answer": 1, "why": "Google says only Google-attributed conversions count, so the badge can understate total demand."},
  {"q": "Your client wants to raise budgets because \"badges will lift conversion rate\". What's the best response?", "options": ["Agree: Google says badges lift conversion rate", "Fix cart data first and measure the before/after on products that gain a badge, since no independent test data exists", "Turn the badge off in settings", "Wait for Google to publish the threshold before doing anything"], "answer": 1, "why": "Google says the badge makes products more competitive, but no public test quantifies a lift and no opt-out is documented. Prepare the data, then measure."}
]
```

---

**Sources:** [About purchase signal annotations (Google Ads Help)](https://support.google.com/google-ads/answer/18978095) · [Metrics available with conversions with cart data (Google Ads Help)](https://support.google.com/google-ads/answer/16564103) · [Search Engine Roundtable, Nov 23, 2026](https://www.seroundtable.com/google-ads-purchase-signal-annotations-42587.html) · [Search Engine Land](https://searchengineland.com/google-ads-introduces-purchase-volume-badges-for-shopping-ads-502859) (not read; cited as a report of the same feature)
