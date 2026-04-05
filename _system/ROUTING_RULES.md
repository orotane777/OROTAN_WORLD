---
tags: [meta, system]
created: 2026-04-04
updated: 2026-04-04
---

# ROUTING_RULES

Agent routing decision rules.
VAULT_MAP answers "where" — this file answers "how to decide."

---

## Primary Classification

### → stock-agent
- Company name (Korean supported) / ticker / stock price / earnings
- Industry trends / sector analysis
- Policy / regulation / macro events
- Analyst reports

### → coding-agent
- Code / AI / LLM / programming
- Claude Code / harness engineering
- Development tools / frameworks

### → life-agent
- Health / exercise / diet
- Relationships / psychology
- History / figures
- Communication / persuasion

---

## Multi-Category Processing Order
1. Create/update event page first
2. Update company page
3. Update industry page
4. Connect wikilinks

---

## Ambiguous Classification
- router-agent asks user directly for confirmation
- No temporary placement without confirmation
- No ADR entry until classification is confirmed

---

## Agent Priority Table
| Situation | Agent to Call |
|-----------|--------------|
| All new input — first pass | router-agent |
| 01_invest updates | stock-agent |
| 02_coding updates | coding-agent |
| 03_life updates | life-agent |
| Vault sync / cleanup | maintenance-agent |
| source/ file processing | digest-agent |