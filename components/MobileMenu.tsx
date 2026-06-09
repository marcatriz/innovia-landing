'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

/**
 * Hamburger menu for widths below the `xl` breakpoint. The header nav is
 * `hidden xl:flex`, so on mobile, tablet, and narrower desktop windows there
 * was no way to reach the sections and pages. This opens a full-width panel
 * with the same links as the desktop nav. Hidden at `xl` and up, where the
 * inline nav takes over.
 */
const ITEMS = [
  { href: '/#services', key: 'services' },
  { href: '/#focus', key: 'modules' },
  { href: '/fit-sprint', key: 'fitSprint' },
  { href: '/#partnership', key: 'partnership' },
  { href: '/diagnostic', key: 'diagnostic' },
  { href: '/#contact', key: 'contact' },
] as const;

export default function MobileMenu() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={t('menu')}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-tint hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 top-24 z-40 bg-ink-700/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <nav className="fixed inset-x-0 top-24 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto border-b border-slate-100 bg-paper shadow-lg">
            <ul className="container-x flex flex-col py-3">
              {ITEMS.map((it) => (
                <li key={it.key} className="border-b border-slate-100 last:border-0">
                  <Link
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-body font-medium text-ink-700 hover:text-teal-700"
                  >
                    {t(it.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
