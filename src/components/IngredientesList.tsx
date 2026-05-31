import useIngredienteList from "../hooks/useIngredienteList";
import IngredienteCard from "./IngredienteCard";
import MainLoading from "./MainLoading";

export default function IngredientesList() {
  const { ingredientesFilter, isLoading } = useIngredienteList();

  return (
    <>
      {isLoading ? (
        <span className="loading-wrapper">
          <MainLoading />
        </span>
      ) : ingredientesFilter.length > 0 ? (
        ingredientesFilter.map((i) => (
          <IngredienteCard key={i.id} ingrediente={i} />
        ))
      ) : (
        <span className="loading-wrapper">
          <h2>No se encontraron ingredientes</h2>
        </span>
      )}
    </>
  );
}
