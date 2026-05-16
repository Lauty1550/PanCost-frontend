import type { Ingrediente } from "../types/Ingrediente";
import "../css/IngredienteCard.css";
import BalanzaIcon from "../assets/BalanzaIcon";
import CofreIcon from "../assets/CofreIcon";
import DotsIcon from "../assets/DotsIcon";
import EtiquetaIcon from "../assets/EtiquetaIcon";
import useIngredienteCard from "../hooks/useIngredienteCard";

type Props = {
  ingrediente: Ingrediente;
};

export default function IngredienteCard({ ingrediente }: Props) {
  const { dropdown, setDropdown, dropdownRef } = useIngredienteCard();

  return (
    <article className="card">
      <header className="card-main">
        <img src="/azucar.jpg" alt={ingrediente.nombre} />

        <section>
          <h2>{ingrediente.nombre}</h2>
          <div className="precio">
            <span className="icon-wrapper">
              <EtiquetaIcon />
            </span>
            <div className="info-wrapper">
              <p>Precio de compra</p>
              <h4>${ingrediente.precioCompra}</h4>
            </div>
          </div>
        </section>

        <span className="dots" ref={dropdownRef}>
          <span
            className="dots-trigger"
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            <DotsIcon />
          </span>

          <div className={`dropdown ${dropdown ? "open" : "close"}`}>
            <button>Editar</button>
            <button>Eliminar</button>
          </div>
        </span>
      </header>

      <footer className="card-bottom">
        <section className="card-peso">
          <span className="icon-wrapper">
            <BalanzaIcon />
          </span>

          <div className="info-wrapper">
            <p>Unidad de compra</p>
            <h4> {ingrediente.unidadCompra}</h4>
          </div>
        </section>

        <section className="card-peso">
          <span className="icon-wrapper">
            <CofreIcon />
          </span>

          <div className="info-wrapper">
            <p>Cantidad de compra</p>
            <h4> {ingrediente.cantidadCompra}</h4>
          </div>
        </section>
      </footer>
    </article>
  );
}
