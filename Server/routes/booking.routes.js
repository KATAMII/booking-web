import { Router } from 'express';
import { createBooking } from '../controllers/booking.controllers.js';
import { authenticateUser } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/create', authenticateUser, createBooking);

export default router;
