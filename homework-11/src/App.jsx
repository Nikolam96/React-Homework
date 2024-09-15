//! Za domasna:
//? Da se zamenat buttons za buy cake so input field kade ke se vnese brojka i ke se odzeme toj broj na torti od vkupniot (vnimavajte na validacii i vnes vo input).
//* Na isti princip da se reshi i restock na cakes so input koj ke dodava na tekovniot broj na torti.
//? Komentarot koj bese ostaven vo zadacata za resavanje na broj na torti so message namesto disabled buttons.
//* Dopolnitelno da se napravi uste eden redux cycle za get na nekoi od podatocite od https://json.placeholder.typicode.com.

import { Routes, Route } from "react-router-dom";
import { Cake } from "./components/Cake";
import { Comments } from "./components/Comments";
import { Posts } from "./components/Posts";
import { Nav } from "./components/Nav";

export const App = () => {
  return (
    <div>
      <h2>App</h2>
      <Nav />
      <Routes>
        <Route path="/cake" element={<Cake />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};
