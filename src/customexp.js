import React, { useEffect, useState } from "react";

function UseCusthook() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function handler1(event) {
      const { offsetX, offsetY } = event;
      setX(offsetX);
      setY(offsetY);
    }
    window.addEventListener("mousemove", handler1);
  }, []);

  return [x, y];
}

function Custhook() {
  const [x, y] = UseCusthook();
  return (
    <h1>
      X {x},Y{y}
    </h1>
  );
}

export default Custhook;
