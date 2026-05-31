'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

/**
 * Floating "back to top" button. The home page is a long single-page scroll
 * and the header nav is hidden below the `xl` breakpoint, so on mobile and
 * tablet there is no quick way back up through the sections. This appears
 * once the reader has scrolled past the first viewport and returns them to
 * the top (where the logo and language toggle live) from any section.
 *
 * Mounted site-wide in the locale layout, so it covers every section of every
 * page, not just the whitepapers.
 */
export default function BackToTop() {
  const t = useTranslations('nav');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const label = t('backToTop');

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-paper shadow-lg ring-1 ring-black/5 transition-all hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <span aria-hidden className="text-xl leading-none">
        ↑
      </span>
    </button>
  );
}
