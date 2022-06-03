**Kontynuacja aplikacji.**

Wstępnej założenia:

1. Jeden przepis może mieć więcej niż jedna kategorie

2. A każda kategoria może mieć inne kategorie

   1. Kategoria może występować kilkukrotnie w innych kategoriach, look at: `Zupa` or `Sałatki`
      1.  `Zupa` i`Sałatki`to wciąż te same kategorie.
   2. Nieskończona ilość sub-kategorii
   3. Nazwa kategorii nie jest unikatowa
   
   ```
   - Na ciepło
     - Zupy
     - Mięsne
   - Przystawki
     - Sałatki
       - [... more]
     - Dla gości
       - [... more]
   - Dania główne
     - Zupy
     - Sałatki
       - [... more]
     - Mięsne
   ```
   
   