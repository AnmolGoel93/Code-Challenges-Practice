import React, { useState } from "react";
import WindowEvent from "./WindowEvent";
import "./ToggleEvent.css";

const ToggleEvent = () => {
  const [isEventActive, setIsEventActive] = useState(false);
  const toggleWindowEventHandler = () => {
    setIsEventActive((prevActiveStatus) => !prevActiveStatus);
  };

  return (
    <div className="toggle_event">
      <button type="button" onClick={toggleWindowEventHandler}>
        Toggle Window Event
      </button>
      {isEventActive && <WindowEvent />}
    </div>
  );
};

export default ToggleEvent;
