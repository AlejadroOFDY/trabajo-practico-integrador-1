import { Router } from "express";
import {
  register,
  login,
  logout,
  getUserProfile,
  updateProfile,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import { createUserValidation } from "../middlewares/validations/user.validation.js";
import {
  createProfileValidation,
  updateProfileValidation,
} from "../middlewares/validations/profile.validation.js";
import { validator } from "../middlewares/validator.js";

const router = Router();

router.post(
  "/register",
  createUserValidation,
  createProfileValidation,
  validator,
  register
);

router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.get("/profile", authMiddleware, getUserProfile);
router.put(
  "/profile",
  authMiddleware,
  updateProfileValidation,
  validator,
  updateProfile
);

export default router;
