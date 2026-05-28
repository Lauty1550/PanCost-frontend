import type { Ingrediente } from "../types/Ingrediente";
import "../css/IngredienteCard.css";
import BalanzaIcon from "../assets/BalanzaIcon";
import CofreIcon from "../assets/CofreIcon";
import DotsIcon from "../assets/DotsIcon";
import EtiquetaIcon from "../assets/EtiquetaIcon";
import useIngredienteCard from "../hooks/useIngredienteCard";
import WarningDelete from "./WarningDelete";
import "../css/ModalDelete.css";
import { useIngredienteContext } from "../hooks/useIngredienteContext";

type Props = {
  ingrediente: Ingrediente;
};

export default function IngredienteCard({ ingrediente }: Props) {
  const { dropdown, setDropdown, dropdownRef, deleteModal, setDeleteModal } =
    useIngredienteCard();
  const { setIdIngrediente } = useIngredienteContext();
  const iconColor = "rgba(151, 124, 83)";

  return (
    <article className="card">
      <header className="card-main">
        <img src={ingrediente.urlImagen} alt={ingrediente.nombre} />

        <section>
          <h2>{ingrediente.nombre}</h2>
          <div className="precio">
            <span className="icon-wrapper">
              <EtiquetaIcon color={iconColor} />
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
            <DotsIcon color="#968585" />
          </span>

          <div className={`dropdown ${dropdown ? "open" : "close"}`}>
            <button>Editar</button>
            <button
              onClick={() => {
                setDeleteModal(true);
                setIdIngrediente(ingrediente.id);
                setDropdown(false);
              }}
            >
              Eliminar
            </button>
          </div>
        </span>
      </header>

      <hr className="divider-horizontal" />

      <footer className="card-bottom">
        <section className="card-peso">
          <span className="icon-wrapper">
            <BalanzaIcon color={iconColor} />
          </span>

          <div className="info-wrapper">
            <p>Unidad</p>
            <h4> {ingrediente.unidadCompra}</h4>
          </div>
        </section>

        <hr className="divider-vertical" />

        <section className="card-peso">
          <span className="icon-wrapper">
            <CofreIcon color={iconColor} />
          </span>

          <div className="info-wrapper">
            <p>Cantidad</p>
            <h4> {ingrediente.cantidadCompra}</h4>
          </div>
        </section>
      </footer>

      <span
        className={`modal-delete-overlay ${deleteModal ? "open" : "close"} `}
      >
        <WarningDelete
          nombre={ingrediente.nombre}
          deleteModal={deleteModal}
          callBack={() => setDeleteModal(false)}
        />
      </span>
    </article>
  );
}
