import { Router } from "express";
import {
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profile.controller.js";

import { validator } from "../middlewares/validator.js";

import {
  getProfileByIdValidation,
  createProfileValidation,
  updateProfileValidation,
  deleteProfileValidation,
} from "../middlewares/validations/profile.validation.js";

export const router = Router();

router.get("/", getAllProfiles);
router.get("/:id", getProfileByIdValidation, validator, getProfileById);
router.post("/", createProfileValidation, validator, createProfile);
router.put("/:id", updateProfileValidation, validator, updateProfile);
router.delete("/:id", deleteProfileValidation, validator, deleteProfile);

export default router;
