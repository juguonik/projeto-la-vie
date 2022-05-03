
const sequelize = require ('sequelize');

const DB_NAME = 'lavie';
const DB_USER = 'root';
const DB_PASS = 'mysql';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

let db = {};

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {

module.exports = db;