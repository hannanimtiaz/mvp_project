var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var tradeSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    phone_no: String,
    postal_Code: String,
    DOB: String,
    gender: {
        type: String,
        enum: ['male', 'female'],
    }, companyName: String,
    businessNumber: String,
    tradingNumber: String,
    address: String,
    city: String,
    businessType: String,
    companyRole: String,
    companySize: String

});

var Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;