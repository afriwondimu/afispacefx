"use client";
import Container from "@/app/Container";
import ProductNav from "./ProductNav";
import Navlist2 from "./NavUtils/Navlist2";
import SolutionNav from "./SolutionNav";
import OpenSourceNav from "./OpenSourceNav";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState(false);

  return (
    
    <Container>
      <div className="text-white bg-transparent py-5">
        <button className="hidden"></button>
        <div className="flex items-center max-lg:justify-between max-lg:flex-row-reverse">
          <div className="flex justify-between items-center max-lg:w-full">

            <a className="" href="https://afispacefx.com">
              <svg
                height="40.000000pt"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 900.000000 440.000000"
                version="1.1"
                width="75.000000pt"
                data-view-component="true"
                className=" text-white"
              >
                <g
                  transform="translate(0.000000,485.000000) scale(0.100000,-0.100000)"
                  fill="#ffffff"
                  stroke="none"
                >
                  <path
                    d="M3175 3799 c-19 -17 -35 -36 -35 -41 0 -6 -13 -27 -28 -47 -16 -20
-32 -43 -36 -51 -11 -23 -24 -43 -131 -205 -55 -82 -102 -154 -104 -160 -2 -5
-17 -26 -32 -46 -16 -20 -29 -40 -29 -43 0 -4 -8 -19 -19 -34 -10 -15 -57 -87
-105 -159 -47 -73 -125 -193 -173 -265 -92 -139 -108 -163 -119 -188 -4 -8
-20 -31 -36 -51 -15 -20 -28 -40 -28 -44 0 -4 -13 -24 -30 -45 -16 -21 -30
-41 -30 -46 0 -4 -6 -15 -13 -23 -24 -28 -40 -80 -33 -106 13 -50 57 -65 198
-65 136 0 162 5 200 42 27 26 128 175 154 228 4 8 27 43 51 77 24 35 43 65 43
68 0 2 13 24 29 47 42 62 145 221 151 233 3 6 36 58 75 115 76 114 89 135 104
165 34 65 149 220 163 220 10 0 46 -44 92 -114 42 -63 76 -116 76 -118 0 -2 8
-16 19 -31 10 -15 43 -65 73 -112 30 -47 81 -125 114 -175 32 -49 61 -95 64
-100 3 -6 26 -42 51 -80 65 -98 123 -188 129 -200 24 -47 147 -219 172 -240
31 -26 31 -26 180 -23 l150 3 24 28 c41 47 35 65 -71 236 -6 9 -42 63 -80 121
-39 58 -72 110 -75 115 -6 12 -111 174 -151 233 -16 23 -29 45 -29 48 0 4 -13
23 -29 43 -15 20 -30 41 -32 46 -4 10 -153 239 -210 323 -16 23 -29 45 -29 48
0 4 -13 23 -30 44 -16 21 -30 41 -30 44 0 3 -20 35 -45 72 -25 36 -45 67 -45
69 0 10 -95 141 -114 157 -18 15 -42 17 -173 18 l-152 0 -36 -31z"
                  />
                  <path
                    d="M4722 3800 c-20 -27 -22 -41 -22 -168 0 -83 4 -142 11 -149 14 -14
1803 -6 1842 9 36 14 42 39 42 175 0 104 -2 113 -24 137 l-24 26 -902 0 -901
0 -22 -30z"
                  />
                  <path
                    d="M6912 3807 l-22 -23 2 -779 3 -779 34 -23 c30 -21 46 -23 148 -23
124 0 157 10 187 54 14 23 16 95 16 774 l0 749 -23 34 -23 34 -150 3 c-146 2
-151 2 -172 -21z"
                  />
                  <path
                    d="M4706 3204 c-3 -9 -6 -227 -6 -486 l0 -470 31 -29 31 -29 138 0 c132
0 138 1 164 25 l26 24 0 278 c1 248 3 280 18 298 38 45 39 45 720 45 406 0
661 4 683 10 50 14 69 62 69 174 0 97 -17 147 -55 164 -19 9 -250 12 -919 12
-806 0 -894 -2 -900 -16z"
                  />
                </g>
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setShowNav(!showNav)}
              className="lg:hidden cursor-pointer"
            >
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${
                  showNav
                    ? "rotate-45 mb-0  translate-y-[1px]"
                    : "rotate-0 mb-1"
                } `}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                  showNav ? "hidden mb-0" : "mb-1"
                } `}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${
                  showNav ? "-rotate-45 mb-0" : "rotate-0"
                }`}
              ></div>
            </button>
          </div>
          <div
            className={` flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40  ${
              showNav
                ? "max-lg:translate-x-0 max-lg:scale-100"
                : " max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"
            }`}
          >
            <div className="flex max-lg:flex-col lg:items-center lg:justify-between max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px]  overflow-y-auto lg:mb-0 max-lg:bg-[#00000079] max-lg:rounded-lg">
              <nav className="mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5">
                <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-white max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto">
                  <li>
                    <a href="#About" className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#Social" className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300">
                      Social
                    </a>
                  </li>
 
                  <li>
                    <a href="#PositionSizeCalculator" className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300">
                      Calculate
                    </a>
                  </li>
                  <li>
                    <a href="#Community" className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300">
                      Connect
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        
      </div>
    </Container>
  );
};

export default Navbar;
