# Source Management Rules

## Source Type Codes
| Code | Description | Example |
|------|------|------|
| YT | YouTube | 테디노트, 삼프로TV |
| RPT | Report/Analyst | KB증권, 미래에셋 |
| WEB | Web/Blog | 네이버 블로그, 브런치 |
| BOOK | Book | 책 제목 |
| MEMO | Personal note/thought | 자체 |
| MSG | Messenger/SNS | 카카오톡, 텔레그램 |
| LEC | Lecture | 패스트캠퍼스, 인프런 |

---

## Processing Sequence

### 1. Duplicate Check
Before processing new input, always check `_system/SOURCE_REGISTRY.md`
- Same source + same date → already processed → skip
- Same source + different date → process as new content

### 2. Source Tag Formatting
The format below is required for all added content:
```
[YYYY-MM-DD][코드:출처명]
```

**Example**
```
[2025-04-02][RPT:KB증권] 내용
[2025-04-02][YT:테디노트] 내용
[2025-04-02][MEMO:자체] 내용
```

### 3. Register in SOURCE_REGISTRY
After processing, add to `_system/SOURCE_REGISTRY.md`:
```
| {자동ID} | {날짜} | {코드} | {출처명} | {업데이트된 페이지 목록} |
```

### 4. Record in UPDATE_LOG
Add to `_system/UPDATE_LOG.md`:
```
| {날짜} | {코드:출처명} | {업데이트된 페이지} | {추가 내용 한줄 요약} |
```

---

## Source Confidence Marking
For uncertain content, append tags after the entry:
```
[2025-04-02][MEMO:자체] 내용 #확인필요
[2025-04-02][WEB:블로그] 내용 #출처불명확
```