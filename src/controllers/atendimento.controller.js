const Atendimento = require("../models/Atendimentos");

const AtendimentoController = { 
    async listar(req, res) {
       const listaAtendimento = await Atendimento.findAll({});

       res.json(listaAtendimento);
    },

    async filtrarAtendimentosId(req, res) {
        try {
            const listaAtendimento = await Atendimento.findByPk(req.params.id);

            if (listaAtendimento !== null) res.status(200).json(listaAtendimento)
            else res.status(404).json("Id não encontrado");
        }
        catch(error) {
            return res.status(500).json("erro");
        }
    },

    async cadastroAtendimento(req, res) {
        const {
            paciente_id,
            data_atendimento,
            observacao,
        } = req.body;

        const novoAtendimento = await Atendimento.create({
            paciente_id,
            data_atendimento,
            observacao,
        });

        if (!paciente_id | !data_atendimento | !observacao)
        return res.status(400).json({message: "Erro na requisição. Todas as informações são obrigatórias!"})
    }

};



module.exports = AtendimentoController;
