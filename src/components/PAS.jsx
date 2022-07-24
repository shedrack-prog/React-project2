import React from "react";
// import "./PAS.css";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";

import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLongLeft } from "react-icons/cg";

import { IoLogoInstagram } from "react-icons/io";
import { TbBrandTwitter } from "react-icons/tb";
import { RiLinkedinLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";

const PAS = () => {
  return (
    <div
      className="pas flex items-center flex-col p-4 xl:mx-auto xl:w-[70%]"
      id="PAS"
    >
      <div className="pas__contents flex flex-col xl:mx-auto">
        <div className="pas__top flex items-center flex-col">
          <h1 className="pas__title text-2xl font-bold md:text-3xl">
            People Are <br />
            Saying...
          </h1>
          <div className="pas__topImage flex w-full px-3 justify-between mb-5 mt-8">
            <img
              src={person3}
              alt="just a person "
              className="w-[120px] h-[100px] rounded-full"
            />
            <img
              src={person5}
              alt="just a person"
              className="w-[120px] h-[100px] rounded-full"
            />
          </div>
        </div>

        <div className="pas__bottom flex items-center bg-white mt-4">
          <div className="pas__card w-full  flex items-center justify-center shadow-xl">
            <div className="bottom__container mt-7">
              <img
                src={person1}
                alt="just a random picture"
                className="bottom__image w-full"
              />
              <div className="pas__bottomDetails mt-3 p-2">
                <h3 className="bottomDetails-name text-xl font-semibold mb-1">
                  Ekojode Omah
                </h3>
                <p className="person__details text-gray-900 text-xl">
                  CEO, <span className="details__span">we're Designer</span>
                </p>
                <p className="details__texts text-gray-600 mt-2">
                  okay so this is a testmonial you can re-write later, this is a
                  good web developer and you can count on him so dont worry...{" "}
                  <span className="read-more">Read More</span>
                </p>
                {/* butons */}
                <div className="buttons flex gap-3 mt-2 justify-between w-full px-6 mb-4 text-3xl">
                  <CgArrowLongLeft
                    className="previous cursor-pointer text-gray-900   "
                    size={30}
                  />

                  <CgArrowLongRight
                    className="next-btn cursor-pointer  text-gray-900 "
                    size={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact page */}
      <div
        className="contact flex items-center mt-8 flex-col w-full"
        id="contact"
      >
        <h1 className="contact__title text-2xl mb-3">Contact Me...</h1>
        <div
          className="contact__top flex gap-9 w-full items-center justify-center h-[100px]
        rounded-tl-md rounded-tr-lg rounded-bl-md rounded-br-xl bg-[#4c4bef] text-white"
        >
          <div className="hello hidden">Say Hi</div>
          <div className="email text-[#f6f6fe]">Usheddy07@gmail.com</div>
          <div className="contact__button py-2 px-3 bg-[#f9f9fb] rounded-md">
            <a href="mailto:usheddy07@gmail.com" className="text-[#4c4bef]">
              Say Hello
            </a>
          </div>
        </div>

        <div className="contact__bottom mt-10">
          <ul className="flex items-center gap-3 mb-4">
            <li className="text-xl cursor-pointer text-gray-500">
              {" "}
              <a href="#home">Home</a>{" "}
            </li>
            <li className="text-xl cursor-pointer text-gray-500">
              {" "}
              <a href="#about">About Me</a>{" "}
            </li>
            <li className="text-xl cursor-pointer text-gray-500">
              {" "}
              <a href="#projects">Projects</a>{" "}
            </li>
          </ul>

          <div className="contact__social-icons flex gap-5  items-center justify-center">
            <div className="social__icon">
              <a
                href="https://www.facebook.com/shedrack.tobiloba.5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-500 hover:text-[#4c4bef]"
              >
                <FiFacebook />
              </a>
            </div>
            <div className="social__icon">
              <a
                href="https://www.instagram.com/shedrach___flame/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-500 hover:text-[#4c4bef]"
              >
                <IoLogoInstagram />
              </a>
            </div>
            <div className="social__icon">
              <a
                href="https://twitter.com/shedrackcoding"
                target="_blank"
                className="text-2xl text-gray-500 hover:text-[#4c4bef]"
              >
                <TbBrandTwitter />
              </a>
            </div>
            <div className="social__icon">
              <a
                href="https://www.linkedin.com/in/akinrefon-tobiloba-497410236/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-500 hover:text-[#4c4bef]"
              >
                <RiLinkedinLine />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-3 text-gray-500">All rights Reserved Shedrack T.</p>
      </div>
    </div>
  );
};

export default PAS;
