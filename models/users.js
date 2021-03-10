const mongoose = require('mongoose');
const { Department } = require('./department');
const {roleSchema, Role} = require('./role');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    },
    //hybrid embeded approach
    role:{
        type: roleSchema,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    }
});

const User = mongoose.model('Users', userSchema);

async function createUser(name, role, department){
    const user = new User({name, role, department});
    const result = await user.save();
    console.log(result);
}

async function getUsers(){
    const users = await User
        .find()
        .populate('department' ,'name -_id')
        .select('name role department');
    console.log(users)
}
// createUser('Arisa', new Role({name: 'Admin'}), '60484eb1d6629c2f9047153a');
// getUsers()
exports.User = User;