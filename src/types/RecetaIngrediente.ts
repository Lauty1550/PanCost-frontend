import type { Unidad } from "./Unidad";

export interface RecetaIngrediente {
  id: number;

  recetaId: number;
  ingredienteId: number;
  cantidadUsada: number;
  unidad: Unidad;
}

export type CreateRecetaIngredienteDTO = Omit<RecetaIngrediente, "id">;
