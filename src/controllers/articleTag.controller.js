import { ArticleModel } from "../models/article.model.js";
import { TagModel } from "../models/tag.model.js";
import { ArticleTagModel } from "../models/articleTag.model.js";

// Obtener todo
export const getAllArticleTags = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      error: error.msg,
      msg: "No se pudieron obtener las relaciones de los artículos con su etiquetas",
    });
  }
};

// Obtener por id
export const getArticleTagById = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      error: error.msg,
      msg: "No se pudo obtener la relación del artículo con su etiqueta",
    });
  }
};

// Crear
export const createArticleTag = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      error: error.msg,
      msg: "No se pudo crear la relación del artículo con su etiqueta",
    });
  }
};

// Modificar
export const updateArticleTag = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      error: error.msg,
      msg: "No se pudo actualizar la relación del artículo con su etiqueta",
    });
  }
};

// Eliminar
export const deleteArticleTag = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({
        error: error.msg,
        msg: "No se puedo eliminar la relación del artículo con su etiqueta",
      });
  }
};
