var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    id: Number,
    OtherDiagnosesandTreatments: String,
	Referrer: String,
	TheCauseOfreferral: String,
    date: Date,
	DateofDiagnosis:Date,
	diagnostic: String,
	DiagnosResults:String,
    
});

module.exports = orderSchema;