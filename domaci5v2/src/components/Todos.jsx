import PropTypes from "prop-types";
import { useState } from "react";

const Todos = ({ todos, changeCheck, deleteTodo, handleSave }) => {
  const [hideC, setHideC] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [newInput, setNewInput] = useState("");

  return (
    <>
      {todos.length >= 1 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              {hideC && <th>Completed</th>}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((v, i) => {
              return (
                <tr key={v.id}>
                  <td>{i + 1}</td>
                  <td>
                    {editingId === v.id ? (
                      <input
                        type="text"
                        value={newInput}
                        onChange={(e) => setNewInput(e.target.value)}
                      />
                    ) : (
                      v.item
                    )}
                  </td>
                  {hideC && (
                    <td>
                      <input
                        type="checkbox"
                        checked={v.completed}
                        onChange={() => changeCheck(v.id)}
                      />
                    </td>
                  )}
                  <td>
                    {editingId ? (
                      <>
                        <button
                          onClick={() => {
                            handleSave(editingId, newInput);
                            setEditingId(null);
                          }}
                        >
                          Save
                        </button>
                        <button onClick={() => setEditingId(null)}>
                          Cencel
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => deleteTodo(v.id)}>Delete</button>
                        <button
                          onClick={() => {
                            setEditingId(v.id);
                            setNewInput(v.item);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No item is added to array yet!</h1>
      )}
      {hideC && (
        <h1>
          Number of Complited Tasks{" "}
          {todos.filter((v) => v.completed !== false).length}
        </h1>
      )}
      <button onClick={() => setHideC(!hideC)}>
        {hideC ? "Hide" : "Show"} Complited
      </button>
    </>
  );
};
export default Todos;

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  changeCheck: PropTypes.func,
  deleteTodo: PropTypes.func,
  handleSave: PropTypes.func,
};
