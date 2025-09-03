import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Rocket } from "./Rocket";  

const NavbarBtn = () => {
  
  function Openit() {
    const url='https://drive.google.com/file/d/1RFkuGOf215c_XgRj7PrS8-AppEl8i8qR/view?usp=sharing';
    window.open(url);
  }
 return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan bordeer flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanshadow">
    
      <a  onClick={Openit}>Hire me</a>
      <div className="sm:hidden md:block">
        <Rocket width={20} height={20} /> 
      </div>
    </button>
  );
};

export default NavbarBtn;
  