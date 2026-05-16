import React, { createContext } from "react";

type AppContextType = {
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
  enableModalIngrediente: boolean;
  setEnableModalIngrediente: React.Dispatch<React.SetStateAction<boolean>>;
  dispararFetchIngrediente: boolean;
  setDispararFetchIngrediente: React.Dispatch<React.SetStateAction<boolean>>;
  enableModalReceta: boolean;
  setEnableModalReceta: React.Dispatch<React.SetStateAction<boolean>>;
  dispararFetchReceta: boolean;
  setDispararFetchReceta: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);
