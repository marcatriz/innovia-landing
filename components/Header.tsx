import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-paper/90 backdrop-blur">
      <div className="container-x flex h-32 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/innovia-logo.png"
            alt="Innovia Systems"
            width={500}
            height={120}
            priority
            className="h-24 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          <Link href="/#services" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('services')}
          </Link>
          <Link href="/#modules" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('modules')}
          </Link>
          <Link href="/#use-cases" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('useCases')}
          </Link>
          <Link href="/fit-sprint" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('fitSprint')}
          </Link>
          <Link href="/#partnership" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('partnership')}
          </Link>
          <Link href="/#thesis" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('thesis')}
          </Link>
          <Link href="/whitepapers" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('whitepapers')}
          </Link>
          <Link href="/diagnostic" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('diagnostic')}
          </Link>
          <Link href="/#contact" className="whitespace-nowrap text-body-sm font-medium text-ink-700 hover:text-teal-700">
            {t('contact')}
          </Link>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
