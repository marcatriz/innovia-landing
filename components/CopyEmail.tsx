'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

/**
 * Visible email address with a copy button, shown next to the `mailto:` CTA in
 * the contact section. A bare `mailto:` link is silent on any device with no
 * registered mail handler: Chrome swallows the click, shows no error, and the
 * reader concludes the button is broken. Corporate visitors on webmail hit this
 * routinely. Printing the address keeps the section usable for them.
 */
export default function CopyEmail({ address }: { address: string }) {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch {
      // The Clipboard API needs a secure context and can still be refused.
      // The address stays selectable next to the button, so a reader who
      // lands here can always copy it by hand.
    }
  };

  return (
    <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-body-sm text-slate-500">
      <span>{t('emailDirect')}</span>
      <span className="select-all font-mono text-ink-700">{address}</span>
      <button
        type="button"
        onClick={copy}
        aria-label={t('copyEmail')}
        className="rounded border border-slate-200 px-2 py-1 font-display text-caption uppercase tracking-wider text-ink-700 transition-colors hover:border-teal-500 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
      >
        {copied ? t('copied') : t('copy')}
      </button>
    </p>
  );
}
