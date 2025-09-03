import React from "react";
import ExperianceInfo from "./ExperianceInfo";

const ExperianceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperianceInfo number="6" text="Months" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperianceInfo number="50+" text="Designs" />
      </div>
      <p className="text-center text-white ">
        I have worked on projects involving wireframing, prototyping, branding,
        and web/mobile app designs. I focus on user-centric designs, ensuring a
        seamless and engaging experience.
      </p>
      <ExperianceInfo number="$100" text="Max Budget" />
    </div>
  );
};

export default ExperianceTopLeft;
