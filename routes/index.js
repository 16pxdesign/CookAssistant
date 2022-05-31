import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  renderCategories,
  renderCategory,
} from "../controllers/category.js";
import {
  createRecipe,
  deleteRecipe,
  renderRecipe,
} from "../controllers/recipe.js";
import { createProduct, deleteProduct } from "../controllers/product.js";

const router = Router();

router.get("/", renderCategories);
router.get("/category/:id", renderCategory);
router.post("/create-category", createCategory);
router.post("/delete-category/:id", deleteCategory);

router.get("/recipe/:id", renderRecipe);
router.post("/create-recipe", createRecipe);
router.post("/delete-recipe/:id", deleteRecipe);

router.post("/create-product", createProduct);
router.post("/delete-product/:id", deleteProduct);

export default router;
