
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {port} from "../assets/index"
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
   <div
  options={{
    max: 45,
    scale: 1,
    speed: 450,
  }}
  className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
>
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      {/* Flexbox container for text and image */}
      <div className="flex flex-col md:flex-row items-center mt-8">
        {/* Text section */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] md:w-1/2"
        >
          I'm a skilled software developer with experience in Mern Stack and
          Spring Boot, Java, PHP, C, Angular JS and expertise in frameworks like React, Node.js, Express Js, Vite, Tailwind Css, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        {/* Image section */}
        <motion.div
  variants={fadeIn("left", "spring", 0.5, 0.75)}
  className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
>
  <img
    src= {port} 
    alt="About"
    className="w-64 h-64 object-cover rounded-2xl"
  />
</motion.div>

      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
