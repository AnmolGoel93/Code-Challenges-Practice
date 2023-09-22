import React, { useReducer } from "react";
import "./SimpleCalculator.css";

const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
  operator: "",
};

function reducer(state, action) {
  if (action.type === "NUMBER_1") {
    return { ...state, num1: action.payload };
  } else if (action.type === "NUMBER_2") {
    return { ...state, num2: action.payload };
  } else if (action.type === "RESULT") {
    let result = 0;
    if (action.payload === "+") {
      result = state.num1 + state.num2;
    } else if (action.payload === "-") {
      result = state.num1 - state.num2;
    } else if (action.payload === "c") {
      return initialState;
    }

    return { ...state, result };
  }
}

const SimpleCalculator = () => {
  const [calculatorState, dispatch] = useReducer(reducer, initialState);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              dispatch({
                type: "NUMBER_1",
                payload: number,
              });
            }}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              dispatch({
                type: "NUMBER_2",
                payload: number,
              });
            }}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button
          onClick={() => {
            dispatch({
              type: "RESULT",
              payload: "+",
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "RESULT",
              payload: "-",
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "RESULT",
              payload: "c",
            });
          }}
        >
          c
        </button>
      </div>
      <div>
        <h2>Result:{calculatorState.result}</h2>
      </div>
    </div>
  );
};

export default SimpleCalculator;
