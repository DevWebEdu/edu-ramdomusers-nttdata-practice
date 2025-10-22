import { Router } from "express";
import { agregarUsuarioFavorito } from "../controllers/userController.js";

export const router = Router();

// RUTA PARA AGREGAR UN FAVORITO
router.post('/addfavorite' , agregarUsuarioFavorito)