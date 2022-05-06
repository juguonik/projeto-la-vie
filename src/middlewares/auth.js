const { expressjwt: jwt } = require("express-jwt");
const secret = require("../configs/secret");
const { validate, Joi } = require("express-validation");


module.exports = jwt ({
    secret: secret.key,
    algorithms: ["HS256"],
    body: Joi.object({
        data_atendimento: Joi.date().required(),
        observacao: Joi.string().required(),
        paciente_id: Joi.number().required(),})
})
