var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    email: String,
    password: String,
});

var Admin = mongoose.model('Admin', adminSchema);

Admin.find({}).then(function (docs) {
    if (docs.length === 0) {
        Admin.create({ email: 'it@familygroup.id', password: 'superadmin@12345' });
    }
});

module.exports = Admin;