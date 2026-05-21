import useCalcularPrecios from "../hooks/useCalcularPrecios";
import type { Receta } from "../types/Receta";
import "../css/RecetaCard.css";
import { useState } from "react";
import DetallesIcon from "../assets/DetallesIcon";

type Props = {
  receta: Receta;
};

export default function RecetaCard({ receta }: Props) {
  const { calcularPrecioUsado, calcularTotalReceta } = useCalcularPrecios();
  const total = calcularTotalReceta(receta.ingredientes);
  const [expandido, setExpandido] = useState(false);
  const cantMostrar = 3;
  const masDeTresIngredientes = receta.ingredientes.length > cantMostrar;
  const restantes = receta.ingredientes.length - cantMostrar;

  const ingredientesAMostrar = expandido
    ? receta.ingredientes
    : receta.ingredientes.slice(0, cantMostrar);

  return (
    <article className="card-receta">
      <header>
        <img src="/azucar.jpg" alt={receta.nombre} />
        <h2>{receta.nombre}</h2>

        <hr />

        <table className="tabla-receta">
          <thead>
            <tr>
              <th colSpan={2}>Ingrediente</th>
              <th>Cant usada</th>
              <th>Costo</th>
            </tr>
          </thead>

          <tbody>
            {ingredientesAMostrar.map((i) => (
              <tr key={i.id}>
                <td className="td-image">
                  <img src="/azucar.jpg" />
                </td>
                <td className="td-nombre">{i.ingrediente.nombre}</td>
                <td>
                  {i.cantidadUsada} {i.unidad}
                </td>
                <td className="table-costo">
                  $
                  {calcularPrecioUsado(
                    i.ingrediente.id,
                    i.cantidadUsada,
                    i.unidad,
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {masDeTresIngredientes && !expandido && (
          <span
            className="expandir"
            onClick={() => {
              setExpandido(true);
            }}
          >
            +{restantes} ingrediente(s) más
          </span>
        )}

        {masDeTresIngredientes && expandido && (
          <span
            className="expandir"
            onClick={() => {
              setExpandido(false);
            }}
          >
            mostrar menos
          </span>
        )}
      </header>
      <footer className="card-receta-footer">
        <div className="total-receta">
          <h4>Costo total de la receta:</h4>
          <span className="total-numero">${total}</span>
        </div>
        <button className="detalles-boton">
          <DetallesIcon /> Ver detalles
        </button>
      </footer>
    </article>
  );
}
