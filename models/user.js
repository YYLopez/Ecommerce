var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creacion campos asociados al Usuario

var schema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', schema);