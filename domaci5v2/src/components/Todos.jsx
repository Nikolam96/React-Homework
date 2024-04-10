import PropTypes from "prop-types";
import { useState } from "react";

const Todos = ({ todos, changeCheck, deleteTodo, handleSave }) => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newInput, setNewInput] = useState("");

  const handleToggleCompleted = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <>
      {todos.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr
                key={todo.id}
                style={{
                  display:
                    hideCompleted && todo.completed ? "none" : "table-row",
                }}
              >
                <td>{index + 1}</td>
                <td>
                  {editingId === todo.id ? (
                    <input
                      type="text"
                      value={newInput}
                      onChange={(e) => setNewInput(e.target.value)}
                    />
                  ) : (
                    todo.item
                  )}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => changeCheck(todo.id)}
                  />
                </td>
                <td>
                  {editingId === todo.id ? (
                    <>
                      <button
                        onClick={() => {
                          handleSave(editingId, newInput);
                          setEditingId(null);
                        }}
                      >
                        Save
                      </button>
                      <button onClick={() => setEditingId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setEditingId(todo.id);
                          setNewInput(todo.item);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No items are added to the array yet!</h1>
      )}
      <h1>
        Number of Completed Tasks:{" "}
        {todos.filter((todo) => todo.completed).length}
      </h1>
      <button onClick={handleToggleCompleted}>
        {hideCompleted ? "Show" : "Hide"} Completed
      </button>
    </>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  changeCheck: PropTypes.func,
  deleteTodo: PropTypes.func,
  handleSave: PropTypes.func,
};

export default Todos;
