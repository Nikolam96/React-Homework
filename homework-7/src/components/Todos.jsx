import PropTypes from "prop-types";
import { useEffect } from "react";

export const Todos = ({ todos, setTodos }) => {
  function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getTodos();
  }, []);

  const handleTodoChange = (id) => {
    setTodos((todos) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return updatedTodos;
    });
  };

  return (
    <div id="todos">
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                {todo.title}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleTodoChange(todo.id)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
