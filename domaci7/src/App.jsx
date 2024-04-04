import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <h1>Welcome</h1>
        <Outlet />
      </main>
    </>
  );
}

export default App;
