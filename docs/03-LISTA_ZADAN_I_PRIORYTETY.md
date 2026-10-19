# Lista zadań i priorytety — Fix&Spacebook

Aktualizacja: 2026-10-19.

## Statusy

- Planowane: brak potwierdzonej implementacji.
- Zaimplementowane: kod lub dokument istnieje; test ma osobny status.
- Przetestowane: tylko wskazany zakres i rzeczywiście wykonana kontrola.
- Zablokowane: podana konkretna przeszkoda.
- Wycofane: wymaga decyzji; nie stosujemy jako zamiennika pominięcia zadania.

`[x]` dotyczy wyłącznie opisanego potwierdzonego zakresu. Commit, test i wdrożenie są odrębne. Główna aplikacja i osobne demo mają osobne statusy. Zakres produktu: dokument 14; plan i decyzje: dokument 13; stan: `PROJECT_CONTEXT.md`.

## Rozliczenie raportu 1.0 przekazanego 2026-10-19

| Pozycje | Stan naprawy | Weryfikacja i ograniczenia |
|---|---|---|
| D01, D03, D04, D05, D06, D08, D09 | Zaimplementowane w dokumentacji: `9faa15c`, `d4a92bc` | Potwierdzono commity i listy plików; poprawiono opis aplikacji/demo, stan, mapę, README i nagłówek inwestorski. Nie jest to test funkcji. |
| D02 | Zaimplementowane: `9faa15c`, `9c4b5df` | Supabase wskazano jako wybrane także w dokumencie 14; integracja nadal niezweryfikowana. |
| D07 | Bieżący dokument rozdziela status implementacji i testu | Stan zapisu bieżącej poprawki wymaga kontroli po commicie. |
| D10, pakiet B | Częściowo zaimplementowane: harmonogram i role dokumentów w `9c4b5df` | Odczytano źródła LLM i późniejsze ustalenia; aktualizacja samych załączników Space zablokowana brakiem narzędzia zapisu. |
| K01 | Zaimplementowane w `ee32711` | 12 asercji wydzielonej logiki wyszukiwania w Node.js przeszło; test całego DOM/przeglądarki niewykonany. |
| K02 | Zablokowane | Przed zapisem podusługi trzeba odczytać rzeczywisty schemat `jobs`; nie dodano pola w ciemno. |
| K03, K04 | Zablokowane | Supabase DISCONNECTED; brak testu właściciela, daty, statusu, RLS i zwrotu ID po zapisie. |
| K05, K06 | Ograniczenia jawnie opisane | Brak dalszego procesu i zapisu ofert nie został usunięty; pozostaje planem MVP, nie „naprawioną” funkcją. |
| K07, K09 | Zaimplementowane w `ee32711` | Status MVP i polskie teksty poprawione; wartości kategorii zachowane. Test wyglądu i całej aplikacji niewykonany. |
| K08 | Przygotowana konsolidacja CSS w bieżącym pakiecie | 84 modelowe porównania deklaracji wybranych selektorów przy siedmiu szerokościach przeszły. Brak renderowania i testu wizualnego. |
| K10 | Otwarte | `auth.js` nadal używa `@2`; odczyt esm.sh zwrócił `2.110.7`, ale zgodność i pinowanie nie są zakończone. |
| B01 | Zaimplementowane w `9faa15c` | `.gitignore`: środowiska, przykłady i kopie frontendu. Nie oznacza usunięcia już śledzonych sekretów ani skanu historii. |
| B02 | Ograniczenie zachowane | Nie dodano ani nie skasowano ikon, kopii i pliku `=`; treść lokalna nieznana. |
| B03 | Częściowo zweryfikowane według raportu | Raport odnotowuje publiczny klucz publishable, nie `service_role`; brak pełnego skanu historii i testu RLS. |
| B04, B05, pakiet E | Niezamknięte | Brak potwierdzonej definicji bazy i powtarzalnego zestawu testów; dostęp do Supabase rozłączony. |
| B06 | Zaimplementowane w `9c4b5df` | Kontrola stanu przed synchronizacją; brak automatycznego reset, rebase i dodawania wszystkiego. Nie wykonano tych poleceń na telefonie. |

Nie uznajemy audytu ani wszystkich kryteriów zakończenia za spełnione. Nie tworzymy kolejnego raportu ani konkurencyjnego planu.

## Fundamenty i dokumentacja

- [x] Repozytorium, SSH Termuxa i dokumenty 01, 02, 04, 05, 06 — odnotowane we wcześniejszej checkliście; prywatności repo i SSH nie testowano ponownie.
- [x] Potwierdzone commity dokumentacji: `9faa15c`, `d4a92bc`, `9c4b5df`.
- [x] Źródła LLM i zasady wspólnej pracy dostępne w Space zostały odczytane; raport został dostarczony w rozmowie. Nie szukać ich od nowa pod pozorem braku kontekstu.
- [ ] Potwierdzić zapis i odczyt bieżącego pakietu CSS oraz dokumentów 03 i punktu kontrolnego.
- [ ] Końcowa kontrola wszystkich zaleceń i kryteriów raportu po usunięciu blokad.
- [ ] Faktyczna aktualizacja `FILE_MAP.md`, `TODO.md` i pozostałych właściwych materiałów Space oraz deduplikacja trzech checklist; brak narzędzia modyfikacji Project Files. Nie zlecać ręcznej podmiany jako pozornego wykonania.

Dokument 02 opisuje przygotowanie repo. Dokument 12 odnotowuje obie poprawki P1 jako wykonane 2026-10-07. Nie otwieramy ich ponownie jako zaległości.

## Decyzje przed publikacją

- [x] Wybrano Supabase.
- [ ] Sprawdzić konfigurację przygotowanego hostingu; podpięcie i wdrożenie nadal wstrzymane.
- [ ] Statusy zleceń i zasady publikacji.
- [ ] Limity tekstów.
- [ ] Usuwanie kont i danych.
- [ ] Retencja wiadomości, zgłoszeń i kopii.
- [ ] Uprawnienia moderatora i dostęp do zgłoszonej rozmowy.
- [ ] Waluta budżetu i proponowanej ceny; PLN w interfejsie nie kończy decyzji produktowej.
- [ ] Obszar, kategorie, cele i mierniki pilotażu.

Płatne usługi wymagają zgody; testy na fikcyjnych danych. Cel Google Play 27 sierpnia 2027 r. i harmonogram są w dokumencie 13, nie stanowią gwarancji wydania. Wiki odłożona według źródła Space z 8 października; Pomoc i FAQ pozostają w planie.

## Główna aplikacja — implementacja i test

| Funkcja | Implementacja | Test |
|---|---|---|
| Konta, logowanie, sesja, lokalne wylogowanie | Kod istnieje; historyczny `5b44859` | Historyczne potwierdzenie właściciela; aktualny test integracji i uprawnień niewykonany |
| Wysłanie zlecenia i zwrot ID | Kod istnieje od `f39b3ae` | Zapis, trwałość, odczyt i RLS niepotwierdzone |
| Formularz i lokalny podgląd oferty | Kod istnieje | Pełny test przeglądarkowy niewykonany; brak zapisu do bazy |
| Wyszukiwanie kart kategorii | Separator poprawiony w `ee32711` | 12 asercji logiki; brak testu DOM |
| Status MVP i teksty | Poprawione w `ee32711` | Brak pełnego testu przeglądarkowego |
| Konsolidacja CSS | Przygotowana w bieżącym pakiecie | 84 porównania modelowe; test wyglądu pozostaje otwarty |

Zadania produktu pozostające otwarte:
- [ ] Jedno konto w roli klienta i wykonawcy; profil i prywatność danych konta.
- [ ] Schemat `jobs`, właściciel, data, status i RLS.
- [ ] Trwały zapis i odczyt zleceń, w tym po odświeżeniu i z różnych kont.
- [ ] Rozstrzygnięcie zapisu podusługi po kontroli schematu.
- [ ] Trwały zapis ofert wykonawców.
- [ ] Publiczne przeglądanie opublikowanych ofert oraz dostęp wykonawców do otwartych zleceń.
- [ ] Wyszukiwanie ogłoszeń według kategorii i lokalizacji; nie mylić z kartami kategorii.
- [ ] Edycja i zamykanie własnych ogłoszeń.
- [ ] Odpowiedzi dostępne wyłącznie autorowi i właścicielowi zlecenia.
- [ ] Prywatne rozmowy tylko dla uczestników.
- [ ] Zgłoszenia, ich statusy oraz ukrywanie naruszających treści przez administratora.
- [ ] Egzekwowanie dostępu po stronie backendu; brak publicznego e-maila, telefonu i dokładnego adresu.
- [ ] Przypięcie dokładnej wersji Supabase po teście zgodności.

## Testy, pilotaż i osobne demo

- [ ] Pełny test przeglądarkowy głównej aplikacji po poprawkach, w tym mobile, formularze i wygląd konta.
- [ ] Powtarzalne testy zapisu, odczytu, trwałości, dostępu między kontami i obsługi błędów.
- [ ] Test pełnego procesu: konto → zlecenie → odpowiedź → prywatna rozmowa.
- [ ] Kopia zapasowa i sprawdzenie odtworzenia.
- [ ] Zasady korzystania, prywatność i usuwanie kont; wylogowanie nie zastępuje usunięcia.
- [ ] Wdrożenie pilotażu dopiero po zgodzie, następnie testy z klientami i wykonawcami.
- [ ] Osobne demo: sprawdzić uruchomienie na Androidzie, kategorie, formularze, dojazd, walidację, wyszukiwanie, podgląd oraz informację o zapisie/publikacji. Zapisać rzeczywiste wyniki, nie przenosić testów głównej aplikacji na demo.

Plan zamkniętych testów z checklisty Space z 17 października jest osobnym zakresem: zaproszenia, czas dostępu, warunki, opinie i oddzielne uprawnienia statystyk. Brak potwierdzonego wdrożenia. Nie zastępuje zasad kont głównego MVP i nie uruchamia automatycznie poleceń ani rozszerzonej weryfikacji.

## Poza początkowym MVP

Płatności, kolejne kraje i języki, zaawansowane dopasowanie, osobna APK i AI/OSINT niezwiązane z podstawowym procesem pozostają poza początkowym MVP. Android i Google Play są dalszym celem planu. Korzystanie z LLM przy rozwoju nie oznacza funkcji AI w produkcie.

## Blokady i kolejność

1. Potwierdzić zatwierdzony zapis bieżącej konsolidacji i dokumentów.
2. Test przeglądarkowy: niewykonany w tej sesji; nie oznaczać jako sukcesu na podstawie modelu lub Node.js.
3. Supabase: DISCONNECTED — po połączeniu odczytać konfigurację, dopiero potem rozstrzygać migracje i testy.
4. Space: brak narzędzia zapisu/usuwania załączników — analiza wykonana, fizyczny porządek nie.
5. Domknąć K02–K04, K08–K10 i B03–B05 w wymaganym zakresie; dopiero wtedy ponownie ocenić kryteria całego audytu.
