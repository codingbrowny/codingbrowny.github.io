import React from "react";
import { WorkComponent } from ".";
import { CertificateData } from "@/utils/vendor";

const CertificateComponent = ({ active }: { active: boolean }) => {
  return (
    <div
      id="certificate"
      className={`about-qualification-wrapper transition-all duration-300 overflow-hidden lg:w-full ${
        active && "active"
      }`}
    >
      {CertificateData.map((_, i)=> <WorkComponent key={i} org={_.role} role={_.org} date={_.date} />)}
    </div>
  );
};

export default CertificateComponent;
