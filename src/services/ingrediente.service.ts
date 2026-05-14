import type { CreateIngredienteDTO } from "../types/Ingrediente";

const API_URL = import.meta.env.VITE_API_URL + "/ingredientes";

export const ingredienteService = {
  async getAllIngredientes() {
    const resp = await fetch(`${API_URL}`);

    if (!resp.ok) {
      throw new Error("Error al obtener precios");
    }

    return await resp.json();
  },

  async addNewIngrediente(data: CreateIngredienteDTO) {
    try {
      const resp = await fetch(`${API_URL}/crear`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        throw new Error("Error al crear ingrediente");
      }

      return await resp.json();
    } catch (error) {
      console.error(error);
      console.error("Error al crear ingrediente: ", error);
    }
  },
};
