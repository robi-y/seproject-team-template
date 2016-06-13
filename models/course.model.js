var mongoose = require('mongoose');
var Schema = mongoose.Schema; //to create Schema

var courseSchema = new Schema({
    courseId : Number,
    courseTypeId : Number,
    label : String,
    image : String,
    businessPrice : String,
    price : String
});


module.exports = courseSchema;
