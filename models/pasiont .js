var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pasiontSchema = new Schema({
    id: Number,
    firstname: String,
	lastName: String,
    phone: Number,	
	email: String   
});

module.exports = pasiontSchema;