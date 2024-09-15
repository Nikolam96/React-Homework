//! Za domasna:
//? 1) Da se iskreira wrapper za Dropdown
//* Vrednosti definirani vo Login.jsx ->
//* const elements = [
//*   {value: "Facebook", name:"Facebook"},
//*   {value: "Instagram", name:"Instagram"},
//*   {value: "SnapChat", name:"SnapChat"}
//* ];
//? 2) Ke se dodade pole za komentari i button koe na klik na button-ot (mozete da gi koristite od font awesome ikonkite
//* za buttonot kako sto pravevme za password) ke stane textarea za multiline comment (da ne se izgubi vrednosta
//* vnesena vo input fieldot za single line comment pri promena).
//? 3) Site vrednosti da se prikazat vo alert box-ot
//! *** to rework password eye hide/show using mouse enter/leave

import { Login } from "./components/Login";
import "./css/App.css";

export function App() {
  return (
    <div id="app">
      <Login />
    </div>
  );
}
