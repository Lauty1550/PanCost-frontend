import type {
  CreateRecetaIngredienteDTO,
  RecetaIngrediente,
} from "./RecetaIngrediente";

export interface Receta {
  id: number;
  nombre: string;

  urlImagen: string;
  ingredientes: RecetaIngrediente[];
}

export interface CreateRecetaDTO {
  nombre: string;
  imagen: FileList;
  ingredientes: CreateRecetaIngredienteDTO[];
}
