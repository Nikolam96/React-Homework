import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      let data = await response.json();
      setTodos(data);
    } catch (error) {
      alert("error:" + error.message);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  function handleCheck(id) {
    setTodos((prev) => {
      return prev.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
    });
  }

  return (
    <>
      {todos.length > 1 ? (
        <ol>
          {todos.map((v, i) => {
            return (
              <div key={i}>
                <li key={v.id}>
                  {v.title}
                  <input
                    type="checkbox"
                    checked={v.completed}
                    onChange={() => {
                      handleCheck(v.id);
                    }}
                  />
                </li>
                <br />
              </div>
            );
          })}
        </ol>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Todos;
