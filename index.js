const express = require("express");
const cors = require("cors");
const routes = require("./src/routes")
<<<<<<< HEAD
const db = require("./src/database")
=======
const db = require("./src/database");
>>>>>>> welton

const app = express();

db.hasConection();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));