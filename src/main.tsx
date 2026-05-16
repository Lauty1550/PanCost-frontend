import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppProvider from "./context/AppProvider.tsx";
import IngredienteProvider from "./context/IngredienteProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <IngredienteProvider>
        <App />
      </IngredienteProvider>
    </AppProvider>
  </StrictMode>,
);
