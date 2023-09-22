import { useEffect, useRef } from "react";
import "./FocusInput.css";

export default function FocusInput() {
  const focusedInputRef = useRef(null);
  useEffect(() => {
    focusedInputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input name="focused-input" ref={focusedInputRef}></input>
    </div>
  );
}
