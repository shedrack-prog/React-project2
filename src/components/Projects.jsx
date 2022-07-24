import React from "react";
import "./Projects.css";

import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";

import img from "../assets/netflix.jpg";

const Projects = () => {
  return (
    <div
      className="casestudy flex items-center justify-center bg-[#f9f9fb] p-4 h-full"
      id="projects"
    >
      <div className="case__contents flex flex-col">
        <div className="case__texts flex items-center justify-center flex-col px-3">
          <h1 className="case__title text-2xl ">Projects...</h1>
          <p className="case__description text-center text-gray-500 mb-2">
            this is just some random text and you can change them too
          </p>
        </div>

        <div
          className="case__bottom mt-1 w-full h-[230px] relative flex items-center rounded-tr-md rounded-tl-md
           rounded-bl-md rounded-br-xl "
        >
          <img
            src={img}
            alt="image"
            className="case__bottomImage  w-full h-full rounded-tr-md rounded-tl-md
            rounded-bl-md rounded-br-xl object-cover"
          />
          <div
            className="case__bottomInfo absolute left-0 right-0 bottom-0 flex items-center 
          h-[70px] bg-[#4c4bef] justify-between px-3 rounded-bl-md rounded-br-xl text-white"
          >
            <div className="case__changer flex flex-col items-center">
              <p className="mt-1 text-xs"> 1 of 7</p>
              <div className="buttons flex gap-3">
                <CgArrowLongLeft className="text-gray-300" size={26} />

                <CgArrowLongRight className="next" size={26} />
              </div>
            </div>
            <div className="case__project">
              <p className="bold-text text-xl">Project</p>
              <p className="small-text text-md text-gray-100">Netflix Clone</p>
            </div>
            <div className="case__idea hidden md:flex md:flex-col">
              <p className="bold-text ">Idea</p>
              <p className="small-text">Movies</p>
            </div>
            <div className="case__button ">
              <a
                href="#"
                className="py-3 px-2 bg-[#6a6ff5] cursor-pointer rounded-md"
              >
                Full Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
