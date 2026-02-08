import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Wylewki-Przemyslowe.pl - Specjalistyczne Wylewki Przemysłowe | Bezpośredni Import",
  description:
    "Dostarczamy certyfikowane wylewki przemysłowe bezpośrednio od producenta. Omiń pośredników. Sprawdzone rozwiązania dla hal, magazynów i producentów kontenerów.",
  openGraph: {
    title: "Wylewki-Przemyslowe.pl - Specjalistyczne Wylewki Przemysłowe",
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
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/334e6eb2f5c8c20393c68f3926fbb9bd/script.js"
      />
      <Script id="microsoft-clarity" type="text/javascript">
        {`
           (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vaprsj17dj");
          `}
      </Script>
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-N1QTBL5HCW" />
        <Analytics />
      </body>
    </html>
  );
}
