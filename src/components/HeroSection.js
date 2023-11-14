import React from "react";
import Navbar from "./navbar";
import Us from "../images/US.svg";
import Ca from "../images/CA.svg";
import HeroImage from "../images/siemens-chargers-with-logo.svg";
import Background from "../images/Vector 3.svg"
import Arrow from "../images/Arrow - Right 2.svg"
function HeroSection() {
  return (
    <div className="HeroSection two relative">
      <div className="container">
        <Navbar />
        <div className="container container-hero margin-left absolute min-[1360px]:bottom-60 2xl:bottom-80">
          <div className="max-w-[550px] lg:mt-[-100px]">
            <p className="font-bold mx-5 bottom-20 text-[#000000] font-[Montserrat,sans-serif] capitalize text-[34px]  text-left">
              Accelerate<span className="text-[#4BAC88]"> EV charging</span>
              <span className="bg-white px-6 py-1 block rounded-full mx-[-24px]">
                infrastructure deployment{" "}
              </span>
              <div className="flex items-center">
                <span className="capitalize font-extralight">
                  and <span className="font-bold">permitting in </span>
                </span>
                <img src={Ca} alt="" className="w-[40px] mt-3" />
                <img src={Us} alt="" className="w-[40px] mt-3" />
              </div>
            </p>
            <p className="max-w-[420px] text-[12px] m-auto my-3">
              For a fraction of time and cost, determine your site’s electrical
              charging capacity with our NEC-Compliant cloud native solution
            </p>
            <div className='flex max-lg:flex-col'>
            <div className="lg:mx-6 inline-flex gap-[6px] px-[30px] py-[10px] bg-[#000000] text-white border-1 border-[#00000000] rounded-[50px] hover:bg-[#4BAC88] transition-all cursor-pointer max-lg:w-[100%] max-lg:mb-4  max-lg:justify-center">
            <button className="">See A Demo</button>
            <img src={Arrow} alt=''/>
            </div>
             <div className="inline-flex gap-[6px] px-[30px] py-[10px] bg-[#4BAC88] text-white border-1 border-[#00000000] rounded-[50px] hover:bg-[#000000] transition-all cursor-pointer max-lg:w-[100%] max-lg:mb-4 max-lg:justify-center">
            <button className="">Request A free Site Analysis</button>
            <img src={Arrow} alt=''/>
            </div>
            </div>
          </div>
          <div className="">
            <img src={Background} alt='' className="absolute w-[200px] mx-[9%] mt-[-150px]"/>
            <img src={HeroImage} alt="" className=" relative w-[400px] z-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
