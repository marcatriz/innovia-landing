import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

/**
 * Top-of-page back link for inner pages. The site header hides its nav below
 * the `xl` breakpoint, so on mobile and tablet there is no menu: this gives
 * readers a clear, large-tap-target way back to the parent page.
 *
 * Labels reuse the `whitepaper` namespace (backToList / backToHome), both of
 * which are translated in all five locales.
 */
export default function BackLink({
  href,
  labelKey,
}: {
  href: string;
  labelKey: 'backToHome' | 'backToList';
}) {
  const t = useTranslations('whitepaper');
  return (
    <div className="container-x pt-6 lg:pt-8">
      <Link
        href={href}
        className="-ml-2 inline-flex items-center gap-2 rounded-lg px-2 py-2 text-body-sm font-medium text-teal-700 transition-colors hover:text-teal-900 hover:bg-tint"
      >
        <span aria-hidden className="text-lg leading-none">
          ←
        </span>
        {t(labelKey)}
      </Link>
    </div>
  );
}
