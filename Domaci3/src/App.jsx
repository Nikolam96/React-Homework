import React from "react";
import { movies } from "./componets/Movies";
import { Movie } from "./componets/Movie";

function App() {
  return <Movie movie={movies} />;
}

export default App;
