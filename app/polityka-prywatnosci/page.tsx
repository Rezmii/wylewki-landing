import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Przycisk powrotu */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="pl-0 hover:bg-transparent hover:text-blue-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do strony głównej
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Polityka Prywatności i Plików Cookies
        </h1>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            <strong>Ostatnia aktualizacja:</strong>{" "}
            {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              1. Administrator Danych
            </h2>
            <p>
              Administratorem danych osobowych jest firma{" "}
              <strong>Brezit Bartosz Rezmer</strong> z siedzibą w{" "}
              <strong>Gdyni (81-066)</strong>, przy ulicy{" "}
              <strong>Lubawska 3/74</strong>, posiadająca NIP:{" "}
              <strong>9581755519</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              2. Cele i podstawy przetwarzania
            </h2>
            <p>Przetwarzamy Twoje dane w następujących celach:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Realizacja zamówienia i umowy B2B</strong> (art. 6 ust.
                1 lit. b RODO).
              </li>
              <li>
                <strong>
                  Wystawienie faktury i spełnienie obowiązków księgowych
                </strong>{" "}
                (art. 6 ust. 1 lit. c RODO).
              </li>
              <li>
                <strong>Kontakt w sprawie oferty</strong> na Twoje żądanie (art.
                6 ust. 1 lit. b RODO).
              </li>
              <li>
                <strong>Dochodzenie roszczeń i obrona przed nimi</strong> (art.
                6 ust. 1 lit. f RODO).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              3. Odbiorcy danych
            </h2>
            <p>
              Twoje dane mogą być przekazywane podmiotom technicznym, które
              umożliwiają nam działanie, np.:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dostawca hostingu i serwera (Vercel Inc.),</li>
              <li>Dostawca poczty elektronicznej,</li>
              <li>Biuro rachunkowe (w przypadku wystawienia faktury),</li>
              <li>Firmy spedycyjne i kurierskie (w celu dostawy towaru).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              4. Czas przechowywania danych
            </h2>
            <p>
              Dane związane z realizacją zamówień i fakturami będą przechowywane
              przez okres <strong>5 lat</strong>, licząc od końca roku
              kalendarzowego, w którym upłynął termin płatności podatku (wymóg
              ordynacji podatkowej). Dane z zapytań ofertowych, które nie
              zakończyły się sprzedażą, usuwamy po 1 roku.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              5. Prawa Użytkownika
            </h2>
            <p>Masz prawo do:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Dostępu do treści swoich danych oraz otrzymania ich kopii,
              </li>
              <li>Sprostowania (poprawiania) swoich danych,</li>
              <li>Usunięcia danych ("prawo do bycia zapomnianym"),</li>
              <li>Ograniczenia przetwarzania,</li>
              <li>
                Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (UODO), jeśli uznasz, że przetwarzanie narusza przepisy RODO.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              6. Pliki Cookies
            </h2>
            <p>
              Serwis wykorzystuje pliki cookies w celach technicznych
              (niezbędnych do działania strony) oraz analitycznych. Możesz w
              każdej chwili zmienić ustawienia cookies w swojej przeglądarce
              internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              7. Kontakt
            </h2>
            <p>
              W sprawach RODO prosimy o kontakt pod adresem:{" "}
              <strong>biuro@wylewki-przemyslowe.pl</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
