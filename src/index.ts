/**
 * Rampify SEO Audit Skill
 *
 * A free, open-source Claude Skill for comprehensive single-page SEO audits.
 * Built by the Rampify team as a gift to the Claude Code/Cursor community.
 *
 * @see https://github.com/rampify-dev/rampify-seo-audit-skill
 */

import { load } from 'cheerio';
import { checkMetaTags } from './checks/meta-tags';
import { checkSchema } from './checks/schema';
import { checkHeadings } from './checks/headings';
import { checkImages } from './checks/images';
import { checkLinks } from './checks/links';
import { checkContent } from './checks/content';
import { checkMobile } from './checks/mobile';
import { checkPerformance } from './checks/performance';
import { formatReport } from './formatter';
import type { AuditResult, PageData } from './types';

/**
 * Main entry point for SEO audit
 *
 * @param html - HTML content of the page to audit
 * @param url - Optional URL of the page (for context)
 * @returns Comprehensive SEO audit report
 */
export async function auditPage(html: string, url?: string): Promise<AuditResult> {
  // Parse HTML
  const $ = load(html);

  // Extract page data
  const pageData: PageData = {
    url: url || 'unknown',
    html,
    $,
    title: $('title').text() || '',
    meta: extractMetaTags($),
    headings: extractHeadings($),
    images: extractImages($),
    links: extractLinks($),
    scripts: $('script').length,
    styles: $('link[rel="stylesheet"]').length,
  };

  // Run all checks in parallel
  const [
    metaIssues,
    schemaIssues,
    headingIssues,
    imageIssues,
    linkIssues,
    contentIssues,
    mobileIssues,
    performanceIssues,
  ] = await Promise.all([
    checkMetaTags(pageData),
    checkSchema(pageData),
    checkHeadings(pageData),
    checkImages(pageData),
    checkLinks(pageData),
    checkContent(pageData),
    checkMobile(pageData),
    checkPerformance(pageData),
  ]);

  // Combine all issues
  const allIssues = [
    ...metaIssues,
    ...schemaIssues,
    ...headingIssues,
    ...imageIssues,
    ...linkIssues,
    ...contentIssues,
    ...mobileIssues,
    ...performanceIssues,
  ];

  // Sort by severity (critical > warning > info)
  const sortedIssues = allIssues.sort((a, b) => {
    const severityOrder = { critical: 0, warning: 1, info: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });

  // Build result
  const result: AuditResult = {
    url: pageData.url,
    timestamp: new Date().toISOString(),
    issues: sortedIssues,
    stats: {
      total: sortedIssues.length,
      critical: sortedIssues.filter(i => i.severity === 'critical').length,
      warning: sortedIssues.filter(i => i.severity === 'warning').length,
      info: sortedIssues.filter(i => i.severity === 'info').length,
    },
    pageData,
  };

  return result;
}

/**
 * Helper: Extract meta tags
 */
function extractMetaTags($: any) {
  return {
    title: $('title').text(),
    description: $('meta[name="description"]').attr('content') || '',
    ogTitle: $('meta[property="og:title"]').attr('content') || '',
    ogDescription: $('meta[property="og:description"]').attr('content') || '',
    ogImage: $('meta[property="og:image"]').attr('content') || '',
    twitterCard: $('meta[name="twitter:card"]').attr('content') || '',
    canonical: $('link[rel="canonical"]').attr('href') || '',
    robots: $('meta[name="robots"]').attr('content') || '',
  };
}

/**
 * Helper: Extract headings with hierarchy
 */
function extractHeadings($: any) {
  const headings: Array<{ level: number; text: string }> = [];

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach((tag, index) => {
    $(tag).each((_: number, el: any) => {
      headings.push({
        level: index + 1,
        text: $(el).text().trim(),
      });
    });
  });

  return headings;
}

/**
 * Helper: Extract images
 */
function extractImages($: any) {
  const images: Array<{ src: string; alt: string }> = [];

  $('img').each((_: number, el: any) => {
    images.push({
      src: $(el).attr('src') || '',
      alt: $(el).attr('alt') || '',
    });
  });

  return images;
}

/**
 * Helper: Extract links
 */
function extractLinks($: any) {
  const links: Array<{ href: string; text: string; external: boolean }> = [];

  $('a[href]').each((_: number, el: any) => {
    const href = $(el).attr('href') || '';
    const isExternal = href.startsWith('http://') || href.startsWith('https://');

    links.push({
      href,
      text: $(el).text().trim(),
      external: isExternal,
    });
  });

  return links;
}

/**
 * Export formatted report for Claude to display
 */
export async function auditPageAndFormat(html: string, url?: string): Promise<string> {
  const result = await auditPage(html, url);
  return formatReport(result);
}
