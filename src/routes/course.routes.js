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
course_routes.get('/', (req, res)=>{})
course_routes.get('/courseId', (req, res)=>{})
course_routes.post('/', (req, res)=>{})
course_routes.put('/courseId', (req, res)=>{})
course_routes.delete('/courseId', (req, res)=>{})