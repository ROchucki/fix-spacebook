START PRACY W TERMUXIE — FIX SPACEBOOK

START

1. Otwórz Termux.
2. Wpisz:
cd ~/fix-spacebook
3. Wpisz:
git pull
4. Wpisz:
git status

EDYCJA PLIKU

Aby utworzyć albo edytować dokument, wpisz:
nano docs/NAZWA_PLIKU.md

ZAPIS NA GITHUB

Po edycji wykonaj kolejno:
git add docs/NAZWA_PLIKU.md
git commit -m "Opis zmiany"
git push
git status

KONIEC PRACY

Najpierw wpisz:
git status

Jeżeli katalog jest czysty i aktualny, wpisz:
exit

Polecenie exit zamyka sesję Termuxa.
Nie usuwa plików ani repozytorium.
