---
name: sync-vault
description: Full-vault document sync. Detects and reconciles conflicts across
             CLAUDE.md, memory.md, rules, and agents. Recommended after
             architecture changes or once per week. Triggered by requests like
             "/sync", "sync this", or "organize documents".
---

# Sync Vault Skill

## Role
Detect conflicts across all system documents in the vault and keep them in sync.

## Processing Sequence
1. Read all files in the order below
   - CLAUDE.md
   - .claude/memory.md
   - all files in .claude/rules/
   - all files in .claude/agents/
   - _system/VAULT_MAP.md
   - _system/ROUTING_RULES.md

2. Detect conflicts
   - Check whether conflicting content exists for the same topic
   - Check for routing path mismatches
   - Check for duplicated agent roles

3. Report conflict list and request confirmation
⚠️ 충돌 감지됨

[파일A] vs [파일B]: [충돌 내용]
해결 방향: [제안]
계속 진행할까요?


4. Run sync after confirmation
   - Unify based on latest decisions
   - Update outdated content

5. Refresh indexes
   - Update all _INDEX.md files to latest state

6. Check memory.md
   - If over 200 lines → propose cleanup

7. Record in UPDATE_LOG.md

## Completion Report Format
✅ Sync 완료
🔄 싱크된 파일

[파일명]: [변경 내용 한줄]

⚠️ 주의 필요 항목



💡 제안 사항

[제안 내용]