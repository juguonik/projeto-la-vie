const Psicologos = require('../models/Psicologos');
const jwt = require("jsonwebtoken")
const bcrypt = require ("bcryptjs");
const secret = require('../configs/secret');


const AuthController = {
    async login (req, res){
        const { email, senha} = req.body    

        const Psicologo = await Psicologos.findOne({
            where:{
                email,
            }
        });

        if(!Psicologo){
            return res.status(400).json("Email não cadastrado")
        }

        if(!bcrypt.compareSync (senha, Psicologo.senha)){
            return res.status(401).json("Senha invalida!!")
        }


        const token = jwt.sign(
            {
                Id: Psicologos.id,
                email:Psicologos.email,
                nome:Psicologos.nome
            },
            secret.key
        )

        return res.json(token)

    },

}

module.exports = AuthController