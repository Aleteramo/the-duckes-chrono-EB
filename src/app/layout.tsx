
// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Dukes Chrono | Orologi di Prestigio",
  description: "Collezione esclusiva di orologi vintage di prestigio",
  keywords: ["orologi", "vintage", "lusso", "Rolex", "Omega", "Longines"],
  authors: [{ name: "The Dukes Chrono" }],
  openGraph: {
    title: "The Dukes Chrono | Orologi di Prestigio",
    description: "Collezione esclusiva di orologi vintage di prestigio",
    type: "website",
    locale: "it_IT",
    siteName: "The Dukes Chrono",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
