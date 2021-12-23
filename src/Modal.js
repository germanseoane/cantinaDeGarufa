import React from "react";
import carta1 from "../src/assets/carta1.jpeg";
import carta2 from "../src/assets/carta2.jpeg";
import carta3 from "../src/assets/carta3.jpeg";
import carta4 from "../src/assets/carta4.jpeg";
import carta5 from "../src/assets/carta5.jpeg";
import "./Modal.css";

const Modal = ({ setScreen }) => {
  return (
    <>
      <div className="main-div">
        <button className="back-btn" onClick={() => setScreen("landing")}>
          Volver
        </button>
        <div>
          <img className="modal-img" src={carta1} alt="carta1" />
          <img className="modal-img" src={carta2} alt="carta2" />
          <img className="modal-img" src={carta3} alt="carta3" />
          <img className="modal-img" src={carta4} alt="carta4" />
          <img className="modal-img" src={carta5} alt="carta5" />
        </div>
      </div>
    </>
  );
};

export default Modal;
