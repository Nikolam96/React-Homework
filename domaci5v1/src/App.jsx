import React, { useState } from "react";
import Traning from "./components/Traning";
import Input from "./components/Input";
import { v4 as V4 } from "uuid";

function App() {
  const [traning, settraning] = useState([...Traning]);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [editinglastName, setEditinglastName] = useState("");
  const [editingAge, setEditingYear] = useState(0);

  function changeName(id, newName, newLastName, newYear) {
    settraning((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, name: newName, lastName: newLastName, year: newYear }
          : item
      )
    );
  }

  function handleEdit(id, name, lastName, year) {
    setEditingId(id);
    setEditingName(name);
    setEditinglastName(lastName);
    setEditingYear(year);
  }

  function handleSave(id) {
    changeName(id, editingName, editinglastName, editingAge);
    setEditingId(null);
  }

  function cencelSave(name, lastName, year) {
    setEditingName(name);
    setEditinglastName(lastName);
    setEditingYear(year);
    setEditingId(null);
  }

  function deleteUser(id) {
    settraning((prev) => prev.filter((v) => v.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const lastName = formData.get("lastName");
    const year = formData.get("year");

    if (!name.trim() || !lastName.trim() || !year) {
      alert("Invalid Inputs");
    } else {
      settraning((prevTraning) => [
        ...prevTraning,
        {
          id: V4(),
          name: name,
          lastName: lastName,
          year: year,
        },
      ]);
      e.target.reset();
    }
  }

  return (
    <>
      <Input handleSubmit={handleSubmit} />
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Birth Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {traning.map(({ id, name, lastName, year }, i) => (
            <tr key={id}>
              <td>{i + 1}</td>
              <td>
                {editingId === id ? (
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                  />
                ) : (
                  name
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type="text"
                    value={editinglastName}
                    onChange={(e) => setEditinglastName(e.target.value)}
                  />
                ) : (
                  lastName
                )}
              </td>
              <td>
                {editingId === id ? (
                  <input
                    type="text"
                    value={editingAge}
                    onChange={(e) => setEditingYear(e.target.value)}
                  />
                ) : (
                  year
                )}
              </td>
              <td>
                {editingId === id ? (
                  <>
                    <button onClick={() => handleSave(id)}>Save</button>
                    <button onClick={() => cencelSave(name, lastName, year)}>
                      Cencel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(id, name, lastName, year)}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteUser(id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
