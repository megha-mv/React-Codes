import React, { useState, useEffect } from "react";

function Use() {
  const [count, setCount] = useState(0);
  const [text1, setText] = useState("A");

  useEffect(() => {
    document.title = "${text}" - "${count}";
  }, []);
  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <h1>
        {text1} - {count}
      </h1>
    </>
  );
}

export default Use;
