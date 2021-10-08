import React, { useState } from "react";
import "./styles.css";

function Counter(props) {
  console.log("rendering");
  const state = useState(15);
  const value = state[0];
  const fnToModifyValue = state[1];

  return (
    <>
      <h1> {value} </h1>
      <button
        onClick={() => {
          fnToModifyValue(value + 1);
        }}
      >
        Click
      </button>
    </>
  );
}

export default Counter;
