"use client"

import { TextScroll } from "../ui/text-scroll"

function SubHeroSection() {
  return (
    <div className="border-t border-b border-lightgrey w-full mt-5 sm:mt-20 ">
      <TextScroll
        text="Fast Learner || Team Work || Details Master ||"
        default_velocity={3}
        className="font-display bg-lightBrown tracking-tighter text-lightgrey mt-1 mb-1 md:text-7xl md:leading-[5rem]"
        style={{ fontSize: "30px", padding:0,}} // ✅ Inline style
      />
    </div>
  )
}

export default SubHeroSection
