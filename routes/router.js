const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
    res.json({
        response: "Hello World!"
    })
});

module.exports = router;