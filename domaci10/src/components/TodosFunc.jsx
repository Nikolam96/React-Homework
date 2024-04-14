import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  todosChecked,
  todosChangeValue,
} from "../actions/TodosAction";

const TodosFunc = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TodosReducer.todos);
  const [newTodo, setNewTodo] = useState("");
  const [todoId, setId] = useState("");
  const [hideCheck, setHideCheck] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <button onClick={() => setHideCheck(!hideCheck)}>hideCheck</button>
      {todos.map(({ id, title, completed }) => {
        return (
          <div key={id}>
            <ol>
              <li
                style={{
                  display: hideCheck && completed ? "none" : "list-item",
                }}
              >
                {todoId === id ? (
                  <>
                    <input
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        dispatch(todosChangeValue(id, newTodo));
                        setId("");
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setId("");
                      }}
                    >
                      Cencel
                    </button>
                  </>
                ) : (
                  <>
                    <b>{title}</b>
                    <input
                      type="checkbox"
                      checked={completed}
                      onChange={() => dispatch(todosChecked(id))}
                    />
                    <button
                      onClick={() => {
                        setId(id);
                        setNewTodo(title);
                      }}
                    >
                      Change Todo
                    </button>
                  </>
                )}
              </li>
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default TodosFunc;
