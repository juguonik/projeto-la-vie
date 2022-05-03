<<<<<<< HEAD

const sequelize = require ('sequelize');

const DB_NAME = 'lavie';
const DB_USER = 'root';
const DB_PASS = 'mysql';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
=======
const Sequelize = require("sequelize");

const DB_NAME = "lavie";
const DB_USER = "welton";
const DB_PASS = "BuyandHold26@";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306
>>>>>>> welton
};

let db = {};

try {
<<<<<<< HEAD
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
=======
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.log(`Falha ao conectar Banco de dados! ${error}`);
}

async function hasConection(){
  try {
    await db.authenticate();
    console.log("BANCO DE DADOS CONECTADO!");
  } catch (error) {
    console.log(`FALHA NA CONEXAO COM BANCO DE DADOS ${error}`);
  }
};

Object.assign(db, { hasConection });
>>>>>>> welton

module.exports = db;