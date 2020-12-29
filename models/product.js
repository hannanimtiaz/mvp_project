var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var productSchema = new Schema({
    productCode: String,
    productName: String, 
    productValue: String, 
    supplierName: String, 
    productColor: String, 
    productSizeUnit: String, 
    productSizeWidth: String, 
    productSizeHeight: String
});

var Product = mongoose.model('Product',
productSchema);

module.exports = Product;