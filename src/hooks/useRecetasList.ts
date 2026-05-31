import { useEffect, useState } from "react";
import type { Receta } from "../types/Receta";
import { RecetaService } from "../services/Receta.service";
import { useAppcontext } from "./useAppContext";
import { toast } from "sonner";

export default function useRecetasList() {
  const [listaRecetas, setListaRecetas] = useState<Receta[]>([]);
  const { query, dispararFetchReceta } = useAppcontext();
  const [isLoading, setIsloading] = useState(false);
  const recetasFilter = listaRecetas.filter(
    (r) =>
      r.nombre.toLowerCase().includes(query.toLowerCase()) ||
      r.ingredientes.some((i) =>
        i.ingrediente.nombre.toLocaleLowerCase().includes(query.toLowerCase()),
      ),
  );

  useEffect(() => {
    getRecetas();
  }, [dispararFetchReceta]);

  async function getRecetas() {
    try {
      setIsloading(true);
      const resp = await RecetaService.getAllRecetas();
      setListaRecetas(resp);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Error obteniendo recetas");
      toast.error("Error al obtener recetas");
    } finally {
      setIsloading(false);
    }
  }

  return { recetasFilter, isLoading };
}
