# Zasady bezpieczeństwa — Fix Spacebook

## Najważniejsza zasada

Nigdy nie zapisuj w repozytorium haseł, tokenów API, kluczy prywatnych SSH, kodów 2FA ani prywatnych danych.

## Czego nie dodajemy do GitHub

- haseł i kodów odzyskiwania,
- kluczy prywatnych SSH, np. `~/.ssh/id_ed25519`,
- tokenów GitHub i kluczy API,
- plików `.env` z prawdziwymi danymi,
- baz danych, kopii zapasowych i dokumentów z danymi prywatnymi.

## Co można przechowywać

- kod źródłowy bez sekretów,
- dokumentację Markdown,
- dane przykładowe i fikcyjne,
- plik `.env.example` bez prawdziwych wartości,
- publiczny klucz SSH z końcówką `.pub`,
- instrukcje konfiguracji bez haseł.

## Kontrola przed commitem

```bash
git status
git diff
```

Jeżeli widzisz nieznany plik, nie używaj `git add .`. Najpierw sprawdź jego zawartość i dodaj tylko właściwy plik, np.:

```bash
git add docs/NAZWA_PLIKU.md
```

## Konto i telefon

- Używaj silnego, unikalnego hasła do GitHub i włącz 2FA.
- Klucz prywatny SSH pozostaje tylko na telefonie.
- Zabezpiecz telefon blokadą ekranu i instaluj aktualizacje.
- Nie uruchamiaj przypadkowych poleceń skopiowanych z internetu.

## Gdy sekret wycieknie

1. Natychmiast unieważnij lub zmień sekret u dostawcy usługi.
2. Usuń go z bieżącej wersji pliku.
3. Zatrzymaj publikowanie repozytorium i sprawdź historię Git.
4. Zmień wszystkie dane, które mogły zostać ujawnione.
