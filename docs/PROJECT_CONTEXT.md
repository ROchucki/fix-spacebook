# Fix&Spacebook — punkt kontrolny
Data: 2026-10-06

## Produkt
Platforma usług lokalnych w Polsce.
Łączy klientów z osobami i firmami wykonującymi usługi.
Nie jest osobistą bazą wiedzy ani przestrzenią programisty.

## Repozytoria
Główne:
git@github.com:ROchucki/fix-spacebook.git
Lokalnie: ~/fix-spacebook

Demo frontendu:
https://github.com/ROchucki/fix-spacebook-frontend-demo.git
Lokalnie: ~/fix-spacebook-frontend-demo

## Ostatni sprawdzony stan Git
Główne repo:
- Gałąź main, working tree clean.
- HEAD i origin/main: 934c8eb
- Ostatni commit: Dodaj podglad oferty wykonawcy.

Demo:
- HEAD i origin/main: 3467d71
- Commit: Initial public frontend demo.

## Struktura głównego repo
README.md
docs/
frontend/
backend/
infra/
tests/

Frontend:
- index.html
- app.js
- style.css
- README.md
- lokalne kopie .bak

Nie odczytano zawartości backend/, infra/ ani tests/.
Nie zakładać, że backend działa.

## Potwierdzone w kodzie frontendu
- Strona startowa i kategorie usług.
- Formularz zlecenia klienta.
- Kategoria, opis, lokalizacja, opcjonalny budżet.
- Minimum 20 znaków opisu.
- Podpowiedzi opisu zależne od kategorii.
- Otwieranie i zamykanie formularza wykonawcy.
- Nazwa wykonawcy, kategoria, lokalizacja,
  promień dojazdu i opis oferty.
- Walidacja formularzy.
- Testowy podgląd nazwy wykonawcy.

## Ograniczenia demo
Dane nie są zapisywane ani wysyłane na serwer.
Podgląd oferty pokazuje tylko nazwę wykonawcy.
Nie potwierdzono kont, bazy danych, odpowiedzi na zlecenia
ani rzeczywistego łączenia klientów z wykonawcami.
Nie potwierdzono adresu działającego demo online.
Zawartości obu frontendów nie porównano.

## Dokumentacja wymagająca aktualizacji
- docs/01-WIZJA_PROJEKTU.md
- docs/02-ZAKRES_PIERWSZEJ_WERSJI.md
- docs/03-LISTA_ZADAN_I_PRIORYTETY.md
Powyższe nadal opisują dawną osobistą przestrzeń pracy.

- docs/12-UWAGI_DO_FRONTENDU.md:
  obie poprawki P1 wykonane i wypchnięte według autora;
  minimum 20 znaków i podpowiedzi potwierdzone w kodzie.

- frontend/index.html:
  sekcja „Następny etap” błędnie wskazuje formularz
  wykonawcy jako przyszłą funkcję — formularz już istnieje.

## Dokument inwestorski
~/docs/INVESTOR_ONE_PAGER.md zawiera błędny opis
„Space Programista”. Jest poza repo.
Nie kopiować go do Fix&Spacebook.

## Następny etap
Przygotować poprawny opis inwestorski Fix&Spacebook:
problem, rozwiązanie, istniejące demo, plan MVP i kroki.
Następnie ujednolicić dokumentację ze stanem projektu.
