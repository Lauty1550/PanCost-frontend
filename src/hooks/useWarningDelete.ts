import { ingredienteService } from "../services/ingrediente.service";
import { useAppcontext } from "./useAppContext";
import { useIngredienteContext } from "./useIngredienteContext";

export default function useWarningDelete() {
  const { idIngrediente } = useIngredienteContext();
  const { dispararFetch, setDispararFetch } = useAppcontext();

  async function handleDelete() {
    try {
      await ingredienteService.deleteIngrediente(idIngrediente);
      setDispararFetch(!dispararFetch);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Error al eliminar ingrediente");
    }
  }

  return { handleDelete };
}
