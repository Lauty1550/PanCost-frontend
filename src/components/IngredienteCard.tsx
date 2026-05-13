import type { Ingrediente } from "../types/Ingrediente";
import "../css/IngredienteCard.css";
import BalanzaIcon from "../assets/BalanzaIcon";
import CofreIcon from "../assets/CofreIcon";

type Props = {
  ingrediente: Ingrediente;
};

export default function IngredienteCard({ ingrediente }: Props) {
  return (
    <article className="card">
      <header className="card-main">
        <img src="/azucar.jpg" alt={ingrediente.nombre} />

        <section>
          <h2>{ingrediente.nombre}</h2>
          <h3>${ingrediente.precioCompra}</h3>
        </section>
      </header>

      <footer className="card-bottom">
        <section className="card-peso">
          <div className="icon-wrapper">
            <BalanzaIcon />
          </div>

          <div className="info-wrapper">
            <p>Unidad de compra</p>
            <h4> {ingrediente.unidadCompra}</h4>
          </div>
        </section>

        <section className="card-peso">
          <div className="icon-wrapper">
            <CofreIcon />
          </div>

          <div className="info-wrapper">
            <p>Cantidad de compra</p>
            <h4> {ingrediente.cantidadCompra}</h4>
          </div>
        </section>
      </footer>
    </article>
  );
}
