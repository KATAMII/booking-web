-- CreateTable
CREATE TABLE "bookings_table" (
    "id" TEXT NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3) NOT NULL,
    "adults" INTEGER NOT NULL,
    "kids" INTEGER NOT NULL,
    "roomType" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "bookings_table_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bookings_table" ADD CONSTRAINT "bookings_table_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
