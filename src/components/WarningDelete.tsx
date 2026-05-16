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
      <h1>
        ¿Esta seguro de querer eliminar el ingrediente <span>{nombre}</span>,
        Esta accion no se puede deshacer
      </h1>
      <div>
        <button
          onClick={() => {
            handleDelete();
          }}
        >
          {" "}
          BORRAR{" "}
        </button>
        <button
          onClick={() => {
            callBack();
          }}
        >
          {" "}
          CANCELAR
        </button>
      </div>
    </article>
  );
}
