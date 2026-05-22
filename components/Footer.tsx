import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 py-12 text-paper">
      <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/innovia-profile.png"
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
        <p className="font-mono text-caption text-slate-300">© {year}</p>
      </div>
    </footer>
  );
}
