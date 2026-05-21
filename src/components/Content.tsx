import "../css/Content.css";
import Recetas from "./Recetas";
import Ingredientes from "./Ingredientes";
import { useAppcontext } from "../hooks/useAppContext";
import BotonAdd from "./BotonAdd";
import NewIngrediente from "./NewIngrediente";
import NewReceta from "./NewReceta";
import { useMemo, useState } from "react";
import debounce from "just-debounce-it";

export default function Content() {
  const { selection, setQuery } = useAppcontext();
  const [input, setInput] = useState("");

  const debouncedSetQuery = useMemo(
    () =>
      debounce((value: string) => {
        setQuery(value);
      }, 300),
    [setQuery],
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === " " && input === "") return;

    setInput(value);
    debouncedSetQuery(value);
  }

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
