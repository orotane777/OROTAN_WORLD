# /digest — Digest Command

## Usage
```
/digest
```

## When to Use
- When you want to process pending source files
- When digest: true files have accumulated
- Regular knowledge management sessions

## Steps

### Step 1. Delegate to digest-agent
- Call digest-agent
- Scan source/ folder
- Find all files where:
  - digest: true
  - digested_at: empty

### Step 2. Report Findings
```
📋 Pending digest files: {n}
{file list}
Process in order?
```
- If 0 files found → "No pending files. Add digest: true to source files first."
- If files found → proceed to Step 3

### Step 3. Per-File Discussion
- digest-agent handles each file
- Follow discussion flow:
  1. Summarize
  2. Propose classification
  3. User feedback
  4. Confirm
  5. Execute
  6. Mark complete

### Step 4. Session Complete
```
✅ Digest Session Complete

Processed: {n} files
Updated pages: {list}
Remaining: {n} files (if any)
```

## Notes
- Source files are never modified (frontmatter only)
- Original content always preserved in source/
- Each file requires user confirmation before execution
- Can stop anytime — remaining files stay as digest: true