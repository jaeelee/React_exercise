// import './App.css';
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} text="text" placeholder="Write your to do..." />
        <button>Add todo</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;
