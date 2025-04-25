import React from "react";
import TitleHeader from "../components/TitleHeader";
import { aboutmeText } from "../constants";
import Cardme from "../components/Cardme";

const AboutMe = ({ language = "es" }) => {
  return (
    <section id="aboutme" className="px-4 py-12 sm:px-6 lg:px-8 scroll-mt-32">
      {/* Título y subtítulo centrados */}
      <div className="text-center mb-5">
        <TitleHeader
          sub={aboutmeText[language].subtitle}
          title={aboutmeText[language].title}
        />
      </div>

      {/* Contenedor principal responsive */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-center md:gap-x-2 px-2 sm:px-4">
        
        {/* Cardme centrado en mobile */}
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <Cardme />
        </div>

        {/* Párrafos responsivos */}
        <div className="w-full mt-5 md:w-2/3 space-y-4 text-base text-white text-justify  ">
          {aboutmeText[language].description.map((paragraph, index) => (
            <p key={index} className="break-words">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



