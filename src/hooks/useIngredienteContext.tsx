import { useContext } from "react";
import { IngredienteContext } from "../context/IngredienteContext";

export function useIngredienteContext() {
  const context = useContext(IngredienteContext);

  if (!context) {
    throw new Error("useIngredienteContext debe usarse dentro del Provider");
  }

  return context;
}
