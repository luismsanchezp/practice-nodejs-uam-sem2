const express = require('express');
const person_model = require('../models/person.model')
const person_routes = express.Router()

/* HTTP Requests
    GET: list 
    GET{id}: get id info
    POST: add new record
    PUT{id}: update existent record
    DELETE{id}: delete existent record
*/
person_routes.get('/persons', (req, res)=>{
    person_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message:err}));
});

person_routes.get('/persons/:id', (req, res)=>{
    const { id } = req.params;
    person_model
        .findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

person_routes.post('/persons', (req, res)=>{
    const new_person = person_model(req.body);
    new_person
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});
person_routes.put('/persons/:id', (req, res)=>{
    const { id } = req.params;
    const { username, lastname, age, email } = req.body;
    person_model
        .updateOne({ _id: id }, { $set: { username, lastname, age, email } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

person_routes.delete('/persons/:id', (req, res)=>{
    const { id } = req.params;
    person_model
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = person_routes