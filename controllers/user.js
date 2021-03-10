// const {Department} = require('../models/department')
const {User} = require('../models/users');
exports.getUser = (req, res, next) => {
    res.json({
        response: "Hello World!"
    })
}