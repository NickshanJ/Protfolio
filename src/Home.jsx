import React from "react";
import backgroundImage from "./image/HomeBG.jpg";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import DynamicText from "./DynamicText";
import { Link } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-start text-white pl-10 md:pl-40"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <h1 className="text-[33px] md:text-[65px] font-bold mb-4 fill-text font-stylish">Hi, I'm J. Nickshan</h1>
      <p className="text-[25px] md:text-3xl mb-8 font-stylish">
        I'm a <DynamicText texts={["Front-End Developer", "MERN Full Stack Developer"]} typingSpeed={50} pauseDuration={1500} />
      </p>
      {/* <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/nickshanj/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform hover:text-blue-600"
        >
          <FaLinkedin className="text-[20px] md:text-[30px]" />
        </a>
        <a
          href="https://github.com/NickshanJ"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform hover:text-[#FEE715FF]"
        >
          <FaGithub className="text-[20px] md:text-[30px]" />
        </a>
        <a
          href="mailto:nickshan001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform hover:text-red-600"
        >
          <FaEnvelope className="text-[20px] md:text-[30px]" />
        </a>
        <a
          href="https://wa.me/7358176388"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform hover:text-green-400"
        >
          <FaWhatsapp className="text-[20px] md:text-[30px]" />
        </a>
      </div> */}
      <button className="mt-8 bg-[#FEE715FF] text-black px-2 py-1 md:px-4 md:py-2 rounded-[30px] hover:scale-110 transition-transform font-trade-winds">
        <Link to="/contact">CONNECT</Link>
      </button>
    </div>
  );
}

export default HomePage;