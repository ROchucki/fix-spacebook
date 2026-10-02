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
- Przygotuj treść do pliku docs/02-MVP.md.
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

## Zasady bezpieczeństwa

- Nie przekazujemy haseł, tokenów, kodów odzyskiwania ani kluczy SSH.
- Nie zapisujemy sekretów w repozytorium GitHub.
- Używamy pliku .env tylko lokalnie.
- Do repozytorium trafia wyłącznie .env.example bez prawdziwych danych.
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

## Najważniejsza zasada

Najpierw prosty, użyteczny i bezpieczny produkt.
Potem testy, użytkownicy, przychody i stopniowa rozbudowa.
