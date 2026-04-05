---
name: create-page
description: Creates a new knowledge page using a category-specific standard
             template. Triggered by requests like "create an HDC page,"
             "make a semiconductor industry note," or "add a new page."
---

# Create Page Skill

## Role
Create new knowledge pages using standard templates.

## Processing Sequence
1. Determine page type (company/industry/event/coding/life)
2. Read `_system/VAULT_MAP.md` and confirm storage path
3. Check whether a file already exists in that path
   - If yes → "Already exists. Add content via /ingest."
   - If no → create a new page from template
4. Apply category-specific template
5. Update _INDEX.md in the target folder
   - Add new row: | [[{page name}]] | {one line summary} | {today's date} |
   - Update Total count (+1)
   - Update Last updated date
   - If _INDEX.md doesn't exist → create it first
6. Cascade update to parent folder _INDEX.md
   - ex. new page in 02_coding/AI/harness-engineering/
   - → update 02_coding/AI/_INDEX.md
   - → update 02_coding/_INDEX.md
7. Connect wikilinks to related pages

## Category-Specific Templates

### Company Page
```yaml
---
tags: [주식, 기업]
created: {오늘날짜}
updated: {오늘날짜}
category: invest
inv_category: company
inv_category_lv2: {기업명}
related_industry: []
related_companies: []
related_event: []
related_macro: []
source_files: []
---
```
```markdown
# {기업명}

> **한줄요약**: 
> **최근업데이트**: {오늘날짜}
> **관련페이지**: 

---

## 📌 핵심 요약


---

## 🏢 기업 개요

## 💰 투자 포인트

## ⚠️ 리스크

## 🏛️ 지배구조

## 📊 실적/밸류에이션

## 📰 최근 이슈

---

## 📚 출처
```

---

### Industry Page
```yaml
---
tags: [주식, 산업]
created: {오늘날짜}
updated: {오늘날짜}
category: invest
inv_category: industry
inv_category_lv2: {산업명}
related_industry: []
related_companies: []
related_event: []
related_macro: []
source_files: []
---
```
```markdown
# {산업명}

> **한줄요약**: 
> **최근업데이트**: {오늘날짜}
> **관련페이지**: 

---

## 📌 핵심 요약


---

## 🔍 산업 개요

## 📈 산업 트렌드

## 🏆 주요 플레이어

## ⚠️ 리스크 요인

---

## 📚 출처
```

---

### Event Page
```yaml
---
tags: [주식, 사건]
created: {오늘날짜}
updated: {오늘날짜}
category: invest
inv_category: event
inv_category_lv2: {사건명}
related_industry: []
related_companies: []
related_event: []
related_macro: []
source_files: []
---
```
```markdown
# {사건명}

> **한줄요약**: 
> **최근업데이트**: {오늘날짜}
> **관련페이지**: 

---

## 📌 핵심 요약


---

## 📋 사건 개요

## 🎯 수혜 조건/특징

## 🏢 관련 기업

---

## 📚 출처
```

---

### Coding Page
```yaml
---
tags: [코딩, {세부태그}]
created: {오늘날짜}
updated: {오늘날짜}
category: coding
coding_category: {AI/Python/DB/etc}
coding_category_lv2: {세부주제}
source_files: []
---
```
```markdown
# {주제명}

> **한줄요약**: 
> **최근업데이트**: {오늘날짜}
> **관련페이지**: 

---

## 📌 핵심 요약


---

## 📖 개념 설명

## 💡 핵심 원리

## 🛠️ 실전 적용법

## ⚠️ 주의사항

## 🔗 관련 개념

## 💻 코드 예시

---

## 📚 출처
```

---

### Life Page
```yaml
---
tags: [삶, {세부태그}]
created: {오늘날짜}
updated: {오늘날짜}
category: life
life_category: {communication/health/history/psychology/relationship}
life_category_lv2: {세부주제}
source_files: []
---
```
```markdown
# {주제명}

> **한줄요약**: 
> **최근업데이트**: {오늘날짜}
> **관련페이지**: 

---

## 📌 핵심 요약


---

## 📖 개념/배경

## 💡 핵심 원칙

## 🛠️ 실전 적용법

## 🔗 관련 개념

---

## 📚 출처
```

---

## Completion Report Format
```
✅ Page Created
- Created: [path]
- Template: [type]
- INDEX updated: [folder list]
- Wikilinks connected: [list]
```