import { Router } from 'express';
import { getAllBookings, approveBooking, deleteBooking } from '../controllers/admin.controllers.js';
import { authenticateUser, authorizeAdmin } from '../middleware/auth.middleware.js';

const router = Router();

// Middleware to check if user is authenticated and an admin
router.use(authenticateUser);
router.use(authorizeAdmin);

// Get all bookings
router.get('/bookings', getAllBookings);

// Approve a booking
router.post('/bookings/:bookingId/approve', approveBooking);

// Delete a booking
router.delete('/bookings/:bookingId', deleteBooking);

export default router;
