import { useEffect, useState } from "react";
import type { Receta } from "../types/Receta";
import { RecetaService } from "../services/Receta.service";
import RecetaCard from "./RecetaCard";
import { useAppcontext } from "../hooks/useAppContext";

export default function Recetas() {
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

  return recetasFilter.map((r) => <RecetaCard key={r.id} receta={r} />);
}
