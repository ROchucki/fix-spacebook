# Fix&Spacebook — opis dla inwestora

Wersja: 0.1
Data: 2026-10-06
Etap: demonstracyjny frontend i planowanie funkcjonalnego MVP.

## Problem

Hipoteza do zweryfikowania:
klienci potrzebują prostego sposobu znalezienia lokalnego
wykonawcy konkretnej usługi, a wykonawcy — dotarcia
do osób potrzebujących pomocy w ich obszarze działania.

Projekt ma ograniczyć trudności związane z opisaniem
potrzeby, określeniem lokalizacji i znalezieniem
odpowiedniej oferty.

## Rozwiązanie

Fix&Spacebook to projekt platformy usług lokalnych w Polsce,
łączącej klientów z osobami i firmami wykonującymi usługi.

Klient opisuje potrzebę, wybiera kategorię i lokalizację.
Wykonawca przedstawia ofertę, zakres usług i obszar dojazdu.

Kategorie początkowe:
naprawy samochodów, rowerów, AGD i RTV, sprzątanie,
prace ogrodowe, przeprowadzki oraz opieka nad zwierzętami.

Celem jest ułatwienie znalezienia wykonawcy legalnej,
konkretnej usługi. Procedury weryfikacji i moderacji
wymagają dopracowania.

## Obecne demo

Przygotowano demonstracyjny frontend w HTML, CSS
i JavaScript oraz osobne repozytorium demo.

Kod obejmuje:
- Stronę startową i prezentację kategorii.
- Formularz zlecenia klienta: kategorię, opis,
  lokalizację i opcjonalny budżet.
- Formularz wykonawcy: nazwę, kategorię, lokalizację,
  promień dojazdu oraz opis oferty.
- Walidację opisu: minimum 20 znaków.
- Podpowiedzi opisu zależne od kategorii.
- Otwieranie i zamykanie formularza wykonawcy.
- Testowy podgląd nazwy wykonawcy po wysłaniu formularza.

Demo nie zapisuje danych ani nie wysyła ich na serwer.
Nie realizuje jeszcze faktycznego kojarzenia stron,
obsługi kont ani odpowiedzi na zlecenia.

Repozytorium demo:
https://github.com/ROchucki/fix-spacebook-frontend-demo

Adres działającego demo online: do uzupełnienia.

## Plan funkcjonalnego MVP

Planowany podstawowy proces:
dodanie zlecenia → przeglądanie przez wykonawców →
odpowiedź na zlecenie → kontakt między stronami.

Zakres do realizacji i potwierdzenia:
- Backend i baza danych.
- Konta oraz podstawowe profile klientów i wykonawców.
- Zapisywanie zleceń i ofert.
- Przeglądanie ogłoszeń według kategorii i lokalizacji.
- Odpowiedź wykonawcy na zlecenie.
- Zgłaszanie naruszeń i podstawowa moderacja.
- Zasady ochrony danych i bezpieczna obsługa formularzy.

Płatności i zaawansowane automatyczne dopasowanie
nie są częścią proponowanego początkowego zakresu.

## Walidacja i kolejne kroki

Proponowana kolejność:
1. Ujednolicić dokumentację z kierunkiem usług lokalnych.
2. Przetestować demo z klientami i wykonawcami.
3. Wybrać ograniczony obszar oraz kategorie pilotażu.
4. Ustalić architekturę, koszt i harmonogram MVP.
5. Wdrożyć podstawowy proces obsługi zlecenia.
6. Uruchomić pilotaż i ocenić wyniki.

W pilotażu mierzyć:
- Liczbę opublikowanych zleceń.
- Odsetek zleceń z odpowiedzią wykonawcy.
- Czas do pierwszej odpowiedzi.
- Liczbę kontaktów prowadzących do wykonania usługi.
- Powroty klientów i wykonawców.

Lokalizacja, liczba uczestników i cele liczbowe pilotażu:
do ustalenia.

## Model biznesowy i finansowanie

Model przychodów: nieustalony, wymaga walidacji.
Budżet MVP i kwota finansowania: do oszacowania.

Planowane przeznaczenie ewentualnych środków:
rozwój funkcjonalnego MVP, bezpieczeństwo,
moderacja i pozyskanie uczestników pilotażu.

Ten dokument nie przedstawia potwierdzonej trakcji,
przychodów ani zweryfikowanego popytu.

## Pitch

Fix&Spacebook ma ułatwiać znalezienie lokalnej pomocy:
klient opisuje potrzebę, a wykonawca przedstawia
usługi i obszar działania — w jednym miejscu.
