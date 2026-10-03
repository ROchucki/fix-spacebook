# Zakres pierwszej wersji — Fix Spacebook

## 1. Cel pierwszej wersji

Pierwsza wersja Fix Spacebook ma stworzyć prostą, prywatną i uporządkowaną bazę projektu w repozytorium GitHub.

Nie budujemy jeszcze aplikacji. Najpierw tworzymy czytelną dokumentację, strukturę plików i sposób pracy możliwy do prowadzenia z telefonu przez Termux.

## 2. Co wchodzi do wersji 1

### Dokumentacja

- Wizja projektu w `docs/01-WIZJA_PROJEKTU.md`.
- Zakres pierwszej wersji w tym pliku.
- Lista zadań i priorytetów.
- Mapa plików oraz struktury repozytorium.
- Opis sposobu pracy z AI.
- Zasady bezpiecznej pracy z Git i GitHub.

### Organizacja pracy

- Repozytorium GitHub jest prywatne.
- Każda istotna zmiana ma osobny commit z jasnym opisem.
- Po większym etapie zmiany są wysyłane przez `git push`.
- Stan pracy sprawdzamy poleceniem `git status`.
- Dokumenty zapisujemy w Markdown.

### Narzędzia

- Android jako główne urządzenie pracy.
- Termux do obsługi Git i plików.
- GitHub jako kopia zapasowa oraz historia zmian.
- AI jako pomoc w tworzeniu dokumentacji, planów i kodu.

## 3. Czego nie robimy jeszcze

W pierwszej wersji świadomie nie tworzymy:

- aplikacji webowej, mobilnej ani PWA,
- logowania użytkowników,
- bazy danych,
- panelu administracyjnego,
- płatności i kont użytkowników,
- automatycznych integracji z zewnętrznymi usługami,
- publicznego wdrożenia projektu,
- przechowywania haseł, tokenów API lub danych wrażliwych w repozytorium.

## 4. Gotowość wersji 1

Wersję 1 uznajemy za gotową, gdy repozytorium zawiera:

1. wizję projektu,
2. zakres pierwszej wersji,
3. mapę plików,
4. listę zadań,
5. opis pracy z AI,
6. podstawowe zasady bezpieczeństwa,
7. czytelną instrukcję rozpoczęcia pracy w Termuxie.

## 5. Kolejność realizacji

1. Uzupełnienie dokumentacji podstawowej.
2. Uporządkowanie katalogów repozytorium.
3. Przygotowanie listy zadań i priorytetów.
4. Utworzenie prostego szablonu notatki lub projektu.
5. Sprawdzenie, czy cały projekt można wygodnie obsłużyć z telefonu.
6. Dopiero później decyzja o aplikacji, automatyzacjach i integracjach.

## 6. Kryterium prostoty

Każdy element pierwszej wersji powinien:

- działać bez komputera,
- być możliwy do edycji w Termuxie,
- mieć prostą nazwę i jasne miejsce w katalogach,
- nie wymagać płatnych narzędzi,
- nie zwiększać niepotrzebnie ryzyka dla prywatności
