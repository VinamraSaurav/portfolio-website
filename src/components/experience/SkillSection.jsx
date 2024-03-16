import React from "react";
import SkillCard from "./SkillCard";
import skillData from "@/constants/skillSet";

const SkillSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {skillData.map((skill) => (
        <div key={skill.id}>
        <div className="text-3xl text-white font-popins text-center font-bold mt-16 mb-8">{skill.title}</div>
        <div className="flex flex-wrap justify-center  max-w-6xl mx-auto">
        {skill.cards.map((card,i)=>(<SkillCard key={i} card={card} />))}
        </div>
        </div>
      ))}  
    </div>
  );
};

export default SkillSection;
