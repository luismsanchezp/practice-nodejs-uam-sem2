const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    course_name:{
        type: String, 
        require: true
    },
    code:{
        type: String, 
        require: true, 
        unique: true
    },
    credits:{
        type: Number, 
        require: true
    },
    hours:{
        type: Number, 
        require: true
    },
});
module.exports = mongoose.model('CourseCollection', courseSchema);