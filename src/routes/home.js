import express from "express";

const homeRouter = express.Router();

homeRouter.get("/", async (_, res) => {
    res.render('home');
})


export default homeRouter;