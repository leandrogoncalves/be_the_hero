const express = require('express');
const route = express.Router();
const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const { celebrate, Segments, Joi } = require('celebrate');

route.get('/ongs', OngController.list);

route.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required(),
    })
}), OngController.create);

route.get('/incidents',  celebrate({
    [Segments.QUERY] : Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.list);

route.post('/incidents', IncidentController.create);

route.delete('/incidents/:id', celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

route.get('/profile', celebrate({
    [Segments.HEADERS] : Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

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