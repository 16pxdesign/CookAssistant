Użytkownik chciałby przechowywać dane w bazie zewnętrznej tak by za każdym razem gdy uruchomi program, dane będą odpowiadały tym które znajdują się obecnie w tej bazie.

Napisz aplikacje która dostarcza użytkownikowi wszystkie obecnie zaimplementowane funkcjonalności z ta różnica ze dane użytkownika będą zapisywane w bazie danych.

- Model biznesowy bazy danych może być inna niż aplikacji.
- Baza danych dowolnego typu. (rekomendowana MySQL)
- Aplikacja powinna ładować dane z bazy przy starcie
- Zmiany powinny być zapisywane w bazie.
- Brak podziału na użytkowników.
- Nie ma potrzeby używania frameworka / ORM.

TIP: Jeśli aplikacja jest dobrze napisana do tej pory, zmiany w kodzie powinny dotyczyć głownie tylko tych miejsc w których przetwarzane są dane.

Reszta wymagań pozostaje bez zmian i odpowiada zadaniu 3.
