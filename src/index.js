import express from "express";
import routes from "./routes/index.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => console.log("Server started at port: 3000"));
