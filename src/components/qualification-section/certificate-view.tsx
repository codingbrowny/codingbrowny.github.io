import React from "react";
import { WorkComponent } from ".";

const CertificateComponent = ({ active }: { active: boolean }) => {
  return (
    <div
      id="certificate"
      className={`about-qualification-wrapper transition-all duration-300 overflow-hidden lg:w-full ${
        active && "active"
      }`}
    >
      <WorkComponent
        org="University of Energy and Natural Resources"
        role="Bsc. Computer Engineering"
        date="2017 - 2021"
      />
    </div>
  );
};

export default CertificateComponent;
