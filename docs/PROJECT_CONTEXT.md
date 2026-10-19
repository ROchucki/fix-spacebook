# Fix&Spacebook — punkt kontrolny

Aktualizacja: 2026-10-19.

## Produkt i repozytoria

Platforma usług lokalnych dla osób prywatnych i gospodarstw domowych; wykonawcami mogą być osoby i firmy. Start w Polsce, docelowo kolejne rynki europejskie i światowe. Zasięg globalny jest celem, nie obecną dostępnością. Docelowo web i Android, nie osobista baza wiedzy.

- Główne repo: `ROchucki/fix-spacebook`, `main`, lokalnie `~/fix-spacebook`.
- Osobne demo: `ROchucki/fix-spacebook-frontend-demo`; historyczna ścieżka `~/fix-spacebook-frontend-demo`.
- Punkt odniesienia demo: `demo-baseline-2026-10-07`; historyczny commit `2bd7b14`. Bieżącego demo nie sprawdzono ani nie zmieniono.
- Android i Termux bez roota. Podgląd: `../frontend/README.md`; sesja Git: `06-START_W_TERMUXIE.md`.

## Raport odniesienia i historia napraw

Właściciel przekazał w rozmowie pełny „Raport audytu Fix&Spacebook”, wersja 1.0, z 2026-10-19. To źródło zakresu D01–D10, K01–K10 i B01–B06. Wcześniejsze wpisy o braku raportu są nieaktualne. Nie tworzymy kolejnego pliku raportu. Rozliczenie znajduje się w dokumencie 03.

Potwierdzone zapisy na GitHub:
- `9faa15c`: siedem istniejących plików — `.gitignore`, oba README, dokumenty 03, 04 i 11 oraz punkt kontrolny.
- `d4a92bc`: dokument 13, opis inwestorski, dokument 03 i punkt kontrolny.
- `9c4b5df`: dokumenty 06, 13 i 14; harmonogram LLM i bezpieczny przebieg sesji Git.
- `ee32711`: `frontend/app.js` i `frontend/index.html`; separator wyszukiwania, teksty i Status MVP.

Bieżący pakiet konsoliduje wyłącznie wskazane reguły CSS oraz aktualizuje dokumenty 03 i ten punkt kontrolny. Nie przypisujemy mu z góry numeru commita ani potwierdzenia zapisu. Weryfikacja następuje po zapisie zatwierdzonej treści.

## Implementacja i granice testów

Kod integracji kont: historyczny commit `5b44859`; wysyłanie zleceń: `f39b3ae`. Późniejszy frontend: `ee32711`.

- HTML, CSS i JavaScript; kategorie, podkategorie i filtrowanie kart kategorii, nie wyszukiwarka zapisanych ogłoszeń.
- Formularz zlecenia: kategoria, opis minimum 20 znaków, miejscowość, opcjonalna dzielnica i budżet. Dzielnica pochodzi z tekstu po pierwszym przecinku lokalizacji.
- Podpowiedzi zależne od kategorii. Polskie etykiety opcji mają zachowane dotychczasowe wartości kategorii.
- Kod kont Supabase: rejestracja, logowanie, sesja i lokalne wylogowanie.
- Wysłanie do `jobs` po `getUser()`, obsługa błędów i zwrot ID przez `insert(...).select("id").single()`.
- Oferta wykonawcy: lokalny podgląd nazwy, kategorii, lokalizacji, dojazdu i opisu; bez zapisu do bazy.
- Wybrana podusługa pozostaje komunikatem; nie dodano niezweryfikowanej kolumny do zapisu.

Historyczne potwierdzenie działania kont przez właściciela nie jest nowym testem. Wydzielona logika normalizacji, dzielenia i dopasowania wyszukiwania przeszła 12 asercji w Node.js v20.20.1. Nie był to test całego `app.js`, DOM ani przeglądarki.

Dla przygotowanej konsolidacji CSS wykonano 84 porównania deklaracji wybranych selektorów w modelu kaskady: 12 elementów przy szerokościach 320, 360, 440, 441, 600, 760 i 1120 px. To kontrola modelowa, nie renderowanie ani dowód braku regresji wizualnej. Pozostałe reguły zachowano; usunięto nadpisane warianty przycisków i nagłówków konta oraz nieaktywny wariant pseudoelementu logo.

Nie potwierdzono rzeczywistego schematu `jobs`, właściciela, daty, statusu, RLS, trwałości i odczytu z różnych kont. Nie ma potwierdzonego pełnego procesu odpowiedzi, rozmów i moderacji. Brak listy zapisanych zleceń w sprawdzonym `app.js`. Gotowość do publikacji pozostaje niepotwierdzona.

## Technologia, zależności i hosting

Supabase jest wybranym backendem i bazą. `auth.js` nadal importuje `https://esm.sh/@supabase/supabase-js@2`. Odczyt tego adresu podczas kontroli zwrócił moduł wskazujący `2.110.7`. Nie jest to dowód wersji wcześniej załadowanej na telefonie ani test zgodności; nie zmieniono importu bez testu integracji. K10 pozostaje otwarte.

Przekazany pakiet odnotowuje informację właściciela z 2026-10-19: hosting przygotowany, podpięcie i wdrożenie wstrzymane. Konfiguracji nie zweryfikowano. Push nie dowodzi wdrożenia.

Konektor Supabase podczas końcowej kontroli miał status DISCONNECTED. Bez połączenia nie potwierdzamy schematu, polityk ani uprawnień. Nie tworzymy migracji na podstawie domysłów i nie zmieniamy produkcji.

Według raportu `backend/`, `infra/` i `tests/` zawierały tylko README; nie odczytano ich ponownie podczas tej kontroli. Nie jest to potwierdzenie zestawu migracji lub testów.

## Git lokalny

Według przekazanego wyniku z 2026-10-19: `main`, HEAD i zapamiętane `origin/main` wskazywały `f39b3ae`, bez zmian śledzonych plików i indeksu. Nieśledzone: `=`, `frontend/icons/`, `.backup-*` i `.before-*`. Treści nie sprawdzono. To stan historyczny, nie nowy odczyt telefonu. Nie dodawać ani nie usuwać tych plików automatycznie. Zmiany GitHub nie synchronizują samoczynnie Termuxa.

## Źródła LLM i porządek Space

Odczytano materiały Space: `ZASADY_WSPOLNEJ_PRACY.md`, `FIX_SPACEBOOK_PLAN_I_ZASADY_LLM_2026-10-08.md`, `FIX_SPACEBOOK_PLAN_DLA_LLM.md` i `FIX_SPACEBOOK_STAN_DLA_LLM_2026-10-08.md`. Brak pliku zasad pod ścieżką główną GitHub nie oznacza braku źródła w Space.

Harmonogram z 8 października i cel Google Play 27 sierpnia 2027 r. są utrwalone w dokumencie 13 jako cele, nie dowód wykonania. Dokument 14 przechowuje wymagania, dokument 03 zadania i statusy, dokument 11 sposób pracy LLM, ten plik bieżący stan, a Git historię zapisów.

Dodatkowa kontrola załączników wykazała:
- `PROJECT_CONTETX.md`: kontekst przestrzeni programistycznej, nie stan produktu.
- `TODO.md`: ogólna kolejka przestrzeni; nie zastępuje backlogu aplikacji.
- `PROMPTS.md`: ogólne szablony, nie dowód istnienia nazwanych w nich plików.
- `FILE_MAP.md`: mapa Space wymaga aktualizacji; wymienia m.in. `REPO_LINKS.md`, którego nie było na odczytanej liście.
- Trzy pliki „Fix&Spacebook — checklista ustaleń_2100400601150117796” (bez sufiksu, z `-1` i `-2`) zawierają powtórzoną checklistę z 17 października. Jedno źródło wystarcza do odczytu ustaleń; nie usunięto żadnej kopii.
- Dwa pliki `3c53f852-cddb-42f4-a03c-7ded89fd7aa2*.md` dotyczą komunikatorów; wariant `-1` zawiera dodatkową część. Nie są identycznymi kopiami ani planem produktu; zachowano je.
- `FIX_SPACEBOOK_WIKI_I_GOOGLE_PLAY_2026-10-08.md`: wiki odłożona, nie jest warunkiem pierwszego wydania; na teraz Pomoc i FAQ. Wylogowanie nie zastępuje usunięcia konta.

Checklista z 17 października opisuje osobny plan zamkniętych testów z zaproszeniami i czasowym dostępem, bez wymogu e-maila i telefonu na tym etapie. Nie znosi automatycznie zasad kont głównego MVP. Zaproszenia, analityka i rozszerzone poziomy weryfikacji nie są potwierdzonymi funkcjami. Nie publikujemy danych administratora ani treści załączników w repo tylko dlatego, że zostały odczytane.

Narzędzia tej sesji pozwalają odczytać Project Files, lecz nie udostępniają zapisu, podmiany ani usuwania załączników Space. Analiza porządku została wykonana; faktyczna aktualizacja i deduplikacja Space pozostaje zablokowana narzędziowo. Zapis GitHub tego nie wykonuje.

## Dalszy punkt wznowienia

1. Po zatwierdzonym zapisie sprawdzić zakres i treść bieżącego pakietu.
2. Wykonać test przeglądarkowy po zmianach frontendu i CSS.
3. Po uzyskaniu połączenia Supabase odczytać schemat i RLS; rozstrzygnąć podusługę, właściciela, datę i status, potem testować zapis, trwałość i odczyt z różnych kont.
4. Przypiąć dokładną wersję biblioteki po sprawdzeniu integracji.
5. Zaktualizować istniejące załączniki Space, gdy będzie dostępna operacja zapisu; nie generować zastępczego pliku do ręcznej podmiany.

Cały audyt nie jest zakończony. Demo, hosting, lokalne kopie i produkcyjna konfiguracja pozostają nietknięte.
