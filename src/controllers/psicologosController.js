const Psicologos = require('../models/Psicologos');
const bcrypt = require ('bcryptjs');

const psicologosController = {
    listarPsicologos: async (req, res) => {
        try {
            const listaDePsicologos = await Psicologos.findAll({});

            res.status(200).json(listaDePsicologos);
        } catch (error) {
            return res.status(500).json('Erro');
        };

    },

    async filtrarPsicologosId(req, res) {
        try {
            const listaDePsicologos = await Psicologos.findByPk(req.params.id);

            if (listaDePsicologos !== null) res.status(200).json(listaDePsicologos)
            else res.status(404).json('Id não encontrado');

        } catch (error) {
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

        if (!nome || !email || !senha || !apresentacao)
            return res.status(400).json({
                message: "Erro na requisição. Todas as informações são obrigatórias!"
            })
        const novaSenha = bcrypt.hashSync(senha,5)    
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha:novaSenha,
            apresentacao,
        });

        res.json(novoPsicologo);
    },




    async atualizarPsicologo(req, res) {
        const {
            id
        } = req.params;
        
        const psicologoPorId = await Psicologos.findByPk(req.params.id);

        if (psicologoPorId === null) {
            res.status(404).json('Id não encontrado');
            return
        }
        try {

            const {
                nome,
                email,
                senha,
                apresentacao,
            } = req.body;


            if (!nome || !email || !senha || !apresentacao)
                return res.status(400).json({
                    message: "Erro na requisição. Todas as informações são obrigatórias!"
                })

            const atualizadoPsicologo = await Psicologos.update({

                nome,
                email,
                senha,
                apresentacao,
            }, {
                where: {
                    id
                },
            });

            const psicologoPorIdAtualizado = await Psicologos.findByPk(req.params.id);

            return res.status(200).json(psicologoPorIdAtualizado);
        } catch (error) {
            return res.status(500).json('Erro');
        }
    },

    async deletarPsicologo(req, res) {
        const {
            id
        } = req.params;

        const deletarPorId = await Psicologos.findByPk(req.params.id);

        if (deletarPorId === null) {
            res.status(404).json('Id não encontrado');
            return
        }

        await Psicologos.destroy({
            where: {
                id,
            },
        });
        
        return res.status(204).json()
    },


};

module.exports = psicologosController;