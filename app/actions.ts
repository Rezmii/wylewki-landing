"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type IntentType = "quote" | "documents" | "collab";

type LeadData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  area: string;
  message: string;
  intent: IntentType;
};

export async function sendLeadMagnet(data: LeadData) {
  try {
    if (!data.email || !data.phone) {
      return { success: false, error: "Wymagane pola są puste." };
    }

    let emailSubject = "";
    let emailIntro = "";
    let adminSubject = "";

    switch (data.intent) {
      case "quote":
        emailSubject = "Twoja Wycena + Dokumentacja C-GUARD EP 304";
        emailIntro = `Dziękujemy za prośbę o wycenę. Twój opiekun techniczny przeanalizuje metraż (${data.area} m²) i wróci z ofertą w ciągu 24h. W międzyczasie przesyłam dokumentację techniczną produktu, o który pytasz.`;
        adminSubject = `🔥 LEAD WYCENA: ${data.company}`;
        break;

      case "documents":
        emailSubject = "Twoje dokumenty: C-GUARD EP 304 + Case Study";
        emailIntro = `Oto komplet dokumentów, o które prosiłeś. Znajdziesz tu karty techniczne oraz nasze Case Study z wdrożenia w Toi Toi Polska. Daj znać, jeśli będziesz potrzebować również wyceny materiału.`;
        adminSubject = `📄 POBRANIE PLIKÓW: ${data.company}`;
        break;

      case "collab":
        emailSubject = "Twoje zapytanie o realizację - Brezit / Chemcolor";
        emailIntro = `Dziękujemy za kontakt. Przeanalizujemy Twój projekt pod kątem technologicznym. W załączniku przesyłam Case Study z Toi Toi oraz specyfikację, abyś zobaczył, jakich standardów używamy.`;
        adminSubject = `💡 PYTANIE O REALIZACJĘ: ${data.company || "Nowy Klient"}`;
        break;

      default:
        emailSubject = "Dokumentacja C-GUARD EP 304";
        emailIntro = "Dziękujemy za kontakt. Przesyłamy zamówione materiały.";
        adminSubject = `NOWY LEAD: ${data.company}`;
    }
    await resend.emails.send({
      from: "Brezit Wylewki <biuro@wylewki-przemyslowe.pl>",
      to: data.email,
      subject: emailSubject,
      html: `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Dzień dobry, ${data.name}!</h2>
          <p>Dziękujemy za zainteresowanie systemami posadzkowymi Chemcolor.</p>
          <p>Poniżej przesyłam dostęp do pełnego <strong>Pakietu Weryfikacyjnego</strong>.</p>
          
         <p>${emailIntro}</p> <div style="background-color: #f1f5f9; border-left: 4px solid #2563eb; padding: 20px; margin: 25px 0;">
            <p style="margin-top: 0; font-weight: bold;">Do pobrania:</p>
            <ul style="padding-left: 20px;">
               <li style="margin-bottom: 10px;">
                 <a href="https://wylewki-przemyslowe.pl/dokumenty/Case-Study-Toi-Toi-Posadzki-Przemyslowe.pdf" style="color: #2563eb; font-weight: bold; text-decoration: none;">
                   📥 Case Study: Wdrożenie w Toi Toi Polska (Wariant z Płatkami)
                 </a>
               </li>
               <li style="margin-bottom: 10px;">
                 <a href="https://wylewki-przemyslowe.pl/dokumenty/chemcolor-c-guard-ep304-tds.pdf" style="color: #2563eb; font-weight: bold; text-decoration: none;">
                   📥 Karta Techniczna (TDS) - EP 304
                 </a>
               </li>
            </ul>
          </div>

         <div style="margin-bottom: 30px;">
            <p style="font-weight: bold; font-size: 14px; margin-bottom: 10px;">Certyfikacja Fabryki (ISO):</p>
            <p style="font-size: 13px; margin: 0;">
              <a href="https://wylewki-przemyslowe.pl/dokumenty/iso-9001-chemcolor.jpg" style="color: #475569; text-decoration: underline; margin-right: 15px;">
                📄 Zobacz Certyfikat ISO 9001 (Jakość)
              </a>
              <a href="https://wylewki-przemyslowe.pl/dokumenty/iso-14001-chemcolor.jpg" style="color: #475569; text-decoration: underline;">
                📄 Zobacz Certyfikat ISO 14001 (Eko)
              </a>
            </p>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
            <p style="font-size: 13px; color: #64748b;">
              <strong>Dodatkowe informacje o produkcie:</strong><br>
              Pełną specyfikację znajdziesz również na stronie producenta: 
              <a href="https://www.chemcolor.si/en/cguard-ep-304.html" target="_blank" style="color: #2563eb;">Chemcolor.si - C-Guard EP 304</a>
            </p>
            
           <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; color: #64748b; padding: 12px; font-size: 12px; border-radius: 6px; margin-top: 12px;">
              <strong style="color: #475569; margin-bottom: 10px;">ℹ️ Nota logistyczna:</strong><br>
              Fabryka Chemcolor Sevnica nie prowadzi sprzedaży detalicznej ani bezpośredniej wysyłki do Polski. 
              Wszelkie zamówienia i logistykę obsługuje wyłączne biuro partnerskie w Gdyni (Brezit). 
              Kontakt bezpośrednio z nami gwarantuje najszybszą realizację (bez przekierowywania przez centralę w Słowenii).
            </div>
          </div>

          <p style="margin-top: 30px;"><strong>Co dalej?</strong></p>
          <p>Twój opiekun techniczny przeanalizuje przesłane parametry (Metraż: ${data.area} m²) i skontaktuje się w ciągu 24h z wstępną kalkulacją.</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          
          <p style="font-size: 12px; color: #94a3b8;">
            <strong>Brezit Bartosz Rezmer</strong><br>
            Oficjalny Partner Chemcolor Sevnica<br>
            Tel: +48 724 537 326
          </p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "Brezit Wylewki <biuro@wylewki-przemyslowe.pl>",
      to: "bartoszrezmer20@gmail.com",
      subject: adminSubject,
      html: `
        <h3>Masz nowego potencjalnego klienta!</h3>
        <ul>
          <li><strong>Firma:</strong> ${data.company}</li>
          <li><strong>Osoba:</strong> ${data.name}</li>
          <li><strong>Metraż:</strong> ${data.area} m²</li>
          <li><strong>Telefon:</strong> <a href="tel:${data.phone}">${data.phone}</a></li>
          <li><strong>Email:</strong> ${data.email}</li>
        </ul>
        <p><strong>Wiadomość dodatkowa:</strong><br>${data.message}</p>
        <p style="color: red; font-weight: bold;">Zadzwoń do nich jak najszybciej!</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Błąd wysyłania maila:", error);
    return { success: false, error: "Błąd serwera. Spróbuj ponownie później." };
  }
}
