const express = require("express");
const AtendimentoController = require("../controllers/atendimento.controller.js");

const routes = express.Router();

routes.get("/atendimentos", AtendimentoController.listar);
routes.get("/atendimentos/:id", AtendimentoController.filtrarAtendimentosId);
// routes.post ('/atendimentos', AtendimentoController.atendimentoInfo);

module.exports = routes;

