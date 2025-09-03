import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

export const router = Router();

import { validator } from "../middlewares/validator.js";

import {
  getUserByIdValidation,
  createUserValidation,
  updateUserValidation,
  deleteUserValidation,
} from "../middlewares/validations/user.validation.js";

router.get("/", getAllUsers);
router.get("/:id", getUserByIdValidation, validator, getUserById);
router.post("/", createUserValidation, validator, createUser);
router.put("/:id", updateUserValidation, validator, updateUser);
router.delete("/:id", deleteUserValidation, validator, deleteUser);

export default router;
