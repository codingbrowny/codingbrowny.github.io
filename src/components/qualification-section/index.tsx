"use client";
import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { CgWorkAlt } from "react-icons/cg";
import { TbSchool } from "react-icons/tb";
import EducationComponent from "./education-view";
import ExperienceComponent from "./experience-view";
import CertificateComponent from "./certificate-view";
import { IconType } from "react-icons/lib";

interface TabButtonInterface {
  title: string;
  active: boolean;
  icon: IconType;
  onclick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const WorkComponent = ({
  org,
  role,
  date,
  location,
}: {
  org: string;
  role: string;
  date: string;
  location?: string;
}) => {
  return (
    <div className="relative work-data pb-3 lg:pb-5 grid grid-cols-[10px_max-content] gap-3 md:gap-5">
      <div className="relative h-full w-fit">
        <span className="inline-block data-dot w-3 h-3 rounded-full bg-primary hover:animate-ping"></span>
        <span className="w-[1px] data-line h-full bg-gradient-to-b from-primary block translate-x-[5px] -translate-y-2"></span>
      </div>
      <div className="transition-[width] w-full max-h-36 duration-300 work-component-content">
        <h2 className="text-primary-title font-semibold">{org}</h2>
        <h3 className="text-primary-text">{role}</h3>
        <span className="text-primary-lightText text-sm">{date}</span>
      </div>
    </div>
  );
};

const TabButton = ({ title, icon, onclick, active }: TabButtonInterface) => {
  return (
    <button
      role="button"
      className={`inline-flex lg:text-xl relative lg:cursor-default gap-1 md:gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:w-0 after:mr-auto hover:after:w-full after:bg-primary after:transition-[width] after:duration-300 md:after:hidden ${
        active ? "text-primary after:w-full" : "text-primary-text"
      } hover:text-primary transition-colors`}
      onClick={onclick}
    >
      <span className="text-2xl lg:text-3xl hidden md:block">{icon({})}</span>
      {title}
    </button>
  );
};

const Qualification = () => {
  const [activeTab, setActiveTab] = React.useState({
    edu: false,
    cert: false,
    work: true,
  });
  return (
    <div className="qualification-wrapper bg-gradient-to-r from-primary-body via-primary-input to-primary-body rounded-lg py-3 lg:p-5 lg:space-y-3">
      <div className="btn-wrapper space-x-5 md:space-x-8 lg:space-x-5 lg:grid lg:grid-cols-3">
        <TabButton
          title="Experience"
          icon={CgWorkAlt}
          active={activeTab.work}
          onclick={() => setActiveTab({ edu: false, work: true, cert: false })}
        />
        <TabButton
          title="Education"
          icon={TbSchool}
          active={activeTab.edu}
          onclick={() => setActiveTab({ edu: true, work: false, cert: false })}
        />
        <TabButton
          title="Certificate"
          icon={LiaCertificateSolid}
          active={activeTab.cert}
          onclick={() => setActiveTab({ edu: false, work: false, cert: true })}
        />
      </div>

      <div className="qualification-content w-full flex py-5 overflow-hidden lg:grid lg:grid-cols-3 lg:gap-5">
        <ExperienceComponent active={activeTab.work} />
        <EducationComponent active={activeTab.edu} />
        <CertificateComponent active={activeTab.cert} />
      </div>
    </div>
  );
};

export default Qualification;
