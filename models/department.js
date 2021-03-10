const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    }
});

const Department = mongoose.model('Department', departmentSchema);

async function createDepartment(name) {
    const dep = new Department({name});
    const result = await dep.save();
    console.log(result)
}

// createDepartment('Engineering')
exports.Department = Department;