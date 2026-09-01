import type { Issue } from './types';
import { issue202609 } from './2026-09';
import { issue202609Hemingway } from './2026-09-hemingway';

/**
 * Every published issue, newest first. This array is the single registry the
 * index page, the issue route, the sitemap and the PDF build all read, so
 * publishing an issue is one import plus one entry here.
 */
export const ISSUES: Issue[] = [issue202609, issue202609Hemingway];

export function getIssue(slug: string): Issue | undefined {
  return ISSUES.find((issue) => issue.slug === slug);
}

/** The newest published issue. Unlisted variants are never the latest. */
export const LATEST_ISSUE: Issue = ISSUES.filter((issue) => !issue.unlisted)[0];
