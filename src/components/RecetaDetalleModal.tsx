import type { Receta } from "../types/Receta";
import useCalcularPrecios from "../hooks/useCalcularPrecios";
import "../css/RecetaDetalleModal.css";
import "../css/Modal.css";
import WarningDelete from "./WarningDelete";
import { useState } from "react";
import useDelete from "../hooks/useDelete";

type Props = {
  receta: Receta;
  onClose: () => void;
};

export default function RecetaDetalleModal({ receta, onClose }: Props) {
  const { calcularPrecioUsado, calcularTotalReceta } = useCalcularPrecios();
  const [deleteModal, setDeleteModal] = useState(false);
  const { handleDeleteReceta } = useDelete();

  const total = calcularTotalReceta(receta.ingredientes);

  return (
    <div className="modal-overlay open">
      <div className="modal detalle-receta-modal open">
        <button type="button" className="modal-close" onClick={onClose}>
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

        <h3>Ingredientes</h3>

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

                <p>
                  {i.cantidadUsada} {i.unidad}
                </p>

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
