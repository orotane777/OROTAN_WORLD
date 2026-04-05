# Obsidian Note Formatting Rules

## File Naming
- No legal entity suffixes in filenames: (주), ㈜, (주식회사) prohibited
- Use brand/company name only: SK㈜ → SK.md

## Page Structure
페이지명

한줄요약:
최근업데이트: YYYY-MM-DD
관련페이지: [[링크1]], [[링크2]]


📌 핵심 요약
(200자 이내. 항상 최신 상태 유지.)

[본문 섹션들]

📚 출처

## Footnote System
- Key format: [^YY-MM-DD]
- Body reference: 내용 [^26-03-27]
- Source entry: [^26-03-27]: [[파일#섹션]] - 한줄요약
- Same date, multiple sources: [^26-03-27], [^26-03-27_2], [^26-03-27_3]
- Same source, multiple sections: comma-separated in one entry

## Content Rules
- Read 📌 핵심 요약 first before any update
- Add to relevant section only — never rewrite entire page
- Add [^YY-MM-DD] to every new sentence/paragraph
- Update 📌 핵심 요약 after adding content
- Update `updated` date in frontmatter
- Skip duplicate content

## Obsidian Syntax
- Internal link: [[page name]]
- Tag: #tagname
- Callout: > [!note], > [!warning]