import React from "react";

import { BsEyeSlash } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import { motion } from "framer-motion";

const lists = [
  {
    id: 1,
    title: "Web Dev.",
    desc: "this is another random text right here so type here also",
  },
  {
    id: 2,
    title: "Software Eng..",
    desc: "this is another random text right here so type here also",
  },
  {
    id: 3,
    title: "Mobile App Dev.",
    desc: "this is another random text right here so type here also",
  },
];

const Work = () => {
  return (
    <div className="flex items-center justify-center bg-[#f9f9fb]" id="about">
      <div className=" flex flex-col w-full p-4">
        <div className=" flex flex-col items-start justify-center xl:px-[7rem]">
          <h2 className=" text-lg p-2">Work With:</h2>
          <div className=" flex items-center justify-center w-full py-2  flex-wrap gap-3">
            <div className=" w-[100px] h-70px]">
              <img src={bg4} alt="" className="work__img" />
            </div>

            <div className="  w-[100px] h-70px]">
              <img src={bg2} alt="" className=" w-full h-full object-cover" />
            </div>

            <div className="  w-[100px] h-70px]">
              <img src={bg4} alt="" className=" w-full h-full object-cover " />
            </div>

            <div className="  w-[100px] h-70px]">
              <img src={bg3} alt="" className=" w-full h-full object-cover" />
            </div>

            <div className="  w-[100px] h-70px]">
              <img src={bg4} alt="" className=" w-full h-full object-cover" />
            </div>

            <div className="  w-[100px] h-70px]">
              <img src={bg4} alt="" className=" w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center flex-col xl:mt-[3rem]">
          <div className=" flex items-center justify-center flex-col w-full text-sm">
            <h1 className="text-2xl mt-3 mb-3 text-[#171717] xl:text-[3rem] ">
              Specializing In
            </h1>
            <div className="flex items-center justify-center text-[#171717]">
              <p className="items-center flex justify-center flex-col text-center xl:text-[20px] xl:mt-2">
                this is just some random text so therefore{" "}
                <span>
                  you can type something about <br /> yourself right here
                </span>
              </p>
            </div>
          </div>
          <div className="h-[3px] w-full bg-gray-300 mt-6 mb-3" />

          <div className=" mt-5 flex gap-4 flex-wrap items-center justify-center w-full px-2 md:w-[80%] xl:w-[65%] xl:gap-7">
            {lists.map((item) => (
              <div
                key={item.id}
                className="w-full h-[300px] px-3  flex flex-col items-center justify-center cursor-pointer
              pt-4 hover:bg-[#4c4bef] hover:text-white transition-all p-4 shadow-lg rounded-br-lg"
              >
                <h3 className="  text-2xl mb-3 text-center self-center">
                  {item.title}
                </h3>
                <p className="text-md   text-center ">{item.desc}</p>
                <div className="flex gap-6  text-center mt-8">
                  <div className=" cursor-pointer">
                    <BsGithub size={24} />
                  </div>
                  <div className=" cursor-pointer">
                    <BsEyeSlash size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
