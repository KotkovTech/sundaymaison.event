import './globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Sunday Maison — Luxury Events & Experiences in Ireland',
  description: 'Stress-free luxury hen parties, bridal events, girls weekends, birthdays, and private celebrations across Ireland.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
