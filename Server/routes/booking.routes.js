import { Router } from 'express';
import { createBooking } from '../controllers/booking.controllers.js';
import { getAllBookings, approveBooking, deleteBooking } from '../controllers/admin.controllers.js';
import { authenticateUser } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/create', authenticateUser, createBooking);
router.get('/bookings', getAllBookings);

export default router;
