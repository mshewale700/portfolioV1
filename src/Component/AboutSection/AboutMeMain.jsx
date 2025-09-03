import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { motion } from "framer-motion";
import { fade } from "../../FramerMotion/variants";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className=" flex md:flex-row sm:flex-col gap-12 px-4  pb-20 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <motion.div
        variants={fade("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fade("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        className="lg:block sm:hidden"
      >
        <AboutMeImage/>
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
