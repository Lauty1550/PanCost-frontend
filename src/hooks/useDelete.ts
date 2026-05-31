import { ingredienteService } from "../services/ingrediente.service";
import { RecetaService } from "../services/Receta.service";
import { useAppcontext } from "./useAppContext";
import { useIngredienteContext } from "./useIngredienteContext";

export default function useDelete() {
  const { idIngrediente } = useIngredienteContext();
  const {
    dispararFetchIngrediente,
    setDispararFetchIngrediente,
    dispararFetchReceta,
    setDispararFetchReceta,
  } = useAppcontext();

  async function handleDeleteIngrediente() {
    try {
      await ingredienteService.deleteIngrediente(idIngrediente);
      setDispararFetchIngrediente(!dispararFetchIngrediente);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Error al eliminar ingrediente");
    }
  }

  async function handleDeleteReceta(id: number) {
    try {
      await RecetaService.deleteReceta(id);
      setDispararFetchReceta(!dispararFetchReceta);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Error al eliminar receta");
    }
  }

  return { handleDeleteIngrediente, handleDeleteReceta };
}
