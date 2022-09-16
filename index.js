const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const person_routes = require('./src/routes/person.routes')
const course_routes = require('./src/routes/course.routes')

const port = 5000 || process.env.PORT;
const app = express();

app.listen(port, () => {console.log('Listening to port', port)})

app.use(express.json());
app.use('/api', person_routes)
app.use('/api', course_routes)

app.get('/', (req, res) => res.send('Ing Software2'))

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
        console.log("MongoDB connection established sucessfully.")
    })
    .catch ((err) => {
        console.error(err);
    });
