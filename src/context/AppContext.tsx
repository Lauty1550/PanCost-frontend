import React, { createContext } from "react";

type AppContextType = {
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType | null>(null);
