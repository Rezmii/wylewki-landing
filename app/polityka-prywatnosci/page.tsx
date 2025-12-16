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
          Polityka Prywatności
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
              <strong>[TU WPISZ SWOJĄ NAZWĘ JDG]</strong> z siedzibą w{" "}
              <strong>[TWOJE MIASTO]</strong>, przy ulicy{" "}
              <strong>[TWOJA ULICA]</strong>, posiadająca NIP:{" "}
              <strong>[TWÓJ NIP]</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              2. Jakie dane zbieramy?
            </h2>
            <p>
              Zbieramy dane podane dobrowolnie w formularzu kontaktowym: Imię,
              Nazwisko, adres e-mail, numer telefonu oraz nazwę firmy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              3. Cel przetwarzania
            </h2>
            <p>Twoje dane są przetwarzane wyłącznie w celu:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Udzielenia odpowiedzi na przesłane zapytanie ofertowe.</li>
              <li>Przygotowania wyceny produktów.</li>
              <li>Ewentualnej realizacji zamówienia.</li>
            </ul>
          </section>

          {/* Tutaj możesz dokleić resztę standardowej formułki z internetu */}

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              4. Kontakt
            </h2>
            <p>
              W sprawach związanych z ochroną danych możesz skontaktować się z
              nami pod adresem: <strong>[TWÓJ EMAIL]</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
