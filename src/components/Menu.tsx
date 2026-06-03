import "../css/Menu.css";
import { useAppcontext } from "../hooks/useAppContext";

export default function Menu() {
  const { selection, setSelection } = useAppcontext();

  return (
    <div className="menu">
      <button
        className={selection === 0 ? "active" : "menu-selection"}
        onClick={() => setSelection(0)}
      >
        Recetas
      </button>

      <button
        className={selection === 1 ? "active" : "menu-selection"}
        onClick={() => setSelection(1)}
      >
        Ingredientes
      </button>
    </div>
  );
}
