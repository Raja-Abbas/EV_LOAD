import React from 'react'
import Aws from "../images/2560px-Amazon_Web_Services_Logo.svg"
import UtilityApi from "../images/utilityapi_logo_blue.svg"
import Pacific from "../images/Pacific_Gas_and_Electric_Company_(logo).svg"
import Edision from "../images/1280px-Edison_International_Logo.svg"
import LA from "../images/Los_Angeles_Department_of_Water_and_Power_logo.svg"
import SDG from "../images/SDG&E-Logo.svg"
import Marquee from "react-fast-marquee";


function Slider() {
  return (
    <div className='slider flex justify-center mx-auto'>
        <Marquee>
        <img src={Aws} alt='' className='mx-10'/>
        <img src={UtilityApi} alt='' className='mx-10'/>
        <img src={Pacific} alt='' className='mx-10'/>
        <img src={Edision} alt='' className='mx-10'/>
        <img src={LA} alt='' className='mx-10'/>
        <img src={SDG} alt='' className='mx-10'/>
          </Marquee>
    </div>
  )
}

export default Slider