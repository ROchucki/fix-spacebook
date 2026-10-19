# Lista zadań i priorytety — Fix&Spacebook

Aktualizacja: 2026-10-19.

## Zasady oceny

- `[x]` oznacza wykonanie i potwierdzenie w opisanym zakresie. `[ ]` oznacza brak wykonania lub wymaganej weryfikacji.
- Implementacja, test przeglądarkowy, commit, push i wdrożenie to osobne fakty.
- Główna aplikacja i osobne demo mają osobne statusy.
- Zakres: `14-ZAKRES_MVP_I_DOSTEP.md`; stan: `PROJECT_CONTEXT.md`. Dokument 02 opisuje etap przygotowawczy.

## Etap A — przygotowanie i dokumentacja

- [x] Prywatne repozytorium GitHub — według wcześniejszej checklisty; widoczności nie sprawdzano ponownie.
- [x] SSH GitHub w Termuxie — według wcześniejszej checklisty.
- [x] Dokument wizji.
- [x] Dokument zakresu pierwszej wersji.
- [x] Mapa plików i katalogów.
- [x] Zasady bezpieczeństwa.
- [x] Instrukcja startu w Termuxie.
- [x] Zapis pakietu siedmiu istniejących plików, w tym zasad AI/LLM: commit `9faa15c`; listę modyfikacji potwierdzono odczytem commita.
- [ ] Potwierdzić zapis i odczytać treść bieżących poprawek dokumentu 13, opisu inwestorskiego, checklisty i punktu kontrolnego.
- [ ] Odnaleźć pełny raport audytu i porównać wszystkie zalecenia. Przekazany JSON nie zawiera pełnego raportu; zgłoszenia i pull requesty były puste podczas kontroli.
- [ ] Odnaleźć brakujący plik zasad wspólnej pracy bez zgadywania treści.
- [ ] Sprawdzić kompletność i spójność całej dokumentacji.
- [ ] Ostateczny przegląd etapu przygotowawczego.

## Etap B — osobne demo

Punkt odniesienia: `demo-baseline-2026-10-07`. Poniższe testy dotyczą osobnego repo demo, nie głównej aplikacji.

- [ ] Uruchomienie w przeglądarce Androida.
- [ ] Kategorie i formularz zlecenia.
- [ ] Formularz wykonawcy i promień dojazdu.
- [ ] Walidacja opisu.
- [ ] Wyszukiwanie i podgląd oferty.
- [ ] Jasna informacja, czy demo publikuje lub zapisuje dane.
- [ ] Zapis wyników testów i błędów.

## Etap C — decyzje przed publikacją MVP

- [x] Wybór Supabase jako backendu i bazy — odnotowany w dokumencie 13.
- [ ] Weryfikacja konfiguracji przygotowanego hostingu; podpięcie i wdrożenie wstrzymane według przekazanej informacji właściciela.
- [ ] Statusy zleceń i zasady publikacji.
- [ ] Limity długości tekstów.
- [ ] Usuwanie kont i danych.
- [ ] Retencja wiadomości i zgłoszeń.
- [ ] Uprawnienia moderatora.
- [ ] Waluta budżetu i proponowanej ceny; PLN w interfejsie nie zamyka decyzji produktowej.
- [ ] Obszar i kategorie pierwszego pilotażu.
- [ ] Cele i mierniki pilotażu.

Płatne usługi wymagają osobnej zgody. Testy wyłącznie na danych fikcyjnych.

## Etap D — główna aplikacja

Podstawa kontroli kodu: `f39b3ae`; obecność implementacji nie zamyka testów.

- [x] Kod wysyłania zleceń do `jobs`, kontroli zalogowania, obsługi błędów i zwracania ID w `app.js`.
- [x] Kod testowego podglądu oferty wykonawcy, bez zapisu do bazy.
- [ ] Powtórzyć test kont i logowania; historyczne potwierdzenie właściciela nie obejmuje nowej kontroli uprawnień i ukrywania e-maila.
- [ ] Jedno konto obsługuje rolę klienta i wykonawcy.
- [ ] Zweryfikować schemat `jobs`, automatyczne przypisanie właściciela i daty oraz RLS.
- [ ] Potwierdzić trwały zapis zleceń z właścicielem i datą.
- [ ] Trwały zapis ofert wykonawców.
- [ ] Publiczne przeglądanie opublikowanych ofert.
- [ ] Przeglądanie otwartych zleceń przez wykonawców.
- [ ] Wyszukiwanie i filtrowanie ogłoszeń według kategorii i lokalizacji; filtrowanie kart kategorii nie jest wyszukiwaniem ogłoszeń.
- [ ] Edycja i zamykanie własnych ogłoszeń.
- [ ] Odpowiedzi wykonawców na zlecenia.
- [ ] Dostęp do odpowiedzi tylko dla autora i właściciela zlecenia.
- [ ] Prywatna rozmowa tylko dla uczestników.
- [ ] Zgłoszenia naruszeń i status rozpatrzenia.
- [ ] Obsługa zgłoszeń i ukrywanie treści przez administratora.
- [ ] Egzekwowanie uprawnień po stronie backendu.
- [ ] Brak publicznego e-maila, telefonu i dokładnego adresu.

## Etap E — testy i pilotaż

- [ ] Zlecenie → odpowiedź → prywatna rozmowa.
- [ ] Dostęp z różnych kont.
- [ ] Trwałość, odczyt po odświeżeniu i obsługa błędów.
- [ ] Kopia zapasowa i test odtworzenia.
- [ ] Obsługa na telefonie.
- [ ] Zasady korzystania i informacja o danych.
- [ ] Wdrożenie pilotażu po osobnym zatwierdzeniu.
- [ ] Testy z klientami i wykonawcami.

## Niespójności poza bieżącą poprawką dokumentacji

- [ ] `frontend/index.html`: „Następny etap” zapowiada istniejący już formularz wykonawcy.
- [ ] `frontend/app.js`: poprawić dzielenie zapytania zapisane jako `/s+/` i przetestować wiele słów, po zatwierdzeniu zmiany kodu.

Dokument 12 odnotowuje obie poprawki P1 jako wykonane 2026-10-07. Nie otwieramy ich ponownie tylko z powodu starego README. Bieżący pakiet poprawia status hostingu w dokumencie 13 oraz rozdziela stan aplikacji i demo w opisie inwestorskim; potwierdzenie zapisu pozostaje w etapie A.

## Poza początkowym MVP

- Płatności.
- Kolejne kraje i języki.
- Zaawansowane dopasowanie.
- Osobna aplikacja APK.
- AI, OSINT i automatyzacje niezwiązane z podstawowym procesem produktu. Nie dotyczy to zasad korzystania z LLM przy pracy nad repozytorium.

## Najbliższa kolejność

1. Potwierdzić zapis bieżących dokumentów i porównać całość z pełnym raportem po odnalezieniu jego treści.
2. Osobno zatwierdzić poprawki frontendu i wykonać testy.
3. Zweryfikować bazę, dostęp, zapis, trwałość i odczyt z różnych kont.
4. Rozwijać oferty, odpowiedzi, rozmowy i moderację.
