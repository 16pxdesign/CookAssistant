DROP DATABASE IF EXISTS cook_assistant;
CREATE DATABASE cook_assistant;
USE cook_assistant;

CREATE TABLE categories (
	id int AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE recipes (
	id int AUTO_INCREMENT,
    categoryId int NOT NULL,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE products (
	id int AUTO_INCREMENT,
    recipeId int NOT NULL,
    name varchar(255) NOT NULL,
    ammount int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (recipeId) REFERENCES recipes(id) ON DELETE CASCADE
);

INSERT INTO categories (name) VALUES ("Dinner");
INSERT INTO categories (name) VALUES ("Drinks");

INSERT INTO recipes (categoryId, name) VALUES (1, "Chicken with potatoes");
INSERT INTO products (recipeId, name, ammount) VALUES (1, "Chicken", 1);
INSERT INTO products (recipeId, name, ammount) VALUES (1, "Potatoes", 4);
INSERT INTO products (recipeId, name, ammount) VALUES (1, "Cucumber", 1);

INSERT INTO recipes (categoryId, name) VALUES (1, "Steak with asparagus");
INSERT INTO products (recipeId, name, ammount) VALUES (2, "Steak", 1);
INSERT INTO products (recipeId, name, ammount) VALUES (2, "asparagus", 5);

INSERT INTO recipes (categoryId, name) VALUES (2, "Ice coffee");
INSERT INTO products (recipeId, name, ammount) VALUES (3, "Coffee", 250);
INSERT INTO products (recipeId, name, ammount) VALUES (3, "Ice cubes", 4);
