# Fork - wprowadzenie na potrzeby projektu.

## git fork vs git clone

Każde publiczne repozytorium Git może zostać `zforkowane` lub `sklonowane`. Kluczowa różnica między klonem a `forkiem` sprowadza się do tego, ile kontroli i niezależności chcesz nad bazą kodu po jej skopiowaniu.

- Fork - tworzy całkowicie niezależną kopię repozytorium Git

- Clone - tworzy połączoną kopię, która będzie nadal synchronizowana z docelowym repozytorium.

Deweloper wykonujący `fork` będzie miał pełną kontrolę nad nowo skopiowaną bazą kodu.

## Jak `forkowac` na Github?

Najprościej `forkowac` główne repozytorium za pośrednictwem samej strony GitHub. 

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIhunxPO7c5_WNzevZTxtYwheAIJz-1OEgg&usqp=CAU)

Nad każdym repozytorium publicznym znajdziemy ikonę `FORK` która rozpocznie mechanizm kopiowania repozytorium głównego.


![](https://i.imgur.com/MXraIk5.png)

Po utworzeniu `forka` na naszym koncie utworzy się całkowicie niezależna kopia `forkowanego` repozytorium.

![](https://i.imgur.com/3sokj9E.png)

Prace nad projektem kontynuujemy tak jak byśmy operowali na własnym repozytorium.

## Pull request - Czyli prośba o wprowadzenie zmian.

Jako ze nasze nowo utworzone repozytorium jest powiązana nadal z repozytorium `matką` wciąż jesteśmy w stanie (po mimo braku uprawnień) proponować zmiany w repozytorium głównym.

Dla przykładu stwórzmy sobie plik z rozwiązaniem zadania w naszym `forku`.

![](https://i.imgur.com/fXrGpPG.png)

Od tego momentu nasze repozytorium wyprzedza `glowne` repozytorium o jeden `commit`. Jeśli chcemy by nasze zmiany znalazły się na `głównym` repozytorium musimy stworzyć tzw.. `pull request`.

![](https://i.imgur.com/HqKJ1SQ.png)

Na tym etapie jesteśmy w stanie wybrać które zmiany z naszego repozytorium powinny trafić do repozytorium głównego.

![](https://i.imgur.com/01h7IKB.png)

`Pull request` jest zadaniem o wprowadzenie zmian. Jednak obowiązują pewne zasady których warto się trzymać. Jedna z nich jest szczegółowy opis tego czego nasze zmiany dotyczą #dokumentacja.

![](https://i.imgur.com/MdHGd9m.png)

Tym sposobem otworzyliśmy `pull request` na głównym repozytorium, jednak to nie wszystko! 

![](https://i.imgur.com/QtcuqXy.png)

Każdy `pull request` musi być zatwierdzony przez właściciela repozytorium (bądź osoby uprawnionej). Uwzględnia to cały proces przeglądu kodu. Na tym etapie właściciel może zatwierdzić zmiany, odrzucić je całkowicie lub żądać wprowadzenia zmian. żądanie to często zawiera instrukcje wskazując na oczekiwane zmiany.

Jeśli twoje zmiany zostaną zatwierdzone. Bang! Właśnie dodałeś swoje 3 grosze do głównego repozytorium.
