# Wizja projektu — Fix&Spacebook

## 1. Cel projektu

Fix&Spacebook to projekt platformy usług lokalnych
o docelowym zasięgu globalnym.

Ma łączyć osoby szukające pomocy z osobami i firmami
wykonującymi konkretne, legalne usługi — w Polsce,
pozostałych krajach Europy i na świecie.

Klient opisuje potrzebę i lokalizację.
Wykonawca przedstawia zakres usług oraz obszar działania.

## 2. Zasięg i kierunek rozwoju

Plan zakłada etapowy rozwój:
Polska → kolejne rynki europejskie → rynki światowe.

Globalny zasięg oznacza dostępność platformy na kolejnych
rynkach. Poszczególne usługi pozostają lokalne,
zgodnie z obszarem działania wykonawcy.

Zasięg międzynarodowy jest celem rozwoju,
a nie obecną funkcją demo.

Terminy, kraje wdrożeń i obszar pierwszego pilotażu
pozostają do ustalenia.

## 3. Dla kogo

- Klienci szukający lokalnej pomocy.
- Osoby oferujące usługi.
- Lokalne firmy usługowe.

## 4. Początkowe kategorie

- Naprawy samochodów.
- Naprawy rowerów.
- Naprawy AGD i RTV.
- Sprzątanie.
- Prace ogrodowe.
- Przeprowadzki.
- Opieka nad zwierzętami.

Frontend zawiera również opcję „Inna usługa”.
Kategorie priorytetowe dla pilotażu oraz zakres
dopuszczonych ogłoszeń pozostają do ustalenia.

## 5. Główne założenia

- Prosty proces opisania potrzeby lub oferty.
- Wygodna obsługa z telefonu.
- Kategorie i lokalizacja pomagające znaleźć usługę.
- Jasne rozróżnienie demo od działającego produktu.
- Ochrona danych i możliwość zgłaszania naruszeń.
- Rozwój małymi krokami, po testach z użytkownikami.

Weryfikacja wykonawców nie jest obecnie potwierdzoną
funkcją. Jej zakres i procedury wymagają decyzji.

## 6. Obecny stan

Istnieje demonstracyjny frontend w HTML, CSS i JavaScript.

Kod obejmuje:
- Stronę startową oraz kategorie.
- Formularz zlecenia klienta.
- Formularz oferty wykonawcy.
- Lokalizację i wybór promienia dojazdu wykonawcy.
- Walidację opisu: minimum 20 znaków.
- Podpowiedzi opisu zależne od kategorii.
- Otwieranie i zamykanie formularza wykonawcy.
- Testowy podgląd nazwy wykonawcy.

Dane formularzy nie są zapisywane ani wysyłane na serwer.
Demo nie realizuje jeszcze rzeczywistej obsługi zleceń
ani łączenia klientów z wykonawcami.

## 7. Kierunek funkcjonalnego MVP

Planowany proces:
dodanie zlecenia → przeglądanie przez wykonawców →
odpowiedź → kontakt między stronami.

Planowany zakres:
- Backend i baza danych.
- Konta oraz profile klientów i wykonawców.
- Zapisywanie zleceń i ofert.
- Przeglądanie według kategorii i lokalizacji.
- Odpowiedzi na zlecenia.
- Zgłaszanie naruszeń i podstawowa moderacja.

Szczegółowy zakres, harmonogram i koszt wymagają ustalenia.
Płatności i zaawansowane dopasowanie nie należą
do proponowanego początkowego zakresu.

Obsługa kolejnych krajów i języków pozostaje
kierunkiem dalszego rozwoju.

## 8. Walidacja i miary sukcesu

Najpierw należy sprawdzić potrzeby klientów
i wykonawców oraz przetestować zrozumiałość demo.

W pilotażu planujemy mierzyć:
- Liczbę opublikowanych zleceń.
- Odsetek zleceń z odpowiedzią.
- Czas do pierwszej odpowiedzi.
- Kontakty prowadzące do wykonania usługi.
- Powroty klientów i wykonawców.

Cele liczbowe i sposób pomiaru pozostają do ustalenia.
Popyt oraz model przychodów nie są jeszcze zweryfikowane.

## 9. Organizacja projektu

Główne repozytorium:
ROchucki/fix-spacebook

Repozytorium demonstracyjnego frontendu:
ROchucki/fix-spacebook-frontend-demo

Dokumenty odniesienia:
- docs/PROJECT_CONTEXT.md — punkt kontrolny projektu.
- docs/INVESTOR_ONE_PAGER.md — opis dla inwestora.

Android i Termux są środowiskiem pracy autora,
a nie główną funkcją produktu.

Nie zapisujemy haseł, tokenów ani kluczy API w repozytorium.
