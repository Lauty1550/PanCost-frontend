import type { RecetaIngrediente } from "./RecetaIngrediente";

export interface Receta {
  id: number;
  nombre: string;

  ingredientes: RecetaIngrediente[];
}

export type CreateRecetaDTO = Omit<Receta, "id">;
