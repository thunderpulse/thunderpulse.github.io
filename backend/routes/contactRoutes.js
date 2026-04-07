import express from 'express';
import { submitContactMessage, getMessages } from '../controllers/contactController.js';
import apiLimiter from '../middleware/rateLimiter.js';

const router = express.Router();

router.route('/')
  .post(apiLimiter, submitContactMessage)
  .get(getMessages);

export default router;
