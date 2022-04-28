import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import logo from "./public/logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
