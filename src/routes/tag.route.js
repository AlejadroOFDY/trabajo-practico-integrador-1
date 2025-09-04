import { Router } from "express";
import {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} from "../controllers/tag.controller.js";

import { validator } from "../middlewares/validator.js";

import {
  getTagByIdValidation,
  createTagValidation,
  updateTagValidation,
  deleteTagValidation,
} from "../middlewares/validations/tag.validation.js";

export const router = Router();

router.get("/", getAllTags);
router.get("/:id", getTagByIdValidation, validator, getTagById);
router.post("/", createTagValidation, validator, createTag);
router.put("/:id", updateTagValidation, validator, updateTag);
router.delete("/:id", deleteTagValidation, validator, deleteTag);

export default router;
