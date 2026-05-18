import useCalcularPrecios from "../hooks/useCalcularPrecios";
import type { Receta } from "../types/Receta";

type Props = {
  receta: Receta;
};

export default function RecetaCard({ receta }: Props) {
  const { calcularPrecioUsado, calcularTotalReceta } = useCalcularPrecios();
  const total = calcularTotalReceta(receta.ingredientes);

  return (
    <article className="card">
      <header>
        <img src="/azucar.jpg" alt={receta.nombre} />
        <h2>{receta.nombre}</h2>

        <ul>
          {receta.ingredientes.map((i) => (
            <li key={i.id}>
              <h4>{i.ingrediente.nombre}</h4>
              <p>
                Cantidad utilizada: {i.cantidadUsada} {i.unidad}
              </p>

              <p>
                Costo del ingrediente: $
                {calcularPrecioUsado(
                  i.ingrediente.id,
                  i.cantidadUsada,
                  i.unidad,
                )}
              </p>
            </li>
          ))}
        </ul>
      </header>
      <footer>
        <h4>Costo total de la receta: ${total}</h4>
      </footer>
    </article>
  );
}
