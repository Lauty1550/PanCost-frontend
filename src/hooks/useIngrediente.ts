import { useIngredienteContext } from "../hooks/useIngredienteContext";
import useIngredientes from "../hooks/useIngredientes";
import { useAppcontext } from "../hooks/useAppContext";

export default function useIngrediente() {
  const { listaIngredientes } = useIngredienteContext();
  const { query } = useAppcontext();

  const ingredientesFilter = listaIngredientes.filter((i) =>
    i.nombre.toLowerCase().includes(query.toLowerCase()),
  );

  useIngredientes();

  return {
    ingredientesFilter,
  };
}
