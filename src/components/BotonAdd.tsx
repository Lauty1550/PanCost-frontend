import "../css/BotonAdd.css";
import { useAppcontext } from "../hooks/useAppContext";

export default function BotonAdd() {
  const { selection, setEnableModal } = useAppcontext();
  // eslint-disable-next-line prefer-const
  let tipo = selection === 0 ? "Receta" : "Ingrediente";

  return (
    <button
      className="button-add"
      onClick={() => {
        setEnableModal(true);
      }}
    >
      Agregar {tipo}
    </button>
  );
}
