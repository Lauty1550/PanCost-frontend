import type { Unidad } from "./Unidad";

export interface Ingrediente {
  id: number;
  nombre: string;
  precioCompra: number;
  cantidadCompra: number;
  unidadCompra: Unidad;
}

export type CreateIngredienteDTO = Omit<Ingrediente, "id">;
