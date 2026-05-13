import "../css/Menu.css";
import { useAppcontext } from "../hooks/useAppContext";

export default function Menu() {
  const { selection, setSelection } = useAppcontext();

  return (
    <div className="menu">
      <section
        className={` ${selection === 0 ? "active" : "menu-selection"} `}
        onClick={() => {
          setSelection(0);
        }}
      >
        <h2>Recetas</h2>
      </section>
      <section
        className={` ${selection === 1 ? "active" : "menu-selection"} `}
        onClick={() => {
          setSelection(1);
        }}
      >
        <h2>Ingredientes</h2>
      </section>
    </div>
  );
}
