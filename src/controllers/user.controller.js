import { UserModel } from "../models/user.model.js";

// Obtener todo
export const getAllUsers = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudieron obtener los usuarios" });
  }
};

// Obtener por id
export const getUserById = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo obtener el usuario" });
  }
};

// Crear
export const createUser = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo crear el usuario" });
  }
};

// Modificar
export const updateUser = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo actualizar el usuario" });
  }
};

// Eliminar
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo eliminar el usuario" });
  }
};
