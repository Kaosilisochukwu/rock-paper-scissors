import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import OptionComponent from "./components/OptionComponent";
import Rulespage from "./components/Rulespage";

function App() {
  const [display, setDisplay] = useState("none");
  const handleClose = () => setDisplay("none");
  const handleOpen = () => setDisplay("flex");
  return (
    <div className="app">
      <Header />
      <OptionComponent />
      <Rulespage close={handleClose} display={display} />
      <button className="rules-btn" onClick={handleOpen}>
        RULES
      </button>
    </div>
  );
}

export default App;
