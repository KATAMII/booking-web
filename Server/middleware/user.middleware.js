import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const validateInformation = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName)
    return res
      .status(400)
      .json({ success: false, message: "Firstname is required" });
  if (!lastName)
    return res
      .status(400)
      .json({ success: false, message: "lastname  is required" });
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "email is required" });
  if (!password)
    return res
      .status(400)
      .json({ success: false, message: "password is required" });
  const userWithEmail = await prisma.user.findFirst({
    where: { email: email },
  });
  if (userWithEmail)
    return res
      .status(400)
      .json({ success: false, message: "Email already exist" });
  next();
};
