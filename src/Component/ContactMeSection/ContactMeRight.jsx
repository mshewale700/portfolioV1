import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src="/images/email-image.png" alt="contactme pic" className="max-[300px]"></img>
      <ContactInfo> </ContactInfo>
    
        <ContactSocial></ContactSocial>
    
    
    </div>
  );
};

export default ContactMeRight;
