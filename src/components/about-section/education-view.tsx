import React from "react";
import { WorkComponent } from "./qualification";

const EducationComponent = ({ active }: { active: boolean }) => {
  return (
    <div
      id="education"
      className={`about-qualification-wrapper transition-all duration-300 overflow-hidden ${
        active && "active"
      }`}
    >
      <WorkComponent
        org="University of Energy and Natural Resources"
        role="Bsc. Computer Engineering"
        date="2017 - 2021"
      />
      <WorkComponent
        org="University of Energy and Natural Resources"
        role="Bsc. Computer Engineering"
        date="2017 - 2021"
      />
    </div>
  );
};

export default EducationComponent;
