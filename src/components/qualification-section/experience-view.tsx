"use client";
import React from "react";
import { WorkComponent } from ".";
import { WorkExperience } from "@/utils/vendor";

const ExperienceComponent = ({ active }: { active: boolean }) => {
  return (
    <div
      id="experience"
      className={`about-qualification-wrapper transition-all duration-300 overflow-hidden lg:w-full ${
        active && "active"
      }`}
    >
      {WorkExperience.map((_, i)=> <WorkComponent key={i} org={_.org} role={_.role} date={_.date}  />)}
    </div>
  );
};

export default ExperienceComponent;
