const express = require ('express');
const psicologosController = require ('../controllers/psicologosController.js');

const routes = express.Router();




routes.get ('/psicologos', psicologosController.listarPsicologos);
routes.get ('/psicologos/:id', psicologosController.filtrarPsicologosId);
routes.post ('/psicologos', psicologosController.cadastrarPsicologo);
routes.put ('/psicologos/:id');
routes.delete('/produtos/:id', );



module.exports = routes;