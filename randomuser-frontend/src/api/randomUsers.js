import axios from "axios";
import { formatDate } from "../utils/formatters";

export const getUsers = async (page = 1) => {
  const url = `https://randomuser.me/api/?page=${page}&results=10`;
  const resp = await axios.get(url);
  return resp.data.results;
};

export const addUserFavorite = async (user) => {
  const {
    dob: { date },
    gender,
    name: { first },
    location: { country },
    email,
    picture: { large },
  } = user;

  const dataFormatedToSend = {
    nombre: first,
    genero: gender,
    ubicacion: country,
    correo: email,
    cumpleanios: formatDate(date),
    fotografia: large,
  };

  const url = `${import.meta.env.VITE_API_URL}/addfavorite`;
  const resp = await axios.post(url, dataFormatedToSend);
  return resp.data;
};
