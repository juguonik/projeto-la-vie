const express = require ('express');
const routes = require ('./src/routes');
const bodyParser = require('body-parser')


const db = require ('./src/database');


const app = express();

db.hasConnection();

app.use(express.json());
app.use(bodyParser.json())

app.use(routes);


app.listen(3000, ()=> console.log('Servidor rodando na porta 3000'));