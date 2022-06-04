import express from "express";
import {db} from "../app.js";


const productFormRouter = express.Router();


productFormRouter.get("/", (req, res) => {
    res.render('addProductForm');
});

productFormRouter.post('/create', (req, res) => {
    const {name, amount} = req.body;

    db.query("INSERT INTO products (name, amount) VALUES (?,?)", [
        name,
        amount
    ]);

    res.redirect('/');
});


// productFormRouter.delete('/delete/:id', (req, res) => {
//     db.query("DELETE FROM recipes WHERE id=?", [req.params.id]);
//
//     res.redirect("/");
// })

export default productFormRouter;