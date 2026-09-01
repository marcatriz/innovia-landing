import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

/**
 * Top-of-page back link for inner pages. The site header hides its nav below
 * the `xl` breakpoint, so on mobile and tablet there is no menu: this gives
 * readers a clear, large-tap-target way back to the parent page.
 *
 * `backToHome` and `backToList` come from the `whitepaper` namespace, which
 * survives from the removed whitepapers pages purely as a label source. The
 * asset finance letter has its own label in the `insights` namespace, because
 * "back to all whitepapers" would be false on a page that lists issues.
 */
export default function BackLink({
  href,
  labelKey,
}: {
  href: string;
  labelKey: 'backToHome' | 'backToList' | 'backToIssues';
}) {
  const tWhitepaper = useTranslations('whitepaper');
  const tInsights = useTranslations('insights');
  const label = labelKey === 'backToIssues' ? tInsights('backToIssues') : tWhitepaper(labelKey);

  return (
    <div className="container-x pt-6 lg:pt-8 print:hidden">
      <Link
        href={href}
        className="-ml-2 inline-flex items-center gap-2 rounded-lg px-2 py-2 text-body-sm font-medium text-teal-700 transition-colors hover:text-teal-900 hover:bg-tint"
      >
        <span aria-hidden className="text-lg leading-none">
          ←
        </span>
        {label}
      </Link>
    </div>
  );
}
