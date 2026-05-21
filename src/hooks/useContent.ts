import debounce from "just-debounce-it";
import { useMemo, useState } from "react";
import { useAppcontext } from "./useAppContext";

export default function useContent() {
  const [input, setInput] = useState("");
  const { setQuery } = useAppcontext();

  const debouncedSetQuery = useMemo(
    () =>
      debounce((value: string) => {
        setQuery(value);
      }, 300),
    [setQuery],
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === " " && input === "") return;

    setInput(value);
    debouncedSetQuery(value);
  }

  return { input, handleChange };
}
