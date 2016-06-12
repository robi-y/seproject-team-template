var express = require('express');
var router = express.Router();

var config = require('config.json');
var mongoose = require('mongoose'); //get DB
var Schema = mongoose.Schema; //to create Schema
var connection = mongoose.createConnection(config.connectionString);//connect to the db server
//Schema = document
var menu = new Schema({
    id:  Number,
    name: String,
    image: String,
    parentId: Number,
    path: String,
    onClick: String
});

//model = collection
//var Menu = connection.model('Menu', menu);
var menuSchema = require('../../models/menu.model');
var Menu = connection.model('Menu', menuSchema);

var userCallSchema = require('../../models/userCall.model');
var UserCall = connection.model('UserCall', userCallSchema);

// routes
router.get('/getMenu', getMenu);
router.get('/saveCalls', saveCalls);
router.get('/saveCalls/:type', saveCalls);

module.exports = router;

function init() {
    //var arr = [];
    //arr.push({ id: 1, name: "test", image: "book.png", parentId: 0});
    //arr.save();

    //Menu.remove({});

    var obj = new Menu({ id: 1, name: "תפריט", image: "book.png", parentId: 0, path: "#/courseType", onClick: "" });
    obj.save();

    obj = new Menu({ id: 2, name: "קינוחים", image: "book2.png", parentId: 0, path: "#/courseType", onClick: "" });
    obj.save();

    obj = new Menu({ id: 3, name: "שתיה", image: "drink.png", parentId: 0, path: "#/courseType", onClick: "" });
    obj.save();

    obj = new Menu({ id: 4, name: "מה הזמנתי", image: "book3.png", parentId: 0, path: "#/courseType", onClick: "" });
    obj.save();

    obj = new Menu({ id: 5, name: "קריאה למלצר", image: "book3.png", parentId: 0, path: "", onClick: "callWaiter" });
    obj.save();

    obj = new Menu({ id: 6, name: "הזמן חשבון", image: "book3.png", parentId: 0, path: "", onClick: "callBill" });
    obj.save();

    obj = new Menu({ id: 7, name: "test", image: "book3.png", parentId: 1, path: "#/courseType", onClick: "" });
    obj.save();

}
function getMenu(req, res) {
    //do init just in first time
    Menu.count({}, function(err, count){
       if (count == 0)
           init();
    });

    //find all menu items in db
    Menu.find({ parentId: 0 }, function(err, menu) {
        var menuMap = {};//return object

        //fill up the object
        menu.forEach(function(item) {
            menuMap[item._id] = item;
        });
        //return the menu object
        res.end(JSON.stringify(menuMap, null, "\t"));
    });
}
function saveCalls(req, res) {
    var type = req.params.type;
    var date = new Date();
    
    if (req.session.user == null) {
        res.json({ isSaved: false, messages: "לא ניתן לבצע פעולה זו ללא כניסה למערכת/הרשמה" });
        return;
    }

    var newUserCall = new UserCall({
        userId: req.session.user._id,
        restaurantId: 1,
        tableNo: 0,
        date: date,
        callType: type,
        status: 1 /*open*/ });
    newUserCall.save(function (err, newUserCall) {
        if (err) {
            console.error(err);
            return callback(err);
        }
    });     
    
    var message;
    switch (type) {
        case "Waiter":
            message = "מלצר בדרך אליך";
            break;

        case "Bill":
            message = "חשבון בדרך אליך";
            break;
        default:
            message = "סוג קריאה לא ידוע. קריאה נשמרה במערכת";
            break;
    }
    res.json({ isSaved: true, messages: message });
}
