import "../css/Content.css";
import Recetas from "./Recetas";
import Ingredientes from "./Ingredientes";
import { useAppcontext } from "../hooks/useAppContext";
import BotonAdd from "./BotonAdd";
import NewIngrediente from "./NewIngrediente";
import NewReceta from "./NewReceta";
import useContent from "../hooks/useContent";

export default function Content() {
  const { selection } = useAppcontext();
  const { input, handleChange } = useContent();

  return (
    <main className="content-container">
      <BotonAdd />
      <form>
        <label htmlFor="filtro">Buscar</label>
        <input id="filtro" type="text" value={input} onChange={handleChange} />
      </form>
      <section className="content">
        {selection === 0 ? <Recetas /> : <Ingredientes />}
      </section>
      <NewReceta />
      <NewIngrediente />
    </main>
  );
}
