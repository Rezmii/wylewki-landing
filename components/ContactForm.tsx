"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Loader2, FileText, Lock } from "lucide-react";
import { sendLeadMagnet } from "@/app/actions";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      area: formData.get("area") as string,
      message: formData.get("message") as string,
    };

    const result = await sendLeadMagnet(data);

    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Wystąpił błąd podczas wysyłania. Spróbuj ponownie.");
    }

    setIsLoading(false);
  }

  if (isSuccess) {
    return (
      <Card className="bg-white border-blue-100 shadow-xl shadow-blue-900/5 animate-in fade-in zoom-in duration-300 relative overflow-hidden">
        {/* Dekoracyjne tło (subtelne) */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-50"></div>

        <CardContent className="flex flex-col items-center justify-center p-8 text-center relative z-10">
          {/* IKONA SUKCESU - Brandowa */}
          <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-5 ring-1 ring-blue-100">
            <Send className="h-7 w-7 text-blue-600" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Zgłoszenie przyjęte
          </h3>
          <p className="text-slate-600 mb-8 max-w-md text-sm leading-relaxed">
            Pakiet Premium (Case Study + Certyfikaty) został wysłany na Twój
            adres e-mail.
            <br />
            <span className="text-xs text-slate-400 mt-1 block">
              (Jeśli nie widzisz wiadomości, sprawdź folder SPAM).
            </span>
          </p>

          {/* SEKCJA POBIERANIA */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 w-full shadow-inner mb-6">
            <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider text-left flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Dostępne do pobrania teraz:
            </p>

            {/* Plik 1: TDS (Dostępny) */}
            <a
              href="/dokumenty/chemcolor-c-guard-ep304-tds.pdf"
              target="_blank"
              download
              className="flex items-center gap-3 p-3 rounded-lg border border-white bg-white shadow-sm hover:border-blue-400 hover:shadow-md transition-all group text-left mb-3"
            >
              <div className="bg-blue-50 p-2 rounded group-hover:bg-blue-600 transition-colors">
                <FileText className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                  Karta Techniczna (TDS)
                </p>
                <p className="text-[10px] text-slate-500">
                  PDF • 2.4 MB • Pobierz teraz
                </p>
              </div>
            </a>

            {/* Plik 2: Case Study (Wysłane) */}
            <div className="mt-3 flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-100/50 text-left">
              <div className="bg-slate-200 p-2 rounded">
                <Lock className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <p className="font-medium text-slate-500 text-sm">
                  Pakiet Premium (Case Study + ISO + Linki)
                </p>
                <p className="text-[10px] text-green-600 font-bold flex items-center gap-1">
                  ✓ Wysłano na e-mail
                </p>
              </div>
            </div>
          </div>

          <Button
            className="text-slate-500 hover:text-blue-600 hover:bg-blue-50"
            variant="ghost"
            size="sm"
            onClick={() => setIsSuccess(false)}
          >
            Wyślij kolejne zapytanie
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-700 font-medium">
            Imię i Nazwisko
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Jan Kowalski"
            required
            className="bg-slate-50 border-slate-200"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-slate-700 font-medium">
            Nazwa Firmy
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Nazwa Twojej Firmy"
            required
            className="bg-slate-50 border-slate-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 font-medium">
            E-mail firmowy
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="biuro@firma.pl"
            required
            className="bg-slate-50 border-slate-200"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-700 font-medium">
            Telefon kontaktowy
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+48..."
            required
            className="bg-slate-50 border-slate-200"
          />
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <Label htmlFor="area" className="text-slate-700 font-medium">
          Szacowana powierzchnia inwestycji (m²)
        </Label>
        <Input
          id="area"
          name="area"
          type="number"
          placeholder="np. 500, 2000, 5000"
          required
          className="bg-slate-50 border-slate-200 text-lg"
        />
        <p className="text-xs text-slate-500">
          Pozwoli nam to dobrać odpowiednie warunki rabatowe.
        </p>
      </div>

      <div className="space-y-2 mb-8">
        <Label htmlFor="message" className="text-slate-700 font-medium">
          Dodatkowe informacje (opcjonalne)
        </Label>
        <Textarea
          id="message"
          name="message"
          className="bg-slate-50 border-slate-200 min-h-[120px]"
          placeholder="Opisz krótko inwestycję: rodzaj obiektu, termin realizacji, lokalizacja..."
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 font-semibold shadow-lg shadow-blue-900/20"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Wysyłanie...
          </>
        ) : (
          "Odbierz Pakiet i Wycenę"
        )}
      </Button>

      {/* Klauzula RODO - Bardzo ważna w Polsce */}
      <p className="text-[10px] text-slate-400 mt-6 text-center leading-tight max-w-lg mx-auto">
        Administratorem Twoich danych osobowych jest [TWOJA NAZWA FIRMY]. Dane
        będą przetwarzane wyłącznie w celu przygotowania oferty i realizacji
        zamówienia. Nie udostępniamy danych osobom trzecim bez Twojej zgody.
      </p>
    </form>
  );
}
