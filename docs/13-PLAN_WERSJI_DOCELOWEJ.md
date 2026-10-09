# Fix&Spacebook — plan wersji docelowej

Data ustalenia: 2026-10-06

## Status

Zatwierdzono budowę aplikacji docelowej etapami.
Dokument 02-ZAKRES_PIERWSZEJ_WERSJI.md opisuje wcześniejszy
etap przygotowania dokumentacji.

Działające demo znajduje się w osobnym repozytorium:
ROchucki/fix-spacebook-frontend-demo
Ostatni potwierdzony commit demo: 2bd7b14.

## Kolejność realizacji

1. Ustalenie zakresu produktu i zasad dostępu do danych.
2. Wybór backendu, bazy danych oraz hostingu.
3. Konta użytkowników i kontrola uprawnień.
4. Zapis zleceń i ofert wykonawców.
5. Wyświetlanie danych oraz obsługa błędów.
6. Odpowiedzi na zlecenia, prywatne rozmowy oraz zgłoszenia naruszeń i moderacja.
7. Testy bezpieczeństwa, kopie zapasowe i wdrożenie.

## Koszty

Na etapie przygotowania nie uruchamiamy płatnych usług.
Każda płatna usługa wymaga osobnej zgody właściciela projektu.
Przed wyborem dostawcy sprawdzamy ceny, limity i warunki.

## Bezpieczeństwo

Obowiązuje dokument 05-ZASADY_BEZPIECZENSTWA.md.
Nie zapisujemy sekretów ani rzeczywistych danych użytkowników
w repozytorium.
Do testów używamy danych fikcyjnych.

## Najbliższe zadanie

Podstawowe pola i zasady dostępu zatwierdzono
w docs/14-ZAKRES_MVP_I_DOSTEP.md dnia 2026-10-06.

Do ustalenia pozostają:
- Statusy zleceń i zasady publikacji.
- Limity długości tekstów.
- Zasady usuwania kont i danych.
- Retencja wiadomości i zgłoszeń.
- Uprawnienia moderatora.
- Waluta budżetu i proponowanej ceny.

Supabase wybrano jako backend i bazę danych.
Obsługę kont zapisano w commicie 5b44859 na main 2026-10-09.
Kod obejmuje rejestrację, logowanie, odczyt sesji i wylogowanie.
Właściciel potwierdził działanie zmian w lokalnej przeglądarce.
Następny etap: sprawdzenie konfiguracji bazy i zasad dostępu
oraz trwały zapis i odczyt zleceń.
Nie zweryfikowano jeszcze uprawnień ani reguł RLS.
Hosting aplikacji pozostaje do ustalenia.
Płatne usługi wymagają osobnej zgody właściciela.
