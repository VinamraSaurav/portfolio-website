import React from "react";
import SkillSection from "./SkillSection";
import experienceData from "@/constants/experienceData";
import ExperienceCard from "./ExperienceCard";


const Experience = () => {
  return (
    <div className="m-3 my-20 mt-24 xls:mt-32">
      <div className="max-w-7xl mx-auto">
      <div className="text-color-1 bg-white w-fit px-3 py-1 font-bold font-popins flex justify-center rounded-md text-2xl mb:10 xls:mb-10 mx-auto xls:mt-40">
            EXPERIENCE
          </div>
        <div className="max-w-6xl mx-auto my-12">
          {experienceData.map((experience,i)=><ExperienceCard key={i} data={experience}/>)}
        </div>
        <div className="text-color-1 bg-white w-fit px-3 py-1 font-bold font-popins flex justify-center rounded-md text-2xl mx-auto xls:mt-36">
            PROFFESIONAL SKILLSET
          </div>
        <SkillSection />
      </div>
    </div>
  );
};

export default Experience;
