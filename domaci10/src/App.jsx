import CakeFunc from "./components/CakeFunc";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import CommentsFunc from "./components/CommentsFunc";
import TodosFunc from "./components/TodosFunc";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/cakes" element={<CakeFunc />} />
        <Route path="/comments" element={<CommentsFunc />} />
        <Route path="/todos" element={<TodosFunc />} />
      </Routes>
    </>
  );
}

export default App;
