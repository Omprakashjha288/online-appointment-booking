import React from "react";
import { assets } from "../Imgg/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        {/* ---------Left Section--------- */}
        <div>
            <img className="mb-5 w-40 " src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, atque autem sequi odio eaque deserunt! Qui illum fugit distinctio aliquid, eius odit. Dolorum esse sint odio ipsa et, eum quaerat!</p>

        </div>
        {/* ---------Center Section--------- */}
        <div>
            <p className="text-xl mb-5 font-medium">Company</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* ---------Right Section--------- */}
        <div>
            <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+1-212-456-7890</li>
                <li>omprakashjha363@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* --------Copyright Text--------- */}
        <hr className="border-gray-800"/>
        <p className="text-sm py-5 text-center">Copyright 2024@ Prescripto - All right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
