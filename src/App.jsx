import { useState, useEffect } from "react";

import Header from "./components/header";
import Intro from "./pages/intro";
import About from "./pages/about";
import WebClone from "./pages/web_clone";
import Project from "./pages/project";
import Toy from "./pages/toy";
import Contact from "./pages/contact";

function App() {

  const [scroll, setScroll] = useState(false);

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    console.log("window.scrollY : ", window.scrollY)
  };

  return (
    <div onScroll={handleScroll}>
    <>
    <Header/>
    <Intro/>
    <About/>
    <Project/>
    <Toy/>
    <WebClone/>
    <Contact/>
    </>
    </div>
  )
}

export default App
