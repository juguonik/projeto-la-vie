const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologo = db.define(
    "Psicologo",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            TYPE: DataTypes.VARCHAR(100),
        },
        email: {
            type: DataTypes.VARCHAR(100),
        },
        senha: {
            type: DataTypes.VARCHAR(24),
        },
        apresentacao: {
            type: DataTypes.VARCHAR(100)
        },
    },
    {
        tableName: "Psicologo",
        timestamps: false,
    }
);

module.exports = Psicologo;