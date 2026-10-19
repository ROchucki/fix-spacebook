# Fix&Spacebook

Projekt platformy uslug lokalnych laczacej osoby szukajace pomocy z osobami i firmami wykonujacymi legalne uslugi. Start w Polsce; docelowo kolejne rynki europejskie i swiatowe. Zasieg globalny jest celem rozwoju, nie obecna dostepnoscia produktu. Uslugi pozostaja lokalne, zgodnie z obszarem dzialania wykonawcy. Kraje, terminy wdrozen i obszar pilotazu pozostaja do ustalenia.

## Kategorie poczatkowe

- Naprawy samochodow.
- Naprawy rowerow.
- Naprawy AGD i RTV.
- Sprzatanie.
- Prace ogrodowe.
- Przeprowadzki.
- Opieka nad zwierzetami.

## Glowna aplikacja — stan kodu

Podstawa kontroli: `f39b3ae`, 2026-10-19.

Frontend HTML, CSS i JavaScript zawiera strone startowa, kategorie i podkategorie, kod filtrowania kategorii, formularze zlecenia i wykonawcy, minimum 20 znakow opisu oraz podpowiedzi zalezne od kategorii.

Istnieje kod kont Supabase oraz wysylania zlecen do tabeli `jobs` po sprawdzeniu uzytkownika, z obsluga bledow i zwracaniem ID. Formularz wykonawcy tworzy testowy podglad oferty bez jej zapisu do bazy.

Obecnosc kodu nie potwierdza konfiguracji tabel, przypisania wlasciciela i daty, RLS, trwalosci danych ani poprawnosci dzialania w przegladarce. Nie potwierdzono kompletnego procesu zlecenie → odpowiedz → prywatna rozmowa. Nie oglaszamy gotowego MVP ani publicznego wdrozenia.

## Osobne demo

Repozytorium: `ROchucki/fix-spacebook-frontend-demo`. Punkt odniesienia: `demo-baseline-2026-10-07`. Biezacego stanu demo nie sprawdzono podczas tej kontroli. Nie przenosimy na nie automatycznie informacji o funkcjach glownej aplikacji ani odwrotnie. Historyczne ograniczenia demo opisuje punkt kontrolny.

## Plan funkcjonalnego MVP

Zakres zatwierdzono 2026-10-06 w `docs/14-ZAKRES_MVP_I_DOSTEP.md`.

- Konta oraz profile klientow i wykonawcow.
- Trwaly zapis zlecen i ofert.
- Przegladanie ogloszen wedlug kategorii i lokalizacji.
- Odpowiedzi na zlecenia.
- Prywatne rozmowy dostepne wylacznie uczestnikom.
- Zglaszanie naruszen i podstawowa moderacja.

Supabase wybrano jako backend i baze. Wedlug informacji przekazanej przez wlasciciela hosting jest przygotowany, ale podpiecie i wdrozenie sa wstrzymane; konfiguracji nie zweryfikowano. Harmonogram, koszty oraz brakujace zasady produktu wymagaja ustalenia. Kolejne kraje i jezyki sa dalszym etapem.

## Struktura i dokumentacja

- `frontend/` — interfejs i kod integracji Supabase; podglad lokalny w `frontend/README.md`.
- `backend/`, `infra/`, `tests/` — istnienie katalogow nie dowodzi implementacji ani testow.
- `docs/01-WIZJA_PROJEKTU.md` — wizja.
- `docs/02-ZAKRES_PIERWSZEJ_WERSJI.md` — etap przygotowawczy.
- `docs/03-LISTA_ZADAN_I_PRIORYTETY.md` — checklista implementacji i testow.
- `docs/04-MAPA_PLIKOW_I_KATALOGOW.md` — mapa repozytorium.
- `docs/05-ZASADY_BEZPIECZENSTWA.md` — bezpieczenstwo.
- `docs/06-START_W_TERMUXIE.md` — praca w Termuxie.
- `docs/11-SKILLS_I_TRYBY_PRACY_AI.md` — tryby i zasady pracy AI/LLM.
- `docs/12-UWAGI_DO_FRONTENDU.md` — obie poprawki P1 odnotowane jako wykonane.
- `docs/13-PLAN_WERSJI_DOCELOWEJ.md` — plan rozwoju.
- `docs/14-ZAKRES_MVP_I_DOSTEP.md` — zakres i dostep do danych.
- `docs/PROJECT_CONTEXT.md` — biezacy punkt kontrolny i pozostale niespojnosci.
- `docs/INVESTOR_ONE_PAGER.md` — opis inwestorski wymagajacy uzgodnienia statusu z glowna aplikacja.

## Start pracy w Termuxie

Najpierw sprawdz stan i roznice:

```bash
cd ~/fix-spacebook
git status
git diff
```

Synchronizacje wykonuj dopiero po ocenie zmian lokalnych; nie nadpisuj ich automatycznie. Podglad opisuje `frontend/README.md`. Stan telefonu nie jest widoczny przez sam dostep do GitHub.

## Bezpieczenstwo

Nie zapisuj hasel, tokenow, kluczy administracyjnych ani danych wrazliwych w repozytorium. Konfiguracja frontendu moze zawierac publiczny klucz publishable Supabase; nie zastepuje to zasad dostepu do bazy. Zmiany repozytorium, hostingu i Supabase wymagaja zatwierdzonego zakresu.
