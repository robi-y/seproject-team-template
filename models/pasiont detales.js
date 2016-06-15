var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    id: Number,
    name: String,
	lastName: String,
    birthday: Date,
    address: String,
    country: String,
    phonenumber: Number,
	fathersname: String,
	numofsiblings: Number,
	language: String,
	educationalFramework: String   
});

module.exports = orderSchema;