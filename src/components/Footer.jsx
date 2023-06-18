import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-secondary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-[15%]">
      <div>
        <div className="flex flex-row space-x-4 items-center">
          <img src="./logo.png" alt="" className="w-8 h-8 object-contain" />
          <p className="font-semibold text-white">WebUnity</p>
        </div>

        <div>
          <p className="my-2 text-white font-medium">Want to work Together ?</p>
          <p className="my-2 text-white font-medium">+91 8517014691</p>
          <p className="my-2 text-white font-medium"> thewebunity@gmail.com</p>
        </div>

        <div className="flex flex-row space-x-2 my-5  ">
          <Link
            className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
            to="mailto:thewebunity@gmail.com"
            target="_blank"
          >
            <ion-icon name="logo-google"></ion-icon>
          </Link>
          <Link
            className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
            to="https://github.com/thewebunity"
            target="_blank"
          >
            <ion-icon name="logo-github"></ion-icon>
          </Link>
          <Link
            className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
            to="https://www.linkedin.com/in/vishal-kumar-132272228/"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </Link>
          <Link
            className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
            to="https://www.youtube.com/@imbibe1"
            target="_blank"
          >
            <ion-icon name="logo-youtube"></ion-icon>
          </Link>
          <Link
            className="h-10 w-10 rounded-full bg-white justify-center items-center flex hover:scale-125 cursor-pointer"
            to="https://wa.me/+918517014691"
            target="_blank"
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex flex-col  w-full   gap-4">
          <li>
            <a href="#home" className="font-medium text-sm text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#service" className="font-medium text-sm text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#features" className="font-medium text-sm text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="font-medium text-sm text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#teams" className="font-medium text-sm text-white">
              Team
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col  w-full   gap-4">
          <li>
            <a href="#about" className="font-medium text-sm text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="font-medium text-sm text-white">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#about" className="font-medium text-sm text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#contact" className="font-medium text-sm text-white">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#contact" className="font-medium text-sm text-white">
              Refund Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
