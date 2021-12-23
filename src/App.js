import "./App.css";
import LandingScreen from "./LandingScreen";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [screen, setScreen] = useState("landing");
  if (screen === "landing") {
    return <LandingScreen setScreen={setScreen} />;
  } else {
    return <Modal setScreen={setScreen} />;
  }
}

export default App;
