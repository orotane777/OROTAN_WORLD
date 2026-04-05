---
type: command
---

# /ingest — Knowledge Ingest Command
...

## Usage
/ingest
Run when adding external knowledge directly to the vault.
For file-based interactive processing, use /digest instead.

---

## When to Use
- Pasting text, URL, or content directly for immediate processing
- Adding to vault without going through the source/ folder

---

## Steps

### Step 1. Call ingest skill
- Receive and parse input via ingest skill
- Confirm source, check duplicates, validate format
- Receive parsed result

### Step 2. Delegate to router-agent
- Call router-agent to classify category and select target pages
- Report analysis results to user and wait for confirmation
📋 Analysis Result

Category: [invest/coding/life/mixed]
Source: [CODE:source name]
Duplicate: [none/found]
Pages to update: [page list]
New pages needed: [page list or none]
Agent to delegate: [agent name]

Proceed?

### Step 3. Delegate to specialist agents
Execute after confirmation. Parallel delegation for mixed categories.

- invest → stock-agent
- coding → coding-agent
- life → life-agent
- New page needed → call create-page skill automatically

### Step 4. Finalize
- Update `_system/SOURCE_REGISTRY.md`
- Record in `_system/UPDATE_LOG.md`
- Final completion report
✅ Ingest Complete
📋 Summary

Source: [CODE:source name]
Category: [invest/coding/life/mixed]

📝 Updated Pages

[page path]: [one line summary]

🆕 New Pages Created

[page path]

🔗 Wikilinks Connected

[[A]] ↔ [[B]]


---

## Notes
- For source/ folder files → use /digest
- /ingest: immediate processing / /digest: interactive processing
- Never execute without user confirmation