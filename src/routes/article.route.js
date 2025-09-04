import { Router } from "express";
import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/article.controlle.js";

import { validator } from "../middlewares/validator.js";

import {
  getArticleByIdValidation,
  createArticleValidation,
  updateArticleValidation,
  deleteArticleValidation,
} from "../middlewares/validations/article.validation.js";

export const router = Router();

router.get("/", getAllArticles);
router.get("/:id", getArticleByIdValidation, validator, getArticleById);
router.post("/", createArticleValidation, validator, createArticle);
router.put("/:id", updateArticleValidation, validator, updateArticle);
router.delete("/:id", deleteArticleValidation, validator, deleteArticle);

export default router;
