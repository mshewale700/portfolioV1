import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import SingleInfo from "./SingleInfo";
const ContactInfo = () => {
  return <div className="flex flex-col gap-4 text-white">
    <SingleInfo text="sachinshewale2612@gmail.com"  IImage={MdOutlineMail}></SingleInfo>
    <SingleInfo text="+91 9529709717"  IImage={FaPhone}></SingleInfo>
    <SingleInfo text="Pune, Maharastra, India"  IImage={ImLocation}></SingleInfo>

  </div>;
};

export default ContactInfo;
