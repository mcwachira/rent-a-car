import React from 'react';

import Logo from '../logo';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex flex-col min-w-full pt-10 md:pt-16 items-center justify-center bg-[#1d2124]">
      <div className="flex w-full h-full max-w-screen-2xl flex-wrap">
        <div className=" flex flex-col mr-2 md:mr-16 pl-10 pr-10 md:pl-3 md:pr-3">
          <Logo color="white" bgColor="dark" />
          <div className="text-white text-sm font-normal max-w-xs leading-5 mt-2">
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col mr-2 md:mr-16 pl-10 pr-10 md:pl-3 md:pr-3 mt-7 md:mt-0">
          <div
            className="  text-2xl
    font-bold
    text-white
    mb-3"
          >
            Our Links
          </div>
          <div className="outline-none list-none flex flex-col">
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="mb-3">
              <a
                className=" text-sm  text-white transition-all hover:text-gray-200"
                href="#"
              >
                Models
              </a>
            </li>
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                Blog
              </a>
            </li>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col mr-2 md:mr-16 pl-10 pr-10 md:pl-3 md:pr-3 mt-7 md:mt-0">
          <div className="  text-2xl  font-bold  text-white  mb-3">
            Other Links
          </div>
          <div className="outline-none list-none flex flex-col">
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                Support
              </a>
            </li>
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li className="mb-3">
              <a
                className=" text-sm text-white   transition-all   hover:text-gray-200"
                href="#"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col mr-2 md:mr-16 pl-10 pr-10 md:pl-3 md:pr-3 mt-7 md:mt-0">
          <div className="  text-2xl font-bold text-white mb-3">Call Now</div>
          <div className="flex tems-center">
            <span className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white text-base mr-2">
              <FaPhoneAlt />
            </span>
            <h6 className="text-sm text-white">+25472600000</h6>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col mr-2 md:mr-16 pl-10 pr-10 md:pl-3 md:pr-3 mt-7 md:mt-0">
          <div className="  text-2xl font-bold text-white mb-3">Mail</div>
          <div className="flex items-center">
            <span className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white text-base mr-2">
              <FaEnvelope />
            </span>
            <h6 className="text-sm text-white">info@yourcar.com</h6>
          </div>
        </div>
      </div>
      <div className="w-full flex max-w-screen-2xl justify-center md:justify-start mt-7 md:mt-1">
        <small className="text-gray-300 text-[12px]">
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </small>
      </div>
    </div>
  );
}

export default Footer;
