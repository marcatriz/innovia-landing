import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Innovia Systems. Fit for Digital. Fit for AI.',
  description:
    'A specialist consultancy for organizations that run complex operational and customer workflows. Fit to Digital and Fit to AI diagnostics, operating-model and process design, software prototyping, co-design, and implementation support.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
