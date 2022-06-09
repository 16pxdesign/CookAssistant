import express from "express";
import homeRouter from "./routes/home.js";
import mysql from "mysql2/promise";
import {createProductRecipeTable, createProductTable, createRecipeTable} from "./database/tables.js";
import recipeRouter from "./routes/recipeController.js";
import productRouter from "./routes/productController.js";

export let db;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("/public"));

app.set("views", "src/views");
app.set('view engine', 'ejs');

app.use("/", homeRouter);
app.use("/product", productRouter);
app.use("/recipe", recipeRouter);

app.get("/select-action", (req, res) => {
    res.render('actionSelect')
});

app.get("/error", (req, res) => {
    res.render('errorPage');
});

app.listen(9000, async () => {
    try {
        db = await mysql.createConnection({
            host: "localhost",
            user: "root",
            port: 3310,
            database: "cook_assistant",
            password: "pass123",
        })

        createRecipeTable(db);
        createProductTable(db);
        createProductRecipeTable(db);

        console.info(`Application listening on 9000`);
    } catch (err) {
        console.error(err.message);
    }
});