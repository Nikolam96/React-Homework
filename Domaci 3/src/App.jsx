import React from "react";
import { movies } from "./assets/Movies";
import { Movie } from "./componets/Movie";

function App() {
  return <Movie movie={movies} />;
}

export default App;
