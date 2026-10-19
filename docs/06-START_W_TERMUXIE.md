# Start pracy w Termuxie — Fix&Spacebook

Aktualizacja: 2026-10-19.

## 1. Kontrola przed synchronizacją

```bash
cd ~/fix-spacebook
git status --short --branch
git diff
git diff --cached
```

Najpierw sprawdź gałąź, lokalne zmiany, indeks i nieśledzone pliki. Nie wykonuj automatycznie `git pull`, `git add .`, kasowania kopii ani resetowania historii. Stan widoczny przez GitHub nie pokazuje niezapisanej pracy na telefonie.

## 2. Synchronizacja po ocenie stanu

Jeżeli nie ma lokalnych zmian ani nieprzejrzanych plików kolidujących z pobieranymi zmianami, pobierz informacje z serwera:

```bash
git fetch origin
git status --short --branch
```

Dla gałęzi `main`:
- Bez ahead/behind po udanym fetch: brak różnicy commitów względem `origin/main`; nadal oceń lokalne pliki.
- Tylko behind: po sprawdzeniu stanu można wykonać poniższą synchronizację.
- Tylko ahead: przejrzyj lokalne commity; nie twórz niepotrzebnego merge.
- Ahead i behind: gałęzie są rozbieżne; zatrzymaj się i ustal sposób połączenia, bez automatycznego rebase lub reset.
- Błąd fetch lub brak informacji o gałęzi zdalnej: nie ogłaszaj aktualności repo.

Synchronizacja wyłącznie po spełnieniu powyższych warunków:

```bash
git pull --ff-only origin main
git status --short --branch
```

Przy błędzie zatrzymaj procedurę; nie wymuszaj nadpisania. Lokalne zmiany i nieśledzone pliki wymagają osobnej oceny. Nie usuwaj ani nie chowaj ich automatycznie.

## 3. Edycja istniejącego dokumentu

Przykład dla konkretnego istniejącego pliku:

```bash
nano docs/PROJECT_CONTEXT.md
```

W `nano`: zapis `Ctrl+O`, następnie Enter; wyjście `Ctrl+X`; wyszukiwanie `Ctrl+W`. Nie twórz kolejnego dokumentu o tym samym przeznaczeniu zamiast poprawić właściwy plik.

## 4. Kontrola i zapis uzgodnionych zmian

Najpierw przejrzyj całość:

```bash
git status
git diff
git diff --cached
```

Poniższy przykład obejmuje wyłącznie punkt kontrolny. Używaj go tylko wtedy, gdy zatwierdzony zakres rzeczywiście dotyczy tego pliku i indeks nie zawiera innych, niezatwierdzonych zmian:

```bash
git add -- docs/PROJECT_CONTEXT.md
git diff --cached --name-only
git diff --cached
```

Dopiero po potwierdzeniu zgodności indeksu z zakresem:

```bash
git commit -m "docs: zaktualizuj punkt kontrolny"
git push origin main
git status --short --branch
```

Przy innym zadaniu wskaż jego konkretne pliki i opis commita. Nie używaj `git add .` do nieprzejrzanego zestawu. Nie dodawaj automatycznie `frontend/icons/`, pliku `=` ani kopii `.backup-*` i `.before-*`. Błąd commita lub push wymaga wyjaśnienia przed dalszymi krokami.

Nie wpisuj do terminala tekstu wyniku Git, np. `new file:` albo `nothing to commit`. Commit, udany push, lokalny podgląd i publiczne wdrożenie to różne etapy.

## 5. Testy i koniec sesji

Dla istotnych lub ryzykownych zmian — logowania, uprawnień, zapisu danych — wykonaj test od razu. Drobne powiązane poprawki można sprawdzać wspólnie po pakiecie 2–3 zmian. Przy dłuższej pracy stosuj ustalone punkty kontrolne. Nie wpisuj testu jako wykonanego na podstawie samego odczytu kodu.

Przed zakończeniem:

```bash
git status --short --branch
git log -1 --oneline
```

Zapisz rzeczywisty wynik, pliki, testy i następny krok w istniejącym punkcie kontrolnym oraz zadaniach. Jeśli pozostają lokalne zmiany, zachowaj je i opisz; nie kasuj tylko po to, by uzyskać czysty katalog.

```bash
exit
```

`exit` zamyka sesję, nie usuwa plików ani commitów. Nie oznacza publikacji aplikacji. Podgląd frontendu opisuje `../frontend/README.md`.
