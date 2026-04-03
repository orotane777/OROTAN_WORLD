# Obsidian Note Formatting Rules

---

## 0. File Naming Rules

- **기업 파일명에 법인 형태 표기 금지**: `(주)`, `㈜`, `(주식회사)` 등 포함 불가
  - 예: `SK㈜` → `SK.md`, `CJ㈜` → `CJ.md`
- 파일명은 일반적으로 알려진 브랜드/기업명만 사용

---

## 1. Knowledge Page Standard Structure

### Frontmatter

#### invest 페이지 전체 속성 (모든 invest 페이지에 항상 포함)
```yaml
---
tags: [카테고리, 세부분류]
created: YYYY-MM-DD
updated: YYYY-MM-DD
category: invest
inv_category: company/industry/macro/method/philosophy/event
inv_category_lv2: (free text)
related_industry:
  - "반도체(장비)"
related_companies:
  - "[[기업명]]"
related_event:
  - "[[사건명]]"
related_macro:
  - "[[매크로주제]]"
source_files:
  - "[[source filename]]"
---
```

**invest 전용 규칙:**
- **모든 invest 페이지는 위 9개 필드를 전부 포함** (해당 항목이 없으면 빈 배열 `[]` 또는 빈값으로 두기)
- `related_industry` 값은 반드시 아래 **고정 목록**에서만 선택 (wikilink 아님, 텍스트로 기재)

**related_industry 고정 목록:**
```
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
증권, 은행, 보험
지주사
조선(상선), 조선(선박기자재)
```
- 위 목록에 없는 업종이 필요하면 가장 유사한 항목으로 대체하거나, 사용자에게 확인 요청
- `related_companies`, `related_event`, `related_macro`는 wikilink 형식 `"[[이름]]"` 사용
- `related_industry`는 **텍스트만** (wikilink 아님)

#### coding/life 페이지
```yaml
---
tags: [카테고리, 세부분류]
created: YYYY-MM-DD
updated: YYYY-MM-DD
category: coding/life
coding_category: AI/Python/DB/etc
coding_category_lv2: (free text)
life_category: communication/health/history/psychology/relationship
life_category_lv2: (free text)
source_files:
  - "[[source filename]]"
---
```

---

### Page Structure
```
# 페이지명

> **한줄요약**: 
> **최근업데이트**: YYYY-MM-DD
> **관련페이지**: [[링크1]], [[링크2]]

---

## 📌 핵심 요약
(200자 이내. 항상 최신 상태 유지.
 Claude가 여기만 읽어도 현황 파악 가능하도록.)

---

## [본문 섹션들]
(각 섹션 내 문장에 각주 날짜 부여)

---

## 📚 출처
[^YY-MM-DD]: [[source_filename#관련섹션]] - 핵심내용 한줄
```

---

### Footnote Rules (날짜 기반 각주 시스템)

#### 기본 형식
- 각주 번호 대신 **소스 날짜**를 키로 사용: `[^YY-MM-DD]`
- 본문 인용: `내용 [^26-03-27]`
- 출처란: `[^26-03-27]: [[소스파일명#관련섹션]] - 핵심내용 한줄`
- 출처란에 날짜를 별도로 적지 않음 (키 자체가 날짜이므로)

#### 같은 날짜 복수 소스 처리
- 같은 날짜에 소스가 2개 이상이면 `_1`, `_2` suffix로 구분
- 첫 번째 소스: `[^26-03-27]` (suffix 없음)
- 두 번째 소스: `[^26-03-27_2]`
- 세 번째 소스: `[^26-03-27_3]`

#### 같은 날짜 단일 소스, 복수 섹션
- 같은 소스지만 여러 섹션을 참조하는 경우 → **하나의 각주에 콤마로 묶기**
```
[^26-03-27]: [[소스파일#섹션A]] - A 내용요약, [[소스파일#섹션B]] - B 내용요약
```

#### 섹션 링크 규칙
- 각주 소스는 단순 `[[파일명]]`이 아닌 **`[[파일명#관련섹션]]`** 형식으로 기재
- 섹션 제목은 소스 파일 내 해당 내용이 속한 가장 포괄적인 마크다운 헤딩 사용
- 예: 소스의 `## II. 상법 개정` 아래 `### 3차 개정` 내용을 참조한 경우
  - 해당 섹션이 노트와 관련된 내용만 담고 있다면: `[[소스파일#II. 상법 개정]]`
  - 해당 소주제만 관련 있다면: `[[소스파일#3차 개정]]`
- 소스 파일에 섹션 구분이 없으면 섹션 없이 `[[소스파일명]]` 사용

#### 예시
```
삼성전자는 GAA 2나노 공정을 선도한다. [^25-02-03]
자사주 소각 시 대주주 지분율이 상승한다. [^25-02-03]

## 📚 출처
[^25-02-03]: [[원본파일#III. 반도체 산업 분석]] - 삼성 GAA 파운드리 경쟁력, [[원본파일#II. 상법 개정 3단계]] - 자사주 소각 메커니즘
```

#### 복수 날짜 소스 예시
```
내용A [^26-03-27]
내용B [^25-02-03]

## 📚 출처
[^26-03-27]: [[소스파일1#관련섹션]] - 내용A 요약
[^25-02-03]: [[소스파일2#관련섹션]] - 내용B 요약
```

---

### Content Addition Rules
- Always read 📌 핵심 요약 first before updating
- Add to relevant section only — never rewrite entire page
- Add footnote reference `[^YY-MM-DD]` to each new sentence/paragraph
- Update 📌 핵심 요약 after adding content
- Update `updated` date in frontmatter
- Add source filename to `source_files` in frontmatter
- Duplicate content → skip
- Full rewrite → strictly prohibited

---

### Obsidian Syntax Rules
- Internal link: `[[page name]]`
- Tag: `#tag name`
- Callout: `> [!note]`, `> [!warning]`
- Related page connections: always use `[[wikilink]]`

---

## 2. Source File Frontmatter Template

All files placed in source/ folder must include this frontmatter.

### invest
```yaml
---
title: 
date: YYYY-MM-DD
source-type: RPT/YT/WEB/BOOK/MEMO/MSG/LEC
author: 
category: invest
inv_category: company/industry/macro/method/philosophy/event
inv_category_lv2: 
digest: false
digested_at:
---
```

### coding
```yaml
---
title: 
date: YYYY-MM-DD
source-type: RPT/YT/WEB/BOOK/MEMO/MSG/LEC
author: 
category: coding
coding_category: AI/Python/DB/etc
coding_category_lv2: 
digest: false
digested_at:
---
```

### life
```yaml
---
title: 
date: YYYY-MM-DD
source-type: RPT/YT/WEB/BOOK/MEMO/MSG/LEC
author: 
category: life
life_category: communication/health/history/psychology/relationship
life_category_lv2: 
digest: false
digested_at:
---
```

### Field Rules
| Field | Required | Description |
|-------|----------|-------------|
| title | ✅ | File title |
| date | ✅ | Source published date |
| source-type | ✅ | Source type code |
| author | ✅ | Author/Creator |
| category | ✅ | invest / coding / life |
| inv_category | 권장 | company/industry/macro/method/philosophy/event |
| inv_category_lv2 | 선택 | Free text — fills naturally over time |
| coding_category | 권장 | AI/Python/DB/etc |
| coding_category_lv2 | 선택 | Free text — fills naturally over time |
| life_category | 권장 | communication/health/history/psychology/relationship |
| life_category_lv2 | 선택 | Free text — fills naturally over time |
| digest | ✅ | false → true to trigger processing |
| digested_at | 자동 | Auto-filled by Claude after processing |

### /digest 실행 조건
- `digest: true` AND `digested_at:` 값이 비어 있는 파일만 처리

### Workflow
1. Place file in source/ folder
2. Fill in frontmatter (lv2 can be empty)
3. Change digest: false → true when ready
4. Run /digest in Claude Code
5. Claude discusses classification → confirms → executes
6. Claude fills digested_at automatically

### Notes
- lv2 fields are optional — leave empty if unsure
- Claude will suggest lv2 during /digest discussion
- Never manually edit digested_at
- source-type must use codes from SOURCE_REGISTRY.md
