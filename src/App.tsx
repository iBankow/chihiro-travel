import { useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import logo from "./public/logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
