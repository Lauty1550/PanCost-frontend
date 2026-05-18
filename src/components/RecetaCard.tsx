import type { Receta } from "../types/Receta";

type Props = {
  receta: Receta;
};

export default function RecetaCard({ receta }: Props) {
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
                Cantidad: {i.cantidadUsada} {i.unidad}
              </p>
              <p>Valor: ${i.ingrediente.precioCompra}</p>
            </li>
          ))}
        </ul>
      </header>
    </article>
  );
}
