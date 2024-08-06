import "../css/pageStyle.css";
import { useEffect, useRef } from "react";

import Circle from "../components/circle";

export default function Intro() {
  const nameRef = useRef();
  const html = document.querySelector("html");
  html.style.overflow = 'hidden'

  useEffect(() => {
    setTimeout(() => {
      nameRef.current.style.opacity = "0";
    }, 2300);
  }, []);

  useEffect(() => {
    setTimeout(() => html.style.overflow = 'visible', 3000);
  }, []);

  return (
    <section className="sec1">
      <div className="basic_section">
        <div ref={nameRef} className="h2_wrap">
          <h2 data-aos="fade-up" data-aos-easing="ease-in-out">
            <span>D</span>elight
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
          >
            <span>A</span>wesome
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-easing="ease-in-out"
          >
            <span>N</span>avigate
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-easing="ease-in-out"
          >
            <span>B</span>enevolence
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="1600"
            data-aos-easing="ease-in-out"
          >
            <span>I</span>deaful
          </h2>
        </div>
        <Circle />
        <div className="name_wrap flex">
          <h3
            className="last_name"
            data-aos="zoom-in"
            data-aos-delay="2700"
            data-aos-easing="ease-in-out"
          >
            D
          </h3>
          <h3
            className="last_name"
            data-aos="zoom-in"
            data-aos-delay="2800"
            data-aos-easing="ease-in-out"
          >
            A
          </h3>
          <h3
            className="last_name"
            data-aos="zoom-in"
            data-aos-delay="2900"
            data-aos-easing="ease-in-out"
          >
            N
          </h3>
          <h3
            className="last_name"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-easing="ease-in-out"
          >
            B
          </h3>
          <h3
            className="last_name"
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-easing="ease-in-out"
          >
            I
          </h3>
        </div>
        <h4
          data-aos="fade-up"
          data-aos-delay="3000"
          data-aos-easing="ease-in-out"
        >
          Front-end Developer & Web-Publisher Portfolio
        </h4>
      </div>
    </section>
  );
}
