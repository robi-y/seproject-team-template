var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userCallSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'Users' }, //Number,// 
    restaurantId: Number,
    tableNo: Number,
    callType: String,
    date: Date,
    status: String
});

// orderItemSchema.index({orderId: 1, courseId: 1}, {unique: true});

module.exports = userCallSchema;