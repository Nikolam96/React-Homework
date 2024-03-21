import React from "react";
import { Test } from "./compmonets/FirstCompoment";
import { Header } from "./compmonets/SecondCompoment";
import { Footer } from "./compmonets/ThirdCompoment";

export function App() {
  return (
    <div id="app">
      <Test />
      <Header />
      <Footer />
    </div>
  );
}
