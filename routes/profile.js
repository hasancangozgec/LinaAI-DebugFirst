const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, getUserProfile);

module.exports = router;