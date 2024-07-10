import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllBookings = async (req, res) => {
  try {
    console.log("Fetching all bookings"); 
    const bookings = await prisma.booking.findMany({
      include: {
        user: true, 
      },
    });
    console.log(bookings); 
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error); 
    res.status(500).json({ message: 'Server Error' });
  }
};

export const approveBooking = async (req, res) => {
  try {
    console.log("Approving booking:", req.params.bookingId); 
    const booking = await prisma.booking.update({
      where: { id: req.params.bookingId },
      data: { status: 'approved' },
    });
    res.json(booking);
  } catch (error) {
    console.error('Error approving booking:', error); 
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    console.log("Deleting booking:", req.params.bookingId); 
    await prisma.booking.delete({
      where: { id: req.params.bookingId },
    });
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    console.error('Error deleting booking:', error); 
    res.status(500).json({ message: 'Server Error' });
  }
};
