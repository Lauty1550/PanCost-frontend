import { useEffect, useState } from "react";
import type { Receta } from "../types/Receta";
import { RecetaService } from "../services/Receta.service";
import RecetaCard from "./RecetaCard";

export default function Recetas() {
  const [listaRecetas, setListaRecetas] = useState<Receta[]>([]);

  useEffect(() => {
    getRecetas();
  }, []);

  async function getRecetas() {
    const resp = await RecetaService.getAllRecetas();
    setListaRecetas(resp);
  }

  return listaRecetas.map((r) => <RecetaCard key={r.id} receta={r} />);
}
