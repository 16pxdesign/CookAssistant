const recipes = [];
let recipeId = 0;
let productId = 0;

const form = document.getElementById("recipe-form");
const body = document.getElementsByTagName("body")[0];
const taskList = document.getElementById("tasks-list");


class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


class Recipe {
    constructor(id, title, products) {
        this.id = id;
        this.title = title;
        this.products = products;
    }
}

const createRecipe = (event) => {
    event.preventDefault();
    recipeId++;

    recipes[recipeId] = new Recipe(recipeId, event.target[0].value, []);
    event.target[0].value = "";
}

const removeRecipe = (recipeId) => {
    delete recipes[recipeId];
}

const createProduct = (recId) => {
    const value = document.getElementById(`product-input-${recId}`).value;

    if (value) {
        productId++;
        const product = new Product(productId, value);

        recipes[recId].products.push(product);
    }
}

const removeProduct = (recId) => {
    const value = document.getElementById(`product-input-${recId}`).value;

    value && (recipes[recId].products = recipes[recId].products.filter(product => product.name !== value));

}

const refresh = () => {
    taskList.innerHTML = recipes.map(recipe => `<li id="recipe-${recipe.id}">Tytuł: ${recipe.title} 
         Produkty: ${recipe.products.length > 0 ? recipe.products.map(product => ` ${product.name}`) : ""}
         <button type="button" onclick="removeRecipe(${recipe.id}); refresh()">X</button>
         <input id = "product-input-${recipe.id}" placeholder="Nazwa produktu:"/>
         <button type="button" onclick="createProduct(${recipe.id}); refresh()">Dodaj produkt</button>
         <button onclick="removeProduct(${recipe.id}); refresh()">Usuń Produkt</button>
         </li>`).join("")
}


form.addEventListener("submit", createRecipe);
body.addEventListener("submit", refresh);