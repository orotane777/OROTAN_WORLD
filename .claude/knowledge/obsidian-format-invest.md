# Invest Page Format — Detailed Reference

## Frontmatter (All Invest Pages)
```yaml
---
tags: [카테고리, 세부분류]
created: YYYY-MM-DD
updated: YYYY-MM-DD
category: invest
inv_category: company/industry/macro/method/philosophy/event
inv_category_lv2: (free text)
related_industry: []
related_companies: []
related_event: []
related_macro: []
source_files: []
---
```

## related_industry Fixed List
반도체(장비), 반도체(소재,부품), 반도체(설계), 반도체(제조), 반도체(패키징,테스트 - OSAT)
디스플레이(패널), 디스플레이(장비), 디스플레이(소재,부품)
IT가전(백색가전), IT가전(AV), IT가전(스마트가전,IoT)
IT하드웨어(컴퓨팅), IT하드웨어(스토리지,네트워크), IT하드웨어(모빌리티 디바이스)
소프트웨어(인프라SW), 소프트웨어(보안), 소프트웨어(클라우드), 소프트웨어(데이터,AI)
자동차(완성차), 자동차(부품 - 전장), 자동차(부품 - 기계), 자동차(자율주행,센서)
화학(석유화학 - 기초,중간), 화학(합성수지,고무,섬유), 화학(정밀,스페셜티)
에너지(2차전지 - 셀), 에너지(2차전지 - 소재), 에너지(신에너지)
건설,건축(건축), 건설,건축(토목), 건설,건축(플랜트 - EPC), 건설,건축(건자재)
헬스케어(전통 제약), 헬스케어(바이오 - 신약 개발), 헬스케어(의료기기 - 진단)
통신(유무선 통신), 통신(장비)
유통(오프라인 리테일), 유통(이커머스)
필수소비재(종합식품), 필수소비재(주류), 필수소비재(생활용품)
방산(지상/해상 방산), 방산(항공/우주)
증권, 은행, 보험, 지주사
조선(상선), 조선(선박기자재)
- If not in list → use closest match or ask user

## Invest Page Sections

### Company
📌 핵심 요약
🏢 기업 개요
💰 투자 포인트
⚠️ 리스크
🏛️ 지배구조
📊 실적/밸류에이션
📰 최근 이슈
📚 출처

### Industry
📌 핵심 요약
🔍 산업 개요
📈 산업 트렌드
🏆 주요 플레이어
⚠️ 리스크 요인
📚 출처

### Event
📌 핵심 요약
📋 사건 개요
🎯 수혜 조건/특징
🏢 관련 기업
📚 출처

## Auto-Linking Rules
- Company page mentions industry → add [[산업명]] wikilink
- Company page mentions event → add [[사건명]] wikilink
- Event page mentions company → reflect in that company page too
- Industry page major players → add [[기업명]] wikilink

## Processing Order (single input, multiple items)
1. Event page first
2. Company page
3. Industry page
4. Connect wikilinks