import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  threejs,
  java,
  mern,
  mysql,
  smartretail,
  budgetbloom,
  festbook,
  healthcare
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "certifications",
    title: "Certifications",
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Design Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Spring Boot",
    icon: git,
  },
  {
    name: "Angular Js",
    icon: figma,
  },
  {
    name: "PHP",
    icon: docker,
  },
  {
    name: "Bootstrap",
    icon: redux,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Sekel Tech",
    icon: reactjs,
    iconBg: "#61DAFB",
    date: "June 2025 - Present",
    points: [
      "Enhancing UI/UX designs with advanced Framer Motion animations and introducing 3D interactive elements for a modern, engaging user experience.",
      "Developing full-stack applications using React.js, Node.js, and modern backend technologies for scalable solutions.",
      "Optimizing animation performance and improving smooth transitions across both mobile and desktop platforms.",
      "Elevating the responsiveness and scalability of applications to ensure seamless experiences across all devices.",
      "Collaborating with cross-functional teams to build innovative, fast, and responsive digital solutions."
    ],
  },
  {
    title: "Web Developer & Backend Developer",
    company_name: "Cognifyz Technologies",
    icon: mysql,
    iconBg: "#383E56",
    date: "June 2023 - April 2024",
    points: [
      "Technologies: HTML, CSS, JavaScript, PHP",
      "Built and maintained dynamic websites utilizing HTML, CSS, and JavaScript frameworks, ensuring intuitive user interfaces through collaboration with UI/UX designers.",
      "Developed and maintained web applications with PHP and XAMPP, implementing RESTful APIs for seamless front-end integration.",
      "Ensured website responsiveness and optimized performance across various devices, while focusing on application performance, security, and scalability.",
      "Conducted unit tests and debugging to uphold high-quality standards; participated in code reviews and provided constructive feedback to enhance code quality and efficiency."
    ],
  }
];

const projects = [
  {
    name: "Restaurant management system",
    description:
      "The Management System for a Restaurant is a web-based application. The main aim is to provide better communication between clients and restaurant owners. By using this application, the user can reserve the table for their dine. ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    "source_code_link": "https://github.com/Hariprasath2030/Restaurant-management-system",
    "live_demo_link": "https://restaurant-management-system-vjyw.vercel.app/"
   
  },
  {
    name: "GRADE CRAFT",
    description:
      "GradeCraft addresses the critical need for enhanced incident analysis and proactive safety management in educational institutions. As the aviation industry strives to maintain optimal safety amidst increasing complexities, GradeCraft offers a platform tailored for educators and administrative staff.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "SQL",
        color: "White-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Hariprasath2030/Student-performance-system",
  },
  {
    name: "Smart Retail Hub",
    description:
      "Smart Retail Hub is an integrated system designed to optimize inventory management through automation and real-time monitoring. It streamlines retail operations by combining automated checkout, sales tracking, and customer engagement.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "Mongodb",
        color: "White-text-gradient",
      },
    ],
    "image": smartretail,
    "source_code_link": "https://github.com/Hariprasath2030/Retail-Hub-client",
    "live_demo_link": "https://retail-hub-client.vercel.app/"
  },
  {
    name: "Budget Bloom",
    description:
      "Budget-Bloom is a full-stack app that helps users manage finances by tracking income, expenses, and analyzing spending with visual charts. It offers authentication, filters, and detailed financial insights.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Drizzle Orm",
        color: "pink-text-gradient",
      },
      {
        name: "Expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "Neon",
        color: "White-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
    ],
    "image": budgetbloom,
    "source_code_link": "https://github.com/Hariprasath2030/Budget-Bloom",
    "live_demo_link": "https://budget-bloom.vercel.app/"
  },
  {
    name: "Fest-Book",
    description:
      "Fest-Book is an event management platform that connects organizers and customers, enabling event creation, promotion, and booking. It offers a dynamic interface for seamless interaction and communication.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "Cluster",
        color: "White-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
    ],
    "image": festbook,
    "source_code_link": "https://github.com/Hariprasath2030/Fest-Event-App-Frontend",
    "live_demo_link": "https://fest-book.vercel.app/"
  },
  {
    name: "AI-Smart HealthCare",
    description:
      "Smart Healthcare is a virtual doctor platform that uses AI to provide accessible healthcare remotely, especially for underserved areas. Built with React.js, Tailwind CSS, Clerk, and MongoDB, it aims to bridge the gap in healthcare access.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "Cluster",
        color: "White-text-gradient",
      },
    ],
    "image": healthcare,
    "source_code_link": "https://github.com/Hariprasath2030/Heal_Smart_System",
    "live_demo_link": "https://heal-smart-system.vercel.app/"
  }
];

export { services, technologies, experiences, projects };