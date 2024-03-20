"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { MdOutlineFileDownload } from "react-icons/md";
const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer.",
        "Open Source Contributor.",
        "Competitive Programmer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      // cursorChar:"_",
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="m-3 my-20 mt-32">
    <div className="xls:mt-52 mt-7 max-w-7xl mx-auto">

      <div className="max-w-6xl flex flex-wrap xls:flex-nowrap mx-auto gap-y-1 items-center justify-around xls:my-40 m-4 ">
        <div className="flex flex-col justify-between xls:items-start  gap-y-3">
          <div className="text-xl xls:text-3xl text-white font-popins font-bold text-center xls:text-start ml-8 xls:ml-0">
            Hi, I am <span className="text-color-4">Vinamra Saurav</span> 👋
          </div>
          <div className="my-3 xls:my-6 flex items-center justify-center">
            <div className="text-center xls:text-start">
              <span
                className="text-2xl xls:text-4xl text-white font-popins "
                ref={el}
              ></span>
            </div>
          </div>
          <div className="text-white text-lg xls:text-xl text-center xls:text-start mx-3 xls:mx-0 xls:w-auto">
            I craft <span style={{ color: "yellow" }}>end-to-end</span>{" "}
            solutions that resonate with users, creating products they
            <span className="text-green-500"> truly enjoy ❤️</span>.
          </div>
          <a href='/assets/Vinamra_Saurav_Resume_2026GRAD.pdf' className="px-2 py-1 xls:py-2 bg-white text-color-1 rounded-md mt-6 font-[500] font-popins flex justify-center items-center gap-2 w-[200px] xls:w-[250px] mx-auto  xls:mx-0 hover:cursor-pointer text-lg xls:text-xl hover:text-color-5 hover:bg-color-2  " download="Vinamra_Saurav_Resume_2026GRAD">
            <MdOutlineFileDownload className="xls:text-2xl text-xl" />
            Download Resume
          </a>
        </div>
        <div className="flex justify-center items-center ml-10 xls:h-96 xls:w-96 h-72 w-72">
          <Image
            src="/images/hero.svg"
            height={24}
            width={100}
            className="xls:h-96 xls:w-96 h-72 w-72 scale-x-[-1]-"
            alt="hero-img"
            priority
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
