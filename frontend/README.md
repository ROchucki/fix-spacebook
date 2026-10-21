# Frontend Fix&Spacebook

## Technologia i pliki

Interfejs korzysta z HTML, CSS i JavaScript, bez etapu budowania.
- `index.html` — ekran startowy, kategorie, formularze, konto i pomoc.
- `style.css` — style i uklady mobilne.
- `app.js` — kategorie, formularze, zapis zlecenia i testowy podglad oferty.
- `auth.js` — rejestracja, logowanie, sesja i wylogowanie Supabase.
- `supabase-config.js` — adres projektu i publiczny klucz publishable; nigdy klucz administracyjny.
- `presentation.js` — pokazowe ogloszenia, szczegoly w oknie dialogowym, przewijanie, przelaczanie motywu i lokalny podglad zdjec.
- `presentation.css` — style warstwy prezentacyjnej.

## Podglad lokalny w Termuxie

Wymagany Python 3. Jesli jest dostepny:

```bash
cd ~/fix-spacebook/frontend
python -m http.server 8000 --bind 127.0.0.1
```

Otworz `http://127.0.0.1:8000` na tym samym telefonie. Serwer zatrzymasz przez Ctrl+C. Podglad lokalny nie jest publicznym wdrozeniem. Konta i zapis wymagaja internetu; `auth.js` pobiera biblioteke z esm.sh i laczy sie z Supabase.

## Stan i ograniczenia

Kod kont i wysylania zlecen do tabeli `jobs` istnieje. Nie oznacza to potwierdzenia poprawnosci konfiguracji bazy, RLS ani trwalosci danych. Formularz wykonawcy tworzy tylko podglad, bez zapisu do bazy. Nie ma tu kompletnego procesu odpowiedzi i prywatnej rozmowy ani gotowej wersji PWA/APK.

Biezacy punkt kontrolny: `../docs/PROJECT_CONTEXT.md`. Zakres MVP: `../docs/14-ZAKRES_MVP_I_DOSTEP.md`. Osobne repo demo: `ROchucki/fix-spacebook-frontend-demo`; nie nalezy utozsamiac jego stanu z tym katalogiem.

## Kontrola warstwy prezentacyjnej — 2026-10-21

Odczytano `presentation.js` na GitHub. Skrypt tworzy szesc przykladowych ogloszen i nie pobiera ich z bazy. Przyciski szczegolow otwieraja dialog; przelacznik zmienia jasny i ciemny motyw, a przycisk wszystkich ogloszen zmienia uklad listy.

Podglad zdjec przyjmuje maksymalnie szesc plikow JPEG, PNG lub WebP do 10 MB kazdy. Uzywa lokalnych adresow obiektowych; nie wysyla zdjec do Supabase i nie zachowuje ich po odswiezeniu. Nie jest to upload zdjec do ogloszenia.

Byla to kontrola kodu, nie test w przegladarce ani test calego procesu. Nie potwierdzono renderowania na telefonie, dzialania kont, zapisu i odczytu zlecen, RLS ani wdrozenia. Punkt kontrolny z 19 pazdziernika nie opisuje jeszcze wszystkich pozniejszych zmian.

Kolejne kontrole: test przegladarkowy motywow, przewijania, dialogu i zdjec; nastepnie odczyt rzeczywistego schematu i RLS Supabase przed implementacja listy prawdziwych zlecen. Nie tworzyc kolumn ani zasad dostepu na podstawie domyslow.
