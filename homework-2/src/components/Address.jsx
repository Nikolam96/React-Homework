import './../css/Index.css';

export function Address ({ users }) {
  const fromSkopje = users.filter(user => user.adresa === "Skopje");
  return(
    <div>
      <h3>Users from Skopje:</h3>
      {fromSkopje.length > 0 ? (
        <ol>
          {fromSkopje.map((user, i) => (
            <li key={i}>
              {user.ime} {user.prezime} - {user.adresa}.
            </li>
          ))}
        </ol>
      ) : (
      <p>No users from Skopje found!</p>
      )}
    </div>
  );
};