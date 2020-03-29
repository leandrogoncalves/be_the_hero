const knex = require('knex');
const config = require('../../knexfile');
const database = process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(database);

module.exports = connection;