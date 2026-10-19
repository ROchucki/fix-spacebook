# Fix&Spacebook — zakres MVP i dostęp

Data zatwierdzenia: 2026-10-06. Aktualizacja informacji o technologii: 2026-10-19.

## Cel

Start w Polsce.
Proces: zlecenie → odpowiedź wykonawcy → prywatny kontakt
w aplikacji.

Płatności, kolejne kraje i zaawansowane dopasowanie
pozostają poza początkowym MVP.

## Konto

- E-mail do logowania, niewidoczny publicznie.
- Nazwa wyświetlana.
- Jedno konto może działać jako klient i wykonawca.

## Zlecenie

- Kategoria.
- Opis.
- Miejscowość.
- Opcjonalna dzielnica.
- Opcjonalny budżet.
- Status.

## Oferta wykonawcy

- Nazwa wykonawcy lub firmy.
- Kategoria.
- Opis.
- Miejscowość.
- Promień dojazdu.

## Odpowiedź na zlecenie

- Powiązanie z wykonawcą i zleceniem.
- Treść odpowiedzi.
- Opcjonalna proponowana cena.

## Kontakt

Prywatna rozmowa w aplikacji.
Bez publicznego numeru telefonu.
Rozmowa dostępna wyłącznie jej uczestnikom.
Procedura dostępu moderatora do zgłoszonej rozmowy
wymaga osobnego ustalenia.

## Zgłoszenie naruszenia

- Wskazane ogłoszenie lub odpowiedź.
- Powód zgłoszenia.
- Status rozpatrzenia.

## Dane automatyczne

Data utworzenia i powiązanie z właścicielem
są ustalane przez system.

## Zasady dostępu

- Bez logowania: przeglądanie opublikowanych ofert wykonawców.
- Po zalogowaniu: publikowanie własnych zleceń i ofert.
- Wykonawca: przeglądanie otwartych zleceń i wysyłanie odpowiedzi.
- Właściciel: edycja i zamykanie własnych ogłoszeń.
- Odpowiedzi: dostęp tylko dla autora i właściciela zlecenia.
- Administrator: obsługa zgłoszeń i ukrywanie naruszających treści.

Publiczne ogłoszenia nie zawierają e-maila konta,
numeru telefonu ani dokładnego adresu.

## Do doprecyzowania przed wdrożeniem

- Statusy zleceń i zasady publikacji.
- Limity długości tekstów.
- Zasady usuwania kont i danych.
- Retencja wiadomości i zgłoszeń.
- Uprawnienia moderatora.
- Waluta budżetu i proponowanej ceny.

## Technologia i koszty

Supabase wybrano jako backend i bazę danych; decyzję odnotowuje dokument `13-PLAN_WERSJI_DOCELOWEJ.md`. Kod kont oraz wysyłania zleceń istnieje w głównej aplikacji, ale nie potwierdza poprawności schematu, przypisania właściciela i daty, RLS ani trwałości danych. Powyższe zasady są wymaganiami produktu, nie wynikiem testu konfiguracji.

Według informacji właściciela odnotowanej w przekazanym pakiecie z 2026-10-19 hosting jest przygotowany, lecz podpięcie i wdrożenie pozostają wstrzymane. Konfiguracji dostawcy nie zweryfikowano.

Płatne usługi wymagają osobnej zgody właściciela projektu.
Do testów używamy wyłącznie fikcyjnych danych.
