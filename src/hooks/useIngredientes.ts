import { useEffect, useState } from "react";
import { ingredienteService } from "../services/ingrediente.service";
import { useIngredienteContext } from "./useIngredienteContext";
import { useAppcontext } from "./useAppContext";
import { toast } from "sonner";

export default function useIngredientes() {
  const { setListaIngredientes } = useIngredienteContext();
  const { dispararFetchIngrediente } = useAppcontext();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getIngredientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispararFetchIngrediente]);

  async function getIngredientes() {
    try {
      setIsloading(true);
      const resp = await ingredienteService.getAllIngredientes();
      setListaIngredientes(resp);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Error al obtener ingredientes");
      toast.error("Error al obtener ingredientes");
    } finally {
      setIsloading(false);
    }
  }

  return { isLoading };
}
