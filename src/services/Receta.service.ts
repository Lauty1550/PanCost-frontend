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
      const formData = new FormData();

      formData.append("nombre", data.nombre);

      formData.append("ingredientes", JSON.stringify(data.ingredientes));

      if (data.imagen?.[0]) {
        formData.append("imagen", data.imagen[0]);
      }

      const resp = await fetch(`${API_URL}/crear`, {
        method: "POST",
        body: formData,
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
