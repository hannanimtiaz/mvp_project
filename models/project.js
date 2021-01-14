var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: String,
    style: String,
    trade_id: { type: Schema.Types.ObjectId, ref: 'Trade' },
    client_id: { type: Schema.Types.ObjectId, ref: 'Client' },
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;