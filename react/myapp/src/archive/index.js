import ReactDOM from "react-dom";
import { useReducer } from "react";

const initialState = 0;
const reducer = (count = initialState, action) => {
    switch (action.type) {
        case "add_count":
            const newCount = count + 1;
            return newCount;
        default:
            return count;
    }
};

const App = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const handleAddCount = () => {
        dispatch({ type: "add_count", payload: count });
    };
    return (
        <div>
            <button onClick={handleAddCount}>+1</button>
            <p>{count}</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
