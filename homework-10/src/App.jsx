//! Redux
//? alatka za menadziranje na state
//* najcesto se koristi vo React
//! voobicaeno se koristi za pogolemi aplikacii, koga imame nekolku komponenti dovolen e i lokalen state
//? Redux go pravi statot predvidliv, bidejki ima predvidliva sintaksa

// import Hello from "./components/Hello";

//! Za domasna:
//? Da se dodade vo kodot od casot nova componenta so novi reducer i actions fajlovi so minimum 2 akcii

import { HelloFunc } from "./components/HelloFunc";
import { Calculator } from "./components/Calculator";

export const App = () => {
  return (
    <div id="app">
      <h2>App</h2>
      <HelloFunc />
      <Calculator />
    </div>
  );
};
