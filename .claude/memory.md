# Memory

> Auto-managed by Claude. Max 200 lines.
> Last updated: 2026-04-04

---

## Vault Rules
- Always read _system/VAULT_MAP.md before processing any input
- Always read 📌 핵심 요약 section first before updating a page
- Never rewrite entire pages — add to relevant sections only
- Always include [^YY-MM-DD] footnote with every addition
- Always connect related pages with [[wikilink]]

## Routing Decisions
- Korean company names → 01_invest/companies/{name}.md
- Korean industry names → 01_invest/industries/{name}.md
- Korean events/policies → 01_invest/events/{name}.md
- Coding/AI content → 02_coding/AI/{topic}/
- Life knowledge → 03_life/{category}/{topic}.md

## Known Preferences
- User writes in Korean — all knowledge pages in Korean
- System documents in English
- Footnotes always in format: [^YY-MM-DD]
- Source tags always in format: [YYYY-MM-DD][CODE:source]

## Architecture Decisions
- CLAUDE.md must stay under 30 lines — agent roles belong in frontmatter
- obsidian-format.md is a rules/ file — loaded conditionally, not always
- _system/ files are always in English
- ADR recorded for every structural change

## Lessons Learned
- create-page templates must match obsidian-format.md field spec exactly
- commands/ files are orchestrators — not duplicates of skills/
- sync-vault/SKILL.md must not contain build logs or chat artifacts
- VAULT_MAP.md updates only on folder structure changes, not note additions