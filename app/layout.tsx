import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hash House Harriers',
  description: 'Hash House Harriers 2026',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        defer
        src="https://umami-analytics-gules.vercel.app/script.js"
        data-website-id="d27bb1cb-20eb-482c-81fd-48ff28fada59"
      ></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        {children}
      </body>
    </html>
  );
}
