---
title: AI Max is now the default in Google Ads Editor: a pre-launch checklist for every new Search campaign
date: 2026-11-22
track: Search & Keywords
level: Intermediate
summary: Google Ads Editor 2.14 starts new Search campaigns with AI Max, text asset automation and Final URL expansion already on. Learn what each switch does, why pinned headlines and fixed landing pages are the risk, and a five-minute check to run before you post.
tags: AI Max, Google Ads Editor, Final URL expansion, text customization, pinning, Search
---

## In 30 seconds

- Google Ads Editor 2.14 now creates new Search campaigns with **AI Max, text asset automation and Final URL expansion switched on**. Existing campaigns are not changed.
- The risk is not AI Max itself, it is **posting a campaign you did not review**: with Final URL expansion on, clicks can land on other pages and **pinned headlines may not be used**.
- Before you post any new Search campaign, spend five minutes on the AI Max panel: keep what fits, **turn off or exclude what doesn't**.

## What changed

- Google's [Editor 2.14 release notes](https://support.google.com/google-ads/editor/answer/18835571?hl=en) say: "AI Max, text asset automation, and Final URL expansion are now activated by default when creating new Search campaigns." The notes carry no exact date; [Search Engine Roundtable's coverage via PPC Land](https://ppc.land/google-ads-editor-2-14-turns-on-ai-max-by-default-for-new-search-campaigns/) places the release around November 12, 2026.
- The same release adds account-level new customer and retention settings, a "lapsed customers only" bidding option, and support for channel prioritization and budget caps (covered in our [channel controls lesson](lesson.html?l=2026-11-03-channel-prioritization-budget-caps) and [new-customer multipliers lesson](lesson.html?l=2026-11-18-new-customer-value-multipliers)).
- Google's [AI Max help page](https://support.google.com/google-ads/answer/15909989?hl=en) separately states that new Search campaigns have AI Max on by default.
- **Not confirmed by Google:** whether the default also applies to campaigns created by importing a spreadsheet into Editor, and exactly how it behaves for accounts that never used AI Max. [PPC Land](https://ppc.land/google-ads-editor-2-14-turns-on-ai-max-by-default-for-new-search-campaigns/) lists both as open questions. Test on one campaign before assuming either way.

## Why it matters

Editor is where agencies and large accounts build campaigns in bulk. Until now, AI Max in Editor was a toggle you chose to flip. Now the starting position is "on", so the person who forgets to check is the one who gets the behaviour. That matters most for:

- **Regulated or compliance-heavy accounts** (finance, health, legal) that pin approved wording.
- **Accounts with carefully chosen landing pages**, such as one page per product or per location.
- **Lead gen accounts** where a click landing on the wrong page can mean a lead you can't use.

## The lesson: three switches, three different risks

AI Max is a layer inside a normal Search campaign, not a separate campaign type. Per Google's help page it has three parts, and they carry different risk:

| Switch | What it does | Main risk | Your control |
|---|---|---|---|
| Search term matching | Matches searches beyond your keywords | Irrelevant queries | Negatives, [search terms and ad combinations report](lesson.html?l=2026-11-04-ai-max-search-terms-and-ad-combinations) |
| Text customization | Generates headlines and descriptions from your site and assets | Wording you didn't approve | Text guidelines, [copy preview](lesson.html?l=2026-11-06-ai-max-copy-preview) |
| Final URL expansion | Sends traffic to the most relevant URL on your domain | Wrong landing page; pinned assets ignored | Turn off, or add URL exclusions |

Two dependencies from Google's documentation are worth memorising:

1. **Final URL expansion requires text customization.** Turning text customization off turns Final URL expansion off too.
2. **Pins and expansion don't mix.** With Final URL expansion on, pinned RSA assets may not be used if a more relevant URL is chosen; URL inclusions have the same effect. To always serve pinned assets, turn Final URL expansion (and inclusions) off. With text customization on and expansion off, pinned assets serve as expected.

URL exclusions, if you keep expansion on, live in campaign Settings under AI Max, then Final URL expansion, then Add URL exclusions. Google warns that "URL Contains" rules match whole words, not partial strings, so test your rules.

## Worked example: a clinic with approved wording

*Illustrative numbers.* A clinic group builds 12 new Search campaigns in Editor, one per treatment. Each has a pinned headline with a legally required phrase, and each points to its treatment page.

1. Editor 2.14 creates all 12 with Final URL expansion on. Nobody notices.
2. Suppose 20% of clicks, 600 of 3,000 in a month, go to other pages such as the generic "about us" page. If the treatment page converts at 6% and those other pages at 2%, the loss is 600 x (6% - 2%) = **24 conversions a month**.
3. Worse, on those 600 clicks the pinned legal phrase may not appear at all, which is a compliance problem, not just a conversion one.
4. The fix takes minutes: switch off Final URL expansion on all 12 (or add exclusions), keep text customization with text guidelines, and re-check pins.

The numbers are invented to show the arithmetic; your split will differ. Check the real one in your landing page report after a week.

> [!WARNING]
> If you create campaigns from a spreadsheet, don't assume the default behaves the same way. Create one test campaign and open its AI Max settings after posting.

## What others are doing

- **PPC Land** argues the change is bigger than it looks: it arrived as one line in a release note, and "a choice" became "an audit task" for brands that need specific landing pages ([source](https://ppc.land/google-ads-editor-2-14-turns-on-ai-max-by-default-for-new-search-campaigns/)). This is commentary, not test data.
- **JXT Group's weekly roundup** recommends checking the AI Max settings on every new Search campaign before posting, and turning off Final URL expansion or adding exclusions where the landing page must stay fixed ([source](https://www.jxtgroup.com/this-week-google-meta-ads-nov-17-2026/)). It is a trade-press suggestion, not a measured result.
- I found no published performance test of the Editor default itself yet. Tests of AI Max in general exist (see the videos below), but results vary by account and are often run by agencies or tool vendors.

## Where the experts disagree

**Google's position:** AI Max finds extra reach and relevant pages automatically, and new campaigns start with it on because that is the intended path for Search.

**The sceptics' position:** a precision bulk-editing tool should not quietly send traffic to pages the advertiser didn't pick, and the release notes don't address that.

**Where evidence is thin:** nobody has published a clean test of "AI Max default on vs off" for new campaigns. Whether expansion helps or hurts depends on how good and how well-organised your site is, and on what you measure (lead quality, not only cost per lead).

**Our take:** treat the default as a prompt to decide, not a verdict. For sites with one clear page per offer, or pinned compliance copy, switch Final URL expansion off at launch. For broad sites with strong pages, leave it on in one campaign and compare it with a control for a few weeks. It would be wrong if your volume is too low to compare, in which case choose on risk, not on hope.

## Watch

```youtube
EvJrxtDxeAI | AI Max for Search: What It Means for the Future of Google Ads | Optmyzr
wG1CWHKNWiY | We Tested Google's Final URL Expansion | Ajay Dhunna
BX9ukL8s05w | Maximize the Benefits of AI MAX | Marketing O'Clock
```

- **Optmyzr:** a practitioner-tool-vendor view of AI Max, useful for the strategic debate. Note it comes from a vendor.
- **Ajay Dhunna:** the title says it tests Final URL expansion; check its date and method yourself, since AI Max has changed since earlier videos.
- **Marketing O'Clock:** a tutorial on getting more from AI Max; treat settings screens as possibly out of date.

## Do this today

1. Open one campaign created in Editor in the last week and check Settings, then AI Max.
2. Note whether Final URL expansion and text customization are on.
3. List campaigns where the landing page must stay fixed; switch Final URL expansion off there (or add URL exclusions).
4. For any campaign with pinned headlines, confirm expansion is off or accept that pins may be skipped.
5. Add text guidelines (restricted terms, tone) where text customization stays on.
6. Add a line to your campaign launch checklist: "AI Max settings reviewed".

## Quiz

```quiz
[
  {"q": "A campaign has a pinned legal headline and must always serve it. Which setting change best guarantees the pin is used?", "options": ["Turn off search term matching", "Turn off Final URL expansion (and URL inclusions)", "Turn on text customization only", "Add more headlines"], "answer": 1, "why": "Google's help page says pinned assets may not be used when Final URL expansion is on; with expansion off and text customization on, pins serve as expected."},
  {"q": "You turn off text customization on a campaign that has Final URL expansion on. What happens to Final URL expansion?", "options": ["It stays on", "It turns off automatically", "It switches to URL inclusions", "Nothing, they are unrelated"], "answer": 1, "why": "Final URL expansion requires text customization, so turning text customization off disables it too."},
  {"q": "Of 4,000 monthly clicks, 800 land on non-target pages converting at 1% instead of 5% on the target page. How many conversions are lost?", "options": ["8", "16", "32", "40"], "answer": 2, "why": "800 x (5% - 1%) = 32 conversions. Illustrative numbers, but the method applies to your own landing page data."}
]
```

---

**Sources:** [Google Ads Editor Help: version 2.14](https://support.google.com/google-ads/editor/answer/18835571?hl=en) · [Google Ads Help: AI Max for Search](https://support.google.com/google-ads/answer/15909989?hl=en) · [PPC Land](https://ppc.land/google-ads-editor-2-14-turns-on-ai-max-by-default-for-new-search-campaigns/) · [JXT Group](https://www.jxtgroup.com/this-week-google-meta-ads-nov-17-2026/)
