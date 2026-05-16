import React, { createContext } from "react";
import type { Ingrediente } from "../types/Ingrediente";

type IngredienteContextType = {
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  idIngrediente: number;
  setIdIngrediente: React.Dispatch<React.SetStateAction<number>>;
  listaIngredientes: Ingrediente[];
  setListaIngredientes: React.Dispatch<React.SetStateAction<Ingrediente[]>>;
};

export const IngredienteContext = createContext<IngredienteContextType | null>(
  null,
);
