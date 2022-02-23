import React, { createContext } from 'react';
import colors from "./color-data.json";
import { render } from 'react-dom';
import App from './App';

export const ColorContext = createContext();
render(
  <ColorContext.Provider value={{ colors }}>
    <App />
  </ColorContext.Provider>,
  document.getElementById("root")
);
