var mongoose = require('mongoose');
var validator = require('validator');

//Define a schema
var Schema = mongoose.Schema;

var retailSchema = new Schema({
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
    }
});

var Retail = mongoose.model('Retail', retailSchema);

module.exports = Retail;