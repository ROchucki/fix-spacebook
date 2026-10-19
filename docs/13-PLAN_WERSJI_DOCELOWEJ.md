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
5. Rozwijać profile wykonawców, odpowiedzi na zlecenia i prywatne rozmowy zgodnie z zakresem MVP.
6. Wdrożyć zgłoszenia naruszeń, moderację i pomoc.
7. Przygotować aplikację Android, testy bezpieczeństwa, kopie zapasowe i odtworzenie; po zatwierdzeniu podłączyć hosting i wdrożyć pilotaż oraz przygotować wydanie Google Play.

## Zatwierdzony harmonogram orientacyjny

Źródło ustaleń: materiał Space `FIX_SPACEBOOK_PLAN_I_ZASADY_LLM_2026-10-08.md`, odczytany 2026-10-19. To cele z 8 października, nie potwierdzenie ukończenia etapów.

- Październik–listopad 2026: zakres pierwszego wydania, baza danych, logowanie i zasady dostępu.
- Grudzień 2026–luty 2027: zlecenia, profile wykonawców i odpowiedzi.
- Marzec–kwiecień 2027: rozmowy, zgłoszenia, moderacja i testy pełnego procesu.
- Maj–czerwiec 2027: aplikacja Android i pilotaż.
- Lipiec 2027: testy Google Play, poprawki i materiały sklepowe.
- Sierpień 2027: bufor na błędy i procedury publikacji.
- Cel premiery Google Play: 27 sierpnia 2027 r.

Data jest zatwierdzonym celem, nie gwarancją publikacji. Harmonogram aktualizujemy według rzeczywistego postępu. Przed publikacją sprawdzamy aktualne wymagania Google Play, testy, prywatność, bezpieczeństwo danych i usuwanie kont.

## Równoległe zaplecze i interfejs

Rozwój obejmuje również dokumentację, stronę informacyjną, prywatność, testy i wydania oraz obsługę platformy: zgłoszenia, moderację, pomoc i zarządzanie użytkownikami. FAQ, samouczek i nawigacja są rozwijane etapami. Planowany czat wsparcia nie jest potwierdzoną obsługą na żywo.

Materiał Space `FIX_SPACEBOOK_PLAN_DLA_LLM.md` zawiera referencje ikon i wariantów interfejsu oraz otwarte decyzje o kategoriach, ikonach i wsparciu. Nie jest dowodem wdrożenia. Nie nadpisujemy istniejących wariantów demo; wierne odtworzenie wyglądu wymaga właściwych zasobów lub zrzutów. Nie zmieniamy wyglądu w ramach poprawek dokumentacji.

## Decyzje do podjęcia

- Statusy zleceń i zasady publikacji.
- Limity długości tekstów.
- Zasady usuwania kont i danych.
- Retencja wiadomości i zgłoszeń.
- Uprawnienia moderatora.
- Waluta budżetu i proponowanej ceny; obecność PLN w interfejsie nie zastępuje zatwierdzenia zasad produktu.
- Obszar, kategorie, cele i mierniki pierwszego pilotażu.

## Role i aktualność dokumentów

- `PROJECT_CONTEXT.md`: bieżący potwierdzony stan, granice kontroli i punkt wznowienia.
- `03-LISTA_ZADAN_I_PRIORYTETY.md`: zadania, status implementacji i testu oraz otwarte pytania.
- Ten dokument: plan długoterminowy, harmonogram i istotne decyzje z datą i uzasadnieniem.
- `14-ZAKRES_MVP_I_DOSTEP.md`: zatwierdzone wymagania produktu i dostępu; nie potwierdza ich wdrożenia.
- `11-SKILLS_I_TRYBY_PRACY_AI.md`: sposób pracy AI/LLM, nie status funkcji produktu.
- `04-MAPA_PLIKOW_I_KATALOGOW.md`: rzeczywista mapa repo, nie załączników Space.
- Historia Git: zapis faktycznych zmian; rozmowa i plan nie zastępują commita ani testu.

Pliki Space są osobnymi źródłami, nie automatycznie plikami repo. `FIX_SPACEBOOK_STAN_DLA_LLM_2026-10-08.md` opisuje stan historyczny z 8 października; późniejsze wyniki go aktualizują. `PROJECT_CONTETX.md` dotyczy przestrzeni programistycznej, nie jest `docs/PROJECT_CONTEXT.md`. `FILE_MAP.md` w Space opisuje załączniki i wymaga osobnego porządku; nie zastępuje mapy repo.

Nie tworzymy konkurencyjnego planu ani kopii dokumentów LLM w repo. Porządkowanie lub usuwanie załączników Space jest osobną operacją; zmiana GitHub ich nie aktualizuje. Materiałów bez przejrzanej treści nie usuwamy.

## Koszty

Nie uruchamiamy płatnych usług bez osobnej zgody właściciela. Przed wyborem dostawcy sprawdzamy ceny, limity i warunki. Szczegółowy kosztorys i terminy wykonania zadań pozostają do uzgodnienia; orientacyjny harmonogram powyżej jest celem.

## Bezpieczeństwo i współpraca

Obowiązują `05-ZASADY_BEZPIECZENSTWA.md` oraz zasady AI/LLM w `11-SKILLS_I_TRYBY_PRACY_AI.md`. Materiał Space `ZASADY_WSPOLNEJ_PRACY.md` jest dostępny i został odczytany 2026-10-19; jego niedostępność pod ścieżką główną GitHub nie oznacza braku źródła w Space. Nie zapisujemy sekretów ani rzeczywistych danych użytkowników w repozytorium. Testujemy na danych fikcyjnych.

Zgodnie z ustaleniem z 8 października: zmiany ryzykowne, w tym logowanie, uprawnienia i zapis danych, testujemy od razu; drobne powiązane poprawki wspólnie po pakiecie 2–3 zmian. Dłuższa praca wymaga punktów kontrolnych. Nie wymagamy testu po każdej drobnej edycji ani nie odkładamy wszystkich testów na koniec.

Stan, zadania i granice weryfikacji przechowują `PROJECT_CONTEXT.md` oraz `03-LISTA_ZADAN_I_PRIORYTETY.md`. Zmiany demo, hostingu i Supabase wymagają osobno zatwierdzonego zakresu.
