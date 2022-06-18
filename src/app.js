import express from "express";
import homeRouter from "./routes/home.js";
import mysql from "mysql2/promise";
import {createProductTable, createRecipeTable} from "./database/tables.js";
import recipeRouter from "./routes/recipeController.js";
import productRouter from "./routes/productController.js";


export let db;

try {
    db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3310,
        password: "pass123",
    })

    await db.query(`CREATE DATABASE IF NOT EXISTS cook_assistant`);
    await db.query(`USE cook_assistant`);

    createRecipeTable(db);
    createProductTable(db);
} catch (err) {
    console.error(err.message);
}

const app = express();

app.use(express.urlencoded({extended: true}));


app.set("views", "src/views");
app.set('view engine', 'ejs');

app.use("/", homeRouter);
app.use("/product", productRouter);
app.use("/recipe", recipeRouter);

app.get("/error", (req, res) => {
    res.render('errorPage');
});

app.listen(9000, async () => {
    console.info(`Application listening on 9000`);
});