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