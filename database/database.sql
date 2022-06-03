DROP DATABASE IF EXISTS cook_assistant;
CREATE DATABASE cook_assistant;
USE cook_assistant;

CREATE TABLE categories (
	id int AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE categories_parents (
	category_id int NOT NULL,
    parent_id int DEFAULT 0,
    PRIMARY KEY (category_id, parent_id),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE recipes (
	id int AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE categories_recipes (
	category_id int NOT NULL,
    recipe_id int NOT NULL,
    PRIMARY KEY (category_id, recipe_id),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE products (
	id int AUTO_INCREMENT,
    recipe_id int NOT NULL,
    name varchar(255) NOT NULL,
    amount int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

INSERT INTO categories (name) VALUES ('Hot');
INSERT INTO categories (name) VALUES ('Dinners');
INSERT INTO categories (name) VALUES ('Meats');
INSERT INTO categories (name) VALUES ('Salads');
INSERT INTO categories (name) VALUES ('Steaks');
INSERT INTO categories (name) VALUES ('Chickens');

INSERT INTO categories_parents (category_id) VALUES (1);
INSERT INTO categories_parents (category_id) VALUES (2);
INSERT INTO categories_parents (category_id, parent_id) VALUES (5, 1);
INSERT INTO categories_parents (category_id, parent_id) VALUES (6, 1);
INSERT INTO categories_parents (category_id, parent_id) VALUES (4, 2);
INSERT INTO categories_parents (category_id, parent_id) VALUES (3, 2);
INSERT INTO categories_parents (category_id, parent_id) VALUES (5, 3);
INSERT INTO categories_parents (category_id, parent_id) VALUES (6, 3);

INSERT INTO recipes (name) VALUES ('Greek Salad');
INSERT INTO recipes (name) VALUES ('Salad With Tomato');
INSERT INTO recipes (name) VALUES ('Medium-Rare Steak');
INSERT INTO recipes (name) VALUES ('Chinese Chicken');

INSERT INTO categories_recipes (category_id, recipe_id) VALUES (4, 1);
INSERT INTO categories_recipes (category_id, recipe_id) VALUES (4, 2);
INSERT INTO categories_recipes (category_id, recipe_id) VALUES (5, 3);
INSERT INTO categories_recipes (category_id, recipe_id) VALUES (6, 4);

INSERT INTO products (recipe_id, name, amount) VALUES (1, 'Lettuce', 150);
INSERT INTO products (recipe_id, name, amount) VALUES (1, 'Tofu', 50);
INSERT INTO products (recipe_id, name, amount) VALUES (2, 'Lettuce', 150);
INSERT INTO products (recipe_id, name, amount) VALUES (2, 'Tomato', 200);
INSERT INTO products (recipe_id, name, amount) VALUES (3, 'Steak', 350);
INSERT INTO products (recipe_id, name, amount) VALUES (4, 'Chicken', 350);
INSERT INTO products (recipe_id, name, amount) VALUES (4, 'Rice', 500);