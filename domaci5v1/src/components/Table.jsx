import { useState } from "react";
import Input from "./Input";
import { v4 as V4 } from "uuid";

const Table = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Pero", lastName: "Perovski", year: 1996 },
    { id: 2, name: "Ivan", lastName: "Ivanovski", year: 1997 },
    { id: 3, name: "Stefan", lastName: "Stefanovski", year: 1998 },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [editingObj, setEditingObj] = useState({
    id: users.length + 1,
    name: "",
    lastName: "",
    year: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const lastName = e.target[1].value;
    const year = e.target[2].value;

    if (!name.trim() || !lastName.trim() || !year) {
      alert("Invalid Inputs");
    } else {
      setUsers((prev) => [
        ...prev,
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

  function handleEdit(id, name, lastName, year) {
    setEditingId(id);
    setEditingObj({ name: name, lastName: lastName, year: year });
  }

  function handleSave(id) {
    const { name, lastName, year } = editingObj;
    changeName(id, name, lastName, year);
    setEditingId(null);
  }

  function deleteUser(id) {
    setUsers((prev) => prev.filter((v) => v.id !== id));
  }

  function changeName(id, newName, newLastName, newYear) {
    setUsers((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, name: newName, lastName: newLastName, year: newYear }
          : item
      )
    );
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
          {users.map(({ id, name, lastName, year }, i) => {
            return (
              <tr key={id}>
                <td>{i + 1}</td>
                {id === editingId ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editingObj.name}
                        onChange={(e) =>
                          setEditingObj({ ...editingObj, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editingObj.lastName}
                        onChange={(e) =>
                          setEditingObj({
                            ...editingObj,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editingObj.year}
                        onChange={(e) =>
                          setEditingObj({ ...editingObj, year: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <button onClick={() => handleSave(id)}>Save</button>
                      <button onClick={() => setEditingId(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{name}</td>
                    <td>{lastName}</td>
                    <td>{year}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(id, name, lastName, year)}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteUser(id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
