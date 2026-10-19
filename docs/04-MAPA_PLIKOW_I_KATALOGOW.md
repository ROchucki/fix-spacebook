# Mapa plikow i katalogow — Fix&Spacebook

Aktualizacja: 2026-10-19.

## Cel

Mapa ulatwia powrot do pracy z telefonu. Nie potwierdza dzialania funkcji ani zawartosci niesprawdzonych katalogow.

## Struktura

```text
fix-spacebook/
├── .gitignore
├── README.md
├── docs/
│   ├── 01-WIZJA_PROJEKTU.md
│   ├── 02-ZAKRES_PIERWSZEJ_WERSJI.md
│   ├── 03-LISTA_ZADAN_I_PRIORYTETY.md
│   ├── 04-MAPA_PLIKOW_I_KATALOGOW.md
│   ├── 05-ZASADY_BEZPIECZENSTWA.md
│   ├── 06-START_W_TERMUXIE.md
│   ├── 11-SKILLS_I_TRYBY_PRACY_AI.md
│   ├── 12-UWAGI_DO_FRONTENDU.md
│   ├── 13-PLAN_WERSJI_DOCELOWEJ.md
│   ├── 14-ZAKRES_MVP_I_DOSTEP.md
│   ├── INVESTOR_ONE_PAGER.md
│   └── PROJECT_CONTEXT.md
├── frontend/
├── backend/
├── infra/
└── tests/
```

W lokalnym klonie wystepuje tez `.git/`; nie jest katalogiem tresci projektu wersjonowanym w repozytorium. Zawartosc katalogow innych niz `docs/` nie jest tu kompletna inwentaryzacja.

## Najwazniejsze miejsca

| Miejsce | Przeznaczenie |
|---|---|
| `README.md` | Opis projektu, stan i start pracy |
| `frontend/README.md` | Pliki frontendu, lokalny podglad i ograniczenia |
| `frontend/index.html` | Ekran startowy, kategorie, formularze, konto i pomoc |
| `frontend/app.js` | Formularze, kategorie, wysylanie zlecen i testowy podglad oferty |
| `frontend/auth.js` | Kod kont i sesji Supabase |
| `frontend/supabase-config.js` | Konfiguracja publicznego klienta; bez klucza administracyjnego |
| `frontend/style.css` | Style interfejsu |
| `docs/01-WIZJA_PROJEKTU.md` | Cel i kierunek |
| `docs/02-ZAKRES_PIERWSZEJ_WERSJI.md` | Etap przygotowawczy repozytorium |
| `docs/03-LISTA_ZADAN_I_PRIORYTETY.md` | Checklista etapow, implementacji i testow |
| `docs/05-ZASADY_BEZPIECZENSTWA.md` | Ochrona kont i danych |
| `docs/06-START_W_TERMUXIE.md` | Praca w Termuxie |
| `docs/11-SKILLS_I_TRYBY_PRACY_AI.md` | Tryby i zasady pracy AI/LLM |
| `docs/12-UWAGI_DO_FRONTENDU.md` | Uwagi i statusy poprawek |
| `docs/13-PLAN_WERSJI_DOCELOWEJ.md` | Kolejnosc rozwoju |
| `docs/14-ZAKRES_MVP_I_DOSTEP.md` | Zatwierdzony zakres MVP i dostep |
| `docs/PROJECT_CONTEXT.md` | Biezacy stan, granice weryfikacji i dalsze kroki |
| `docs/INVESTOR_ONE_PAGER.md` | Opis dla inwestora |
| `backend/`, `infra/`, `tests/` | Katalogi projektu; sama obecnosc nie potwierdza gotowej implementacji |

`ZASADY_WSPOLNEJ_PRACY.md` nie byl dostepny w katalogu glownym podczas kontroli. Nie wpisujemy go jako istniejacego pliku ani nie odtwarzamy tresci. Osobne demo `ROchucki/fix-spacebook-frontend-demo` nie jest podkatalogiem glownego repozytorium.

## Zasady nazw i aktualizacji

- Dokumenty zapisujemy w Markdown; nazwy bez spacji i polskich znakow.
- Glowne dokumenty tematyczne maja numer, z wyjatkiem istniejacych nazw takich jak `PROJECT_CONTEXT.md`.
- Jeden plik opisuje jeden temat.
- Poprawiamy istniejacy dokument zamiast tworzyc kolejna wersje lub kopie do podmiany.
- Przy zmianie struktury aktualizujemy mape zgodnie z rzeczywistym stanem.
- Kopie lokalne, ikony i plik `=` nie sa automatycznie dodawane ani usuwane.

## Szybka kontrola lokalna

```bash
cd ~/fix-spacebook
ls -la
ls -la docs
git status
git diff
```
