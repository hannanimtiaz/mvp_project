var mongoose = require('mongoose');

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


module.exports = Admin;