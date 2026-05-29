import "../css/Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src="/pancost.png" alt="logo" draggable={false} />
      <h1>PanCost</h1>
    </div>
  );
}
