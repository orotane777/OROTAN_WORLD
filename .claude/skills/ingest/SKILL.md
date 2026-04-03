---
name: ingest
description: Accepts external content (reports, YouTube, memos, books, etc.) and
             automatically distributes updates to relevant pages in the Obsidian
             vault. Triggered by requests like "organize this," "add to vault,"
             or "save this."
---

# Ingest Skill

## Role
Accept all incoming external knowledge input,
then automatically distribute and update the appropriate pages in the vault.

## Processing Flow
1. Identify input content + source information
2. Call router-agent → category analysis + target page selection
3. Report analysis results and confirm to proceed
4. Delegate to specialized agents (parallel processing allowed)
   - Stock content → stock-agent
   - Coding content → coding-agent
   - Life content → life-agent
5. Collect completion reports from each agent
6. Record in _system/UPDATE_LOG.md
7. Update _system/SOURCE_REGISTRY.md
8. Final completion report

## Supported Input Formats
All formats below are supported:
- Direct text paste
- File reference from _inbox/ folder
- URL (process after summarizing web content)
- File path

## When Source Information Is Missing
If the source is not specified, always ask for confirmation:
```
출처 정보가 없습니다. 아래 중 선택해주세요.
1. 직접 입력 (출처명 알려주세요)
2. 내 메모/생각 [MEMO:자체]로 처리
3. 출처 불명확 [WEB:불명확] + #확인필요 태그
```

## Final Completion Report Format
```
✅ Ingest 완료

📋 처리 요약
- 출처: [코드:출처명]
- 카테고리: [주식/코딩/삶/복합]

📝 업데이트된 페이지
- [페이지 경로]: [추가된 내용 한줄 요약]

🆕 신규 생성된 페이지
- [페이지 경로]

🔗 연결된 wikilink
- [[A]] ↔ [[B]]
```