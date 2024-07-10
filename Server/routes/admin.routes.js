import { Router } from 'express';
import { getAllBookings, approveBooking, deleteBooking } from '../controllers/admin.controllers.js';
import { authenticateUser, authorizeAdmin } from '../middleware/auth.middleware.js';

const router = Router();


router.use(authenticateUser);
router.use(authorizeAdmin);


router.get('/bookings', getAllBookings);


router.post('/bookings/:bookingId/approve', approveBooking);


router.delete('/bookings/:bookingId', deleteBooking);

export default router;
