import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Hero from "./component/Hero";
import Projects from "./component/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navBar">
        <div className="navButtons">
          <div className="navItem">
            <a href="#aboutStart">About</a>
          </div>
          <div className="navItem">
            <a href="#projectStart">Projects</a>
          </div>
          <div className="navItem">
            <a href="mailto:moises.fuentes904@gmail.com">Email Me</a>
          </div>
        </div>
      </div>
      <div className="pageContainer">
        <div className="heroContainer">
          <Hero />
        </div>
        <div className="rightContainer">
          <div className="buffTop"></div>
          <div className="scrollerContainer">
            <About />
            <Projects />
          </div>
          <div className="buffBot"></div>
        </div>
      </div>
    </>
  );
}

export default App;
