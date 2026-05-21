import useRecetas from "../hooks/useRecetas";
import RecetaCard from "./RecetaCard";

export default function Recetas() {
  const { recetasFilter } = useRecetas();

  return recetasFilter.map((r) => <RecetaCard key={r.id} receta={r} />);
}
