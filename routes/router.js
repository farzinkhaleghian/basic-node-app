const express = require('express');
const router = express.Router();
const userHandller = require('../controllers/user');

router.get('/users', userHandller.getUser);
router.post('/user', userHandller.postUser);

module.exports = router;