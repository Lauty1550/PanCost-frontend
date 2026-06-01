import { useState, type ReactNode } from "react";
import { IngredienteContext } from "./IngredienteContext";
import type { Ingrediente } from "../types/Ingrediente";

type Props = {
  children: ReactNode;
};

export default function IngredienteProvider({ children }: Props) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [idIngrediente, setIdIngrediente] = useState(0);
  const [listaIngredientes, setListaIngredientes] = useState<Ingrediente[]>([]);
  const [ingredienteEditar, setIngredienteEditar] =
    useState<Ingrediente | null>(null);

  return (
    <IngredienteContext.Provider
      value={{
        deleteModal,
        setDeleteModal,
        idIngrediente,
        setIdIngrediente,
        listaIngredientes,
        setListaIngredientes,
        ingredienteEditar,
        setIngredienteEditar,
      }}
    >
      {children}
    </IngredienteContext.Provider>
  );
}
