import { UserModel } from "../models/user.model.js";

// Obtener todo
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudieron obtener los usuarios" });
  }
};

// Obtener por id
export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { id: req.params.id /* Deleted: false */ },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo obtener el usuario" });
  }
};

// Crear
export const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = UserModel.create({
      username,
      email,
      password,
      role,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo crear el usuario" });
  }
};

// Modificar
export const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { id: req.params.id, Deleted: false },
    });
    const { username, email, password, role } = req.body;
    await user.update({
      username: username || user.username,
      email: email || user.email,
      password: password || user.password,
      role: role || user.role,
    });
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo actualizar el usuario" });
  }
};

// Eliminar
export const deleteUser = async (req, res) => {
  try {
    const user = UserModel.findOne({
      where: { id: req.params.id /* Deleted: false */ },
    });
    await user.update({ deleted: true });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo eliminar el usuario" });
  }
};
