import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
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
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
