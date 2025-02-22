import axios from "axios";

const API_URL = "http://127.0.0.1:5000"; // Ajusta la URL según corresponda

export const getMascotas = async () => {
  try {
    const response = await axios.get(`${API_URL}/mascotas`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo mascotas:", error);
    return [];
  }
};
