import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useAppcontext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext debe usarse dentro del Provider");
  }

  return context;
}
