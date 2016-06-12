var config = require('config.json');
var mongoose = require('mongoose'); //get DB
var connection = mongoose.createConnection(config.connectionString);//connect to the db server

//model = collection
var menuSchema = require('../models/menu.model');
var Menu = connection.model('Menu', menuSchema);

var courseSchema = require('../models/course.model');
var Course = connection.model('Course', courseSchema);

var service = {};

service.initMenu = initMenu;
service.initCourses = initCourses;

module.exports = service;

function initMenu() {
	console.log("start initMenu");
	
    var obj = new Menu({ id: 1, name: "תפריט", image: "book.png", parentId: 0, onClick: "", hasChildren: true });
    obj.save();

    obj = new Menu({ id: 2, name: "קינוחים", image: "book2.png", parentId: 0, onClick: "", hasChildren: false });
    obj.save();

    obj = new Menu({ id: 3, name: "שתיה", image: "drink.png", parentId: 0, onClick: "", hasChildren: false });
    obj.save();

    obj = new Menu({ id: 4, name: "מה הזמנתי", image: "book3.png", parentId: 0, onClick: "", hasChildren: false });
    obj.save();

    obj = new Menu({ id: 5, name: "קריאה למלצר", image: "book3.png", parentId: 0, onClick: "callWaiter", hasChildren: false });
    obj.save();

    obj = new Menu({ id: 6, name: "הזמן חשבון", image: "book3.png", parentId: 0, onClick: "callBill", hasChildren: false });
    obj.save();

	//---------------------
	
    obj = new Menu({ id: 7, name: "עיקריות", image: "", parentId: 1, onClick: "", hasChildren: false });
    obj.save();
	
    obj = new Menu({ id: 8, name: "עסקיות", image: "", parentId: 1, onClick: "", hasChildren: false });
    obj.save();	
	
    obj = new Menu({ id: 9, name: "מנת היום", image: "", parentId: 1, onClick: "", hasChildren: false });
    obj.save();	

    obj = new Menu({ id: 10, name: "סלטים", image: "", parentId: 1, onClick: "", hasChildren: false });
    obj.save();	

	console.log("end initMenu");	
}

function initCourses() {
	console.log("start initCourses");
	
    var obj = new Course({ courseId: 3, courseTypeId: 7, label: "עוף3", image: "food1.jpg",businessPrice:"30",price:"40" });
    obj.save();

    var obj = new Course({ courseId: 4, courseTypeId: 7, label: "עוף1", image: "food2.jpg",businessPrice:"40",price:"50" });
    obj.save();

    var obj = new Course({ courseId: 5, courseTypeId: 2, label: "סושי", image: "food2.jpg",businessPrice:"50",price:"60" });
    obj.save();

	console.log("end initCourses");	

	/*replaced because it's asyncronic
	
    Course.update({courseId: 3}, {courseTypeId: 1, label: "עוף3", image: "food1.jpg",businessPrice:"30",price:"40"},
        {upsert: true}, //insert if not exists
        function(err, numAffected) {
            if (err)
                res.send(err);
        }
    );

    Course.update({courseId: 4}, {courseTypeId: 1, label: "עוף1", image: "food2.jpg",businessPrice:"40",price:"50"},
        {upsert: true}, //insert if not exists
        function(err, numAffected) {
            if (err)
                res.send(err);
        }
    );

    Course.update({courseId: 5}, {courseTypeId: 2, label: "סושי", image: "food2.jpg",businessPrice:"50",price:"60"},
        {upsert: true}, //insert if not exists
        function(err, numAffected) {
            if (err)
                res.send(err);
        }
    );*/
}
