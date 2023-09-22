import React, { useEffect, useState } from "react";
import "./ScoreKeeper.css";

const ScoreKeeper = () => {
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const onScoreDecrement = () => {
    setScore((prevScore) => {
      return prevScore - 1;
    });
  };

  const onScoreIncrement = () => {
    setScore((prevScore) => {
      return prevScore + 1;
    });
  };

  return (
    <div className="score_keeper">
      <h1>Your Score is : {score}</h1>
      <div>
        <button type="button" onClick={onScoreIncrement}>
          +
        </button>
        <button type="button" onClick={onScoreDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default ScoreKeeper;
