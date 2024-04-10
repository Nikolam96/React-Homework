import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      alert("Invalid Input");
      return;
    }
    setTodos([
      ...todos,
      { id: Math.random() * 1000, item: todo, completed: false },
    ]);
    setTodo("");
  };

  const changeCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSave = (id, item) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, item: item } : todo))
    );
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <input type="submit" value={"Add Todos"} onClick={handleTodo} />
      <Todos
        todos={todos}
        changeCheck={changeCheck}
        deleteTodo={deleteTodo}
        handleSave={handleSave}
      />
    </>
  );
}

export default App;
