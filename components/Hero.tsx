import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-tint">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 12% 30%, rgba(7,154,156,0.18), transparent 45%), radial-gradient(circle at 85% 20%, rgba(0,92,254,0.10), transparent 50%)',
        }}
      />
      <div className="container-x relative grid items-center gap-16 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">{t('eyebrow')}</p>
          <h1 className="text-h1 lg:text-display mb-6 text-ink-700">
            {t('title')}
          </h1>
          <p className="mb-8 flex items-center text-h4 text-teal-700">
            <span className="accent-bar" />
            {t('tagline')}
          </p>
          <p className="mb-10 max-w-2xl text-body-lg text-slate-500">
            {t('body')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/#contact" className="btn-primary">
              {t('cta')}
              <span aria-hidden>→</span>
            </a>
            <a href="/#modules" className="btn-secondary">
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#079A9C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#005CFE" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <g stroke="#CED4DA" strokeWidth="1" fill="none">
          <path d="M20 200 L120 200 L160 160 L240 160 L280 200 L380 200" />
          <path d="M20 240 L100 240 L140 280 L260 280 L300 240 L380 240" />
          <path d="M60 100 L140 100 L180 140 L220 140 L260 100 L340 100" />
        </g>
        <g fill="#079A9C">
          <circle cx="120" cy="200" r="4" />
          <circle cx="240" cy="160" r="4" />
          <circle cx="140" cy="280" r="4" />
          <circle cx="260" cy="280" r="4" />
        </g>
        <g fill="#005CFE">
          <circle cx="180" cy="140" r="4" />
          <circle cx="280" cy="200" r="4" />
        </g>
        <path
          d="M180 320 L220 280 L260 300 L300 240 L340 260"
          stroke="url(#g1)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M340 260 L340 220 L380 220"
          stroke="#005CFE"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M375 215 L385 220 L375 225" stroke="#005CFE" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
