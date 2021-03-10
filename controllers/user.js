// const {Department} = require('../models/department')
const {User, createUser} = require('../models/user');
const Joi = require('joi');

exports.getUser = (req, res, next) => {
    res.json({
        response: "Hello World!"
    })
}

exports.postUser = async (req, res, next) => {

    const userName = req.body.name;
    const roleName = req.body.role;
    const department = req.body.departmentId;
    const result = await createUser(userName, roleName, department);
    res.json({
        response: result
    })
    // createUser('Arisa', new Role({name: 'Admin'}), '60484eb1d6629c2f9047153a');
}
function validationUser(user){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        role: Joi.string().min(5).required(),
        departmentId: Joi.objectId().required()
    })
}