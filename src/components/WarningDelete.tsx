import "../css/ModalDelete.css";

type Props = {
  titulo: string;
  nombre: string;
  deleteModal: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function WarningDelete({
  nombre,
  deleteModal,
  titulo,
  onClose,
  onConfirm,
}: Props) {
  return (
    <article className={`modal-delete ${deleteModal ? "open" : "close"}`}>
      <div className="delete-icon">⚠</div>

      <h2 className="delete-title">{titulo}</h2>

      <p className="delete-text">
        ¿Seguro que querés eliminar <span>{nombre}</span>?
      </p>

      <p className="delete-warning">Esta acción no se puede deshacer.</p>

      <div className="delete-actions">
        <button className="cancel-btn" onClick={onClose}>
          CANCELAR
        </button>

        <button className="confirm-delete-btn" onClick={onConfirm}>
          BORRAR
        </button>
      </div>
    </article>
  );
}
