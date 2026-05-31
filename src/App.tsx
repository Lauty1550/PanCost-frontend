import { Toaster } from "sonner";
import Content from "./components/Content";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./css/App.css";

export default function App() {
  return (
    <div className="page">
      <Toaster richColors position="top-center" />
      <Header />
      <Menu />
      <Content />
    </div>
  );
}
