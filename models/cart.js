// user_id:id,
// product_array:{
//    {  product id
// quantity  }
// },
// last_modified_date:String (moment js library)

var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    user_id: String,
    product_array: {
        product_id: String,
        quantity: Number
    }, 
    last_modified_date: Date 
});

var Cart = mongoose.model('Cart',
cartSchema);

module.exports = Cart;