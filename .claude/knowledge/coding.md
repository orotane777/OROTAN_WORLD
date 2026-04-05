# Coding Knowledge Processing Rules

## Coding Page Structure
```
# {주제명}

> 한줄요약 / 최근업데이트 / 관련페이지

## 📌 핵심 요약

## 📖 개념 설명

## 💡 핵심 원리

## 🛠️ 실전 적용법

## ⚠️ 주의사항 / 자주 하는 실수

## 🔗 관련 개념
- [[관련페이지]] — 연결 이유

## 💻 코드 예시
(있는 경우에만)

## 📚 출처 목록
```

---

## Detailed Routing Rules

### Claude Code Related
| Content Type | Storage Path |
|----------|----------|
| Claude Code overview | 02_coding/AI/Claude_Code/개요.md |
| CLAUDE.md writing guide | 02_coding/AI/Claude_Code/CLAUDE_MD.md |
| Commands/skills/agents | 02_coding/AI/Claude_Code/{주제}.md |

### Harness Engineering Related
| Content Type | Storage Path |
|----------|----------|
| Harness overview | 02_coding/AI/harness-engineering/개요.md |
| Context management | 02_coding/AI/harness-engineering/컨텍스트매니지먼트.md |
| Memory management | 02_coding/AI/harness-engineering/메모리관리.md |
| Hooks | 02_coding/AI/harness-engineering/훅스.md |

### Criteria for Adding a New AI Tool
- No existing folder → create 02_coding/AI/{도구명}/, then write 개요.md first
- Existing folder present → add to the appropriate file in that folder

---

## Code Block Writing Rules
- Language must be specified: ```python, ```bash, etc.
- Prefer executable examples
- Add comments for key explanations

## Auto-Linking Rules
- Always use mutual links between Claude Code ↔ 하네스엔지니어링
- Add wikilinks from concept pages to practical application pages
- Use mutual wikilinks when mentioning comparisons between related AI tools