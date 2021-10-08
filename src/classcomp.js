import ReactDOM from "react-dom";
import React from "react";

class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1> Hello {name} </h1>
        <button>Click</button>
      </>
    );
  }
}

export { Welcome };
