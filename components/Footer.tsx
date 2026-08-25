import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const legalLinkClass =
  'text-body-sm text-slate-300 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 py-12 text-paper">
      <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/innovia-mark-96.png"
            alt="Innovia Systems"
            width={36}
            height={36}
            className="h-9 w-9 rounded"
          />
          <div>
            <p className="font-display font-semibold text-paper">{t('copyright')}</p>
            <p className="text-body-sm text-slate-300">{t('tagline')}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/legal" className={legalLinkClass}>
            {t('legal')}
          </Link>
          <Link href="/privacy" className={legalLinkClass}>
            {t('privacy')}
          </Link>
          <p className="font-mono text-caption text-slate-300">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
