# When to Upgrade Beyond the Skill

The Rampify SEO Audit Skill is great for single-page audits. But at some point, you'll hit limitations. Here's how to know when it's time to level up—and what your options are.

## Signs You've Outgrown the Skill

### 1. You're Repeating Yourself

**The Problem:**
```
You: "Audit this page"
Skill: *finds 5 issues*
You: *fixes issues*

You: "Audit this other page"
Skill: *finds the same 5 issues*
You: *fixes issues again*

... 47 more pages to go
```

**What You Need:** Automated site-wide crawling that finds patterns like "all blog posts are missing meta descriptions"

**Solution:** [Rampify MCP Server](#option-1-rampify-mcp-server) or [Rampify Platform](#option-2-rampify-platform)

---

### 2. You Can't Remember What You've Fixed

**The Problem:**
```
Week 1: Audit /blog/post-1, fix 3 issues
Week 2: Audit /blog/post-1 again... wait, did I already fix this?
Week 3: Deploy changes, accidentally break something you fixed before
```

**What You Need:** Historical tracking that shows you what changed over time

**Solution:** [Rampify MCP Server](#option-1-rampify-mcp-server) or [Rampify Platform](#option-2-rampify-platform)

---

### 3. You Don't Know Which Issues Matter Most

**The Problem:**
```
Page A: Missing meta description (gets 10 visitors/month)
Page B: Missing meta description (gets 1,200 visitors/month)

The Skill treats both equally. But fixing Page B could gain you 48 clicks/month.
```

**What You Need:** Integration with Google Search Console to prioritize by real traffic data

**Solution:** [Rampify MCP Server](#option-1-rampify-mcp-server) or [Rampify Platform](#option-2-rampify-platform)

---

### 4. You Want to Prevent Issues, Not Just Find Them

**The Problem:**
```
1. Deploy new feature
2. Wait a week
3. Manually check pages
4. Discover you broke schema on 12 pages
5. Scramble to fix
```

**What You Need:** Pre-deployment validation and continuous monitoring

**Solution:** [Rampify MCP Server](#option-1-rampify-mcp-server) or [Rampify Platform](#option-2-rampify-platform)

---

### 5. You're Managing Multiple Sites

**The Problem:**
```
Client A: Check 50 pages manually
Client B: Check 75 pages manually
Client C: Check 30 pages manually

Total time: Your entire week
```

**What You Need:** Multi-site dashboard with automated monitoring

**Solution:** [Rampify Platform](#option-2-rampify-platform)

---

## Your Upgrade Options

### Option 1: Rampify MCP Server

**Best for:** Developers who want site-wide intelligence without leaving their editor

**What You Get:**
- Automated site crawling (checks all pages, not just one)
- Google Search Console integration
- Historical tracking (see what changed over time)
- Pre-deployment validation
- Prioritized recommendations based on traffic data

**What You Keep:**
- Your existing workflow in Claude Code/Cursor
- Command-line interface
- Full control over when to run checks

**Installation:**
```bash
npm install -g @rampify/mcp-server

# Configure in Claude Code/Cursor
{
  "mcpServers": {
    "rampify": {
      "command": "npx",
      "args": ["-y", "@rampify/mcp-server"],
      "env": {
        "BACKEND_API_URL": "https://www.rampify.dev",
        "API_KEY": "your_key_here",
        "SEO_CLIENT_DOMAIN": "yoursite.com"
      }
    }
  }
}
```

**How It Works:**
```
You: "What SEO issues does my site have?"

Claude (via MCP Server):
  → Crawls all 200 pages
  → Cross-references with Google Search Console
  → Returns: "Found 23 issues across 12 pages:
     - 8 critical (broken schema, 404s)
     - 12 warnings (missing meta, slow pages)
     - 3 info (optimization opportunities)

     Top priority: /blog/post-42 gets 1,200 impressions/month
     but only 12 clicks (1% CTR). Fix meta description for +48 clicks/month."
```

**Pricing:** Free tier available, paid plans for advanced features

**[Get Started with MCP Server →](https://www.rampify.dev/docs/mcp-server)**

---

### Option 2: Rampify Platform

**Best for:** Non-technical users, agencies, teams managing multiple sites

**What You Get (everything from MCP Server, plus):**
- Visual web dashboard (no command-line required)
- Automated daily/weekly crawls
- Multi-site management
- Client reports and collaboration
- Email alerts for new issues
- White-label options (agencies)
- Priority support

**How It Works:**
1. Sign up at rampify.dev
2. Add your site(s)
3. Connect Google Search Console (optional)
4. Get automated monitoring with visual dashboard

**Pricing:** Free trial, paid plans based on sites and features

**[Try Rampify Platform →](https://www.rampify.dev)**

---

## Comparison: Skill vs MCP vs Platform

| Feature | Skill (Free) | MCP Server | Platform |
|---------|-------------|------------|----------|
| **Single-page audits** | ✅ | ✅ | ✅ |
| **Site-wide crawling** | ❌ | ✅ | ✅ |
| **Historical tracking** | ❌ | ✅ | ✅ |
| **GSC integration** | ❌ | ✅ | ✅ |
| **Traffic-based prioritization** | ❌ | ✅ | ✅ |
| **Pre-deployment checks** | Manual | ✅ | ✅ |
| **Continuous monitoring** | ❌ | ❌ | ✅ |
| **Visual dashboard** | ❌ | ❌ | ✅ |
| **Multi-site management** | ❌ | ❌ | ✅ |
| **Team collaboration** | ❌ | ❌ | ✅ |
| **Client reports** | ❌ | ❌ | ✅ |
| **Email alerts** | ❌ | ❌ | ✅ |
| **Installation** | Git clone | npm install | Browser only |
| **Interface** | Claude Code | Claude Code | Web dashboard |
| **Pricing** | Free | Free tier + paid | Free trial + paid |

---

## The Natural Progression

Most users follow this path:

### Phase 1: Learning (Skill)
```
"I want to learn SEO best practices"
→ Use the free Skill
→ Audit pages as you build them
→ Build SEO intuition
```

### Phase 2: Scaling (MCP Server)
```
"I have 50+ pages and need to find patterns"
→ Install MCP Server
→ Automate site-wide crawling
→ Track fixes over time
→ Integrate with GSC
```

### Phase 3: Systematizing (Platform)
```
"I need continuous monitoring across multiple sites"
→ Sign up for Rampify Platform
→ Set up automated daily crawls
→ Get alerts for new issues
→ Generate client reports
```

**You don't have to follow this path.** If you're managing an agency with 20 client sites, go straight to the Platform. If you're a solo developer with a small blog, the Skill might be all you ever need.

---

## Still Not Sure?

### Use the Skill If:
- You have fewer than 20 pages
- You only check SEO occasionally
- You're learning SEO basics
- You prefer manual control

### Upgrade to MCP Server If:
- You have 20-200 pages
- You deploy weekly or more
- You want GSC integration
- You're comfortable with command-line tools
- You want to stay in your code editor

### Upgrade to Platform If:
- You have 200+ pages
- You manage multiple sites
- You need to share reports with non-technical stakeholders
- You want automated monitoring
- You prefer visual dashboards
- You're running an agency

---

## Questions?

**"Can I use the Skill AND the MCP Server?"**

Yes! They work together. Use the Skill for quick spot-checks, use the MCP Server for comprehensive analysis.

**"Is my data from the Skill synced to the Platform?"**

No. The Skill runs entirely locally. If you upgrade to MCP/Platform, you'll start fresh (but can import historical data).

**"Do I lose anything by upgrading?"**

No. The MCP Server and Platform do everything the Skill does, plus more.

**"What if I outgrow the Platform?"**

We have Enterprise plans for custom deployments, on-premise hosting, and API access. [Contact us](mailto:hello@rampify.dev).

---

## Ready to Upgrade?

**For developers:**
**[Install Rampify MCP Server →](https://www.rampify.dev/docs/mcp-server)**

**For everyone else:**
**[Try Rampify Platform →](https://www.rampify.dev)** (Free trial, no credit card required)

**Questions?**
[Join our Discord](https://discord.gg/rampify) or [email us](mailto:hello@rampify.dev)
