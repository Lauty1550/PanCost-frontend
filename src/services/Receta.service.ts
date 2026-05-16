import type { CreateRecetaDTO } from "../types/Receta";

const API_URL = import.meta.env.VITE_API_URL + "/recetas";

export const RecetaService = {
  async getAllRecetas() {
    const resp = await fetch(`${API_URL}`);

    if (!resp.ok) {
      throw new Error("Error al obtener receta");
    }
    return resp.json();
  },

  async addNewReceta(data: CreateRecetaDTO) {
    try {
      const resp = await fetch(`${API_URL}/crear`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        throw new Error("Error al crear receta");
      }

      return await resp.json();
    } catch (error) {
      console.error(error);
      console.error("Error al crear receta: ", error);
    }
  },
};
