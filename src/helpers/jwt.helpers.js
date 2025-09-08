import jwt from "jsonwebtoken";

// Crea el token
export const generateToken = (payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPERIES,
    });
  } catch (error) {
    throw new Error("No se pudo generar el token", error.message);
  }
};
// Verifica el token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error("No se pudo verificar el token", error.message);
  }
};
