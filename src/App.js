import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/projects";
import ArticleMain from "./components/body/body";

function App() {
  return (
    <div>
      <Navbar />
      <ArticleMain />
      <Projects />
    </div>
  );
}

export default App;
