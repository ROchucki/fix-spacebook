# Zasady bezpieczeństwa — Fix Spacebook

## 1. Cel

Ten dokument określa proste zasady ochrony kont, kodu, notatek i danych związanych z projektem Fix Spacebook.

Najważniejsza zasada: do repozytorium Git nigdy nie zapisujemy haseł, kluczy prywatnych, tokenów API ani danych osobowych, których nie chcemy udostępniać.

## 2. Dane, których nie dodajemy do GitHub

Nie zapisujemy ani nie wysyłamy przez `git add`, `git commit` i `git push`:

- haseł do kont,
- kluczy prywatnych SSH, np. `~/.ssh/id_ed25519`,
- tokenów GitHub, OpenAI, Google, Telegram i innych usług,
- kluczy API,
- plików `.env` zawierających sekrety,
- kodów odzyskiwania i kodów 2FA,
- prywatnych adresów, numerów telefonów oraz dokumentów,
- baz danych z prywatnymi informacjami,
- plików kopii zapasowych zawierających dane wrażliwe.

## 3. Co można bezpiecznie umieścić w repozytorium

Można zapisywać:

- kod źródłowy bez sekretów,
- dokumentację Markdown,
- szablon `.env.example` bez prawdziwych wartości,
- publiczny klucz SSH, np. `~/.ssh/id_ed25519.pub`,
- przykładowe dane fikcyjne,
- instrukcje konfiguracji bez haseł,
- plik `.gitignore` blokujący pliki prywatne.

## 4. Zasady konta GitHub

- Używaj unikalnego, długiego hasła do GitHub.
