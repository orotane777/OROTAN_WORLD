# Footnote System — Detailed Reference

## Basic Format
- Key: [^YY-MM-DD]
- Body: 내용 [^26-03-27]
- Source entry: [^26-03-27]: [[파일#섹션]] - 핵심내용 한줄
- Date is the key itself — do not repeat date in entry text

## Same Date, Multiple Sources
- First source: [^26-03-27]
- Second source: [^26-03-27_2]
- Third source: [^26-03-27_3]

## Same Source, Multiple Sections
- Combine with comma in one entry:

## Section Link Rules
- Use [[파일명#섹션]] not just [[파일명]]
- Use the most encompassing heading that contains the referenced content
- If no sections in source → use [[파일명]] only

## Examples
삼성전자는 GAA 2나노 공정을 선도한다. 1
자사주 소각 시 대주주 지분율이 상승한다. 1
📚 출처

## Source File Frontmatter
```yaml
---
title: 
date: YYYY-MM-DD
source-type: RPT/YT/WEB/BOOK/MEMO/MSG/LEC
author: 
category: invest/coding/life
inv_category: company/industry/macro/method/philosophy/event
inv_category_lv2: 
coding_category: AI/Python/DB/etc
coding_category_lv2: 
life_category: communication/health/history/psychology/relationship
life_category_lv2: 
digest: false
digested_at:
---
```

## Digest Trigger Condition
- digest: true AND digested_at: empty → pending for processing