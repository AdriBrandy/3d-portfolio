const navLinks = {
  en: [
    { name: "About me", link: "#aboutme" },
    { name: "Skills", link: "#skills" },
    { name: "Work", link: "#work" },
    // { name: "Experience", link: "#experience" },
    
  ],
  es: [
    { name: "Sobre Mi", link: "#aboutme" },
    { name: "Habilidades", link: "#skills" },
    { name: "Proyectos", link: "#work" },
    // { name: "Experiencia", link: "#experience" },
    
  ],
};

const words = {
  en: [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Dreams", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Dreams", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ],
  es: [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Sueños", imgPath: "/images/concepts.svg" },
    { text: "Diseños", imgPath: "/images/designs.svg" },
    { text: "Código", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Sueños", imgPath: "/images/concepts.svg" },
    { text: "Diseños", imgPath: "/images/designs.svg" },
    { text: "Código", imgPath: "/images/code.svg" },
  ]
};


const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/html.jpeg",
    height: "50%",
  },
  {
    imgPath: "/images/logos/css.png",
    height: "40%",
    
  },
  {
    imgPath: "/images/logos/javascript.png",
    height: "70%",
    
  },
  {
    imgPath: "/images/logos/react.png",
    height: "45%",
    
  },
  {
    imgPath: "/images/logos/reactbootstrap.png",
    height: "45%",
    
  },
  {
    imgPath: "/images/logos/node.png",
    height: "90%",
    
  },
  {
    imgPath: "/images/logos/mysql.png",
    height: "90%",
    
  },
  {
    imgPath: "/images/logos/mongodb.png",
    height: "90%",
    
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    height: "90%",
    
  },
];

const abilities = {
  en: [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ],
  es: [
    {
      imgPath: "/images/seo.png",
      title: "Enfoque en la Calidad",
      desc: "Entregando resultados de alta calidad con atención a cada detalle.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Comunicación Confiable",
      desc: "Mantenete al tanto en cada paso para asegurar transparencia y claridad.",
    },
    {
      imgPath: "/images/time.png",
      title: "Entrega Puntual",
      desc: "Asegurando que los proyectos se completen a tiempo, con calidad y detalle.",
    },
  ],
};

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const aboutmeText = {
  en: {
    title: "About me",
    subtitle: "🎶🧉Mate, music, and a thousand lines of code (or bugs, depending on the day).🎶🧉",
    description: ["Hey there! I'm Adriana Brandan, 35 years old, from Buenos Aires, Argentina. I'm currently studying Programming at UTN Avellaneda, and since I discovered coding, I’ve been diving into every course I can find to explore the vast world of tech.","I’ve completed Full Stack Python (Codo a Codo) and Full Stack React/Node.js (Academia Numen), and right now I’m vibing with front-end development — there's something magical about turning ideas into interactive interfaces.","I’ve also dabbled in data analysis with Python (Pandas, Seaborn, NumPy), and built desktop apps using Tkinter and CustomTkinter. While I don’t have professional IT experience yet, I’m super excited to start my journey and grow by learning from mentors, teammates, and real projects.","I believe in staying curious, working with passion, and keeping things real — always with some good music in the background."]
    
  },
  es: {
    title: "Sobre mí",
    subtitle: "🎶🧉Mate, música y mil líneas de código (o bugs, depende el día).🎶🧉",
    description: ["¡Hola! Soy Adriana Brandan, tengo 35 años y soy de Buenos Aires. Estudio Tecnicatura en Programación en la UTN de Avellaneda y, desde que arranqué en este mundo, no paré de explorar.","Hice cursos como Full Stack Python (Codo a Codo) y Full Stack con React y Node.js (Academia Numen), y siempre que puedo me meto en algún nuevo curso para seguir descubriendo qué camino quiero tomar. Hoy por hoy, el front-end me viene llamando fuerte: me gusta ver cómo el código cobra vida en pantalla.","También experimenté con análisis de datos en Python (Pandas, Seaborn, NumPy) y apps de escritorio con Tkinter y CustomTkinter. Aunque todavía no tengo experiencia en el mundo IT, tengo muchas ganas de arrancar, meter manos en proyectos reales y seguir aprendiendo de colegas, mentores y la comunidad.","Soy de las que creen que con actitud, constancia y buena onda se puede llegar lejos… y si es con buena música de fondo, ¡mejor!"]
    
  },
};


const skillsText = {
  en: {
    title: "My Skills",
    subtitle: "🎸 Evolving with attitude. 🚀",
    
  },
  es: {
    title: "Mis Habilidades",
    subtitle: "🎸 Evolucionando con actitud. 🚀",
    
  },
};


const proyectText = {
  en: {
    title: "My Projects",
    subtitle: "💼💡 Design, logic, and a little bit of magic. ✨",
    
  },
  es: {
    title: "Mis Proyectos",
    subtitle: "💼💡 Diseño, lógica y un poco de magia. ✨",
    
  },
};

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "images/github.png",
    url:"https://github.com/AdriBrandy"
  },
  {
    name: "mail",
    imgPath: "/images/mail.png",
    url: "mailto:adriana_brandan22@outlook.com"
  },
  {
    name: "what",
    imgPath: "/images/whatsapp.png",
    url: "https://wa.me/5491164258475?text=Hola%20Brandy%2C%20vi%20tu%20portfolio%20y%20me%20encant%C3%B3.%20%C2%BFPodemos%20hablar%3F"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/adriana-brandan/"
  },
];
const translations = {
  en: {
    terms: "Terms & Conditions",
    copyright: "All rights reserved.",
  },
  es: {
    terms: "Términos y Condiciones",
    copyright: "Todos los derechos reservados.",
  },
};

const projectsinfo = [
  {
    id: 1,
    imgPath: "/images/calculadora-portada.png",
    title: {
      es: "Calculadora hecha con Custom Tkinter",
      en: "Calculator built with Custom Tkinter",
    },
    description: {
      es: "App de escritorio que permite realizar operaciones bàsicas, realizada con la librerìa de Python.",
      en: "Desktop app that allows basic operations, built with Python's library.",
    },
    repo: "https://github.com/AdriBrandy/Calculadora",
    demo: "https://youtube.com/shorts/Ld3l0-aFr9A?feature=share",
    className:"w-full h-full object-cover"
  },
  {
    id: 2,
    imgPath: "/images/inventario-portada.png",
    title: {
      es: "Inventario hecho con Tkinter",
      en: "Inventory built with Tkinter.",
    },
    description: {
      es: "App de escritorio, CRUD conectado a una Base de Datos en MySQL",
      en: "Desktop app with CRUD functionality connected to a MySQL database.",
    },
    repo: "https://github.com/AdriBrandy/TP-Inventario",
    demo: "https://youtu.be/QETirvhsqfs",
    className:"w-full h-full object-cover",
   
  },
  // {
  //   id: 3,
  //   imgPath: "/images/inventario-portada.png",
  //   title: {
  //     es: "Inventario hecho con Tkinter",
  //     en: "Inventory built with Tkinter.",
  //   },
  //   description: {
  //     es: "App de escritorio, CRUD conectado a una Base de Datos en MySQL",
  //     en: "Desktop app with CRUD functionality connected to a MySQL database.",
  //   },
  //   repo: "https://github.com/AdriBrandy/TP-Inventario",
  //   demo: "https://youtu.be/QETirvhsqfs",
  //   className:"w-full h-full object-cover",
  // },
  // {
  //   id: 4,
  //   imgPath: "/images/inventario-portada.png",
  //   title: {
  //     es: "Inventario hecho con Tkinter",
  //     en: "Inventory built with Tkinter.",
  //   },
  //   description: {
  //     es: "App de escritorio, CRUD conectado a una Base de Datos en MySQL",
  //     en: "Desktop app with CRUD functionality connected to a MySQL database.",
  //   },
  //   repo: "https://github.com/AdriBrandy/TP-Inventario",
  //   demo: "https://youtu.be/QETirvhsqfs",
  //   className:"w-full h-full object-cover",
  // },
  // Agregás más proyectos igual
];




export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  aboutmeText,
  skillsText,
  proyectText,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  translations,
  projectsinfo,
};
