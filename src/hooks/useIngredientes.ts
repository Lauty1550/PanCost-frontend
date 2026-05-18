import { useEffect } from "react";
import { ingredienteService } from "../services/ingrediente.service";
import { useIngredienteContext } from "./useIngredienteContext";
import { useAppcontext } from "./useAppContext";

export default function useIngredientes() {
  const { setListaIngredientes } = useIngredienteContext();
  const { dispararFetchIngrediente } = useAppcontext();

  useEffect(() => {
    getIngredientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispararFetchIngrediente]);

  async function getIngredientes() {
    const resp = await ingredienteService.getAllIngredientes();
    setListaIngredientes(resp);
  }
}
