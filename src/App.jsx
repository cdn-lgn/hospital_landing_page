import React from "react";
import Header from "./components/Header";
import ReactLenis from "lenis/react";
import Home from "./pages/Home";

const App = () => {
  return (
    <ReactLenis root>
        <Header />
        <Home />
    </ReactLenis>
  );
};

export default App;
