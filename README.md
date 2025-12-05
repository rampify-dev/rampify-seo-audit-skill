# Rampify SEO Audit Skill

A free, open-source Claude Skill for comprehensive single-page SEO audits. Built by the [Rampify](https://www.rampify.dev) team as a gift to the Claude Code/Cursor community.

## What It Does

Performs instant SEO audits on individual pages, checking:

- **Meta Tags** - Title, description, Open Graph, Twitter Cards
- **Schema.org** - Structured data validation (JSON-LD, Microdata, RDFa)
- **Heading Structure** - H1-H6 hierarchy and optimization
- **Images** - Alt text, file sizes, lazy loading
- **Links** - Internal/external link analysis
- **Content Quality** - Word count, readability, keyword density
- **Mobile** - Responsiveness indicators
- **Performance** - Page speed signals

## Installation

### Prerequisites

- [Claude Code](https://claude.ai/code) or [Cursor](https://cursor.sh) installed
- Node.js 18+ (for local development only)

### Quick Install

```bash
# Clone the repository
git clone https://github.com/rampify-dev/rampify-seo-audit-skill.git
cd rampify-seo-audit-skill

# Install dependencies (if using TypeScript version)
npm install
```

### Add to Claude Code

1. Open Claude Code settings
2. Navigate to Skills section
3. Click "Add Skill from Directory"
4. Select the `rampify-seo-audit-skill` folder

### Add to Cursor

1. Open Cursor settings
2. Go to Skills configuration
3. Click "Import Skill"
4. Choose the cloned directory

## Usage

Once installed, the Skill activates automatically when you work with web pages.

### Basic Audit

Open any HTML, JSX, MDX, or similar file and ask:

```
"Audit this page for SEO"
"Check SEO issues on this page"
"What SEO problems does this have?"
```

### Specific Checks

Request targeted analysis:

```
"Check the meta tags"
"Validate the schema markup"
"Analyze heading structure"
"Check image optimization"
```

### Example Output

```
SEO Audit Report: /blog/how-to-use-claude-for-seo

Critical Issues (2):
  ❌ Missing meta description
  ❌ Invalid Article schema: missing "datePublished" property

Warnings (4):
  ⚠️  Title too short (42 chars, recommend 50-60)
  ⚠️  No alt text on 3 images
  ⚠️  H2 heading appears before H1
  ⚠️  No canonical tag specified

Info (2):
  ℹ️  Word count: 847 (good for blog post)
  ℹ️  Internal links: 5, External links: 2

Recommendations:
  1. Add meta description (150-160 chars, include target keyword)
  2. Fix Article schema:
     Add: "datePublished": "2025-12-05T10:30:00Z"
  3. Extend title to 50-60 chars: "How to Use Claude for SEO Audits | Developer Guide"
  4. Add alt text to images: /images/claude-seo-1.png, /images/claude-seo-2.png
  5. Move H1 above first H2
  6. Add canonical: <link rel="canonical" href="https://yoursite.com/blog/how-to-use-claude-for-seo">

Priority Order:
  1. Fix schema (impacts rich results)
  2. Add meta description (impacts CTR)
  3. Fix title length (impacts CTR)
  4. Add canonical tag (prevents duplicate content)
  5. Fix heading structure (minor UX/SEO impact)
```

## What This Skill Does NOT Do

This Skill is designed for **single-page audits**. It does not:

- Track issues across multiple pages
- Monitor for regressions over time
- Integrate with Google Search Console
- Prioritize by traffic impact
- Remember previous audits
- Run automatically on deployment
- Alert when new issues appear

**When you outgrow this Skill**, check out [UPGRADE.md](UPGRADE.md) for guidance on systematic SEO intelligence.

## Customization

### Adjust Severity Levels

Edit `config/rules.json` to change what counts as critical vs warning:

```jsonc
{
  // Severity levels: critical, warning, info
  "meta_description_missing": "critical",  // Change to "warning" if desired
  "title_too_short": "warning",
  "alt_text_missing": "info"
}
```

### Add Custom Checks

Create new rules in `src/checks/`:

```typescript
// src/checks/custom-check.ts
export function checkCustomRule(page: Page): Issue[] {
  const issues: Issue[] = [];

  // Your custom logic here

  return issues;
}
```

### Modify Output Format

Update `src/formatter.ts` to change how results are displayed.

## Examples

See `examples/` directory for sample pages and their audit results:

- `examples/blog-post/` - Blog post with common issues
- `examples/product-page/` - E-commerce product page
- `examples/landing-page/` - Marketing landing page
- `examples/documentation/` - Technical documentation

## Contributing

Contributions welcome! This is a community resource.

### Adding New Checks

1. Fork the repository
2. Create a new check in `src/checks/`
3. Add tests in `src/checks/__tests__/`
4. Update `README.md` with the new check
5. Submit a pull request

### Reporting Issues

Found a bug or false positive? [Open an issue](https://github.com/rampify-dev/rampify-seo-audit-skill/issues)

## Architecture

```
rampify-seo-audit-skill/
├── src/
│   ├── index.ts              # Main Skill entry point
│   ├── checks/               # Individual SEO checks
│   │   ├── meta-tags.ts
│   │   ├── schema.ts
│   │   ├── headings.ts
│   │   ├── images.ts
│   │   ├── links.ts
│   │   └── content.ts
│   ├── utils/
│   │   ├── parser.ts         # HTML/JSX parsing
│   │   ├── validator.ts      # Schema validation
│   │   └── scorer.ts         # Issue severity scoring
│   └── formatter.ts          # Output formatting
├── config/
│   └── rules.json            # Configurable rules
├── examples/
│   ├── blog-post/
│   ├── product-page/
│   └── landing-page/
├── __tests__/
│   └── checks/
├── skill.json                # Claude Skill definition
├── package.json
├── tsconfig.json
├── README.md
├── UPGRADE.md
├── CONTRIBUTING.md
└── LICENSE
```

## When to Upgrade

**This Skill is perfect for:**
- Learning SEO best practices
- Auditing pages during development
- Spot-checking specific pages
- Pre-publish validation

**You'll need more when:**
- Managing 20+ pages
- Deploying changes frequently
- Working with multiple sites
- Needing historical tracking
- Wanting automated monitoring

**See [UPGRADE.md](UPGRADE.md) for your options.**

## License

MIT License - Use it however you want!

## Credits

Built with ❤️ by the [Rampify](https://www.rampify.dev) team.

**Want systematic SEO intelligence?**
- [Rampify MCP Server](https://www.rampify.dev/docs/mcp-server) - Site-wide audits in your editor
- [Rampify Platform](https://www.rampify.dev) - Full monitoring with dashboard

## Support

- **Issues**: [GitHub Issues](https://github.com/rampify-dev/rampify-seo-audit-skill/issues)
- **Discussions**: [GitHub Discussions](https://github.com/rampify-dev/rampify-seo-audit-skill/discussions)
- **Documentation**: [Rampify Docs](https://www.rampify.dev/docs)
- **Community**: [Join our Discord](https://discord.gg/rampify)
