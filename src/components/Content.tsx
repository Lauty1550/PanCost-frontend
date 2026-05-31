import "../css/Content.css";
import { useAppcontext } from "../hooks/useAppContext";
import BotonAdd from "./BotonAdd";
import NewIngrediente from "./NewIngrediente";
import NewReceta from "./NewReceta";
import useContent from "../hooks/useContent";
import { FiSearch } from "react-icons/fi";
import RecetasList from "./RecetasList";
import IngredientesList from "./IngredientesList";

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
        {selection === 0 ? <RecetasList /> : <IngredientesList />}
      </section>
      <NewReceta />
      <NewIngrediente />
    </main>
  );
}
