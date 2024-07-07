import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createBooking = async (req, res) => {
  const { checkIn, checkOut, adults, kids, roomType, userId } = req.body;

  console.log('Booking request received:', req.body);

  try {
    const booking = await prisma.booking.create({
      data: {
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        adults,
        kids,
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
