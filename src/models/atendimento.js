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
            TYPE: DataTypes.DATE,
        },
        observacao: {
            type: DataTypes.VARCHAR(100),
        },
    },
    {
        tableName: "Atendimento",
        timestamps: false,
    }
);

Atendimento.hasMany(Psicologo, Paciente, {
    constraint: true,
    foreignKey: "idAtendimento",
})

module.exports = Atendimento;