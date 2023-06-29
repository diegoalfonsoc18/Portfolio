import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/projects";
import ArticleMain from "./components/body/body";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <Navbar />
      <ArticleMain />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
