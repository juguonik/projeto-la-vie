const express = require("express");
const AtendimentoController = require("../controllers/atendimento.controller");

const routes = express.Router();

routes.get("/atendimentos", AtendimentoController.listar);

module.exports = routes;