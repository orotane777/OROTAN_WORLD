---
date: 2026-04-04
status: accepted
---

# ADR-0001: Initial System Architecture

## Context
Building a personal knowledge management system on Obsidian vault
using Claude Code as the AI engine. Need to define the core
architecture for agents, skills, commands, and rules.

## Decision

### Vault Structure
- 3 knowledge domains: 01_invest / 02_coding / 03_life
- _system/ for meta documents
- source/ for pending digest files

### Agent Architecture
- router-agent: first-pass for all inputs
- stock-agent / coding-agent / life-agent: domain specialists
- maintenance-agent: vault health
- digest-agent: source/ file processing

### Context Management
- CLAUDE.md: behavior principles only (25 lines)
- rules/: conditional loading per domain
- Agent roles defined in frontmatter only — not in CLAUDE.md
- Target: under 200k tokens per session

### Knowledge Input Workflow
- Immediate input → /ingest command
- File-based input → /digest command (interactive)

### Footnote System
- Date-based keys: [^YY-MM-DD]
- Section links: [[source#section]]
- Same date multiple sources: [^YY-MM-DD_2], [^YY-MM-DD_3]

## Consequences
- All agents must read _system/VAULT_MAP.md before processing
- Structural changes must be recorded in ADR
- CLAUDE.md changes must be synced to memory.md