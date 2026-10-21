# Fix&Spacebook

Projekt platformy usług lokalnych łączącej osoby szukające pomocy z wykonawcami lokalnymi.

## Demo do testów na GitHub Pages

Frontend jest statyczny i nadaje się do publikacji na GitHub Pages bez osobnego hostingu.

### Przewidywany publiczny link

Po włączeniu GitHub Pages dla repozytorium i pierwszym wdrożeniu z gałęzi `main` link będzie miał postać:

https://ROchucki.github.io/fix-spacebook/

### Jak włączyć Pages

1. Wejdź do repozytorium na GitHub.
2. Kliknij `Settings` → `Pages`.
3. Wybierz źródło `GitHub Actions`.
4. Zapisz ustawienia.
5. Po zapisaniu i pierwszym pushu do `main` workflow z pliku `.github/workflows/deploy-pages.yml` opublikuje stronę.

### Ważne ograniczenia

- To jest demo do testów i prezentacji, nie finalne MVP.
- Kody frontendu korzystają z Supabase, ale poprawność schematu bazy, RLS i dostępu między kontami musi zostać potwierdzona przed publicznym udostępnieniem.
- Bez testów bazy nie publikujemy aplikacji jako finalnego produktu.

## Struktura

- `frontend/` — statyczny interfejs HTML/CSS/JS
- `docs/` — dokumentacja i punkt kontrolny projektu
- `.github/workflows/deploy-pages.yml` — deployment na GitHub Pages

## Uruchomienie lokalnie

```bash
cd ~/fix-spacebook/frontend
python -m http.server 8000 --bind 127.0.0.1
```

Otwórz w przeglądarce:

```text
http://127.0.0.1:8000
```

## Stan i bezpieczenstwo

- Publiczny klucz Supabase jest bezpieczny dla frontendu.
- Nie dodawaj klucza admina ani danych wrażliwych do repozytorium.
- RLS i prawa dostępu muszą być sprawdzone przed udostępnieniem publicznym.
