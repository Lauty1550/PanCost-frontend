import type { Unidad } from "./Unidad";

export interface Ingrediente {
  id: number;
  nombre: string;
  precioCompra: number;
  cantidadCompra: number;
  unidadCompra: Unidad;
  urlImagen: string;
}

export type CreateIngredienteDTO = Omit<Ingrediente, "id" | "urlImagen"> & {
  imagen: FileList;
};
