import useNewIngrediente from "../hooks/useNewingrediente";
import "../css/Modal.css";
import { useAppcontext } from "../hooks/useAppContext";
import "../css/newIngrediente.css";

export default function NewIngrediente() {
  const {
    onSubmit,
    closing,
    errors,
    handleClose,
    handleSubmit,
    register,
    isLoading,
  } = useNewIngrediente();
  const { enableModalIngrediente } = useAppcontext();

  return (
    <div
      className={`modal-overlay ${enableModalIngrediente ? "open" : "close"} ${
        closing ? "close" : ""
      }`}
    >
      <form
        className={`modal ${enableModalIngrediente ? "open" : "close"}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          type="button"
          className="modal-close"
          onClick={handleClose}
          disabled={isLoading}
        >
          ✕
        </button>
        <h2> Crear Ingrediente</h2>

        <section className="form-section">
          <label className="form-label" htmlFor="nombreIngrediente">
            Nombre ingrediente
          </label>
          <input
            type="text"
            id="nombreIngrediente"
            {...register("nombre", {
              required: true,
              maxLength: 25,
            })}
            disabled={isLoading}
          />

          {errors.nombre?.type === "required" && (
            <p className="text-error">El campo nombre es requerido</p>
          )}

          {errors.nombre?.type === "maxLength" && (
            <p className="text-error">Máximo 25 caracteres</p>
          )}
        </section>

        <section className="form-section">
          <label className="form-label" htmlFor="precioCompra">
            $Precio
          </label>
          <input
            id="precioCompra"
            type="number"
            {...register("precioCompra", {
              valueAsNumber: true,
              required: true,
              max: 1000000,
            })}
            disabled={isLoading}
          />

          {errors.precioCompra?.type === "required" && (
            <p className="text-error">El precio es requerido</p>
          )}

          {errors.precioCompra?.type === "max" && (
            <p className="text-error">El precio no puede superar $1000000</p>
          )}
        </section>

        <section className="form-section">
          <label className="form-label" htmlFor="cantCompra">
            Cantidad
          </label>
          <input
            id="cantCompra"
            type="number"
            {...register("cantidadCompra", {
              valueAsNumber: true,
              required: true,
              max: 1000000,
            })}
            disabled={isLoading}
          />

          {errors.cantidadCompra?.type === "required" && (
            <p className="text-error">La cantidad es requerida</p>
          )}

          {errors.cantidadCompra?.type === "max" && (
            <p className="text-error">La cantidad no puede superar 1000000</p>
          )}
        </section>

        <section className="form-section">
          <label className="form-label" htmlFor="unidadCompra">
            Unidad de compra
          </label>
          <select
            id="unidadCompra"
            {...register("unidadCompra", {
              required: true,
            })}
            disabled={isLoading}
          >
            <option value="g">Gramos</option>
            <option value="kg">Kilo</option>
            <option value="ml">Mililitros</option>
            <option value="l">Litro</option>
            <option value="unidad">Unidad</option>
          </select>

          {errors.unidadCompra?.type === "required" && (
            <p className="text-error">La unidad es requerida</p>
          )}
        </section>

        <section className="form-section">
          <label
            className="form-label"
            htmlFor={isLoading ? undefined : "imagen"}
          >
            Imagen
          </label>

          <input
            id="imagen"
            type="file"
            accept="image/*"
            {...register("imagen")}
            disabled={isLoading}
          />
        </section>

        <div className="form-actions">
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <img
                className="loading-gif"
                src="/loading.gif"
                alt="cargando"
                draggable={false}
              />
            ) : (
              "Guardar ingrediente"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
