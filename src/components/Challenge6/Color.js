export default function Color({ hex, name, onClick }) {
  return (
    <button
      className="color-square"
      style={{ backgroundColor: hex }}
      onClick={() => {
        onClick(hex);
      }}
    >
      <h2>{name}</h2>
    </button>
  );
}
