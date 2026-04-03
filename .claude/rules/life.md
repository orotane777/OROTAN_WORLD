# Life Knowledge Processing Rules

## Life Page Structure
```
# {주제명}

> 한줄요약 / 최근업데이트 / 관련페이지

## 📌 핵심 요약

## 📖 개념/배경

## 💡 핵심 원칙
(번호 매겨서 정리)

## 🛠️ 실전 적용법

## 🔗 관련 개념
- [[관련페이지]] — 연결 이유

## 📚 출처 목록
```

---

## Detailed Routing Rules

| Content Type | Storage Path |
|----------|----------|
| Speaking/persuasion/presentation/writing | 03_life/communication/{주제}.md |
| Human relationships/interpersonal skills/negotiation | 03_life/relationship/{주제}.md |
| Diet/nutrition/exercise/sleep | 03_life/health/{주제}.md |
| Psychology/behavior/cognitive bias | 03_life/psychology/{주제}.md |
| History/events/figures | 03_life/history/{주제}.md |

---

## Criteria for Adding a New Category
- Does not match the existing 5 categories → place in the closest category
- If 3 or more notes accumulate on the same topic → record in ADR and propose creating a new folder

## Auto-Linking Rules
- Psychology ↔ relationship-related content → mutual wikilink
- Diet ↔ exercise-related content within health → mutual wikilink
- Philosophy of historical figures → connect to relevant life-category pages