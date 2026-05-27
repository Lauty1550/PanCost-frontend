import "../css/Content.css";
import Recetas from "./Recetas";
import Ingredientes from "./Ingredientes";
import { useAppcontext } from "../hooks/useAppContext";
import BotonAdd from "./BotonAdd";
import NewIngrediente from "./NewIngrediente";
import NewReceta from "./NewReceta";
import useContent from "../hooks/useContent";
import { FiSearch } from "react-icons/fi";

export default function Content() {
  const { selection } = useAppcontext();
  const { input, handleChange, onSubmit, inputRef, focusInput } = useContent();

  return (
    <main className="content-container">
      <BotonAdd />
      <form className="search" onSubmit={onSubmit}>
        <div className="search-input">
          <FiSearch className="search-icon" onClick={focusInput} />
          <input
            ref={inputRef}
            id="filtro"
            type="text"
            value={input}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
      </form>
      <section className="content">
        {selection === 0 ? <Recetas /> : <Ingredientes />}
      </section>
      <NewReceta />
      <NewIngrediente />
    </main>
  );
}
