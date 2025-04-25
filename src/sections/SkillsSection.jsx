import { logoIconsList, skillsText, abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} width={icon.height} />
    </div>
  );
};

const SkillsSection = ({ language = "es" }) => {
  const selectedAbilities = abilities[language] || abilities.en;

  return (
    <div id="skills" className="md:my-20 my-10 relative scroll-mt-32">
      {/* Bordes con gradiente */}
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      {/* Título */}
      <TitleHeader
        sub={skillsText[language].subtitle}
        title={skillsText[language].title}
      />

      {/* Logos */}
      <div className="marquee h-20 mt-10">
        <div className="marquee-box md:gap-5 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`logo1-${index}`} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`logo2-${index}`} icon={icon} />
          ))}
        </div>
      </div>

      {/* Tarjetas de habilidades */}
      <div className="w-full padding-x-lg mt-16">
        <div className="mx-auto grid-3-cols">
          {selectedAbilities.map(({ imgPath, title, desc }) => (
            <div
              key={title}
              className="card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt={title} />
              </div>
              <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
              <p className="text-white-50 text-lg">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
