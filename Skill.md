---
name: seo-page-auditor
description: Performs comprehensive SEO audits on HTML pages, checking meta tags, schema markup, headings, images, links, and content quality. Use when user asks to audit, check, or analyze SEO.
license: MIT License - See LICENSE file
---

# SEO Page Auditor

Analyze HTML and provide SEO audit reports.

## What to Check

**Meta Tags**: Title (50-60 chars), description (150-160 chars), OG tags, canonical, robots

**Schema.org**: JSON-LD presence, required properties (Article: headline/datePublished/author, Product: name/offers, etc.), valid syntax

**Headings**: One H1, proper hierarchy (no skipped levels), descriptive text

**Images**: Alt text on all images, descriptive (not generic), reasonable file sizes

**Links**: Internal/external ratio, descriptive anchor text, no broken indicators (href="#")

**Content**: 300+ words for blog posts, no placeholder text, readability

**Mobile**: Viewport meta tag, responsive indicators

**Performance**: Resource hints (preconnect, dns-prefetch), async/defer scripts

## Severity Levels

**Critical (❌)**: Missing title/description, no H1, multiple H1s, invalid schema syntax

**Warning (⚠️)**: Title/description wrong length, missing alt text, heading hierarchy issues, no schema

**Info (ℹ️)**: Optimization opportunities, best practices

## Output Format

```
SEO Audit Report: [page title]

Critical Issues (X):
  ❌ [specific issue with location]

Warnings (X):
  ⚠️  [specific issue]

Info (X):
  ℹ️  [observation]

Recommendations:
  1. [Fix with code example]
  2. [Fix with code example]

Priority Order:
  1. [Issue] - [Why it matters]
```

## Examples

### Bad HTML
```html
<head><title>Blog</title></head>
<body><h2>Post</h2><img src="x.jpg"></body>
```

**Output**:
```
Critical Issues (2):
  ❌ Title too short (4 chars, need 50-60)
  ❌ No H1 found (H2 appears first)

Warnings (3):
  ⚠️  Missing meta description
  ⚠️  Image missing alt text
  ⚠️  No schema markup

Recommendations:
  1. Expand title: <title>Web Development Blog | Tutorials & Tips</title>
  2. Add H1: <h1>Latest Posts</h1>
  3. Add alt: <img src="x.jpg" alt="Code editor screenshot">
```

## Decision Tree

```
User provides HTML?
├─ Yes → Parse and audit all sections
│   ├─ Critical issues? → List first with ❌
│   ├─ Warnings? → List with ⚠️
│   └─ Suggestions? → List with ℹ️
└─ No → Ask for HTML or URL to analyze
```

## DO ✅

- Provide specific code examples for every fix
- Explain impact ("improves CTR by 20-30%")
- Prioritize by SEO impact, not alphabetically
- Reference exact line/element when possible
- Include both problem AND solution

## DON'T ❌

- Generic advice without code examples
- Say "missing tags" without specifying which ones
- Ignore context (blog vs product page needs differ)
- List issues without priority order
- Assume user knows how to fix issues

## Notes

This audits HTML only. Cannot check: live page speed, actual Google indexing, backlinks, server configs (robots.txt/sitemaps).

For site-wide monitoring → [Rampify Platform](https://www.rampify.dev)
