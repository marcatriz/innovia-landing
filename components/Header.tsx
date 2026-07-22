import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageToggle from './LanguageToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  const t = useTranslations('nav');

  const linkClass =
    'whitespace-nowrap text-[0.8125rem] font-medium text-ink-700 hover:text-teal-700 2xl:text-body-sm';
  const ctaClass =
    'inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-teal-500 px-4 py-2 text-[0.8125rem] font-semibold text-paper transition-colors hover:bg-teal-700 2xl:text-body-sm';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-paper/90 backdrop-blur">
      <div className="container-x flex h-24 items-center gap-x-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/innovia-logo.png"
            alt="Innovia Systems"
            width={500}
            height={120}
            priority
            className="h-14 w-auto xl:h-16"
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-x-3 xl:flex 2xl:gap-x-4">
          <Link href="/#services" className={linkClass}>
            {t('services')}
          </Link>
          <Link href="/#focus" className={linkClass}>
            {t('modules')}
          </Link>
          <Link href="/fit-sprint" className={ctaClass}>
            {t('fitSprint')}
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-paper animate-pulse" />
          </Link>
          <Link href="/#partnership" className={linkClass}>
            {t('partnership')}
          </Link>
          <Link href="/diagnostic" className={linkClass}>
            {t('diagnostic')}
          </Link>
          <Link href="/#contact" className={linkClass}>
            {t('contact')}
          </Link>
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-1 xl:ml-0">
          <LanguageToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
