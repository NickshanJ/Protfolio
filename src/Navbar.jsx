import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./image/Logo.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center fixed w-full">
      <div className="flex justify-between w-full md:w-auto">
        <img className="w-52 h-20 ml-4" src={logo} alt="Logo" />
        <div
          className="flex items-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={30} />
        </div>
      </div>
      <div
        className={`flex-col z-50 space-y-4 mt-4 md:mt-0 md:flex md:flex-row md:space-x-24 md:items-center md:ml-auto font-stylish list-none ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li className="text-2xl mt-4 hover:text-[#d4af37]"><Link to="/">Home</Link></li>
        <li className="text-2xl hover:text-[#d4af37]"><Link to="/about">About</Link></li>
        <li className="text-2xl hover:text-[#d4af37]"><Link to="/skills">Skills</Link></li>
        <li className="text-2xl hover:text-[#d4af37]"><Link to="/projects">Projects</Link></li>
        <li className="text-2xl hover:text-[#d4af37]"><Link to="/contact">Contact</Link></li>
      </div>
    </div>
  );
}

export default Navbar;