// Builds the lesson data the site reads.
// Reads lessons/*.md (frontmatter + markdown) and writes:
//   data/index.js            -> window.SCHOOL_INDEX = [...metadata, newest first]
//   data/lessons/<slug>.js   -> window.__lesson({...metadata, body})
// Script files (not JSON) so the site works from file:// and any static host.
// Usage: node build.mjs        (exits non-zero if any lesson is invalid)

import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const lessonsDir = join(root, "lessons");
const outDir = join(root, "data");

export const TRACKS = [
  "News & Updates",
  "Fundamentals",
  "Bidding & Budgets",
  "Performance Max",
  "Search & Keywords",
  "Creative & Ad Copy",
  "Measurement & Tracking",
  "Audiences & AI",
  "Case Studies",
];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const REQUIRED = ["title", "date", "track", "level", "summary"];

function parse(file) {
  const raw = readFileSync(join(lessonsDir, file), "utf8").replace(/\r\n/g, "\n");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`${file}: missing --- frontmatter block`);
  const meta = {};
  for (const line of m[1].split("\n")) {
    if (!line.trim()) continue;
    const i = line.indexOf(":");
    if (i < 0) throw new Error(`${file}: bad frontmatter line "${line}"`);
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  const body = m[2].trim();
  const errors = [];
  for (const k of REQUIRED) if (!meta[k]) errors.push(`missing "${k}"`);
  if (meta.date && !/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) errors.push(`date must be YYYY-MM-DD`);
  if (meta.updated && !/^\d{4}-\d{2}-\d{2}$/.test(meta.updated)) errors.push(`updated must be YYYY-MM-DD`);
  if (meta.track && !TRACKS.includes(meta.track)) errors.push(`track "${meta.track}" not one of: ${TRACKS.join(" | ")}`);
  if (meta.level && !LEVELS.includes(meta.level)) errors.push(`level "${meta.level}" not one of: ${LEVELS.join(" | ")}`);

  // Validate the custom fenced blocks the site renders.
  for (const [, block] of body.matchAll(/```quiz\n([\s\S]*?)```/g)) {
    try {
      const q = JSON.parse(block);
      if (!Array.isArray(q)) throw new Error("quiz must be a JSON array");
      q.forEach((item, n) => {
        if (!item.q || !Array.isArray(item.options) || typeof item.answer !== "number" || !item.options[item.answer])
          throw new Error(`question ${n + 1} needs q, options[], answer (0-based index)`);
      });
    } catch (e) {
      errors.push(`quiz block: ${e.message}`);
    }
  }
  for (const [, block] of body.matchAll(/```youtube\n([\s\S]*?)```/g)) {
    for (const line of block.split("\n").filter((l) => l.trim())) {
      const id = line.split("|")[0].trim();
      if (!/^[A-Za-z0-9_-]{11}$/.test(id)) errors.push(`youtube line "${line}" must start with an 11-char video ID`);
    }
  }
  if (errors.length) throw new Error(`${file}:\n  - ${errors.join("\n  - ")}`);

  const slug = file.replace(/\.md$/, "");
  const words = body.replace(/```[\s\S]*?```/g, "").split(/\s+/).length;
  return {
    slug,
    title: meta.title,
    date: meta.date,
    track: meta.track,
    level: meta.level,
    summary: meta.summary,
    updated: meta.updated || null,
    updateNote: meta.update_note || null,
    tags: (meta.tags || "").split(",").map((t) => t.trim()).filter(Boolean),
    minutes: Math.max(1, Math.round(words / 220)),
    body,
  };
}

const files = existsSync(lessonsDir) ? readdirSync(lessonsDir).filter((f) => f.endsWith(".md")) : [];
const lessons = [];
const failures = [];
for (const f of files) {
  try {
    lessons.push(parse(f));
  } catch (e) {
    failures.push(e.message);
  }
}
if (failures.length) {
  console.error("Build failed:\n" + failures.join("\n"));
  process.exit(1);
}

// Newest first; on the same day, news leads, then curriculum order.
lessons.sort((a, b) => b.date.localeCompare(a.date) || TRACKS.indexOf(a.track) - TRACKS.indexOf(b.track) || a.slug.localeCompare(b.slug));

// Changelog: what was added or updated on each day, newest day first.
const days = new Map();
const addItem = (date, item) => (days.get(date) || days.set(date, []).get(date)).push(item);
for (const l of lessons) {
  addItem(l.date, { type: "added", slug: l.slug, title: l.title, track: l.track });
  if (l.updated && l.updated !== l.date) addItem(l.updated, { type: "updated", slug: l.slug, title: l.title, track: l.track, note: l.updateNote });
}
const updates = [...days.entries()].sort((a, b) => b[0].localeCompare(a[0])).map(([date, items]) => ({ date, items }));

rmSync(join(outDir, "lessons"), { recursive: true, force: true });
mkdirSync(join(outDir, "lessons"), { recursive: true });
const index = lessons.map(({ body, ...meta }) => meta);
writeFileSync(
  join(outDir, "index.js"),
  `window.SCHOOL_INDEX = ${JSON.stringify(index, null, 1)};\nwindow.SCHOOL_TRACKS = ${JSON.stringify(TRACKS)};\nwindow.SCHOOL_UPDATES = ${JSON.stringify(updates, null, 1)};\n`
);
for (const l of lessons) {
  // Escape "</" so lesson text can never close a <script> context.
  const json = JSON.stringify(l).replace(/<\//g, "<\\/");
  writeFileSync(join(outDir, "lessons", `${l.slug}.js`), `window.__lesson(${json});\n`);
}
console.log(`Built ${lessons.length} lesson(s).`);
