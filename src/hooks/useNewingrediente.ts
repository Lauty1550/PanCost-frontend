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

  const [isLoading, setIsloading] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setEnableModalIngrediente(false);
      setClosing(false);
    }, 100);
  };

  async function onSubmit(data: CreateIngredienteDTO) {
    try {
      setIsloading(true);
      await ingredienteService.addNewIngrediente(data);
      setDispararFetchIngrediente(!dispararFetchIngrediente);
      reset();
      handleClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  }

  return {
    onSubmit,
    handleClose,
    handleSubmit,
    closing,
    register,
    errors,
    isLoading,
  };
}
