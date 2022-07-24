import React, { useEffect, useState } from "react";
import "./Header.css";

import { AiOutlineBars } from "react-icons/ai";
import { BsArrow90DegRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
import { click } from "@testing-library/user-event/dist/click";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [selected, setSelected] = useState(0);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div
      className={`${
        scroll && "header__bg"
      } w-full h-[80px]  flex items-center bg-transparent z-5 fixed top-0 right-0 left-0 p-3 pt-[1.8rem] md:pt-[1rem]`}
    >
      <div
        className={`flex items-center justify-between w-full h-full px-5 
         header  ${scroll && "header__black"}`}
      >
        <div className=" text-2xl text-[#161616] cursor-pointer ">
          <a href="#home">Sheddy</a>
        </div>

        <div className="hidden md:flex md:w-full   items-center justify-center   mr-8 ">
          <ul className="flex items-center gap-5">
            {["home", "about", "projects", "contact"].map((item, index) => (
              <li
                onClick={() => setSelected(index)}
                className="link uppercase text-md flex flex-col items-center justify-center"
                key={`${index}`}
              >
                <div
                  className={`${
                    selected == index && "active"
                  } circle h-[5px] w-[5px] rounded-full bg-transparent transition-all`}
                />
                <a className={` links`} href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" hidden mr-2 bg-[#6a69f5] py-2 px-[6px] rounded-lg text-white justify-center cursor-pointer  md:flex items-center w-[8rem]">
          <a href="mailto:usheddy07@gmail.com">Hire Me</a>
        </div>

        <div className="md:hidden cursor-pointer" onClick={() => setOpen(true)}>
          <AiOutlineBars size={27} className="text-[#161616]" />
        </div>
        {open && (
          <div
            className="mobile-menu absolute z-40 top-0 right-0 left-0 h-[50vh] w-[100vw] rounded-br-lg
           rounded-bl-lg shadow-lg bg-white"
          >
            <BsArrow90DegRight
              className="fixed right-[3rem] top-5 text-xl"
              onClick={() => setOpen(false)}
            />
            <ul className="flex items-center flex-col justify-center gap-5 mt-[4rem]">
              {["home", "about", "projects", "contact"].map((item, index) => (
                <li
                  onClick={() => setOpen(false)}
                  className="link-mobile uppercase text-md flex flex-col  items-center justify-center"
                  key={`${index}`}
                >
                  <div
                    className={`
                      circle-mobile h-[5px] w-[5px] rounded-full bg-transparent transition-all`}
                  />
                  <a className={` links`} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
