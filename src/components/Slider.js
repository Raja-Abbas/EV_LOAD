import React from 'react'
import Aws from "../images/2560px-Amazon_Web_Services_Logo.svg"
import UtilityApi from "../images/utilityapi_logo_blue.svg"
import Pacific from "../images/Pacific_Gas_and_Electric_Company_(logo).svg"
import Edision from "../images/1280px-Edison_International_Logo.svg"
import LA from "../images/Los_Angeles_Department_of_Water_and_Power_logo.svg"
import SDG from "../images/SDG&E-Logo.svg"

function Slider() {
  return (
    <div className='slider flex justify-center gap-12'>
        <img src={Aws} alt=''/>
        <img src={UtilityApi} alt=''/>
        <img src={Pacific} alt=''/>
        <img src={Edision} alt=''/>
        <img src={LA} alt=''/>
        <img src={SDG} alt=''/>
    </div>
  )
}

export default Slider