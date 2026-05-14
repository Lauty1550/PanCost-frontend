import React, { createContext } from "react";

type AppContextType = {
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
  enableModal: boolean;
  setEnableModal: React.Dispatch<React.SetStateAction<boolean>>;
  dispararFetch: boolean;
  setDispararFetch: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);
