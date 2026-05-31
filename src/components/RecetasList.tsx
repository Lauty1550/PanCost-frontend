import MainLoading from "./MainLoading";
import RecetaCard from "./RecetaCard";
import "../css/LoadingWrapper.css";
import useRecetasList from "../hooks/useRecetasList";

export default function RecetasList() {
  const { recetasFilter, isLoading } = useRecetasList();

  return (
    <>
      {isLoading ? (
        <span className="loading-wrapper">
          <MainLoading />
        </span>
      ) : recetasFilter.length > 0 ? (
        recetasFilter.map((r) => <RecetaCard key={r.id} receta={r} />)
      ) : (
        <span className="loading-wrapper">
          <h2>No se encontraron recetas</h2>
        </span>
      )}
    </>
  );
}
