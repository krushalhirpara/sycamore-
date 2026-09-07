import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CustomCursor from '@/components/ui/CustomCursor';
import PageTransition from '@/components/ui/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Sycamore East SPN',
    default: 'Sycamore East SPN | Amazon & Flipkart Marketplace Growth Partner',
  },
  description: 'Sycamore East SPN is a certified Amazon SPN and Flipkart accredited marketplace growth partner. We scale D2C seller brands through data-driven account management, catalog SEO, and algorithmic advertising.',
  metadataBase: new URL('https://sycamoregrowth.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sycamore East SPN | Amazon & Flipkart Marketplace Growth Partner',
    description: 'Empower your D2C seller brand on Amazon and Flipkart through data-driven PPC campaigns, catalog SEO, and dedicated seller support.',
    url: 'https://sycamoregrowth.com',
    siteName: 'Sycamore East SPN',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sycamore East SPN',
    description: 'Empower your D2C seller brand on Amazon and Flipkart through data-driven PPC campaigns, catalog SEO, and dedicated seller support.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-[#191A23] antialiased selection:bg-[#B9FF66] selection:text-[#191A23]" suppressHydrationWarning>
        <CustomCursor />
        <PageTransition>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
