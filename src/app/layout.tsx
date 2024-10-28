// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from 'next/font/google'; // Usiamo Inter come fallback
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

// src/app/layout.tsx
// ...modifica l'export del metadata:

export const metadata: Metadata = {
  metadataBase: new URL('https://the-duckes-chrono-eb.vercel.app'), // aggiorna con il tuo URL
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
};

// Aggiungi l'export del viewport
export const viewport = {
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
        className={`${inter.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}