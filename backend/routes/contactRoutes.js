const express = require('express');
const { submitContactMessage, getMessages } = require('../controllers/contactController');
const apiLimiter = require('../middleware/rateLimiter');

const router = express.Router();

router.route('/')
  .post(apiLimiter, submitContactMessage)
  .get(getMessages); // Protect this route in production ideally

module.exports = router;
