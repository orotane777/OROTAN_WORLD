---
tags: [meta, system]
created: 2026-04-04
updated: 2026-04-04 (최신화: 2026-04-04)
---

# VAULT_MAP

Vault structure and routing reference document.
All agents must read this file before processing any new input.

## Update Policy
- Update ONLY when folder structure changes
- Do NOT update on note additions or content changes
- Record all structural changes in ADR as well

---

## Folder Structure
OROTAN_WORLD/
├── 01_invest/
│   ├── _INDEX.md
│   ├── companies/       ← company pages (45 files)
│   ├── industries/      ← industry pages (12 files)
│   ├── events/          ← events/policy pages
│   │   └── 정책/        ← (4 files)
│   ├── methods/         ← investment methods (1 file: 매매전략)
│   └── philosophy/      ← investment philosophy (비어 있음)
├── 02_coding/
│   ├── _INDEX.md
│   └── AI/
│       ├── _INDEX.md
│       ├── harness-engineering/  ← (14 files)
│       └── Claude_Code/          ← (비어 있음, _INDEX.md만)
├── 03_life/
│   ├── _INDEX.md
│   ├── communication/   ← (비어 있음, _INDEX.md만)
│   ├── health/          ← (비어 있음, _INDEX.md만)
│   ├── history/         ← (비어 있음, _INDEX.md만)
│   ├── psychology/      ← (비어 있음, _INDEX.md만)
│   └── relationship/    ← (비어 있음, _INDEX.md만)
├── _system/             ← system meta documents
└── source/              ← pending digest files

---

## 현황 요약 (2026-04-04 기준)

| 섹션 | 폴더 | 페이지 수 |
|------|------|----------|
| 01_invest | companies/ | 45 |
| 01_invest | industries/ | 12 |
| 01_invest | events/정책/ | 4 |
| 01_invest | methods/ | 1 |
| 01_invest | philosophy/ | 0 |
| 02_coding | AI/harness-engineering/ | 14 |
| 02_coding | AI/Claude_Code/ | 0 |
| 03_life | communication/ | 0 |
| 03_life | health/ | 0 |
| 03_life | history/ | 0 |
| 03_life | psychology/ | 0 |
| 03_life | relationship/ | 0 |

### companies/ 파일 목록
CJ, HDC, HDC현대EP, HD현대, HD현대건설기계, HFR, KCC, LS, NH투자증권, SK, SK하이닉스, SNT다이내믹스, 강원랜드, 계룡건설, 대신증권, 대창단조, 덕산네오룩스, 동진쎄미켐, 두산, 두산퓨얼셀, 모토닉, 미래에셋증권, 부국증권, 비에이치, 삼성SDI, 삼성전자, 삼양통상, 세진중공업, 솔리드, 솔브레인, 신대양제지, 신한투자증권, 심텍, 오뚜기, 이노와이어리스, 이오테크닉스, 키움증권, 티에스이, 포스코인터내셔널, 하나마이크론, 하나머티리얼즈, 한국가스공사, 한국금융지주, 한국카본, 한양디지텍, 한화솔루션

### industries/ 파일 목록
2차전지, 건설, 건설기계, 디스플레이_폴더블, 반도체_전공정, 반도체_후공정, 엔터테인먼트, 전력인프라, 조선기자재, 증권, 카지노_레저, 통신, 해상풍력

### events/정책/ 파일 목록
MSCI_선진국편입, 상법개정, 연기금_코스닥비중확대, 이재명_대통령_정책

### harness-engineering/ 파일 목록
ast-grep, CLAUDE_MD, Codex_하네스엔지니어링, Rules, 개요, 메모리관리, 서브에이전트, 스킬_기반_아키텍처, 스킬과에이전트, 추천_오픈소스, 커맨드, 컨텍스트매니지먼트, 플래닝, 훅스

---

## Routing by Category

### 01_invest
| Input Type | Storage Path |
|------------|-------------|
| Company / ticker / earnings / report | `01_invest/companies/{company}.md` |
| Industry trends / sector analysis | `01_invest/industries/{industry}.md` |
| Policy / regulation / macro event | `01_invest/events/{event}.md` |
| Investment methods / strategy | `01_invest/methods/{topic}.md` |
| Investment philosophy / principles | `01_invest/philosophy/{topic}.md` |

### 02_coding
| Input Type | Storage Path |
|------------|-------------|
| Claude Code related | `02_coding/AI/Claude_Code/{topic}.md` |
| Harness engineering | `02_coding/AI/harness-engineering/{topic}.md` |
| New AI tool | Create `02_coding/AI/{tool}/개요.md` first |

### 03_life
| Input Type | Storage Path |
|------------|-------------|
| Speaking / persuasion / writing | `03_life/communication/{topic}.md` |
| Relationships / negotiation | `03_life/relationship/{topic}.md` |
| Diet / exercise / sleep | `03_life/health/{topic}.md` |
| Psychology / cognitive bias | `03_life/psychology/{topic}.md` |
| History / figures | `03_life/history/{topic}.md` |

---

## Multi-Category Input
- Input spanning 2+ categories → delegate to all relevant agents in parallel
- Ambiguous classification → router-agent asks user for confirmation

---

## New Folder Creation Policy
- 3+ notes accumulated on same topic → record in ADR, then propose new folder
- New AI tool → create `02_coding/AI/{tool}/` folder + `개요.md` first