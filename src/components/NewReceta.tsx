import { useFieldArray, useForm } from "react-hook-form";
import type { CreateRecetaDTO } from "../types/Receta";
import { useState } from "react";
import { useAppcontext } from "../hooks/useAppContext";
import "../css/Modal.css";
import useIngredientes from "../hooks/useIngredientes";
import { useIngredienteContext } from "../hooks/useIngredienteContext";
import { RecetaService } from "../services/Receta.service";

export default function NewReceta() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CreateRecetaDTO>();

  const unidades = ["g", "kg", "ml", "l", "unidad"] as const;

  const [closing, setClosing] = useState(false);
  const {
    enableModalReceta,
    setEnableModalReceta,
    setDispararFetchReceta,
    dispararFetchReceta,
  } = useAppcontext();
  useIngredientes();
  const { listaIngredientes } = useIngredienteContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredientes",
  });

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setEnableModalReceta(false);
      setClosing(false);
    }, 100);
  };

  async function onSubmit(data: CreateRecetaDTO) {
    await RecetaService.addNewReceta(data);
    reset();
    setDispararFetchReceta(!dispararFetchReceta);
    handleClose();
  }

  return (
    <div
      className={`modal-overlay ${enableModalReceta ? "open" : "close"} ${
        closing ? "close" : ""
      }`}
    >
      <form
        className={`modal ${enableModalReceta ? "open" : "close"}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 onClick={handleClose}>X</h1>
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

        {/* Ingredientes */}
        <section>
          <h3>Ingredientes</h3>

          {fields.map((field, index) => (
            <div
              key={field.id}
              style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              {/* Ingrediente */}
              <select
                {...register(`ingredientes.${index}.ingredienteId`, {
                  required: true,
                  valueAsNumber: true,
                })}
              >
                <option value="">Seleccione ingrediente</option>

                {listaIngredientes.map((ingrediente) => (
                  <option key={ingrediente.id} value={ingrediente.id}>
                    {ingrediente.nombre}
                  </option>
                ))}
              </select>

              {/* Cantidad */}
              <input
                type="number"
                step="0.01"
                placeholder="Cantidad"
                {...register(`ingredientes.${index}.cantidadUsada`, {
                  required: true,
                  valueAsNumber: true,
                })}
              />

              {/* Unidad */}
              <select
                {...register(`ingredientes.${index}.unidad`, {
                  required: true,
                })}
              >
                <option value="">Unidad</option>

                {unidades.map((unidad) => (
                  <option key={unidad} value={unidad}>
                    {unidad}
                  </option>
                ))}
              </select>

              {/* Eliminar */}
              <button type="button" onClick={() => remove(index)}>
                Eliminar
              </button>
            </div>
          ))}

          {/* Agregar ingrediente */}
          <button
            type="button"
            onClick={() =>
              append({
                ingredienteId: 0,
                cantidadUsada: 0,
                unidad: "g",
              })
            }
          >
            Agregar ingrediente
          </button>
        </section>

        <button type="submit">Guardar receta</button>
      </form>
    </div>
  );
}
