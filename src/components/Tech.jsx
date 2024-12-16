import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Technologies I Use</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills & Technologies</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-10 mt-8 sm:mt-10'>
        {technologies.map((technology) => (
          <div
            className='w-20 h-20 sm:w-28 sm:h-28 flex justify-center items-center'
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
