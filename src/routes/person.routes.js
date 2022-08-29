const express = require('express');
const person_model = require('../models/person.model')
const person_routes = express.Router(req, res)

/* HTTP Requests
    GET: list 
    GET{id}: get id info
    POST: add new record
    PUT{id}: update existent record
    DELETE{id}: delete existent record
*/
person_routes.get('/', (req, res)=>{
    person_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});
person_routes.get('/personId', (req, res)=>{})
person_routes.post('/', (req, res)=>{
    const new_person = person_model(req.body);
    new_person
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});
person_routes.put('/personId', (req, res)=>{})
person_routes.delete('/personId', (req, res)=>{})

module.exports = person_routes