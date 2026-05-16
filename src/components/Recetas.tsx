import { useEffect, useState } from "react";
import type { Receta } from "../types/Receta";
import { RecetaService } from "../services/Receta.service";

export default function Recetas() {
  const [listaRecetas, setListaRecetas] = useState<Receta[]>([]);

  console.log(listaRecetas);

  useEffect(() => {
    getRecetas();
  }, []);

  async function getRecetas() {
    const resp = await RecetaService.getAllRecetas();
    setListaRecetas(resp);
  }

  return <h1> Recetas</h1>;
}
