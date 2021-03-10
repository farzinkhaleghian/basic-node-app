const express = require('express');
const router = express.Router();
const userHandller = require('../controllers/user');
const auth = require('../middleware/auth');

router.get('/users', auth, userHandller.getUser);
router.post('/user', auth, userHandller.postUser);

module.exports = router;