import "../css/Content.css";
import { useAppcontext } from "../hooks/useAppContext";
import BotonAdd from "./BotonAdd";
import NewIngrediente from "./NewIngrediente";
import NewReceta from "./NewReceta";
import useContent from "../hooks/useContent";
import { FiSearch } from "react-icons/fi";
import RecetasList from "./RecetasList";
import IngredientesList from "./IngredientesList";
import { IoMdClose } from "react-icons/io";

export default function Content() {
  const { selection } = useAppcontext();
  const { input, handleChange, onSubmit, inputRef, focusInput, clearQuery } =
    useContent();

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
          {input.length > 0 && (
            <IoMdClose className="close-search-icon" onClick={clearQuery} />
          )}
        </div>
      </form>
      <section className="content">
        <div className={selection === 0 ? "visible-grid" : "hidden-grid"}>
          <RecetasList />
        </div>

        <div className={selection === 1 ? "visible-grid" : "hidden-grid"}>
          <IngredientesList />
        </div>
      </section>
      <NewReceta />
      <NewIngrediente />
    </main>
  );
}
