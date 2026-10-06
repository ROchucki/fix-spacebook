# Fix&Spacebook — plan wersji docelowej

Data ustalenia: 2026-10-06

## Status

Zatwierdzono budowę aplikacji docelowej etapami.
Dokument 02-ZAKRES_PIERWSZEJ_WERSJI.md opisuje wcześniejszy
etap przygotowania dokumentacji.

Działające demo znajduje się w osobnym repozytorium:
ROchucki/fix-spacebook-frontend-demo
Ostatni potwierdzony commit demo: 2bd7b14.

## Kolejność realizacji

1. Ustalenie zakresu produktu i zasad dostępu do danych.
2. Wybór backendu, bazy danych oraz hostingu.
3. Konta użytkowników i kontrola uprawnień.
4. Zapis zleceń i ofert wykonawców.
5. Wyświetlanie danych oraz obsługa błędów.
6. Testy bezpieczeństwa, kopie zapasowe i wdrożenie.

## Koszty

Na etapie przygotowania nie uruchamiamy płatnych usług.
Każda płatna usługa wymaga osobnej zgody właściciela projektu.
Przed wyborem dostawcy sprawdzamy ceny, limity i warunki.

## Bezpieczeństwo

Obowiązuje dokument 05-ZASADY_BEZPIECZENSTWA.md.
Nie zapisujemy sekretów ani rzeczywistych danych użytkowników
w repozytorium.
Do testów używamy danych fikcyjnych.

## Najbliższe zadanie

Ustalić pola zleceń i ofert oraz zasady:
- kto może publikować,
- kto może przeglądać,
- kto może edytować i usuwać,
- które dane są publiczne, a które prywatne.

Technologia backendu i bazy nie została jeszcze wybrana.
