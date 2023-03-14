import "./App.css";

import close from "./assets/images/close.png";
import { ReactComponent as Dashboard } from "./assets/images/dashboard.svg";
import { useState } from "react";
import { ItemDashboard } from "./components/item-dashboard";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  function handleOverlayClick() {
    setShowMenu(false);
  }

  function handleMenuClickMenu(e) {
    e.stopPropagation();
  }
  return (
    <div className="App">
      <div className="sidebar">
        <div className="item-sidebar">
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
          <ItemDashboard />
        </div>
      </div>

      <div className="content">
        <div className="card-base">
          <button onClick={handleMenuClick}>Abrir Menu</button>
        </div>
      </div>

      <div
        className={`${showMenu ? "filter-overlay" : ""}`}
        onClick={handleOverlayClick}
      >
        <div
          className={`filter ${showMenu ? "" : "close"}`}
          onClick={handleMenuClickMenu}
        >
          <div className="filter-top">
            <div className="filter-header">
              <h5>Filtro</h5>
              <button className="close-btn" onClick={handleOverlayClick}>
                <img src={close} alt="close" />
              </button>
            </div>
            <div className="filter-body">
              <input type="text" placeholder="Pesquisar" />
              <input type="text" placeholder="Pesquisar" />
            </div>
          </div>
          <div className="filter-bottom">
            <div className="divider"></div>
            <div className="filter-footer">
              <button className="button-outline">LIMPAR</button>
              <div className="spacer-horizontal"> </div>
              <button className="button-filled">FILTRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
