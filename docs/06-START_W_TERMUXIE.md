# Start pracy w Termuxie — Fix Spacebook

## Start sesji

Otwórz Termux i wykonaj:

```bash
cd ~/fix-spacebook
git pull
git status
```

Jeżeli Git pokazuje, że gałąź jest aktualna, możesz rozpocząć pracę.

## Edycja dokumentu

Nowy lub istniejący dokument otworzysz poleceniem:

```bash
nano docs/NAZWA_PLIKU.md
```

W `nano`:

- zapis: `CTRL` + `O`, następnie `Enter`,
- wyjście: `CTRL` + `X`,
- wyszukiwanie: `CTRL` + `W`.

Na części klawiatur w Termuxie `Volume Down` działa jako `Ctrl`.

## Zapis na GitHub

Po edycji wykonaj kolejno:

```bash
git status
git diff
git add docs/NAZWA_PLIKU.md
git commit -m "Opis zmiany"
git push
git status
```

Nie wpisuj ręcznie tekstu z wyniku Git, np. `new file:` albo `nothing to commit`.

## Koniec pracy

Przed wyjściem sprawdź:

```bash
git status
```

Gdy katalog roboczy jest czysty i gałąź jest aktualna, zamknij sesję:

```bash
exit
```

`exit` zamyka bieżącą sesję Termuxa. Nie usuwa plików, repozytorium ani commitów.
