import { body, param } from "express-validator";
import { ArticleModel } from "../../models/article.model.js";

// Obtener por id
export const getArticleByIdValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const article = await ArticleModel.findByPk(value);
      if (!article) {
        throw new Error("No se encontró el artículo");
      }
    }),
];

// Crear
export const createArticleValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("El título del artículo es un campo obligatorio")
    .isLength({ min: 3, max: 200 })
    .withMessage(
      "El título del artículo debe contener entre 3 y 200 caracteres"
    ),
  body("content")
    .trim()
    .notEmpty()
    .withMessage("El contenido del artículo es un campo obligatorio")
    .isLength({ min: 50 })
    .withMessage(
      "El contenido del arículo debe contener un mínimo de 50 caracteres"
    ),
  body("excerpt")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El resumen no puede estar vacío")
    .isLength({ max: 500 })
    .withMessage("El resumen debe contener como máximo 500 caracteres"),
  body("status")
    .optional()
    .notEmpty()
    .withMessage("El estatus no puede estar vacío")
    .isIn(["published", "archived"])
    .withMessage("El estatus solo puede ser publicado o archivado"),
];

// Actualizar
export const updateArticleValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const article = await ArticleModel.findByPk(value);
      if (!article) {
        throw new Error("No se encontró el artículo");
      }
    }),
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El título del artículo no puede estar vacío")
    .isLength({ min: 3, max: 200 })
    .withMessage(
      "El título del artículo debe contener entre 3 y 200 caracteres"
    ),
  body("content")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El contenido del artículo no puede estar vacío")
    .isLength({ min: 50 })
    .withMessage(
      "El contenido del arículo debe contener un mínimo de 50 caracteres"
    ),
  body("excerpt")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El resumen del artículo no puede estar vacío")
    .isLength({ max: 500 })
    .withMessage("El resumen debe contener como máximo 500 caracteres"),
  body("status")
    .optional()
    .notEmpty()
    .withMessage("El estatus no puede estar vacío")
    .isIn(["published", "archived"])
    .withMessage("El estatus solo puede ser publicado o archivado"),
];

// Eliminar
export const deleteArticleValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const article = await ArticleModel.findByPk(value);
      if (!article) {
        throw new Error("No se encontró el artículo");
      }
    }),
];
