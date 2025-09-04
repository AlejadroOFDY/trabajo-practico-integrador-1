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
  getArticleByIdValidation,
  createArticleValidation,
  updateArticleValidation,
  deleteArticleValidation,
} from "../middlewares/validations/article.validation.js";

export const router = Router();

router.get("/", getAllArticleTags);
router.get("/:id", getArticleByIdValidation, validator, getArticleTagById);
router.post("/", createArticleValidation, validator, createArticleTag);
router.put("/:id", updateArticleValidation, validator, updateArticleTag);
router.delete("/:id", deleteArticleValidation, validator, deleteArticleTag);

export default router;
