import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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

        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Regulamin Współpracy B2B
        </h1>
        <p className="text-slate-500 mb-8 italic">
          Obowiązuje od dnia: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              §1. Postanowienia Ogólne
            </h2>
            <p>
              1. Właścicielem serwisu jest firma{" "}
              <strong>Brezit Bartosz Rezmer</strong> z siedzibą w Gdyni
              (81-066), ul. Lubawska 3/74, NIP: 9581755519 (dalej:
              "Sprzedawca").
              <br />
              2. Niniejszy regulamin określa zasady współpracy handlowej w
              modelu B2B (Business-to-Business). Oferta skierowana jest
              wyłącznie do przedsiębiorców.
              <br />
              3. Informacje zamieszczone na stronie internetowej nie stanowią
              oferty w rozumieniu art. 66 Kodeksu Cywilnego, lecz są
              zaproszeniem do zawarcia umowy (zgodnie z art. 71 k.c.). Ceny i
              stany magazynowe mogą ulec zmianie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              §2. Procedura Zamówienia
            </h2>
            <p>
              1. Klient składa zapytanie ofertowe poprzez formularz kontaktowy,
              e-mail lub telefonicznie.
              <br />
              2. Na podstawie zapytania, Sprzedawca przygotowuje indywidualną
              Ofertę Handlową (w formie PDF lub e-mail), zawierającą ostateczną
              cenę, koszty transportu oraz termin realizacji.
              <br />
              3. Zawarcie umowy sprzedaży następuje w momencie pisemnej
              akceptacji Oferty przez Klienta lub opłacenia faktury Proforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              §3. Płatności i Ceny
            </h2>
            <p>
              1. Ceny podawane są w walucie PLN (złoty polski) lub EUR (euro) w
              zależności od ustaleń w ofercie.
              <br />
              2. Podstawową formą płatności jest przedpłata 100% na podstawie
              faktury Proforma, chyba że strony ustaliły inaczej w odrębnej
              umowie.
              <br />
              3. Faktura VAT wystawiana jest po zaksięgowaniu wpłaty i wysyłana
              do Klienta drogą elektroniczną.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              §4. Dostawa i Rozładunek
            </h2>
            <p>
              1. Towar dostarczany jest bezpośrednio z magazynu producenta
              (Słowenia) lub magazynu w Polsce za pośrednictwem zewnętrznej
              firmy spedycyjnej.
              <br />
              2.{" "}
              <strong>
                Obowiązek rozładunku towaru leży po stronie Kupującego.
              </strong>{" "}
              Klient zobowiązany jest zapewnić odpowiedni sprzęt (wózek widłowy)
              oraz utwardzony dojazd dla samochodów ciężarowych (TIR).
              <br />
              3. W przypadku braku możliwości rozładunku lub braku dojazdu,
              Klient może zostać obciążony kosztami przestoju pojazdu lub
              ponownej dostawy.
              <br />
              4. Klient ma obowiązek sprawdzić stan przesyłki przy odbiorze.
              Wszelkie uszkodzenia (rozerwanie worków, uszkodzenie palety) muszą
              zostać odnotowane w Liście Przewozowym (protokół szkody) w
              obecności kierowcy. Jest to podstawa do reklamacji transportowej.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              §5. Zwroty i Reklamacje
            </h2>
            <p>
              1. W obrocie między przedsiębiorcami (B2B) wyłączona jest
              możliwość zwrotu towaru bez podania przyczyny (nie stosuje się
              przepisów konsumenckich).
              <br />
              2. Reklamacje jakościowe (wady produktu) rozpatrywane są na
              podstawie procedur gwarancyjnych producenta (Chemcolor Sevnica
              d.o.o.).
              <br />
              3. Sprzedawca nie ponosi odpowiedzialności za niewłaściwe
              zastosowanie produktu, błędy wykonawcze lub użycie niezgodne z
              Kartą Techniczną.
              <br />
              4. Odpowiedzialność Sprzedawcy z tytułu rękojmi zostaje wyłączona
              (zgodnie z art. 558 § 1 k.c.).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
