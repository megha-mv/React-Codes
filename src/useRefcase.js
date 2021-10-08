import React, { useEffect, useRef } from "react";
import "./styles.css";

function Refcase() {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div className="App">
      <input ref={inputEl} type="text" />
      <button>Click</button>
    </div>
  );
}

export default Refcase;
