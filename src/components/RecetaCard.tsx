import type { Receta } from "../types/Receta";
import "../css/RecetaCard.css";
import DetallesIcon from "../assets/DetallesIcon";
import RecetaDetalleModal from "./RecetaDetalleModal";
import useRecetaCard from "../hooks/useRecetaCard";

type Props = {
  receta: Receta;
};

export default function RecetaCard({ receta }: Props) {
  const {
    calcularPrecioUsado,
    ingredientesAMostrar,
    masDeTresIngredientes,
    mostrarDetalle,
    restantes,
    expandido,
    setExpandido,
    setMostrarDetalle,
    total,
  } = useRecetaCard(receta);

  return (
    <article className="card-receta">
      <header>
        <img
          className="card-receta-img"
          src={receta.urlImagen}
          alt={receta.nombre}
          draggable={false}
          onClick={() => setMostrarDetalle(true)}
        />
        <h2 className="receta-titulo">{receta.nombre}</h2>

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
              <tr key={i.id} onClick={() => setMostrarDetalle(true)}>
                <td className="td-image">
                  <img src={i.ingrediente.urlImagen} draggable={false} />
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
        <button
          className="detalles-boton"
          onClick={() => setMostrarDetalle(true)}
        >
          <DetallesIcon /> Ver detalles
        </button>
      </footer>
      {mostrarDetalle && (
        <RecetaDetalleModal
          receta={receta}
          onClose={() => setMostrarDetalle(false)}
        />
      )}
    </article>
  );
}
