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
    title: "Works",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Boostrap",
    icon: redux,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
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
  },
  {
    title: "Advanced MERN Development",
    company_name: "Infosys Springboard",
    icon: mern, // You can replace 'reactjs' with the appropriate icon source
    iconBg: "#E6DEDD", // Background color for the icon
    date: "September 2024 - october 2024",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, and Express.js, ensuring high performance and responsiveness.",
      "Collaborating with cross-functional teams, including UI/UX designers and product managers, to translate business requirements into technical specifications and deliver high-quality products.",
      "Implementing responsive design principles and ensuring cross-browser compatibility, resulting in an optimal user experience across various devices and platforms.",
      "Conducting code reviews and providing constructive feedback to team members, fostering a culture of continuous improvement and knowledge sharing within the development team.",
      "Integrating RESTful APIs and third-party services, enhancing the functionality and performance of web applications."
    ],
  },
  {
    title: "Spring Boot Development",
    company_name: "Infosys Springboard",
    icon: git, // You can replace 'reactjs' with the appropriate icon source related to Spring Boot
    iconBg: "#E6DEDD", // Background color for the icon
    date: "October 2024 - Present",
    points: [
      "Developing and maintaining enterprise-level applications using Spring Boot, ensuring scalability, performance, and security.",
      "Designing RESTful APIs to facilitate seamless communication between front-end and back-end systems, optimizing data retrieval and processing.",
      "Collaborating with cross-functional teams, including database administrators and DevOps engineers, to deploy applications in cloud environments and maintain CI/CD pipelines.",
      "Implementing Spring Security to enhance application security through user authentication and authorization, ensuring data protection.",
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
    source_code_link: "https://github.com/Hariprasath2030/Restaurant-management-system",
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
