var config = require('config.json');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //get DB
var connection = mongoose.createConnection(config.connectionString);//connect to the db server
var initService = require('services/initdb.service');

//model = collection
var courseSchema = require('../models/course.model');
var Course = connection.model('Course', courseSchema);

// routes
router.get('/:courseTypeId', getByCourseTypeInit);
router.get('/details/:courseId', getByCourseId);

module.exports = router;


function getByCourseTypeInit(req, res) {
	console.log("start getByCourseTypeInit");
	
    //do init just in first time
    Course.count({}, function(err, count){
        console.log("courses count: " + count);

        if (count == 0)
            initService.initCourses();

        getByCourseType(req, res);
    });
}

function getByCourseType(req, res) {
    var courseTypeId = req.params.courseTypeId;
	console.log("getByCourseType: " + courseTypeId);

    Course.find({courseTypeId: courseTypeId}, function (err, courses) {
        if (err)
            res.send(err);

		console.log("courses: " + JSON.stringify(courses, null, "\t"));	
		
        res.json(courses); // return all courses in JSON format
    });
}


function getByCourseId(req, res) {
    var courseId = req.params.courseId;

    Course.find({courseId: courseId}, function (err, courses) {
        if (err)
            res.send(err);

        res.json(courses); // return all courses in JSON format
    });
}
