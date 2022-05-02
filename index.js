const express = require("express");
const cors = require("cors");
const db = require("./src/database")

const app = express();

db.hasConection();

app.use(express.json());
app.use(cors());

app.listen(4000, () => console.log("Servidor rodando na porta 3306"));