import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Body from "./components/body";
function App() {
  const [initialCount, setCount] = useState(5);
  console.log(initialCount);
  return (
    <div>
      <Navbar />
      <Body></Body>
      <Main init={initialCount} setInitCount={setCount} />
    </div>
  );
}

export default App;
