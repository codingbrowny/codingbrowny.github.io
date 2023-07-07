import React from "react";
import { WorkComponent } from ".";
import { EducationData } from "@/utils/vendor";

const EducationComponent = ({ active }: { active: boolean }) => {
  return (
    <div
      id="education"
      className={`about-qualification-wrapper transition-all duration-300 overflow-hidden lg:w-full ${
        active && "active"
      }`}
    >
      {EducationData.map((_, i) => (
        <WorkComponent key={i} org={_.school} role={_.course} date={_.date} />
      ))}
    </div>
  );
};

export default EducationComponent;
