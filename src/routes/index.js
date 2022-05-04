
const express = require ('express');
const pacientesController = require ('../controllers/pacientesController.js');
const psicologosController = require ('../controllers/psicologosController.js');
const AtendimentoController = require("../controllers/atendimento.controller");

const pacientesValidationCreate = require("../validations/Pacientes/create");

const routes = express.Router();

// PACIENTES ==========================================================
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacientesId);
routes.post("/pacientes/cadastrar", pacientesValidationCreate,pacientesController.cadastrarPacientes);
routes.delete("/pacientes/excluir/:id", pacientesController.excluirPacientes);
routes.put("/pacientes/atualizar/:id", pacientesController.atualizarPacientes);

routes.get ('/psicologos', psicologosController.listarPsicologos);
routes.get ('/psicologos/:id', psicologosController.filtrarPsicologosId);
routes.post ('/psicologos', psicologosController.cadastrarPsicologo);
routes.put ('/psicologos/:id', psicologosController.atualizarPsicologo);
routes.delete('/psicologos/:id', psicologosController.deletarPsicologo);



routes.get("/atendimentos", AtendimentoController.listar);
routes.get("/atendimentos/:id", AtendimentoController.filtrarAtendimentosId);
// routes.post ('/atendimentos', AtendimentoController.atendimentoInfo);

module.exports = routes;

