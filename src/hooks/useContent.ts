import debounce from "just-debounce-it";
import { useMemo, useRef, useState } from "react";
import { useAppcontext } from "./useAppContext";

export default function useContent() {
  const [input, setInput] = useState("");
  const { setQuery } = useAppcontext();
  const inputRef = useRef<HTMLInputElement>(null);

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
    if (value.length > 25) {
      return;
    }

    setInput(value);
    debouncedSetQuery(value);
  }

  function clearQuery() {
    setQuery("");
    setInput("");
  }

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function focusInput() {
    inputRef.current?.focus();
  }

  return { input, handleChange, onSubmit, inputRef, focusInput, clearQuery };
}
