import { useForm } from "react-hook-form";
import "../css/Modal.css";
import { useAppcontext } from "../hooks/useAppContext";
import { useState } from "react";
export default function NewIngrediente() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm();
  const [closing, setClosing] = useState(false);
  const { setEnableModal, enableModal } = useAppcontext();

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setEnableModal(false);
      setClosing(false);
    }, 100);
  };

  return (
    <div
      className={`modal-overlay ${enableModal ? "open" : "close"} ${
        closing ? "close" : ""
      }`}
    >
      <form className={`modal ${enableModal ? "open" : "close"}`}>
        <h1 onClick={handleClose}>X</h1>
        <h2> Crear Ingrediente</h2>

        <section className="form-section">
          <label htmlFor="nombreIngrediente"> Nombre ingrediente</label>
          <input
            type="text"
            id="nombreIngrediente"
            {...register("nombreIngrediente", {
              required: true,
              maxLength: 25,
            })}
          />

          {errors.nombreIngrediente?.type === "required" && (
            <p className="text-error">El campo nombre es requerido</p>
          )}

          {errors.nombreIngrediente?.type === "maxLength" && (
            <p className="text-error">Máximo 25 caracteres</p>
          )}
        </section>

        <section className="form-section">
          <label htmlFor="precioCompra">$Precio</label>
          <input
            id="precioCompra"
            type="number"
            {...register("precioCompra", {
              required: true,
              max: 1000000,
            })}
          />

          {errors.precioCompra?.type === "required" && (
            <p className="text-error">El precio es requerido</p>
          )}

          {errors.precioCompra?.type === "max" && (
            <p className="text-error">El precio no puede superar $1000000</p>
          )}
        </section>

        <section className="form-section">
          <label htmlFor="cantCompra">Cantidad</label>
          <input
            id="cantCompra"
            type="number"
            {...register("cantCompra", {
              required: true,
              max: 1000000,
            })}
          />

          {errors.cantCompra?.type === "required" && (
            <p className="text-error">La cantidad es requerida</p>
          )}

          {errors.cantCompra?.type === "max" && (
            <p className="text-error">La cantidad no puede superar 1000000</p>
          )}
        </section>

        <section className="form-section">
          <label htmlFor="unidadCompra"> Unidad de compra</label>
          <select
            id="unidadCompra"
            {...register("unidadCompra", {
              required: true,
            })}
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

        <h2> CREAR</h2>
      </form>
    </div>
  );
}
