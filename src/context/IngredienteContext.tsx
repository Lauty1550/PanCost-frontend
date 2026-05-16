import React, { createContext } from "react";

type IngredienteContextType = {
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  idIngrediente: number;
  setIdIngrediente: React.Dispatch<React.SetStateAction<number>>;
};

export const IngredienteContext = createContext<IngredienteContextType | null>(
  null,
);
