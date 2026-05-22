'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, LOCALES, type AppLocale } from '@/i18n/routing';
import { useTransition } from 'react';

const LOCALE_LABELS: Record<AppLocale, { short: string; aria: string }> = {
  en: { short: 'EN', aria: 'English' },
  ro: { short: 'RO', aria: 'Română' },
  de: { short: 'DE', aria: 'Deutsch' },
  fr: { short: 'FR', aria: 'Français' },
  it: { short: 'IT', aria: 'Italiano' },
};

export default function LanguageToggle() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: AppLocale) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-paper p-0.5 font-display text-caption">
      {LOCALES.map((code) => {
        const meta = LOCALE_LABELS[code];
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            disabled={isPending}
            aria-label={meta.aria}
            className={`px-2 py-1 rounded ${
              active ? 'bg-navy-800 text-paper' : 'text-ink-700 hover:bg-slate-100'
            }`}
          >
            {meta.short}
          </button>
        );
      })}
    </div>
  );
}
