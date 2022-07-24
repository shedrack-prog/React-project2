import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import "./Banner.css";

import { motion } from "framer-motion";

import bannerBg from "../assets/bannerbg.svg";

const Banner = () => {
  return (
    <div
      className="h-[100vh] w-full bg-[#f9f9fb] flex items-center justify-center z-10"
      id="home"
    >
      <div className="flex flex-col w-full p-7 md:flex-row xl:mt-[0rem] xl:mx-auto ">
        <div
          className="flex items-center justify-center gap-4 mb-12 
        md:flex-col md:mr-[6rem] transition-all p-1  xl:flex-[0.3]"
        >
          <div className="banner__icon cursor-pointer trasition-all  rounded-md  ">
            <a href="https://twitter.com/shedrackcoding" target="_blank">
              <AiOutlineTwitter size={27} className="text-[#6a69f5] " />
            </a>
          </div>
          <div className=" banner__icon cursor-pointer trasition-all  rounded-md ">
            <a
              href="https://www.facebook.com/shedrack.tobiloba.5/"
              target="_blank"
            >
              <FaFacebookSquare
                size={27}
                className="text-[#6a69f5] hover:border-t-[#6a69f5]"
              />
            </a>
          </div>
          <div className=" banner__icon cursor-pointer trasition-all  rounded-md ">
            <a
              href="https://www.linkedin.com/in/akinrefon-tobiloba-497410236/"
              target="_blank"
            >
              <FaLinkedin
                size={27}
                className="text-[#6a69f5] hover:border-t-[#6a69f5]"
              />
            </a>
          </div>
          <div className=" banner__icon cursor-pointer trasition-all  rounded-md ">
            <a
              href="https://www.instagram.com/shedrach___flame/"
              target="_blank"
            >
              <AiOutlineInstagram
                size={27}
                className="text-[#6a69f5] hover:border-t-[#6a69f5]"
              />
            </a>
          </div>
        </div>

        <div className=" flex-col items-center justify-center">
          <div className="banner__text flex items-center justify-center flex-col">
            <h1 className=" text-[27px] text-[#171717] md:text-[2.5rem] xl:text-[3rem]">
              i'm Shedrack Tobiloba
            </h1>
            <p
              className="text-[#c3c3c5] flex flex-col items-center 
            md:text-[18px] justify-center w-full text-[16px] xl:text-[20px]"
            >
              Software engineer and love to listen <br /> <span>to music </span>
            </p>
          </div>
          <div className="banner__image w-full h-1/2  mt-[5rem] xl:w-full">
            <img
              src={bannerBg}
              alt="image"
              className="svg md:w-full xl:h-[300px] xl:w-full xl:object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
