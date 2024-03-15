import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="m-3">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-6xl flex flex-wrap xls:flex-nowrap mx-auto gap-y-1 items-center justify-around xls:my-40 my-12 m-4 gap-x-10">
        <div className="flex flex-col justify-between xls:items-start gap-y-5 xls:gap-y-7 m-4 xls:m-0">
          <div className="text-color-1 bg-white w-[150px] font-bold font-popins flex justify-center rounded-md text-2xl">
            ABOUT ME
          </div>
          <div className="text-white font-[500] font-popins text-2xl xls:text-4xl xls:my-2">
            LET ME INTRODUCE MYSELF
          </div>
          <div className="text-md font-popins text-white max-w-3xl">
            <div>
              My expertise spans languages such as C++, C, Python, JavaScript,
              React, Next Js, HTML, CSS, and SQL. With touch typing skills and a
              typing speed of around 80+ words per minute, I am passionate about
              exploring and applying technology to solve real-world problems.{" "}
            </div>
            <div>
              My field of interest includes building new Web Technologies,
              developing applications, and creating products. 🚀
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ml-5 xls:ml-0 hiddenj xls:h-96 xls:w-96 h-72 w-72">
          <Image
            src="/images/about.svg"
            height={24}
            width={100}
            alt="about"
            priority
            className="xls:h-96 xls:w-96 h-72 w-72"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
