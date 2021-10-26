import ReactDOM from 'react-dom';
import { useState, createContext, useContext } from 'react'

const Context = createContext({
    count: 0
});

const App = () => {
    const [count, setCount] = useState(0);
    const handleAddCount = () => {
        setCount((prevCounter) => prevCounter + 1);
    };
    return (
        <Context.Provider value={{ count }}>
            <button onClick={handleAddCount}>+1</button>
            <ChildComponent />
        </Context.Provider>
    );
};
const ChildComponent = () => {
    const { count } = useContext(Context);
    return <p>countの数値は{count}です。</p>;
};
console.log('dddd', ReactDOM);
ReactDOM.render(<App />, document.getElementById("root"));
