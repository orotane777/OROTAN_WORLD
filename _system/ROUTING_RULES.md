# Routing Rules

## Priority Order
When processing input, follow this order:
1. Read _system/VAULT_MAP.md
2. Check _system/SOURCE_REGISTRY.md for duplicates
3. Identify categories (invest/coding/life)
4. Identify target pages
5. Delegate to specialist agents

## Conflict Resolution
- Same content in multiple categories → update all
- Duplicate source + same date → skip
- Duplicate source + different date → process as new

## New Page Creation
- No existing file → create with template
- Existing file → add to relevant section only

## Language Rules
- System documents: English
- Knowledge pages: Korean
- Source tags: [YYYY-MM-DD][CODE:source]
- Footnote keys: [^YY-MM-DD] (date-based, not sequential numbers); same-date conflicts use [^YY-MM-DD_2], [^YY-MM-DD_3]
- Footnote source links: [[filename#section]] format (not bare [[filename]])
- Wikilinks: [[Korean page name]]