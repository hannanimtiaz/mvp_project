var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    name: String,
    address: String,
})

var Client = mongoose.model('Client', clientSchema)

module.exports = Client