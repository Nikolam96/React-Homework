import PropTypes from "prop-types";

export const Todos = ({
  listOfTodos,
  markTodoAsDone,
  deleteTodo,
  handleEdit,
  handleSave,
  handleCancel,
  editTodo,
}) => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOfTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>
                {editTodo && editTodo.id === todo.id ? (
                  <input
                    type="text"
                    value={editTodo.text}
                    onChange={(e) => handleEdit(editTodo.id, e.target.value)}
                  />
                ) : (
                  todo.text
                )}
              </td>
              <td>
                <input
                  type="checkbox"
                  value={todo.done}
                  checked={todo.done}
                  onChange={() => markTodoAsDone(todo)}
                />
              </td>
              <td>
                {editTodo && editTodo.id === todo.id ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(todo.id, todo.text)}>
                      Edit
                    </button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Todos.propTypes = {
  listOfTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
  markTodoAsDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  editTodo: PropTypes.object,
};
