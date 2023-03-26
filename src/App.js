import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Body from "./components/body";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
function App() {
  const [initialCount, setCount] = useState(5);
  console.log(initialCount);
  return (
    <div>
      <Navbar />
      <DropdownMenu />
      <Body></Body>
      <Main init={initialCount} setInitCount={setCount} />
    </div>
  );
}

export default App;
