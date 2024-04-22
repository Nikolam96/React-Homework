import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./duck/operations";

const Todos = () => {
  const dispatch = useDispatch();
  //* Pokusavam sve nacine da vidim kako sve mogu da resim :D
  //   const todos = useSelector((state) => state.todosReducer.todos);
  const loading = useSelector((state) => state.todosReducer.isLoading);
  const [newTodos, setNewTodos] = useState([]);

  useEffect(() => {
    dispatch(getTodos()).then((res) => {
      setNewTodos(res);
    });
  }, []);

  function handleCheck(id) {
    setNewTodos((prev) => {
      return prev.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
    });
  }

  return (
    <div id="todos">
      {loading && <h1>Loading...</h1>}
      <ol>
        {newTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <strong>{todo.title}</strong>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheck(todo.id)}
              />
              <hr />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Todos;
