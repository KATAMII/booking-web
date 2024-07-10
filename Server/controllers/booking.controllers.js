import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createBooking = async (req, res) => {
  const { checkIn, checkOut, adults, kids, roomType, userId } = req.body;

  console.log('Booking request received:', req.body);
   const kidsInt = parseInt(kids)
   const adultsInt = parseInt(adults)
  try {
    const booking = await prisma.booking.create({
      data: {
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        adults:adultsInt,
        kids:kidsInt,
        roomType,
        userId,
      },
    });
    console.log('Booking created:', booking);
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
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
    const bookingId = req.params.bookingId;
    console.log("Booking ID:", bookingId); 
    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: 'approved' },
    });
    res.json(booking);
  } catch (error) {
    console.error('Error approving booking:', error.message);
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
