import React from "react";
import { Age } from "./compmonets/Age";

export function App() {
  let user1 = { ime: "Nikola", prezime: " Mitic", adresa: "Nis", godine: 28 };
  let user2 = {
    ime: "Dusan",
    prezime: "Radulovic",
    adresa: "Beograd",
    godine: 17,
  };
  let user3 = { ime: "Marko", prezime: "Cerne", adresa: "Nis", godine: 20 };
  let user4 = {
    ime: "Aleksej",
    prezime: "Cajic",
    adresa: "Aleksinac",
    godine: 18,
  };

  return (
    <div id="app">
      <Age user1={user1} user2={user2} user3={user3} user4={user4} />
    </div>
  );
}
