const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    }
});

const Role = mongoose.model('Role', roleSchema);

exports.Role = Role;
exports.roleSchema = roleSchema;