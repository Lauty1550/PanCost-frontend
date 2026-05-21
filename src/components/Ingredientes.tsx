import useIngrediente from "../hooks/useIngrediente";
import IngredienteCard from "./IngredienteCard";

export default function Ingredientes() {
  const { ingredientesFilter } = useIngrediente();

  return ingredientesFilter.map((i) => (
    <IngredienteCard key={i.id} ingrediente={i} />
  ));
}
