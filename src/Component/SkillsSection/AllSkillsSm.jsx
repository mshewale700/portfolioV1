import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fade } from "../../FramerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: TbBrandJavascript,
  },
  {
    skill: "Photoshop",
    icon: SiAdobephotoshop,
  },
  {
    skill: "Illustrator",
    icon: SiAdobeillustrator,
  },
  {
    skill: "FIGMA",
    icon: FaFigma,
  },
  {
    skill: "BootStrap",
    icon: FaBootstrap,
  },
];

const AllSkillsSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
           variants={fade('up',0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{once: false, amount:0.7}}
                key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSm;
