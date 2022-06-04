import express from "express";
import homeRouter from "./routes/home.js";
import productFormRouter from "./routes/addProductForm.js";
import mysql from "mysql2/promise";
import {createProductTable, createRecipeTable} from "./database/tables.js";
import recipeFormRouter from "./routes/addRecipeForm.js";


export const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3310,
    database: "cook_assistant",
    password: "pass123",
});

createRecipeTable(db);
createProductTable(db);

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("/public"));

app.set("views", "src/views");
app.set('view engine', 'ejs');

app.use("/", homeRouter);
app.use("/form/product", productFormRouter);
app.use("/form/recipe", recipeFormRouter);


app.get("/form", (req, res) => {
    res.render('formPick')
});

app.listen(9000, () => {
    console.info(`Application listening on 9000`);
});

//
// const form = document.getElementById("recipe-form");
// const body = document.body;
// const taskList = document.getElementById("tasks-list");
//
//
// class Product {
//     constructor(id, name, amount) {
//         this.name = name;
//         this.amount = amount;
//     }
// }
//
// class Recipe {
//     constructor(id, title, products) {
//         this.title = title;
//         this.products = products || [];
//     }
// }
//
// const createRecipe = (event) => {
//     event.preventDefault();
//
//     new Recipe(event.target[0].value);
//     event.target[0].value = "";
// }
//
// const removeRecipe = () => {
// }
//
// const createProduct = (recId) => {
//     const name = document.getElementById(`product-name-input-${recId}`).value;
//     const amount = document.getElementById(`product-amount-input-${recId}`).value;
//
//     if (name && amount) {
//         const product = new Product(name, amount);
//     }
// }
//
// const removeProduct = () => {
// }
//
// const refresh = () => {
//     taskList.innerHTML = recipes.map(recipe => `<li id="recipe-${recipe.id}">Tytuł: ${recipe.title}
//         Produkty: ${recipe.products.length > 0 ?
//         recipe.products.map(product => ` ${product.name} ilość: ${product.amount}
//         <button onclick="removeProduct(${recipe.id}, ${product.id}); refresh()">x</button>`) : ""}
//
//         <button type="button" onclick="removeRecipe(${recipe.id}); refresh()">X</button>
//
//         <input id = "product-name-input-${recipe.id}" placeholder="Nazwa produktu:"/>
//         <input id = "product-amount-input-${recipe.id}" placeholder="Ilość produktu:"/>
//
//         <button type="button" onclick="createProduct(${recipe.id}); refresh()">Dodaj produkt</button>
//         </li>`).join("")
// }
//
// const main = async () => {
//     const conn = await pool.getConnection().catch(err => throw err);
//     await createTables(conn);
//
//     form.addEventListener("submit", createRecipe);
//     body.addEventListener("submit", refresh);
//     await conn.end();
// }
//
// const createTables = async (conn) => {
//     const table = await conn.query("CREATE TABLE recipe (id int, title varchar(255). products varchar(255))");
//     console.log(table);
// }
//
// main()
