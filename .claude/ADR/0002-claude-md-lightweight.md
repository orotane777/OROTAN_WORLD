---
date: 2026-04-04
status: accepted
---

# ADR-0002: CLAUDE.md Lightweight Refactor

## Context
Original CLAUDE.md was 62 lines including agent roles,
command descriptions, and digest workflow — all of which
were duplicated in agent frontmatter and command files.
This caused unnecessary token consumption on every prompt.

## Decision
- Remove Agent Roles section → already in agent frontmatter
- Remove Main Commands section → already in commands/
- Remove Digest Workflow section → already in commands/digest.md
- Remove Agent/Command Update section → maintenance notes only
- Compress Source Folder to 2 lines

## Result
62 lines → 25 lines
Estimated token saving: ~400 tokens per prompt

## Consequences
- Agent routing relies entirely on frontmatter description
- Command behavior defined only in commands/ files
- CLAUDE.md must stay under 30 lines going forward