var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    id: Number,
    userId: { type: Schema.Types.ObjectId, ref: 'Users' }, //Number,//
    restaurantId: Number,
    tableNo: Number,
    date: Date,
    createTime: Number,
    closeTime: Number,
    status: String,
    actualPayment: Number
});

module.exports = orderSchema;