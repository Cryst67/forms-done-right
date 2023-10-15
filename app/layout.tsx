import './globals.css';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forms Done Right',
  description: 'Creating forms has never been easier.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='fdr-theme'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
