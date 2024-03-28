import { Input } from "./component/Input";
import { Test } from "./component/Testiramo";
import { createContext, useContext } from "react";

export const Value = createContext();

export function App() {
  let value = {
    ime: "nikola",
    prezime: "Mitic",
  };
  return (
    <div>
      {/* <Input /> */}
      <Value.Provider value={value}>
        <Test {...value} />
      </Value.Provider>
    </div>
  );
}

export default App;
