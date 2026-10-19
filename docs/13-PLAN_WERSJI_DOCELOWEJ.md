# Fix&Spacebook — plan wersji docelowej

Data ustalenia: 2026-10-06. Aktualizacja: 2026-10-19.

## Status

Zatwierdzono budowę aplikacji docelowej etapami. Dokument `02-ZAKRES_PIERWSZEJ_WERSJI.md` opisuje wcześniejszy etap przygotowania dokumentacji. Zakres MVP i zasady dostępu zatwierdzono 2026-10-06 w `14-ZAKRES_MVP_I_DOSTEP.md`.

Główna aplikacja znajduje się w `ROchucki/fix-spacebook`, na gałęzi `main`. Stan implementacji opisany poniżej odnosi się do kodu z commita `f39b3ae`, nie do osobnego demo.

Demo znajduje się w `ROchucki/fix-spacebook-frontend-demo`. Punkt odniesienia: `demo-baseline-2026-10-07`; ostatni historycznie odnotowany commit: `2bd7b14`. Bieżącego działania i stanu demo nie sprawdzono podczas tej kontroli.

## Implementacja a potwierdzenie działania

- Supabase wybrano jako backend i bazę danych.
- Kod kont zapisano w commicie `5b44859` z 2026-10-09: rejestracja, logowanie, sesja i wylogowanie. Wcześniejszy punkt kontrolny odnotowuje potwierdzenie właściciela w lokalnej przeglądarce; testu nie powtórzono podczas tej kontroli.
- W `app.js`, commit `f39b3ae`, istnieje wysyłanie zlecenia do `jobs` po sprawdzeniu zalogowania, obsługa błędów i zwracanie ID.
- Formularz wykonawcy tworzy testowy podgląd oferty; nie zapisuje jej do bazy.
- Nie zweryfikowano schematu tabel, automatycznego przypisania właściciela i daty, RLS, trwałości danych ani odczytu zapisanych zleceń.
- Nie potwierdzono pełnego procesu odpowiedzi, prywatnych rozmów i moderacji ani gotowości do publikacji.

## Hosting

Informacja właściciela odnotowana w przekazanym pakiecie z 2026-10-19: hosting jest przygotowany, lecz podpięcie i wdrożenie pozostają wstrzymane. Konfiguracji dostawcy nie zweryfikowano. Zastępuje to wcześniejszy wpis o hostingu pozostającym do ustalenia; nie jest potwierdzeniem publicznego wdrożenia.

## Kolejność realizacji

1. Domknąć dokumentację i brakujące decyzje dotyczące produktu oraz dostępu do danych.
2. Sprawdzić rzeczywisty schemat `jobs`, właściciela, datę i RLS.
3. Potwierdzić zapis, trwałość, odczyt oraz uprawnienia z różnych kont.
4. Wdrożyć i przetestować trwały zapis ofert wykonawców oraz wyświetlanie danych i obsługę błędów.
5. Rozwijać odpowiedzi na zlecenia i prywatne rozmowy zgodnie z zakresem MVP.
6. Wdrożyć zgłoszenia naruszeń i moderację.
7. Wykonać testy bezpieczeństwa, kopii zapasowej i odtworzenia; dopiero po zatwierdzeniu podłączyć hosting i wdrożyć pilotaż.

## Decyzje do podjęcia

- Statusy zleceń i zasady publikacji.
- Limity długości tekstów.
- Zasady usuwania kont i danych.
- Retencja wiadomości i zgłoszeń.
- Uprawnienia moderatora.
- Waluta budżetu i proponowanej ceny; obecność PLN w interfejsie nie zastępuje zatwierdzenia zasad produktu.
- Obszar, kategorie, cele i mierniki pierwszego pilotażu.

## Koszty

Nie uruchamiamy płatnych usług bez osobnej zgody właściciela. Przed wyborem dostawcy sprawdzamy ceny, limity i warunki. Harmonogram i koszty pozostają do uzgodnienia.

## Bezpieczeństwo i współpraca

Obowiązują `05-ZASADY_BEZPIECZENSTWA.md` oraz zasady AI/LLM w `11-SKILLS_I_TRYBY_PRACY_AI.md`. Nie zapisujemy sekretów ani rzeczywistych danych użytkowników w repozytorium. Testujemy na danych fikcyjnych.

Stan, zadania i granice weryfikacji przechowują `PROJECT_CONTEXT.md` oraz `03-LISTA_ZADAN_I_PRIORYTETY.md`. Zmiany demo, hostingu i Supabase wymagają osobno zatwierdzonego zakresu.
