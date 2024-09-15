//! Za domasna:
//? Da se dodade edit opcija na polinjata od Comments details i moznost za prakjanje na editiraniot objekt so http metoda (PUT/PATCH) do server po isprakjanjeto prikaz na response vo alert ako e 200 redirect nazad kon comments ako ne prikaz na greskata pod detalite.
//* Dopolnitelno da se dodade loader pri izvrsuvanje na povicite

import { Nav } from "./components/Nav";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div id="app">
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
