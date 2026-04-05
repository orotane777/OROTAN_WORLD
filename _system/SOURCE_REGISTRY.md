---
tags: [meta, system]
created: 2026-04-03
updated: 2026-04-05
---

# SOURCE_REGISTRY

Registry of all processed sources.
Used for duplicate checking before processing any new input.

---

## Duplicate Check Rules
- Same source + same date → already processed → skip
- Same source + different date → treat as new content

## Source Type Codes
| Code | Description | Example |
|------|-------------|---------|
| YT | YouTube | 테디노트, 삼프로TV |
| RPT | Report / Analyst | KB증권, 미래에셋 |
| WEB | Web / Blog | 네이버 블로그, 브런치 |
| BOOK | Book | book title |
| MEMO | Personal note / thought | self |
| MSG | Messenger / SNS | KakaoTalk, Telegram |
| LEC | Lecture | 패스트캠퍼스, 인프런 |

---

## Registry

| ID | Date | Type | Source Name | Processed Pages |
|----|------|------|-------------|-----------------|
| SRC-001 | 2026-04-02 | RPT | KB증권 | `01_invest/events/3차상법개정안.md`, `01_invest/companies/HDC그룹.md`, `01_invest/companies/삼성물산.md` |
| SRC-002 | 2026-04-02 | LEC | 테디노트 | `02_coding/AI/harness-engineering/` — 개요, 컨텍스트매니지먼트, 메모리관리, 플래닝, 스킬과에이전트, 훅스, CLAUDE_MD, Rules, 스킬_기반_아키텍처, 서브에이전트, 커맨드, 추천_오픈소스, Codex_하네스엔지니어링, ast-grep (14개) |
| SRC-003 | 2026-03-27 | YT | 피프틴체어스 | `01_invest/events/정책/` (3개), `methods/매매전략`, `industries/` (11개), `companies/` (12개) — 총 27개 |
| SRC-004 | 2026-04-04 | YT | 15체어스(강영현) | `events/정책/상법개정`(업데이트), `events/정책/MSCI_선진국편입`(신규), `industries/증권·건설·조선기자재`(업데이트), `industries/반도체_전공정·통신`(신규), `methods/매매전략`(업데이트), `companies/` 34개(신규+업데이트) — 총 42개 |
| SRC-005 | 2026-02-12 | YT | 메리츠·KB증권 | `companies/비에이치.md` (기업분석 업데이트 — 폴더블·IT OLED·전장 성장 전망) |