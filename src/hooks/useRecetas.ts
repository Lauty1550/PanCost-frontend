import { useEffect, useState } from "react";
import type { Receta } from "../types/Receta";
import { RecetaService } from "../services/Receta.service";
import { useAppcontext } from "../hooks/useAppContext";

export default function useRecetas() {
  const [listaRecetas, setListaRecetas] = useState<Receta[]>([]);
  const { query } = useAppcontext();
  const recetasFilter = listaRecetas.filter((r) =>
    r.nombre.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    getRecetas();
  }, []);

  async function getRecetas() {
    const resp = await RecetaService.getAllRecetas();
    setListaRecetas(resp);
  }

  return { recetasFilter };
}
