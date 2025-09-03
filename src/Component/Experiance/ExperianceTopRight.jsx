import React from "react";
import { motion } from "framer-motion";
import {fade} from '../../FramerMotion/variants'
const ExperianceTopRight = () => {
  return (
    <motion.div
      variants={fade("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="xl:w-[25%] lg:w-[30%] border border-brown p-4 rounded-xl"
    >
      <p className="text-[16px] text-center text-lightgrey">
        I have experience in{" "}
        <span className="font-bold text-white">
          Graphics Design and UI/UX Design,
        </span>
        where I have worked on creating visually appealing designs and
        user-friendly interfaces. My skills include
        <span className="font-bold text-white">
          Adobe Photoshop, Illustrator, Figma, and other design tools.
        </span>{" "}
        I focus on user-centric designs, ensuring a seamless and engaging
        experience. I have worked on projects involving{" "}
        <span className="font-bold text-white">
          wireframing, prototyping, branding, and web/mobile app designs.
        </span>{" "}
        I am eager to continue learning and enhancing my expertise in the field.
      </p>
    </motion.div>
  );
};

export default ExperianceTopRight;
