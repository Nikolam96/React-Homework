import React from "react";
import "../assets/age.css";

export const Age = ({ user1, user2, user3, user4 }) => {
  return (
    <div id="age">
      <div>
        <h1>Users :</h1>
        {user1.adresa === "Nis" && user1.godine >= 18 ? (
          <>
            <h2>User 1</h2>
            <p>Ime: {user1.ime}</p>
            <p>Prezime: {user1.prezime}</p>
            <p>Adresa: {user1.adresa}</p>
            <p>Godine: {user1.godine}</p>
          </>
        ) : (
          <h2>User is minor</h2>
        )}
        {user2.adresa === "Nis" &&
          user2.godine >=
            18(
              <>
                <h2>User 2</h2>
                <p>Ime: {user2.ime}</p>
                <p>Prezime: {user2.prezime}</p>
                <p>Adresa: {user2.adresa}</p>
                <p>Godine: {user2.godine}</p>
              </>
            )}

        {user3.adresa === "Nis" && user3.godine >= 18 ? (
          <>
            <h2>User 3</h2>
            <p>Ime: {user3.ime}</p>
            <p>Prezime: {user3.prezime}</p>
            <p>Adresa: {user3.adresa}</p>
            <p>Godine: {user3.godine}</p>
          </>
        ) : (
          <h2>User nema vise od 18 godine and not from Nis</h2>
        )}
        {user4.adresa === "Nis" && user4.godine >= 18 && (
          <>
            <h2>User 4</h2>
            <p>Ime: {user4.ime}</p>
            <p>Prezime: {user4.prezime}</p>
            <p>Adresa: {user4.adresa}</p>
            <p>Godine: {user4.godine}</p>
          </>
        )}
      </div>
    </div>
  );
};
