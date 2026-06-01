import { useEffect, useState } from "react";
import useDelete from "../hooks/useDelete";
import useCalcularPrecios from "../hooks/useCalcularPrecios";
import type { Receta } from "../types/Receta";

type Props = {
  receta: Receta;
  onClose: () => void;
};

export default function useRecetaDetalleModal({ receta, onClose }: Props) {
  const { calcularPrecioUsado, calcularTotalReceta } = useCalcularPrecios();
  const [deleteModal, setDeleteModal] = useState(false);
  const { handleDeleteReceta } = useDelete();
  const [isOpen, setIsOpen] = useState(false);

  const total = calcularTotalReceta(receta.ingredientes);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      onClose();
    }, 250);
  };

  return {
    calcularPrecioUsado,
    deleteModal,
    setDeleteModal,
    handleDeleteReceta,
    isOpen,
    handleClose,
    total,
  };
}
