var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String
});

var Product = mongoose.model('Product',
productSchema);

module.exports = Product;