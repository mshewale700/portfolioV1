import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import {fade} from '../../FramerMotion/variants'

const projects = [
  {
    name: "Instagram Clone App",
    year: "Jan 2025",
    align: "right",
    Image: "/images/pr1.png",
    link: "https://www.figma.com/design/4AysUWWxeP49jZeIPfm0mC/INSTAGRAM?node-id=11-2&t=CqFX6s8EmRNqTgMt-1",
  },

  {
    name: "Amezone Clone",
    year: "Feb 2025",
    align: "left",
    Image: "/images/pr2.png",
    link: "https://www.figma.com/design/qKg7iSNaR8HoI2S8ve7Icq/Amazon?node-id=0-1&t=nJgn0fRMI6Obtejg-1",
  },
    {
    name: "Nobrokarage Website",
    year: "May 2025",
    align: "right",
    Image: "/images/pr6.png",
    link: "https://www.figma.com/proto/UZRQWfBOufb1wwNwdUTh3M/NOBO?node-id=1-2&t=0KBMBDIBXAAeGpDm-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  },

  {
    name: "Graphics Designs",
    year: "2024-2025",
    align: "left",
    Image: "/images/pr4.jpg",
    link: "https://drive.google.com/drive/folders/1j1JQLT-6tNcoP-XHGzHfUZ_2Wa1JqMOQ?usp=drive_link",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
      variants={fade('up',0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount:0}}>
        <ProjectText></ProjectText>
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              Image={item.Image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
