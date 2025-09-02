import { TagModel } from "../models/tag.model.js";

// Obtener todo
export const getAllTags = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudieron obtener las etiquetas" });
  }
};

// Obtener por id
export const getTagById = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo obtener la etiqueta" });
  }
};

// Crear
export const createTag = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo crear la etiqueta" });
  }
};

// Modificar
export const updateTag = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo actualizar la etiqueta" });
  }
};

// Eliminar
export const deleteTag = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo eliminar la etiqueta" });
  }
};
