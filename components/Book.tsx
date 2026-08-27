import Image from 'next/image';
import { useTranslations } from 'next-intl';

/**
 * The book our founder published in August 2026. It sits on this site as
 * authorship and as evidence of method, not as a change of positioning: the
 * only place the book's industry appears is inside its own subtitle. See the
 * note in CLAUDE.md about the industry-neutral rule and this exception.
 *
 * The Amazon link is the only outbound link on the homepage. It carries
 * rel="noopener" and opens in a new tab so the visitor keeps the site.
 */
const AMAZON_URL = 'https://www.amazon.com/dp/B0HGNP3ZGX';

export default function Book() {
  const t = useTranslations('book');

  return (
    <section id="book" className="border-t border-slate-100 bg-paper py-24">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 xl:col-span-3">
            <Image
              src="/price-of-knowing.jpg"
              alt={t('coverAlt')}
              width={600}
              height={960}
              sizes="(min-width: 1024px) 22rem, 60vw"
              className="mx-auto w-full max-w-[18rem] rounded-lg shadow-xl ring-1 ring-slate-200 lg:mx-0"
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow mb-4 text-teal-700">{t('eyebrow')}</p>
            <h2 className="text-h2 text-ink-900">{t('title')}</h2>
            <p className="mt-2 text-body-lg text-teal-700">{t('subtitle')}</p>

            <p className="mt-8 text-body-lg text-ink-700">{t('body')}</p>
            <p className="mt-4 text-body text-ink-700">{t('method')}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-lg bg-navy-800 px-6 py-3 text-body font-medium text-paper transition-colors hover:bg-navy-900"
              >
                {t('cta')}
                <span aria-hidden>&rarr;</span>
              </a>
              <p className="text-caption text-ink-500">{t('formats')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
