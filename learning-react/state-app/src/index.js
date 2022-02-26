import React, { createContext } from 'react';
import ColorProvider from './ColorProvider';
import { render } from 'react-dom';
import {App} from './useEffect/index';

export const ColorContext = createContext();
render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);
