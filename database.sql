CREATE DATABASE cook_assistant;

CREATE TABLE recipes (
	id int AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products (
	id int AUTO_INCREMENT,
    recipeId int NOT NULL,
    name varchar(255) NOT NULL,
    ammount int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (recipeId) REFERENCES recipes(id) ON DELETE CASCADE
);

INSERT INTO recipes (name) VALUES ("Pancakes");
INSERT INTO products (recipeId, name, ammount ) VALUES (1, "eggs", 1);
INSERT INTO products (recipeId, name, ammount ) VALUES (1, "flour", 150);

INSERT INTO recipes (name) VALUES ("Scrambled eggs");
INSERT INTO products (recipeId, name, ammount ) VALUES (2, "eggs", 3);