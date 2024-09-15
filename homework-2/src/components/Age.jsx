import './../css/Index.css';

export function Age ({ users }) {
  const olderThan18 = users.filter(user => user.godini > 18);
  return(
    <div>
     <h3>Users older than 18 years old:</h3>
      {olderThan18.length > 0 ? (
      <ol>
        {olderThan18.map((user, i) => (
          <li key={i}>
            {user.ime} {user.prezime} - {user.godini} years old.
          </li>
        ))}
      </ol>
     ) : (
     <p>No users older than 18 years old found!</p>
     )}
    </div>
  );
};