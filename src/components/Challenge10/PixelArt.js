import React, { useContext, useState } from "react";
import PixelContext from "./PixelContext";

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setColor } = useContext(PixelContext);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ textAlign: "center" }}>Choose a color</h1>
      <div style={{ marginLeft: "15px" }}>
        {colors.map((color) => (
          <button
            type="button"
            key={color}
            style={{
              backgroundColor: color,
              height: "20px",
              width: "20px",
              borderColor: color,
              marginRight: "10px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => setColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

function Pixel() {
  const [pixelColor, setPixelColor] = useState("lightGrey");
  const { color } = useContext(PixelContext);

  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
      onClick={() => setPixelColor(color)}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  const [color, setColor] = useState("lightGrey");

  return (
    <PixelContext.Provider value={{ color, setColor }}>
      <ColorPicker />
      <Pixels />
    </PixelContext.Provider>
  );
}
