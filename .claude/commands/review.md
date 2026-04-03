# /review — Vault Health Check Command

## Usage
```
/review
```

## When to Use
- Weekly maintenance
- When vault feels disorganized
- Before running /sync
- After large ingest sessions

## Steps

### Step 1. Check memory.md
- Count lines in .claude/memory.md
- If over 200 lines → list oldest 20 entries
- Suggest which to move to _archive/

### Step 2. Check Broken Wikilinks
- Scan all .md files for [[wikilinks]]
- Check if target file exists
- List all broken links with file location

### Step 3. Check Missing Sources
- Find content blocks without [YYYY-MM-DD][CODE:source] tag
- List file path + line number

### Step 4. Check INDEX Files
- Verify all pages appear in their folder _INDEX.md
- List missing entries

### Step 5. Check Core Summary Sections
- Find pages missing 📌 Core Summary section
- List file paths

### Step 6. Check SOURCE_REGISTRY
- Find sources referenced in pages
- but not registered in _system/SOURCE_REGISTRY.md
- List unregistered sources

## Output Format
```
🔍 Vault Health Report

📊 Summary
- Total pages: {n}
- Pages with issues: {n}
- Broken wikilinks: {n}
- Missing sources: {n}

⚠️  Issues Found

1. memory.md
   - Current lines: {n}
   - Action needed: {yes/no}

2. Broken Wikilinks
   - {file}: [[{link}]] → target not found

3. Missing Source Tags
   - {file} line {n}: {content preview}

4. INDEX Missing Entries
   - {folder}/_INDEX.md: {page} not listed

5. Missing 📌 Core Summary
   - {file}

6. Unregistered Sources
   - {source} found in {file}

💡 Recommended Actions
1. {action}
2. {action}
```
