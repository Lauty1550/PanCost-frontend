import type { Unidad } from "../types/Unidad";
import { useIngredienteContext } from "./useIngredienteContext";

export default function useCalcularPrecios() {
  const { listaIngredientes } = useIngredienteContext();

  function convertirUnidad(cantidad: number, unidad: Unidad) {
    switch (unidad) {
      case "kg":
        return cantidad * 1000;
      case "g":
        return cantidad;
      case "l":
        return cantidad * 1000;
      case "ml":
        return cantidad;
      case "unidad":
        return cantidad;
      default:
        return cantidad;
    }
  }

  function calcularPrecioUsado(
    idIngrediente: number,
    cantidadUsada: number,
    unidadUsada: Unidad,
  ) {
    const ingrediente = listaIngredientes.find((i) => i.id === idIngrediente);
    if (!ingrediente) return 0;

    const cantidadCompraBase = convertirUnidad(
      ingrediente.cantidadCompra,
      ingrediente.unidadCompra,
    );

    const cantidadUsadaBase = convertirUnidad(cantidadUsada, unidadUsada);

    const precioPorUnidad = ingrediente.precioCompra / cantidadCompraBase;

    return Number((cantidadUsadaBase * precioPorUnidad).toFixed(2));
  }

  function calcularTotalReceta(
    ingredientes: {
      ingrediente: { id: number };
      cantidadUsada: number;
      unidad: Unidad;
    }[],
  ) {
    return Number(
      ingredientes
        .reduce((acc, i) => {
          return (
            acc +
            calcularPrecioUsado(i.ingrediente.id, i.cantidadUsada, i.unidad)
          );
        }, 0)
        .toFixed(2),
    );
  }

  return { calcularPrecioUsado, calcularTotalReceta };
}
