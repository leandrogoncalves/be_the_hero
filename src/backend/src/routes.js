const express = require('express');
const route = express.Router();
const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

route.get('/ongs', OngController.list);
route.post('/ongs', OngController.create);

route.get('/incidents', IncidentController.list);
route.post('/incidents', IncidentController.create);
route.delete('/incidents/:id', IncidentController.delete);

route.get('/profile', ProfileController.index);

route.post('/session', SessionController.create);
/**
 * Rota / Recurso
 
    route.post('/teste/:id', (req, res) => {
    const queries = req.query;
    const params = req.params;
    const body = req.body;

    console.log(params,queries,body);

    res.json({
        evento: "teste",
        aluno: "Leandro Gonçalves"
    });
    });

**/
  

module.exports = route;