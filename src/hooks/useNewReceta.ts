import { useState } from "react";
import { useAppcontext } from "../hooks/useAppContext";
import useIngredientes from "../hooks/useIngredientes";
import { RecetaService } from "../services/Receta.service";
import { useFieldArray, useForm } from "react-hook-form";
import type { CreateRecetaDTO } from "../types/Receta";
import { toast } from "sonner";

export default function useNewReceta() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, touchedFields },
  } = useForm<CreateRecetaDTO>({
    defaultValues: {
      ingredientes: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredientes",
  });

  const unidades = [
    { label: "Gramos", value: "g" },
    { label: "Kilo", value: "kg" },
    { label: "Mililitros", value: "ml" },
    { label: "Litros", value: "l" },
    { label: "Unidad", value: "Unidad" },
  ] as const;

  const [closing, setClosing] = useState(false);
  const { setEnableModalReceta, setDispararFetchReceta, dispararFetchReceta } =
    useAppcontext();

  const [isLoading, setIsloading] = useState(false);

  useIngredientes();

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setEnableModalReceta(false);
      setClosing(false);
    }, 100);
  };

  async function onSubmit(data: CreateRecetaDTO) {
    try {
      setIsloading(true);

      await RecetaService.addNewReceta(data);
      setDispararFetchReceta(!dispararFetchReceta);
      reset();
      handleClose();
      toast.success("Receta creada");
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    touchedFields,
    closing,
    unidades,
    onSubmit,
    handleClose,
    fields,
    append,
    remove,
    isLoading,
  };
}
