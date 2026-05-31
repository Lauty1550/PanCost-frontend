import { useIngredienteContext } from "./useIngredienteContext";
import useIngredientes from "./useIngredientes";
import { useAppcontext } from "./useAppContext";

export default function useIngredienteList() {
  const { listaIngredientes } = useIngredienteContext();
  const { query } = useAppcontext();
  const { isLoading } = useIngredientes();

  const ingredientesFilter = listaIngredientes.filter((i) =>
    i.nombre.toLowerCase().includes(query.toLowerCase()),
  );

  return {
    ingredientesFilter,
    isLoading,
  };
}
