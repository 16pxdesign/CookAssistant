export const createRecipeTable = (db) => {
    db.query(`CREATE TABLE IF NOT EXISTS recipes (
        id int AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        PRIMARY KEY (id))`);
}

export const createProductTable = (db) => {
    db.query(`CREATE TABLE IF NOT EXISTS products (
        id int AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        amount int NOT NULL,
        PRIMARY KEY (id))`)
}
export const createProductRecipeTable = (db) => {
    db.query(`CREATE TABLE IF NOT EXISTS products_recipes (
        recipe_id int,
        product_id int,
        CONSTRAINT products_recipes_pk PRIMARY KEY (product_id, recipe_id),
        CONSTRAINT FK_recipes FOREIGN KEY (recipe_id) REFERENCES recipes (id) ON DELETE CASCADE,
        CONSTRAINT FK_products FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE)`);
}