const express = require('express');
const router = express.Router();
const userHandller = require('../controllers/user');

router.get('/users', userHandller.getUser);

module.exports = router;