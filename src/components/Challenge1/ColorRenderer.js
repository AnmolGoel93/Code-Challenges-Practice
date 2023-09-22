import Color from "./Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

const ColorRenderer = () => {
  return (
    <ul>
      {colors.map((colorValue, idx) => (
        <Color key={idx} hex={colorValue.hex} name={colorValue.name} />
      ))}
    </ul>
  );
};

export default ColorRenderer;
