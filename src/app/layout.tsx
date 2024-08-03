import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const bernoru = localFont({
  src: './../assets/fonts/bernoru.woff2',
  display: 'swap',
  variable: '--font-bernoru',
});

export const metadata: Metadata = {
  title: 'VICHACK',
  description: "Victoria's premier hackathon, shape the future",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-light.png',
        href: '/images/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon.png',
        href: '/images/icon-dark.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${bernoru.variable}`}>
      <body>{children}</body>
    </html>
  );
}
