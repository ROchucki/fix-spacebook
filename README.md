# Fix&Spacebook

Projekt platformy usług lokalnych o docelowym zasięgu
obejmującym Polskę, Europę i świat.

Docelowo ma łączyć osoby szukające pomocy z osobami i firmami
wykonującymi konkretne, legalne usługi.

## Kierunek rozwoju

Planowany rozwój:
Polska → kolejne rynki europejskie → rynki światowe.

Zasięg globalny jest celem projektu, nie obecną
dostępnością produktu. Usługi pozostają lokalne,
zgodnie z obszarem działania wykonawcy.

Kraje, terminy wdrożeń i obszar pilotażu:
do ustalenia.

## Kategorie początkowe

- Naprawy samochodów.
- Naprawy rowerów.
- Naprawy AGD i RTV.
- Sprzątanie.
- Prace ogrodowe.
- Przeprowadzki.
- Opieka nad zwierzętami.

## Obecne demo

Demonstracyjny frontend w HTML, CSS i JavaScript:
- Strona startowa i kategorie usług.
- Formularz zlecenia klienta.
- Formularz oferty wykonawcy.
- Lokalizacja i promień dojazdu wykonawcy.
- Walidacja opisu: minimum 20 znaków.
- Podpowiedzi opisu zależne od kategorii.
- Otwieranie i zamykanie formularza wykonawcy.
- Testowy podgląd nazwy wykonawcy.

Dane formularzy nie są zapisywane ani wysyłane na serwer.
Demo nie realizuje rzeczywistego łączenia klientów
z wykonawcami.

Repozytorium demo:
https://github.com/ROchucki/fix-spacebook-frontend-demo

## Plan funkcjonalnego MVP

- Backend i baza danych.
- Konta oraz profile klientów i wykonawców.
- Zapisywanie zleceń i ofert.
- Przeglądanie ogłoszeń według kategorii i lokalizacji.
- Odpowiedzi na zlecenia.
- Prywatne rozmowy dostępne wyłącznie uczestnikom.
- Zgłaszanie naruszeń i podstawowa moderacja.

Zakres MVP zatwierdzono 6 października 2026 r. w dokumencie 14. Technologia, harmonogram i koszty pozostają do ustalenia.
Obsługa kolejnych krajów i języków jest kierunkiem
dalszego rozwoju.

## Struktura repozytorium

- docs/ — dokumentacja.
- frontend/ — demonstracyjny interfejs.
- backend/ — katalog przeznaczony na backend.
- infra/ — katalog przeznaczony na infrastrukturę.
- tests/ — katalog przeznaczony na testy.

Istnienie katalogu nie oznacza gotowej funkcjonalności.

## Dokumentacja

- docs/01-WIZJA_PROJEKTU.md — aktualna wizja.
- docs/03-LISTA_ZADAN_I_PRIORYTETY.md — checklista etapów i testów.
- docs/14-ZAKRES_MVP_I_DOSTEP.md — zatwierdzony zakres MVP i dostęp.
- docs/PROJECT_CONTEXT.md — punkt kontrolny projektu.
- docs/INVESTOR_ONE_PAGER.md — opis dla inwestora.
- docs/05-ZASADY_BEZPIECZENSTWA.md — zasady bezpieczeństwa.
- docs/06-START_W_TERMUXIE.md — instrukcja pracy.
- docs/11-SKILLS_I_TRYBY_PRACY_AI.md — sposób pracy z AI.
- docs/12-UWAGI_DO_FRONTENDU.md — uwagi do interfejsu.

Dokument 02 nadal wymaga doprecyzowania etapu przygotowawczego.
Dokument 03 zaktualizowano 7 października 2026 r.
Kontekst i opis inwestorski wymagają ujednolicenia
z docelowym zasięgiem globalnym.
Statusy wykonanych poprawek w dokumencie 12
również wymagają aktualizacji.

## Start pracy w Termuxie

```bash
cd ~/fix-spacebook
git pull
git status
```

## Bezpieczeństwo

Nie zapisuj haseł, tokenów, kluczy API ani danych
wrażliwych w repozytorium.

## Status

Demonstracyjny frontend oraz planowanie
funkcjonalnego MVP. Zasięg globalny jest celem rozwoju.
