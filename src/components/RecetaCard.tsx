import useCalcularPrecios from "../hooks/useCalcularPrecios";
import type { Receta } from "../types/Receta";
import "../css/RecetaCard.css";

type Props = {
  receta: Receta;
};

export default function RecetaCard({ receta }: Props) {
  const { calcularPrecioUsado, calcularTotalReceta } = useCalcularPrecios();
  const total = calcularTotalReceta(receta.ingredientes);

  return (
    <article className="card-receta">
      <header>
        <img src="/azucar.jpg" alt={receta.nombre} />
        <h2>{receta.nombre}</h2>

        <hr />

        <table className="tabla-receta">
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Cantidad usada</th>
              <th>Costo</th>
            </tr>
          </thead>

          <tbody>
            {receta.ingredientes.map((i) => (
              <tr key={i.id}>
                <td>{i.ingrediente.nombre}</td>
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
      </header>
      <footer className="card-receta-footer">
        <h4>Costo total de la receta:</h4>
        <span className="total-receta">${total}</span>
      </footer>
    </article>
  );
}
