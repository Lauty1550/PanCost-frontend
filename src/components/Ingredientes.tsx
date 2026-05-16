import IngredienteCard from "./IngredienteCard";
import { useIngredienteContext } from "../hooks/useIngredienteContext";
import useIngredientes from "../hooks/useIngredientes";

export default function Ingredientes() {
  const { listaIngredientes } = useIngredienteContext();
  useIngredientes();

  return listaIngredientes.map((i) => (
    <IngredienteCard key={i.id} ingrediente={i} />
  ));
}
