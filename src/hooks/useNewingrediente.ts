import { useForm } from "react-hook-form";
import type { CreateIngredienteDTO } from "../types/Ingrediente";
import { useState } from "react";
import { useAppcontext } from "./useAppContext";
import { ingredienteService } from "../services/ingrediente.service";

export default function useNewIngrediente() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateIngredienteDTO>();
  const [closing, setClosing] = useState(false);
  const {
    setEnableModalIngrediente,
    dispararFetchIngrediente,
    setDispararFetchIngrediente,
  } = useAppcontext();

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setEnableModalIngrediente(false);
      setClosing(false);
    }, 100);
  };

  async function onSubmit(data: CreateIngredienteDTO) {
    await ingredienteService.addNewIngrediente(data);
    reset();
    setDispararFetchIngrediente(!dispararFetchIngrediente);
    handleClose();
  }

  return {
    onSubmit,
    handleClose,
    handleSubmit,
    closing,
    register,
    errors,
  };
}
