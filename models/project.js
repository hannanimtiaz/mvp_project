var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: String,
    style: String,
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    client_id: { type: Schema.Types.ObjectId, ref: 'Client' },
    room_ids: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;