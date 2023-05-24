import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReduxCounter from "./components/reduxCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <button role="button" name="raph">
        Radioactive
      </button>
      <h3 className="head" data-testId="text">
        I am Radioactive
      </h3>

      <ReduxCounter />
    </>
  );
}

export default App;
