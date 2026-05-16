import type { CreateIngredienteDTO } from "../types/Ingrediente";

const API_URL = import.meta.env.VITE_API_URL + "/ingredientes";

export const ingredienteService = {
  async getAllIngredientes() {
    const resp = await fetch(`${API_URL}`);

    if (!resp.ok) {
      throw new Error("Error al obtener ingredientes");
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

  async deleteIngrediente(id: number) {
    try {
      const resp = await fetch(`${API_URL}/borrar/${id}`, {
        method: "DELETE",
      });

      if (!resp.ok) {
        throw new Error("Error al eliminar ingrediente");
      }

      return await resp.json();
    } catch (error) {
      console.error("Error al eliminar ingrediente:", error);
      throw error;
    }
  },

  async updateIngrediente(id: number, data: CreateIngredienteDTO) {
    try {
      const resp = await fetch(`${API_URL}/modificar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        throw new Error("Error al actualizar ingrediente");
      }

      return await resp.json();
    } catch (error) {
      console.error("Error al actualizar ingrediente:", error);
      throw error;
    }
  },
};
