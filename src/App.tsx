import Content from "./components/Content";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./css/App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Menu />
      <Content />
    </div>
  );
}
