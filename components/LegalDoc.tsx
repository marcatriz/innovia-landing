import { useTranslations } from 'next-intl';

interface IdentityRow {
  label: string;
  value: string;
}

interface Section {
  heading: string;
  paragraphs: string[];
}

/**
 * Renders one legal document (`legal` or `privacy`) from its message namespace,
 * so both pages stay in the five-locale lockstep with the rest of the copy.
 *
 * The `legal` namespace additionally carries an `identity` block, rendered as a
 * definition list: that is the company identification Romanian and EU law
 * require an online service provider to publish.
 */
export default function LegalDoc({
  namespace,
}: {
  namespace: 'legal' | 'privacy';
}) {
  const t = useTranslations(namespace);
  const sections = t.raw('sections') as Section[];
  const identity =
    namespace === 'legal'
      ? (t.raw('identity') as { heading: string; rows: IdentityRow[] })
      : null;

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="container-x max-w-3xl">
        <p className="eyebrow mb-4">{t('eyebrow')}</p>
        <h1 className="text-h1 text-ink-700">{t('title')}</h1>
        <p className="mt-4 font-mono text-caption text-slate-500">{t('updated')}</p>

        <div className="prose-paper mt-12">
          <p>{t('intro')}</p>

          {identity && (
            <>
              <h2>{identity.heading}</h2>
              <dl className="mb-6 divide-y divide-slate-100 border-y border-slate-100">
                {identity.rows.map((row) => (
                  <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
                    <dt className="text-body-sm font-medium text-slate-500">{row.label}</dt>
                    <dd className="text-body sm:col-span-2">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}

          {sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
