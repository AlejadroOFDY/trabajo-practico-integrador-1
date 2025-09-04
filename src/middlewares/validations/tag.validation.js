import { body, param } from "express-validator";
import { TagModel } from "../../models/tag.model.js";

// Obtener por id
export const getTagByIdValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const tag = await TagModel.findByPk(value);
      if (!tag) {
        throw new Error("No se encontró la etiqueta");
      }
    }),
];

// Crear
export const createTagValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("El nombre de la etiqueta es un campo obligatorio")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "El nombre de la etiqueta debe contener entre 3 y 20 caracteres"
    )
    .custom(async (value) => {
      const existingTag = await TagModel.findOne({
        where: { name: value },
      });
      if (existingTag) {
        throw new Error("El nombre de la etiqueta ya está en uso");
      }
    }),
];

// Actualizar
export const updateTagValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const tag = await TagModel.findByPk(value);
      if (!tag) {
        throw new Error("No se encontró la etiqueta");
      }
    }),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("El nombre de la etiqueta es un campo obligatorio")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "El nombre de la etiqueta debe contener entre 3 y 20 caracteres"
    )
    .custom(async (value) => {
      const existingTag = await TagModel.findOne({
        where: { name: value },
      });
      if (existingTag) {
        throw new Error("El nombre de la etiqueta ya está en uso");
      }
    }),
];

// Eliminar
export const deleteTagValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const tag = await TagModel.findByPk(value);
      if (!tag) {
        throw new Error("No se encontró la etiqueta");
      }
    }),
];
