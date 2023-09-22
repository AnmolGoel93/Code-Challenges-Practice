import React, { useState } from "react";
import "./ToggleModeScreen.css";

const ToggleModeScreen = () => {
  const [mode, setMode] = useState("dark");

  const onDarkModeClick = () => {
    setMode("dark");
  };

  const onLightModeClick = () => {
    setMode("light");
  };

  const classes = `default ${mode === "dark" ? "dark-mode" : "light-mode"}`;

  return (
    <div className={classes}>
      <div className="actions">
        <button className="dark-btn" type="button" onClick={onDarkModeClick}>
          Dark Mode
        </button>
        <button className="light-btn" type="button" onClick={onLightModeClick}>
          Light Mode
        </button>
      </div>
    </div>
  );
};

export default ToggleModeScreen;
