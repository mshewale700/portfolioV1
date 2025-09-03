import React from "react";
import ExperianceText from "./ExperianceText";
import ExperianceTop from "./ExperianceTop";
import AllExpriance from "./AllExpriance";
import { motion } from "framer-motion";
import { fade } from "../../FramerMotion/variants";
const ExperianceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div 
            variants={fade('down',0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount:0.7}}>
        <ExperianceText />
      </motion.div>
      <motion.div
            variants={fade('down',0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount:0}}>
      <ExperianceTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
    </div>
  );
};

export default ExperianceMain;
