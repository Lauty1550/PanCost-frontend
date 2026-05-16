import { useState, type ReactNode } from "react";
import { IngredienteContext } from "./IngredienteContext";

type Props = {
  children: ReactNode;
};

export default function IngredienteProvider({ children }: Props) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [idIngrediente, setIdIngrediente] = useState(0);

  return (
    <IngredienteContext.Provider
      value={{ deleteModal, setDeleteModal, idIngrediente, setIdIngrediente }}
    >
      {children}
    </IngredienteContext.Provider>
  );
}
