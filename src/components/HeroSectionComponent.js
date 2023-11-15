import React from "react";
import Cross from "../images/close-circle.svg";
import Tick from "../images/tick-circle.svg";
import Image from "../images/image first.svg";
import ImageSecond from "../images/image 11.svg";
import LineArrow from "./LineArrow";
import Round from "../images/ROUND.svg"

function HeroSectionComponent() {
  return (
    <div id="product" className="flex flex-col justify-center gap-0 HeroSectionComponents">
      <div className="my-10 flex max-lg:flex-col">
        <div className="flex lg:flex-row justify-center max-lg:mt-[100px] lg:mr-[250px] xl:mr-[240px] w-[100%] relative max-lg:flex-col">
          <div className="flex flex-col max-lg:mt-44 max-lg:pt-32 black xl:max-w-[700px] lg:max-w-[680px] z-10">
            <p className="text-white text-[15px] font-[500] capitalize text-opacity-80">
              Electrical Load Study is a pivotal component for determining the
              remaining electrical capacity to install an EVSE
            </p>
            <p className="mt-[16px] text-white text-[21px] capitalize font-[700]">
              Presently electrical load studies are error prone, time consuming
              and expensive
            </p>
            <p className="mt-[24px] text-white text-[16px] font-[700]">
              Electrical load study calculation process
            </p>
            <div className="mt-[20px] flex flex-col gap-3">
              <div className="flex gap-5">
                <img src={Cross} alt="" />
                <p className="text-[14px] text-[#CE0B00]">Square footage</p>
              </div>
              <div className="flex gap-5">
                <img src={Cross} alt="" />
                <p className="text-[14px] text-[#CE0B00]">
                  Equipment nameplate info
                </p>
              </div>
              <div className="flex gap-5">
                <img src={Cross} alt="" />
                <p className="text-[14px] text-[#CE0B00]">
                  Install meters to record demand for 30 days
                </p>
              </div>
            </div>
            <img
              src={Image}
              alt=""
              className="absolute max-lg:top-10 max-lg:left-0 max-lg:right-0 max-lg:mx-auto z-50 max-w-[360px] max-sm:px-4 lg:left-[600px] xl:top-16 lg:top-24 xl:left-[700px] min-[1350px]:left-[750px] min-[1500px]:left-[850px] min-[1600px]:left-[1100px]"
            />
            <img src={Round} alt="" className="absolute max-lg:hidden z-50 max-w-[360px] max-sm:px-4 lg:right-[-36px] xl:-bottom-8 lg:-bottom-8 xl:right-[96px] min-[1350px]:right-[138px] min-[1500px]:right-[212px] min-[1600px]:right-[462px]"/>
          </div>
          <div className="green max-lg:w-full max-lg:h-[200px] max-lg:-top-32 lg:w-[38%] 2xl:w-[100%] lg:h-[351px] absolute right-0 z-[1] lg:left-[800px] xl:left-[900px] min-[1350px]:left-[950px] min-[1500px]:left-[1050px] min-[1600px]:left-[1300px]">
            <div></div>
          </div>
        </div>
      </div>
      <LineArrow />
      <div className="lg:mt-[-60px] max-lg:mt-[100px]">
        <div className="flex justify-center w-[100%] relative lg:flex-row max-lg:flex-col">
          <div className="green green-two max-lg:w-[100%] max-lg:h-[200px] max-lg:-top-24 lg:w-[35%] h-[351px] absolute lg:left-[-120px] z-[1] right-0 rotate-180 xl:right-[150px] min-[1350px]:right-[250px] min-[1600px]:w-[42%] min-[1600px]:right-[350px] min-[2000px]:w-[100%] min-[2000px]:left-[-1280px]">
            <div></div>
          </div>
          <div className="flex flex-col black black-other xl:max-w-[700px] lg:max-w-[680px] z-10 lg:ml-[250px] xl:left-[900px] min-[1350px]:left-[950px] min-[1500px]:left-[1050px] min-[1600px]:left-[1150px] max-lg:mt-52 max-lg:pt-32">
            <img
              src={ImageSecond}
              alt=""
              className="absolute z-50 max-w-[360px] lg:left-[100px] max-lg:top-[50px] max-lg:mx-auto lg:top-16 xl:left-[200px] min-[1350px]:left-[250px] min-[1500px]:left-[300px] min-[1600px]:left-[550px] max-lg:right-0 max-lg:left-0 max-sm:px-4"
            />
             <img src={Round} alt="" className="absolute max-lg:hidden z-50 max-w-[360px] max-sm:px-4 lg:left-[224px] xl:top-14 lg:top-14 xl:left-[328px] min-[1350px]:left-[348px] min-[1500px]:left-[418px] min-[1600px]:left-[712px]"/>
            <p className="text-white text-[15px] font-[500] capitalize text-opacity-80">
              Benefits
            </p>
            <p className="mt-[16px] text-white text-[21px] capitalize font-[700]">
              We expedite your EV Charger Installation and permitting.
            </p>
            <p className="mt-[24px] text-white text-[16px] font-[700] pe-24">
              For a fraction of cost and time For 10% of the cost and time:
            </p>
            <div className="mt-[20px] flex flex-col gap-3">
              <div className="flex gap-5">
                <img src={Tick} alt="" className="" />
                <p className="text-[14px] text-[#4BAC88]">
                  NEC-compliant Electrical Load Study Calculation
                </p>
              </div>
              <div className="flex gap-5">
                <img src={Tick} alt="" />
                <p className="text-[14px] text-[#4BAC88]">
                  1 year utility data
                </p>
              </div>
              <div className="flex gap-5">
                <img src={Tick} alt="" />
                <p className="text-[14px] text-[#4BAC88]">
                  No expensive hardware require to record load
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionComponent;
