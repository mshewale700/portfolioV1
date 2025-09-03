import React from "react";
import {Link} from 'react-scroll';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const AboutMeText = () => {
  function Openit() {
    const url='https://drive.google.com/drive/folders/1j1JQLT-6tNcoP-XHGzHfUZ_2Wa1JqMOQ?usp=drive_link';
    window.open(url);
  }
  return (
    <div className="flex flex-col  md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan  mb-10   ">About Me</h2>
      <p className="text-white text-justify">
        I am a passionate UI/UX and Graphics Designer with a keen eye for detail
        and a strong focus on creating visually appealing and user-friendly
        designs.I craft seamless digital experiences that enhance usability and
        engagement. My skills extend to branding, illustration, and motion
        graphics, ensuring a cohesive visual identity across platforms.I thrive
        on turning ideas into intuitive and aesthetically pleasing designs,
        blending creativity with functionality. Always eager to learn and adapt,
        I stay updated with the latest design trends and tools to deliver
        innovative solutions.
      </p>
        <button className="border border-orange rounded-full py-2 px-2 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-100 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan  ">
       <a onClick={Openit}> My Projects </a>  
      </button>
    </div>
  );
};

export default AboutMeText;
