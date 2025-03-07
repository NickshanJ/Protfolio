import React from "react";
import profileImage from "./image/Nickshan.jpg";
import resumePDF from "./assets/Nickshan Resume.pdf";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaDownload } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black p-10">
      {/* Left side image */}
      <div className="w-full md:w-[40%] flex justify-center mt-20 md:mt-0 mb-10 md:mb-0">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full shadow-lg w-[60%] md:w-1/2 aspect-auto border-2 border-[#fee71539]"
        />
      </div>
      {/* Right side text */}
      <div className="w-full md:w-[60%] text-center md:text-left text-white space-y-6">
        <h3 className="text-[33px] text-[#FEE715FF] font-stylish">Hello! I'm Nickshan</h3>
        <p className="text-[22px] font-stylish">
          I'm a passionate Full Stack Developer with a talent for turning ideas into engaging digital experiences. 
          With a passion for both front-end and back-end development, I take delight in developing aesthetically 
          beautiful and functioning websites that appeal to visitors. With knowledge in HTML5, CSS3, JavaScript, 
          Tailwind, React.js, Node.js, and Git, I am eager to contribute new ideas and enthusiasm to any team. 
          What I enjoy most about web development is the combination of creativity and rationality required. 
          Every step in the process provides an opportunity to learn and grow. I am passionate about staying current 
          with industry developments and constantly developing my skills. Feel free to connect with me.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl flex text-black bg-white px-2 py-1 rounded-[100px] hover:bg-[#FEE715FF] hover:scale-110 transition-transform items-center font-stylish"
          >
            <FaDownload className="mr-2" /> CV
          </a>
          <a
            href="https://www.linkedin.com/in/nickshanj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl flex items-center"
          >
            <FaLinkedin className="mr-2 text-[25px] hover:scale-110 transition-transform hover:text-blue-600" />
          </a>
          <a
            href="mailto:nickshan001@gmail.com"
            className="text-xl flex items-center"
          >
            <FaEnvelope className="mr-2 text-[25px] hover:scale-110 transition-transform hover:text-red-600" />
          </a>
          <a
            href="https://github.com/NickshanJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl flex items-center"
          >
            <FaGithub className="mr-2 text-[25px] hover:scale-110 transition-transform hover:text-[#FEE715FF]" />
          </a>
          <a
            href="https://wa.me/7358176388"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl flex items-center"
          >
            <FaWhatsapp className="mr-2 text-[25px] hover:scale-110 transition-transform hover:text-green-400" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;