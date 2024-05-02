import "./scss/main.scss";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Training from "./pages/Training";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div>
        <Home />
        <Projects />
        <Skills />
        <Training />
        <Contact />
      </div>
    </>
  );
}

export default App;
