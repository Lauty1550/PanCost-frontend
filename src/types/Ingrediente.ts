import type { Unidad } from "./Unidad";

export interface Ingrediente {
  id: number;
  nombre: string;
  precioCompra: number;
  CantidadCompra: number;
  UnidadCompra: Unidad;
}

export type CreateIngredienteDTO = Omit<Ingrediente, "id">;
