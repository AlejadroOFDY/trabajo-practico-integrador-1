import { ProfileModel } from "../models/profile.model.js";

// Obtener todo
export const getAllProfiles = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudieron obtener los perfiles" });
  }
};

// Obtener por id
export const getProfileById = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo obtener el perfil" });
  }
};

// Crear
export const createProfile = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo crear el perfil" });
  }
};

// Modificar
export const updateProfile = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo actualizar el perfil" });
  }
};

// Eliminar
export const deleteProfile = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.msg, msg: "No se pudo eliminar el perfil" });
  }
};
