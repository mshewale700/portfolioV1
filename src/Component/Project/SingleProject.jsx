import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fade } from "../../FramerMotion/variants";
import { ChevronsRight } from "./ChevronsRight";

const SingleProject = ({ name, year, align, Image, link }) => {
  return (
    <motion.div
      variants={fade("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align == "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2
          className={`md:text-3xl sm:text-2xl text-orange ${
            align == "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {name}
        </h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align == "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-lg flex  items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align == "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          view <ChevronsRight className="mr-5 w-5 h-5"/>
        </a>
      </div>

      <div className="max-h-[300px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border-white">
      <div className="w-full h-full bg-cyan opacity-0 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden "></div>
        <img src={Image} alt="Project Images"></img>
      </div>
    </motion.div>
  );
};

export default SingleProject;
