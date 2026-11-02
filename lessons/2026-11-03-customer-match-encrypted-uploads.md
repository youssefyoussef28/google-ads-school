---
title: Customer Match is dropping the hashing requirement on Nov 16: what changes, and why your match rates might jump
date: 2026-11-03
track: Measurement & Tracking
level: Advanced
summary: From November 16, Google's Data Manager accepts encrypted customer data by default instead of requiring SHA-256 hashes. Learn why hashing silently broke matches, what moves to Google's side, the open privacy questions, and the five checks to run before the deadline.
tags: Customer Match, enhanced conversions, Data Manager, first-party data, privacy
---

## In 30 seconds

- From **November 16, 2026**, Google's **Data Manager** accepts **encrypted** customer data by default instead of requiring you to **SHA-256 hash** it first.
- Hashing is unforgiving: one extra space or capital letter creates a different hash and a **silent non-match**. Google now does the formatting cleanup inside a secure environment, which should raise match rates.
- It also means Google can **read the underlying data** during matching. Check your data agreements, record your current match rates, and ask your rep what happens to hashed uploads.

## What changed

According to a Google email first shared on LinkedIn by Anthony Higman (ADSQUIRE) on October 18 and reported by PPC Land, **from November 16, 2026, Google Ads Data Manager will accept encrypted customer data by default instead of requiring SHA-256 hashed data**. Google says the change "improves match accuracy using privacy-enhancing technology" ([PPC Land](https://ppc.land/google-ads-data-manager-stops-requiring-hashed-customer-data-november-16/)).

Key details from the coverage:

- Google will **decrypt, normalize and match** the data inside a hardware-isolated **trusted execution environment (TEE)**.
- It covers offline data sent through Data Manager: **CRM connections, cloud storage imports, direct file uploads and the Data Manager API**, for **Customer Match** and **enhanced conversions**.
- It sits on top of earlier changes: Customer Match uploads through the **Google Ads API stopped on April 1, 2026**, moving programmatic uploads to the **Data Manager API** ([PPC Land](https://ppc.land/google-forces-customer-match-uploads-to-data-manager-api-by-april-1/)).

> [!WARNING]
> This is reported from a Google email, and Google's public help pages hadn't been fully updated at the time of writing (some still say API uploads must be hashed). Treat details as **reported, not yet fully documented**, and confirm with Google before changing a working pipeline.

## Why it matters

Customer Match and enhanced conversions are how you give Google your **first-party data**: who your customers are and which leads turned into sales. The better Google can match that data to signed-in users, the better your audiences, your conversion measurement, and therefore your Smart Bidding.

Many advertisers lose a big share of matches **before Google even sees the data**, because of formatting mistakes made before hashing. If Google takes over normalization, match rates may rise without you doing anything. But the privacy model also changes, which matters for legal and client agreements.

## The lesson: why hashing silently breaks matches

A hash is a one-way fingerprint. The same input always gives the same output, and that's how matching works: you hash your customer's email, Google hashes its user's email, and if the fingerprints are identical, it's a match.

The problem: **any** difference in the input creates a completely different fingerprint.

| What you uploaded (before hashing) | What Google's user has | Match? |
|---|---|---|
| `sara.ali@gmail.com` | `sara.ali@gmail.com` | ✅ Yes |
| `Sara.Ali@Gmail.com` | `sara.ali@gmail.com` | ❌ No: capitals change the hash |
| `sara.ali@gmail.com ` (trailing space) | `sara.ali@gmail.com` | ❌ No |
| `050 123 4567` | `+971501234567` | ❌ No: phone needs E.164 format |

Google's guidelines have always required you to **normalize** first (trim spaces, lowercase emails, format phones in international E.164 format) and *then* hash. Any team or CRM connector that skipped a step lost matches, and **nothing told them**, because a non-matching hash looks exactly like a customer who simply isn't on Google.

**Encryption works differently:** it's reversible with a key. Google can decrypt the data inside the TEE, clean up the formatting itself, and match. The cost: the raw values exist (inside that secure environment) during processing, which is a different privacy promise than "Google only ever sees fingerprints".

## Worked example: the 30% you didn't know you were losing

*Illustrative numbers, not real account data.*

A UAE e-commerce brand uploads **60,000 customer emails and phone numbers** monthly from its CRM for Customer Match and enhanced conversions.

- An audit of a sample shows **22%** of emails have capitals or stray spaces, and **35%** of phone numbers are stored locally (`05x…`) rather than as `+9715x…`.
- Their uploader hashes values **as stored**. Current match rate: **38%** (about 22,800 matched users).

If Google's server-side normalization recovers even half of the badly formatted records:

| | Records | Match rate | Matched users |
|---|---|---|---|
| Today (hashed as-is) | 60,000 | 38% | 22,800 |
| After normalization (assumed) | 60,000 | 49% | 29,400 |
| **Difference** | | **+11 pts** | **+6,600 users (+29%)** |

Bigger matched lists mean more reach for Customer Match campaigns and, for enhanced conversions, more conversions attributed back to clicks, which gives Smart Bidding better data.

> [!TIP]
> You don't have to wait for November 16 to get most of this gain. Fixing normalization in your own pipeline today (lowercase, trim, E.164 phones) recovers the same matches under the current system.

## What others are doing

- **Agencies are auditing pipelines before the date.** Third-party guides advise anyone using Customer Match or offline conversions to check upload routes (API, CRM connector, cloud import, manual file) before November 16 to avoid interruptions ([shm.studio](https://shm.studio/en/news/google-ads-data-manager-crittografia-hashing-novembre-2026/)).
- **Privacy teams are reopening assessments.** PPC Land points out that many data protection assessments for Customer Match were written on the basis that only hashed values left the advertiser, and notes the FTC's position that hashed identifiers still identify people. So hashing was never true anonymization in the first place ([PPC Land](https://ppc.land/google-ads-data-manager-stops-requiring-hashed-customer-data-november-16/)).
- **Google has been heading here for two years.** Confidential matching with TEEs was introduced in 2024, and the Data Manager API launched in December 2025 with optional encryption. The November change makes it the default.

## Where the experts disagree

**Google's view:** encryption plus a trusted execution environment is *more* private and *more* accurate. Formatting errors disappear and the data is processed in hardware-isolated, attested systems.

**Privacy-minded practitioners:** the old promise was "Google never sees raw identifiers"; the new one is "Google sees them, but only inside a secure box". That's a meaningful change that clients, legal teams and some regulators will want documented. Open questions include who holds the keys for UI and CRM uploads, whether hashed uploads keep matching at the same rate, whether you can opt out, and how long decrypted data persists.

**Our take:** For most advertisers this is a **net positive** for performance. But don't let it happen to you silently. Record your match rates **before** November 16, ask Google whether your current hashed route keeps working, and if you're an agency uploading client data, tell your clients and update the paperwork **this week**.

## Watch

```youtube
Ne0am2w8JCc | Google Ads Customer Match Tutorial 2026 | Surfside PPC
QaheuRmkKC0 | Intro to conversion-based customer lists | Google Ads
55ZRkFrGbHA | Implementation guide for enhanced conversions for leads | Google Ads
L_hlecR4-zY | Enhanced Conversions in Google Ads (User-Provided Data Tag in GTM) | Loves Data
```

- **Surfside PPC:** a current, step-by-step Customer Match setup, if you've never uploaded a list.
- **Google Ads (customer lists):** Google's own intro to building lists from conversion data.
- **Google Ads (enhanced conversions for leads):** the official implementation path for lead-gen.
- **Loves Data:** the Tag Manager side of enhanced conversions, done carefully.

## Do this today

1. **Map your routes.** List every way customer data reaches Google: manual file, CRM connector, cloud import, Data Manager API, enhanced conversions tag.
2. **Record a baseline.** In Audience manager, note each Customer Match list's size and match rate. Note the enhanced conversions status too.
3. **Check normalization now.** Pull 50 records from your upload file: are emails lowercase and trimmed, and phones in `+country code` format? Fix it at the source.
4. **Ask Google** (rep or support): will hashed uploads keep working after Nov 16, and at the same match rate?
5. **Loop in privacy/legal**, especially if you're an agency, and update data processing descriptions that say "only hashed data is shared".
6. **Recheck match rates** in late November and compare against your baseline.

## Quiz

```quiz
[
  {
    "q": "You upload 'Omar.Khan@Outlook.com ' (capital letters and a trailing space) hashed as-is. The same person's Google account email is omar.khan@outlook.com. What happens?",
    "options": ["It matches: Google ignores case", "It doesn't match, and nothing warns you", "The upload is rejected with an error", "It matches but with a lower score"],
    "answer": 1,
    "why": "Any difference before hashing creates a completely different hash, so it silently fails to match."
  },
  {
    "q": "What's the main practical difference between hashing and encryption for matching?",
    "options": ["Encryption is one-way, hashing is reversible", "Hashing is one-way; encryption can be reversed with a key, letting Google normalize data before matching", "There is no difference", "Hashing is only for phone numbers"],
    "answer": 1,
    "why": "Encrypted data can be decrypted inside the secure environment, cleaned up and matched. That's why match rates can rise, and why the privacy model changes."
  },
  {
    "q": "Your current match rate is 40% on 50,000 records. A fix lifts it to 48%. How many extra matched users?",
    "options": ["400", "4,000", "8,000", "24,000"],
    "answer": 1,
    "why": "8 percentage points of 50,000 = 4,000 extra matched users."
  }
]
```

---

**Sources:** [PPC Land: Data Manager hashing change](https://ppc.land/google-ads-data-manager-stops-requiring-hashed-customer-data-november-16/) · [PPC Land: Customer Match API migration](https://ppc.land/google-forces-customer-match-uploads-to-data-manager-api-by-april-1/) · [shm.studio](https://shm.studio/en/news/google-ads-data-manager-crittografia-hashing-novembre-2026/) · [Google Ads Help: Customer Match uploads](https://support.google.com/google-ads/answer/10589050)
