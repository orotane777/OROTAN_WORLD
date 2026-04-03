# /plan — Planning Command

## Usage
```
/plan
```
Run before starting any large task.

## When to Use
- Adding new folder/category to vault
- Major structural changes to vault
- Building new automation pipeline
- Any task requiring 30+ minutes of work

## Steps

### Step 1. Interview
- Run interview skill
- Collect requirements via 10+ questions
- Clarify scope, priorities, exceptions

### Step 2. Draft Plan
- Write plan based on interview results
- Save to .claude/plans/{YYYYMMDD}-{task}.md
- Keep it loose — major milestones only

### Step 3. Review
- Check for missing context
- Check for conflicts with existing vault structure
- Check VAULT_MAP.md compatibility

### Step 4. Confirm & Clear Context
```
📋 Plan saved: .claude/plans/{filename}
Please review the plan.
When ready → type "execute" to proceed.
Important: Clear Context before executing.
```

### Step 5. Ready to Execute
- Wait for user confirmation
- Do not execute automatically

## Output Format
```
📋 Plan Ready

📁 Saved: .claude/plans/{filename}
🎯 Goal: {one line summary}
📝 Key Steps:
  1. {step}
  2. {step}
  3. {step}

⚠️  Please review before executing.
Clear Context → then run /execute
```