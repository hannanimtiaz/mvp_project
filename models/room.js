var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    name: String,
    product_ids:[{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;