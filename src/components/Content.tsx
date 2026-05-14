import "../css/Content.css";
import Recetas from "./Recetas";
import Ingredientes from "./Ingredientes";
import { useAppcontext } from "../hooks/useAppContext";
import BotonAdd from "./BotonAdd";
import NewIngrediente from "./NewIngrediente";

export default function Content() {
  const { selection, enableModal } = useAppcontext();
  return (
    <main className="content-container">
      <BotonAdd />
      <section className="content">
        {selection === 0 ? <Recetas /> : <Ingredientes />}
      </section>

      <NewIngrediente />
    </main>
  );
}
