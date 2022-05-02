const db = require("../database");
const { DataTypes } = require("sequelize");

const Paciente = db.define(
    "Paciente",
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
        idade: {
            type: DataTypes.DATE,
        }
    },
    {
        tableName: "Paciente",
        timestamps: false,
    }
);

module.exports = Paciente;