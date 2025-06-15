import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import VehicleRental from "./image/VehicleRental.png";
import MoviesSearch from "./image/MoviesSearch.png";

const projects = [
  {
    url: "https://online-vehicle-rental.netlify.app/",
    img: VehicleRental,
    alt: "Vehicle Rental Service",
    text: "Online Vehicle Rental Service",
    description: "This is a brief description of the Online Vehicle Rental Service.",
    skills: ["HTML", "JavaScript", "React", "Node", "MongoDB"],
    codeLink: "https://github.com/example/vehicle-rental-code",
  },
  {
    url: "https://moviesearch00.netlify.app/",
    img: MoviesSearch,
    alt: "Movies Search: Your Movie Journey Starts Here!",
    text: "Movies Search: Your Movie Journey Starts Here!",
    description: "This is a brief description of the Movie Search application.",
    skills: ["HTML", "JavaScript", "React", "Node", "MongoDB"],
    codeLink: "https://github.com/example/movie-search-code",
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

function Projects() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-stylish p-10">
      <h2 className="text-4xl font-semibold mb-8 mt-64 md:mt-28 text-center">
        My Projects
      </h2>

      <Carousel
        ref={carouselRef}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="px-4"
        arrows={false}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 rounded-lg p-4 transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => window.open(project.url, "_blank")} 
          >
            <img src={project.img} alt={project.alt} className="rounded-lg h-50 object-cover mb-4" />

            <p className="text-center font-semibold text-xl mb-4">
              {project.text}
            </p>

            {/* Project details card */}
            <div className="bg-gray-900 p-4 rounded-md">
              <p className="mb-2">{project.description}</p>
              <ul className="flex gap-2 mb-4">
                {project.skills.map((skill, idx) => (
                    <li key={idx} className="bg-gray-700 px-2 py-1 rounded-md">
                    {skill}
                    </li>
                ))}
              </ul>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-semibold"
              >
                View Code on GitHub
              </a>
            </div>

          </div>
        ))}
      </Carousel>

      <div className="flex justify-center mt-8">
        <button
          className="w-12 h-12 bg-gray-800 rounded-full mx-4 hover:bg-[#d4af37] shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-50 text-2xl" />
        </button>
        <button
          className="w-12 h-12 bg-gray-800 rounded-full mx-4 hover:bg-[#d4af37] shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-50 text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Projects;