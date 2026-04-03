# Obsidian CLI Skill

Use this skill whenever the user asks to interact with their Obsidian vault via terminal commands — reading notes, searching content, managing tasks, creating/updating pages, checking links, or automating workflows.

## When to Trigger

Trigger this skill when the user:
- Asks to read, create, append, move, or delete a note
- Wants to search the vault
- Needs to manage tasks, tags, properties, or links
- Requests vault analytics or file discovery
- Asks about backlinks, orphans, or broken links
- Wants to work with daily notes

## CLI Syntax

```
obsidian [vault] <command> [subcommand] [key=value ...] [flags]
```

All parameters use `key=value` syntax. Quote values containing spaces: `content="hello world"`.

## Quick Reference

### Files
```bash
obsidian read path="folder/note.md"
obsidian create path="folder/note" content="# Title\n\nBody"
obsidian append path="folder/note.md" content="New content"
obsidian prepend path="folder/note.md" content="Prepended"
obsidian move path="old/note.md" to="new/note.md"
obsidian delete path="folder/note.md"
obsidian files folder="subfolder"
obsidian folders
```

### Search
```bash
obsidian search query="text"
obsidian search query="text" path="folder" limit=10
obsidian search:context query="text"
```

### Daily Notes
```bash
obsidian daily:read
obsidian daily:append content="text"
obsidian daily:path
```

### Properties & Tags
```bash
obsidian properties path="note.md"
obsidian property:set path="note.md" name="status" value="active"
obsidian tags
obsidian tag name="project/alpha"
```

### Tasks
```bash
obsidian tasks
obsidian tasks done
obsidian tasks path="note.md"
obsidian task path="note.md" line=12 toggle
```

### Links
```bash
obsidian backlinks path="note.md"
obsidian links path="note.md"
obsidian orphans
obsidian unresolved
```

### Vault Info
```bash
obsidian vault
obsidian vaults
obsidian files total
obsidian recents
```

## Full Reference

See [command-reference.md](references/command-reference.md) for all 130+ commands.

## Prerequisites

- Obsidian Desktop v1.12.0+ must be running
- CLI must be enabled in Obsidian settings
- On Windows: requires `Obsidian.com` redirector

## Multi-Vault

```bash
obsidian "VaultName" command
```

If vault name causes issues, omit it — CLI targets the most recently active vault.

## Output Formats

`format=json`, `format=csv`, `format=tsv`, `format=md`, `format=paths`, `format=tree`

## Notes for This Vault

- Vault path: `G:\내 드라이브\DriveSyncFiles\OROTAN_WORLD`
- When creating or editing notes, always follow the format rules in `rules/obsidian-format.md`
- After modifying notes via CLI, update the `📌 Core Summary` section
