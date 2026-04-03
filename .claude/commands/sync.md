# /sync — Vault Sync Command

## Usage
```
/sync
```

## When to Use
- After any architecture change
- After adding new rules or agents
- Weekly maintenance
- When outputs feel inconsistent

## Steps

### Step 1. Read All System Files
Read in this order:
- CLAUDE.md
- .claude/memory.md
- .claude/rules/ (all files)
- .claude/agents/ (all files)
- _system/VAULT_MAP.md

### Step 2. Detect Conflicts
Check for:
- Contradicting instructions across files
- Routing path mismatches
- Agent role overlaps
- Outdated folder paths

Report before proceeding:
```
⚠️ Conflicts Detected
- [FileA] vs [FileB]: {conflict description}
- Suggested fix: {suggestion}
Proceed? (yes/no)
```

### Step 3. Execute Sync
After confirmation:
- Unify based on most recent decision
- Update outdated content
- Fix broken paths

### Step 4. Update Indexes
- Refresh all _INDEX.md files
- Ensure all pages are listed

### Step 5. Check memory.md
- If over 200 lines → suggest cleanup
- Move old entries to _archive/

### Step 6. Update Logs
- Record in _system/UPDATE_LOG.md

## Output Format
```
✅ Sync Complete

🔄 Synced Files
- {filename}: {change summary}

⚠️  Needs Attention
- {item}: {reason}

💡 Suggestions
- {suggestion}
```