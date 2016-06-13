var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderItemSchema = new Schema({
    orderId: {type: Schema.Types.ObjectId, ref: 'Order' }, //Number,// 
    courseId: Number, //{type: Schema.Types.ObjectId, ref: 'Course' },//Number,// 
    amount: Number,
    orderTime: Number,
    closeTime: Number,
    status: String
});

// orderItemSchema.index({orderId: 1, courseId: 1}, {unique: true});

module.exports = orderItemSchema;