import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Innovia Systems. Fit for Digital. Fit for AI.',
  description:
    'Helping leasing, consumer finance, and fleet management firms become fit for digital and AI. Diagnostics, operating-model redesign, software prototyping, and implementation support.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
