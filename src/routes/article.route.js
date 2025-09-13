import { Router } from "express";
import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getArticlesByUser,
} from "../controllers/article.controller.js";

import { validator } from "../middlewares/validator.js";

import {
  getArticleByIdValidation,
  createArticleValidation,
  updateArticleValidation,
  deleteArticleValidation,
} from "../middlewares/validations/article.validation.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import { ownMiddleware } from "../middlewares/owner.middleware.js";

export const router = Router();

router.get("/", authMiddleware, getAllArticles);
router.get("/user", authMiddleware, getArticlesByUser);
router.get(
  "/:id",
  getArticleByIdValidation,
  validator,
  authMiddleware,
  getArticleById
);

router.post(
  "/",
  createArticleValidation,
  validator,
  authMiddleware,
  createArticle
);

router.put(
  "/:id",
  updateArticleValidation,
  validator,
  authMiddleware,
  ownMiddleware,
  updateArticle
);
router.delete(
  "/:id",
  deleteArticleValidation,
  validator,
  authMiddleware,
  ownMiddleware,
  deleteArticle
);

export default router;
