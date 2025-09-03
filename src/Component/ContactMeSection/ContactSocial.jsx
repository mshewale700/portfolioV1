import React from 'react'
import SingleContact from './SingleContact'
import { FaFigma } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const ContactSocial = () => {
  return (
    <div className='flex gap-4'> 
        <SingleContact Link="#" Icon={FaFigma}></SingleContact>
        <SingleContact Link="https://www.linkedin.com/in/sachin-shewale-50689a369/" Icon={FaLinkedin}></SingleContact>
        <SingleContact Link="#" Icon={FaInstagram}></SingleContact>
    
    </div>
  )
}

export default ContactSocial