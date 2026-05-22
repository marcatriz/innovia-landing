'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: 'en' | 'ro') {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-paper p-0.5 font-display text-caption">
      <button
        type="button"
        onClick={() => switchTo('en')}
        disabled={isPending}
        className={`px-2 py-1 rounded ${
          locale === 'en' ? 'bg-navy-800 text-paper' : 'text-ink-700 hover:bg-slate-100'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchTo('ro')}
        disabled={isPending}
        className={`px-2 py-1 rounded ${
          locale === 'ro' ? 'bg-navy-800 text-paper' : 'text-ink-700 hover:bg-slate-100'
        }`}
        aria-label="Romana"
      >
        RO
      </button>
    </div>
  );
}
