const { Op } = require("sequelize");
const Atendimento = require("../models/atendimento");
const fs = require("fs");
const res = require("express/lib/response");

const AtendimentoController = { 
    async listar(req, res) {
        const { id } = rq.params;
       const Atendimento = await Atendimento.findAll();

       res.json(Atendimento);
    },

    CadastrarAtendimento(req, res){
    const { id, descricao, data_atendimento } = req.body;
    if(!titulo || !descricao || !professor){
        return res.status(400).json({error: "você precisa passar os atribudos corretamente"});
    }
    Atendimento.push({
        id,
        descricao,
        data_atendimento,
    });
    fs.writeFileSync("../models/atendimento.js", JSON.stringify(Atendimento))

    res.status(201).json({message:"Cadastro de atendimento realizado com sucesso!"});
}
}

module.exports = AtendimentoController;