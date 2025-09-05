import { Router } from "express";
import {
  getAllArticleTags,
  getArticleTagById,
  createArticleTag,
  updateArticleTag,
  deleteArticleTag,
} from "../controllers/articleTag.controller.js";

import { validator } from "../middlewares/validator.js";

import {
  getArticleTagByIdValidation,
  createArticleTagValidation,
  updateArticleTagValidation,
  deleteArticleTagValidation,
} from "../middlewares/validations/articleTag.validation.js";

export const router = Router();

router.get("/", getAllArticleTags);
router.get("/:id", getArticleTagByIdValidation, validator, getArticleTagById);
router.post("/", createArticleTagValidation, validator, createArticleTag);
router.put("/:id", updateArticleTagValidation, validator, updateArticleTag);
router.delete("/:id", deleteArticleTagValidation, validator, deleteArticleTag);

export default router;
