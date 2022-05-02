const express = require("express");
const AtendimentoController = require("../controllers/atendimento.controller");

const routes = express.Router();

routes.get("/atendimentos", AtendimentoController.listar);
routes.put("/atendimentos/cadastro", AtendimentoController);

module.exports = routes;