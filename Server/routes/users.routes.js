import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controllers.js";
import { validateInformation } from "../middleware/user.middleware.js";

const router = Router();

router.post("/register", validateInformation, createUser);

router.post("/login", loginUser);
export default router;
