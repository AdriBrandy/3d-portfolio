import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { proyectText, projectsinfo } from "../constants";
import TitleHeader from "../components/TitleHeader";
import Button2 from "../components/models/Button2"; 

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = ({ language = "es" }) => {
  const sectionRef = useRef(null);
  const cardsRefs = useRef([]); 
  const proyectos = projectsinfo;
  const idioma = language === "en" ? "en" : "es";

  // Animaciones GSAP
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardsRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase scroll-mt-32 ">
      <div className="w-full">
        <TitleHeader
          sub={proyectText[idioma].subtitle}
          title={proyectText[idioma].title}
        />
        <div className="showcaselayout mt-5  ">
          {proyectos.map((pro, i) => (
            <div
              key={pro.id}
              className="project-list-wrapper overflow-hidden"
              ref={(el) => (cardsRefs.current[i] = el)}
            >
              <div className="hover:bg-violet-200 image-wrapper bg-[#FFEFDB] max-h-50   overflow-hidden ">
                <img
                  src={pro.imgPath}
                  alt={pro.title[language]}
                  className="w-full h-full object-contain "
                />
              </div>
              <div className="text-content">
                <h2>{pro.title[language]}</h2>
                <p className="text-white-50 md:text-l">
                  {pro.description[language]}
                </p>
                <div className="m-2 flex flex-wrap gap-4">
                  <Button2 text="Demo" url={pro.demo} />
                  <Button2 text="Repo" url={pro.repo} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
