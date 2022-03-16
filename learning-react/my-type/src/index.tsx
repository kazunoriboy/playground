import React from "react";
import ReactDOM from "react-dom";

type AppProps = {
  item: string;
};

function App(props: AppProps) {
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

