//! Za domasna:
//? Da se dodade delete na users vo redux

import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

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
