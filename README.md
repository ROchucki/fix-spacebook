# Fix&Spacebook

Projekt platformy usług lokalnych o docelowym zasięgu
obejmującym Polskę, Europę i świat.

Łączy osoby szukające pomocy z osobami i firmami
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
- Zgłaszanie naruszeń i podstawowa moderacja.

Zakres, harmonogram i koszt wymagają dopracowania.
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
- docs/PROJECT_CONTEXT.md — punkt kontrolny projektu.
- docs/INVESTOR_ONE_PAGER.md — opis dla inwestora.
- docs/05-ZASADY_BEZPIECZENSTWA.md — zasady bezpieczeństwa.
- docs/06-START_W_TERMUXIE.md — instrukcja pracy.
- docs/11-SKILLS_I_TRYBY_PRACY_AI.md — sposób pracy z AI.
- docs/12-UWAGI_DO_FRONTENDU.md — uwagi do interfejsu.

Dokumenty 02 i 03 nadal wymagają aktualizacji:
opisują wcześniejszy kierunek projektu.
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
