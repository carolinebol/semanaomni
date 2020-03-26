const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Caroline Bol'
 });
});

app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: buscar uma informação do back-end
 * POST: criar uma informação no backend 
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no backend
 * 
 * Tipos de parametro:
 * 
 * Route: para identificar recursos /:id
 * Query: nomeados na rota depois do ? (Filtros, Paginação)
 *        ?page=2&nome=Caroline&Idade=18
 * Request Body: corpo da requisição
 */

/**
 * SQL: MySQL, >SQLite<, PostgreSQL, Oracle, Microsoft SQL Server
 *      manter uma estrutura de dados
 * NoSQL: MongoDB, CouchDB (bancos não relacionais)
 * 
 * 
 *Driver do bdd: SELECT * FROM users
  Query Builder: tablet('users').select('*').where
 */