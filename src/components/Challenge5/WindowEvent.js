import React, { useEffect } from "react";
import "./ToggleEvent.css";

const ToggleEvent = () => {
  useEffect(() => {
    const dblClickEventHandler = function () {
      alert("Mouse Pressed");
    };

    window.addEventListener("dblclick", dblClickEventHandler);

    return () => {
      window.removeEventListener("dblclick", dblClickEventHandler);
    };
  }, []);

  return <h2>Window Event is Active!</h2>;
};

export default ToggleEvent;
