import express from "express";
import routes from "./routes/index.js";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.log("Server started at port: " + PORT));
