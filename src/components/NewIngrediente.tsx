import { useForm } from "react-hook-form";
import "../css/Modal.css";
import { useAppcontext } from "../hooks/useAppContext";
import { useState } from "react";
import type { CreateIngredienteDTO } from "../types/Ingrediente";
import { ingredienteService } from "../services/ingrediente.service";
export default function NewIngrediente() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<CreateIngredienteDTO>();
  const [closing, setClosing] = useState(false);
  const { setEnableModal, enableModal, dispararFetch, setDispararFetch } =
    useAppcontext();

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setEnableModal(false);
      setClosing(false);
    }, 100);
  };

  async function onSubmit(data: CreateIngredienteDTO) {
    await ingredienteService.addNewIngrediente(data);
    reset();
    setDispararFetch(!dispararFetch);
    handleClose();
  }

  return (
    <div
      className={`modal-overlay ${enableModal ? "open" : "close"} ${
        closing ? "close" : ""
      }`}
    >
      <form
        className={`modal ${enableModal ? "open" : "close"}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 onClick={handleClose}>X</h1>
        <h2> Crear Ingrediente</h2>

        <section className="form-section">
          <label htmlFor="nombreIngrediente"> Nombre ingrediente</label>
          <input
            type="text"
            id="nombreIngrediente"
            {...register("nombre", {
              required: true,
              maxLength: 25,
            })}
          />

          {errors.nombre?.type === "required" && (
            <p className="text-error">El campo nombre es requerido</p>
          )}

          {errors.nombre?.type === "maxLength" && (
            <p className="text-error">Máximo 25 caracteres</p>
          )}
        </section>

        <section className="form-section">
          <label htmlFor="precioCompra">$Precio</label>
          <input
            id="precioCompra"
            type="number"
            {...register("precioCompra", {
              valueAsNumber: true,
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
            {...register("cantidadCompra", {
              valueAsNumber: true,
              required: true,
              max: 1000000,
            })}
          />

          {errors.cantidadCompra?.type === "required" && (
            <p className="text-error">La cantidad es requerida</p>
          )}

          {errors.cantidadCompra?.type === "max" && (
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

        <button type="submit"> CREAR</button>
      </form>
    </div>
  );
}
