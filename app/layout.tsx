import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/google/analytics";
import Script from "next/script";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Pro - Your Trusted Weather Source",
  description:
    "Get accurate weather forecasts, current conditions, and next day predictions for your location",
  icons: {
    // icon: [
    //   {
    //     url: "/icon.svg",
    //     type: "image/svg+xml",
    //   },
    // ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
