# Lista zadań i priorytety — Fix&Spacebook

Aktualizacja: 2026-10-07

## Zasady oceny

- [x] oznacza zadanie wykonane i potwierdzone.
- [ ] oznacza zadanie niewykonane lub wymagające sprawdzenia.
- Widok w demo nie oznacza działającej funkcji MVP.
- Postęp przygotowania, demo i MVP liczymy osobno.
- Zakres MVP określa docs/14-ZAKRES_MVP_I_DOSTEP.md.
- Dokument 02 opisuje etap przygotowania repozytorium.

## Etap A — przygotowanie projektu

- [x] Prywatne repozytorium GitHub — według wcześniejszej checklisty.
- [x] Połączenie SSH z GitHub w Termuxie.
- [x] Dokument wizji projektu.
- [x] Dokument zakresu pierwszej wersji.
- [x] Mapa plików i katalogów.
- [x] Zasady bezpieczeństwa.
- [x] Instrukcja startu w Termuxie.
- [ ] Sprawdzenie kompletności i spójności dokumentacji.
- [x] Aktualizacja README.md.
- [ ] Ostateczny przegląd etapu przygotowawczego.

## Etap B — sprawdzenie demo

Frontend istnieje, ale poniższe testy wymagają potwierdzenia.

- [ ] Strona uruchamia się w przeglądarce na Androidzie.
- [ ] Kategorie i formularz zlecenia działają poprawnie.
- [ ] Formularz wykonawcy i promień dojazdu działają poprawnie.
- [ ] Walidacja opisu działa poprawnie.
- [ ] Wyszukiwanie i podgląd oferty działają poprawnie.
- [ ] Demo jasno informuje, że nie publikuje prawdziwych danych.
- [ ] Zapisano wyniki testów i znalezione błędy.

## Etap C — decyzje przed budową MVP

- [ ] Wybrać backend, bazę danych i hosting.
- [ ] Ustalić statusy zleceń i zasady publikacji.
- [ ] Ustalić limity długości tekstów.
- [ ] Ustalić zasady usuwania kont i danych.
- [ ] Ustalić retencję wiadomości i zgłoszeń.
- [ ] Ustalić uprawnienia moderatora.
- [ ] Ustalić walutę budżetu i proponowanej ceny.
- [ ] Ustalić obszar i kategorie pierwszego pilotażu.
- [ ] Ustalić cele pilotażu oraz sposób ich pomiaru.

Płatne usługi wymagają osobnej zgody właściciela.
W testach używamy wyłącznie fikcyjnych danych.

## Etap D — funkcjonalne MVP

Wykonanie każdego zadania wymaga testu działania.
Brak zaznaczenia nie przesądza, że nie istnieje żaden fragment kodu.

- [ ] Konta i logowanie; e-mail niewidoczny publicznie.
- [ ] Jedno konto obsługuje rolę klienta i wykonawcy.
- [ ] Trwały zapis zleceń z właścicielem i datą utworzenia.
- [ ] Trwały zapis ofert wykonawców.
- [ ] Publiczne przeglądanie opublikowanych ofert.
- [ ] Przeglądanie otwartych zleceń przez wykonawców.
- [ ] Wyszukiwanie i filtrowanie według kategorii i lokalizacji.
- [ ] Edycja i zamykanie własnych ogłoszeń.
- [ ] Odpowiedzi wykonawców na zlecenia.
- [ ] Dostęp do odpowiedzi tylko dla autora i właściciela zlecenia.
- [ ] Prywatna rozmowa dostępna wyłącznie uczestnikom.
- [ ] Zgłoszenia naruszeń i status ich rozpatrzenia.
- [ ] Obsługa zgłoszeń i ukrywanie treści przez administratora.
- [ ] Egzekwowanie uprawnień po stronie backendu.
- [ ] Brak publicznego e-maila, telefonu i dokładnego adresu.

## Etap E — testy i pilotaż

- [ ] Test: zlecenie → odpowiedź → prywatna rozmowa.
- [ ] Testy dostępu z użyciem różnych kont.
- [ ] Test trwałości danych i obsługi błędów.
- [ ] Procedura kopii zapasowej i test odtworzenia.
- [ ] Test obsługi na telefonie.
- [ ] Przygotowanie zasad korzystania i informacji o danych.
- [ ] Wdrożenie wersji pilotażowej.
- [ ] Testy z klientami i wykonawcami.

## Poza początkowym MVP

- Płatności.
- Kolejne kraje i języki.
- Zaawansowane dopasowanie.
- Osobna aplikacja APK.
- AI, OSINT i automatyzacje niezwiązane z podstawowym procesem.

## Najbliższa kolejność

1. Uporządkować dokumentację i README.
2. Sprawdzić obecną wersję demo.
3. Ustalić technologię oraz brakujące zasady MVP.
4. Budować i testować pełny proces zlecenia.
