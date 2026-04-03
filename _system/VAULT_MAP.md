# VAULT MAP — Routing Criteria

## Category Classification Criteria

### 01_invest (Stock Investing)
**Relevant keywords**: company name (Korean input supported), stock ticker/symbol (Korean input supported), stock price, dividend, PER, PBR, ROE, report,
analyst, industry, sector, interest rate, exchange rate, bill/law, commercial law, disclosure, earnings, valuation

#### Detailed Routing
| Content Type | Storage Path |
|----------|----------|
| Specific company analysis/mention | 01_invest/companies/{기업명}.md |
| Industry/sector trends | 01_invest/industries/{산업명}.md |
| Policy/bill/event | 01_invest/events/{사건명}.md |
| Interest rate/exchange rate/economy | 01_invest/macro/{주제}.md |
| Investment methodology/principles | 01_invest/philosophy/{주제}.md |
| Analysis techniques/tools | 01_invest/methods/{기법명}.md |

---

### 02_coding
**Relevant keywords**: code, programming, AI, LLM, agent, harness,
prompt, Python, JavaScript, API, Claude, GPT, Claude Code

#### Detailed Routing
| Content Type | Storage Path |
|----------|----------|
| Claude Code related | 02_coding/AI/Claude_Code/{주제}.md |
| harness-engineering | 02_coding/AI/harness-engineering/{주제}.md |
| Other AI/LLM | 02_coding/AI/{도구명}/{주제}.md |
| Specific language | 02_coding/언어/{언어명}/{주제}.md |

---

### 03_life
**Relevant keywords**: conversation, speaking, people, relationships, health, diet, exercise,
psychology, history, philosophy, life, habits

#### Detailed Routing
| Content Type | Storage Path |
|----------|----------|
| Speaking/persuasion/presentation | 03_life/communication/{주제}.md |
| Human relationships/interpersonal skills | 03_life/relationship/{주제}.md |
| Health/diet/exercise | 03_life/health/{주제}.md |
| Psychology/behavior | 03_life/psychology/{주제}.md |
| History/events | 03_life/history/{주제}.md |

---

## Multi-Category Input Handling Rules
- If one input belongs to multiple categories → **update all**
- If one input includes company + industry + event together → **update all**
- [[wikilink]] connections between updated pages are required

## Page Processing Rules
| Situation | Handling Method |
|------|----------|
| No file exists in the target path | Create a new page from template |
| File exists | Read only 📌 core summary first, then add only to the relevant section |
| Content already exists | Skip |
| Content without source | Do not add |

## Strictly Prohibited
- Rewriting an entire existing page
- Adding duplicate content
- Adding content without source tags
- Deleting or heavily modifying the 📌 core summary section

## Source Folder Rules

### Location
source/ (vault root)

### Purpose
- Store all raw input files as-is
- Original content never modified
- Only frontmatter gets updated by Claude

### File Types Accepted
- Analyst reports (RPT)
- Lecture notes / scripts (LEC)
- YouTube summaries (YT)
- Web articles / blogs (WEB)
- Books (BOOK)
- Personal memos (MEMO)
- Messenger/SNS content (MSG)

### Digest Status
| digest | digested_at | Status |
|--------|-------------|--------|
| false | empty | Not ready |
| true | empty | ⏳ Pending — will be processed by /digest |
| true | 2025-04-02 | ✅ Done |

### Processing Rule
- /digest scans source/ for digest:true + digested_at empty
- Processes in chronological order (oldest first)
- Each file requires user confirmation before execution
- After processing → digested_at auto-filled by Claude

### What Goes into source/
Everything raw:
- PDF exports
- Copied article text
- Lecture transcripts
- Personal notes
- Chat exports

### What Does NOT Go into source/
- Already structured knowledge pages
- Files already processed (digested_at filled)