"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react"; // Upewnij się, że masz te ikony

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    // PAMIĘTAJ ABY PODMIENIĆ ID FORMSPREE NA SWOJE!
    try {
      const response = await fetch("https://formspree.io/f/xldzngey", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Wystąpił błąd techniczny. Prosimy o kontakt telefoniczny.");
      }
    } catch (error) {
      alert("Wystąpił błąd połączenia.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className="bg-green-50 border-green-200 shadow-lg">
        <CardContent className="flex flex-col items-center justify-center p-12 text-center">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <Send className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-900 mb-2">
            Wiadomość wysłana!
          </h3>
          <p className="text-green-700 max-w-md">
            Dziękujemy za kontakt. Przygotujemy wstępną wycenę i odezwiemy się
            do Ciebie w ciągu 24 godzin (w dni robocze).
          </p>
          <Button
            className="mt-8 border-green-600 text-green-700 hover:bg-green-100"
            variant="outline"
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
        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 font-semibold shadow-lg shadow-blue-900/20 transition-all hover:scale-[1.01]"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Wysyłanie...
          </>
        ) : (
          "Poproś o bezpłatną wycenę"
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
