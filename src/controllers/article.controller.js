import { ArticleModel } from "../models/article.model.js";

// Obtener todo
export const getAllArticles = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudieron obtener los artículos" });
  }
};

// Obtener por id
export const getArticleById = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo obtener el artículo" });
  }
};

// Crear
export const createArticle = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo crear el artículo" });
  }
};

// Modificar
export const updateArticle = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo actualizar el artículo" });
  }
};

// Eliminar
export const deleteArticle = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo eliminar el artículo" });
  }
};
