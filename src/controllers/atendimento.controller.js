const Atendimento = require("../models/atendimento");

const AtendimentoController = { 
    async listar(req, res) {
       const listaAtendimento = await Atendimento.findAll({});

       res.json(listaAtendimento);
    },
};

module.exports = AtendimentoController;