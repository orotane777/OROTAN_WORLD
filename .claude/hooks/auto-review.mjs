#!/usr/bin/env node

// Stop hook — suggest /review after digest session

const input = await new Promise((resolve) => {
    let data = '';
    process.stdin.on('data', chunk => data += chunk);
    process.stdin.on('end', () => resolve(data));
  });
  
  try {
    const payload = JSON.parse(input);
    const transcript = payload?.transcript ?? [];
  
    // 대화에서 /digest 또는 digest-agent 실행 여부 확인
    const hasDigest = transcript.some(msg =>
      typeof msg?.content === 'string' &&
      (msg.content.includes('/digest') || msg.content.includes('digest-agent'))
    );
  
    if (hasDigest) {
      console.log('💡 Digest 세션 완료. /review 로 볼트 상태 확인을 권장합니다.');
    }
  
  } catch {
    process.exit(0);
  }