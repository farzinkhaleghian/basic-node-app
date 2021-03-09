const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
    throw new Error('My error1')
    res.json({
        response: "Hello World!"
    })
});

module.exports = router;