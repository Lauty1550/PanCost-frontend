import type { Receta } from "../types/Receta";

import "../css/RecetaDetalleModal.css";
import "../css/Modal.css";
import WarningDelete from "./WarningDelete";
import useRecetaDetalleModal from "../hooks/useRecetaDetalleModal";

type Props = {
  receta: Receta;
  onClose: () => void;
};

export default function RecetaDetalleModal({ receta, onClose }: Props) {
  const {
    calcularPrecioUsado,
    deleteModal,
    handleClose,
    handleDeleteReceta,
    isOpen,
    setDeleteModal,
    total,
  } = useRecetaDetalleModal({ receta, onClose });

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : "close"}`}
      onClick={handleClose}
    >
      <div
        className={`modal detalle-receta-modal ${isOpen ? "open" : "close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={handleClose}>
          ✕
        </button>

        <img
          className="detalle-receta-img"
          src={receta.urlImagen}
          alt={receta.nombre}
          draggable={false}
        />

        <h2>{receta.nombre}</h2>

        <div className="detalle-total">Costo total: ${total}</div>

        <br />
        <div className="detalle-header">
          <span>Ingrediente</span>
          <span>Usado</span>
          <span>Compra</span>
          <span>Costo</span>
        </div>

        <div className="detalle-ingredientes">
          {receta.ingredientes.map((i) => (
            <div key={i.id} className="detalle-ingrediente">
              <img
                src={i.ingrediente.urlImagen}
                alt={i.ingrediente.nombre}
                draggable={false}
              />

              <div className="detalle-ingrediente-info">
                <strong>{i.ingrediente.nombre}</strong>

                <span className="ingrediente-usado">
                  {i.cantidadUsada} {i.unidad}
                </span>

                <span className="ingrediente-compra">
                  {i.ingrediente.cantidadCompra} {i.ingrediente.unidadCompra}
                  {" ($"}
                  {i.ingrediente.precioCompra}
                  {")"}
                </span>

                <strong className="ingrediente-costo">
                  $
                  {calcularPrecioUsado(
                    i.ingrediente.id,
                    i.cantidadUsada,
                    i.unidad,
                  )}
                </strong>
              </div>
            </div>
          ))}
        </div>

        <div className="detalle-actions">
          <button className="editar-btn">Editar</button>

          <button className="eliminar-btn" onClick={() => setDeleteModal(true)}>
            Eliminar
          </button>
        </div>
      </div>

      <span
        className={`modal-delete-overlay ${deleteModal ? "open" : "close"} `}
        onClick={(e) => e.stopPropagation()}
      >
        <WarningDelete
          titulo="Eliminar receta"
          nombre={receta.nombre}
          deleteModal={deleteModal}
          onClose={() => setDeleteModal(false)}
          onConfirm={() => handleDeleteReceta(receta.id)}
        />
      </span>
    </div>
  );
}
