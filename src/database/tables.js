export const createRecipeTable = (db) => {
    db.query(`CREATE TABLE IF NOT EXISTS recipes (id int AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id))`);
}

export const createProductTable = (db) => {
    db.query(`CREATE TABLE IF NOT EXISTS products (id int AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    amount int NOT NULL,
    PRIMARY KEY (id))`)
}