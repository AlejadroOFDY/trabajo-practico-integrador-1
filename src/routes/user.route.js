import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

import { validator } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const router = Router();

import {
  getUserByIdValidation,
  createUserValidation,
  updateUserValidation,
  deleteUserValidation,
} from "../middlewares/validations/user.validation.js";

router.get("/", authMiddleware, adminMiddleware, getAllUsers);
router.get(
  "/:id",
  getUserByIdValidation,
  validator,
  authMiddleware,
  adminMiddleware,
  getUserById
);
router.post("/", createUserValidation, validator, createUser);
router.put(
  "/:id",
  updateUserValidation,
  validator,
  authMiddleware,
  adminMiddleware,
  updateUser
);
router.delete(
  "/:id",
  deleteUserValidation,
  validator,
  authMiddleware,
  adminMiddleware,
  deleteUser
);

export default router;
