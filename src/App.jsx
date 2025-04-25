import { useState } from "react";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar"
import SkillsSection from "./sections/SkillsSection"; // ruta correcta
import AboutMe from "./sections/AboutMe";

const App = () => {
  const [language, setLanguage] = useState("es");

  return (
    <>
      <NavBar setLanguage={setLanguage} language={language} />
      <Hero language={language} />
      <AboutMe language={language}/>
      <SkillsSection language={language} />
      <ShowcaseSection language={language}/>
      {/* <Experience /> */}
      {/* <Testimonials /> */}
      <Contact language={language} />
      <Footer language={language} />

    </>
  );
};

export default App;
