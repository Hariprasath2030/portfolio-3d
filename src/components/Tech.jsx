import React from "react";
import { motion } from "framer-motion"; // Make sure motion is imported for animation
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion"; // Import the textVariant animation
import { styles } from "../styles"; // Make sure styles is imported

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Technologies I Use</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills & Technologies</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
