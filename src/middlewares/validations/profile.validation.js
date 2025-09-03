import { body, param } from "express-validator";
import { ProfileModel } from "../../models/profile.model.js";

// Obtener por id
export const getProfileByIdValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const profile = await ProfileModel.findByPk(value);
      if (!profile) {
        throw new Error("No se encontró el perfil");
      }
    }),
];

// Crear
export const createProfileValidation = [
  body("first_name")
    .notEmpty()
    .withMessage("El primer nombre es un campo obligatorio")
    .trim()
    .isLength({ max: 50 })
    .withMessage("El primer nombre debe ser menor a 51 carateres"),
  body("last_name")
    .notEmpty()
    .withMessage("El apellido es un campo obligatorio")
    .trim()
    .isLength({ max: 50 })
    .withMessage("El apellido debe ser menor a 51 carateres"),
  body("biography")
    .optional()
    .notEmpty()
    .withMessage("La biografía no puede estar vacía"),
  body("avatar_url")
    .optional()
    .notEmpty()
    .withMessage("El url del avatar no puede estar vacío")
    .isLength({ max: 255 })
    .withMessage("El url del avatar debe ser menor a 255 caracteres")
    .isURL()
    .withMessage("El avatar debe ser proporcionado por medio de un url"),
  body("birth_date")
    .optional()
    .notEmpty()
    .withMessage("La fecha de nacimiento no puede estar vacía")
    .isDate()
    .withMessage("la fecha de naciminto debe tener el formato de fecha"),
  body("user_id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const existingProfile = await ProfileModel.findOne({
        where: { user_id: value },
      });
      if (existingProfile) {
        throw new Error("Este usuario ya tiene un perfil ");
      }
    }),
];

// Actualizar
export const updateProfileValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const existingProfile = await ProfileModel.findByPk(value);
      if (!existingProfile) {
        throw new Error("No se encontró el perfil");
      }
    }),
  body("first_name")
    .notEmpty()
    .withMessage("El primer nombre es un campo obligatorio")
    .trim()
    .isLength({ max: 50 })
    .withMessage("El primer nombre debe ser menor a 51 carateres"),
  body("last_name")
    .notEmpty()
    .withMessage("El apellido es un campo obligatorio")
    .trim()
    .isLength({ max: 50 })
    .withMessage("El apellido debe ser menor a 51 carateres"),
  body("biography")
    .optional()
    .notEmpty()
    .withMessage("La biografía no puede estar vacía"),
  body("avatar_url")
    .optional()
    .notEmpty()
    .withMessage("El url del avatar no puede estar vacío")
    .isLength({ max: 255 })
    .withMessage("El url del avatar debe ser menor a 255 caracteres")
    .isURL()
    .withMessage("El avatar debe ser proporcionado por medio de un url"),
  body("birth_date")
    .optional()
    .notEmpty()
    .withMessage("La fecha de nacimiento no puede estar vacía")
    .isDate()
    .withMessage("la fecha de naciminto debe tener el formato de fecha"),
];

// Eliminar
export const deleteProfileValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (value) => {
      const existingProfile = await ProfileModel.findByPk();
      if (!existingProfile) {
        throw new Error("No se encontró al perfil");
      }
    }),
];
