"use client";

import Image from "next/image";
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
  Layers,
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
} from "lucide-react";

export default function Home() {
  // Funkcja do płynnego przewijania do formularza
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              onClick={scrollToContact}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-md shadow-blue-900/10"
            >
              Darmowa Wycena
            </Button>
          </div>
        </div>
      </nav>

      {/* --- 1. HERO SECTION (Dopracowana) --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEWA KOLUMNA: Tekst i CTA */}
            <div className="flex flex-col gap-6">
              {/* Badge / Tag nad nagłówkiem */}
              <div className="inline-flex items-center w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Bezpośredni import ze Słowenii
              </div>

              {/* H1: USP */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Specjalistyczne Wylewki Przemysłowe. <br />
                <span className="text-blue-600">
                  Jakość Premium w Polskiej Cenie.
                </span>
              </h1>

              {/* H2: Wyjaśnienie */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Omiń drogich pośredników. Dostarczamy certyfikowane wylewki
                (Chemcolor Sevnica) bezpośrednio z fabryki na Twój plac budowy.
                Sprawdzone przez liderów rynku.
              </p>

              {/* Przyciski CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-base"
                  onClick={scrollToContact}
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
                  <ArrowRight className="mr-2 h-5 w-5" /> Sprawdź Parametry
                </Button>
              </div>

              {/* Social Proof / Trust Badges (Małe ikonki pod przyciskami) */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Dostawa 48-72h
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Certyfikaty UE
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Wsparcie Techniczne
                </div>
              </div>
            </div>

            {/* PRAWA KOLUMNA: Zdjęcie (Placeholder) */}
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              {/* Tło dekoracyjne (cień/obrys) */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>

              {/* Zdjęcie główne */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3]">
                {/* Używamy zdjęcia z Unsplash jako placeholder. 
                    TEMAT: Industrial flooring, construction, warehouse. */}
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                  alt="Wylewka przemysłowa w hali magazynowej"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Pływający element "Trust Box" na zdjęciu */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg border border-slate-100 max-w-[200px]">
                  <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                    Ostatnia realizacja
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Toi Toi Polska Sp. z o.o.
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-green-500"
                      ></div>
                    ))}
                  </div>
                </div>
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

      {/* 3. KORZYŚCI (Placeholder) */}
      <section
        id="dlaczego-my"
        className="py-24 px-6 max-w-7xl mx-auto bg-slate-50/50"
      >
        {/* Nagłówek Sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Twoja Przewaga Konkurencyjna
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Dlaczego branża budowlana przepłaca?
          </h3>
          <p className="text-lg text-slate-600">
            Większość firm płaci za logo dystrybutora, magazynowanie i sieć
            handlowców. My zmieniamy zasady gry. Dostarczamy ten sam standard
            techniczny, eliminując zbędne koszty.
          </p>
        </div>

        {/* Grid z Kartami */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Karta 1: CENA */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Optymalizacja Kosztów</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 text-slate-500 text-sm">
                <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                <p>Drogie marki zachodnie z wysoką marżą marketingową.</p>
              </div>
              <div className="h-px bg-slate-100 w-full my-2"></div>
              <div className="flex items-start gap-3 text-slate-900 font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <p>
                  Bezpośredni import. Oszczędności rzędu 15-20% na materiale.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Karta 2: LOGISTYKA */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Logistyka "On-Site"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 text-slate-500 text-sm">
                <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                <p>Przeładunki, lokalne hurtownie, opóźnienia w dostawach.</p>
              </div>
              <div className="h-px bg-slate-100 w-full my-2"></div>
              <div className="flex items-start gap-3 text-slate-900 font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <p>
                  Dostawa prosto z fabryki na Twój plac budowy. Pełna kontrola.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Karta 3: JAKOŚĆ */}
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Jakość i Certyfikacja</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 text-slate-500 text-sm">
                <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                <p>
                  Tanie zamienniki o niepewnych parametrach i braku atestów.
                </p>
              </div>
              <div className="h-px bg-slate-100 w-full my-2"></div>
              <div className="flex items-start gap-3 text-slate-900 font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <p>
                  Pełna certyfikacja CE/EN. Parametry potwierdzone kartami
                  technicznymi.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dodatkowy pasek "Bonusowy" - Szybkość */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Czas to pieniądz</h4>
              <p className="text-sm text-slate-600">
                Nasze wylewki szybkowiążące pozwalają na szybsze oddanie
                inwestycji.
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={scrollToContact}>
            Sprawdź dostępność
          </Button>
        </div>
      </section>

      {/* --- 3. SEKCJA O PRODUKCIE (Technical Specs - WERSJA HYBRYDOWA) --- */}
      <section
        id="oferta"
        className="py-24 px-6 max-w-7xl mx-auto bg-white text-slate-900"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEWA KOLUMNA: TWARDE DANE (Jawne dla inżyniera) */}
          <div>
            <div className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
              Produkt dostępny od ręki
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {/* Zmień na prawdziwą nazwę */}
              Chemcolor Nivelfloor{" "}
              <span className="text-blue-600">Pro 500</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Przemysłowa wylewka samopoziomująca klasy premium. Zaprojektowana
              pod ekstremalne obciążenia w logistyce i produkcji.
            </p>

            {/* TABELA PARAMETRÓW - TO JEST KLUCZ DLA INŻYNIERA */}
            {/* Dzięki temu nie musi pobierać PDF, żeby wiedzieć czy towar pasuje */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">
                  Wytrzymałość (Ściskanie)
                </p>
                <p className="text-2xl font-bold text-slate-900"> 50 MPa</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">
                  Wytrzymałość (Zginanie)
                </p>
                <p className="text-2xl font-bold text-slate-900"> 7 MPa</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">Ruch pieszy</p>
                <p className="text-2xl font-bold text-slate-900">po 24h</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 mb-1">Grubość warstwy</p>
                <p className="text-2xl font-bold text-slate-900">5 - 30 mm</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                  <Maximize2 className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    System Bezskurczowy
                  </h4>
                  <p className="text-sm text-slate-600">
                    Brak ryzyka spękań przy dużych powierzchniach dylatacyjnych.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                  <ShieldCheck className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Odporność Chemiczna
                  </h4>
                  <p className="text-sm text-slate-600">
                    Podwyższona odporność na oleje, smary i lekkie kwasy (wg
                    karty).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit">
                  <ShieldCheck className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Odporność Chemiczna
                  </h4>
                  <p className="text-sm text-slate-600">
                    Podwyższona odporność na oleje, smary i lekkie kwasy (wg
                    karty).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PRAWA KOLUMNA: Lead Magnet (Pakiet Weryfikacyjny) */}
          <div className="space-y-8">
            {/* Grid Zastosowań (Bez zmian) */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-xl mb-6">Główne zastosowania</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <Warehouse className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">Hale Magazynowe</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <Factory className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">Przemysł Ciężki</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">
                    Parkingi Podziemne
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-sm">
                    Centra Logistyczne
                  </span>
                </div>
              </div>
            </div>

            {/* Karta "Pakiet Inwestora" (GATED CONTENT) */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
              {/* Ozdobne tło */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      Pakiet Weryfikacyjny
                    </h4>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Nie kupuj kota w worku. Zamów komplet dokumentów:
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-blue-50">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-300" />
                        Pełna Karta Techniczna (PDF)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-300" />
                        Case Study: Toi Toi Polska
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-300" />
                        Certyfikaty CE i Atesty
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 border-none font-semibold text-base py-6"
                  >
                    Odbierz Pakiet na E-mail
                  </Button>
                </div>
                <p className="text-[10px] text-blue-200 text-center sm:text-left opacity-80">
                  Dostępne natychmiastowo po wypełnieniu formularza.
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
                    Bezpośrednia dostawa wylewek przemysłowych z fabryki
                    Chemcolor Sevnica. Zapewnienie ciągłości dostaw i
                    optymalizacja kosztów zakupu materiału dla inwestora.
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
                  onClick={scrollToContact}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Zacznijmy współpracę
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Wypełnij formularz poniżej. To nic nie kosztuje, a otrzymasz
              konkretną ofertę dopasowaną do Twojej inwestycji w mniej niż 24
              godziny.
            </p>
          </div>

          {/* Kontener formularza */}
          <div className="text-slate-900">
            <ContactForm />
          </div>

          {/* Dodatkowe info pod formularzem */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-slate-400 text-sm border-t border-slate-800 pt-8">
            <div>
              <strong className="text-white block mb-1 text-base">
                1. Analiza
              </strong>
              Analizujemy Twoje zapotrzebowanie i metraż.
            </div>
            <div>
              <strong className="text-white block mb-1 text-base">
                2. Wycena
              </strong>
              Przygotowujemy ofertę z uwzględnieniem rabatów.
            </div>
            <div>
              <strong className="text-white block mb-1 text-base">
                3. Dostawa
              </strong>
              Organizujemy transport prosto na budowę.
            </div>
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
                    href="tel:+48000000000"
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>+48 [Twój Numer]</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kontakt@twojafirma.pl"
                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>kontakt@[twojadomena].pl</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>
                    [Twoja Ulica i Numer]
                    <br />
                    [Kod pocztowy] [Miasto]
                  </span>
                </li>
              </ul>
            </div>

            {/* Kolumna 3: Dane Rejestrowe (Ważne w PL!) */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Dane firmy</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="font-medium text-slate-900">
                  [PEŁNA NAZWA TWOJEJ JDG]
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  NIP: [Twój NIP]
                </li>
                {/* Opcjonalnie REGON lub KRS jeśli masz */}
                {/* <li>REGON: 000000000</li> */}
                <li className="mt-4">
                  Bank: [Nazwa Banku]
                  <br />
                  Nr konta: [XX XXXX XXXX ...]
                </li>
              </ul>
            </div>
          </div>

          {/* Pasek Dolny: Copyright i Linki Prawne */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} [Twoja Nazwa Firmy]. Wszelkie
              prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <Link
                href="/polityka-prywatnosci"
                className="hover:text-slate-900 transition-colors"
              >
                Polityka Prywatności
              </Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
