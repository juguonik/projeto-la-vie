const Atendimento = require("../models/Atendimentos");
const Pacientes = require("../models/Pacientes")
const Psicologos = require("../models/Psicologos")

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

    async cadastrarAtendimento(req, res) {
        const token = req.auth.id;
        console.log(token);
        try {
          console.log(req.body)
          const { paciente_id, data_atendimento, observacao } = req.body;
          console.log(typeof paciente_id)
          const novoAtendimento = await Atendimento.create({
            paciente_id,
            data_atendimento,
            observacao,
            psicologo_id: token,
          });
          return res.status(201).json(novoAtendimento);
        } catch (error) {
          console.log (error.toString())
          res.status(400).json("Não foi possivel cadastrar o atendimento");
        }
      },
    };
    



module.exports = AtendimentoController;