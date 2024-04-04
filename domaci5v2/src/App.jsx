import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleTodo(e) {
    e.preventDefault();
    if (!todo.trim()) {
      return alert("Invalid Input");
    }
    setTodos([
      ...todos,
      { id: Math.random() * 1000, item: todo, completed: false },
    ]);
    setTodo("");
  }

  function changeCheck(id) {
    setTodos(
      todos.map((v) => (id === v.id ? { ...v, completed: !v.completed } : v))
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((v) => v.id !== id));
  }

  function handleSave(id, item) {
    setTodos(
      todos.map((v) => {
        return v.id === id ? { ...v, item: item } : v;
      })
    );
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <input
        type="submit"
        value={"Add Todos"}
        onClick={handleTodo}
        onChange={() => setCheck}
      />
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
