import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculator Tools | Age, Pregnancy Due Date, Tip Calculator",
  description: "Free online calculators: Age Calculator, Pregnancy Due Date Calculator, Tip Calculator. Fast, accurate, and easy to use. Mobile-friendly and SEO optimized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
        {/* Google Analytics with Next.js Script */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');`
        }</Script>
      </body>
    </html>
  );
}
