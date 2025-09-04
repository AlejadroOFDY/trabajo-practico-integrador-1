import { body, param } from "express-validator";
import { ArticleTagModel } from "../../models/articleTag.model.js";
import { ArticleModel } from "../../models/article.model.js";
import { TagModel } from "../../models/tag.model.js";

// Obtener por id
export const getArticleTagByIdValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const articleTag = await ArticleTagModel.findByPk(value);
      if (!articleTag) {
        throw new Error("No se encontró la relación artículo-etiqueta");
      }
    }),
];

// Crear
export const createArticleTagValidation = [
  body("article_id")
    .notEmpty()
    .withMessage("El id del artículo es un campo obligatorio")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const existingArticle = await ArticleModel.findByPk(value);
      if (!existingArticle) {
        throw new Error("No se encontró el artículo");
      }
    }),
  body("tag_id")
    .notEmpty()
    .withMessage("El id de la etiqueta es un campo obligatorio")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const existingTag = await TagModel.findByPk(value);
      if (!existingTag) {
        throw new Error("No se encontró la etiqueta");
      }
    }),
  body().custom(async (value) => {
    const { article_id, tag_id } = req.body;
    const existingRelation = await ArticleTagModel.findOne({
      where: { article_id, tag_id },
    });
    if (existingRelation) {
      throw new Error("Ya existe la relación artículo-etiqueta");
    }
  }),
];

// Actualizar
export const updateArticleTagValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const articleTag = await ArticleTagModel.findByPk(value);
      if (!articleTag) {
        throw new Error("No se encontró la relación artículo-etiqueta");
      }
    }),
  body("article_id")
    .notEmpty()
    .withMessage("El id del artículo es un campo obligatorio")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const existingArticle = await ArticleModel.findByPk(value);
      if (!existingArticle) {
        throw new Error("No se encontró el artículo");
      }
    }),
  body("tag_id")
    .notEmpty()
    .withMessage("El id de la etiqueta es un campo obligatorio")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const existingTag = await TagModel.findByPk(value);
      if (!existingTag) {
        throw new Error("No se encontró la etiqueta");
      }
    }),
];

// Eliminar
export const deleteArticleTagValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const articleTag = await ArticleTagModel.findByPk(value);
      if (!articleTag) {
        throw new Error("No se encontró la relación artículo-etiqueta");
      }
    }),
];
