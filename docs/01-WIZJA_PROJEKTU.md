# Wizja projektu — Fix Spacebook

## 1. Cel projektu

Fix Spacebook to prywatna, uporządkowana przestrzeń robocza do rozwijania projektów, notatek, planów i materiałów z pomocą AI.

Projekt ma pomagać w codziennej pracy nad:
- programowaniem i GitHubem,
- nauką AI, LLM i automatyzacji,
- cyberbezpieczeństwem i OSINT,
- organizacją wiedzy, zadań i dokumentacji,
- planowaniem własnych projektów oraz rozwiązań biznesowych.

## 2. Główne założenia

- Prywatność danych jest priorytetem.
- Projekt ma być prosty w użyciu na telefonie z Androidem.
- Dokumentacja i wiedza mają być przechowywane w formacie Markdown.
- GitHub służy jako historia zmian, kopia zapasowa i miejsce rozwoju projektu.
- AI ma wspierać użytkownika w planowaniu, analizie, tworzeniu kodu i porządkowaniu wiedzy.
- Rozwiązania powinny być możliwie tanie, praktyczne i łatwe do utrzymania.

## 3. Dla kogo

Projekt jest tworzony przede wszystkim dla jednej osoby pracującej samodzielnie na Androidzie i w Termuxie.

Docelowo może być rozwijany jako osobista baza wiedzy oraz zestaw narzędzi do prowadzenia projektów technicznych.

## 4. Zakres pierwszej wersji

Pierwsza wersja skupia się na uporządkowanym repozytorium GitHub:

- dokumenty Markdown w katalogu `docs/`,
- jasna mapa plików i struktury projektu,
- lista zadań oraz priorytetów,
- opisy sposobu pracy z AI,
- historia zmian prowadzona przez Git.

## 5. Kierunek rozwoju

W kolejnych etapach projekt może zawierać:

- prostą aplikację webową lub PWA,
- wyszukiwanie notatek i dokumentów,
- lokalne lub zewnętrzne modele AI,
- automatyzacje w Pythonie,
- integracje z GitHubem, notatkami i kalendarzem,
- moduły do analizy informacji, OSINT i cyberbezpieczeństwa,
- szablony projektów, promptów i procedur pracy.

## 6. Zasady pracy

1. Każda ważna decyzja ma krótki opis w Markdown.
2. Zmiany wykonujemy małymi krokami.
3. Po każdym zakończonym etapie sprawdzamy `git status`.
4. Gotowe zmiany zapisujemy przez commit i wysyłamy przez `git push`.
5. Nie zapisujemy haseł, tokenów API ani prywatnych danych w repozytorium.
6. Najpierw tworzymy prostą, działającą wersję, a dopiero potem rozbudowujemy funkcje.

## 7. Miara sukcesu

Projekt będzie spełniał swoją rolę, jeżeli pozwoli szybko:
- odnaleźć potrzebną notatkę lub decyzję,
- wrócić do przerwanej pracy po kilku dniach,
- prowadzić projekt z telefonu,
- bezpiecznie przechowywać historię zmian,
- korzystać z AI w uporządkowany i świadomy sposób.
