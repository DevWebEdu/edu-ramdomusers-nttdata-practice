import { response } from "express";
import { User } from "../models/user.js";

export const agregarUsuarioFavorito = async (req, res = response) => {
  try {
    const userAdded = new User(req.body);
    await userAdded.save();
    res.status(201).json({
      success: true,
      msg: "Usuario favorito agregado correctamente",
    });
  } catch (error) {
    console.error("Error al agregar usuario favorito:", error);
    res.status(500).json({ message: "Error al agregar usuario favorito" });
  }
};
