# Fix&Spacebook — opis dla inwestora

Wersja: 0.2. Aktualizacja: 2026-10-19.
Etap: rozwój funkcjonalnego MVP; frontend oraz kod integracji kont i wysyłania zleceń do Supabase. Nie potwierdzono gotowości do publikacji.

## Problem

Hipoteza do zweryfikowania: klienci potrzebują prostego sposobu znalezienia lokalnego wykonawcy konkretnej usługi, a wykonawcy — dotarcia do osób potrzebujących pomocy w ich obszarze działania.

Projekt ma ograniczyć trudności związane z opisaniem potrzeby, określeniem lokalizacji i znalezieniem odpowiedniej oferty.

## Rozwiązanie

Fix&Spacebook to projekt platformy usług lokalnych, łączącej klientów z osobami i firmami wykonującymi usługi. Start w Polsce; docelowo kolejne rynki europejskie i światowe, etapami. Zasięg międzynarodowy jest celem rozwoju, nie obecną dostępnością produktu. Usługi pozostają lokalne, zgodnie z obszarem działania wykonawcy. Kraje i terminy wdrożeń pozostają do ustalenia.

Klient opisuje potrzebę, wybiera kategorię i lokalizację. Wykonawca przedstawia ofertę, zakres usług i obszar dojazdu.

Kategorie początkowe: naprawy samochodów, rowerów, AGD i RTV, sprzątanie, prace ogrodowe, przeprowadzki oraz opieka nad zwierzętami. Celem jest ułatwienie znalezienia wykonawcy legalnej usługi. Procedury weryfikacji i moderacji wymagają dopracowania.

## Główna aplikacja — stan implementacji

Repozytorium: `ROchucki/fix-spacebook`. Podstawa kontroli kodu: commit `f39b3ae`.

Frontend HTML, CSS i JavaScript obejmuje:
- Stronę startową, kategorie i podkategorie oraz kod filtrowania kart kategorii.
- Formularz zlecenia: kategorię, opis minimum 20 znaków, lokalizację i opcjonalny budżet. Kod rozdziela miejscowość i opcjonalną dzielnicę po przecinku.
- Podpowiedzi opisu zależne od kategorii.
- Formularz wykonawcy: nazwę, kategorię, lokalizację, promień dojazdu i opis; otwieranie, zamykanie i testowy podgląd tych danych. Oferta nie jest zapisywana do bazy.
- Kod rejestracji, logowania, sesji i wylogowania Supabase; commit kont `5b44859`.
- Wysyłanie zlecenia do `jobs` po sprawdzeniu użytkownika, obsługę błędów i zwracanie ID; commit `f39b3ae`.

Istnienie kodu nie oznacza potwierdzenia poprawności konfiguracji bazy, przypisania właściciela i daty, RLS, trwałości ani odczytu danych. Wcześniejszy punkt kontrolny odnotowuje lokalne potwierdzenie działania kont przez właściciela; testu nie powtórzono podczas tej kontroli. Nie potwierdzono faktycznego kojarzenia stron, pełnej obsługi odpowiedzi ani prywatnych rozmów.

## Osobne demo i hosting

Osobne repozytorium demo: `ROchucki/fix-spacebook-frontend-demo`. Punkt odniesienia: `demo-baseline-2026-10-07`. Aktualnego stanu demo nie sprawdzono; nie przypisujemy mu funkcji głównej aplikacji. Nie potwierdzono adresu działającego demo online.

Według informacji właściciela odnotowanej w przekazanym pakiecie z 2026-10-19 hosting jest przygotowany, ale podpięcie i wdrożenie pozostają wstrzymane. Konfiguracji nie zweryfikowano. Push do GitHub nie potwierdza publicznego wdrożenia.

## Plan funkcjonalnego MVP

Zakres zatwierdzono 2026-10-06 w `docs/14-ZAKRES_MVP_I_DOSTEP.md`. Podstawowy proces docelowy: dodanie zlecenia → przeglądanie przez wykonawców → odpowiedź → prywatny kontakt między stronami.

Do realizacji lub potwierdzenia pozostają:
- Konfiguracja i kontrola uprawnień bazy Supabase.
- Konta oraz podstawowe profile klientów i wykonawców.
- Trwały zapis, odczyt i edycja zleceń oraz ofert z kontrolą dostępu.
- Przeglądanie ogłoszeń według kategorii i lokalizacji.
- Odpowiedzi na zlecenia i prywatne rozmowy dostępne wyłącznie uprawnionym uczestnikom.
- Zgłaszanie naruszeń, podstawowa moderacja i ochrona danych.

Płatności i zaawansowane automatyczne dopasowanie pozostają poza początkowym MVP. Zasady pracy z AI/LLM dotyczą procesu rozwoju, nie potwierdzają funkcji AI w produkcie.

## Walidacja i kolejne kroki

1. Domknąć dokumentację oraz brakujące zasady produktu i dostępu.
2. Sprawdzić bazę, właściciela danych i RLS, a następnie zapis, trwałość i odczyt z różnych kont.
3. Przetestować interfejs na Androidzie oraz pełny proces zlecenia.
4. Wybrać ograniczony obszar i kategorie pilotażu oraz uzgodnić koszt i harmonogram.
5. Po osobnym zatwierdzeniu wdrożyć pilotaż z klientami i wykonawcami.

W pilotażu mierzyć liczbę opublikowanych zleceń, odsetek z odpowiedzią wykonawcy, czas do pierwszej odpowiedzi, kontakty prowadzące do wykonania usługi oraz powroty klientów i wykonawców. Lokalizacja, liczba uczestników i cele liczbowe pozostają do ustalenia.

## Model biznesowy i finansowanie

Model przychodów wymaga walidacji. Budżet MVP i kwota finansowania pozostają do oszacowania. Ewentualne środki mają służyć rozwojowi MVP, bezpieczeństwu, moderacji i pozyskaniu uczestników pilotażu. Każda płatna usługa wymaga osobnej zgody właściciela.

Dokument nie przedstawia potwierdzonej trakcji, przychodów ani zweryfikowanego popytu.

## Pitch

Fix&Spacebook ma ułatwiać znalezienie lokalnej pomocy: klient opisuje potrzebę, a wykonawca przedstawia usługi i obszar działania — w jednym miejscu.
