import { Router } from "express";
import {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} from "../controllers/tag.controller.js";

import { validator } from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

import {
  getTagByIdValidation,
  createTagValidation,
  updateTagValidation,
  deleteTagValidation,
} from "../middlewares/validations/tag.validation.js";

export const router = Router();

router.get("/", authMiddleware, getAllTags);
router.get(
  "/:id",
  getTagByIdValidation,
  validator,
  authMiddleware,
  adminMiddleware,
  getTagById
);
router.post(
  "/",
  createTagValidation,
  validator,
  authMiddleware,
  adminMiddleware,
  createTag
);
router.put(
  "/:id",
  updateTagValidation,
  validator,
  authMiddleware,
  adminMiddleware,
  updateTag
);
router.delete(
  "/:id",
  deleteTagValidation,
  validator,
  authMiddleware,
  adminMiddleware,
  deleteTag
);

export default router;
