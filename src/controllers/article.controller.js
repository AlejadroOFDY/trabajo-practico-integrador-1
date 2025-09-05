import { ArticleModel } from "../models/article.model.js";
import { TagModel } from "../models/tag.model.js";
import { UserModel } from "../models/user.model.js";

// Obtener todo
export const getAllArticles = async (req, res) => {
  try {
    const article = await ArticleModel.findAll({
      include: [
        {
          model: UserModel,
          as: "author",
        },
      ],
      include: [
        {
          model: TagModel,
          as: "tags",
        },
      ],
    });
    return res.status(200).json(article);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "No se pudieron obtener los artículos",
    });
  }
};

// Obtener por id
export const getArticleById = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id);
    return res.status(200).json(article);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "No se pudo obtener el artículo",
    });
  }
};

// Crear
export const createArticle = async (req, res) => {
  try {
    const { title, content, excerpt, status, user_id } = req.body;
    const newArticle = await ArticleModel.create({
      title,
      content,
      excerpt,
      status,
      user_id,
    });
    return res.status(201).json(newArticle);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message, message: "No se pudo crear el artículo" });
  }
};

// Modificar
export const updateArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id);

    const { title, content, excerpt, status } = req.body;

    await article.update({
      title: title || article.title,
      content: content || article.content,
      excerpt: excerpt || article.excerpt,
      status: status || article.status,
    });

    return res.status(200).json(article);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "No se pudo actualizar el artículo",
    });
  }
};

// Eliminar
export const deleteArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByPk(req.params.id);

    await article.destroy();
    return res.status(200).json("Se eliminó el artículo exitosamente");
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "No se pudo eliminar el artículo",
    });
  }
};
