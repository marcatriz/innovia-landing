import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackLink from '@/components/BackLink';
import { Link, type AppLocale } from '@/i18n/routing';
import { WHITEPAPERS, getWhitepaper } from '@/components/whitepapers/registry';
import { routing } from '@/i18n/routing';
import AfterTheUiLayerFalls from '@/components/whitepapers/AfterTheUiLayerFalls';
import TheCompoundingCostOfWaiting from '@/components/whitepapers/TheCompoundingCostOfWaiting';
import MultiTenantIsolationAsAProperty from '@/components/whitepapers/MultiTenantIsolationAsAProperty';
import SingleCodebaseAsAProperty from '@/components/whitepapers/SingleCodebaseAsAProperty';
import BuiltForOwnershipFailingTheLifecycle from '@/components/whitepapers/BuiltForOwnershipFailingTheLifecycle';
import PricingEvResidualValueRisk from '@/components/whitepapers/PricingEvResidualValueRisk';
import MigrationPlaybook from '@/components/whitepapers/MigrationPlaybook';
import ResidualValueDataObject from '@/components/whitepapers/ResidualValueDataObject';
import ResilienceAndSecurityAsProperties from '@/components/whitepapers/ResilienceAndSecurityAsProperties';
import ApiAndMcpByDesign from '@/components/whitepapers/ApiAndMcpByDesign';
import FiveDisruptionsAlreadyShipped from '@/components/whitepapers/FiveDisruptionsAlreadyShipped';
import VerifiableAiGovernance from '@/components/whitepapers/VerifiableAiGovernance';
import SingleObligorExposureAsAProperty from '@/components/whitepapers/SingleObligorExposureAsAProperty';

export function generateStaticParams() {
  // Cross product of locale x slug, required for `output: 'export'`.
  return routing.locales.flatMap((locale) =>
    WHITEPAPERS.map((w) => ({ locale, slug: w.slug })),
  );
}

function renderContent(slug: string, locale: AppLocale) {
  switch (slug) {
    case 'single-obligor-exposure-as-a-property':
      return <SingleObligorExposureAsAProperty locale={locale} />;
    case 'verifiable-ai-governance':
      return <VerifiableAiGovernance locale={locale} />;
    case 'five-disruptions-already-shipped':
      return <FiveDisruptionsAlreadyShipped locale={locale} />;
    case 'resilience-and-security-as-properties':
      return <ResilienceAndSecurityAsProperties locale={locale} />;
    case 'api-and-mcp-by-design':
      return <ApiAndMcpByDesign locale={locale} />;
    case 'residual-value-data-object':
      return <ResidualValueDataObject locale={locale} />;
    case 'migration-playbook':
      return <MigrationPlaybook locale={locale} />;
    case 'pricing-ev-residual-value-risk':
      return <PricingEvResidualValueRisk locale={locale} />;
    case 'after-the-ui-layer-falls':
      return <AfterTheUiLayerFalls locale={locale} />;
    case 'the-compounding-cost-of-waiting':
      return <TheCompoundingCostOfWaiting locale={locale} />;
    case 'multi-tenant-isolation-as-a-property':
      return <MultiTenantIsolationAsAProperty locale={locale} />;
    case 'single-codebase-as-a-property':
      return <SingleCodebaseAsAProperty locale={locale} />;
    case 'built-for-ownership-failing-the-lifecycle':
      return <BuiltForOwnershipFailingTheLifecycle locale={locale} />;
    default:
      return null;
  }
}

export default async function WhitepaperPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const meta = getWhitepaper(slug);
  if (!meta) notFound();
  const localeKey = locale as AppLocale;
  const localized = meta[localeKey];

  return (
    <>
      <Header />
      <main>
        <BackLink href="/whitepapers" labelKey="backToList" />
        <WhitepaperHero
          title={localized.title}
          subtitle={localized.subtitle}
          lede={localized.lede}
          date={meta.date}
          minutes={meta.minutes}
          locale={locale}
        />
        <article className="bg-paper pb-24">
          <div className="container-x max-w-3xl">{renderContent(slug, localeKey)}</div>
        </article>
        <WhitepaperFooterNav />
      </main>
      <Footer />
    </>
  );
}

function WhitepaperHero({
  title,
  subtitle,
  lede,
  date,
  minutes,
  locale,
}: {
  title: string;
  subtitle: string;
  lede: string;
  date: string;
  minutes: number;
  locale: string;
}) {
  const t = useTranslations('whitepapersIndex');
  const formatted = new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <section className="relative overflow-hidden bg-tint">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 15% 25%, rgba(7,154,156,0.16), transparent 45%), radial-gradient(circle at 85% 30%, rgba(0,92,254,0.10), transparent 50%)',
        }}
      />
      <div className="container-x relative max-w-3xl py-20">
        <div className="mb-6 flex items-center gap-3 text-caption uppercase tracking-wider text-slate-500">
          <span>{formatted}</span>
          <span aria-hidden>·</span>
          <span>
            {minutes} {t('minutes')}
          </span>
        </div>
        <h1 className="text-h1 lg:text-display mb-4 text-ink-700">{title}</h1>
        <p className="mb-8 flex items-start text-h4 text-teal-700">
          <span className="accent-bar mt-2 shrink-0" />
          <span>{subtitle}</span>
        </p>
        <p className="text-body-lg text-slate-500">{lede}</p>
      </div>
    </section>
  );
}

function WhitepaperFooterNav() {
  const t = useTranslations('whitepaper');
  return (
    <section className="border-t border-slate-100 bg-paper py-16">
      <div className="container-x flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/whitepapers"
          className="inline-flex items-center gap-2 text-body-sm font-medium text-teal-700 hover:text-teal-900"
        >
          <span aria-hidden>←</span>
          {t('backToList')}
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-body-sm font-medium text-ink-700 hover:text-teal-700"
        >
          {t('backToHome')}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
