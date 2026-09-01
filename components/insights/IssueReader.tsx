'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Issue } from '@/content/insights/types';
import IssueCoverSheet from './IssueCoverSheet';
import IssuePageSheet from './IssuePageSheet';

/**
 * Two ways to read the same document.
 *
 * `flow` stacks all five sheets down the page, which is what a reader gets
 * without JavaScript, what search engines index, and what the print rules turn
 * into the PDF. `book` shows one sheet at a time and turns it with a 3D
 * rotation about the left edge, which is the reason the reader exists: five A4
 * sheets read better as a booklet than as a long scroll.
 *
 * Deliberately not the default. Flow is server-rendered, so nobody waits for
 * hydration to read the letter, and switching costs one click that is
 * remembered. Print always wins over both: the rules in `app/globals.css`
 * reset the absolute positioning and the transforms, so the PDF is unaffected
 * by whichever mode the reader happened to be in.
 *
 * Height in book mode is measured rather than assumed. The sheets are
 * absolutely positioned, so the container has no height of its own, and page
 * bodies differ by hundreds of pixels: a fixed A4 ratio would clip the table.
 */
export default function IssueReader({ issue }: { issue: Issue }) {
  const t = useTranslations('insights');
  const total = issue.pages.length + (issue.cover ? 1 : 0);

  const [book, setBook] = useState(false);
  const [current, setCurrent] = useState(0);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const sheetsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (window.localStorage.getItem('innovia-insights-reader') === 'book') setBook(true);
    } catch {
      // Private windows and blocked site data throw on access. Flow is the fallback.
    }
  }, []);

  const setMode = useCallback((next: boolean) => {
    setBook(next);
    setCurrent(0);
    try {
      window.localStorage.setItem('innovia-insights-reader', next ? 'book' : 'flow');
    } catch {
      // Not being able to remember the choice is not a reason to refuse it.
    }
  }, []);

  const go = useCallback(
    (delta: number) => setCurrent((i) => Math.min(total - 1, Math.max(0, i + delta))),
    [total]
  );

  useEffect(() => {
    if (!book) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') go(1);
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [book, go]);

  // Track the visible sheet's own height so the stack does not clip or leave a gap.
  useEffect(() => {
    if (!book) {
      setHeight(undefined);
      return;
    }
    const container = sheetsRef.current;
    if (!container) return;

    const measure = () => {
      const sheet = container.children[current] as HTMLElement | undefined;
      if (sheet) setHeight(sheet.scrollHeight);
    };
    measure();

    const observer = new ResizeObserver(measure);
    Array.from(container.children).forEach((child) => observer.observe(child));
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [book, current]);

  const offset = issue.cover ? 1 : 0;
  const sheets = [
    ...(issue.cover ? [<IssueCoverSheet key="cover" issue={issue} cover={issue.cover} />] : []),
    ...issue.pages.map((page, index) => (
      <IssuePageSheet
        key={page.heading}
        issue={issue}
        page={page}
        index={index}
        sheet={index + 1 + offset}
        sheets={total}
      />
    )),
  ];

  return (
    <>
      <div
        data-print-hide
        className="mx-auto mb-6 flex max-w-[52rem] flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-1 rounded-md border border-slate-200 p-1">
          <button
            type="button"
            onClick={() => setMode(false)}
            aria-pressed={!book}
            className={`rounded px-3 py-1.5 text-body-sm font-medium transition-colors ${
              book ? 'text-slate-500 hover:text-teal-700' : 'bg-navy-900 text-paper'
            }`}
          >
            {t('flowMode')}
          </button>
          <button
            type="button"
            onClick={() => setMode(true)}
            aria-pressed={book}
            className={`rounded px-3 py-1.5 text-body-sm font-medium transition-colors ${
              book ? 'bg-navy-900 text-paper' : 'text-slate-500 hover:text-teal-700'
            }`}
          >
            {t('bookMode')}
          </button>
        </div>

        {book && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={current === 0}
              aria-label={t('prevPage')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-h4 leading-none text-ink-700 transition-colors hover:border-teal-500 hover:text-teal-700 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-ink-700"
            >
              ←
            </button>
            <span className="font-mono text-body-sm tabular-nums text-slate-500">
              {current + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={current === total - 1}
              aria-label={t('nextPage')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-h4 leading-none text-ink-700 transition-colors hover:border-teal-500 hover:text-teal-700 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-ink-700"
            >
              →
            </button>
          </div>
        )}
      </div>

      <div
        ref={sheetsRef}
        className={book ? 'issue-book' : undefined}
        style={book && height ? { height } : undefined}
      >
        {sheets.map((sheet, index) => (
          <div
            key={index}
            className={book ? 'issue-sheet issue-sheet-wrap' : 'issue-sheet-wrap'}
            data-turned={book && index < current ? 'true' : 'false'}
            style={book ? { zIndex: total - index } : undefined}
            aria-hidden={book && index !== current ? true : undefined}
          >
            {sheet}
          </div>
        ))}
      </div>

      {book && (
        <p data-print-hide className="mx-auto mt-4 max-w-[52rem] text-body-sm text-slate-500">
          {t('prevPage')} / {t('nextPage')}: ← →
        </p>
      )}
    </>
  );
}
