"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Phone,
  TrendingDown,
  Truck,
  ShieldCheck,
  Clock,
  XCircle,
  Maximize2,
  Hammer,
  Factory,
  Warehouse,
  Building2,
  FileText,
  Building,
  ArrowUpRight,
  MapPin,
  Mail,
  Paintbrush, // Do systemu malowanego
  Layers, // Do systemu wylewanego (już chyba masz)
  Sparkles, // Do systemu Deco
  ShieldAlert, // Do systemu BHP
  History, // Do "35 lat tradycji"
  Award, // Do "ISO"
  PackageOpen, // Do "Małych partii / Elastyczności"
  Globe2, // Do "Made in EU"
} from "lucide-react";
import { IntentType } from "@/app/actions";

const sectionContent = {
  quote: {
    title: "Zacznijmy współpracę",
    description:
      "Wypełnij formularz poniżej. To nic nie kosztuje, a otrzymasz konkretną ofertę dopasowaną do Twojej inwestycji w mniej niż 24 godziny.",
    steps: [
      {
        title: "1. Analiza",
        desc: "Analizujemy Twoje zapotrzebowanie i metraż.",
      },
      {
        title: "2. Wycena",
        desc: "Przygotowujemy ofertę",
      },
      { title: "3. Dostawa", desc: "Organizujemy transport prosto na budowę." },
    ],
  },
  documents: {
    title: "Pobierz dokumentację techniczną",
    description:
      "Zostaw swój e-mail, aby otrzymać natychmiastowy dostęp do Pakietu Weryfikacyjnego (Case Study Toi Toi + Certyfikaty ISO + Karty Techniczne).",
    steps: [
      {
        title: "1. Wypełnij",
        desc: "Podaj adres e-mail, na który mamy wysłać pliki.",
      },
      {
        title: "2. Odbierz",
        desc: "Automat wyśle Pakiet Premium w ciągu 30 sekund.",
      },
      {
        title: "3. Weryfikuj",
        desc: "Przedstaw dokumenty inwestorowi lub inspektorowi.",
      },
    ],
  },
  collab: {
    title: "Zrealizujmy Twój projekt",
    description:
      "Interesuje Cię podobne rozwiązanie jak w Toi Toi Polska? Opisz swoją inwestycję. Pomożemy Ci dobrać technologię i przygotujemy ofertę logistyczną.",
    steps: [
      { title: "1. Zgłoszenie", desc: "Opisz krótko specyfikę obiektu." },
      {
        title: "2. Konsultacja",
        desc: "Dobierzemy system pod Twoje obciążenia.",
      },
      {
        title: "3. Realizacja",
        desc: "Dostawa materiału bezpośrednio na budowę.",
      },
    ],
  },
};

export default function Home() {
  const [formIntent, setFormIntent] = useState<IntentType>("quote");

  // Funkcja do płynnego przewijania do formularza
  const scrollToContact = (intent: IntentType = "quote") => {
    setFormIntent(intent); // Ustawiamy intencję
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeContent = sectionContent[formIntent];

  const scrollToOffer = () => {
    const offerSection = document.getElementById("oferta");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* --- NAVBAR (Pasek nawigacji) --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Opcjonalnie ikonka: <Layers className="h-6 w-6 text-blue-600" /> */}
            <div className="font-bold text-xl tracking-tight text-slate-900">
              WYLEWKI<span className="text-blue-600">EU</span>
            </div>
          </div>

          {/* MENU ŚRODKOWE (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link
              href="#dlaczego-my"
              className="hover:text-blue-600 transition-colors"
            >
              Dlaczego my?
            </Link>
            <Link
              href="#oferta"
              className="hover:text-blue-600 transition-colors"
            >
              Oferta
            </Link>
            <Link
              href="#realizacje"
              className="hover:text-blue-600 transition-colors"
            >
              Realizacje
            </Link>
          </div>

          {/* PRAWA STRONA (Telefon + CTA) */}
          <div className="flex items-center gap-4">
            {/* Numer telefonu (widoczny na dużych ekranach) */}
            <a
              href="tel:+48724537326"
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 mr-2"
            >
              <Phone className="h-4 w-4" />
              <span>+48 724 537 326</span>
            </a>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToContact("quote")}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-md shadow-blue-900/10"
            >
              Darmowa Wycena
            </Button>
          </div>
        </div>
      </nav>

      {/* --- 1. HERO SECTION (Zaktualizowana: C-GUARD System) --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEWA KOLUMNA: Tekst i CTA */}
            <div className="flex flex-col gap-6">
              {/* Badge */}
              <div className="inline-flex items-center w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Oficjalny Partner Chemcolor Sevnica
              </div>

              {/* H1: Konkretny Produkt */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Systemy Posadzkowe <br />
                <span className="text-blue-600">C-GUARD® Epoxy</span>
              </h1>

              {/* H2: Opis techniczny */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Bezpośredni import przemysłowych systemów żywicznych ze
                Słowenii. Rozwiązania dla hal produkcyjnych i magazynów o
                wysokim obciążeniu mechanicznym (Heavy Duty).
              </p>

              {/* Przyciski CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-base"
                  onClick={() => scrollToContact("quote")}
                >
                  Zapytaj o Ofertę
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base border-slate-300"
                  onClick={scrollToOffer}
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Parametry C-GUARD®
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ISO 9001 / 14001
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Atesty CE
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Technologia Solvent-Free
                </div>
              </div>
            </div>

            {/* PRAWA KOLUMNA: Zdjęcie (Placeholder - tu docelowo dasz zdjęcie worka/posadzki) */}
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2048&auto=format&fit=crop"
                  alt="Posadzka przemysłowa C-GUARD Epoxy"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Pływający element "Trust Box"
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg border border-slate-100 max-w-[200px]">
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                    Wdrożono u lidera
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Toi Toi Polska Sp. z o.o.
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-blue-600"
                      ></div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESZTA SEKCJI (Zostawiamy szkielet, będziemy poprawiać w kolejnych krokach) --- */}

      {/* 2. SOCIAL PROOF */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="px-6 max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold text-slate-500 mb-6 tracking-wider">
            ZAUFALI NAM LIDERZY BRANŻY
          </p>
          <div className="flex justify-center items-center grayscale opacity-70 hover:opacity-100 transition-opacity">
            {/* Placeholder loga - zrobimy to ładniej potem */}
            <span className="text-3xl font-black text-slate-800 tracking-tighter">
              TOI TOI <span className="font-light">POLSKA</span>
            </span>
          </div>
        </div>
      </section>

      {/* --- 2. SEKCJA ZAUFANIE (Why Us - Chemcolor Specific) --- */}
      <section
        id="dlaczego-my"
        className="py-24 px-6 max-w-7xl mx-auto bg-slate-50/50"
      >
        {/* Nagłówek Sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 mb-4 uppercase tracking-wider">
            <Globe2 className="h-3 w-3" />
            Made in Slovenia (EU)
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Za Twoim zamówieniem stoi <br />
            <span className="text-blue-600">
              35 lat doświadczenia producenta
            </span>
          </h3>
          <p className="text-lg text-slate-600">
            Jako wyłączny partner na ten segment, łączymy zwinność polskiej
            obsługi z potężnym zapleczem technologicznym fabryki{" "}
            <strong>Chemcolor Sevnica</strong>.
          </p>
        </div>

        {/* Grid z Kartami - KONKRETY OD PRODUCENTA */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Karta 1: TRADYCJA */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <History className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Technologia od 1980 r.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                Chemcolor to firma rodzinna z tradycjami, gdzie wiedza
                przechodzi z pokolenia na pokolenie. To nie jest "startup". To
                dekady udoskonalania receptur epoksydowych i poliuretanowych.
              </p>
              <div className="h-px bg-slate-100 w-full my-2"></div>
              <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                Stabilność i powtarzalność produkcji
              </div>
            </CardContent>
          </Card>

          {/* Karta 2: JAKOŚĆ (ISO) - TO JEST KLUCZ B2B */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            {/* Ozdobny pasek */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">
                Standardy ISO 9001 & 14001
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                Bezpieczeństwo Twojej inwestycji gwarantują niezależne
                certyfikaty. Zarządzanie jakością (ISO 9001) oraz dbałość o
                środowisko (ISO 14001).
              </p>
              <div className="h-px bg-slate-100 w-full my-2"></div>
              <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                Pełna certyfikacja UE (CE, EN)
              </div>
            </CardContent>
          </Card>

          {/* Karta 3: ELASTYCZNOŚĆ (Twój Atut dla małych firm) */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <PackageOpen className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">
                Elastyczność ("Small Batch")
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                Wielkie korporacje wymagają zamówień na tony. My rozumiemy
                realia. Dzięki elastycznej linii produkcyjnej realizujemy
                zamówienia już od 25 kg (jedno wiadro).
              </p>
              <div className="h-px bg-slate-100 w-full my-2"></div>
              <div className="flex items-center gap-2 text-slate-900 font-medium text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                Dopasowanie pod małe i duże projekty
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pasek Bonusowy - Podsumowanie Korzyści */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingDown className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Direct-to-Site Model</h4>
              <p className="text-sm text-slate-600">
                Towar jedzie prosto z Słowenii na Twoją budowę. Omijasz marże
                hurtowni i koszty magazynowania.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => scrollToContact("quote")}
            className="whitespace-nowrap"
          >
            Zapytaj o ofertę hurtową
          </Button>
        </div>
      </section>

      {/* --- SEKCJA PAKIETY SYSTEMOWE (Nowość) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Rozwiązania "Szyte na miarę"
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Dobierz system do obciążeń Twojej hali
          </h3>
          <p className="text-lg text-slate-600">
            Nie każda posadzka wymaga pancernej wylewki. Oferujemy trzy
            sprawdzone systemy C-GUARD®, od ekonomicznego odpylenia po
            ekstremalną wytrzymałość.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* SYSTEM 1: ECONOMY (Malowany) */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <Paintbrush className="h-6 w-6 text-slate-600" />
              </div>
              <CardTitle className="text-xl">System ECONOMY</CardTitle>
              <p className="text-sm text-slate-500 font-medium">
                Powłoka Malowana (Roller Coating)
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-slate-900">
                Lekkie{" "}
                <span className="text-lg font-normal text-slate-500">
                  obciążenia
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                Ekonomiczne rozwiązanie do zabezpieczenia i odpylenia betonu.
                Aplikacja wałkiem. Idealne tam, gdzie nie ma ciężkiego
                transportu.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Odpylenie powierzchni
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Łatwe mycie i estetyka
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Niski koszt materiału
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => scrollToContact("quote")}
              >
                Wyceń ten system
              </Button>
            </CardContent>
          </Card>

          {/* SYSTEM 2: HEAVY DUTY (Wylewany - Bestseller) */}
          <Card className="border-blue-600 shadow-xl scale-105 z-10 relative">
            {/* Badge "Polecany" */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              WYBÓR TOI TOI POLSKA
            </div>

            <CardHeader className="pb-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-blue-700">
                System HEAVY DUTY
              </CardTitle>
              <p className="text-sm text-slate-500 font-medium">
                Wylewka Samopoziomująca
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-slate-900">
                Ekstremalne{" "}
                <span className="text-lg font-normal text-slate-500">
                  obciążenia
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                Nasz flagowy system na bazie <strong>C-GUARD® EP 304</strong>.
                Tworzy gładką, pancerną taflę o grubości 2-4mm. Pod wózki
                widłowe.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Pełna odporność na wózki widłowe
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Efekt "Lustra" (Samopoziom)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  Żywotność 10+ lat
                </li>
              </ul>
              <Button
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                onClick={() => scrollToContact("quote")}
              >
                Zapytaj o ten system
              </Button>
            </CardContent>
          </Card>

          {/* SYSTEM 3: SAFETY & DECO (Zasypowy) */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="pb-4">
              <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldAlert className="h-6 w-6 text-slate-600" />
              </div>
              <CardTitle className="text-xl">System SAFETY / DECO</CardTitle>
              <p className="text-sm text-slate-500 font-medium">
                Zasyp Piaskiem lub Płatkami
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-3xl font-bold text-slate-900">
                BHP{" "}
                <span className="text-lg font-normal text-slate-500">
                  & Design
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                Baza EP 304 z dodatkowym zasypem kruszywem kwarcowym
                (antypoślizg R11-R13) lub płatkami dekoracyjnymi.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Wysoka antypoślizgowość
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Estetyczny wygląd (Płatki)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Maskowanie nierówności
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => scrollToContact("quote")}
              >
                Wyceń wariant
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- 3. SEKCJA O PRODUKCIE (Dane Techniczne C-GUARD) --- */}
      <section
        id="oferta"
        className="py-24 px-6 max-w-7xl mx-auto bg-white text-slate-900"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEWA KOLUMNA: Twarde Dane Produktowe */}
          <div>
            <div className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
              Flagowy Produkt Przemysłowy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              System C-GUARD® <span className="text-blue-600">EP 304</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Dwuskładnikowa, bezrozpuszczalnikowa powłoka epoksydowa typu
              "Self-Levelling". Stworzona do ochrony betonu w warunkach
              ciężkiego obciążenia mechanicznego i chemicznego.
            </p>

            {/* TABELA PARAMETRÓW (Dane z TDS C-GUARD EP 304) */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">
                  Wytrzymałość (Rozciąganie)
                </p>
                <p className="text-2xl font-bold text-slate-900">~ 60 MPa</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">
                  Twardość (Shore D)
                </p>
                <p className="text-2xl font-bold text-slate-900">82 pkt</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">
                  Odporność na ścieranie
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  Klasa AR 0.5
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">Ruch pieszy</p>
                <p className="text-2xl font-bold text-slate-900">po 24h</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                  <Maximize2 className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    100% Solvent Free (Bezrozpuszczalnikowy)
                  </h4>
                  <p className="text-sm text-slate-600">
                    Bezpieczny dla aplikacji w zamkniętych halach. Brak skurczu
                    i ryzyka spękań podczas wiązania.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                  <ShieldCheck className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Norma EN 13813: SR-B2.0-AR0.5-IR23
                  </h4>
                  <p className="text-sm text-slate-600">
                    Pełna certyfikacja UE. Odporność na uderzenia klasy IR23
                    (bardzo wysoka udarność).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PRAWA KOLUMNA: Lead Magnet (Pakiet Weryfikacyjny) - BEZ ZMIAN KODU, ZMIANA KONTEKSTU */}
          <div className="space-y-8">
            {/* Grid Zastosowań - Zaktualizowany do EP 304 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-xl mb-6">
                Główne zastosowania EP 304
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <Warehouse className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">Hale Magazynowe</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <Factory className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">
                    Zakłady Produkcyjne
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">Garaże i Parkingi</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">Showroomy</span>
                </div>
              </div>
            </div>

            {/* Karta "Pakiet Inwestora" (Zostawiamy tak jak ustaliliśmy wcześniej) */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      Dokumentacja Systemowa
                    </h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Pobierz komplet dokumentów dla C-GUARD® EP 304:
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-blue-50">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-300" />
                        Karta Techniczna (TDS) + MSDS
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-300 mt-0.5 shrink-0" />
                        <span>
                          Case Study Toi Toi:{" "}
                          <span className="text-white font-medium opacity-90">
                            Wariant z płatkami dekoracyjnymi
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-300" />
                        Certyfikaty CE / Deklaracja zgodności
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={() => scrollToContact("documents")}
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 border-none font-semibold text-base py-6"
                  >
                    Prześlij pakiet dokumentów
                  </Button>
                </div>
                <p className="text-[10px] text-blue-200 text-center sm:text-left opacity-80">
                  Wysyłamy automatycznie w 30 sekund na podany e-mail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="realizacje"
        className="py-16 px-6 max-w-7xl mx-auto border-b border-slate-200"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Wybrane Realizacje
            </h2>
            <p className="text-slate-500">
              Dostarczamy rozwiązania dla liderów rynku.
            </p>
          </div>
          {/* Opcjonalny link "Więcej", na razie nieaktywny lub ukryty */}
          {/* <div className="text-blue-600 font-medium text-sm flex items-center cursor-pointer">
            Zobacz wszystkie <ArrowRight className="ml-1 h-4 w-4" />
          </div> */}
        </div>

        {/* Karta Realizacji - "Featured Project" */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
          {/* Tło dekoracyjne (subtelne koła/gradienty) */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Lewa strona: Opis klienta */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 text-blue-300 font-mono text-sm uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                Status: Zrealizowane pomyślnie
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                TOI TOI Polska Sp. z o.o.
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                Lider branży rozwiązań sanitarnych w Polsce.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase mb-2">
                    Wyzwanie
                  </h4>
                  <p className="text-slate-100 leading-relaxed">
                    Zapotrzebowanie na specjalistyczne materiały posadzkowe o
                    podwyższonej wytrzymałości do obiektów operacyjnych firmy.
                    Wymagana szybka logistyka i zgodność z normami UE.
                  </p>
                </div>

                <div className="h-px bg-slate-700 w-full"></div>

                <div>
                  <h4 className="text-sm font-bold text-slate-300 uppercase mb-2">
                    Nasze rozwiązanie
                  </h4>
                  <p className="text-slate-100 leading-relaxed">
                    Realizacja zamówień w modelu bezpośrednim z fabryki
                    Chemcolor Sevnica. Terminowe dostarczenie sytemu
                    posadzkowego zgodnego z wymogami technicznymi.
                  </p>
                </div>
              </div>
            </div>

            {/* Prawa strona: Wizualizacja / Metryki */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Klient</p>
                  <p className="font-bold text-white text-lg">
                    Sektor Przemysłowy
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded-lg">
                  <span className="text-slate-300">Terminowość dostaw</span>
                  <span className="text-green-400 font-bold flex items-center gap-1">
                    100% <CheckCircle2 className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded-lg">
                  <span className="text-slate-300">Jakość materiału</span>
                  <span className="text-blue-400 font-bold">
                    Premium (Certyfikat CE)
                  </span>
                </div>
                <div className="flex items-center justify-between bg-slate-800 p-4 rounded-lg">
                  <span className="text-slate-300">Model współpracy</span>
                  <span className="text-white font-bold">
                    Bezpośredni Import
                  </span>
                </div>
              </div>

              {/* Przycisk (może prowadzić do kontaktu albo być tylko ozdobą) */}
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <p className="text-sm text-slate-400 mb-3">
                  Chcesz podobnych efektów?
                </p>
                <Button
                  onClick={() => scrollToContact("collab")}
                  className="w-full bg-white text-slate-900 hover:bg-slate-100 font-semibold"
                >
                  Zapytaj o współpracę <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. FORMULARZ KONTAKTOWY --- */}
      <section
        id="contact"
        className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden"
      >
        {/* Tło dekoracyjne */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-12 animate-in fade-in duration-500 key={formIntent}">
            {/* key={formIntent} wymusza lekką animację przy zmianie tematu */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              {activeContent.title}
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {activeContent.description}
            </p>
          </div>

          {/* Kontener formularza */}
          <div className="max-w-4xl mx-auto relative z-10">
            <ContactForm intent={formIntent} />
          </div>

          {/* Dodatkowe info pod formularzem */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-slate-400 text-sm border-t border-slate-800 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 key={formIntent + 'steps'}">
            {activeContent.steps.map((step, index) => (
              <div key={index}>
                <strong className="text-white block mb-1 text-base">
                  {step.title}
                </strong>
                {step.desc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. STOPKA (Footer) --- */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Kolumna 1: Marka i Partnerstwo */}
            <div className="md:col-span-2">
              <div className="font-bold text-2xl tracking-tight text-slate-900 mb-4">
                WYLEWKI<span className="text-blue-600">EU</span>{" "}
                {/* Twoje logo tekstowe */}
              </div>
              <p className="text-slate-500 leading-relaxed mb-6 max-w-sm">
                Specjalistyczne rozwiązania posadzkowe dla przemysłu.
                Bezpośredni import, certyfikowana jakość i logistyka
                "just-in-time".
              </p>

              {/* Partnerstwo (Subtelne) */}
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 px-3 py-2 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                Partner handlowy Chemcolor Sevnica d.o.o.
              </div>
            </div>

            {/* Kolumna 2: Kontakt Szybki */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Kontakt</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+48724537326"
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>+48 724 537 326</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:biuro@wylewki-przemyslowe.pl"
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>biuro@wylewki-przemyslowe.pl</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>
                    Lubawska 3/74
                    <br />
                    81-066 Gdynia
                  </span>
                </li>
              </ul>
            </div>

            {/* Kolumna 3: Dane Rejestrowe (Ważne w PL!) */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Dane firmy</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="font-medium text-slate-900">
                  Brezit Bartosz Rezmer
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  NIP: 9581755519
                </li>
              </ul>
            </div>
          </div>

          {/* Pasek Dolny: Copyright i Linki Prawne */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Brezit Bartosz Rezmer. Wszelkie
              prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-slate-900 transition-colors"
              >
                Polityka Prywatności
              </Link>
              <Link
                href="/regulamin"
                className="hover:text-slate-900 transition-colors"
              >
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
