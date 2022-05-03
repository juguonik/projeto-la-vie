const Atendimento = require("../models/atendimento");

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
    }
};



module.exports = AtendimentoController;

// //    async cadastrarProduto(req, res) {
//     const {
//         nome,
//         preco,
//         quantidade,
//         fabricante_id,
//         categoria_id,
//     } = req.body;
//     const novoProduto = await Produtos.create({
//         nome,
//         preco,
//         quantidade,
//         fabricante_id,
//     });

//     const categoria = await Categorias.findByPk(categoria_id);

//     await novoProduto.setCategorias(categoria);
    
//     res.json(novoProduto);
// },

// async deletarProduto(req, res) {
//     const {
//         id
//     } = req.params;

//     await Produtos.destroy({
//         where: {
//             id,
//         },
//     });

//     res.json('Produto deletado');
// },