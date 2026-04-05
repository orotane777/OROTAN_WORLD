---
name: ingest
description: Accepts external content (reports, YouTube, memos, books, etc.) and
             prepares it for vault distribution. Handles input parsing, source
             identification, duplicate checking, and format validation.
             Triggered by requests like "organize this," "add to vault,"
             or "save this."
---

# Ingest Skill

## Role
Receive all incoming external knowledge input and prepare it for routing.
This skill handles input parsing only — routing and page updates are
handled by agents via the /ingest command.

---

## Supported Input Formats
- Direct text paste
- URL (fetch and summarize web content first)
- File path reference
- File in source/ folder

---

## Step 1. Receive Input
Identify what was provided:
- Content body
- Source information (name, date, type)

If source information is missing, ask:
출처 정보가 없습니다. 아래 중 선택해주세요.

직접 입력 (출처명 알려주세요)
내 메모/생각 → [MEMO:자체]
출처 불명확 → [WEB:불명확] + #확인필요


---

## Step 2. Validate Source Format
Confirm source tag format is correct:
[YYYY-MM-DD][CODE:출처명]

Valid codes: YT / RPT / WEB / BOOK / MEMO / MSG / LEC

---

## Step 3. Duplicate Check
- Read `_system/SOURCE_REGISTRY.md`
- Same source + same date → already processed → report and stop
- Same source + different date → proceed as new content

---

## Step 4. Return Parsed Input
Return structured summary for /ingest command to use:
📥 Input Ready

출처: [코드:출처명]
날짜: YYYY-MM-DD
중복: 없음 / 있음
내용 요약: {3줄 이내}