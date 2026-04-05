#!/usr/bin/env node

// PreToolUse hook — context warning
// Reads stdin from Claude Code, warns if context is high

const input = await new Promise((resolve) => {
    let data = '';
    process.stdin.on('data', chunk => data += chunk);
    process.stdin.on('end', () => resolve(data));
  });
  
  try {
    const payload = JSON.parse(input);
    const context = payload?.context_window;
  
    if (!context) process.exit(0);
  
    const used = context.used ?? 0;
    const total = context.total ?? 1;
    const pct = Math.round((used / total) * 100);
  
    if (pct >= 80) {
      console.error(`⛔ CONTEXT ${pct}% — /clear 후 재시작 권장`);
      process.exit(0);
    }
  
    if (pct >= 60) {
      console.error(`⚠️  CONTEXT ${pct}% — /compact 고려`);
      process.exit(0);
    }
  
  } catch {
    // payload 없으면 조용히 통과
    process.exit(0);
  }