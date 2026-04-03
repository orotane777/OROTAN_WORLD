# OROTAN_WORLD — Claude Operating Guide

## Vault Information
- Path: G:\내 드라이브\DriveSyncFiles\OROTAN_WORLD
- OS: Windows
- Obsidian CLI: Direct vault access available via the `obsidian` command

## Purpose of This Vault
A personal knowledge management system that automatically accumulates knowledge across the 3 categories below.
- 01_invest: stock investing (companies/industries/macro/events/philosophy/methods)
- 02_coding: technical knowledge related to AI/languages
- 03_life: conversation/relationships/health/psychology/history

## Claude Behavior Principles
1. Always read _system/VAULT_MAP.md first when new input arrives
2. If a page already exists, read only the 📌 core summary section first to understand the current status
3. Add only to the relevant section — never rewrite the entire page
4. Skip duplicate content
5. Every added item must include a [date][source] tag
6. Link related pages with [[wikilink]]

## Rule Reference Guide
- Stock-related → rules/stock.md
- Coding-related → rules/coding.md
- Life-related → rules/life.md
- Note format → rules/obsidian-format.md
- Source handling → rules/source-management.md

## Agent Roles
- router-agent: first-pass analysis and routing for all inputs
- stock-agent: dedicated updates for 01_invest/
- coding-agent: dedicated updates for 02_coding/
- life-agent: dedicated updates for 03_life/
- maintenance-agent: sync/cleanup/index refresh

## Main Commands
- /ingest: external content input → automatic distribution
- /sync: vault document sync
- /review: vault status check
- /plan: planning before large work

## Source Folder
- Path: source/
- Purpose: Store all raw input files (reports, lecture notes, memos, etc.)
- Original files are never modified (frontmatter only)
- All files must include standard frontmatter (see rules/obsidian-format.md)

## Digest Workflow
1. User places file in source/ folder
2. User sets digest: true in frontmatter when ready
3. User runs /digest in Claude Code
4. digest-agent scans source/ for pending files
5. Per file: summarize → propose classification → user feedback → confirm → execute
6. Claude updates digested_at after completion
7. Knowledge pages updated, source file preserved

## Agent Update
- digest-agent: processes source/ files via discussion with user
  called by /digest command

## Command Update
- /digest: scan source/ → discussion → knowledge page update