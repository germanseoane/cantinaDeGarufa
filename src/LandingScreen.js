import React from "react";
import pizza from "./assets/pizza.jpg";
import "./LandingScreen.css";

const LandingScreen = () => {
  return (
    <>
      <img
        src={pizza}
        alt="pizza"
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          objectFit: "cover",
        }}
      />
      <div className="glass-container">
        <div className="text">
          <div className="container">
            <h2>La Cantina de Garufa</h2>
            <p className="para">Pizzería y Cocina - Horno a Leña</p>
            <span
              style={{ marginTop: 12 }}
              className="glf-button"
              data-glf-cuid="ff53331e-c441-47b2-a1a4-9192eb5d0893"
              data-glf-ruid="a89a26bc-4820-4cdd-84e9-fed64518319a"
            >
              Haga su pedido
            </span>
          </div>
        </div>
      </div>
      <div className="footer">
        <p style={{ marginLeft: 12, fontSize: 14 }}>
          La Cantina de Garufa - Direccion: 4 de julio 3171.
        </p>
      </div>
    </>
  );
};

export default LandingScreen;
