# Skills i tryby pracy AI — Fix&Spacebook

## Cel

Fix&Spacebook jest rozwijany jako długoterminowy startup rodzinny.
AI pomaga w planowaniu, dokumentacji, badaniu rynku, projektowaniu, kodowaniu,
testach, bezpieczeństwie oraz organizacji pracy.

Projekt startuje w Polsce i rozwija się etapami.
Najpierw budujemy prosty, bezpieczny i użyteczny produkt.
Płatności, kredyty, monety i funkcje premium są rozwijane później,
po testach, analizie prawa oraz zgodnie z możliwościami finansowymi firmy.

## Zasada wyboru trybu

Nie używamy najmocniejszego trybu do każdego zadania.
Dobieramy narzędzie do celu, aby oszczędzać czas i zasoby.

## 1. Zwykła rozmowa / Best

Używamy do:
- codziennych ustaleń projektowych,
- tworzenia dokumentacji Markdown,
- planowania małych kroków,
- list TODO,
- poprawy tekstów,
- analizy błędów z Termuxa,
- pracy z Git i GitHub,
- przygotowania prostych funkcji i fragmentów kodu.

Przykłady:
- Opisz funkcję dodawania zlecenia.
- Przygotuj treść do istniejącego pliku docs/02-ZAKRES_PIERWSZEJ_WERSJI.md.
- Wyjaśnij błąd z terminala i podaj jedną komendę na teraz.

## 2. Thinking

Używamy do zadań technicznych i wieloetapowych.

Używamy do:
- architektury aplikacji,
- projektu bazy danych,
- logowania i uprawnień,
- bezpieczeństwa,
- analizy kilku modeli zarobku,
- projektowania API,
- złożonych błędów w kodzie,
- planowania wersji MVP i późniejszej rozbudowy.

Przykłady:
- Zaprojektuj bazę danych dla użytkowników, zleceń, ofert i zgłoszeń.
- Porównaj płatną odpowiedź, abonament i wyróżnione ogłoszenia.
- Zaproponuj bezpieczną architekturę logowania.

## 3. Deep Research / Research

Używamy do decyzji wymagających aktualnych i sprawdzonych źródeł.

Używamy do:
- badania konkurencji w Polsce,
- analizy rynku i nisz,
- prawa, RODO, DSA i regulaminów,
- analizy modeli płatności,
- kosztów hostingu i narzędzi,
- wyboru miasta pilotażowego,
- wyboru kategorii usług,
- porównania dostawców technicznych.

Wynik badania powinien zawierać:
- źródła,
- datę badania,
- najważniejsze wnioski,
- ryzyka,
- rekomendację,
- decyzję do podjęcia.

## 4. Computer

Używamy, gdy potrzebny jest gotowy rezultat roboczy, nie tylko odpowiedź.

Używamy do:
- przygotowania wielu plików Markdown,
- analizy repozytorium,
- uporządkowania backlogu,
- tworzenia arkuszy budżetowych,
- generowania raportów,
- tworzenia szkieletu projektu,
- pracy z plikami i narzędziami,
- przeglądu kodu lub dokumentacji.

Nie używamy Computer do prostych pytań, krótkich poprawek
ani pojedynczych komend w Termuxie.

Nazwy trybów są wskazówką organizacji pracy, nie gwarancją dostępności narzędzia lub modelu. Nie deklarujemy użycia trybu, którego faktycznie nie uruchomiono.

## Zasady bezpieczeństwa

- Nie przekazujemy haseł, tokenów, kodów odzyskiwania ani kluczy SSH.
- Nie zapisujemy sekretów w repozytorium GitHub.
- Pliki `.env` z rzeczywistymi wartościami pozostają lokalne; wersjonujemy wyłącznie przykłady bez sekretów.
- Publiczny klucz publishable Supabase w konfiguracji frontendu odróżniamy od klucza administracyjnego; jego obecność nie potwierdza poprawności RLS.
- Każdy ważny dostęp ma właściciela, 2FA i sposób odzyskania konta.
- Dane użytkowników zbieramy tylko wtedy, gdy są potrzebne do działania funkcji.
- Funkcje płatności, kredytów i monet analizujemy prawnie przed wdrożeniem.

## Zasada dokumentowania decyzji

Każda ważna decyzja dotycząca:
- funkcji,
- wydatku,
- bezpieczeństwa,
- danych użytkowników,
- modelu zarobku,
- technologii,
- współpracy z inną osobą

powinna zostać zapisana w dokumentacji projektu wraz z datą,
powodem decyzji i dalszym krokiem.

## Zasady pracy LLM z repozytorium

- Najpierw odczytujemy bieżący stan gałęzi i pliki związane z zadaniem, w tym `PROJECT_CONTEXT.md`.
- Czytamy `ZASADY_WSPOLNEJ_PRACY.md`, jeżeli jest dostępny. Jeśli nie jest dostępny, wskazujemy brak i nie wymyślamy jego treści.
- Opieramy ustalenia o projekcie na repozytorium i danych właściciela. Nie zgadujemy zawartości plików, logów ani stanu Termuxa.
- Nie prosimy właściciela o pliki dostępne przez GitHub; najpierw odczytujemy je samodzielnie.
- Brak treści wcześniejszego zadania lub raportu w kontekście nie jest dowodem, że zadania lub raportu nie było. Nie rekonstruujemy zaleceń z domysłów.
- Raport jest listą zaleceń do sprawdzenia względem bieżących plików. Oddzielamy poprawione pozycje od pominiętych i niepotwierdzonych. Nie ogłaszamy wykonania całego raportu bez porównania z jego pełną treścią.
- Aktualizujemy istniejące dokumenty we właściwych miejscach. Nie tworzymy nowego raportu, kopii, pliku do podmiany ani równoległych zasad bez zatwierdzonej potrzeby.
- Najpierw analiza i plan, następnie dokładna zmiana. Kod i komendy mają wskazywać plik, miejsce oraz gotowy fragment; preferujemy Android i Termux bez roota.
- Przed zapisem w repozytorium przedstawiamy dokładny zakres i treść do zatwierdzenia. Zgoda nie obejmuje innych plików ani później rozszerzonego zakresu.
- Nie dodajemy ani nie usuwamy automatycznie lokalnych kopii, ikon, pliku `=` lub innych nieprzejrzanych danych.
- Nie zmieniamy osobnego demo, hostingu ani Supabase w ramach poprawki dokumentacji.
- Osobno potwierdzamy implementację, test, commit, push i wdrożenie. Odczyt kodu nie jest testem przeglądarkowym, a komunikat sukcesu formularza nie zastępuje kontroli trwałości i uprawnień.
- Po wykonaniu zatwierdzonych zmian sprawdzamy zapis i podajemy rzeczywisty wynik oraz pozostałe ograniczenia, bez kolejnego pliku podsumowania.
- Zasady korzystania z LLM przy pracy nad projektem nie oznaczają wdrożenia AI jako funkcji produktu.

## Najważniejsza zasada

Najpierw prosty, użyteczny i bezpieczny produkt.
Potem testy, użytkownicy, przychody i stopniowa rozbudowa.
