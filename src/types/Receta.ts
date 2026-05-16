import type {
  CreateRecetaIngredienteDTO,
  RecetaIngrediente,
} from "./RecetaIngrediente";

export interface Receta {
  id: number;
  nombre: string;

  ingredientes: RecetaIngrediente[];
}

export interface CreateRecetaDTO {
  nombre: string;
  ingredientes: CreateRecetaIngredienteDTO[];
}
