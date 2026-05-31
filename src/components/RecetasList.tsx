import useRecetas from "../hooks/useRecetasList";
import MainLoading from "./MainLoading";
import RecetaCard from "./RecetaCard";
import "../css/LoadingWrapper.css";

export default function RecetasList() {
  const { recetasFilter, isLoading } = useRecetas();

  return (
    <>
      {isLoading ? (
        <span className="loading-wrapper">
          <MainLoading />
        </span>
      ) : (
        recetasFilter.map((r) => <RecetaCard key={r.id} receta={r} />)
      )}
    </>
  );
}
