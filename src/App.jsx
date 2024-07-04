import { useState, useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import Header from "./components/header";
import Intro from "./pages/intro";
import About from "./pages/about";
import WebClone from "./pages/web_clone";
import Project from "./pages/project";
import Toy from "./pages/toy";
import Contact from "./pages/contact";
import IntroMob from "./pages/intro_mob";

function App() {

  const [mob, setMob] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({once: false,
      disable: function () {
          var mobile = 768;
          return window.innerWidth < mobile;
        } // 768 이하일 때 disable
  });
  },[])

  useEffect(() => {

    const handleResize = () => {
      setMob(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []); //인트로 분리


  return (
    <>
      {mob ? <IntroMob /> : <Intro />}
      <Header />
      <About/>
      <Project/>
      <Toy/>
      <WebClone/>
      <Contact/>
    </>
  )

};

export default App
