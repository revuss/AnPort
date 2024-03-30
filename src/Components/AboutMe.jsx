import React, { useRef } from "react";
import "./AboutmeFiles/ame.css";
import FirstPage from "./AboutmeFiles/FirstPage";
import SecondPage from "./AboutmeFiles/SecondPage";
import ThirdPage from "./AboutmeFiles/ThirdPage";
import FourPage from "./AboutmeFiles/FourPage";
import Skills from "./Skills";

const AboutMe = () => {
  const aboutRef = useRef(null);
  return (
    <section ref={aboutRef} id="about-section" className="h-auto About-Me">
      <div className="container ">
        <div className="vertical_content">
          <div className="col col_left ">
            <h2 className="vertical_heading mx-10 mt-10">
              <span className="mt-56 text-3xl lg:text xl:text-6xl">
                <p className="text-white">ABOUT ME</p>
              </span>
            </h2>
          </div>
          <div className="col col_right">
            <FirstPage className="snap-always snap-start" />
            <SecondPage className="snap-always snap-start" />
            <ThirdPage className="snap-always snap-start" />
            <FourPage className="snap-always snap-start" />
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default AboutMe;
