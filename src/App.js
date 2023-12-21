import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/projects";
import ArticleMain from "./components/body/body";
import Skills from "./components/skills";
import Connect from "./components/Connect/index.js";

function App() {
  return (
    <div>
      <Navbar />
      <ArticleMain />
      <Projects />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;
