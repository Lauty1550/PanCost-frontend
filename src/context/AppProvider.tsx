import { useState, type ReactNode } from "react";
import { AppContext } from "./AppContext";

type Props = {
  children: ReactNode;
};

export default function AppProvider({ children }: Props) {
  const [selection, setSelection] = useState(0);

  return (
    <AppContext.Provider value={{ selection, setSelection }}>
      {children}
    </AppContext.Provider>
  );
}
