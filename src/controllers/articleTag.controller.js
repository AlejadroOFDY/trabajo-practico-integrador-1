import { ArticleModel } from "../models/article.model.js";
import { TagModel } from "../models/tag.model.js";
import { ArticleTagModel } from "../models/articleTag.model.js";

// Obtener todo
export const getAllArticleTags = async (req, res) => {
  try {
    const articleTag = await ArticleTagModel.findAll();
    return res.status(200).json(articleTag);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message:
        "No se pudieron obtener las relaciones de los artículos con su etiquetas",
    });
  }
};

// Obtener por id
export const getArticleTagById = async (req, res) => {
  try {
    const articleTag = await ArticleTagModel.findByPk(req.params.id);
    return res.status(200).json(articleTag);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "No se pudo obtener la relación artículo-etiqueta",
    });
  }
};

// Crear
export const createArticleTag = async (req, res) => {
  try {
    const { article_id, tag_id } = req.body;
    const newArticleTag = await ArticleTagModel.create({
      article_id,
      tag_id,
    });
    return res.status(201).json(newArticleTag);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "No se pudo crear la relación artículo-etiqueta",
    });
  }
};

// Modificar
export const updateArticleTag = async (req, res) => {
  try {
    const articleTag = await ArticleTagModel.findOne({
      where: { id: req.params.id },
    });
    const { article_id, tag_id } = req.body;
    await articleTag.update({
      article_id: article_id || articleTag.article_id,
      tag_id: tag_id || articleTag.tag_id,
    });
    return res.status(200).json(articleTag);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "No se pudo actualizar la relación artículo-etiqueta",
    });
  }
};

// Eliminar
export const deleteArticleTag = async (req, res) => {
  try {
    const articleTag = await ArticleTagModel.findByPk(req.params.id);
    await articleTag.destroy();
    return res
      .status(200)
      .json("Se eliminó la relación artículo-etiqueta exitosamente");
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "No se puedo eliminar la relación artículo-etiqueta",
    });
  }
};
