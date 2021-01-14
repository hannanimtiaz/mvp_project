var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var productSchema = new Schema({
    code: String,
    name: String, 
    value: String, 
    supplierName: String, 
    color: String, 
    sizeUnit: String, 
    sizeWidth: String, 
    sizeHeight: String
});

var Product = mongoose.model('Product',
productSchema);

module.exports = Product;