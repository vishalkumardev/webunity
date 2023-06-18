import React, { useState } from "react";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between px-[10%] mx-auto items-center py-2 ">
        <div className="flex flex-row space-x-4 items-center">
          <img src="./logo.png" alt="" className="w-8 h-8 object-contain" />
          <p className="font-semibold">WebUnity</p>
        </div>

        <div
          className={`md:static md:min-h-fit mx-auto absolute  bg-white  left-0 w-full md:w-auto min-h-[40vh] ${
            open ? "top-[5%]" : "top-[-100%]"
          } flex items-center px-[4%]`}
        >
          <ul className="flex flex-col md:flex-row  w-full  md:items-center gap-4">
            <li onClick={() => setopen(false)}>
              <a
                href="#home"
                className="font-semibold text-sm hover:text-primary"
              >
                Home
              </a>
            </li>
            <li onClick={() => setopen(false)}>
              <a
                href="#service"
                className="font-semibold text-sm hover:text-primary"
              >
                Services
              </a>
            </li>
            <li onClick={() => setopen(false)}>
              <a
                href="#features"
                className="font-semibold text-sm hover:text-primary"
              >
                Features
              </a>
            </li>
            <li onClick={() => setopen(false)}>
              <a
                href="#pricing"
                className="font-semibold text-sm hover:text-primary"
              >
                Pricing
              </a>
            </li>
            <li onClick={() => setopen(false)}>
              <a
                href="#teams"
                className="font-semibold text-sm hover:text-primary"
              >
                Team
              </a>
            </li>
            <li onClick={() => setopen(false)}>
              <a
                href="#about"
                className="font-semibold text-sm hover:text-primary"
              >
                About Us
              </a>
            </li>
            <li onClick={() => setopen(false)}>
              <a
                href="#contact"
                className="font-semibold text-sm hover:text-primary"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row items-center gap-4">
          <button className="px-4 py-1 bg-primary text-xs font-medium text-white  rounded-full">
            Login
          </button>
          <div className="md:hidden" onClick={() => setopen(!open)}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
