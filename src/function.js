import React from "react";
import "./styles.css";

function Welcome(props) {
  const { name } = props;
  return (
    <>
      <h1> Hello {name} !! </h1>
      <button> Click </button>
    </>
  );
}

export default Welcome;
