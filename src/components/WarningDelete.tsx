import "../css/ModalDelete.css";
import useWarningDelete from "../hooks/useWarningDelete";

type Props = {
  nombre: string;
  deleteModal: boolean;
  callBack: () => void;
};

export default function WarningDelete({
  nombre,
  deleteModal,
  callBack,
}: Props) {
  const { handleDelete } = useWarningDelete();

  return (
    <article className={`modal-delete ${deleteModal ? "open" : "close"}`}>
      <div className="delete-icon">⚠</div>

      <h2 className="delete-title">Eliminar ingrediente</h2>

      <p className="delete-text">
        ¿Seguro que querés eliminar <span>{nombre}</span>?
      </p>

      <p className="delete-warning">Esta acción no se puede deshacer.</p>

      <div className="delete-actions">
        <button
          className="cancel-btn"
          onClick={() => {
            callBack();
          }}
        >
          CANCELAR
        </button>

        <button
          className="confirm-delete-btn"
          onClick={() => {
            handleDelete();
          }}
        >
          BORRAR
        </button>
      </div>
    </article>
  );
}
