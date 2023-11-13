import React from "react";
import Image from "../images/Frame 82.svg";
import IconlyLightArrow from "../images/Arrow - Right 2.svg";
import Frame from "../images/Frame.svg"

function navbar() {
  return (
    <div className="py-5 flex justify-around items-center z-100">
      <div className="label flex justify-start items-center">
        <img src={Image} alt="" className="iconly-light-arrow-right-2" />
        <p className="EV-load">
          <span className="text-wrapper">EV </span>
          <span className="span">Load</span>
        </p>
      </div>
        <img src={Frame} alt='' className="max-lg:flex justify-end lg:hidden cursor-pointer"/>
      <div className="rounded-[100px] flex flex-row justify-between items-center max-lg:hidden">
            <ul className="box bg-white m-0 px-10 py-4 gap-12 flex justify-center border-[0px] rounded-[100px] w-[450px]">
                <li className="cursor-pointer hover-link">Home</li>
                <li className="cursor-pointer hover-link">Product</li>
                <li className="cursor-pointer hover-link">Partnering</li>
                <li className="cursor-pointer hover-link">Contact</li>
            </ul>
      </div>
      <div className="flex justify-end gap-2 items-center z-50 max-lg:hidden">
        <button className="btn">
          <div className="text-wrapper">GET A REPORT</div>
          <img
            src={IconlyLightArrow}
            className="iconly-light-arrow-right-2"
            alt=""
          />
        </button>
        <button className="btn-two">
          <div className="log-in">LOG IN</div>
        </button>
      </div>
    </div>
  );
}

export default navbar;
