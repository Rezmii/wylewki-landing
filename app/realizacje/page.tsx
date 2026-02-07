"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Printer,
  ArrowLeft,
  Building2,
  Truck,
  ShieldCheck,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CaseStudyPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 print:bg-white">
      {/* --- NAWIGACJA (Ukryta w druku) --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 px-6 py-4 print:hidden">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </Link>
          <Button onClick={handlePrint} variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Pobierz jako PDF / Drukuj
          </Button>
        </div>
      </nav>

      {/* --- GŁÓWNA TREŚĆ DOKUMENTU (A4 Style) --- */}
      <main className="max-w-[210mm] mx-auto bg-white my-8 p-12 shadow-2xl print:shadow-none print:m-0 print:p-0 print:w-full">
        {/* HEADER DOKUMENTU */}
        <header className="flex justify-between items-end border-b-2 border-slate-900 pb-6 mb-8">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              CASE STUDY: WDROŻENIE PRZEMYSŁOWE
            </p>
            <h1 className="text-3xl font-black text-slate-900 leading-tight">
              Systemy Posadzkowe <br />
              <span className="text-blue-600">w Produkcji Modułowej</span>
            </h1>
          </div>
          <div className="text-right">
            <Image
              src="/toi-toi-logo.png"
              width={80}
              height={40}
              alt="Toi Toi Logo"
              className="object-contain ml-auto mb-2"
            />
            <p className="text-xs text-slate-500 font-medium">
              Lider branży rozwiązań sanitarnych
            </p>
          </div>
        </header>

        {/* METRYKA PROJEKTU */}
        <div className="grid grid-cols-3 gap-6 mb-10 p-6 bg-slate-50 rounded-xl border border-slate-100 print:bg-slate-50">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">
              Klient
            </p>
            <p className="font-bold text-slate-900">
              Toi Toi Polska Sp. z o.o.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">
              Zastosowanie
            </p>
            <p className="font-bold text-slate-900">
              Kontenery Sanitarne i Biurowe
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">
              System Chemcolor
            </p>
            <p className="font-bold text-blue-600">C-GUARD® EP 304</p>
          </div>
        </div>

        {/* TREŚĆ GŁÓWNA - DWIE KOLUMNY */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* LEWA: WYZWANIE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-lg text-red-600 print:border print:border-red-200">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Wyzwanie</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
              Klient poszukiwał rozwiązania posadzkowego dedykowanego do
              budownictwa modułowego, które wyeliminuje typowe problemy
              eksploatacyjne:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-slate-700">
                <span className="font-bold text-red-500">01.</span>
                <span>
                  <strong>Ryzyko pęknięć w transporcie:</strong> Moduły
                  kontenerowe "pracują" podczas załadunku HDS. Kruche posadzki
                  mineralne ulegałyby uszkodzeniu.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <span className="font-bold text-red-500">02.</span>
                <span>
                  <strong>Estetyka i Higiena:</strong> Wymagana powierzchnia
                  łatwa do dezynfekcji, odporna na środki chemiczne i maskująca
                  ślady eksploatacji.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <span className="font-bold text-red-500">03.</span>
                <span>
                  <strong>Logistyka Produkcji:</strong> Konieczność
                  zabezpieczenia ciągłości produkcji poprzez terminowe dostawy
                  dużych partii materiału.
                </span>
              </li>
            </ul>
          </div>

          {/* PRAWA: ROZWIĄZANIE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg text-green-600 print:border print:border-green-200">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Rozwiązanie</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 text-justify">
              Jako oficjalny partner Chemcolor, wdrożyliśmy model{" "}
              <strong>Bezpośredniego Importu</strong>. Dostarczyliśmy system
              epoksydowy C-GUARD® EP 304 w wariancie z płatkami dekoracyjnymi.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>
                  <strong>Wytrzymałość Mechaniczna:</strong> Żywica epoksydowa
                  tworzy spójną powłokę polimerową, która doskonale znosi
                  wibracje i obciążenia punktowe.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>
                  <strong>Wariant DECO (Płatki):</strong> Bezspoinowa,
                  nienasiąkliwa powierzchnia epoksydowa ułatwia codzienne mycie
                  i dezynfekcję. Dodatek płatków dekoracyjnych podnosi walory
                  wizualne i maskuje ślady eksploatacji.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>
                  <strong>Dostawa Bezpośrednia:</strong> Szybki transport
                  materiału bezpośrednio z fabryki w Słowenii do zakładu Toi
                  Toi, eliminując marże pośredników i postoje.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* WIZUALIZACJA I SPECYFIKACJA */}
        <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-8 print:gap-4 mb-12 print:break-inside-avoid">
          {/* LEWA: SPECYFIKACJA */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl print:bg-slate-900 print:text-white md:col-span-7 print:col-span-7">
            <h4 className="font-bold text-lg mb-6 flex items-center gap-5">
              <FileText className="h-8 w-8 text-blue-400" />
              Specyfikacja Dostarczonego Systemu
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">Produkt Bazowy</span>
                <span className="font-bold">C-GUARD® EP 304</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">Typ</span>
                <span className="font-bold">Epoksyd bezrozpuszczalnikowy</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">Wykończenie</span>
                <span className="font-bold">Zasyp Płatkami</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">Wytrzymałość (Ściskanie)</span>
                <span className="font-bold text-green-400">{">"} 45 MPa</span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">Przyczepność</span>
                <span className="font-bold text-green-400">{">"} 1.5 MPa</span>
              </div>
            </div>
          </div>

          {/* PRAWA: PLACEHOLDER NA ZDJĘCIE */}
          <div className="relative h-full min-h-[250px] bg-slate-200 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-slate-300 md:col-span-5 print:col-span-5">
            <Image
              src="/ep304.jpg"
              fill
              className="object-cover"
              alt="Struktura płatków"
            />
          </div>
        </div>

        {/* PODSUMOWANIE / FOOTER */}
        <div className="border-t border-slate-200 pt-8 print:break-inside-avoid">
          <h4 className="font-bold text-slate-900 mb-2">
            Podsumowanie Wdrożenia
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Zastosowanie systemu C-GUARD® EP 304 w wariancie dekoracyjnym
            pozwoliło uzyskać trwałą, szczelną i estetyczną powłokę, spełniającą
            wymogi sanitarne klienta. Model bezpośredniego importu zabezpieczył
            proces produkcyjny na nadchodzący sezon przy jednoczesnej
            optymalizacji procesu zakupowego.
          </p>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold">
                Dostawca Technologii
              </p>
              <div className="font-black text-slate-900 text-lg">BREZIT</div>
              <p className="text-xs text-slate-500">
                Partner Chemcolor Sevnica
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 uppercase font-bold">
                Kontakt
              </p>
              <p className="text-sm font-bold text-blue-600">
                www.wylewki-przemyslowe.pl
              </p>
              <p className="text-sm text-slate-600">+48 724 537 326</p>
            </div>
          </div>
        </div>
      </main>

      <div className="h-12 bg-white print:hidden"></div>
    </div>
  );
}
