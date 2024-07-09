import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const approveBooking = async (req, res) => {
  try {
    const booking = await prisma.booking.update({
      where: { id: parseInt(req.params.bookingId) },
      data: { status: 'approved' },
    });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    await prisma.booking.delete({
      where: { id: parseInt(req.params.bookingId) },
    });
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
