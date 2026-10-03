# Mapa plików i katalogów — Fix Spacebook

## Cel

Ten dokument opisuje strukturę repozytorium i ułatwia szybki powrót do pracy z telefonu.

## Aktualna struktura

```text
fix-spacebook/
├── docs/
│   ├── 01-WIZJA_PROJEKTU.md
│   ├── 02-ZAKRES_PIERWSZEJ_WERSJI.md
│   ├── 03-LISTA_ZADAN_I_PRIORYTETY.md
│   ├── 04-MAPA_PLIKOW_I_KATALOGOW.md
│   ├── 05-ZASADY_BEZPIECZENSTWA.md
│   ├── 06-START_W_TERMUXIE.md
│   └── 11-SKILLS_I_TRYBY_PRACY_AI.md
├── .git/
└── README.md
```

## Najważniejsze miejsca

| Miejsce | Przeznaczenie |
|---|---|
| `README.md` | Główny opis projektu i szybki start |
| `docs/` | Dokumentacja projektu w Markdown |
| `docs/01-WIZJA_PROJEKTU.md` | Cel i kierunek projektu |
| `docs/02-ZAKRES_PIERWSZEJ_WERSJI.md` | Zakres wersji 1 |
| `docs/03-LISTA_ZADAN_I_PRIORYTETY.md` | Zadania P0, P1 i P2 |
| `docs/04-MAPA_PLIKOW_I_KATALOGOW.md` | Ten opis struktury |
| `docs/05-ZASADY_BEZPIECZENSTWA.md` | Zasady ochrony kont i danych |
| `docs/06-START_W_TERMUXIE.md` | Start pracy w Termuxie |
| `docs/11-SKILLS_I_TRYBY_PRACY_AI.md` | Sposób współpracy z AI |

## Zasady nazw

- Dokumenty zapisujemy jako pliki `.md`.
- Główne dokumenty mają numer na początku, np. `01-NAZWA.md`.
- Nazwy nie zawierają spacji ani polskich znaków.
- Jeden plik opisuje jeden konkretny temat.
- Przed dodaniem katalogu aktualizujemy tę mapę.

## Szybka kontrola

```bash
ls -la
ls -la docs
git status
```
