import React from "react";
import Tick from "../images/tick-circle-works.svg"

function HowItWorks() {
  return (
    <div className="bg-gray-100 mt-10 border border-t-[rgba(75,172,137,0.79)] border-b-[#4bac89ca] max-lg:flex max-lg:flex-col max-lg:justify-center">
      <div className="max-w-[1400px] xl:w-[1000px] min-[1400px]:w-[1400px] 2xl:w-[1310px] lg:w-[900px] mx-auto">
        <p className="px-[30px] py-[10px] mt-[-25px] w-[300px] mx-auto bg-white border-[1px] border-[#4BAC88] text-black rounded-full text-[30px] leading-[30px] font-bold text-center">
          How It <span className="text-[#4BAC88]">Works</span>
        </p>
        <div className="lg:flex gap-12 max-lg:py-7 lg:py-10">
          <div className="flex lg:justify-start max-lg:justify-center lg:mt-10">
            <p className="text-[#E7E7E7] text-[80px] leading-[70px] font-[700] max-lg:pb-6">
              01
            </p>
          </div>
          <div className="max-lg:mx-28 max-md:mx-14 lg:max-w-[500px] max-h-[438px] bg-[#FFFFFF] rounded-[24px] flex flex-col justify-center px-10 py-10 border border-[#EAEAEA] relative">
            <img src={Tick} alt="" className="absolute max-lg:top-10 lg:top-14 left-[-20px]"/>
            <p className="text-[20px] font-[700] leading-[36px] capitalize">
              Authorize us access to obtain your{" "}
              <span className="text-[#4BAC88]">facilities utility data</span>
            </p>
            <p className="text-[14.4px] font-[400] leading-[30px] text-[#000000] mt-2">
              Begin a new EV charging infrastructure feasibility analysis or
              model by inputting energy requirements, existing technology data,
              and known constraints.
            </p>
          </div>
        </div>
        <div className="lg:flex gap-12 lg:pb-10 items-start">
          <div className="flex lg:justify-end max-lg:ms-0 lg:ms-72 max-[1200px]:ms-[26rem] xl:ms-[22rem] 2xl:ms-[42rem] max-lg:justify-center lg:mt-10">
            <p className="text-[#E7E7E7] text-[80px] leading-[70px] font-[700] max-lg:pb-6">
              02
            </p>
          </div>
          <div className="max-lg:mx-28 max-md:mx-14 xl:max-w-[500px] lg:min-w-[500px] max-h-[438px] bg-[#FFFFFF] rounded-[24px] flex flex-col justify-center px-7 py-10 border border-[#EAEAEA] relative">
            <img src={Tick} alt="" className="absolute max-lg:top-10 lg:top-14 left-[-20px]"/>
            <p className="text-[20px] font-[700] leading-[36px] capitalize">
              Process the granular big data sources on
              <span className="text-[#4BAC88]"> our cloud platform </span>
            </p>
            <p className="text-[14.4px] font-[400] leading-[30px] text-[#000000] mt-2">
             Define strategy to maximize government grants/funding, reduce utility costs and demand charges, maximize operation during grid outages, and let Xendee automatically find the best solutions for you.
            </p>
          </div>
        </div>
        <div className="lg:flex gap-12 lg:pb-10 max-lg:py-7 items-start">
          <div className="flex lg:justify-start max-lg:justify-center lg:mt-10">
            <p className="text-[#E7E7E7] text-[80px] leading-[70px] font-[700] max-lg:pb-6">
              03
            </p>
          </div>
          <div className="max-lg:mx-28 max-md:mx-14 lg:max-w-[500px] max-h-[438px] bg-[#FFFFFF] rounded-[24px] flex flex-col justify-center px-10 py-10 border border-[#EAEAEA] relative">
            <img src={Tick} alt="" className="absolute max-lg:top-10 lg:top-14 left-[-20px]"/>
            <p className="text-[20px] font-[700] leading-[36px] capitalize">
              Receive NEC-compliant Electrical Load 
              <span className="text-[#4BAC88]"> Study computation</span>
            </p>
            <p className="text-[14.4px] font-[400] leading-[30px] text-[#000000] mt-2">
              Reduce interconnection times by leveraging our extensive reports. Explore the optimal technologies for your EV charging infrastructure, check the balance of system costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
