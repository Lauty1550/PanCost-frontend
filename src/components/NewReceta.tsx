import { useForm } from "react-hook-form";
import type { CreateRecetaDTO } from "../types/Receta";
import { useState } from "react";
import { useAppcontext } from "../hooks/useAppContext";
import "../css/Modal.css";

export default function NewReceta() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateRecetaDTO>();

  const [closing, setClosing] = useState(false);
  const { enableModalReceta } = useAppcontext();

  return (
    <div
      className={`modal-overlay ${enableModalReceta ? "open" : "close"} ${
        closing ? "close" : ""
      }`}
    >
      <form className={`modal ${enableModalReceta ? "open" : "close"}`}>
        <h2> Crear Receta</h2>

        <section className="form-section">
          <label htmlFor="nombreIngrediente"> Nombre Receta</label>
          <input
            type="text"
            id="nombreReceta"
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
      </form>
    </div>
  );
}
