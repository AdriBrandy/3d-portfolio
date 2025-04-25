import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { words as wordsByLanguage } from "../constants";

const Hero = ({ language = "es" }) => {
  const words = wordsByLanguage[language];
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  // const descriptionText = {
  //   en: "Hi, I’m Adriana Brandan or just Brandy, a Front-end developer",
  //   es: "Hola, soy Adriana Brandan o simplemente Brandy, una desarrolladora Front-end ",
  // };
  // const descriptionText2 = {
  //   en: "based in Buenos Aires-Argentina  with a passion for code.",
  //   es: "con base en Buenos Aires-Argentina y pasión por el código.",
  // };

  const buttonText = {
    en: "See My Work",
    es: "Ver Mis Proyectos",
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 ">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout ">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>{language === "es" ? "Transformando " : "Shaping"}</h1>
            </div>
            <div className="hero-text">
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="icon"
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </div>
            <div className="hero-text">
              <h1>
                {language === "es"
                  ? "en Proyectos Reales"
                  : "into Real Projects"}
              </h1>
            </div>
            <div className="hidden md:flex flex-wrap gap-4">
              <Button
                text={language === "es" ? "Sobre Mí" : "About Me"}
                className="md:w-80 md:h-16 w-60 h-12"
                id="aboutme"
              />
              <Button
                text={buttonText[language]}
                className="md:w-80 md:h-16 w-60 h-12"
                id="work"
              />
            </div>
            
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
