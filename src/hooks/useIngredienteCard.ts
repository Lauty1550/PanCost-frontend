import { useEffect, useRef, useState } from "react";

export default function useIngredienteCard() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { dropdown, setDropdown, dropdownRef };
}
