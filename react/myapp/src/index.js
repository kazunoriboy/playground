import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handleAddCount = () => {
    dispatch({ type: "add_count" });
  };
  return (
    <div>
      <button onClick={handleAddCount}>+1</button>
      <p>{count}</p>
    </div>
  );
};

const initialState = { count: 0 };
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "add_count":
      const newCount = state.count + 1;
      return {
        count: newCount
      };
    default:
      return state;
  }
};

const store = createStore(counter);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
