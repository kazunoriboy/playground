import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import { render } from "@testing-library/react";

test("renders a star", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Star />, div);
  expect(div.querySelector("svg")).toHaveAttribute("id", "star");
});

test("reders an h1", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Great Star/);
  expect(h1).toHaveTextContent("Great Star");
});
