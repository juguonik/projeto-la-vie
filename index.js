const express = require("express");
const cors = require("cors");
const routes = require("./src/routes")
const db = require("./src/database/index")

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));