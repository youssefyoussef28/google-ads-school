# Google Ads School

A free Google Ads class every morning. Each lesson starts from what changed in Google Ads, then teaches the idea behind it with a worked example, real practitioner tests, the expert debate, the best videos and a quiz.

**Live site:** https://youssefyoussef28.github.io/google-ads-school/

## How it works

- `lessons/*.md`: one Markdown file per lesson (frontmatter + body).
- `node build.mjs`: validates lessons and generates `data/` (lesson index, changelog and per-lesson files). No dependencies.
- `index.html`, `lesson.html`, `updates.html`, `resources.html`, `about.html` + `assets/`: the static site.
- `EDITORIAL.md`: the playbook the daily writer follows (sources, accuracy rules, lesson format).

A scheduled Claude Code cloud routine writes one lesson every morning at 9:30 (Beirut time), runs the build, and pushes to `main`. GitHub Pages publishes the site automatically.

To preview locally, open `index.html` in a browser, or run any static server in this folder.
