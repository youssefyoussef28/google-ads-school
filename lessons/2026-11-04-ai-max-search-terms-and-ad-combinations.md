---
title: Finally see what AI Max is doing: how to read the "Search terms and ad combinations" report
date: 2026-11-04
track: Search & Keywords
level: Intermediate
summary: AI Max has long been criticized for hiding which searches it matches. A newer report pairs each search term with the headline and landing page that served it. Learn how to find it, what each column tells you, and a 20-minute weekly routine to catch mismatches before they waste budget.
tags: AI Max, search terms, negative keywords, reporting, Search
---

## In 30 seconds

- The **"Search terms and ad combinations"** view shows, per row, the **search term**, the **headline**, **description** and **landing page** that served, plus the campaign and ad group.
- Newer versions reportedly add **four source columns** telling you whether the match, landing page, headline and description came from **AI Max or from you**.
- Use it weekly to spot **mismatches between what people searched and what your ad said**, then add **negative keywords or negative URLs**. Wait **2 weeks** after enabling AI Max before changing anything.

## What changed

Google's help page for AI Max reporting describes a report called **"Search terms and ad combinations"** (formerly "Search terms and landing pages from AI Max"). It lists the search queries that triggered your ads together with the headlines, landing pages, campaigns and ad groups behind each one, which Google calls the "full customer ad journey" ([Google Ads Help](https://support.google.com/google-ads/answer/16470459)).

PPC Land reports that, starting around **October 13, 2026**, some accounts also see **four source columns**: search term match source, landing page source, headline source and description source ([PPC Land](https://ppc.land/google-ads-search-terms-report-adds-4-source-columns-for-ai-max-traffic/)). Per that report, match source values seen so far include "AI Max expanded matches" and "Landing pages and URL inclusions".

> [!WARNING]
> **Not yet confirmed by Google.** PPC Land notes Google hasn't announced the source columns and its help page doesn't name them. Rollout timing is unclear, and it's unknown whether impressions and conversions appear next to clicks in every account. Don't be surprised if your account looks different.

## Why it matters

The main criticism of AI Max since launch has been **visibility**. In 2025 one analysis of about 30,000 AI Max search terms reportedly found most impressions came from terms with zero conversions, and "I can't see where my money goes" became a standard objection ([PPC Land](https://ppc.land/google-ads-search-terms-report-adds-4-source-columns-for-ai-max-traffic/)). This report doesn't prove AI Max is good or bad. It lets you **judge it with evidence** instead of faith.

## The lesson: three questions every row answers

For each row, ask in this order:

| Question | Where to look | What a bad answer looks like |
|---|---|---|
| **1. Is this a search I want?** | Search term | Job seekers, free/DIY, wrong product, wrong city |
| **2. Did my ad say something relevant to it?** | Headline and description | A headline about "Emergency plumbers" served on a search for "plumber salary" |
| **3. Did it land somewhere that fits?** | Landing page | A pricing search sent to a blog post, or a city search sent to the wrong location page |

How to act on the answer:

- **Wrong search** → add a **negative keyword** (the report has an "Add as negative keyword" action).
- **Right search, wrong page** → add a **negative URL** or tighten your **final URL expansion** settings.
- **Right search, weak ad** → write a headline that speaks to that intent, or add a more specific ad group.
- **Right search, right ad, right page** → leave it alone. That's AI Max doing its job.

> [!NOTE]
> Google's guidance: wait **at least 2 weeks** after turning on AI Max before making changes, so the system can learn. Also, filtering the view to the "AI Max" match type leaves out "Other search terms", so a filtered total is **not** your whole picture, and rare queries are omitted for privacy, so rows may not add up to total spend ([Google Ads Help](https://support.google.com/google-ads/answer/16470459)).

## Worked example: a franchise carpet cleaner

*Illustrative numbers, not real account data.*

A carpet cleaning company runs AI Max on one Search campaign, spending **$3,000 a month**. After 3 weeks, the owner opens the report and sorts by cost. The top rows:

| Search term | Ad headline served | Landing page | Cost | Leads |
|---|---|---|---|---|
| carpet cleaning near me | Carpet Cleaning from $79 | /carpet-cleaning | $410 | 21 |
| how to remove wine stain from carpet | Carpet Cleaning from $79 | /carpet-cleaning | $190 | 0 |
| rug cleaning dallas | Carpet Cleaning from $79 | /carpet-cleaning | $150 | 6 |
| carpet cleaner rental | Carpet Cleaning from $79 | /carpet-cleaning | $140 | 0 |
| upholstery cleaning prices | Carpet Cleaning from $79 | /carpet-cleaning | $120 | 2 |

What the owner finds:
- **"wine stain" and "rental"** are the wrong audience (DIY): **$330 spent, 0 leads**. Fix: add negatives like *remove*, *how to*, *rental*, *diy*. Saving: about **$330/month** if the pattern holds.
- **"rug cleaning dallas"** is a good search and converts, but the ad says "carpet". Fix: add a "Rug cleaning" headline. It's an opportunity, not a problem.
- **"upholstery cleaning"** converts at a lower rate and the landing page is for carpets. Fix: either create an upholstery page or exclude it.

If the $330 is redirected to the 21-lead rows at the same cost per lead as the top row (about $19.50), that's roughly **+17 leads a month**. In practice, redirected budget rarely converts at the same rate, so treat that as an upper bound.

## What others are doing

- **Agencies run AI Max as a controlled experiment.** The Location3 franchise test (see [our Nov 3 AI Mode lesson](lesson.html?l=2026-11-03-ads-in-ai-mode-go-global)) used Google Experiments across five locations, and its main practical fix was to turn off final URL expansion for multi-location brands so searches didn't land on the wrong location page ([Location3](https://location3.com/blog/ai-max-franchise-conversion-growth/)).
- **Practitioners are creating their own AI Max review routines** by pairing the report with the standard search terms workflow. N-gram analysis, which groups search terms by recurring words, is a common method for spotting patterns in large term lists, and one of the videos below walks through it.
- **A rule change is coming that makes this skill more valuable.** PPC Land notes Dynamic Search Ads campaigns are scheduled to upgrade automatically to AI Max starting **February 2027**, with **January 2027** as the cutoff for creating new DSA campaigns. If you run DSA, you'll soon be reading this report whether you chose to or not.

## Where the experts disagree

**Google's view:** AI Max finds incremental searches your keywords miss, and Google cites about 14% more conversions at a similar CPA or ROAS on average.

**The skeptics' view:** the "incremental" searches are often low-intent, and for most of AI Max's life advertisers couldn't see enough to check. Even this report has gaps: PPC Land points out that visible rows depend on how many queries Google withholds, which Google's documentation doesn't quantify.

**What the first reports show:** in PPC Land's single example account (a car wash, 353 clicks in a month), every visible headline, description and landing page was "Advertiser provided", and most matches were "AI Max expanded matches". One example doesn't generalize, but it's a reminder that **AI Max matching is often the main thing it changes**, while your own copy still serves.

**Our take:** The report makes AI Max testable, which is what was missing. If you're running it, spend 20 minutes a week here. If AI Max is bringing a lot of irrelevant terms and your negatives can't keep up, narrow it, don't abandon it: keep text customization off and restrict URL expansion first.

## Watch

```youtube
vxzNZN28eb0 | Google Ads AI Max Gets New Reporting: See Search Terms Matched to Landing Pages | IgniteVisibility
kCYUjDPlR-A | Google Ads AI Max Is Wasting Your Budget on Bad Searches | Grow My Ads
bFrFivJswUs | Google Ads Search Terms Report Analysis Like a Boss (N-gram) | Data-Driven Expert
```

I haven't confirmed how recent these videos are, so check each against the current report in your account.

- **IgniteVisibility:** a short look at the new view, to see what it looks like before opening your account.
- **Grow My Ads:** the skeptic's perspective on AI Max search terms.
- **Data-Driven Expert:** a method for sorting through large search term lists.

New to the match types AI Max sits on top of? Read [our Nov 3 AI Mode lesson](lesson.html?l=2026-11-03-ads-in-ai-mode-go-global) first.

## Do this today

1. Open the **Campaigns** menu, choose **Search terms**, then use the dropdown to pick **"Search terms and ad combinations"**. If you don't see it, your account may not have it yet.
2. If AI Max has been on for **less than 2 weeks**, just look. Don't change anything yet.
3. Sort by **cost**, last 30 days. Read the top 25 rows with the three questions above.
4. Add **negative keywords** for clearly wrong searches. Use phrase match for patterns ("how to", "diy", "rental").
5. For wrong landing pages, add **negative URLs** or review your final URL expansion setting.
6. Add the **"Source" column** (or the four source columns if you have them) and note what share of rows comes from AI Max expansion.
7. Put a 20-minute **weekly reminder** on your calendar to repeat this.

## Quiz

```quiz
[
  {
    "q": "A search for 'how to fix a leaking tap' triggers your plumber ad and costs $85 with no leads. What's the best action?",
    "options": ["Add 'how to' and 'fix' as negative keywords in a controlled way", "Raise the bid", "Turn off AI Max forever", "Ignore it: informational searches always convert later"],
    "answer": 0,
    "why": "It's a wrong-audience search (DIY). Negatives, applied carefully so you don't block good searches, are the standard fix."
  },
  {
    "q": "You filter the report to the 'AI Max' match type and the totals look much lower than your campaign spend. Why?",
    "options": ["AI Max is only responsible for that spend", "The filter excludes 'Other search terms', and rare queries are omitted for privacy", "The report is broken", "Google hides conversions"],
    "answer": 1,
    "why": "Google notes the AI Max filter leaves out 'Other search terms', and rare queries are omitted. So a filtered view isn't the whole picture."
  },
  {
    "q": "You enabled AI Max 5 days ago and see some odd search terms. What does Google recommend?",
    "options": ["Add many negatives immediately", "Wait at least 2 weeks before making changes so the system can learn", "Switch to exact match", "Pause the campaign"],
    "answer": 1,
    "why": "Google's guidance is to wait at least 2 weeks after enabling AI Max before making changes."
  }
]
```

---

**Sources:** [Google Ads Help: About reporting in AI Max for Search](https://support.google.com/google-ads/answer/16470459) · [PPC Land: Search terms report adds 4 source columns for AI Max traffic](https://ppc.land/google-ads-search-terms-report-adds-4-source-columns-for-ai-max-traffic/) · [Location3 AI Max case study](https://location3.com/blog/ai-max-franchise-conversion-growth/)
