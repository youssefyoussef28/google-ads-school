# Google Ads School: editorial playbook

This is the guide for the daily 9:30 AM run that writes one new lesson. Read it fully before writing.

## The mission

This isn't a news feed, and it isn't a video playlist. YouTube has great teachers, but it's scattered, often outdated, one opinion at a time, and nobody checks it. This school's job is to be the layer on top: **verified, current, every serious viewpoint compared, turned into a curriculum, with practice.** It's a school. Every lesson should leave the reader **better at running Google Ads**: start from something real and recent, then teach the idea underneath it, show it with numbers, show what real practitioners did, and give them something to do today.

## Daily workflow

1. **Check what's already covered.** List `lessons/` and read the frontmatter (title, track, tags) of the last ~14 lessons. Don't repeat a topic unless there's a genuinely new development, and vary the track.
2. **Research the last 48–72 hours** with WebSearch (use `extended` mode for the news sweep), working down the **Source hierarchy** below. Start with Tier 1 to confirm what changed, then Tier 2 for context, then Tier 3 for what the best practitioners think and have tested. Fetch the 3–5 best pieces with WebFetch for real details. Some sites return 403; use another source for the same story.
3. **Pick ONE topic** with the biggest practical impact for advertisers. If nothing meaningful happened, write an **evergreen lesson** instead (see the curriculum backlog below), still tied to current best practice.
4. **Find 2–4 YouTube videos** that teach the topic well (WebSearch with `allowed_domains: ["youtube.com"]`). **Verify every video** before using it:
   `curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEO_ID&format=json"`
   It must return JSON with a title. Use the real title and `author_name` from that response. Prefer official Google Ads, established PPC educators, and recent videos. **Never invent or guess a video ID.**
5. **Write the lesson** to `lessons/YYYY-MM-DD-short-slug.md` using the template below. Use today's date.
6. **Build:** run `node build.mjs` in this folder. It validates the lesson. If it fails, fix the file and rebuild until it prints `Built N lesson(s).`
7. **Report** in one or two lines: the lesson title, the main source, and the file path.

## Source hierarchy

The school is only as good as its sources. Prefer the highest tier available, and say which tier a claim comes from when it matters.

**Tier 1: Primary (what Google actually said or shipped)**
- Google Ads & Commerce Blog (blog.google/products/ads-commerce)
- Google Ads Help Center: announcements, "What's new", policy change log
- Google Ads API release notes and developer blog (often reveal features before the UI)
- Google's Ads Liaison (Ginny Marvin) public posts and clarifications
- Think with Google / Google Business "Think" articles, Skillshop course updates
- Google Marketing Live and Think Week session recaps

**Tier 2: Top industry journalism (fast, well-sourced reporting)**
- Search Engine Land, Search Engine Roundtable, PPC Land, Search Engine Journal
- Industry benchmark data: Optmyzr studies, LocaliQ/WordStream benchmarks, quarterly reports from large agencies (e.g. Tinuiti, Merkle), SMEC

**Tier 3: World-class practitioners (what works in real accounts)**
- People with long public track records in paid search, e.g. Frederick Vallaeys (Optmyzr, PPC Town Hall), Brad Geddes (Adalysis), Kirk Williams (ZATO), Julie Bacchini (#PPCChat), Mike Rhodes (Google Ads scripts and AI), Andrew Lolk (SavvyRevenue), Navah Hopkins, Menachem Ani, Amalia Fowler.
- Agency blogs that publish real test designs and numbers.
- Conference talks: SMX, Hero Conf, PPC Town Hall episodes.
- YouTube educators with depth: official Google Ads channel, Jyll Saskin Gales, Aaron Young (Define Digital Academy), Surfside PPC, Michelle Kop, Grow My Ads, PPC Town Hall.

**Tier 4: Signals only (never the sole source)**
- r/PPC, LinkedIn and X threads, community forums. Useful to spot a rollout or a bug early. Confirm with a higher tier before stating it as fact.

Quality bar:
- Any claim about **what Google changed** needs at least one Tier 1 source, or a Tier 2 source that cites one. If only Tier 2–4 exists, say "reported but not yet confirmed by Google".
- Any claim about **performance** ("X improves CPA") needs either a real test with numbers or two independent sources. Prefer data with sample size, duration and test design. Flag vendor-run studies and Google-run studies as such.
- Prefer sources from the last 12 months unless the topic is evergreen. Note the date when citing older data.
- Videos: prefer Tier 1 and Tier 3 channels, published within the last 18 months (check the date), and actually about the lesson's topic. A short, accurate video beats a long, generic one.
- This list is a starting point, not a whitelist. A new source can be used if its claims are specific, dated and checkable.

## Accuracy rules (non-negotiable)

- Every factual claim about a Google change needs a source link in the text.
- Worked examples with made-up numbers must be labeled *Illustrative numbers*.
- Case studies must be real and linked. Note when a case study comes from the vendor/agency that ran it.
- If sources conflict or a feature is only in beta or rumored, say so plainly.
- Never fabricate URLs, quotes, statistics or video IDs. If you can't verify something, leave it out.
- Don't copy articles. Summarize in your own words; quote at most one short sentence per source.

## Lesson file format

Frontmatter (single-line `key: value` pairs, no quotes needed):

```
---
title: Clear, specific, benefit-led title
date: YYYY-MM-DD
track: one of the tracks below
level: Beginner | Intermediate | Advanced
summary: 1–2 sentences: what changed and what the reader will learn.
tags: comma, separated, tags
---
```

**Tracks** (exact spelling): `News & Updates`, `Fundamentals`, `Bidding & Budgets`, `Performance Max`, `Search & Keywords`, `Creative & Ad Copy`, `Measurement & Tracking`, `Audiences & AI`, `Case Studies`.

Body sections, in this order, each as an `##` heading:

0. `## In 30 seconds`: exactly 3 bullets that give the whole lesson to someone who reads nothing else. Bold the key words. This is rendered as a highlighted box at the top.
1. `## What changed`: the news with dates, links and the key facts in bullets. (Evergreen lessons: `## Why this matters now`.)
2. `## Why it matters`: who it affects, what it changes in practice.
3. `## The lesson: <concept>`: the underlying idea from first principles. Use a table when comparing options.
4. `## Worked example: <scenario>`: a realistic account with numbers, walked through step by step. Show the math.
5. `## What others are doing`: 2–3 real practitioner tests or case studies, linked, with caveats.
6. `## Where the experts disagree`: the honest debate. What does Google claim, what do independent practitioners see, and where is the evidence thin? End with a clear **Our take:** one or two sentences of what you'd actually do and when it would be wrong. This section is what makes the school more useful than any single video: it puts every viewpoint side by side.
7. `## Watch`: a `youtube` block (see below), plus one line per video on *why* it's worth watching (what it adds beyond the lesson).
8. `## Do this today`: a numbered checklist the reader can run in their account in under an hour.
9. `## Quiz`: a `quiz` block with exactly 3 questions. Make them test *judgment* (scenarios, maths, trade-offs), not recall of trivia.
10. End with `---` and a `**Sources:**` line listing all links.

The `## In 30 seconds` and `## Where the experts disagree` headings must be spelled exactly like that (the site styles them specially). Start the verdict paragraph with `**Our take:**` so it renders as a highlighted verdict.

**Link the curriculum together.** Where an earlier lesson explains a concept you mention, link to it inline with `[link text](lesson.html?l=<slug>)`, where the slug is the lesson's filename without `.md`. Aim for 1–3 internal links per lesson. This keeps readers moving from one lesson to the next.

**Updating an older lesson.** If today's news changes or corrects an earlier lesson, you may edit that lesson's body and add to its frontmatter `updated: YYYY-MM-DD` and `update_note: one short sentence on what changed`. It then appears as "Updated" in the site's daily changelog. Never change an existing lesson's `date`. Still write today's new lesson as usual.

Aim for 1,200–1,800 words. Write clearly and directly, like a sharp senior PPC manager teaching a motivated junior.

### Special blocks

Callouts (blockquote starting with a tag):

```
> [!TIP]
> Text…
```

Tags: `[!TIP]`, `[!EXAMPLE]`, `[!WARNING]`, `[!NOTE]`, `[!TRY IT]`.

Videos (one per line: `VIDEO_ID | Title | Channel`):

````
```youtube
Rvx_-dnwIUU | AI Max for Search Campaigns | Google Ads
```
````

Quiz (valid JSON array; `answer` is the 0-based index of the correct option; `why` explains it):

````
```quiz
[
  {"q": "Question?", "options": ["A", "B", "C", "D"], "answer": 1, "why": "Because…"}
]
```
````

## Curriculum backlog (for slow news days)

Rotate across tracks. Mark ideas used by checking existing lessons.

- Fundamentals: account structure in 2026; Quality Score components and what actually moves them; the auction and Ad Rank; impression share metrics explained.
- Bidding & Budgets: tCPA vs tROAS vs Max Conversions; learning periods; portfolio bid strategies; budget pacing and the 2x daily overspend rule; seasonality adjustments.
- Performance Max: asset groups that work; search themes; brand exclusions; channel performance report; feed-only PMax.
- Search & Keywords: match types today; negative keyword strategy; search terms report workflow; brand vs non-brand separation.
- Creative & Ad Copy: writing RSAs that score; pinning trade-offs; asset reporting; image and video assets for Search and PMax.
- Measurement & Tracking: enhanced conversions; consent mode v2; offline conversion imports; data-driven attribution; value-based bidding with conversion values.
- Audiences & AI: Customer Match; optimized targeting; AI Max settings; Demand Gen audiences.
- Case Studies: a deep dive into one public case study per lesson, with what to copy and what to question.
