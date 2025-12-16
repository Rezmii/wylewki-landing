import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WylewkiEU - Specjalistyczne Wylewki Przemysłowe | Bezpośredni Import",
  description:
    "Dostarczamy certyfikowane wylewki przemysłowe bezpośrednio od producenta. Omiń pośredników. Sprawdzone rozwiązania dla hal i magazynów.",
  openGraph: {
    title: "WylewkiEU - Specjalistyczne Wylewki Przemysłowe",
    description:
      "Jakość Premium w cenie Europy Środkowej. Sprawdź naszą ofertę dla przemysłu.",
    type: "website",
    locale: "pl_PL",
    // images: ['/og-image.jpg'], // To dodasz jak będziesz miał grafikę
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      {/* Dodajemy scroll-smooth tutaj! */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
