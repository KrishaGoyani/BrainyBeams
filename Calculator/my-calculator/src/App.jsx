import React, { useState } from "react";
import "./App.css";

// Reusable Button Component
const Button = ({ label, onClick }) => {
  return (
    <button className="calc-button" onClick={onClick}>
      {label}
    </button>
  );
};

// Calculator Component
const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C",
  ];

  return (
    <div className="calculator">
      <div className="display">{display || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} label={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>My Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
