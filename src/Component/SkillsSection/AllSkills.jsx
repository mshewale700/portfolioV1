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

const AllSkills = () => {
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

  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fade("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
