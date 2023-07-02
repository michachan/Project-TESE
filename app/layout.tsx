// 'use client';

import './globals.css';

import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import Header from './components/layout/header/Header';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Megapack Industrial Site Designer | Tesla',
  description: 'Tesla - Megapack Industrial Site Designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Providers>
            <Header />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
