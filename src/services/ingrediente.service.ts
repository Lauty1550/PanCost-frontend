const API_URL = import.meta.env.VITE_API_URL + "/ingredientes";

export const ingredienteService = {
  async getAllIngredientes() {
    const resp = await fetch(`${API_URL}`);

    if (!resp.ok) {
      throw new Error("Error al obtener precios");
    }

    return await resp.json();
  },
};
