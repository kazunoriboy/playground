import React from "react";
import ReactDOM from "react-dom";

type AppProps = {
  item: string;
};

function App({ item }: AppProps) {
  return (
    <div>
      <h1>{item}</h1>
    </div>
  );
}

ReactDOM.render(
  <App item="jacket" />,
  document.getElementById("root")
);

