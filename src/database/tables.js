export const createRecipeTable = (db) => {
    db.query(`CREATE TABLE IF NOT EXISTS recipes (
        id int AUTO_INCREMENT,
        title varchar(255) NOT NULL,
        PRIMARY KEY (id))`);
}

export const createProductTable = (db) => {
    db.query(`CREATE TABLE IF NOT EXISTS products (
        id int AUTO_INCREMENT,
        recipeId int NOT NULL,
        name varchar(255) NOT NULL,
        amount int NOT NULL,
        FOREIGN KEY (recipeId) REFERENCES recipes(id) ON DELETE CASCADE,
        PRIMARY KEY (id))`)
}