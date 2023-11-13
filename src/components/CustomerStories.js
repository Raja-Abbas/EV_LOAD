import React from "react";
import ImageOne from "../images/ImageLast.svg";
import ImageTwo from "../images/LastImage.svg";
import ImageThree from "../images/ImageGreenLast.svg";

function CustomerStories() {
  return (
    <div className="max-w-[1600px] mx-auto mt-20 mb-10 bg">
      <div className="flex max-lg:flex-col max-lg:gap-24 lg:gap-12 xl:gap-22 2xl:gap-32 lg:mx-2">
        <div className="max-w-[600px] max-md:mx-2">
          <p className="text-[20px] font-[600] uppercase">Customer Stories</p>
          <p className="text-[32px] font-[700] capitalize mt-2">What our partners said<span className="text-[#4BAC88]"> about us.</span></p>
          <p className="text-[16px] font-[400] opacity-90 md:me-32 mt-4">
            Our Al-powered software accelerates scalable, cost- efficient
            charging and storage infrastructure deployment. Gain a competitive
            edge on the future of electric mobility.
          </p>
        </div>
        <div className="max-md:mx-2 mx-auto max-lg:max-w-[550px] lg:w-[550px] h-[280px] max-lg:min-h-[280px] relative">
        <div className="max-lg:max-w-[500px] lg:w-[500px] h-[250px] max-lg:min-h-[250px] black blackLast pr-0 flex flex-row-reverse items-center gap-6 z-40">
          <div className='flex flex-col'>
          <p className="text-[14px] font-[500] text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          <p className="text-[12px] font-[400] text-[#B4B4B4]">Elisa Grant</p>
          <p className="text-[8px] font-[400] text-[#B4B4B4]">Legacy Solutions Engineer</p>
          </div>
          <img src={ImageOne} alt="" className="mt-[-150px] lg:min-h-[400px] lg:w-[200px]"/> 
        </div>
        <img src={ImageTwo} alt="" className="absolute bottom-0 left-0 ml-[-30px] -z-20"/>
          <img src={ImageThree} alt="" className="absolute top-0 right-0 ml-[-60px] mt-[-80px] -z-20"/>
        </div>
      </div>
    </div>
  );
}

export default CustomerStories;
