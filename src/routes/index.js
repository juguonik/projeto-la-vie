
const express = require ('express');
const pacientesController = require ('../controllers/pacientesController.js');
const psicologosController = require ('../controllers/psicologosController.js');
const AtendimentoController = require("../controllers/atendimento.controller");

const routes = express.Router();

// PACIENTES ==========================================================
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacientesId);
routes.post("/pacientes/cadastrar", pacientesController.cadastrarPacientes);
routes.delete("/pacientes/excluir/:id", pacientesController.excluirPacientes);
routes.put("/pacientes/atualizar/:id", pacientesController.atualizarPacientes);

routes.get ('/psicologos', psicologosController.listarPsicologos);
routes.get ('/psicologos/:id', psicologosController.filtrarPsicologosId);
routes.post ('/psicologos', psicologosController.cadastrarPsicologo);
routes.put ('/psicologos/:id');
routes.delete('/produtos/:id', );


routes.get("/atendimentos", AtendimentoController.listar);



module.exports = routes;