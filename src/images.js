// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from './assets/tech_logo/render.png';


import rkgitmlogo from './assets/education_logo/RKGITM_logo.png';
import spssslogo from './assets/education_logo/SPSSS_logo.png';
import gbssslogo from './assets/education_logo/GBSSS_logo.png';


import expensetrackerlogo from './assets/work_logo/expense_tracker.jpg'
import planrlogo from './assets/work_logo/todo_list.png';
import passoplogo from './assets/work_logo/password_manager.png';
import xlogo from './assets/work_logo/xclone.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Render', logo: renderLogo },
    ],
  },
];
  
 export const education = [
  {
    id: 0,
    img: rkgitmlogo,
    school: "Raj Kumar Goel Institute of Technology and Management, Ghaziabad, Uttar Pradesh",
    date: "Sept 2024 - Present",
    grade: "8.11 CGPA",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    desc: "Currently pursuing a Bachelor of Technology in Computer Science and Engineering. My coursework focuses on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, and Web Development. Alongside academics, I actively build full-stack web applications, solve DSA problems, and continuously strengthen my software development skills through personal projects and hands-on learning."
  },

  {
    id: 1,
    img: gbssslogo,
    school: "Government Boys Senior Secondary School, Shahdara, Delhi",
    date: "Apr 2021 - Mar 2023",
    grade: "80.17%",
    degree: "CBSE (Class XII) - PCM with Computer Science",
    desc: "Completed Higher Secondary Education under the CBSE curriculum with Physics, Chemistry, Mathematics, and Computer Science. This academic foundation strengthened my analytical thinking, mathematical skills, and problem-solving abilities while introducing me to programming concepts and computational logic."
  },

  {
    id: 2,
    img: spssslogo,
    school: "Shashi Public Senior Secondary School, Shahdara, Delhi",
    date: "Apr 2020 - Mar 2021",
    grade: "85.67%",
    degree: "CBSE (Class X)",
    desc: "Completed Secondary Education under the CBSE curriculum with a strong academic foundation in Science, Mathematics, English, and Information Technology. This stage developed my curiosity for technology and laid the groundwork for pursuing Computer Science."
  }
];
  
  export const projects = [
  {
    id: 0,
    title: "BudgetNest - Expense Tracker",
    description:
      "A full-stack expense tracking application that helps users manage income and expenses with real-time balance calculations. Features secure CRUD operations, category-based transaction management, REST APIs, MongoDB integration, and a fully responsive interface.",
    image: expensetrackerlogo,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API",
      "Tailwind CSS",
      "Mongoose"
    ],
    github: "https://github.com/Nikunj0Verma/Expense-Tracker",
    // webpage: ""
  },

  {
    id: 1,
    title: "Planr - Task Manager",
    description:
      "A modern task management application with complete CRUD functionality, LocalStorage persistence, task completion tracking, and a clean responsive interface designed to improve daily productivity.",
    image: planrlogo,
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "LocalStorage"
    ],
    github: "https://github.com/Nikunj0Verma/to-do-list-app",
    // webpage: ""
  },

  {
    id: 2,
    title: "PassOp - Password Manager",
    description:
      "A secure password management web application for storing and organizing website credentials. Includes CRUD operations, MongoDB storage, clipboard copy support, validation, and a responsive user interface.",
    image: passoplogo,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "Mongoose"
    ],
    github: "https://github.com/Nikunj0Verma/Password_manager",
    // webpage: ""
  },

  {
    id: 3,
    title: "BitLinks - URL Shortener",
    description:
      "A full-stack URL shortening platform built with Next.js and MongoDB that generates custom short links with validation, instant redirection, and REST API integration in a responsive interface.",
    // image: linklogo,
    tags: [
      "Next.js",
      "React",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "REST API"
    ],
    github: "https://github.com/Nikunj0Verma/URL-Shortener",
    // webpage: ""
  },

  {
    id: 4,
    title: "LinkTree Clone",
    description:
      "A responsive LinkTree clone that allows users to organize and share multiple social media and personal links from a single customizable profile page with a modern and clean interface.",
    // image: treelogo,
    tags: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "REST API"
    ],
    github: "https://github.com/Nikunj0Verma/LinkTree-Clone",
    // webpage: ""
  },

  {
    id: 5,
    title: "X (Twitter) Clone",
    description:
      "A responsive front-end clone of X (formerly Twitter) featuring a pixel-perfect layout, reusable React components, responsive design, and a modern UI built with Tailwind CSS.",
    image: xlogo,
    tags: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    github: "https://github.com/Nikunj0Verma/X-Clone",
    // webpage: ""
  }
];