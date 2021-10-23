import { useState } from "react";

function Counter(props) {
  const { count, setCount } = props;
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      Click Count: {count} times
    </div>
  );
}

function ToDoItem(props) {
  console.log(props);
  return (
    <li>
      <label>
        <input type="checkbox" checked={props.item.done} />
        {props.item.name}
      </label>
    </li>
  );
}

function ToDoList(props) {
  return (
    <ul className="todo-list">
      {props.items.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default function App(props) {
  const items = [
    { id: 1, name: "dance lesson", done: false },
    { id: 2, name: "sales activity", done: true },
    { id: 3, name: "work about magazine", done: false },
  ];

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Todo Mock</h2>
      <ToDoList items={items} />
      <h2>Counter</h2>
      <div>
        <Counter count={count} setCount={setCount} />
        <Counter count={count} setCount={setCount} />
        <Counter count={count} setCount={setCount} />
      </div>
    </div>
  )
}
