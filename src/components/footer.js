import React from "react";
import Linkedin from "../images/active linkedin.svg"
import Twitter from "../images/twitter.svg"
import Instagram from "../images/instagram.svg"

function footer() {
  return (
    <div className="">
      <div className='text-[#999999] bg-black py-5 flex max-md:flex-col max-md:gap-4 mx-auto'>


<div className='lg:gap-20 xl:gap-40 flex max-md:text-center max-md:flex-col max-md:gap-4 mx-auto'>
<div className='flex xl:gap-10 lg:gap-6 max-md:justify-evenly'>
  <p className="hover:underline cursor-pointer">Terms & Conditions</p>
  <p className="hover:underline cursor-pointer">Privacy Policy</p>
  </div>
  <div>

  <div>
  <p>© Copyright 2023, All Rights Reserved by EV.load </p>
  </div>
  </div>

<div className="flex gap-6 max-md:justify-center">
  <img className='cursor-pointer hover:-mt-3 transition-all' src={Linkedin} alt=""/>
  <img className='cursor-pointer hover:-mt-3 transition-all' src={Twitter} alt=""/>
  <img className='cursor-pointer hover:-mt-3 transition-all' src={Instagram} alt=""/>
</div>
</div>

  </div>
    </div>
  );
}

export default footer;
