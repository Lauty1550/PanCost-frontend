import { useEffect, useState } from "react";
import type { Ingrediente } from "../types/Ingrediente";
import { ingredienteService } from "../services/ingrediente.service";
import IngredienteCard from "./IngredienteCard";

export default function Ingredientes() {
  const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);
  useEffect(() => {
    getIngredientes();
  }, []);

  async function getIngredientes() {
    const resp = await ingredienteService.getAllIngredientes();
    setIngredientes(resp);
  }
  return ingredientes.map((i) => (
    <IngredienteCard key={i.id} ingrediente={i} />
  ));
}
