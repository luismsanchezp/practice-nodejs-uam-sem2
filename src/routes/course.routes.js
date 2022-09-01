const express = require('express');
const course_model = require('../models/course.model')
const course_routes = express.Router(req, res)

/* HTTP Requests
    GET: list 
    GET{id}: get id info
    POST: add new record
    PUT{id}: update existent record
    DELETE{id}: delete existent record
*/
course_routes.get('/', (req, res)=>{
    course_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

course_routes.get('/courseId', (req, res)=>{
    const { courseId } = req.params;
    course_model
        .findById(courseId)
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

course_routes.post('/course', (req, res)=>{
    const new_course = course_model(req.body);
    new_course
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
})

course_routes.put('/courseId', (req, res)=>{});
    const { courseId } = req.params;
    const { course_name, code, credits, hours } = req.body;
    course_model
        .updateOne({ _id: courseId }, { $set: { course_name, code, credits, hours } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));

course_routes.delete('/courseId', (req, res)=>{
    const { courseId } = req.params;
    course_model
        .deleteOne({ _id: courseId })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = course_routes