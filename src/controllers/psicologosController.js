const Psicologos = require('../models/Psicologos');

const psicologosController = {
        listarPsicologos: async (req, res) => {
            try{
            const listaDePsicologos = await Psicologos.findAll({});

            res.status(200).json(listaDePsicologos);
            }
            catch (error) {
                return res.status(500).json('Erro');
            };

        },

        async filtrarPsicologosId(req, res){
            try {
                 const listaDePsicologos = await Psicologos.findByPk(req.params.id);
            
                 if (listaDePsicologos !== null) res.status(200).json(listaDePsicologos)
                else res.status(404).json('Id não encontrado');
               
            }
            catch (error) {
                return res.status(500).json('Erro');
            }

        },
        async cadastrarPsicologo(req, res) {
            const {
                nome,
                email,
                senha,
                apresentacao,
            } = req.body;

            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha,
                apresentacao,
            });
            
            if (!nome | !email | !senha | !apresentacao)
            return res.status(200).json({ message : "Erro na requisição. Todas as informações são obrigatórias!"})
            
            else             
            res.json(novoPsicologo);
        },


    };

        module.exports = psicologosController;