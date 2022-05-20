const recipes = [];
let recipeId = 0;
let productId = 0;


const form = document.getElementById("recipe-form");
const body = document.getElementsByTagName("body")[0];
const taskList = document.getElementById("tasks-list");


class Product {
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
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
    const name = document.getElementById(`product-name-input-${recId}`).value;
    const amount = document.getElementById(`product-amount-input-${recId}`).value;

    if (name && amount) {
        productId++;

        const product = new Product(productId, name, amount);

        recipes[recId].products.push(product);
    }
}

const removeProduct = (recId, prodId) => {
    recipes[recId].products = recipes[recId].products.filter(product => product.id !== prodId);
}

const refresh = () => {
    taskList.innerHTML = recipes.map(recipe => `<li id="recipe-${recipe.id}">Tytuł: ${recipe.title} 
        Produkty: ${recipe.products.length > 0 ?
        recipe.products.map(product => ` ${product.name} ilość: ${product.amount}
        <button onclick="removeProduct(${recipe.id}, ${product.id}); refresh()">x</button>`) : ""}
        
        <button type="button" onclick="removeRecipe(${recipe.id}); refresh()">X</button>
        
        <input id = "product-name-input-${recipe.id}" placeholder="Nazwa produktu:"/>
        <input id = "product-amount-input-${recipe.id}" placeholder="Ilość produktu:"/>
        
        <button type="button" onclick="createProduct(${recipe.id}); refresh()">Dodaj produkt</button>
        </li>`).join("")
}


form.addEventListener("submit", createRecipe);
body.addEventListener("submit", refresh);