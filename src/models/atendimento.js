const db = require("../database");
const { DataTypes } = require("sequelize");
const Psicologo = require("./psicologo");
const Paciente = require("./paciente");

const Atendimento = db.define(
    "Atendimento",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        data_atendimento: {
            type: DataTypes.DATE,
        },
        observacao: {
            type: DataTypes.STRING,
        },
        paciente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Paciente,
                key: 'id'
            },
        psicologo_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: Psicologo,
                    key: 'id'
                },
    }
}
},
    {
        tableName: "atendimentos",
        timestamps: false,
    }
);


module.exports = Atendimento;