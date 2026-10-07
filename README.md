Sprawozdanie – Konspekt 1
ZAAWANSOWANE PROGRAMOWANIE SYSTEMÓW MOBILNYCH

Temat: Środowisko, repozytorium i powrót do języka
Edycja: 2026/2027
Technologie: Node.js, TypeScript, Git, Lodash

1. Cel laboratorium

Celem laboratorium było przygotowanie środowiska programistycznego dla języka TypeScript uruchamianego za pomocą Node.js, skonfigurowanie projektu npm oraz repozytorium Git. Następnie wykonano ćwiczenia dotyczące funkcji, parametrów resztowych, redukcji tablic, sprawdzania typów w czasie wykonywania oraz programowania obiektowego z wykorzystaniem klasy Calculator.

Ostatnim etapem było przygotowanie wariantu rozwiązania wykorzystującego bibliotekę Lodash.

2. Środowisko

W projekcie wykorzystano:

Node.js,

npm,

TypeScript,

Visual Studio Code,

Git,

GitHub,

bibliotekę Lodash.

Projekt został skonfigurowany tak, aby pliki TypeScript mogły być uruchamiane bezpośrednio przez Node.js.

Do sprawdzania poprawności typów wykorzystano polecenie:

npm run check


które wykonuje:

tsc --noEmit


Do uruchamiania aplikacji wykorzystano:

npm start

3. Zadanie 1 – środowisko i pierwsze uruchomienie

Utworzono projekt npm oraz skonfigurowano TypeScript.

W pliku package.json ustawiono moduły ES oraz skrypty uruchamiające i sprawdzające projekt.

Plik src/app.ts został przygotowany tak, aby można było uruchamiać kod TypeScript bez wcześniejszej kompilacji.

Sprawdzono również działanie pliku src/proof.ts.

Przykładowy wynik:

4
NaN


Wynik NaN pojawia się dlatego, że TypeScript sprawdza typy przed uruchomieniem programu, ale adnotacje typów nie istnieją już w czasie wykonywania. Wartość tekstowa została wymuszona na typ number za pomocą rzutowania:

const fromOutside = 'text' as unknown as number;


W czasie wykonywania funkcja otrzymuje więc tekst, a mnożenie tekstu "text" przez 2 daje NaN.

Polecenie:

npm run check


kończyło się bez błędów.

4. Zadanie 2 – repozytorium Git

Projekt został umieszczony w prywatnym repozytorium GitHub:

ZPSM-Lab1

Do repozytorium dodano plik .gitignore, dzięki czemu katalog node_modules nie jest przechowywany w repozytorium.

W repozytorium znajduje się również package-lock.json, który pozwala zachować dokładne wersje zainstalowanych zależności.

Projekt posiada historię wielu commitów, między innymi:

Set up TypeScript project
Add sum with rest parameters
Rewrite sum using reduce
Add sum tests
Add Calculator and tests
Add Calculator class
Add Lodash calculator variant


Zmiany były zapisywane etapami, dzięki czemu historia repozytorium pokazuje kolejne etapy rozwoju projektu.

5. Zadanie 3 – funkcja sum

Utworzono funkcję sum, która wykorzystuje parametr resztowy:

export function sum(...values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}


Funkcja obsługuje dowolną liczbę argumentów.

Sprawdzono między innymi:

sum(1, 2, 3, 4, 5) → 15
sum(2, 4, 6) → 12
sum() → 0


Wartość początkowa 0 w metodzie reduce jest istotna, ponieważ dzięki niej wywołanie funkcji z pustą tablicą nie powoduje wyjątku.

6. Zadanie 4 – zabezpieczenie przed nieprawidłowymi argumentami

W kolejnym etapie zmieniono typ argumentów funkcji z number[] na unknown[].

Pozwoliło to sprawdzać wartości dopiero podczas wykonywania programu.

Funkcja rozpoznaje wartości, które nie są poprawnymi liczbami, oraz informuje użytkownika o ich pozycji.

Przykładowe dane:

sum(1, 2, 'text', 4, 'string')


powodują komunikaty:

Argument 3 is not a number: "text"
Argument 5 is not a number: "string"
Result: 7


Wybrano podejście polegające na zebraniu informacji o wszystkich błędnych argumentach zamiast zatrzymywania działania przy pierwszym błędzie. Jest to wygodniejsze dla użytkownika, ponieważ pozwala poprawić wszystkie błędne wartości podczas jednej próby.

Sprawdzono również przypadek:

sum(1, NaN, 2)


Wartość NaN jest traktowana jako niepoprawna liczba i nie wpływa na wynik. Wynik wynosi:

3

7. Zadanie 5 – klasa Calculator

Utworzono klasę Calculator w osobnym pliku:

src/calculator.ts


Klasa jest importowana w:

src/app.ts


Konstruktor przyjmuje tablicę wartości typu unknown[]. W konstruktorze wartości są dzielone na poprawne liczby oraz odrzucone elementy.

Dla przykładowych danych:

[
  2,
  'seven',
  4,
  null,
  8,
]


program wyświetla:

Rejected value: seven
Rejected value: null


Do klasy dodano cztery działania:

add()

subtract()

multiply()

divide()

Dla powyższej listy wynik działania programu to:

14
-10
64
0.0625


W przypadku dzielenia przez zero przyjęto rozwiązanie polegające na zgłoszeniu błędu:

Cannot divide by zero


Dzięki temu program nie zwraca przypadkowego Infinity lub NaN.

8. Zadanie 6 – wariant z biblioteką Lodash

Do projektu dodano bibliotekę Lodash oraz jej deklaracje typów:

npm install lodash
npm install --save-dev @types/lodash


Przygotowano osobny wariant klasy wykorzystujący:

_.filter
_.reduce


zamiast odpowiednich metod wbudowanych w tablice.

Wariant z Lodash daje takie same wyniki jak rozwiązanie wykorzystujące standardowe metody JavaScript:

Rejected value: seven
Rejected value: null
14
-10
64
0.0625

Odpowiedź na pytanie 6.1

Lodash nie dał w tym przypadku istotnej przewagi, ponieważ filter i reduce są już dostępne w standardzie JavaScript, więc dodatkowa biblioteka zwiększa liczbę zależności projektu bez wyraźnej korzyści dla tego rozwiązania.

Sprawdzono również import pojedynczych funkcji Lodash z podścieżek:

import filter from 'lodash/filter.js';
import reduce from 'lodash/reduce.js';


Takie rozwiązanie pozwala ograniczyć zakres importowanego kodu w porównaniu z importowaniem całej biblioteki.

9. Wnioski

Laboratorium pozwoliło przypomnieć podstawy TypeScriptu oraz pokazało różnicę między sprawdzaniem typów a rzeczywistym wykonywaniem programu.

Najważniejszym wnioskiem jest to, że typy TypeScriptu nie zapewniają ochrony danych w czasie wykonywania. Dane pochodzące z zewnętrznych źródeł muszą być sprawdzane w kodzie programu.

Przydatne okazały się również parametry resztowe, reduce, unknown, zawężanie typów oraz klasy.

Przygotowanie projektu w Git od początku pozwoliło zachować historię kolejnych etapów pracy. Porównanie rozwiązania standardowego z wariantem Lodash pokazało natomiast, że dodatkowa biblioteka nie zawsze jest potrzebna — przed jej zastosowaniem warto sprawdzić, czy wymaganą funkcjonalność zapewnia już sam język.

Projekt po wykonaniu zadań przechodzi kontrolę typów poleceniem:

npm run check


i jest przechowywany w repozytorium Git.
