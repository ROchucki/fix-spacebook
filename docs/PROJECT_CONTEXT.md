# Fix&Spacebook — punkt kontrolny
Data: 2026-10-09

## Produkt
Platforma usług lokalnych. Start w Polsce, docelowo kolejne rynki.
Docelowo ma łączyć klientów z osobami i firmami wykonującymi usługi.
Nie jest osobistą bazą wiedzy ani przestrzenią programisty.

## Repozytoria
Główne:
git@github.com:ROchucki/fix-spacebook.git
Lokalnie: ~/fix-spacebook

Demo frontendu:
https://github.com/ROchucki/fix-spacebook-frontend-demo.git
Lokalnie: ~/fix-spacebook-frontend-demo

## Ostatni sprawdzony stan Git
Główne repo:
- Gałąź main; commit na GitHub: 5b44859.
- Obsługa kont Supabase i aktualizacja frontendu.
- Commit i push potwierdzono 2026-10-09.
- Lokalnie zmienione: dokumenty 12, 13, INVESTOR_ONE_PAGER i PROJECT_CONTEXT.
- Nieśledzone: ikony i kopie frontendu. Nie dodawać bez osobnej zgody.

Demo:
- Lokalnie HEAD i origin/main: 2bd7b14. Bez ponownego sprawdzenia GitHub.
- Commit: Popraw polskie znaki, dodaj ikony i wyrownaj przyciski.

## Struktura głównego repo
README.md
docs/
frontend/
backend/
infra/
tests/

Frontend:
- index.html
- app.js
- auth.js
- supabase-config.js
- style.css
- README.md
- lokalne kopie .bak

Nie odczytano zawartości backend/, infra/ ani tests/.
Nie zakładać, że backend działa.

## Potwierdzone w kodzie frontendu
- Strona startowa i kategorie usług.
- Formularz zlecenia klienta.
- Kategoria, opis, lokalizacja, opcjonalny budżet.
- Minimum 20 znaków opisu.
- Podpowiedzi opisu zależne od kategorii.
- Otwieranie i zamykanie formularza wykonawcy.
- Nazwa wykonawcy, kategoria, lokalizacja,
  promień dojazdu i opis oferty.
- Walidacja formularzy.
- Testowy podgląd nazwy wykonawcy.

## Supabase — główna aplikacja
- Kod kont: rejestracja, logowanie, sesja i wylogowanie.
- Zapisano na GitHub w commicie 5b44859.
- Właściciel potwierdził działanie lokalne w przeglądarce.
- Konfiguracja używa publicznego klucza publishable.
- Tabele, uprawnienia i RLS nie zostały zweryfikowane.
- Nie potwierdzono trwałego zapisu i odczytu zleceń.
- Hosting do ustalenia; push nie potwierdza wdrożenia.

## Ograniczenia demo
Dane nie są zapisywane ani wysyłane na serwer.
Aktualny zakres podglądu oferty wymaga sprawdzenia w demo.
Nie potwierdzono kont, bazy danych, odpowiedzi na zlecenia
ani rzeczywistego łączenia klientów z wykonawcami.
Nie potwierdzono adresu działającego demo online.
Zawartości obu frontendów nie porównano.

## Dokumentacja — stan i pozostałe kontrole
- docs/01-WIZJA_PROJEKTU.md
- docs/02-ZAKRES_PIERWSZEJ_WERSJI.md
- docs/03-LISTA_ZADAN_I_PRIORYTETY.md
- Dokument 01 opisuje platformę usług; dokument 02 doprecyzowano jako etap przygotowawczy; dokument 03 zawiera aktualną checklistę. Nie traktować ich jako dawnych zaległości.

- docs/12-UWAGI_DO_FRONTENDU.md:
  obie poprawki P1 wykonane i wypchnięte według autora;
  minimum 20 znaków i podpowiedzi potwierdzone w kodzie.

- frontend/index.html: aktualność dawnej uwagi o sekcji „Następny etap” wymaga sprawdzenia.

## Dokument inwestorski

Opis projektu znajduje się w docs/INVESTOR_ONE_PAGER.md.
Sprawdzono jego treść 2026-10-07: dotyczy platformy usług.
Dodano odniesienie do zatwierdzonego zakresu MVP
oraz prywatne rozmowy.
Nie kopiujemy plików spoza repo bez sprawdzenia treści.

## Następny etap

1. Domknąć dokumentację i sprawdzić różnice czterech dokumentów.
2. Po zgodzie wykonać commit i push dokumentacji.
3. Odczytać docs/14-ZAKRES_MVP_I_DOSTEP.md i kod aplikacji.
4. Sprawdzić konfigurację bazy, uprawnienia i RLS.
5. Wdrożyć i przetestować trwały zapis i odczyt zleceń.
6. Następnie rozwijać odpowiedzi i prywatne rozmowy.

Bez osobnej zgody nie zmieniać demo ani ustawień produkcyjnych.
Dokumentacja pozostaje lokalna do osobnego commita i push.
