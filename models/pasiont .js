var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pasiontSchema = new Schema({
    
    firstName: String,
	lastName: String,
    phone: Number,	
	Email: String   
});

module.exports = pasiontSchema;