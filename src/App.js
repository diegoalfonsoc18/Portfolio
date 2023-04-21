import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Body from "./components/body";
import Proyects from "./components/proyects";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Proyects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
