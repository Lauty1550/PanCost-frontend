import { useContext } from "react";
import "../css/Content.css";
import { AppContext } from "../context/AppContext";
import Recetas from "./Recetas";
import Ingredientes from "./Ingredientes";
import { useAppcontext } from "../hooks/useAppContext";

export default function Content() {
  const { selection } = useAppcontext();
  return (
    <main className="content">
      {selection === 0 ? <Recetas /> : <Ingredientes />}
    </main>
  );
}
