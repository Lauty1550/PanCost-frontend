import { useState, type ReactNode } from "react";
import { AppContext } from "./AppContext";

type Props = {
  children: ReactNode;
};

export default function AppProvider({ children }: Props) {
  const [selection, setSelection] = useState(0);
  const [enableModal, setEnableModal] = useState(false);
  const [dispararFetch, setDispararFetch] = useState(false);

  return (
    <AppContext.Provider
      value={{
        selection,
        setSelection,
        enableModal,
        setEnableModal,
        dispararFetch,
        setDispararFetch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
