import { TagModel } from "../models/tag.model.js";

// Obtener todo
export const getAllTags = async (req, res) => {
  try {
    const tag = await TagModel.findAll();
    return res.status(200).json();
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudieron obtener las etiquetas" });
  }
};

// Obtener por id
export const getTagById = async (req, res) => {
  try {
    const tag = await TagModel.findOne({ where: { id: req.params.id } });
    return res.status(200).json(tag);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo obtener la etiqueta" });
  }
};

// Crear
export const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const newTag = await TagModel.create({
      name,
    });
    return res.status(201).json(newTag);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo crear la etiqueta" });
  }
};

// Modificar
export const updateTag = async (req, res) => {
  try {
    const tag = await TagModel.findByPk(req.params.id);
    const { name } = req.body;
    await tag.update({
      name: name || tag.name,
    });
    return res.status(200).json(tag);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo actualizar la etiqueta" });
  }
};

// Eliminar
export const deleteTag = async (req, res) => {
  try {
    const tag = await TagModel.findByPk(req.params.id);
    await tag.destroy();
    return res.status(200).json("La etiqueta se eliminó exitosamente");
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo eliminar la etiqueta" });
  }
};
