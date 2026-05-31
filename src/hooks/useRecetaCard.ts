import { useState } from "react";
import useCalcularPrecios from "./useCalcularPrecios";
import type { Receta } from "../types/Receta";

export default function useRecetaCard(receta: Receta) {
  const { calcularPrecioUsado, calcularTotalReceta } = useCalcularPrecios();
  const total = calcularTotalReceta(receta.ingredientes);
  const [expandido, setExpandido] = useState(false);
  const cantMostrar = 3;
  const masDeTresIngredientes = receta.ingredientes.length > cantMostrar;
  const restantes = receta.ingredientes.length - cantMostrar;

  const ingredientesAMostrar = expandido
    ? receta.ingredientes
    : receta.ingredientes.slice(0, cantMostrar);

  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  return {
    calcularPrecioUsado,
    total,
    expandido,
    setExpandido,
    masDeTresIngredientes,
    restantes,
    ingredientesAMostrar,
    mostrarDetalle,
    setMostrarDetalle,
  };
}
