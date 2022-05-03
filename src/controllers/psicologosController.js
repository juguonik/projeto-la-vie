const Psicologos = require('../models/Psicologos');

const psicologosController = {
    listarPsicologos: async (req, res) => {
        const listaDePsicologos = await Psicologos.findAll({
            });

        res.status(200).json(listaDePsicologos);

    },




//     async cadastrarPsicologo(req, res) {
//         const {
//             nome,
//             preco,
//             quantidade,
//             fabricante_id,
//             categoria_id,
//         } = req.body;
//         const novoProduto = await Produtos.create({
//             nome,
//             preco,
//             quantidade,
//             fabricante_id,
//         });

//         const categoria = await Categorias.findByPk(categoria_id);

//         await novoProduto.setCategorias(categoria);
        
//         res.json(novoProduto);
//     },

//     async deletarProduto(req, res) {
//         const {
//             id
//         } = req.params;

//         await Produtos.destroy({
//             where: {
//                 id,
//             },
//         });

//         res.json('Produto deletado');
//     },

};

module.exports = psicologosController;