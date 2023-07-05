"use client"
import React from "react";
import { WorkComponent } from "./qualification";

const ExperienceComponent = ({ active }: { active: boolean }) => {
  return (
    <div
      id="experience"
      className={`about-qualification-wrapper transition-all duration-300 overflow-hidden ${
        active && "active"
      }`}
    >
      <WorkComponent
        org="Erogana"
        role="Frontend Developer"
        date="2022 - 2023"
      />
    </div>
  );
};

export default ExperienceComponent;
