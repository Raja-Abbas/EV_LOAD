import React from "react";
import Image from "../images/Framenavbar.svg";
import { Link } from "react-scroll"; // Import the Link component
import IconlyLightArrow from "../images/Arrow - Right 2.svg";



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative py-5 flex justify-around items-center z-100 w-full lg:hidden">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <div className="label flex justify-start items-center">
        <img src={Image} alt="" className="iconly-light-arrow-right-2" />
        <p className="EV-load">
          <span className="text-wrapper">EV </span>
          <span className="span">Load</span>
        </p>
      </div>
            <button
              className="text-white responsiveNavbar cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white px-4 pe-10 mx-auto absolute w-full mt-80 z-[10000] text-center transition-all" +
              (navbarOpen ? "" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="list-none lg:ml-auto">
                 <Link to="home" smooth={true} duration={500} className="cursor-pointer hover-link block">
                  Home
                  </Link>
                <Link to="product" smooth={true} duration={500} className="cursor-pointer hover-link block">
                  Product
                  </Link>
                <Link to="partnering" smooth={true} duration={500} className="cursor-pointer hover-link block">
              Partnering
            </Link>
                <li className="cursor-pointer hover-link block">Contact</li>
            </ul>
            <div className="mt-4 z-50 mb-4 flex flex-col gap-4">
        <button className="btn btn-two-css">
          <Link to="report" smooth={true} duration={500} className="text-wrapper cursor-pointer uppercase float-left text-center">
              Get A report
            </Link>
          <img
            src={IconlyLightArrow}
            className="iconly-light-arrow-right-2"
            alt=""
          />
        </button>
        <button className="btn-two btn-two-css">
          <div className="log-in">LOG IN</div>
        </button>
      </div>
          </div>
        </div>
      </nav>
    </>
  );
}

