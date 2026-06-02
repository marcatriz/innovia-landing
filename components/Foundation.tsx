import Image from 'next/image';
import { useTranslations } from 'next-intl';

const LOGOS = [
  ['.NET 9', 'dotnet'],
  ['React', 'react'],
  ['TypeScript', 'typescript'],
  ['SQL Server', 'sqlserver'],
  ['Python', 'python'],
  ['FastAPI', 'fastapi'],
  ['Docker', 'docker'],
  ['OpenTelemetry', 'opentelemetry'],
  ['Anthropic · Claude', 'anthropic'],
  ['MCP', 'mcp'],
  ['Cloudflare', 'cloudflare'],
] as const;

const CAPS = ['aiNative', 'auditable', 'multiTenant', 'observable', 'cloudAgnostic'] as const;

export default function Foundation() {
  const t = useTranslations('foundation');

  return (
    <section id="foundation" className="bg-tint py-24">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">{t('eyebrow')}</p>
            <h2 className="text-h2 text-ink-700">{t('title')}</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-body-lg text-slate-500">{t('body')}</p>
          </div>
        </div>

        <ul className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-8">
          {LOGOS.map(([name, slug]) => (
            <li key={slug} className="flex w-24 flex-col items-center gap-2">
              <div className="relative h-11 w-16">
                <Image src={`/tech/${slug}.png`} alt={name} fill sizes="64px" className="object-contain" />
              </div>
              <span className="text-caption text-slate-500">{name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CAPS.map((key) => (
            <article key={key} className="rounded-xl border border-slate-100 bg-paper p-6">
              <h3 className="font-display text-lg font-semibold leading-snug text-ink-700">
                {t(`caps.${key}.title`)}
              </h3>
              <p className="mt-2 text-body text-slate-500">{t(`caps.${key}.body`)}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-caption uppercase tracking-wider text-slate-500">
          Fit for Digital. <span className="text-ink-700">Fit for AI.</span>
        </p>
      </div>
    </section>
  );
}
