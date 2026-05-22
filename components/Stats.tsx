import { useTranslations } from 'next-intl';

const ITEMS = ['verticals', 'ready', 'codev', 'operator'] as const;

export default function Stats() {
  const t = useTranslations('stats');

  return (
    <section className="border-b border-slate-100 bg-paper">
      <div className="container-x py-10">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((key) => (
            <li key={key} className="flex flex-col gap-1">
              <span className="font-display text-h2 font-semibold text-teal-700">
                {t(`items.${key}.value`)}
              </span>
              <span className="text-caption uppercase tracking-wider text-slate-500">
                {t(`items.${key}.label`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
