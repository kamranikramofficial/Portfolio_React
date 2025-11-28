import {
  // Roles & sections
  mobile,
  backend,
  web,
  fullstack,

  // Core languages
  html,
  css,
  javascript,
  java,

  // Frontend libraries & frameworks
  reactjs,
  tailwind,
  materialui,
  bootstrap,
  shadcn,

  // Backend & databases
  nodejs,
  express,
  mongodb,
  mongoose,

  // Cloud / platforms
  firebase,
    supabase,

  // Tools
  git,
  github,

 //education icons
 college,
 saylani,
 alberuni,
freecodecamp,
linkedin,  
  // Experience / projects / others

  login,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Intermediate in Computer Science (ICS)",
    company_name: "Govt. Boys College Sachal Goth, Ghazi Goth, Karachi",
    icon: college, // replace with your actual college icon import
    iconBg: "#fff",
    date: "Aug 2025 - Aug 2027",
    points: [
      "Currently pursuing Intermediate in Computer Science (ICS).",
      "Focused on core IT and programming fundamentals to build a strong foundation in technology.",
    ],
  },
  {
    title: "Modern Web and App Development (MERN Stack)",
    company_name: "Saylani Mass IT Training Program",
    icon: saylani, // replace with your actual saylani icon import
    iconBg: "#fff",
    date: "Oct 2024 - Feb 2026",
    points: [
      "Learning modern full-stack web development including HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and Mongoose.",
      "Developing real-world projects using React for frontend and Node/Express for backend.",
      "Grade: A",
    ],
  },
  {
    title: "Secondary School Certificate (SSC) - Computer Science",
    company_name: "Al-Beruni Model Secondary School",
    icon: alberuni, // replace with your actual school icon import
    iconBg: "#fff",
    date: "Aug 2023 - Apr 2025",
    points: [
      "Completed secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
      "Participated in Science Exhibitions and tech-related school events.",
      "Developed an early interest in programming and self-learned front-end web development using online resources.",
      "Built and deployed several projects using HTML, CSS, JavaScript, and GitHub.",
    ],
  },
];


const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name:"Shadcn UI",
    icon: shadcn,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
    {
    name: "JavaScript",
    icon: javascript,
  },
  {
   name:"Java",
   icon: java,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
    {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];


const experiences = [
  {
    title: "MERN Stack Developer (Trainee)",
    company_name: "Saylani Mass IT Training Program",
    icon: saylani, // replace with your Saylani logo import
    iconBg: "#fff",
    date: "Oct 2024 - Feb 2026",
    points: [
      "Currently enrolled in the Saylani Mass IT Training Program for Modern Web and App Development.",
      "Learning full-stack technologies: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and Mongoose.",
      "Building and deploying responsive web apps using modern UI/UX and API integration.",
      "Developing backend logic with Node and Express, and managing databases with MongoDB.",
    ],
  },
];

const extracurricular = [
    {
    title: "Participant - Saylani Hackathon 2025",
    type: "Hackathon",
    icon: saylani, 
    iconBg: "#fff",
    date: "May 2025",
    points: [
      "Participated in Saylani AI Hackathon 2025: Embracing the Future.",
      "A 12-hour overnight coding challenge focused on and real-time problem solving.",
      "Collaborated with fellow developers to create innovative tech-driven solutions.",
      "Event held at Zaitoon Ashraf IT Park, Shahrah-e-Faisal, Karachi.",
    ],
        credential: "https://drive.google.com/file/d/1fHKioG-mRVqBchKNM8jCLxY2poEG83lU/view",
  },
  {
    title: "Volunteer - Saylani Mass IT Training Program",
    type: "Volunteering",
    icon: saylani, // replace with your Saylani logo import
    iconBg: "#fff",
    date: "Sep 2025 ",
    points: [
      "Proud volunteer under the Education Department of Saylani Welfare International Trust.",
      "Actively contributing to Pakistan’s grand IT revolution by supporting Saylani’s IT training initiatives.",
      "Awarded volunteer certificate for dedication and contribution to the Saylani Mass Training Programme.",
    ],
    credential: "https://drive.google.com/file/d/1yD3lbu9ddIMHfU7cipWB72kLwQdAIwJI/view?usp=drive_link",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    type: "Certification",
    icon: freecodecamp, 
    date: "Mar 2025",
    points: ["Credential ID: kamranikram-jaads"],
    credential: "https://www.freecodecamp.org/certification/kamranikram/javascript-algorithms-and-data-structures",
  },
  {
    title: "Responsive Web Design",
    type: "Certification",
    icon: freecodecamp, 
    iconBg: "#0A0A23",
    date: "Mar 2025",
    points: ["Credential ID: kamranikram-rwd"],
    credential: "https://www.freecodecamp.org/certification/kamranikram/responsive-web-design",
  },
  {
    title: "5,424+ Followers on LinkedIn",
    type: "Achievements",
    icon: linkedin,
    iconBg: "#007BB5",
    date: "Oct 2025",
    points: ["Profile: kamranikramofficial"],
    credential: "https://www.linkedin.com/in/kamranikramofficial/",
  },];

const projects = [
  {
    name: "Dynamic Recipe Website",
    description:
      "A fully responsive recipe website that allows users to explore various recipes dynamically. Features include user authentication, interactive recipe filtering, and a modern UI for a seamless browsing experience.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "bootstrap", color: "blue-text-gradient" },
    ],
    image: login, // replace with your imported image variable
    source_code_link: "https://github.com/kamranikramofficial/Food",
    live_project_link: "https://kamranikramofficial.github.io/Food/",
  },
  {
    name: "Al-Beruni Science Exhibition Website",
    description:
      "A static yet visually engaging website built to showcase a science exhibition project. Designed with a modern UI, smooth navigation, and responsive layout, ensuring accessibility across all devices.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "bootstrap", color: "blue-text-gradient" },
    ],
    image: project2, // replace with your imported image variable
    source_code_link: "https://github.com/kamranikramofficial/Al-Beruni",
    live_project_link: "https://al-beruni.vercel.app/",
  },
  {
    name: "Saylani First Module Class Project",
    description:
      "A foundational project developed during the Saylani First Module class, covering essential web development concepts. Demonstrates structured coding, responsive design, and interactive features.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: project3, // replace with your imported image variable
    source_code_link:
      "https://github.com/kamranikramofficial/Saylani-First-Module-class",
    live_project_link:
      "https://saylani-first-module-class.vercel.app/",
  },
  {
    name: "Student Information System",
    description:
      "A beginner-level project developed during the Saylani First Module class to help students practice front-end concepts using HTML, CSS, and JavaScript through hands-on implementation.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: project4, // replace with your imported image variable
    source_code_link: "https://github.com/kamranikramofficial/student-info",
    live_project_link: "https://student-info-lake.vercel.app/",
  },
  {
    name: "CSS-Toolkit",
    description:
      "A web-based tool for generating custom CSS styles and HTML snippets quickly. Includes live previews and exportable code, ideal for developers and designers to streamline styling work.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: project5, // replace with your imported image variable
    source_code_link: "https://github.com/kamranikramofficial/css-tools",
    live_project_link: "https://css-tools-bay.vercel.app/",
  },
  {
    name: "Saylani Second Module JavaScript Assignment",
    description:
      "This repository contains my JavaScript assignment from SMIT's second module. It includes various coding exercises and practical implementations of key JavaScript concepts to strengthen my understanding through hands-on practice.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "es6", color: "blue-text-gradient" },
    ],
    image: project6, // replace with your image import
    source_code_link:
      "https://github.com/kamranikramofficial/Saylani-Second-Module-class",
    live_project_link:
      "https://kamranikramofficial.github.io/Saylani-Second-Module-class/",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
