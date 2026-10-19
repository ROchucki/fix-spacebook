# Lista zadan i priorytety — Fix&Spacebook

Aktualizacja: 2026-10-19.

## Zasady oceny

- `[x]` oznacza wykonanie i potwierdzenie w zakresie opisanym przy zadaniu.
- `[ ]` oznacza brak wykonania albo brak wymaganej weryfikacji.
- Obecnosc kodu, test przegladarkowy, commit, push i wdrozenie to osobne fakty.
- Glowna aplikacja i osobne demo maja osobne statusy.
- Zakres MVP: `14-ZAKRES_MVP_I_DOSTEP.md`; biezacy kontekst: `PROJECT_CONTEXT.md`.
- Dokument 02 opisuje etap przygotowawczy.

## Etap A — przygotowanie projektu

- [x] Prywatne repozytorium GitHub — wedlug wczesniejszej checklisty; widocznosci nie sprawdzano ponownie.
- [x] Polaczenie SSH z GitHub w Termuxie — wedlug wczesniejszej checklisty.
- [x] Dokument wizji projektu.
- [x] Dokument zakresu pierwszej wersji.
- [x] Mapa plikow i katalogow.
- [x] Zasady bezpieczenstwa.
- [x] Instrukcja startu w Termuxie.
- [ ] Sprawdzenie kompletnosci i spojnosci calej dokumentacji, w tym dokumentow 13 i opisu inwestorskiego.
- [ ] Potwierdzenie zapisu i odczytu aktualizowanego pakietu README, mapy, checklisty, zasad AI/LLM i punktu kontrolnego.
- [ ] Odnalezienie pelnego raportu audytu i porownanie wszystkich jego zalecen; przekazany JSON nie zawiera pelnego raportu.
- [ ] Odnalezienie brakujacego pliku zasad wspolnej pracy bez zgadywania jego tresci.
- [ ] Ostateczny przeglad etapu przygotowawczego.

## Etap B — osobne demo

Punkt odniesienia: `demo-baseline-2026-10-07`. Ponizsze testy wymagaja potwierdzenia dla osobnego repo demo, nie glownej aplikacji.

- [ ] Strona uruchamia sie w przegladarce na Androidzie.
- [ ] Kategorie i formularz zlecenia dzialaja poprawnie.
- [ ] Formularz wykonawcy i promien dojazdu dzialaja poprawnie.
- [ ] Walidacja opisu dziala poprawnie.
- [ ] Wyszukiwanie i podglad oferty dzialaja poprawnie.
- [ ] Demo jasno informuje, czy publikuje lub zapisuje dane.
- [ ] Zapisano wyniki testow i znalezione bledy.

## Etap C — decyzje przed publikacja MVP

- [x] Wybrano Supabase jako backend i baze — odnotowane w dokumencie 13.
- [ ] Zweryfikowac konfiguracje przygotowanego hostingu; podpiecie i wdrozenie pozostaja wstrzymane wedlug przekazanej informacji wlasciciela.
- [ ] Ustalic statusy zlecen i zasady publikacji.
- [ ] Ustalic limity dlugosci tekstow.
- [ ] Ustalic zasady usuwania kont i danych.
- [ ] Ustalic retencje wiadomosci i zgloszen.
- [ ] Ustalic uprawnienia moderatora.
- [ ] Zatwierdzic walute budzetu i proponowanej ceny; obecnosc PLN w interfejsie nie zamyka decyzji produktowej.
- [ ] Ustalic obszar i kategorie pierwszego pilotazu.
- [ ] Ustalic cele pilotazu oraz sposob ich pomiaru.

Platne uslugi wymagaja osobnej zgody wlasciciela. W testach uzywamy fikcyjnych danych.

## Etap D — glowna aplikacja

Kod sprawdzony na `f39b3ae`; istnienie implementacji nie zamyka testow.

- [x] Kod wysylania zlecen do `jobs`, kontroli zalogowania, obslugi bledow i zwracania ID istnieje w `app.js`.
- [x] Kod podgladu oferty wykonawcy istnieje; nie zapisuje oferty do bazy.
- [ ] Konta i logowanie: powtorzyc test; historyczne potwierdzenie wlasciciela nie obejmuje nowej kontroli uprawnien i ukrywania e-maila.
- [ ] Jedno konto obsluguje role klienta i wykonawcy.
- [ ] Zweryfikowac schemat `jobs`, automatyczne przypisanie wlasciciela i daty oraz RLS.
- [ ] Potwierdzic trwaly zapis zlecen z wlascicielem i data utworzenia.
- [ ] Trwaly zapis ofert wykonawcow.
- [ ] Publiczne przegladanie opublikowanych ofert.
- [ ] Przegladanie otwartych zlecen przez wykonawcow.
- [ ] Wyszukiwanie i filtrowanie ogloszen wedlug kategorii i lokalizacji; filtrowanie kart kategorii nie jest wyszukiwaniem ogloszen.
- [ ] Edycja i zamykanie wlasnych ogloszen.
- [ ] Odpowiedzi wykonawcow na zlecenia.
- [ ] Dostep do odpowiedzi tylko dla autora i wlasciciela zlecenia.
- [ ] Prywatna rozmowa dostepna wylacznie uczestnikom.
- [ ] Zgloszenia naruszen i status ich rozpatrzenia.
- [ ] Obsluga zgloszen i ukrywanie tresci przez administratora.
- [ ] Egzekwowanie uprawnien po stronie backendu.
- [ ] Brak publicznego e-maila, telefonu i dokladnego adresu.

## Etap E — testy i pilotaz

- [ ] Test: zlecenie → odpowiedz → prywatna rozmowa.
- [ ] Testy dostepu z uzyciem roznych kont.
- [ ] Test trwalosci danych, odczytu po odswiezeniu i obslugi bledow.
- [ ] Procedura kopii zapasowej i test odtworzenia.
- [ ] Test obslugi na telefonie.
- [ ] Przygotowanie zasad korzystania i informacji o danych.
- [ ] Wdrozenie wersji pilotazowej po osobnym zatwierdzeniu.
- [ ] Testy z klientami i wykonawcami.

## Znane niespojnosci do osobnej poprawki

- [ ] `frontend/index.html`: sekcja „Nastepny etap” zapowiada istniejacy juz formularz wykonawcy.
- [ ] `frontend/app.js`: sprawdzic i poprawic dzielenie zapytania wyszukiwania zapisane jako `/s+/`; wykonac test wielu slow.
- [ ] Ujednolicic dokument 13 z pozniejsza informacja o przygotowanym, ale niepodlaczonym hostingu.
- [ ] Zaktualizowac opis inwestorski o stan glownej aplikacji bez przenoszenia go na osobne demo.

Dokument 12 odnotowuje obie poprawki P1 jako wykonane 2026-10-07. Nie otwieramy ich ponownie jako niewykonanych tylko z powodu starego README.

## Poza poczatkowym MVP

- Platnosci.
- Kolejne kraje i jezyki.
- Zaawansowane dopasowanie.
- Osobna aplikacja APK.
- AI, OSINT i automatyzacje niezwiązane z podstawowym procesem produktu; nie dotyczy to zasad korzystania z LLM podczas prac nad repozytorium.

## Najblizsza kolejnosc

1. Domknac dokumentacje i porownac z pelnym raportem, bez nowych plikow zastepczych.
2. W osobno zatwierdzonym zakresie poprawic i przetestowac wskazane niespojnosci frontendu.
3. Zweryfikowac baze i dostep, potem zapis, trwalosc i odczyt z roznych kont.
4. Rozwijac oferty, odpowiedzi, rozmowy i moderacje.
