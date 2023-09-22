import { useEffect, useState } from "react";
import "./DogPics.css";

export default function DogPics() {
  const [dogImage, setDogImage] = useState(
    "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
  );
  const onDogImageUpdateHandler = async () => {
    await fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((result) => setDogImage(result.message));
  };

  useEffect(() => {}, []);

  // API: https://dog.ceo/dog-api/
  return (
    <div className="dog-pics">
      <img src={dogImage} alt="Dog Pick" />
      <button onClick={onDogImageUpdateHandler}>🐶</button>
    </div>
  );
}
