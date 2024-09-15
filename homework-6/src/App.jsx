//! Za domasna zadolzitelno:
//* Random generated id na elementite
//? Delete na Element od Array
//! Za domasna opcionalno:
//? Add Element vo array (array-ot definiran vo state e inicijalno prazen)
//* Counter za kolku elementi se completed
//? Show/Hide opcija na kompletirani Elementi od array-ot
//* Edit na textot od todo-to so opcija za Save/Cancel na edit

import { useState } from "react";
import { Todos } from "./components/Todos";

export const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Eat Dinner", done: false },
    { id: 3, text: "Go to sleep", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [showCompletedTodos, setShowCompletedTodos] = useState(true);
  const [editTodo, setEditTodo] = useState(null);

  //! dodavanje na novo todo
  function addNewTodo() {
    if (newTodo.trim() !== "") {
      let newObject = {
        id: Math.floor(Math.random() * 1000), //* ova ni ovozmozuva da generirame random id
        text: newTodo,
        done: false,
      };
      setTodos([...todos, newObject]);
      setNewTodo("");
    } else {
      alert(
        "No value has been entered!\nPlease enter a valid task before adding it to your list."
      );
    }
  }

  //! stikliranje na todo za zavrsheno
  function markTodoAsDone(todo) {
    setTodos([
      ...todos.map((item) =>
        item.id === todo.id
          ? { id: item.id, text: item.text, done: !item.done }
          : item
      ),
    ]);
  }

  //! editiranje na todo

  //* zapocnuvanje na izmenata
  function handleEdit(id, text) {
    setEditTodo({ id, text });
  }

  //* zacuvuvanje na izmenata
  function handleSave() {
    if (editTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, text: editTodo.text } : todo
      );
      setTodos(updatedTodos);
      setEditTodo(null);
    }
  }

  //* otkazuvanje na izmenata
  function handleCancel() {
    setEditTodo(null);
  }

  //! brishenje na todo
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  //! counter za kolku tasks imame completed
  const completedElements = todos.filter((todo) => todo.done).length;

  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter todo"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addNewTodo}>Add Todo</button>
      <h3>Number of completed Items: {completedElements}</h3>
      <button onClick={() => setShowCompletedTodos(!showCompletedTodos)}>
        {showCompletedTodos ? "Hide Completed" : "Show Completed"}
      </button>
      {todos.length === 0 ? (
        //* ako nema items vo tabelata se prikazuva ovoj text
        <h3>No Items added to Array yet!!!</h3>
      ) : (
        <Todos
          listOfTodos={
            showCompletedTodos ? todos : todos.filter((todo) => !todo.done)
          }
          markTodoAsDone={markTodoAsDone}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
          editTodo={editTodo}
        />
      )}
    </div>
  );
};
