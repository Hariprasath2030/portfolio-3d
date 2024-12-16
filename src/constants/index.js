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
  tripguide,
  todo,
  threejs,
  java,
  mern,
  mysql,
  portfolio,
  smartretail
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React  Developer",
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
  title: "Problem Solving (Java)",
  company_name: "Java", // Replace with the actual company name
  icon: java, // Use an appropriate icon for Java
  iconBg: "#383E56",
  date: "Jan 2024 - Present",
  points: [
    "Developed and maintained web applications using Java and related technologies.",
    "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality backend solutions.",
    "Implemented RESTful APIs and ensured seamless integration with front-end technologies.",
    "Participated in code reviews and provided constructive feedback to other developers to enhance code quality and efficiency.",
    "Optimized application performance, security, and scalability by following best practices in Java development.",
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
    "Conducting unit testing and integration testing using JUnit and Mockito to ensure code quality and reliability.",
    "Participating in agile ceremonies, such as sprint planning and retrospectives, to ensure timely delivery of features and continuous improvement of development processes."
  ],
}

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
    name: "Todo-1",
    description:
      "The ToDo Project using MERN Stack is a full-stack web application designed to help users manage tasks efficiently. Built using the MERN (MongoDB, Express.js, React, Node.js) stack, the project enables users to add, edit, and delete tasks in real time.",
    tags: [
      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "Reactjs",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Hariprasath2030/todo",
  },
  {
    name: "Todo-2",
    description:
      "The ToDo Project using Spring Boot is a full-stack web application designed to help users manage tasks efficiently. Built using the (Spring Boot, AngularJS,Mysql) the project enables users to add, edit, and delete tasks in real time.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Angularjs",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "BootStrap",
        color: "orange-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Hariprasath2030/todo-2",
  },
  {
    name: "Portfolio",
    description: 
      "This project is a personal portfolio website showcasing various web applications, including all projects, experience, about, contact details, skills, etc.It highlights my technical skills in full-stack development and offers a platform for users to explore my work and projects.",
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
          name: "Threejs",
          color: "pink-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "orange-text-gradient",
        },
    ],
    "image": portfolio,
    "source_code_link": "https://github.com/Hariprasath2030/portfolio-3d"
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
    "source_code_link": "https://github.com/Hariprasath2030/Retail-Hub-client"
  }
  
   
];

export { services, technologies, experiences, testimonials, projects };
