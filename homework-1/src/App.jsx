//! Domasna
//? da kreirame react proekt i sami da kreirame 3-4 komponenti so bilo kakvi html tagovi

//* nema potreba da go importirame React bidejki samiot vite znae deka se raboti za react proekt

import { Bands } from './components/Bands';
import { Books } from './components/Books';
import { Cities } from './components/Cities';
import { Movies } from './components/Movies';
const App = () => {
  return(
    <div>
      <h2>Learning about components</h2>
      <hr />
      <br />
      <Bands/>
      <Books/>
      <Cities/>
      <Movies/>
    </div>
  )
};

export default App;