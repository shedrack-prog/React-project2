import React from "react";
// import "./WhyMe.css";
import img from "../assets/whitebg2.jpg";

import { CgRecord } from "react-icons/cg";
import { CgCheckO } from "react-icons/cg";
import { motion } from "framer-motion";
const WhyMe = () => {
  return (
    <div className="whyme flex items-center p-3" id="whyme  ">
      <div
        className="whyme__contents flex flex-col items-center 
      md:mt-[5rem] md:mx-auto justify-center "
      >
        <div className="whyme__details flex flex-col items-center">
          <div className="details__text flex flex-col items-center justify-center">
            <h1 className="why-h1 text-2xl mb-2 md:text-3xl">Why Me ?</h1>
            <p className="text-gray-500 text-center text-md">
              This is a random text so you can change it <br /> later whenever
              you like
            </p>
          </div>
          <div className="md:flex md:gap-4">
            <div className="details__item flex justify-between w-full mt-4">
              <CgCheckO className="text-[#4c4bef] text-xl mr-7 mt-1 " />
              <div className="item__contents flex flex-col">
                <p className="text-xl">Creative Idea</p>
                <ul className="flex flex-col gap-2 mt-4">
                  <li className="flex items-center text-md text-gray-500 gap-1">
                    <CgRecord className="check__icon text-[#4c4bef]" /> Find
                    Problems
                  </li>
                  <li className="flex items-center text-md text-gray-500 gap-1">
                    <CgRecord className="check__icon text-[#4c4bef]" /> Research
                    On Problems
                  </li>
                  <li className="flex items-center text-md text-gray-500 gap-1">
                    <CgRecord className="check__icon text-[#4c4bef]" /> Research
                    On Problems
                  </li>
                </ul>
              </div>
            </div>

            <div className="details__item flex justify-between  w-full mt-4 md:mr-2">
              <CgCheckO className="text-[#4c4bef] text-xl mr-7 mt-1" />
              <div className="item__contents flex flex-col">
                <p className="text-xl">Problem Solver</p>
                <ul className="flex flex-col gap-2 mt-4">
                  <li className="flex items-center text-md text-gray-500 gap-1">
                    <CgRecord className="check__icon text-[#4c4bef]" /> Find
                    Problems
                  </li>
                  <li className="flex items-center text-md text-gray-500 gap-1">
                    <CgRecord className="check__icon text-[#4c4bef]" /> Research
                    On Problems
                  </li>
                  <li className="flex items-center text-md text-gray-500 gap-1">
                    <CgRecord className="check__icon text-[#4c4bef]" /> Research
                    On Problems
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CgRecord */}
          {/* CgCheckO */}
        </div>

        <div className="whyme__image w-full p-1 mt-4 rounded-br-lg md:h-[500px] md:mt-9">
          <img
            src={img}
            alt="image"
            className="whyme__img w-full h-[60%] object-cover rounded-br-lg md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
