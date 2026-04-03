# Stock Investing Knowledge Processing Rules

## Company Page Structure
Company pages follow the section order below.
```
# {기업명}

> 한줄요약 / 최근업데이트 / 관련페이지

<!-- frontmatter: related_industry 필드에 소속 산업 wikilink 기재 -->

## 📌 핵심 요약

## 🏢 기업 개요
- 사업모델
- 주요 제품/서비스
- 매출 구조

## 💰 투자 포인트

## ⚠️ 리스크

## 🏛️ 지배구조

## 📊 실적/밸류에이션

## 📰 최근 이슈

## 📚 출처 목록
```

---

## Industry Page Structure
```
# {산업명}

> 한줄요약 / 최근업데이트 / 관련페이지

<!-- frontmatter: related_companies 필드에 주요 플레이어 wikilink 기재 -->

## 📌 핵심 요약

## 🔍 산업 개요

## 📈 산업 트렌드

## 🏆 주요 플레이어
- [[기업명]] — 한줄 설명

## ⚠️ 리스크 요인

## 📚 출처 목록
```

---

## Event Page Structure
```
# {사건명}

> 한줄요약 / 최근업데이트 / 관련페이지

<!-- frontmatter: related_industry + related_companies 모두 기재 -->

## 📌 핵심 요약

## 📋 사건 개요
- 배경
- 주요 내용
- 시행 시기

## 🎯 수혜 조건/특징

## 🏢 관련 기업
- [[기업명]] — 수혜/피해 이유

## 📚 출처 목록
```

---

## Auto-Linking Rules
- If an industry is mentioned in a company page → add the related [[산업명]] wikilink
- If an event is mentioned in a company page → add the related [[사건명]] wikilink
- If a company is mentioned in an event page → also reflect it in the related section of that company page
- Major players in an industry page → add [[기업명]] wikilink

## Routing Priority
Processing order when a single input contains multiple items:
1. Create/update the event page first
2. Update the company page
3. Update the industry page
4. Connect pages with wikilinks