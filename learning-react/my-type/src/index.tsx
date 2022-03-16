import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return (
    <div>
      <h1>{props.item}</h1>
    </div>
  );
}

ReactDOM.render(
  <App item="jacket" />,
  document.getElementById("root")
);

