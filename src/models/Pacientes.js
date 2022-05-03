const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
  "Pacientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      notNull: true,
    },
    email: {
      type: DataTypes.STRING,
      notNull: true,
    },
    idade: {
      type: DataTypes.DATEONLY,
      notNull: true,
    }
  },

  {
    tableName: "pacientes",
    timestamps: false,
  }
);

module.exports = Pacientes;